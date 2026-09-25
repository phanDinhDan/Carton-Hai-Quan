import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { MobileBottomNav } from '../../components/Navigation/MobileBottomNav'
import { useIsMobile } from '../../hooks/useIsMobile'

export function RootLayout() {
  const isMobile = useIsMobile(767)
  const { pathname } = useLocation()
  const [showContactMenu, setShowContactMenu] = useState(false)

  // Tự động cuộn lên đầu trang khi chuyển trang
  useEffect(() => {
    window.scrollTo(0, 0)
    setShowContactMenu(false)
  }, [pathname])

  return (
    <div id="wrapper">
      <Header />
      <main id="main" className="">
        <div id="content" role="main">
          <Outlet />
        </div>
      </main>
      <Footer />

      {/* Modern Bottom Navigation for Mobile */}
      <MobileBottomNav />

      {/* Floating Phone Contact Button for Desktop Only */}
      {!isMobile && (
        <div 
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 1500,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '15px'
          }}
        >
          {/* Contact Menu Popup */}
          <div 
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '15px',
              boxShadow: '0 10px 40px rgba(0, 45, 114, 0.15)',
              border: '1px solid rgba(0, 45, 114, 0.05)',
              display: showContactMenu ? 'flex' : 'none',
              flexDirection: 'column',
              gap: '10px',
              minWidth: '220px',
              animation: 'slideInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              marginBottom: '10px'
            }}
          >
            <div style={{ padding: '5px 10px 10px 10px', borderBottom: '1px solid #f0f4f8' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Chọn nhân viên tư vấn</span>
            </div>
            
            <a 
              href="tel:0796265379"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 15px',
                borderRadius: '12px',
                textDecoration: 'none',
                color: '#002d72',
                transition: 'all 0.2s ease',
                background: '#f8faff'
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#eef2ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = '#f8faff')}
            >
              <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#002d72', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, opacity: 0.6 }}>Mr. Hải</span>
                <span style={{ fontSize: '15px', fontWeight: 800 }}>0796.265.379</span>
              </div>
            </a>

            <a 
              href="tel:0839792923"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 15px',
                borderRadius: '12px',
                textDecoration: 'none',
                color: '#002d72',
                transition: 'all 0.2s ease',
                background: '#f8faff'
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#eef2ff')}
              onMouseOut={(e) => (e.currentTarget.style.background = '#f8faff')}
            >
              <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#002d72', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, opacity: 0.6 }}>Mr. Đàn</span>
                <span style={{ fontSize: '15px', fontWeight: 800 }}>0839.792.923</span>
              </div>
            </a>
          </div>

          {/* Main Toggle Button */}
          <button
            onClick={() => setShowContactMenu(!showContactMenu)}
            style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#e60000',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              border: 'none',
              boxShadow: '0 4px 20px rgba(230, 0, 0, 0.4)',
              cursor: 'pointer',
              animation: 'pulse-call 2s infinite',
              position: 'relative',
              transition: 'all 0.3s ease',
              transform: showContactMenu ? 'rotate(90deg)' : 'rotate(0deg)',
              minWidth: '0px',
              padding: '0px'
            }}
            aria-label="Liên hệ tư vấn"
          >
            {showContactMenu ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V21C22 21.5523 21.5523 22 21 22C10.5066 22 2 13.4934 2 3C2 2.44772 2.44772 2 3 2H7.07992C7.59325 2 8.02677 2.38575 8.11029 2.89139L8.71832 6.575C8.79093 7.01488 8.61869 7.4589 8.26127 7.73801L5.954 9.53931C7.38202 12.3908 9.60925 14.618 12.4607 16.046L14.262 13.7387C14.5411 13.3813 14.9851 13.2091 15.425 13.2817L19.1086 13.8897C19.6142 13.9732 20 14.4068 20 14.9201V16.92Z" fill="#ffffff" style={{ fill: '#ffffff' }} />
              </svg>
            )}
          </button>
        </div>
      )}

      <style>
        {`
          @keyframes pulse-call {
            0% { box-shadow: 0 0 0 0 rgba(230, 0, 0, 0.7); transform: scale(1); }
            50% { box-shadow: 0 0 0 20px rgba(230, 0, 0, 0); transform: scale(1.08); }
            100% { box-shadow: 0 0 0 0 rgba(230, 0, 0, 0); transform: scale(1); }
          }
          @keyframes slideInUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  )
}
