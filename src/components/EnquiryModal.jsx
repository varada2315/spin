import React, { useState, useEffect, useRef } from 'react';
import { getPackageByName, getPackageByRoute, getSightImages } from '../data/packages';

export default function EnquiryModal({ isOpen, onClose, packageData }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    travellers: '1',
    message: ''
  });

  const [slideIndex, setSlideIndex] = useState(0);
  const autoPlayRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Resolve the full package data
  const pkg = packageData ? (
    getPackageByName(packageData.name?.trim() || '') || 
    (packageData.route && getPackageByRoute(packageData.route?.trim() || '')) || 
    packageData
  ) : null;

  console.log("EnquiryModal debug:", { packageData, pkg, sightsImages: pkg ? getSightImages((pkg.name || '').trim()) : [] });

  // Prepare images and captions for the slideshow
  const sightsImages = pkg ? getSightImages((pkg.name || '').trim()) : [];
  const slideshowItems = pkg ? [
    { url: pkg.image, caption: `Explore ${pkg.name}` },
    ...sightsImages.map((img, idx) => ({
      url: img.url,
      caption: (pkg.sights && pkg.sights[idx]) ? pkg.sights[idx] : img.name
    }))
  ] : [];

  // Reset states when modal opens
  useEffect(() => {
    if (isOpen) {
      setSlideIndex(0);
      setFormData({
        name: '',
        phone: '',
        date: '',
        travellers: '1',
        message: ''
      });
    }
  }, [isOpen]);

  // Slideshow Autoplay
  useEffect(() => {
    if (isOpen && slideshowItems.length > 0) {
      autoPlayRef.current = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % slideshowItems.length);
      }, 3500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isOpen, slideshowItems.length]);

  if (!isOpen || !pkg) return null;

  const handlePrevSlide = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setSlideIndex((prev) => (prev - 1 + slideshowItems.length) % slideshowItems.length);
  };

  const handleNextSlide = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setSlideIndex((prev) => (prev + 1) % slideshowItems.length);
  };

  const handleDotClick = (idx) => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setSlideIndex(idx);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert('Please fill in all required fields.');
      return;
    }

    const text = `Hi SPIN Global, I want to book/enquire about the *${pkg.name}* package.
Details:
- *Name*: ${formData.name}
- *Contact*: ${formData.phone}
- *Travel Date*: ${formData.date}
- *Travellers*: ${formData.travellers} Pax
- *Message*: ${formData.message || 'None'}`;

    window.open(`https://wa.me/916284661722?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 transition-opacity duration-300"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        padding: isMobile ? '12px' : '24px',
        backgroundColor: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
    >
      <div 
        className="animate-in fade-in zoom-in-95 duration-300"
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          width: '100%',
          maxWidth: '1024px',
          height: isMobile ? 'auto' : '600px',
          maxHeight: isMobile ? 'calc(100vh - 24px)' : 'none',
          overflow: 'hidden',
          borderRadius: '2rem',
          border: '1px solid rgba(255,255,255,0.1)',
          backgroundColor: '#050e1d',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute z-30 transition-colors cursor-pointer"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: 'rgba(0,0,0,0.4)',
            color: 'rgba(255,255,255,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '12px'
          }}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Left Side: Image Slideshow (50%) */}
        <div 
          style={{
            width: isMobile ? '100%' : '50%',
            height: isMobile ? '220px' : '100%',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#020617',
            flexShrink: 0
          }}
        >
          {slideshowItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: idx === slideIndex ? 1 : 0,
                transition: 'opacity 1000ms ease-in-out',
                pointerEvents: idx === slideIndex ? 'auto' : 'none',
                width: '100%',
                height: '100%'
              }}
            >
              <img 
                src={item.url} 
                alt={item.caption} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.7
                }}
              />
              {/* Gradient Overlay */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, #050e1d 0%, rgba(0,0,0,0.2) 60%, transparent 100%)'
                }}
              ></div>
              
              {/* Caption */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                  zIndex: 10
                }}
              >
                <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[10px] mb-2 block">
                  Attraction Highlight
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white drop-shadow-md">
                  {item.caption}
                </h3>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrevSlide}
            className="transition-all hover:scale-105 active:scale-95 cursor-pointer"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'rgba(0,0,0,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              position: 'absolute',
              top: '50%',
              left: '16px',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              fontSize: '12px',
              zIndex: 20
            }}
            aria-label="Previous slide"
          >
            ❮
          </button>
          <button 
            onClick={handleNextSlide}
            className="transition-all hover:scale-105 active:scale-95 cursor-pointer"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'rgba(0,0,0,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              position: 'absolute',
              top: '50%',
              right: '16px',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              fontSize: '12px',
              zIndex: 20
            }}
            aria-label="Next slide"
          >
            ❯
          </button>

          {/* Indicators / Dots */}
          <div 
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '6px',
              zIndex: 20
            }}
          >
            {slideshowItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                style={{
                  width: idx === slideIndex ? '20px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: idx === slideIndex ? '#14833b' : 'rgba(255,255,255,0.4)',
                  transition: 'all 300ms ease',
                  cursor: 'pointer',
                  padding: 0
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Form Details (50%) */}
        <div 
          style={{
            width: isMobile ? '100%' : '50%',
            height: isMobile ? 'auto' : '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: isMobile ? '20px' : '40px',
            overflowY: 'auto',
            boxSizing: 'border-box'
          }}
          className="no-scrollbar"
        >
          <div className="mb-6 flex gap-4 items-center">
            <div className="w-16 h-16 shrink-0 bg-white/5 border border-white/10 rounded-2xl p-1 flex items-center justify-center relative overflow-hidden">
              <img src="/assets/mascot.png" alt="Mascot Guide" className="object-contain w-full h-full" />
            </div>
            <div>
              <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[10px] mb-1 block">
                Direct Reservation
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
                Book {pkg ? pkg.name : 'Package'}
              </h2>
            </div>
          </div>

          {/* Mascot Speech bubble */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-3 mb-5 relative flex items-start gap-3">
            <div className="absolute top-[-8px] left-[32px] w-4 h-4 bg-[#050e1d] border-t border-l border-white/10 transform rotate-45"></div>
            <p className="text-xs text-stone-200 font-light leading-relaxed">
              "Great choice, explorer! 🌟 I'm ready to craft your itinerary for <strong>{pkg ? pkg.name : 'your destination'}</strong>. Tell me a bit about your travel plans below!"
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[9px] uppercase tracking-widest text-white/40 mb-1.5 font-bold">
                Your Name
              </label>
              <input 
                required 
                type="text" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-secondary transition-all" 
                placeholder="Full name" 
              />
            </div>

            <div>
              <label className="block text-[9px] uppercase tracking-widest text-white/40 mb-1.5 font-bold">
                WhatsApp / Phone Number
              </label>
              <input 
                required 
                type="tel" 
                value={formData.phone} 
                onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-secondary transition-all" 
                placeholder="WhatsApp number" 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[9px] uppercase tracking-widest text-white/40 mb-1.5 font-bold">
                  Travel Date
                </label>
                <input 
                  required 
                  type="date" 
                  value={formData.date} 
                  onChange={(e) => setFormData({...formData, date: e.target.value})} 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-secondary transition-all" 
                />
              </div>

              <div>
                <label className="block text-[9px] uppercase tracking-widest text-white/40 mb-1.5 font-bold">
                  Travellers
                </label>
                <select 
                  value={formData.travellers} 
                  onChange={(e) => setFormData({...formData, travellers: e.target.value})} 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-secondary transition-all"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <option key={n} value={n} className="bg-[#050e1d]">
                      {n} Pax
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[9px] uppercase tracking-widest text-white/40 mb-1.5 font-bold">
                Special Requests (Optional)
              </label>
              <textarea 
                value={formData.message} 
                onChange={(e) => setFormData({...formData, message: e.target.value})} 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-secondary transition-all h-20 resize-none" 
                placeholder="E.g. flight inclusions, resort preferences..."
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold text-[10px] uppercase tracking-widest py-3 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99] mt-2"
            >
              Enquire on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
