import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation } from '../../data/navigation'
const logo = "https://res.cloudinary.com/zq7yx874/image/upload/v1790234828/haiquan_web/logoHaiQuanWeb.webp"
import { useIsMobile } from '../../hooks/useIsMobile'

export function Header() {
  const [isStuck, setIsStuck] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const isMobile = useIsMobile(767)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY > 30)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  const mobileHeight = '70px'
  const desktopHeight = isStuck ? '85px' : '110px'
  const currentHeight = isMobile ? mobileHeight : desktopHeight

  return (
    <>
      <header 
        id="header-premium" 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          height: currentHeight,
          background: isStuck ? 'rgba(255, 255, 255, 0.92)' : 'transparent',
          backdropFilter: isStuck ? 'blur(15px)' : 'none',
          WebkitBackdropFilter: isStuck ? 'blur(15px)' : 'none',
          boxShadow: isStuck ? '0 10px 40px rgba(0, 45, 114, 0.08)' : 'none',
          borderBottom: isStuck ? '1px solid rgba(0, 45, 114, 0.05)' : 'none',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', position: 'relative' }}>
          {/* LEFT: LOGO */}
          <div id="logo-branding-hq" style={{ transition: 'all 0.4s ease', flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <Link to="/" title="Hải Quân Packaging" rel="home">
              <img
                src={logo}
                alt="Logo Hải Quân"
                style={{ 
                  height: isMobile ? '45px' : (isStuck ? '60px' : '85px'),
                  width: 'auto', 
                  display: 'block',
                  filter: !isStuck ? 'brightness(0) invert(1)' : 'none', 
                  transition: 'all 0.4s ease',
                  objectFit: 'contain'
                }}
              />
            </Link>
          </div>

          {!isMobile && (
            <>
              {/* CENTER: MAIN MENU WITH DROPDOWN */}
              <nav style={{ flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, height: '100%', alignItems: 'center' }}>
                  {navigation.map((item) => {
                    if (item.type === 'dropdown') {
                      const isHovered = activeDropdown === item.label
                      return (
                        <li 
                          key={item.label} 
                          style={{ position: 'relative', margin: '0 18px', display: 'flex', alignItems: 'center', height: '100%' }}
                          onMouseEnter={() => setActiveDropdown(item.label)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <Link 
                            to={item.to} 
                            style={{ 
                              color: isHovered || location.pathname.includes('/san-pham') ? '#ffb806' : (isStuck ? '#002d72' : '#ffffff'), 
                              fontWeight: 800, 
                              fontSize: '15px', 
                              textTransform: 'uppercase', 
                              letterSpacing: '1px', 
                              textDecoration: 'none', 
                              transition: 'color 0.3s ease',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '10px 0'
                            }}
                          >
                            <span>{item.label}</span>
                            <svg 
                              width="12" 
                              height="12" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="3" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              style={{ 
                                transition: 'transform 0.3s ease', 
                                transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)' 
                              }}
                            >
                              <path d="M6 9l6 6 6-6"/>
                            </svg>
                          </Link>

                          {/* Dropdown Menu Card */}
                          <div 
                            style={{
                              position: 'absolute',
                              top: '100%',
                              left: '50%',
                              transform: isHovered ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(12px)',
                              opacity: isHovered ? 1 : 0,
                              visibility: isHovered ? 'visible' : 'hidden',
                              pointerEvents: isHovered ? 'auto' : 'none',
                              transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
                              background: '#ffffff',
                              borderRadius: '16px',
                              padding: '12px',
                              boxShadow: '0 20px 45px rgba(0, 38, 100, 0.18)',
                              border: '1px solid rgba(0, 38, 100, 0.08)',
                              minWidth: '260px',
                              zIndex: 1005
                            }}
                          >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              {item.children.map((child) => {
                                const isHighlight = child.to.includes('thung-carton-3-lop') || child.to.includes('thung-carton-5-lop')
                                return (
                                  <NavLink 
                                    key={child.to} 
                                    to={child.to}
                                    style={({ isActive }) => ({
                                      padding: '10px 16px',
                                      borderRadius: '10px',
                                      fontSize: '14px',
                                      fontWeight: isActive || isHighlight ? 800 : 600,
                                      color: isActive ? '#ffb806' : '#002664',
                                      background: isActive ? '#f0f4f9' : (isHighlight ? '#f8fafc' : 'transparent'),
                                      textDecoration: 'none',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      transition: 'all 0.2s ease'
                                    })}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.background = '#f0f4f9'
                                      e.currentTarget.style.color = '#002d72'
                                      e.currentTarget.style.paddingLeft = '20px'
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.background = isHighlight ? '#f8fafc' : 'transparent'
                                      e.currentTarget.style.color = '#002664'
                                      e.currentTarget.style.paddingLeft = '16px'
                                    }}
                                  >
                                    <span>{child.label}</span>
                                    {isHighlight && (
                                      <span style={{ fontSize: '10px', background: '#002664', color: '#fff', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>B2B</span>
                                    )}
                                  </NavLink>
                                )
                              })}
                            </div>
                          </div>
                        </li>
                      )
                    }

                    return (
                      <li key={item.to} style={{ margin: '0 18px' }}>
                        <NavLink to={item.to} style={({ isActive }) => ({ color: isActive ? '#ffb806' : (isStuck ? '#002d72' : '#ffffff'), fontWeight: isActive ? 800 : 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none', transition: 'color 0.3s ease' })}>
                          {item.label}
                        </NavLink>
                      </li>
                    )
                  })}
                </ul>
              </nav>

              {/* RIGHT: CONTACT BUTTON */}
              <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Link 
                  to="/lien-he" 
                  style={{ 
                    borderRadius: '99px',
                    padding: '12px 28px',
                    fontSize: '14px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    background: 'linear-gradient(90deg, #10355f 0%, #2c787a 100%)',
                    color: '#ffffff',
                    textDecoration: 'none',
                    boxShadow: isStuck ? '0 5px 15px rgba(16, 53, 95, 0.3)' : '0 10px 25px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center'
                  }}
                >
                  <span>LIÊN HỆ NGAY</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '10px' }}><path d="M9 18l6-6-6-6"></path></svg>
                </Link>
              </div>
            </>
          )}

          {isMobile && (
            <>
              {/* CONTACT BUTTON NEXT TO MENU ON SUBPAGES */}
              {location.pathname !== '/' && (
                <Link 
                  to="/lien-he"
                  style={{
                    position: 'absolute',
                    right: '65px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    borderRadius: 99, 
                    padding: '7px 16px', 
                    fontSize: '11px', 
                    fontWeight: 800, 
                    textTransform: 'uppercase', 
                    background: 'linear-gradient(90deg, #10355f 0%, #2c787a 100%)', 
                    color: '#ffffff',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: '0 4px 10px rgba(16, 53, 95, 0.3)'
                  }}
                >
                  LIÊN HỆ
                </Link>
              )}

              {/* NÚT MENU TỐI GIẢN (MINIMALIST) - ÉP GÓC PHẢI TUYỆT ĐỐI */}
              <div 
                onClick={() => setIsMenuOpen(true)} 
                style={{ 
                  position: 'absolute',
                  right: '15px', // NEO CHẶT VÀO GÓC PHẢI
                  top: '50%',
                  transform: 'translateY(-50%)', // CÂN BẰNG CHIỀU DỌC
                cursor: 'pointer',
                display: 'flex', 
                alignItems: 'center', 
                padding: '10px', // Vùng chạm tối ưu
                color: !isStuck ? '#ffffff' : '#002d72',
                transition: 'color 0.3s ease',
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </div>
            </>
          )}
        </div>
      </header>

      {/* Overlay Backdrop */}
      <div 
        onClick={() => setIsMenuOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1999,
          opacity: isMenuOpen ? 1 : 0,
          visibility: isMenuOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease'
        }}
      />

      {/* Modern White-Glass Menu Sidebar (2/3 width drawer) */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          right: 0,
          width: '75%',
          maxWidth: '340px',
          background: 'rgba(255, 255, 255, 0.98)',
          boxShadow: '-10px 0 40px rgba(0,0,0,0.1)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          zIndex: 2000,
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
          opacity: isMenuOpen ? 1 : 0,
          visibility: isMenuOpen ? 'visible' : 'hidden',
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)'
        }}
      >
        <div style={{ 
            display: 'flex', 
            justifyContent: 'flex-start', 
            alignItems: 'center', 
            padding: '0 15px', 
            height: '70px',
            position: 'relative' 
        }}>
             <div 
               onClick={() => setIsMenuOpen(false)} 
               style={{ 
                 position: 'absolute',
                 right: '15px',
                 top: '50%',
                 transform: 'translateY(-50%)',
                 cursor: 'pointer', 
                 display: 'flex', 
                 alignItems: 'center', 
                 padding: '10px',
                 color: '#002d72',
                 transition: 'opacity 0.3s ease'
               }}
             >
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                 <line x1="18" y1="6" x2="6" y2="18"></line>
                 <line x1="6" y1="6" x2="18" y2="18"></line>
               </svg>
             </div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '30px 25px 30px 25px', overflowY: 'auto' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navigation.map((item, index) => {
              if (item.type === 'dropdown') {
                return (
                  <li key={item.label} style={{ marginBottom: '24px' }}>
                    <div style={{ color: '#002d72', fontSize: '20px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                      {item.label}
                    </div>
                    <ul style={{ listStyle: 'none', paddingLeft: '16px', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', borderLeft: '2px solid #002d72' }}>
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <NavLink to={child.to} onClick={() => setIsMenuOpen(false)} style={({ isActive }) => ({ color: isActive ? '#ffb806' : '#475569', fontSize: '16px', fontWeight: 700, textDecoration: 'none' })}>
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              }
              return (
                <li key={item.to} style={{ marginBottom: '24px', opacity: isMenuOpen ? 1 : 0, transform: isMenuOpen ? 'translateX(0)' : 'translateX(30px)', transition: `all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) ${index * 0.1}s` }}>
                  <NavLink to={item.to} style={({ isActive }) => ({ color: isActive ? '#ffb806' : '#002d72', fontSize: '20px', fontWeight: 800, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px' })}>
                    {item.label}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>

        <div style={{ padding: '30px 20px', borderTop: '1px solid rgba(0,45,114,0.05)', textAlign: 'center' }}>
            <p style={{ color: '#aaa', fontSize: '12px', marginBottom: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>Hotline Tư Vấn</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
                <a href="tel:0796265379" style={{ color: '#002d72', fontSize: '18px', fontWeight: 900, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '11px', color: '#888', fontWeight: 700, textTransform: 'uppercase' }}>Mr. Hải:</span> 0796.265.379
                </a>
                <a href="tel:0839792923" style={{ color: '#002d72', fontSize: '18px', fontWeight: 900, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '11px', color: '#888', fontWeight: 700, textTransform: 'uppercase' }}>Mr. Đàn:</span> 0839.792.923
                </a>
            </div>
            <div style={{ marginTop: '20px' }}>
              <NavLink to="/lien-he" style={{ width: '100%', borderRadius: 99, padding: '14px 0', fontSize: '14px', fontWeight: 800, background: 'linear-gradient(90deg, #10355f 0%, #2c787a 100%)', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', boxShadow: '0 8px 20px rgba(16,53,95,0.4)' }}>
                <span>BẮT ĐẦU DỰ ÁN NGAY</span>
                {/* THÊM MŨI TÊN TẠI ĐÂY */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '12px' }}><path d="M9 18l6-6-6-6"></path></svg>
              </NavLink>
            </div>
        </div>
      </div>
    </>
  )
}
