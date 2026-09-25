import { SEO } from '../../components/SEO/SEO'
import { HeroBanner } from '../../components/Hero/HeroBanner'
import { ContactForm } from '../../components/Forms/ContactForm'

export function Thung3LopPage() {
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

      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="row">
            <div className="col medium-12 small-12 large-12 text-center">
              <h2 style={{ fontSize: '2.5rem', color: '#002664', fontWeight: 800, marginBottom: '20px' }}>Giải pháp đóng gói tối ưu cho sản phẩm nhẹ</h2>
              <div style={{ width: 80, height: 4, background: '#ffb806', margin: '0 auto 40px' }} />
              <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
                Thùng carton 3 lớp là lựa chọn phổ biến nhất cho các mặt hàng có trọng lượng vừa và nhỏ. Tại Bao Bì Hải Quân, chúng tôi sử dụng công nghệ tạo sóng hiện đại để đảm bảo mỗi chiếc thùng đều đạt độ cứng cáp hoàn hảo.
              </p>
            </div>
          </div>

          <div className="row align-center" style={{ marginTop: '50px' }}>
            <div className="col medium-6 small-12 large-6">
              <img 
                src="https://res.cloudinary.com/zq7yx874/image/upload/v1790234823/haiquan_web/cac-loai-song.webp" 
                alt="Cấu trúc thùng carton 3 lớp" 
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }} 
              />
            </div>
            <div className="col medium-6 small-12 large-6" style={{ paddingLeft: '40px' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#002d72', fontWeight: 700, marginBottom: '20px' }}>Cấu trúc vững chắc</h3>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}>
                  <svg style={{ minWidth: '24px', marginRight: '15px', color: '#ffb806' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span><strong style={{ color: '#002664' }}>Lớp mặt ngoài:</strong> Phẳng mịn, bám mực in Flexo cực tốt, mang lại vẻ thẩm mỹ cao.</span>
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}>
                  <svg style={{ minWidth: '24px', marginRight: '15px', color: '#ffb806' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span><strong style={{ color: '#002664' }}>Lớp sóng giữa (Sóng B hoặc C):</strong> Sóng C cho khả năng chịu lực nén nén dọc tốt; Sóng B mỏng hơn, chịu nén bề mặt tốt và in sắc nét.</span>
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}>
                  <svg style={{ minWidth: '24px', marginRight: '15px', color: '#ffb806' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span><strong style={{ color: '#002664' }}>Lớp đáy:</strong> Giấy mộc hoặc giấy Kraft chịu lực, định lượng chuẩn xác giúp thùng không dễ bẹp lún.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#f9fbfd', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="row">
            <div className="col medium-12 text-center">
              <h2 style={{ fontSize: '2.5rem', color: '#002664', fontWeight: 800, marginBottom: '40px' }}>Ứng dụng thực tế</h2>
            </div>
          </div>
          <div className="row row-small">
            {[
              { title: 'Thương mại điện tử', desc: 'Đóng gói quần áo, phụ kiện, hộp giày, giao hàng nhanh chặng cuối.', icon: '📦' },
              { title: 'Thực phẩm chế biến', desc: 'Mì tôm, bánh kẹo, đồ ăn vặt, thực phẩm khô cần thùng nhẹ nhưng in ấn bắt mắt.', icon: '🍜' },
              { title: 'Thiết bị y tế, dược phẩm', desc: 'Bao bì sạch, chắc chắn để bảo quản thuốc men, hộp khẩu trang.', icon: '💊' }
            ].map((app, idx) => (
              <div key={idx} className="col medium-4 small-12 large-4">
                <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', textAlign: 'center', height: '100%' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{app.icon}</div>
                  <h3 style={{ fontSize: '1.3rem', color: '#002d72', fontWeight: 700, marginBottom: '15px' }}>{app.title}</h3>
                  <p style={{ color: '#666', lineHeight: 1.6 }}>{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#002d72', color: '#fff', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="row align-center">
            <div className="col medium-6 small-12 large-6">
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '20px' }}>Nhận Báo Giá Thùng 3 Lớp Ngay!</h2>
              <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '30px', lineHeight: 1.7 }}>
                Liên hệ ngay với Bao Bì Hải Quân để nhận tư vấn miễn phí về thiết kế, chọn sóng giấy và tối ưu chi phí cho kiện hàng của bạn. Chúng tôi cam kết tiến độ và chất lượng tuyệt đối.
              </p>
              <ContactForm isRaw={true} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
