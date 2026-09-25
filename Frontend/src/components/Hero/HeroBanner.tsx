import { useIsMobile } from '../../hooks/useIsMobile'

type HeroBannerProps = {
  kicker?: string
  title: string
  description?: string
  backgroundImage?: string
  videoUrl?: string
  align?: 'left' | 'center'
}

export function HeroBanner(props: HeroBannerProps) {
  const isMobile = useIsMobile(767)
  
  if (isMobile) {
    return <HeroBannerMobile {...props} />
  }

  return <HeroBannerDesktop {...props} />
}

/* ==========================================
   SUBPAGE MOBILE HERO - 25VH (OPTIMIZED)
   ========================================== */
function HeroBannerMobile({ title, backgroundImage, videoUrl }: HeroBannerProps) {
  return (
    <section 
      style={{ 
        height: '25vh', // THU GỌN: Chỉ chiếm 1/4 màn hình điện thoại
        backgroundColor: '#000c22', 
        position: 'relative', 
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '40px', // Bù trừ chiều cao của thanh Header để text nằm đúng tâm vùng hiển thị
        paddingLeft: '20px',
        paddingRight: '20px'
      }}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {videoUrl ? (
          <video autoPlay loop muted playsInline preload="auto" poster="https://res.cloudinary.com/zq7yx874/image/upload/v1790234795/haiquan_web/Hero-Image-1-1.webp" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5) blur(0px)' }}>
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <div style={{ width: '100%', height: '100%', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.45)' }} />
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 10%, rgba(0,12,34,0.9) 100%)' }} />
      </div>

      <div 
         style={{ 
           position: 'relative', 
           zIndex: 2, 
           textAlign: 'center', 
           width: '100%', 
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           animation: 'fade-up 0.8s ease-out' 
         }}
      >
        <h1 style={{ 
          color: '#ffffff', 
          fontSize: '20px', // Thu nhỏ nhẹ để cân đối 25vh
          fontWeight: 900, 
          lineHeight: 1.15, 
          marginBottom: '10px'
        }}>
          {title}
        </h1>
        <div style={{ width: '25px', height: '3px', background: '#ffb806', borderRadius: '4px', marginBottom: '10px' }}></div>
      </div>

      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

/* ==========================================
   SUBPAGE DESKTOP HERO - 320PX (OPTIMIZED)
   ========================================== */
function HeroBannerDesktop({ kicker, title, description, backgroundImage, videoUrl, align = 'center' }: HeroBannerProps) {
  return (
    <section 
      style={{ 
        backgroundColor: '#000c22', 
        overflow: 'hidden', 
        position: 'relative', 
        minHeight: '320px', // THU GỌN: Dải tiêu đề tinh giản trên Desktop
        display: 'flex', 
        alignItems: 'center',
        paddingTop: '100px'
      }}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        {videoUrl ? (
          <>
            <video autoPlay loop muted playsInline preload="auto" poster="https://res.cloudinary.com/zq7yx874/image/upload/v1790234795/haiquan_web/Hero-Image-1-1.webp" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(2px) brightness(0.5)', transform: 'scale(1.1)' }}>
              <source src={videoUrl} type="video/mp4" />
            </video>
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.2)' }} />
          </>
        ) : (
          <>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.5) blur(2px)' }} />
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(3, 27, 71, 0.3)' }} />
          </>
        )}
      </div>

      <div style={{ 
        position: 'relative', 
        zIndex: 2, 
        width: '100%', 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '0 40px',
        textAlign: align as any
      }}>
        <div style={{ maxWidth: '950px', margin: align === 'center' ? '0 auto' : '0' }}>
            {kicker && (
              <h4 style={{ color: '#00d1ff', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', fontWeight: 700, marginBottom: '12px' }}>
                {kicker}
              </h4>
            )}
            <h2 style={{ color: '#ffffff', fontSize: '48px', fontWeight: 900, lineHeight: 1.1, marginBottom: '15px', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
              {title}
            </h2>
            {description && (
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', lineHeight: 1.6, margin: align === 'center' ? '0 auto' : '0' }}>
                {description}
              </p>
            )}
        </div>
      </div>
    </section>
  )
}
