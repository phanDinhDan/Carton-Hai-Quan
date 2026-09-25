
import { Link } from 'react-router-dom'

interface CapacitySectionProps {
  title: string
  description: string
  backgroundImage: string
  cta: string
}

export function CapacitySection({ title, description, backgroundImage, cta }: CapacitySectionProps) {
  return (
    <section className="section" id="section_capacity" style={{ padding: '60px 0', backgroundColor: '#f9f9f9' }}>
      <div className="section-content relative container">
        <div className="row">
          <div className="col large-12">
            <div 
              className="capacity-banner-card"
              style={{ 
                position: 'relative',
                borderRadius: '30px', 
                overflow: 'hidden', 
                boxShadow: '0 20px 50px rgba(0, 45, 114, 0.15)',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {/* Background Image & Gradient Overlay */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <img 
              src={backgroundImage} 
              alt="Background" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <div 
              style={{ 
                position: 'absolute', 
                inset: 0, 
                /* Professional navy gradient overlay to make text pop while revealing the image on the right */
                background: 'linear-gradient(90deg, rgba(0, 45, 114, 0.95) 0%, rgba(0, 45, 114, 0.8) 50%, rgba(0, 45, 114, 0.4) 100%)' 
              }} 
            />
          </div>

          {/* Foreground Content */}
          <div className="relative" style={{ zIndex: 1, padding: '60px 80px', width: '100%', maxWidth: '800px' }}>
            <div className="text tieude-2">
              <h2 style={{ fontSize: '42px', color: '#ffffff', fontWeight: 700, marginBottom: '20px', lineHeight: 1.2, textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                {title}
              </h2>
              <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '35px', lineHeight: 1.7, textShadow: '0 2px 5px rgba(0,0,0,0.3)' }}>
                {description}
              </p>
            </div>

            <Link to="/lien-he" className="button primary" style={{ background: '#ffb806', color: '#002d72', padding: '12px 35px', borderRadius: '99px', fontSize: '16px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', border: 'none', boxShadow: '0 4px 15px rgba(255, 184, 6, 0.3)', textDecoration: 'none' }}>
              <span>{cta}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '10px' }}><path d="M9 18l6-6-6-6"></path></svg>
            </Link>
          </div>
        </div>
        </div>
        </div>

        <style>{`
          @media (max-width: 850px) {
            .capacity-banner-card > div.relative {
              padding: 50px 30px !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}

