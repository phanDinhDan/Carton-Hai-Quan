import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../../../data/blog'
import { HeroBanner } from '../../../components/Hero/HeroBanner'

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.to === `/blog/${slug}`)

  if (!post) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Không tìm thấy bài viết</h2>
        <Link to="/blog" className="button primary" style={{ marginTop: 20 }}>
          Quay lại Blog
        </Link>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Bao bì Hải Quân</title>
      </Helmet>
      
      <HeroBanner
        title={post.title}
        backgroundImage={post.imageSrc}
        align="center"
      />

      <section className="section" style={{ paddingTop: 60, paddingBottom: 80 }}>
        <div className="container">
          <div className="row align-center">
            <div className="col large-9 medium-10 small-12">
              <div className="post-content bg-white p-5 rounded shadow-sm" style={{ padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', backgroundColor: '#fff', marginTop: '-100px', position: 'relative', zIndex: 10 }}>
                <div className="post-meta mb-4" style={{ marginBottom: '25px', color: '#888', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', borderBottom: '1px solid #f1f1f1', paddingBottom: '15px' }}>
                  <span className="date" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    03/04/2024
                  </span>
                  <span className="author" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    ADMIN
                  </span>
                  <span className="views" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M1 12s4-10 11-10 11 10 11 10-4 10-11 10-11-10-11-10z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    315 LƯỢT XEM
                  </span>
                </div>
                
                <h1 style={{ color: '#002d72', marginBottom: '30px', lineHeight: '1.3' }}>{post.title}</h1>
                
                <div className="entry-content" style={{ fontSize: '17px', lineHeight: '1.8', color: '#444' }}>
                  {post.fullContent ? (
                    <div dangerouslySetInnerHTML={{ __html: post.fullContent }} />
                  ) : (
                    <>
                      <p style={{ fontWeight: '500', fontSize: '19px', color: '#222' }}>{post.excerpt}</p>
                      <p>Nội dung chi tiết đang được cập nhật...</p>
                    </>
                  )}
                </div>

                <div className="social-share" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px', padding: '25px 0', borderTop: '1px solid #f1f1f1' }}>
                  {[
                    { 
                      icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>, 
                      color: '#3b5998', label: 'Facebook' 
                    },
                    { 
                      icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>, 
                      color: '#dd4b39', label: 'Email' 
                    },
                    { 
                      icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.27 2.71 7.89 6.48 9.27.08-.15.15-.38.15-.59 0-.21-.01-.76-.01-1.49-1.29.28-1.56-.62-1.56-.62-.21-.53-.51-.67-.51-.67-.42-.29.03-.28.03-.28.47.03.71.48.71.48.41.71 1.08.51 1.34.39.04-.3.16-.51.29-.62-1.03-.12-2.11-.51-2.11-2.29 0-.51.18-.92.48-1.24-.05-.12-.21-.59.04-1.22 0 0 .39-.12 1.28.48a4.43 4.43 0 0 1 2.34 0c.89-.6 1.28-.48 1.28-.48.25.63.09 1.1.04 1.22.3.32.48.73.48 1.24 0 1.78-1.08 2.17-2.11 2.29.17.15.32.43.32.87 0 .63-.01 1.13-.01 1.29 0 .21.07.44.15.59C19.29 19.89 22 16.27 22 12c0-5.52-4.48-10-10-10z"></path></svg>, 
                      color: '#cb2027', label: 'Pinterest' 
                    },
                    { 
                      icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, 
                      color: '#0077b5', label: 'LinkedIn' 
                    }
                  ].map((s) => (
                    <div 
                      key={s.label}
                      style={{ 
                        width: '42px', 
                        height: '42px', 
                        borderRadius: '50%', 
                        border: '1px solid #eee', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: '#bbb',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        backgroundColor: '#fff'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = s.color;
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.backgroundColor = s.color;
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = `0 10px 20px -5px ${s.color}66`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#eee';
                        e.currentTarget.style.color = '#bbb';
                        e.currentTarget.style.backgroundColor = '#fff';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {s.icon}
                    </div>
                  ))}
                </div>
                
                
                <div className="post-footer" style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid #eee' }}>
                  <Link to="/blog" className="button primary is-outline" style={{ borderRadius: '30px' }}>
                    <i className="icon-angle-left"></i> QUAY LẠI TIN TỨC
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
