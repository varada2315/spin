import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function MascotGuide() {
  const location = useLocation();
  const [bubbleText, setBubbleText] = useState('');
  const [showBubble, setShowBubble] = useState(true);
  const [bubbleKey, setBubbleKey] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const path = location.pathname;
    let message = "Welcome! 🌟 SPIN Global makes premium tours simple. Where shall we travel today?";

    if (path === '/domestic') {
      message = "Exploring Bharat! 🇮🇳 I highly recommend Kashmir or Andaman! Check out our custom packages below.";
    } else if (path === '/international') {
      message = "Going global! 🌏 Bali, Singapore, Thailand, and Europe are ready. Which is on your bucket list?";
    } else if (path === '/about') {
      message = "Want to know more about our brand philosophy? We treat every traveler like royalty! 👑";
    } else if (path === '/contact') {
      message = "Have questions? Ask me, or click here to chat with our human experts directly! 💬";
    } else if (path === '/fleet') {
      message = "Travel in comfort and style! Click any option to reserve your premium transport! 🚘";
    } else if (path === '/visa') {
      message = "Global travel approvals simplified! Need a visa? Click below to start your application! 🛂";
    } else if (path.startsWith('/packages/')) {
      const pkgName = path.split('/').pop().split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      message = `Beautiful choice! 🌴 Let me know if you want a custom quote for our premium ${pkgName} package!`;
    }

    setBubbleText(message);
    setShowBubble(true);
    setBubbleKey(prev => prev + 1); // trigger typewriter animation restart
  }, [location.pathname]);

  const handleMascotClick = () => {
    setShowBubble(prev => !prev);
  };

  const handleCtaClick = () => {
    if (window.triggerPlanMyTrip) {
      window.triggerPlanMyTrip();
    }
  };

  if (isMobile) return null;

  return (
    <div 
      className="fixed bottom-6 left-6 z-50 flex flex-col items-start pointer-events-none"
      style={{ maxWidth: '280px' }}
    >
      {/* Speech Bubble */}
      {showBubble && (
        <div 
          className="bg-black/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl relative mb-4 pointer-events-auto animate-in fade-in slide-in-from-bottom-2 duration-300"
          style={{
            boxShadow: '0 15px 30px rgba(0,0,0,0.5)',
            transformOrigin: 'bottom left'
          }}
        >
          {/* Bubble Arrow pointing down to mascot */}
          <div 
            className="absolute bottom-[-6px] left-[24px] w-3 h-3 bg-black/95 border-r border-b border-white/10"
            style={{ transform: 'rotate(45deg)' }}
          ></div>
 
          {/* Close Button */}
          <button 
            onClick={() => setShowBubble(false)}
            className="absolute top-2 right-2 text-white/40 hover:text-white transition-colors cursor-pointer text-[10px] w-4 h-4 flex items-center justify-center rounded-full bg-white/5 border border-white/5"
            aria-label="Dismiss message"
          >
            ✕
          </button>
 
          {/* Message Content */}
          <div key={bubbleKey} className="pr-2">
            <p className="text-[11px] text-white leading-relaxed font-medium font-sans text-left">
              {bubbleText}
            </p>
            <div className="mt-3 flex gap-2">
              <button 
                onClick={handleCtaClick}
                className="bg-white hover:bg-stone-200 text-black text-[9px] uppercase font-extrabold tracking-widest px-3 py-1.5 rounded-lg transition-all cursor-pointer shadow-sm"
              >
                Plan My Trip
              </button>
              <a 
                href="https://wa.me/916284661722" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#14833b] hover:bg-[#116e32] text-white text-[9px] uppercase font-extrabold tracking-widest px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mascot character image */}
      <div 
        onClick={handleMascotClick}
        className="w-16 h-16 md:w-20 md:h-20 cursor-pointer pointer-events-auto relative group"
        style={{
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.35))',
          animation: 'float-slow 6s ease-in-out infinite'
        }}
      >
        <img 
          src="/assets/mascot.png" 
          alt="SPIN Mascot Guide" 
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 group-active:scale-95"
        />
        
        {/* Hover Hint */}
        <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black/90 text-white text-[8px] uppercase font-bold tracking-widest px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-white/10 shadow-lg">
          Ask Guide
        </span>
      </div>

      {/* Embedded CSS for slow floating animation */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
      `}</style>
    </div>
  );
}
