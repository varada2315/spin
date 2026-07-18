import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Link from './Link';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrolled(scrollTop > 10);
    };
    
    // Check initial scroll state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isLightPage = ['/', '/domestic', '/international'].includes(location.pathname);
  
  const headerBgClass = mobileMenuOpen
    ? 'bg-[#050e1d] border-b border-white/5 py-3 shadow-lg'
    : (scrolled 
        ? (isLightPage 
            ? 'bg-white/95 backdrop-blur-md border-b border-stone-200 py-2 shadow-md' 
            : 'bg-[#050e1d]/95 backdrop-blur-md border-b border-white/5 py-2 shadow-lg') 
        : 'bg-transparent border-transparent shadow-none py-5');

  const logoTextClass = scrolled && isLightPage ? 'text-black font-black' : 'text-white font-light';
  const logoLightMode = mobileMenuOpen ? false : (scrolled && isLightPage);

  const getNavLinkClass = (path) => {
    const isActive = location.pathname === path;
    const base = "text-xs uppercase font-bold tracking-widest hover:text-[#14833b] transition-all duration-300 whitespace-nowrap";
    
    if (isActive) {
      return `${base} text-[#14833b] opacity-100`;
    }
    
    if (scrolled && isLightPage) {
      return `${base} text-black opacity-100 hover:text-[#14833b]`;
    }
    
    return `${base} text-white/80 opacity-80 hover:opacity-100`;
  };

  const getMobileNavLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      fontSize: '20px',
      textTransform: 'uppercase',
      fontWeight: '800',
      letterSpacing: '0.2em',
      color: isActive ? '#14833b' : 'rgba(255, 255, 255, 0.8)',
      paddingTop: '10px',
      paddingBottom: '10px',
      transition: 'color 0.3s ease',
      textDecoration: 'none',
      display: 'block'
    };
  };

  const headerStyle = mobileMenuOpen
    ? {
        backgroundColor: '#050e1d',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        paddingTop: '12px',
        paddingBottom: '12px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
      }
    : {};

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${!mobileMenuOpen ? headerBgClass : ''}`}
      style={{ opacity: 1, transform: 'translateY(0)', ...headerStyle }}
    >
      {/* Main navigation header */}
      <div className="container mx-auto px-4 flex items-center transition-all duration-500 py-2">
        <Link className="flex items-center z-50 shrink-0" to="/">
          <Logo 
            lightMode={logoLightMode} 
            className="h-14 md:h-18 w-auto transition-all duration-300"
          />
        </Link>
        <div className="ml-auto flex items-center gap-4 md:gap-8">
          {/* Desktop links */}
          <nav className="hidden xl:flex items-center gap-8">
            <Link className={getNavLinkClass('/')} to="/">Home page</Link>
            <Link className={getNavLinkClass('/domestic')} to="/domestic">Domestic</Link>
            <Link className={getNavLinkClass('/international')} to="/international">International</Link>
            <Link className={getNavLinkClass('/about')} to="/about">About us</Link>
            <Link className={getNavLinkClass('/contact')} to="/contact">Contact</Link>
          </nav>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-4 z-50 shrink-0">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                boxShadow: 'none',
                padding: '8px',
                cursor: 'pointer',
                outline: 'none',
                color: mobileMenuOpen 
                  ? '#ffffff' 
                  : (scrolled && isLightPage ? '#000000' : '#ffffff'),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.3s ease'
              }}
              className="xl:hidden"
              type="button" 
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-6 w-6">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-6 w-6">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#050e1d',
            zIndex: 40,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '120px 24px 48px',
            boxSizing: 'border-box'
          }}
          className="xl:hidden"
        >
          <nav 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              width: '100%',
              maxWidth: '320px',
              marginBottom: '32px'
            }}
          >
            <Link onClick={() => setMobileMenuOpen(false)} style={getMobileNavLinkStyle('/')} to="/">Home page</Link>
            <Link onClick={() => setMobileMenuOpen(false)} style={getMobileNavLinkStyle('/domestic')} to="/domestic">Domestic</Link>
            <Link onClick={() => setMobileMenuOpen(false)} style={getMobileNavLinkStyle('/international')} to="/international">International</Link>
            <Link onClick={() => setMobileMenuOpen(false)} style={getMobileNavLinkStyle('/about')} to="/about">About us</Link>
            <Link onClick={() => setMobileMenuOpen(false)} style={getMobileNavLinkStyle('/contact')} to="/contact">Contact</Link>
          </nav>
          
          <div style={{ width: '100%', maxWidth: '200px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)', marginBottom: '32px' }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', width: '100%', maxWidth: '280px' }}>
            <button 
              onClick={() => { setMobileMenuOpen(false); window.triggerPlanMyTrip && window.triggerPlanMyTrip(); }}
              style={{
                width: '100%',
                backgroundColor: '#14833b',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                padding: '14px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'center',
                boxShadow: '0 4px 14px rgba(20, 131, 59, 0.3)'
              }}
            >
              Plan My Trip
            </button>
            <div style={{ display: 'flex', gap: '24px', marginTop: '16px', color: 'rgba(255, 255, 255, 0.5)' }}>
              <a href="tel:+916284661722" style={{ color: 'inherit', transition: 'color 0.3s ease' }} className="hover:text-[#14833b]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', transition: 'color 0.3s ease' }} className="hover:text-[#14833b]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="https://wa.me/916284661722" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', transition: 'color 0.3s ease' }} className="hover:text-[#14833b]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


