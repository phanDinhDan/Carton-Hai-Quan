import { Link } from 'react-router-dom'
import { useIsMobile } from '../../hooks/useIsMobile'

type SplitSectionProps = {
  kicker?: string
  title: string
  description?: string
  image: string
  reverse?: boolean
  backgroundColor?: string
  ctaText?: string
  ctaTo?: string
  bullets?: string[]
}

export function SplitSection(props: SplitSectionProps) {
  const isMobile = useIsMobile(767) // Dùng hook nhận diện thiết bị
  
  if (isMobile) {
    return <SplitSectionMobile {...props} />
  }
  
  return <SplitSectionDesktop {...props} />
}

/* ==========================================
   GIAO DIỆN DI ĐỘNG RIÊNG BIỆT (MOBILE UI)
   ========================================== */
function SplitSectionMobile({ kicker, title, description = '', image, backgroundColor = 'transparent', ctaText, ctaTo, bullets }: SplitSectionProps) {
  const isVideo = image ? /\.(mp4|webm|mov|ogg|quicktime)$/i.test(image) : false

  return (
    <section className="section section-split-hq-mobile" style={{ backgroundColor, padding: '30px 0' }}>
      <div className="container" style={{ padding: '0 15px' }}>
        {/* Mobile-First Image Container */}
        <div style={{ marginBottom: '25px', position: 'relative', overflow: 'hidden', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0, 45, 114, 0.1)' }}>
          {isVideo ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              src={image}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          ) : (
            <img 
              src={image} 
              alt={title} 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          )}
        </div>

        {/* Mobile Content Area */}
        <div className="mobile-content-card" style={{ background: '#fff', padding: '25px 20px', borderRadius: '24px', position: 'relative', zIndex: 2, marginTop: '-50px', marginLeft: '10px', marginRight: '10px', boxShadow: '0 15px 40px rgba(0,0,0,0.06)' }}>
          {kicker && (
            <h4 style={{ color: '#00d1ff', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '11px', fontWeight: 800, marginBottom: '10px' }}>
              {kicker}
            </h4>
          )}
          
          <h2 style={{ color: '#002d72', fontSize: '24px', fontWeight: 800, lineHeight: 1.25, marginBottom: '8px' }}>
            {title}
          </h2>

          {/* MOBILE ACCENT DIVIDER - Horizontal version of the industrial line */}
          <div style={{ width: '40px', height: '4px', background: 'linear-gradient(to right, #002d72, transparent)', borderRadius: '4px', marginBottom: '18px' }}></div>
          
          <div className="description-text" style={{ fontSize: '15px', color: '#555', lineHeight: 1.6, marginBottom: '20px' }}>
            {description && description.split ? (
              description.split('\n').map((para, i) => (
                <p key={i} style={{ marginBottom: para ? '12px' : '0' }}>{para}</p>
              ))
            ) : (
              <p>{description}</p>
            )}
          </div>
          
          {bullets && (
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 25px 0' }}>
              {bullets.map((bullet, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px', fontSize: '14px', color: '#444' }}>
                  <span style={{ color: '#002664', fontWeight: 900, marginRight: '10px', background: '#f0f4f8', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', flexShrink: 0 }}>✓</span>
                  <span style={{ paddingTop: '1px' }}>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {ctaText && ctaTo && (
            <Link to={ctaTo} className="button primary btn-home-t" style={{ borderRadius: '99px', width: '100%', justifyContent: 'center', padding: '12px 20px', fontSize: '14px', fontWeight: 800 }}>
              <span>{ctaText}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '10px' }}><path d="M9 18l6-6-6-6"></path></svg>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

/* ==========================================
   GIAO DIỆN DESKTOP (INDUSTRIAL MASTER UI)
   ========================================== */
function SplitSectionDesktop({ kicker, title, description = '', image, reverse = false, backgroundColor = 'transparent', ctaText, ctaTo, bullets }: SplitSectionProps) {
  const isVideo = image ? /\.(mp4|webm|mov|ogg|quicktime)$/i.test(image) : false

  return (
    <section className="section section-split-hq" style={{ backgroundColor, padding: '40px 0' }}>
      <div className="section-content relative container">
        <div 
          className={`split-section-card row row-large align-middle ${reverse ? 'row-reverse' : ''}`}
          style={{ 
            margin: '0 auto',
            padding: '40px 20px',
            position: 'relative',
            overflow: 'visible'
          }}
        >
          <div className="col medium-6 small-12 large-6">
            <div className="col-inner">
              <div className="img-wrapper" style={{ overflow: 'hidden', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0, 45, 114, 0.12)' }}>
                {isVideo ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={image}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                ) : (
                  <img 
                    src={image} 
                    alt={title} 
                    style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.02)', transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)' }} 
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="col medium-6 small-12 large-6">
            <div className="col-inner text-left" style={{ padding: '30px 50px', position: 'relative' }}>
              {/* VERTICAL DIVIDER DESKTOP */}
              <div className="hide-for-medium" style={{ 
                position: 'absolute', 
                left: reverse ? 'auto' : '0', 
                right: reverse ? '0' : 'auto',
                top: '50%', 
                transform: 'translateY(-50%)', 
                width: '3px', 
                height: '75%', 
                background: 'linear-gradient(to bottom, #002d72 0%, rgba(0, 45, 114, 0.05) 100%)',
                borderRadius: '4px',
                zIndex: 5
              }}>
                <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '10px', height: '10px', background: '#002d72', borderRadius: '3px', boxShadow: '0 0 15px rgba(0, 45, 114, 0.4)' }}></div>
              </div>

              {kicker && (
                <h4 style={{ color: '#00d1ff', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '12px', fontWeight: 800, marginBottom: '18px' }}>
                  {kicker}
                </h4>
              )}
              <h2 style={{ color: '#002d72', fontSize: '32px', fontWeight: 800, lineHeight: 1.25, marginBottom: '25px' }}>
                {title}
              </h2>
              
              <div className="description-text" style={{ fontSize: '17px', color: '#444', lineHeight: 1.7, marginBottom: '30px' }}>
                {description && description.split ? (
                  description.split('\n').map((para, i) => (
                    <p key={i} style={{ marginBottom: para ? '18px' : '0' }}>{para}</p>
                  ))
                ) : (
                  <p>{description}</p>
                )}
              </div>
              
              {bullets && (
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 35px 0' }}>
                  {bullets.map((bullet, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px', fontSize: '15px', color: '#444' }}>
                      <span style={{ color: '#002664', fontWeight: 900, marginRight: '12px', background: '#f0f4f8', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✓</span>
                      <span style={{ paddingTop: '2px' }}>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {ctaText && ctaTo && (
                <Link to={ctaTo} className="button primary btn-home-t" style={{ borderRadius: '99px', padding: '12px 35px', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '1px' }}>
                  <span>{ctaText}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '10px' }}><path d="M9 18l6-6-6-6"></path></svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
