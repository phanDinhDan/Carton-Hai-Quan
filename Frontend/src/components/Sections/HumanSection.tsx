
import { Link } from 'react-router-dom'

interface HumanSectionProps {
  title: string
  description: string
  video: string
}

export function HumanSection({ title, description, video }: HumanSectionProps) {
  return (
    <section className="section" id="section_1901469362" style={{ padding: '60px 0' }}>
      <div className="section-content relative container">
        <div className="row">
          <div className="col large-12">
            <div 
              className="unified-feature-card"
              style={{ 
                display: 'flex', 
                backgroundColor: '#ffffff', 
                borderRadius: '30px', 
                overflow: 'hidden', 
                boxShadow: '0 25px 80px rgba(0,0,0,0.15)',
                border: '1px solid rgba(0, 38, 100, 0.12)',
                transform: 'translateZ(0)' /* Force overflow mask on video elements */
              }}
            >
          <div className="feature-media-side" style={{ flex: '1 1 50%', position: 'relative', minHeight: '400px' }}>
            {video && video.match(/\.(mp4|webm|ogg)$/i) ? (
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                preload="auto"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              >
                <source src={video} type="video/mp4" />
              </video>
            ) : (
              <img 
                src={video || 'https://res.cloudinary.com/zq7yx874/image/upload/v1790234799/haiquan_web/IMG_7148-scaled.webp'} 
                alt={title} 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            )}
            {/* Optional Overlay if media is too bright */}
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.1)' }} />
          </div>

          {/* Content Side */}
          <div className="feature-text-side" style={{ flex: '1 1 50%', padding: '70px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="text tieude-2">
              <h2 style={{ fontSize: '36px', color: '#002d72', fontWeight: 700, marginBottom: '20px', lineHeight: 1.3 }}>{title}</h2>
              {description.split('\n\n').map((para, i) => (
                <p key={i} style={{ fontSize: '16px', color: '#555', marginBottom: '20px', lineHeight: 1.8 }}>{para}</p>
              ))}
            </div>
            <div style={{ marginTop: '20px' }}>
              <Link to="/lien-he" className="button primary is-link" style={{ background: '#002d72', color: '#fff', padding: '10px 30px', borderRadius: '99px', display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                <span>liên hệ ngay</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '10px' }}><path d="M9 18l6-6-6-6"></path></svg>
              </Link>
            </div>
          </div>
        </div>
        </div>
        </div>

        <style>{`
          @media (max-width: 850px) {
            .unified-feature-card {
              flex-direction: column !important;
            }
            .feature-text-side {
              padding: 40px 30px !important;
            }
            .feature-media-side {
              padding-top: 60%; /* Maintains aspect ratio for video on mobile */
              min-height: auto !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}

