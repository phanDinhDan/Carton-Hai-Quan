import { Link } from 'react-router-dom'
import { footerData } from '../../data/footer'
const logo = "https://res.cloudinary.com/zq7yx874/image/upload/v1790234828/haiquan_web/logoHaiQuanWeb.webp"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="footer-wrapper" style={{ backgroundColor: '#000c22', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      {/* Căn chỉnh flex-start để các tiêu đề cột thẳng hàng tuyệt đối phía trên */}
      <section className="section" id="section_footer_main" style={{ padding: '25px 0 15px' }}> 
        <div className="section-content relative container">
          <div className="row row-small" id="row_footer" style={{ gap: '0', display: 'flex', alignItems: 'flex-start' }}> 
            {/* Branding Column - MASTER LOGO TOP-ALIGNED */}
            <div className="col medium-4 small-12 large-4">
              <div className="col-inner" style={{ overflow: 'visible' }}>
                <div className="img" style={{ margin: 0, paddingLeft: '60px', overflow: 'visible' }}>
                  <div className="img-inner" style={{ margin: 0, overflow: 'visible' }}>
                    <img
                      src={logo}
                      className="attachment-original size-original"
                      alt="Bao bì Hải Quân"
                      loading="lazy"
                      style={{ 
                        maxHeight: '180px', 
                        width: 'auto', 
                        filter: 'brightness(0) invert(1)',
                        opacity: 1,
                        margin: '0',
                        transition: 'transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                        display: 'block',
                        cursor: 'pointer',
                        transformOrigin: 'center left'
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Data-driven Columns - TITLES WILL NOW BE PERFECTLY ALIGNED */}
            {footerData.columns.map((col) => (
              <div key={col.title} className="col medium-2 small-6 large-2">
                <div className="col-inner">
                  <div className="text text-footer-t">
                    <h5 style={{ 
                      color: '#ffffff', 
                      fontSize: '13px', 
                      fontWeight: 700, 
                      marginBottom: '15px', /* Đồng bộ margin để h5 thẳng hàng */
                      textTransform: 'uppercase', 
                      letterSpacing: '1px',
                      marginTop: '15px' /* Thêm margin-top nhẹ để title cân đối với vai Logo */
                    }}>
                      {col.title}
                    </h5>
                    
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {col.items.map((it) => (
                        <li key={it.to} style={{ marginBottom: '8px' }}>
                          {it.to.startsWith('tel:') || it.to.startsWith('http') ? (
                            <a 
                              href={it.to} 
                              style={{ 
                                color: 'rgba(255, 255, 255, 0.6)', 
                                fontSize: '13px', 
                                transition: 'color 0.3s ease',
                                display: 'inline-block',
                                textDecoration: 'none'
                              }}
                              onMouseOver={(e) => (e.currentTarget.style.color = '#00d1ff')}
                              onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)')}
                            >
                              {it.label}
                            </a>
                          ) : (
                            <Link 
                              to={it.to} 
                              style={{ 
                                color: 'rgba(255, 255, 255, 0.6)', 
                                fontSize: '13px', 
                                transition: 'color 0.3s ease',
                                display: 'inline-block'
                              }}
                              onMouseOver={(e) => (e.currentTarget.style.color = '#00d1ff')}
                              onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)')}
                            >
                              {it.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>

                    {'cta' in col && col.cta ? (
                      <div style={{ marginTop: 12 }}>
                        <Link 
                           className="button btn-home-t" 
                           to={col.cta.to} 
                           style={{ 
                             borderRadius: 99, 
                             display: 'inline-flex', 
                             alignItems: 'center',
                             padding: '6px 16px',
                             fontSize: '12px',
                             background: 'rgba(0, 45, 114, 0.8)',
                             border: '1px solid rgba(255,255,255,0.1)',
                             color: '#fff',
                             minHeight: 'auto'
                           }}
                        >
                          <span>{col.cta.label}</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}><path d="M9 18l6-6-6-6"></path></svg>
                        </Link>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Absolute Bottom Bar */}
      <div 
         style={{ 
           padding: '10px 0', 
           borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
           backgroundColor: 'rgba(0,0,0,0.2)' 
         }}
      >
        <div className="container text-center">
          <p style={{ color: 'rgba(255, 255, 255, 0.25)', fontSize: '11px', margin: 0, letterSpacing: '0.5px' }}>
            &copy; {currentYear} Bao bì Hải Quân. Bản quyền nội dung thuộc về baobihaiquan.com
          </p>
        </div>
      </div>
    </footer>
  )
}
