import React, { useState, useEffect } from 'react';

export default function TimedPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);
  const [isCloseHovered, setIsCloseHovered] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    // Show popup after 6 seconds
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('spin_popup_dismissed');
      if (!dismissed) {
        setShow(true);
      }
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('spin_popup_dismissed', 'true');
    setShow(false);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    
    // Redirect to WhatsApp message with subscription note
    const msg = `Hi SPIN Global, I'm interested in subscribing to customized holiday packages and visa offers!\n\nEmail: ${email}`;
    window.open(`https://wa.me/916284661722?text=${encodeURIComponent(msg)}`, '_blank');
    handleDismiss();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#0b1d3a] border border-white/10 rounded-[2.5rem] p-8 max-w-md w-full text-center relative shadow-2xl animate-in zoom-in-95 duration-300">
        <button 
          onClick={handleDismiss} 
          onMouseEnter={() => setIsCloseHovered(true)}
          onMouseLeave={() => setIsCloseHovered(false)}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            color: isCloseHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
            fontSize: '22px',
            cursor: 'pointer',
            padding: '8px',
            lineHeight: '1',
            boxShadow: 'none',
            transition: 'color 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            outline: 'none'
          }}
          title="Dismiss"
        >
          ✕
        </button>
        
        <div className="w-16 h-16 rounded-full bg-[#14833b]/10 border border-[#14833b]/30 flex items-center justify-center mx-auto mb-6 text-[#14833b]">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-compass animate-spin-slow">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
          </svg>
        </div>

        <span className="text-[#14833b] text-[10px] uppercase font-bold tracking-[0.2em] mb-2 block">Special Invitation</span>
        <h3 className="text-2xl font-serif font-bold text-white mb-3">Plan Your Next Trip!</h3>
        <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
          Connect with a dedicated travel specialist for a free visa review and a fully customized itinerary.
        </p>

        <form onSubmit={handleSubscribe} className="space-y-4">
          <input 
            type="email" 
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            style={{
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: `1px solid ${isInputFocused ? '#14833b' : 'rgba(255, 255, 255, 0.15)'}`,
              borderRadius: '12px',
              padding: '14px 16px',
              color: '#ffffff',
              fontSize: '14px',
              outline: 'none',
              textAlign: 'center',
              boxShadow: isInputFocused ? '0 0 0 2px rgba(20, 131, 59, 0.2)' : 'none',
              transition: 'all 0.3s ease'
            }}
            required
          />
          <button 
            type="submit"
            onMouseEnter={() => setIsSubmitHovered(true)}
            onMouseLeave={() => setIsSubmitHovered(false)}
            style={{
              width: '100%',
              backgroundColor: isSubmitHovered ? '#1b9d4a' : '#14833b',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              padding: '14px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: isSubmitHovered ? '0 6px 20px rgba(27, 157, 74, 0.6)' : '0 4px 14px rgba(20, 131, 59, 0.4)',
              transform: isSubmitHovered ? 'translateY(-1px)' : 'none',
              transition: 'all 0.3s ease',
              outline: 'none'
            }}
          >
            Get Free Consultation
          </button>
        </form>
      </div>
    </div>
  );
}
