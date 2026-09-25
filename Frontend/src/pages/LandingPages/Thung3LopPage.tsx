import { SEO } from '../../components/SEO/SEO'
import { HeroBanner } from '../../components/Hero/HeroBanner'
import { ContactForm } from '../../components/Forms/ContactForm'

export function Thung3LopPage() {
  const scrollToContact = () => {
    const el = document.getElementById('bao-gia-section')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <SEO 
        title="Thùng Carton 3 Lớp Giá Rẻ, Bền Đẹp | Bao Bì Hải Quân"
        description="Sản xuất thùng carton 3 lớp chất lượng cao, sóng B, C. Phù hợp cho thương mại điện tử, may mặc, hàng tiêu dùng nhẹ. Đặt hàng ngay tại xưởng Bắc Ninh."
        keywords="thùng carton 3 lớp, thùng 3 lớp sóng b, thùng carton 3 lớp sóng c, sản xuất thùng carton 3 lớp, mua thùng 3 lớp giá rẻ, thùng đóng hàng online"
      />

      <HeroBanner
        title="THÙNG CARTON 3 LỚP CAO CẤP"
        backgroundImage="https://res.cloudinary.com/zq7yx874/image/upload/v1790234823/haiquan_web/tt3.webp"
        align="center"
      />

      {/* Main Overview & Image Section */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '60px', paddingBottom: '70px' }}>
        <div className="container">
          
          {/* Tagline */}
          <div style={{ marginBottom: '30px', textAlign: 'center' }}>
            <span style={{ 
              display: 'inline-block', 
              background: '#f0f4f9', 
              color: '#002664', 
              fontWeight: 700, 
              fontSize: '0.85rem', 
              padding: '6px 16px', 
              borderRadius: '20px', 
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              Giải Pháp Đóng Gói Nhẹ • Tối Ưu Chi Phí Đóng Hàng
            </span>
          </div>

          <div className="row align-center" style={{ alignItems: 'flex-start' }}>
            {/* Left Column: Product Image */}
            <div className="col medium-6 small-12 large-6" style={{ marginBottom: '30px' }}>
              <div style={{
                position: 'relative',
                background: '#fff',
                borderRadius: '16px',
                padding: '16px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 12px 32px rgba(0, 38, 100, 0.08)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '28px',
                  left: '28px',
                  zIndex: 2,
                  background: 'linear-gradient(135deg, #002664 0%, #0040a8 100%)',
                  color: '#fff',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                }}>
                  Sóng B / Sóng C (2.5 - 4.0mm)
                </div>

                <img 
                  src="/images/thung-3-lop-bc.png" 
                  alt="Thùng carton 3 lớp sóng B và sóng C Hải Quân" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '12px',
                    display: 'block',
                    objectFit: 'cover'
                  }} 
                />

                {/* Feature highlight badges */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '10px',
                  marginTop: '16px',
                  paddingTop: '16px',
                  borderTop: '1px solid #edf2f7'
                }}>
                  <div style={{ textAlign: 'center', background: '#f8fafc', padding: '10px 6px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Tải trọng</div>
                    <div style={{ fontWeight: 700, color: '#002664', fontSize: '0.9rem' }}>5 - 15 kg</div>
                  </div>
                  <div style={{ textAlign: 'center', background: '#f8fafc', padding: '10px 6px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Loại sóng</div>
                    <div style={{ fontWeight: 700, color: '#002664', fontSize: '0.9rem' }}>Sóng B / C</div>
                  </div>
                  <div style={{ textAlign: 'center', background: '#f8fafc', padding: '10px 6px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Ứng dụng</div>
                    <div style={{ fontWeight: 700, color: '#002664', fontSize: '0.9rem' }}>TMĐT & Tiêu dùng</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Key Details */}
            <div className="col medium-6 small-12 large-6" style={{ paddingLeft: '20px' }}>
              <h1 style={{ fontSize: '2.1rem', color: '#002664', fontWeight: 800, lineHeight: 1.3, marginBottom: '16px' }}>
                Thùng Carton 3 Lớp Chịu Lực Chuẩn (Xưởng Sản Xuất)
              </h1>
              
              <p style={{ fontSize: '1.05rem', color: '#4a5568', lineHeight: 1.7, marginBottom: '24px' }}>
                Thùng carton 3 lớp là lựa chọn kinh tế hàng đầu cho hàng đóng gói chuyển phát nhanh, kho bãi thương mại điện tử, may mặc và đồ gia dụng nhẹ.
              </p>

              {/* Structure cards list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                
                <div style={{ 
                  display: 'flex', 
                  gap: '14px', 
                  alignItems: 'flex-start',
                  background: '#f8fafc',
                  padding: '16px',
                  borderRadius: '12px',
                  borderLeft: '4px solid #002664'
                }}>
                  <div style={{ 
                    minWidth: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    background: '#002664', 
                    color: '#fff', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.85rem'
                  }}>1</div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '1rem', color: '#002664', fontWeight: 700 }}>Lớp Phủ Mặt Phẳng Mịn</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#555', lineHeight: 1.5 }}>
                      Giấy Kraft hoặc duplex chất lượng cao, bám mực in sắc nét, hiển thị rõ ràng logo thương hiệu.
                    </p>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  gap: '14px', 
                  alignItems: 'flex-start',
                  background: '#fff8e6',
                  padding: '16px',
                  borderRadius: '12px',
                  borderLeft: '4px solid #ffb806'
                }}>
                  <div style={{ 
                    minWidth: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    background: '#ffb806', 
                    color: '#002664', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.85rem'
                  }}>2</div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '1rem', color: '#002664', fontWeight: 700 }}>Lớp Sóng Giữa Đàn Hồi (B hoặc C)</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#555', lineHeight: 1.5 }}>
                      Sóng B (2.5mm) chịu lực ngang phân tán lực nén; Sóng C (4.0mm) chịu nén dọc tốt khi chồng tầng hàng.
                    </p>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  gap: '14px', 
                  alignItems: 'flex-start',
                  background: '#f8fafc',
                  padding: '16px',
                  borderRadius: '12px',
                  borderLeft: '4px solid #002664'
                }}>
                  <div style={{ 
                    minWidth: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    background: '#002664', 
                    color: '#fff', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.85rem'
                  }}>3</div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '1rem', color: '#002664', fontWeight: 700 }}>Lớp Giấy Đáy Gia Cường</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#555', lineHeight: 1.5 }}>
                      Giấy mộc Kraft chịu ma sát, định lượng linh hoạt theo nhu cầu riêng của từng kiện hàng.
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button 
                  onClick={scrollToContact}
                  style={{
                    backgroundColor: '#002664',
                    color: '#ffffff',
                    height: '52px',
                    padding: '0 26px',
                    margin: 0,
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.98rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(0, 38, 100, 0.25)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                    lineHeight: 1,
                    verticalAlign: 'middle',
                    transition: 'all 0.25s ease'
                  }}
                >
                  Nhận Báo Giá Thùng 3 Lớp
                </button>

                <a 
                  href="tel:0796265379" 
                  style={{
                    backgroundColor: '#ffb806',
                    color: '#002664',
                    height: '52px',
                    padding: '0 26px',
                    margin: 0,
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.98rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxSizing: 'border-box',
                    lineHeight: 1,
                    verticalAlign: 'middle',
                    boxShadow: '0 4px 14px rgba(255, 184, 6, 0.3)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  📞 Hotline: 0796.265.379
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section" style={{ backgroundColor: '#f8fafc', paddingTop: '65px', paddingBottom: '70px' }}>
        <div className="container">
          <div className="row">
            <div className="col medium-12 text-center" style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '2rem', color: '#002664', fontWeight: 800 }}>Ứng Dụng Thực Tế Thùng 3 Lớp</h2>
            </div>
          </div>
          <div className="row row-small">
            {[
              { title: 'Thương mại điện tử', desc: 'Đóng gói quần áo, phụ kiện, giày dép, mỹ phẩm giao hàng shopee, tiktok shop.', icon: '📦' },
              { title: 'Thực phẩm chế biến', desc: 'Hộp bánh kẹo, mì tôm, thực phẩm khô cần thùng nhẹ nhưng in ấn nổi bật.', icon: '🍜' },
              { title: 'Thiết bị y tế & Dược', desc: 'Bao bì chuẩn sạch, chắc chắn để lưu kho và phân phối dược phẩm.', icon: '💊' }
            ].map((app, idx) => (
              <div key={idx} className="col medium-4 small-12 large-4">
                <div style={{ background: '#fff', padding: '28px 24px', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', textAlign: 'center', height: '100%' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{app.icon}</div>
                  <h3 style={{ fontSize: '1.2rem', color: '#002d72', fontWeight: 700, marginBottom: '12px' }}>{app.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="bao-gia-section" className="section" style={{ backgroundColor: '#002d72', color: '#fff', paddingTop: '65px', paddingBottom: '70px' }}>
        <div className="container">
          <div className="row align-center">
            <div className="col medium-8 small-12 large-7 text-center">
              <span style={{ color: '#ffb806', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Báo Giá Nhanh Tại Xưởng</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '10px 0 16px', color: '#ffffff' }}>Yêu Cầu Báo Giá Thùng Carton 3 Lớp</h2>
              <p style={{ fontSize: '1.05rem', opacity: 0.9, marginBottom: '32px', lineHeight: 1.7 }}>
                Liên hệ ngay với Bao Bì Hải Quân để nhận tư vấn miễn phí về thiết kế và tối ưu chi phí cho đơn hàng.
              </p>
              <div style={{ background: '#ffffff', padding: '30px', borderRadius: '16px', textAlign: 'left', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                <ContactForm isRaw={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

