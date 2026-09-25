import { Link } from 'react-router-dom'
import { useIsMobile } from '../../hooks/useIsMobile'

type HeroSlide = {
  kicker?: string
  title: string
  description?: string
  backgroundImage: string
}

type HeroSliderProps = {
  slides: HeroSlide[]
}

export function HeroSlider({ slides }: HeroSliderProps) {
  const isMobile = useIsMobile(767)
  const s = slides[0]
  const videoUrl = '/video/bannerBG.mp4' // Video sẽ được lấy từ thư mục public/video

  if (isMobile) {
    return <HeroSliderMobile title={s.title} description={s.description} videoUrl={videoUrl} />
  }

  return (
    <div className="hero-slider-hq-layer">
      <section 
        id="hero-slider-hq-desktop"
        style={{ 
          overflow: 'hidden', 
          position: 'relative', 
          backgroundColor: '#000c22',
          minHeight: '780px',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '140px'
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
          <video autoPlay loop muted playsInline preload="auto" poster="https://res.cloudinary.com/zq7yx874/image/upload/v1790234795/haiquan_web/Hero-Image-1-1.webp" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(2px) brightness(0.6)', transform: 'scale(1.1)' }}>
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>

        <div style={{ 
          position: 'relative', 
          zIndex: 2, 
          width: '100%', 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '0 40px' 
        }}>
          <div style={{ maxWidth: '750px', textAlign: 'left' }}>
            {s.kicker && (
              <h4 style={{ color: '#00d1ff', textTransform: 'uppercase', letterSpacing: '2.5px', fontSize: '13px', fontWeight: 800, marginBottom: '20px' }}>
                {s.kicker}
              </h4>
            )}
            <h2 style={{ color: '#ffffff', fontSize: '64px', fontWeight: 900, lineHeight: 1.1, marginBottom: '25px', textShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>
              {s.title}
            </h2>
            {s.description && (
              <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '20px', lineHeight: 1.6, marginBottom: '40px', borderLeft: '3px solid #ffb806', paddingLeft: '25px' }}>
                {s.description}
              </p>
            )}
            <Link 
              to="/lien-he" 
              style={{ 
                borderRadius: '99px', 
                padding: '16px 45px', 
                fontSize: '17px', 
                fontWeight: 800, 
                display: 'inline-flex', 
                alignItems: 'center',
                background: 'linear-gradient(90deg, #10355f 0%, #2c787a 100%)', // CHÍNH XÁC THEO MẪU: Ocean-Deep Blue
                color: '#ffffff',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(16, 53, 95, 0.4)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              <span>LIÊN HỆ NGAY</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '12px' }}><path d="M9 18l6-6-6-6"></path></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function HeroSliderMobile({ title, description, videoUrl }: { title: string, description?: string, videoUrl: string }) {
  return (
    <section 
      style={{ 
        height: '75vh', 
        backgroundColor: '#000c22', 
        position: 'relative', 
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'flex-end',
        paddingBottom: '80px',
        paddingLeft: '20px',
        paddingRight: '20px'
      }}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video autoPlay loop muted playsInline preload="auto" poster="https://res.cloudinary.com/zq7yx874/image/upload/v1790234795/haiquan_web/Hero-Image-1-1.webp" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5) blur(0px)', transform: 'scale(1.1)' }}>
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, rgba(0,12,34,1) 100%)' }} />
      </div>

      <div 
         style={{ 
           position: 'relative', 
           zIndex: 2, 
           textAlign: 'left', 
           width: '100%', 
           padding: '28px 20px',
           borderRadius: '24px',
           background: 'rgba(255, 255, 255, 0.04)',
           backdropFilter: 'blur(12px)',
           WebkitBackdropFilter: 'blur(12px)',
           border: '1px solid rgba(255, 255, 255, 0.08)',
           animation: 'hero-reveal 1.2s cubic-bezier(0.19, 1, 0.22, 1)' 
         }}
      >
        <h1 style={{ color: '#ffffff', fontSize: '28px', fontWeight: 900, lineHeight: 1.15, marginBottom: '15px' }}>
          {title}
        </h1>

        <div style={{ width: '40px', height: '4px', background: '#ffb806', borderRadius: '4px', marginBottom: '18px' }}></div>

        {description && (
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '14px', lineHeight: 1.6, marginBottom: '25px', borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '15px' }}>
            {description}
          </p>
        )}

        <Link 
          to="/lien-he" 
          style={{ 
            borderRadius: '99px', 
            padding: '14px 40px', 
            fontSize: '14px', 
            fontWeight: 800, 
            textTransform: 'uppercase', 
            background: 'linear-gradient(90deg, #10355f 0%, #2c787a 100%)', // ĐỒI MÀU MOBILE THEO MẪU
            color: '#ffffff',
            border: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            textDecoration: 'none',
            boxShadow: '0 8px 18px rgba(16, 53, 95, 0.4)'
          }}
        >
          <span>LIÊN HỆ NGAY</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '10px' }}><path d="M9 18l6-6-6-6"></path></svg>
        </Link>
      </div>

      <style>{`
        @keyframes hero-reveal {
          from { opacity: 0; transform: translateY(30px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  )
}
