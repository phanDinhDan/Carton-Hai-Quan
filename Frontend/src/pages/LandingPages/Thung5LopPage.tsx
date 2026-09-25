import { SEO } from '../../components/SEO/SEO'
import { HeroBanner } from '../../components/Hero/HeroBanner'
import { ContactForm } from '../../components/Forms/ContactForm'

export function Thung5LopPage() {
  const scrollToContact = () => {
    const el = document.getElementById('bao-gia-section')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <SEO 
        title="Thùng Carton 5 Lớp Sóng BC | Báo Giá Xưởng Bao Bì Hải Quân"
        description="Sản xuất thùng carton 5 lớp sóng BC đối khẩu tiêu chuẩn B2B. Chịu lực nén cực cao, chuyên dụng cho hàng nội thất, điện tử, nông sản xuất khẩu tại Bắc Ninh."
        keywords="thùng carton 5 lớp, thùng đối khẩu 5 lớp, thùng sóng BC 5 lớp, sản xuất thùng carton 5 lớp, thùng carton xuất khẩu, bao bì hải quân"
      />

      <HeroBanner
        title="THÙNG CARTON 5 LỚP SÓNG BC"
        backgroundImage="https://res.cloudinary.com/zq7yx874/image/upload/v1790234824/haiquan_web/tt4.webp"
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
              Tiêu Chuẩn Sản Xuất B2B • Xưởng Hàng Đầu Bắc Ninh
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
                  Sóng BC (5.5 - 7.0mm)
                </div>

                <img 
                  src="/images/thung-5-lop-bc.png" 
                  alt="Thùng carton đối khẩu 5 lớp sóng BC Hải Quân" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '12px',
                    display: 'block',
                    objectFit: 'cover'
                  }} 
                />

                {/* Feature highlight badges below image */}
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
                    <div style={{ fontWeight: 700, color: '#002664', fontSize: '0.9rem' }}>20 - 50 kg+</div>
                  </div>
                  <div style={{ textAlign: 'center', background: '#f8fafc', padding: '10px 6px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Độ dày sóng</div>
                    <div style={{ fontWeight: 700, color: '#002664', fontSize: '0.9rem' }}>5.5 - 7.0 mm</div>
                  </div>
                  <div style={{ textAlign: 'center', background: '#f8fafc', padding: '10px 6px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Kiểu dáng</div>
                    <div style={{ fontWeight: 700, color: '#002664', fontSize: '0.9rem' }}>Đối khẩu (RSC)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Key Details & Specs */}
            <div className="col medium-6 small-12 large-6" style={{ paddingLeft: '20px' }}>
              <h1 style={{ fontSize: '2.1rem', color: '#002664', fontWeight: 800, lineHeight: 1.3, marginBottom: '16px' }}>
                Thùng Carton 5 Lớp Sóng BC (Thùng Đối Khẩu Standard)
              </h1>
              
              <p style={{ fontSize: '1.05rem', color: '#4a5568', lineHeight: 1.7, marginBottom: '24px' }}>
                Dòng sản phẩm chuyên dụng dành cho bao bì chịu lực nén cao, chống va quệt khi vận chuyển logistics chặng dài hoặc lưu kho xếp chồng container 5-7 tầng.
              </p>

              {/* Structure specifications card list */}
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
                    <h4 style={{ margin: '0 0 4px', fontSize: '1rem', color: '#002664', fontWeight: 700 }}>Hai Lớp Mặt Kraft Ngoại & Đáy</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#555', lineHeight: 1.5 }}>
                      Định lượng cao (120 - 250 GSM), chống thấm ẩm tốt, bề mặt mịn phẳng tối ưu cho in ấn thương hiệu Flexo / Offset.
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
                    <h4 style={{ margin: '0 0 4px', fontSize: '1rem', color: '#002664', fontWeight: 700 }}>Hai Lớp Sóng Đôi BC Kết Hợp</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#555', lineHeight: 1.5 }}>
                      <strong>Sóng C (4.0mm):</strong> Chịu nén dọc đỉnh điểm. <br />
                      <strong>Sóng B (3.0mm):</strong> Chịu đâm thủng bề mặt ngang và tạo phẳng nét in.
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
                    <h4 style={{ margin: '0 0 4px', fontSize: '1rem', color: '#002664', fontWeight: 700 }}>Một Lớp Vách Đệm Giữa</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#555', lineHeight: 1.5 }}>
                      Gắn kết hai tầng sóng, hấp thụ rung chấn lực xung kích tối đa khi xe vận chuyển trên đường trường.
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button 
                  onClick={scrollToContact}
                  style={{
                    backgroundColor: '#002664',
                    color: '#ffffff',
                    padding: '14px 28px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(0, 38, 100, 0.25)',
                    transition: 'all 0.2s'
                  }}
                >
                  Nhận Báo Giá Sỉ Tại Xưởng
                </button>

                <a 
                  href="tel:0968123456" 
                  style={{
                    backgroundColor: '#ffb806',
                    color: '#002664',
                    padding: '14px 24px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  📞 Hotline: 0968.123.456
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Technical Specification Table */}
      <section className="section" style={{ backgroundColor: '#f8fafc', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="row">
            <div className="col medium-12 text-center" style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '2rem', color: '#002664', fontWeight: 800 }}>Thông Số Kỹ Thuật Chi Tiết</h2>
              <div style={{ width: 60, height: 3, background: '#ffb806', margin: '12px auto 0' }} />
            </div>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 700, color: '#002664', width: '35%', background: '#f1f5f9' }}>Kiểu dáng phổ biến</td>
                  <td style={{ padding: '14px 20px', color: '#334155' }}>Thùng đối khẩu (A1 / RSC), Thùng nắp chồm, Thùng bế quai xách</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                  <td style={{ padding: '14px 20px', fontWeight 700, color: '#002664', background: '#f1f5f9' }}>Kết cấu lớp sóng</td>
                  <td style={{ padding: '14px 20px', color: '#334155' }}>5 lớp (Sóng đôi BC: 1 sóng B 3mm + 1 sóng C 4mm)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                  <td style={{ padding: '14px 20px', fontWeight 700, color: '#002664', background: '#f1f5f9' }}>Định lượng giấy (GSM)</td>
                  <td style={{ padding: '14px 20px', color: '#334155' }}>120 GSM - 250 GSM (Giấy Kraft Nâu / Vàng / Trắng nhập khẩu hoặc nội địa)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                  <td style={{ padding: '14px 20px', fontWeight 700, color: '#002664', background: '#f1f5f9' }}>Khả năng chịu tải</td>
                  <td style={{ padding: '14px 20px', color: '#334155' }}>20kg - 60kg+ (Xếp chồng container 5 - 7 tầng an toàn)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                  <td style={{ padding: '14px 20px', fontWeight 700, color: '#002664', background: '#f1f5f9' }}>Công nghệ in ấn</td>
                  <td style={{ padding: '14px 20px', color: '#334155' }}>In Flexo công nghiệp 1 - 4 màu hoặc In Offset cán màng bóng/mờ</td>
                </tr>
                <tr>
                  <td style={{ padding: '14px 20px', fontWeight 700, color: '#002664', background: '#f1f5f9' }}>Năng lực cung ứng</td>
                  <td style={{ padding: '14px 20px', color: '#334155' }}>&gt; 50.000 thùng/ngày • Sản xuất tại KCN Đại Đồng, Bắc Ninh</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Industrial Applications Section */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '65px', paddingBottom: '70px' }}>
        <div className="container">
          <div className="row">
            <div className="col medium-12 text-center" style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '2rem', color: '#002664', fontWeight: 800 }}>Ứng Dụng Ngành Nghề Tiêu Biểu</h2>
              <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '8px' }}>Thùng đối khẩu 5 lớp sóng BC giải quyết bài toán bảo vệ hoàn hảo cho nhiều lĩnh vực</p>
            </div>
          </div>
          
          <div className="row row-small">
            {[
              { 
                title: 'Nội thất & Đồ gỗ', 
                desc: 'Đóng gói tủ kệ, bàn ghế xuất khẩu. Chống trầy xước sơn, không móp góc khi vận chuyển container biển.', 
                icon: '🛋️',
                tag: 'Xuất khẩu'
              },
              { 
                title: 'Điện tử & Điện gia dụng', 
                desc: 'Bao vệ Tivi, Tủ lạnh, Máy giặt, tủ điều khiển công nghiệp trước va đập rủi ro.', 
                icon: '📺',
                tag: 'Chịu lực cao'
              },
              { 
                title: 'Nông sản Xuất Khẩu', 
                desc: 'Thùng 5 lớp phủ màng chống ẩm, giữ form cực tốt cho trái cây đông lạnh đi Châu Âu, Mỹ.', 
                icon: '🍎',
                tag: 'Chống ẩm'
              },
              { 
                title: 'Cơ khí & Phụ tùng', 
                desc: 'Đóng kiện phụ tùng ô tô, linh kiện máy móc hạng nặng đòi hỏi độ phân tán lực cực cao.', 
                icon: '⚙️',
                tag: 'Hàng nặng'
              }
            ].map((app, idx) => (
              <div key={idx} className="col medium-3 small-12 large-3">
                <div style={{ 
                  background: '#fff', 
                  padding: '24px 20px', 
                  borderRadius: '14px', 
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)', 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ fontSize: '2.5rem' }}>{app.icon}</span>
                      <span style={{ fontSize: '0.75rem', padding: '4px 10px', background: '#f0f4f9', color: '#002664', fontWeight: 700, borderRadius: '6px' }}>{app.tag}</span>
                    </div>
                    <h3 style={{ fontSize: '1.15rem', color: '#002d72', fontWeight: 700, marginBottom: '10px' }}>{app.title}</h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{app.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form & CTA Section */}
      <section id="bao-gia-section" className="section" style={{ backgroundColor: '#002d72', color: '#fff', paddingTop: '65px', paddingBottom: '70px' }}>
        <div className="container">
          <div className="row align-center">
            <div className="col medium-8 small-12 large-7 text-center">
              <span style={{ color: '#ffb806', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Báo Giá Trực Tiếp Từ Xưởng Bắc Ninh</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '10px 0 16px', color: '#ffffff' }}>Yêu Cầu Báo Giá Thùng Carton 5 Lớp</h2>
              <p style={{ fontSize: '1.05rem', opacity: 0.9, marginBottom: '32px', lineHeight: 1.7 }}>
                Gửi thông số kích thước (Dài x Rộng x Cao) và số lượng cần sản xuất, kỹ thuật Bao Bì Hải Quân sẽ phản hồi báo giá cạnh tranh nhất chỉ trong 15 phút.
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

