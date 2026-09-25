import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useIsMobile } from '../../hooks/useIsMobile'

export function MobileBottomNav() {
  const isMobile = useIsMobile(767)
  const { pathname } = useLocation()
  const [showCallMenu, setShowCallMenu] = useState(false)

  // Auto-close menu when navigating
  useEffect(() => {
    setShowCallMenu(false)
  }, [pathname])

  if (!isMobile) return null

  return (
    <>
      {/* Action Sheet Backdrop */}
      <div 
        onClick={() => setShowCallMenu(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(4px)',
          zIndex: 1000,
          display: showCallMenu ? 'block' : 'none',
          animation: 'fadeIn 0.3s ease'
        }}
      />

      {/* Action Sheet for Calling */}
      <div 
        style={{
          position: 'fixed',
          bottom: showCallMenu ? '0' : '-350px',
          left: 0,
          right: 0,
          background: '#ffffff',
          borderTopLeftRadius: '30px',
          borderTopRightRadius: '30px',
          padding: '25px 20px 40px 20px',
          zIndex: 1001,
          transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
          boxShadow: '0 -10px 40px rgba(0,0,0,0.1)'
        }}
      >
        <div style={{ width: '40px', height: '5px', background: '#e2e8f0', borderRadius: '10px', margin: '0 auto 20px auto' }} />
        <h4 style={{ textAlign: 'center', color: '#002d72', fontSize: '18px', fontWeight: 800, marginBottom: '20px' }}>Liên hệ với chúng tôi</h4>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a 
            href="tel:0796265379"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 20px',
              background: '#f8faff',
              borderRadius: '16px',
              textDecoration: 'none',
              border: '1px solid rgba(0, 45, 114, 0.05)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#888', textTransform: 'uppercase' }}>Mr. Hải</span>
              <span style={{ fontSize: '18px', fontWeight: 800, color: '#002d72' }}>0796.265.379</span>
            </div>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#002d72', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
          </a>

          <a 
            href="tel:0839792923"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 20px',
              background: '#f8faff',
              borderRadius: '16px',
              textDecoration: 'none',
              border: '1px solid rgba(0, 45, 114, 0.05)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#888', textTransform: 'uppercase' }}>Mr. Đàn</span>
              <span style={{ fontSize: '18px', fontWeight: 800, color: '#002d72' }}>0839.792.923</span>
            </div>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#002d72', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
          </a>
        </div>
      </div>

      <div 
        className="mobile-bottom-nav" 
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          right: '20px',
          height: '65px',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          borderRadius: '25px',
          boxShadow: '0 15px 40px rgba(0, 45, 114, 0.2)',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '0 10px',
          border: '1px solid rgba(255, 255, 255, 0.5)'
        }}
      >
        {/* Home Link */}
        <NavLink to="/" style={({ isActive }) => ({ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: isActive ? '#002d72' : '#888', transition: 'all 0.3s' })}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <span style={{ fontSize: '10px', fontWeight: 800, marginTop: '4px', textTransform: 'uppercase' }}>Trang chủ</span>
        </NavLink>
  
        {/* Products Link */}
        <NavLink to="/thung-carton" style={({ isActive }) => ({ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: isActive ? '#002d72' : '#888', transition: 'all 0.3s' })}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          <span style={{ fontSize: '10px', fontWeight: 800, marginTop: '4px', textTransform: 'uppercase' }}>Sản phẩm</span>
        </NavLink>
  
        {/* Floating Center Action - Call Now Toggle */}
        <div 
          onClick={() => setShowCallMenu(!showCallMenu)}
          style={{ 
            background: '#ffb806', 
            width: '55px', 
            height: '55px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: '#002664', 
            boxShadow: '0 8px 25px rgba(255, 184, 6, 0.4)',
            transform: 'translateY(-15px)',
            border: '4px solid #fff',
            cursor: 'pointer'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
  
        {/* News/Blog Link */}
        <NavLink to="/blog" style={({ isActive }) => ({ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: isActive ? '#002d72' : '#888', transition: 'all 0.3s' })}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <span style={{ fontSize: '10px', fontWeight: 800, marginTop: '4px', textTransform: 'uppercase' }}>Tin tức</span>
        </NavLink>
  
        {/* Contact Link */}
        <NavLink to="/lien-he" style={({ isActive }) => ({ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: isActive ? '#002d72' : '#888', transition: 'all 0.3s' })}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          <span style={{ fontSize: '10px', fontWeight: 800, marginTop: '4px', textTransform: 'uppercase' }}>Liên hệ</span>
        </NavLink>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </>
  )
}
