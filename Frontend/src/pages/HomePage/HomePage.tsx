import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
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
      <Helmet>
        <title>Công ty Cổ phần Bao bì Hải Quân</title>
      </Helmet>

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
