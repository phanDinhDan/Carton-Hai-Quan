import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { BlogGrid } from '../../components/Cards/BlogGrid'
import { HeroBanner } from '../../components/Hero/HeroBanner'
import { blogPosts } from '../../data/blog'
import { Link } from 'react-router-dom'
import { useIsMobile } from '../../hooks/useIsMobile'

export function BlogPage() {
  const isMobile = useIsMobile(767)
  const [activeCategory, setActiveCategory] = useState('Tất cả')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const categories = ['Tất cả', 'Xu hướng', 'Công nghệ', 'Thị trường', 'Giải pháp']

  // Filter posts based on category
  const filteredPosts = activeCategory === 'Tất cả' 
    ? blogPosts 
    : blogPosts.filter(p => p.categoryLabel === activeCategory)

  // Featured post logic
  const featuredPost = blogPosts[0]
  const otherPosts = filteredPosts.filter(p => p.to !== featuredPost.to || activeCategory !== 'Tất cả')

  return (
    <>
      <Helmet>
        <title>Tin tức & Xu hướng - Hải Quân Packaging</title>
      </Helmet>

      <HeroBanner
        title="Tin tức chuyên ngành"
        description="Cập nhật những chuyển động mới nhất về công nghệ và giải pháp bao bì bền vững"
        backgroundImage="https://res.cloudinary.com/zq7yx874/image/upload/v1790234795/haiquan_web/Hero-Image-1-1.webp"
        videoUrl="/video/bannerBG.mp4"
        align="center"
      />

      {/* COMPACT SEGMENTED SLIDER FILTER - PURE CSS OVERRIDE */}
      <section style={{ 
          backgroundColor: isMobile ? 'transparent' : '#ffffff', 
          position: isMobile ? 'relative' : 'sticky', 
          top: '85px', 
          zIndex: 100,
          padding: isMobile ? '25px 0 0 0' : '15px 0', 
          borderBottom: isMobile ? 'none' : '1px solid rgba(0,0,0,0.04)',
          boxShadow: isMobile ? 'none' : '0 5px 15px rgba(0,0,0,0.02)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: isMobile ? 'flex-start' : 'center' }}>
            {isMobile ? (
              /* MOBILE: TINH GỌN VỚI ICON LỌC BÊN TRÁI & CUSTOM DROPDOWN */
              <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                <div 
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: '#ffffff',
                    padding: '8px 18px',
                    borderRadius: '99px',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    gap: '8px',
                    cursor: 'pointer'
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2c787a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#10355f', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {activeCategory}
                  </span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', transform: isFilterOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
                
                {/* CUSTOM PREMIUM DROPDOWN */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 10px)',
                    left: 0,
                    width: '180px',
                    background: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0 15px 40px rgba(0, 38, 100, 0.12)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    overflow: 'hidden',
                    zIndex: 1000,
                    opacity: isFilterOpen ? 1 : 0,
                    visibility: isFilterOpen ? 'visible' : 'hidden',
                    transform: isFilterOpen ? 'translateY(0)' : 'translateY(-10px)',
                    transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)'
                  }}
                >
                  {categories.map((cat, i) => (
                    <div 
                      key={cat}
                      onClick={() => { setActiveCategory(cat); setIsFilterOpen(false); }}
                      style={{
                        padding: '14px 20px',
                        fontSize: '13px',
                        fontWeight: activeCategory === cat ? 800 : 600,
                        color: activeCategory === cat ? '#2c787a' : '#555',
                        background: activeCategory === cat ? '#f4f9f9' : '#fff',
                        cursor: 'pointer',
                        borderBottom: i === categories.length - 1 ? 'none' : '1px solid #f5f5f5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'background 0.2s ease'
                      }}
                    >
                      {cat}
                      {activeCategory === cat && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* DESKTOP: THANH TRƯỢT CHUYÊN NGHIỆP - TỶ LỆ VÀNG */
              <div style={{ 
                  display: 'inline-flex', 
                  background: '#f2f4f7', 
                  padding: '6px', 
                  borderRadius: '99px',
                  border: '1px solid #e5e7eb',
                  position: 'relative'
              }}>
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      style={{
                          position: 'relative',
                          zIndex: 2,
                          width: '100px', // ĐỘ RỘNG NHỎ HƠN ĐỂ THANH TRƯỢT GỌN LẠI
                          height: '34px', // CHIỀU CAO TINH TẾ
                          fontSize: '11px',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          letterSpacing: '0.4px',
                          whiteSpace: 'nowrap',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: activeCategory === cat ? '#ffffff' : '#666',
                          transition: 'color 0.4s ease',
                      }}
                    >
                      {cat}
                    </div>
                  ))}
                  
                  {/* THANH TRƯỢT (SLIDER) CAO CẤP */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '6px',
                      bottom: '6px',
                      left: `calc(6px + ${categories.indexOf(activeCategory) * 100}px)`,
                      width: '100px',
                      background: 'linear-gradient(90deg, #10355f 0%, #2c787a 100%)',
                      borderRadius: '99px',
                      zIndex: 1,
                      transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                      boxShadow: '0 4px 15px rgba(16, 53, 95, 0.25)',
                      pointerEvents: 'none'
                    }} 
                  />
              </div>
            )}
        </div>
      </section>

      <section style={{ backgroundColor: '#f9fbfd', padding: '60px 0 100px' }}>
        <div className="container">
          
          {/* FEATURED POST SECTION (Pure editorial layout) */}
          {activeCategory === 'Tất cả' && (
            <div className="featured-news-wrapper" style={{ marginBottom: '60px' }}>
              <Link to={featuredPost.to} style={{ textDecoration: 'none' }}>
                <div style={{ 
                    display: 'flex', 
                    borderRadius: '30px', 
                    overflow: 'hidden', 
                    background: '#fff', 
                    boxShadow: '0 25px 70px rgba(0,45,114,0.08)',
                    minHeight: '450px',
                    border: '1px solid rgba(0,0,0,0.02)'
                }} className="featured-card-flex">
                   <div style={{ flex: '1.3', overflow: 'hidden' }}>
                      <img 
                        src={featuredPost.imageSrc} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        alt="featured" 
                      />
                   </div>
                   <div style={{ flex: '1', padding: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <span style={{ 
                        display: 'inline-block', 
                        padding: '5px 15px', 
                        background: 'rgba(44, 120, 122, 0.1)', 
                        color: '#2c787a', 
                        borderRadius: 99, 
                        fontSize: '11px', 
                        fontWeight: 800, 
                        textTransform: 'uppercase',
                        marginBottom: '15px' 
                      }}>
                        TIN TIÊU ĐIỂM
                      </span>
                      <h2 style={{ fontSize: '32px', color: '#002d72', fontWeight: 900, lineHeight: 1.2, marginBottom: '20px' }}>
                        {featuredPost.title}
                      </h2>
                      <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.7, marginBottom: '30px' }}>
                        {featuredPost.excerpt}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', color: '#10355f', fontWeight: 800, fontSize: '14px' }}>
                         ĐỌC BÀI VIẾT TIÊU ĐIỂM 
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ marginLeft: '10px' }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                   </div>
                </div>
              </Link>
            </div>
          )}

          {/* DYNAMIC NEWS GRID */}
          <div style={{ marginBottom: '40px' }}>
               <h4 style={{ color: '#002d72', fontSize: '17px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ width: '25px', height: '3px', background: '#2c787a', marginRight: '15px' }} />
                  {activeCategory === 'Tất cả' ? 'Các bài viết mới nhất' : `Kết quả: ${activeCategory}`}
                  <span style={{ width: '25px', height: '3px', background: '#2c787a', marginLeft: '15px' }} />
               </h4>
               <BlogGrid posts={otherPosts} columns={3} />
          </div>

          {!otherPosts.length && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
               <h3 style={{ color: '#aaa', fontWeight: 600 }}>Hiện chưa có bài viết nào trong mục này.</h3>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .featured-news-wrapper { transition: all 0.5s ease; }
        .featured-news-wrapper:hover { transform: translateY(-8px); }
        .featured-news-wrapper:hover h2 { color: #2c787a !important; }

        @media (max-width: 900px) {
          .featured-card-flex { flex-direction: column !important; min-height: auto !important; }
          .featured-card-flex div:first-child { height: 260px !important; }
          .featured-card-flex div:last-child { padding: 30px !important; }
          .container { padding: 0 15px !important; }
        }
      `}</style>
    </>
  )
}
