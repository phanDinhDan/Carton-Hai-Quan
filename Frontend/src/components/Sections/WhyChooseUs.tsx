import { Link } from 'react-router-dom'

interface WhyChooseUsProps {
  kicker: string
  title: string
  bullets?: string[] // Make optional for safety
  image: string
}

export function WhyChooseUs({ kicker, title, bullets = [], image }: WhyChooseUsProps) {
  const isVideo = image ? /\.(mp4|webm|mov|ogg|quicktime)$/i.test(image) : false

  return (
    <section className="section bg-light" id="section_810449713" style={{ padding: '80px 0' }}>
      <div className="section-content relative container">
        <div className="row">
          <div className="col large-12">
            <div 
              className="anti-premium-card"
              style={{ 
                display: 'flex',
                backgroundColor: '#ffffff',
                borderRadius: '30px',
                overflow: 'hidden',
                boxShadow: '0 25px 80px rgba(0,0,0,0.15)',
                border: '1px solid rgba(0, 38, 100, 0.12)',
                minHeight: '520px',
                padding: 0
              }}
            >
              <div className="feature-text-side" style={{ flex: '1 1 50%', padding: '70px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="text tieude-2">
              <h4 style={{ color: '#00d1ff', textTransform: 'uppercase', letterSpacing: '2.5px', fontSize: '14.5px', fontWeight: 700, marginBottom: '18px' }}>{kicker}</h4>
              <h2 style={{ fontSize: '38px', color: '#002664', fontWeight: 800, marginBottom: '25px', lineHeight: 1.25 }}>{title}</h2>
              <p style={{ fontSize: '17px', color: '#555', marginBottom: '22px', fontWeight: 600 }}>Bao bì Hải Quân cam kết mang lại:</p>
              
              {/* Safe Bullet Check - Prevents crash if bullets is undefined */}
              <ul style={{ color: '#444', lineHeight: 1.9, fontSize: '16px', paddingLeft: '5px' }}>
                {bullets && bullets.length > 0 ? (
                  bullets.map((bullet, index) => (
                    <li key={index} style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#002664', fontWeight: 900, marginRight: '12px', marginTop: '2px' }}>✓</span>
                      {bullet}
                    </li>
                  ))
                ) : null}
              </ul>
            </div>
            <div style={{ marginTop: '35px' }}>
              <Link to="/lien-he" className="button primary is-link" style={{ background: '#002d72', color: '#fff', padding: '10px 30px', borderRadius: '99px', display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                <span>liên hệ ngay</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '12px' }}><path d="M9 18l6-6-6-6"></path></svg>
              </Link>
            </div>
          </div>

          <div className="feature-media-side" style={{ flex: '1 1 50%', position: 'relative', overflow: 'hidden', minHeight: '400px' }}>
            {isVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                src={image}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                className="feature-img-hq"
              />
            ) : (
              <img
                loading="lazy"
                decoding="async"
                src={image}
                alt={title}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                className="feature-img-hq"
              />
            )}
          </div>
        </div>
        </div>
        </div>

        <style>{`
          .anti-premium-card:hover .feature-img-hq {
            transform: scale(1.05);
          }
          @media (max-width: 850px) {
            .anti-premium-card {
              flex-direction: column-reverse !important;
              min-height: auto !important;
            }
            .feature-text-side {
              padding: 45px 30px !important;
            }
            .feature-media-side {
              padding-top: 65%; /* Proper aspect ratio for image on mobile */
              height: auto !important;
              min-height: auto !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
