import { useState } from 'react'
import { SEO } from '../../components/SEO/SEO'
import { HeroSlider } from '../../components/Hero/HeroSlider'
import { Advantages } from '../../components/Sections/Advantages'
import { FeaturedSections } from '../../components/Sections/FeaturedSections'
import { WhyChooseUs } from '../../components/Sections/WhyChooseUs'
import { HumanSection } from '../../components/Sections/HumanSection'
import { CapacitySection } from '../../components/Sections/CapacitySection'
import { BlogGrid } from '../../components/Cards/BlogGrid'
import { homeContent } from '../../data/home'
import { blogPosts } from '../../data/blog'

export function HomePage() {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 3
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    const section = document.getElementById('home-news-section')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <SEO 
        title="Công ty Cổ phần Bao bì Hải Quân | Sản Xuất Thùng Carton Giá Rẻ"
        description="Bao bì Hải Quân chuyên sản xuất thùng carton, in hộp giấy theo yêu cầu, hộp bế carton uy tín, chất lượng cao tại Bắc Ninh, Hà Nội. Nhận tư vấn thiết kế và báo giá ngay!"
        keywords="sản xuất thùng carton, thùng carton giá rẻ, mua thùng carton ở đâu, hộp bế carton, in hộp giấy theo yêu cầu, bao bì hải quân, bao bì carton bắc ninh, sản xuất bao bì giấy"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Công ty Cổ phần Bao Bì Hải Quân",
          "image": "https://res.cloudinary.com/zq7yx874/image/upload/v1790234824/haiquan_web/logoHaiQuanWeb.webp",
          "@id": "https://baobihaiquan.vn",
          "url": "https://baobihaiquan.vn",
          "telephone": "+84796265379", 
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Khu công nghiệp Đại Đồng Hoàn Sơn",
            "addressLocality": "Huyện Tiên Du",
            "addressRegion": "Bắc Ninh",
            "postalCode": "220000",
            "addressCountry": "VN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 21.1091, 
            "longitude": 106.0028
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "08:00",
            "closes": "17:00"
          },
          "priceRange": "$$"
        }}
      />

      <HeroSlider slides={homeContent.hero} />

      <Advantages
        kicker={homeContent.advantages.kicker}
        title={homeContent.advantages.title}
        description={homeContent.advantages.description}
        items={homeContent.advantages.items}
      />

      <FeaturedSections
        title={homeContent.featured.title}
        description={homeContent.featured.description}
        items={homeContent.featured.items}
      />

      <WhyChooseUs
        kicker={homeContent.whyChooseUs.kicker}
        title={homeContent.whyChooseUs.title}
        bullets={homeContent.whyChooseUs.bullets}
        image={homeContent.whyChooseUs.image}
      />

      <HumanSection
        title={homeContent.humanFactor.title}
        description={homeContent.humanFactor.description}
        video={homeContent.humanFactor.video}
      />

      <CapacitySection
        title={homeContent.capacity.title}
        description={homeContent.capacity.description}
        backgroundImage={homeContent.capacity.backgroundImage}
        cta={homeContent.capacity.cta}
      />

      <section className="section" id="home-news-section" style={{ paddingTop: 80, paddingBottom: 100, backgroundColor: 'rgb(250, 250, 250)' }}>
        <div className="section-content relative container">
          <div className="row row-small align-center">
            <div className="col medium-9 small-12 large-9 text-center">
              <div className="text tieude-1" style={{ marginBottom: 40 }}>
                <h4 style={{ color: '#002d72', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: 15 }}>Cập nhật Tin tức</h4>
                <h2 style={{ fontSize: '2.5rem', color: '#002664', fontWeight: 800 }}>Xu hướng & Thông tin về ngành sản xuất bao bì</h2>
                <div style={{ width: 60, height: 4, background: '#ffb806', margin: '20px auto' }} />
              </div>
            </div>
          </div>

          <BlogGrid
            columns={3}
            posts={currentPosts.map((post) => ({
              ...post,
              categoryLabel: 'Tin tức', 
            }))}
          />

          {/* Professional Minimalist Pagination - CSS Based Design */}
          <div className="anti-pagination-wrapper">
            <span 
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              role="button"
              className={`anti-page-arrow ${currentPage === 1 ? 'disabled' : ''}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#002d72" strokeWidth="3"><path d="M15 18l-6-6 6-6"/></svg>
            </span>

            <div style={{ display: 'flex', gap: 6 }}>
              {Array.from({ length: totalPages || 1 }, (_, i) => i + 1).map((page) => (
                <span
                  key={page}
                  onClick={() => handlePageChange(page)}
                  role="button"
                  className={`anti-page-item ${currentPage === page ? 'active' : ''}`}
                >
                  {page}
                </span>
              ))}
            </div>

            <span 
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              role="button"
              className={`anti-page-arrow ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#002d72" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg>
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
