import { Helmet } from 'react-helmet-async'
import { HeroBanner } from '../../components/Hero/HeroBanner'
import { SplitSection } from '../../components/Sections/SplitSection'

export function AboutPage() {
  const milestones = [
    {
      year: 'Khởi đầu',
      title: 'Xây dựng nền tảng',
      description: 'Khát khao mang đến giải pháp đóng gói tin cậy.',
      icon: '🏛️'
    },
    {
      year: 'Cải tiến',
      title: 'Làm chủ công nghệ',
      description: 'Hệ thống Kỹ Thuật Số tiên tiến & hiện đại.',
      icon: '⚙️'
    },
    {
      year: 'Hiện tại',
      title: 'Đối tác chiến lược',
      description: 'Nhà cung cấp bao bì hàng đầu cho tập đoàn lớn.',
      icon: '🤝'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Giới thiệu - Công ty Cổ phần Bao bì Hải Quân</title>
      </Helmet>

      {/* Hero Section */}
      <HeroBanner
        kicker="Về chúng tôi"
        title="Bao bì Hải Quân"
        description="Tập trung vào chất lượng sản phẩm, dịch vụ và xây dựng mối quan hệ lâu dài."
        backgroundImage="https://res.cloudinary.com/zq7yx874/image/upload/v1790234795/haiquan_web/Hero-Image-1-1.webp"
        videoUrl="/video/bannerBG.mp4"
        align="center"
      />

      {/* Strategic Mission Section + Subtle Timeline */}
      <section className="section" style={{ 
        padding: '80px 0', 
        backgroundColor: '#ffffff', 
        backgroundImage: 'radial-gradient(#002d72 0.5px, transparent 0.5px)', 
        backgroundSize: '24px 24px'
      }}>
        <div className="section-content relative container">
          <div className="row align-center">
            <div className="col medium-10 small-12 large-8">
              <div className="anti-premium-card" style={{ 
                padding: '60px 50px', 
                background: '#ffffff', 
                borderTop: '4px solid #002664',
                textAlign: 'center'
              }}>
                <div style={{ marginBottom: '25px' }}>
                  <img 
                    src="https://res.cloudinary.com/zq7yx874/image/upload/v1790234784/haiquan_web/By-Service-Icon-75x75-1.webp" 
                    alt="icon" 
                    style={{ width: '45px', marginBottom: '15px', opacity: 0.8 }}
                  />
                  <h4 style={{ color: '#00d1ff', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '13px', fontWeight: 800, marginBottom: '10px' }}>
                    Sứ mệnh của chúng tôi
                  </h4>
                  <h2 style={{ color: '#002664', fontSize: '28px', fontWeight: 800, margin: 0 }}>Sứ mệnh chiến lược</h2>
                </div>

                <div style={{ position: 'relative', width: '40px', height: '2px', background: '#002664', margin: '0 auto 30px' }}></div>

                <style>{`
                  .mission-text {
                    font-size: 19px;
                    color: #444;
                    line-height: 1.8;
                    font-weight: 500;
                    margin: 0 auto;
                    max-width: 750px;
                    font-style: italic;
                  }
                  .milestone-card {
                    text-align: left;
                    max-width: 200px;
                  }
                  @media (max-width: 767px) {
                    .mission-text {
                      font-size: 13px !important;
                      line-height: 1.5 !important;
                    }
                    .milestone-card {
                      max-width: 100% !important;
                      width: 100%;
                      padding: 0 10px;
                    }
                  }
                `}</style>
                <p className="mission-text">
                  "Mang đến giải pháp bao bì carton chất lượng cao, đa dạng và tối ưu chi phí, giúp doanh nghiệp an tâm trong khâu đóng gói, bảo quản và vận chuyển sản phẩm. Chúng tôi cam kết đồng hành cùng khách hàng, nâng cao giá trị sản phẩm và góp phần vào sự phát triển bền vững của doanh nghiệp."
                </p>

                {/* Subtle History Strip - Integrated as a small highlight */}
                <div style={{ 
                  marginTop: '50px', 
                  paddingTop: '30px', 
                  borderTop: '1px solid rgba(0, 38, 100, 0.05)',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '30px',
                  flexWrap: 'wrap'
                }}>
                  {milestones.map((item, idx) => (
                    <div key={idx} className="milestone-card">
                       <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                          <span style={{ fontSize: '18px' }}>{item.icon}</span>
                          <span style={{ fontSize: '12px', fontWeight: 900, color: '#002664', textTransform: 'uppercase' }}>{item.year}</span>
                       </div>
                       <h5 style={{ fontSize: '14px', margin: '0 0 4px 0', color: '#002664', fontWeight: 700 }}>{item.title}</h5>
                       <p style={{ fontSize: '12px', margin: 0, color: '#777', lineHeight: 1.4 }}>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relationships & Core Philosophy */}
      <SplitSection
        title="Công cụ gắn kết bền chặt"
        description="Khi chọn Công ty Cổ phần Bao bì Hải Quân, bạn sẽ được làm việc với những con người luôn tận tâm vì lợi ích của nhau và vì khách hàng. Chúng tôi tin tưởng vào việc tận dụng sức mạnh của mối quan hệ hợp tác bền chặt, được gắn kết bởi niềm tin mà chúng tôi đã xây dựng, để mang đến các giải pháp đóng gói sáng tạo và trải nghiệm dịch vụ xuất sắc."
        image="https://res.cloudinary.com/zq7yx874/image/upload/v1790234797/haiquan_web/IMG_7138-scaled.webp"
        reverse={false}
        bullets={["Con người", "Khách hàng", "Niềm tin"]}
      />

      {/* Vision & Core Values Grid */}
      <section className="section" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="section-content relative container">
          <div className="row row-large">
            <div className="col medium-6 small-12 large-6">
              <div className="anti-premium-card" style={{ padding: '50px', height: '100%' }}>
                <h4 style={{ color: '#00d1ff', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px', fontWeight: 700, marginBottom: '20px' }}>Tầm nhìn</h4>
                <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#555' }}>
                  Trở thành nhà sản xuất bao bì carton hàng đầu tại Việt Nam, là đối tác tin cậy của các tập đoàn, doanh nghiệp trong và ngoài nước nhờ năng lực sản xuất mạnh mẽ, dịch vụ chuyên nghiệp và chất lượng ổn định.
                </p>
              </div>
            </div>
            <div className="col medium-6 small-12 large-6">
              <div className="anti-premium-card" style={{ padding: '50px', height: '100%' }}>
                <h4 style={{ color: '#00d1ff', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px', fontWeight: 700, marginBottom: '20px' }}>Giá trị cốt lõi</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Ổn định & đồng nhất', 'Linh hoạt theo yêu cầu', 'Nhanh chóng & đúng hẹn', 'Hợp tác bền vững', 'Con người tận tâm'].map((val) => (
                    <li key={val} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', fontSize: '16px', color: '#444' }}>
                      <span style={{ color: '#002664', fontWeight: 900, marginRight: '12px' }}>✓</span> {val}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Capacity */}
      <SplitSection
        title="Năng lực sản xuất"
        description="Nhờ làm chủ công nghệ và hệ thống máy móc hiện đại, Bao bì Hải Quân có khả năng cung ứng ổn định số lượng lớn thùng carton cho các tập đoàn, doanh nghiệp sản xuất. Chúng tôi đáp ứng đa dạng quy cách, từ thùng carton sóng E, B, C, BC đến các sản phẩm in ấn chất lượng cao, đảm bảo tốc độ – đồng nhất – chính xác."
        image="https://res.cloudinary.com/zq7yx874/image/upload/v1790234806/haiquan_web/nang-luc-san-xuat.webp"
        reverse={true}
        ctaText="Xem danh sách đầy đủ"
        ctaTo="/kieu-hop-co-ban"
      />

      {/* Diverse Services */}
      <SplitSection
        title="Cung cấp đa dạng dịch vụ"
        description="Bao bì Hải Quân cung cấp trọn gói từ thiết kế, sản xuất đến in ấn thùng carton theo yêu cầu. Chúng tôi đáp ứng cả đơn hàng số lượng lớn lẫn đa dạng quy cách, giúp doanh nghiệp vừa tối ưu chi phí vừa đảm bảo chất lượng bao bì ổn định."
        image="https://res.cloudinary.com/zq7yx874/image/upload/v1790234796/haiquan_web/IMG_7133-scaled.webp"
        reverse={false}
      />

      {/* Customer Commitment */}
      <SplitSection
        kicker="Sự nghiệp"
        title="Cam kết với khách hàng"
        description="Với Bao bì Hải Quân, mỗi đơn hàng không chỉ là sản phẩm bao bì, mà còn là cam kết về chất lượng, tiến độ và sự đồng hành lâu dài cùng khách hàng."
        image="/video/cam ket voi khach hang.mp4"
        reverse={true}
        ctaText="Quản lý cấp cao"
        ctaTo="/lien-he"
      />

      {/* Final Call to Action Section */}
      <section className="section dark" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'linear-gradient(rgba(0, 12, 34, 0.75), rgba(0, 12, 34, 0.85)), url(https://res.cloudinary.com/zq7yx874/image/upload/v1790234800/haiquan_web/IMG_7150-scaled.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.85)'
        }}></div>

        <div className="section-content relative container text-center">
          <div className="row align-center">
            <div className="col medium-10 small-12 large-8">
              <h2 style={{ color: '#ffffff', fontSize: '36px', fontWeight: 800, marginBottom: '30px' }}>
                Hãy chọn một đối tác có thể đồng hành cùng sự thành công của bạn.
              </h2>
              <a href="/lien-he" className="button primary" style={{ borderRadius: '99px', padding: '15px 45px', fontSize: '16px', fontWeight: 700 }}>
                Liên hệ với chúng tôi
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
