import { Helmet } from 'react-helmet-async'
import { useSearchParams, Link } from 'react-router-dom'
import { HeroBanner } from '../../components/Hero/HeroBanner'

export function SearchPage() {
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q') || ''

  // Mock results for UI presentation
  const mockResults = [
    { id: 1, title: 'Thùng carton 3 lớp', desc: 'Sản phẩm thùng carton chống ẩm chất lượng cao phổ biến cho nhiều ngành hàng.', img: 'https://res.cloudinary.com/zq7yx874/image/upload/v1790234821/haiquan_web/tt1.webp', url: '/theo-ky-thuat' },
    { id: 2, title: 'Thùng carton 5 lớp', desc: 'Giải pháp tuyệt vời để đóng gói hàng hóa nặng, có độ siêu bền và sức chịu lực cường độ cao.', img: 'https://res.cloudinary.com/zq7yx874/image/upload/v1790234822/haiquan_web/tt2.webp', url: '/theo-ky-thuat' },
    { id: 3, title: 'Hộp carton nông sản', desc: 'Thiết kế riêng biệt cho các ngành thực phẩm, trồng trọt và hoa quả xuất khẩu.', img: 'https://res.cloudinary.com/zq7yx874/image/upload/v1790234823/haiquan_web/tt3.webp', url: '/theo-nganh' },
  ]

  const searchTerms = q.trim().toLowerCase().split(/\s+/)

  const results = q.trim() ? mockResults.filter(item => {
    const text = (item.title + ' ' + item.desc).toLowerCase()
    return searchTerms.every(term => text.includes(term))
  }) : mockResults

  return (
    <>
      <Helmet>
        <title>Tìm kiếm: {q} - Bao bì Hải Quân</title>
      </Helmet>
      
      <HeroBanner
        kicker="Kết quả tìm kiếm"
        title={q ? `Từ khóa: "${q}"` : "Vui lòng nhập từ khóa"}
        description={`Chúng tôi tìm thấy ${results.length} kết quả phù hợp với yêu cầu của bạn.`}
        backgroundImage="https://res.cloudinary.com/zq7yx874/image/upload/v1790234795/haiquan_web/Hero-Image-1-1.webp"
        align="center"
      />

      <div className="section" style={{ padding: '80px 15px', backgroundColor: '#f9f9fc', minHeight: '50vh' }}>
        <div className="container">
          {results.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
              {results.map(item => (
                <div key={item.id} style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <Link to={item.url} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <div style={{ height: '240px', overflow: 'hidden', backgroundColor: '#eaeaea' }}>
                      <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '25px' }}>
                      <h3 style={{ margin: '0 0 10px', fontSize: '20px', color: '#002d72' }}>{item.title}</h3>
                      <p style={{ margin: 0, fontSize: '15px', color: '#555', lineHeight: 1.6 }}>{item.desc}</p>
                      <div style={{ marginTop: '20px', display: 'inline-block', color: '#dd3333', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase' }}>
                        Xem chi tiết <span style={{ marginLeft: '4px' }}>&#10095;</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', marginBottom: '50px' }}>
                <div style={{ fontSize: '64px', marginBottom: '20px', opacity: 0.8 }}>🔍</div>
                <h3 style={{ color: '#002d72', marginBottom: '15px', fontSize: '26px' }}>Không tìm thấy kết quả</h3>
                <p style={{ color: '#666', fontSize: '16px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>Rất tiếc, chúng tôi không tìm thấy sản phẩm hoặc bài viết nào phù hợp với từ khóa "<strong>{q}</strong>".</p>
              </div>

              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h3 style={{ fontSize: '24px', color: '#333' }}>Có thể bạn sẽ quan tâm</h3>
                <div style={{ width: '60px', height: '3px', backgroundColor: '#ffb806', margin: '15px auto 0' }} />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
                {mockResults.map(item => (
                  <div key={item.id} style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <Link to={item.url} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                      <div style={{ height: '240px', overflow: 'hidden', backgroundColor: '#eaeaea' }}>
                        <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{ padding: '25px' }}>
                        <h3 style={{ margin: '0 0 10px', fontSize: '20px', color: '#002d72' }}>{item.title}</h3>
                        <p style={{ margin: 0, fontSize: '15px', color: '#555', lineHeight: 1.6 }}>{item.desc}</p>
                        <div style={{ marginTop: '20px', display: 'inline-block', color: '#dd3333', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase' }}>
                          Xem chi tiết <span style={{ marginLeft: '4px' }}>&#10095;</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
