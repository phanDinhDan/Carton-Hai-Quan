import { Helmet } from 'react-helmet-async'
import { ContactForm } from '../../components/Forms/ContactForm'
import { HeroBanner } from '../../components/Hero/HeroBanner'

export function ContactPage() {
  const videoUrl = '/video/bannerBG.mp4'
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.5694200762395!2d106.0023323!3d21.0927243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135090012f98903%3A0xb3b8979ea6c7ddf5!2zTmjDoCBtw6F5IGJhbyBiw6wgSOG6o2kgUXXDom4!5e0!3m2!1svi!2s!4v1712210000000!5m2!1svi!2s"

  return (
    <>
      <Helmet>
        <title>Liên hệ - Công ty Cổ phần Bao bì Hải Quân</title>
      </Helmet>

      {/* Hero Banner with Background Video */}
      <HeroBanner
        title="Liên hệ với chúng tôi"
        backgroundImage="https://res.cloudinary.com/zq7yx874/image/upload/v1790234795/haiquan_web/Hero-Image-1-1.webp"
        videoUrl={videoUrl}
        align="center"
      />

      <section className="section" style={{ backgroundColor: '#fcfcfc', paddingTop: '80px', paddingBottom: '100px' }}>
        <div className="container">
          <div className="row row-large align-stretch">
            {/* Left Side: Contact Form Card */}
            <div className="col medium-7 small-12 large-7">
              <div 
                className="anti-premium-card"
                style={{ 
                  background: '#ffffff', 
                  padding: '40px', 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ marginBottom: '35px' }}>
                  <h3 style={{ fontSize: '26px', color: '#002d72', fontWeight: 800, marginBottom: '15px' }}>
                    Gửi yêu cầu cho chúng tôi
                  </h3>
                  <p style={{ color: '#666', fontSize: '15px', borderBottom: '2px solid #f8faff', paddingBottom: '20px' }}>
                    Vui lòng điền vào mẫu bên dưới, đội ngũ chúng tôi sẽ phản hồi trong vòng 24h.
                  </p>
                </div>
                
                <div style={{ flexGrow: 1 }}>
                  <ContactForm isRaw={true} />
                </div>
              </div>
            </div>

            {/* Right Side: Contact Info Card */}
            <div className="col medium-5 small-12 large-5">
              <div 
                className="anti-premium-card"
                style={{ 
                  background: '#ffffff', 
                  padding: '40px', 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{ color: '#002d72', fontSize: '26px', fontWeight: 800, marginBottom: '15px' }}>
                    Trụ sở chính
                  </h3>
                  <p style={{ color: '#666', fontSize: '15px', borderBottom: '2px solid #f8faff', paddingBottom: '20px', lineHeight: 1.6 }}>
                    Lô K1-1 KCN Đại Đồng – Hoàn Sơn, Xã Đại Đồng, Tỉnh Bắc Ninh, Việt Nam
                  </p>
                </div>

                {/* Hotline Block */}
                <div style={{ marginBottom: '25px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '15px' }}>
                    Hotline Tư vấn 24/7
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f8faff', padding: '12px 20px', borderRadius: '16px', border: '1px solid rgba(0, 45, 114, 0.05)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '11px', fontWeight: 800, color: '#002d72', textTransform: 'uppercase', opacity: 0.6 }}>Mr. Hải</span>
                        <span style={{ fontSize: '18px', fontWeight: 800, color: '#002d72' }}>0796.265.379</span>
                      </div>
                      <a href="tel:0796265379" className="phone-number-link" style={{ margin: 0, padding: 0, width: '45px', height: '45px', justifyContent: 'center', borderRadius: '50%', flexShrink: 0 }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      </a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f8faff', padding: '12px 20px', borderRadius: '16px', border: '1px solid rgba(0, 45, 114, 0.05)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '11px', fontWeight: 800, color: '#002d72', textTransform: 'uppercase', opacity: 0.6 }}>Mr. Đàn</span>
                        <span style={{ fontSize: '18px', fontWeight: 800, color: '#002d72' }}>0839.792.923</span>
                      </div>
                      <a href="tel:0839792923" className="phone-number-link" style={{ margin: 0, padding: 0, width: '45px', height: '45px', justifyContent: 'center', borderRadius: '50%', flexShrink: 0 }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div style={{ marginBottom: '30px' }}>
                  <div className="social-icons" style={{ marginTop: 0 }}>
                    <a href="https://www.facebook.com/profile.php?id=61572133607000" className="social-icon-link" title="Facebook" target="_blank" rel="noopener noreferrer">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="https://www.tiktok.com/@digitalprinting247?_r=1&_t=ZS-95gUhVBCXot" className="social-icon-link" title="TikTok" target="_blank" rel="noopener noreferrer">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.23-2.74.12-.69.29-1.27.87-1.62 1.56-.41.77-.48 1.67-.3 2.5.17.78.61 1.48 1.25 1.96.64.49 1.43.72 2.22.73 1.12.01 2.22-.49 2.93-1.36.31-.4.54-.87.6-1.37.07-1.11.04-2.22.04-3.33.01-4.67-.01-9.33 0-14z"></path></svg>
                    </a>
                    <a href="https://zalo.me/0336912239" className="social-icon-link" title="Zalo" target="_blank" rel="noopener noreferrer">
                      <svg width="18" height="18" viewBox="0 0 512 512" fill="currentColor">
                        <path d="M473.1 123.6C399.6 42.4 285.5 0 256 0c-29.5 0-143.6 42.4-217.1 123.6-70.1 77.4-86 182-41.9 276.1l-18.7 87c-1.3 6 4.3 11 9.6 8.9l104.9-42.5c44.8 19.3 93.6 29.5 143.2 29.5 29.5 0 143.6-42.4 217.1-123.6 70.1-77.4 86-182 41.9-276.1zM256 364.5c-77.2 0-140-62.8-140-140s62.8-140 140-140 140 62.8 140 140-62.8 140-140 140z"/>
                        <path d="M331.3 162.9h-123l123 123v41.3h-165.6v-41.3h123l-123-123v-41.3h165.6z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Main Action Button */}
                <a 
                  href="https://maps.app.goo.gl/sHcHtmQrmspVsrXf7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button primary btn-home-t" 
                  style={{ borderRadius: 99, width: '100%', justifyContent: 'center', marginBottom: '25px' }}
                >
                  <span>Mở vị trí trên Google Maps</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '10px' }}><path d="M9 18l6-6-6-6"></path></svg>
                </a>

                {/* Expanded Interactive Google Map - Now fills the remaining space */}
                <div 
                  className="google-map-wrapper" 
                  style={{ 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    flexGrow: 1, /* Automatically fill the remaining height of the card */
                    minHeight: '250px',
                    width: '100%', 
                    border: '1px solid #eee' 
                  }}
                >
                  <iframe title="Vị trí Bao bì Hải Quân" src={mapEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
