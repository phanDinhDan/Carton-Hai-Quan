import { Link } from 'react-router-dom'

export type BlogCardModel = {
  title: string
  excerpt: string
  imageSrc: string
  categoryLabel: string
  to: string
  date?: string
  fullContent?: string
}

export function BlogCard({ title, excerpt, imageSrc, categoryLabel, to, date = "Tháng 4, 2024" }: BlogCardModel) {
  return (
    <div className="blog-card-wrapper" style={{ height: '100%', perspective: '1000px' }}>
      <Link to={to} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
        <div 
          className="premium-news-card"
          style={{
            position: 'relative',
            background: '#ffffff',
            borderRadius: '24px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
            boxShadow: '0 12px 30px rgba(0, 45, 114, 0.05)',
            border: '1px solid rgba(0, 45, 114, 0.05)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-12px)';
            e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 45, 114, 0.12)';
            const img = e.currentTarget.querySelector('img');
            if (img) img.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 45, 114, 0.05)';
            const img = e.currentTarget.querySelector('img');
            if (img) img.style.transform = 'scale(1)';
          }}
        >
          {/* IMAGE LAYER */}
          <div style={{ position: 'relative', overflow: 'hidden', height: '240px' }}>
             <img 
               src={imageSrc} 
               alt={title} 
               style={{ 
                 width: '100%', 
                 height: '100%', 
                 objectFit: 'cover', 
                 transition: 'transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)' 
               }} 
             />
             <div style={{ 
               position: 'absolute', 
               top: '15px', 
               left: '15px', 
               padding: '6px 16px', 
               background: 'linear-gradient(90deg, #10355f 0%, #2c787a 100%)', 
               borderRadius: '99px',
               color: '#fff',
               fontSize: '11px',
               fontWeight: 800,
               textTransform: 'uppercase',
               letterSpacing: '1px',
               zIndex: 2,
               boxShadow: '0 5px 12px rgba(16, 53, 95, 0.3)'
             }}>
               {categoryLabel}
             </div>
          </div>

          {/* CONTENT LAYER */}
          <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
             <span style={{ color: '#aaa', fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '10px' }}>{date}</span>
             <h3 style={{ 
               color: '#002d72', 
               fontSize: '20px', 
               fontWeight: 800, 
               lineHeight: 1.4, 
               marginBottom: '15px',
               display: '-webkit-box',
               WebkitLineClamp: 2,
               WebkitBoxOrient: 'vertical',
               overflow: 'hidden',
               transition: 'color 0.3s ease'
             }} className="title-target">
               {title}
             </h3>
             <p style={{ 
               color: '#666', 
               fontSize: '15px', 
               lineHeight: 1.6, 
               margin: 0,
               display: '-webkit-box',
               WebkitLineClamp: 3,
               WebkitBoxOrient: 'vertical',
               overflow: 'hidden',
               flex: 1
             }}>
               {excerpt}
             </p>

             <div style={{ 
                marginTop: '25px', 
                display: 'flex', 
                alignItems: 'center', 
                color: '#2c787a', 
                fontSize: '14px', 
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1px'
             }}>
               <span>Xem chi tiết</span>
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
             </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
