import React, { useEffect, useState } from 'react';
import Link from './Link';

export default function RecentlyViewed() {
  const [recent, setRecent] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check local storage for the last package viewed
    const lastViewed = localStorage.getItem('spin_last_viewed');
    if (lastViewed) {
      try {
        const parsed = JSON.parse(lastViewed);
        // Only show if it was viewed in the last 15 minutes
        if (Date.now() - parsed.timestamp < 15 * 60 * 1000) {
          setRecent(parsed);
          // Show after 3 seconds
          const timer = setTimeout(() => setVisible(true), 3000);
          return () => clearTimeout(timer);
        }
      } catch (e) {
        localStorage.removeItem('spin_last_viewed');
      }
    }
  }, []);

  if (!visible || !recent) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm bg-[#0c0c0c] border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl flex items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
          <img src={recent.image} alt={recent.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <span className="text-[9px] text-[#14833b] font-bold uppercase tracking-wider block">Still Planning?</span>
          <span className="text-xs font-bold text-white line-clamp-1">{recent.name}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button 
          onClick={() => window.triggerEnquiryModal && window.triggerEnquiryModal(recent)} 
          className="text-[9px] bg-white text-black hover:bg-[#14833b] hover:text-white px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider transition-colors cursor-pointer"
        >
          Enquire Now
        </button>
        <button 
          onClick={() => setVisible(false)} 
          className="text-white/40 hover:text-white text-xs px-1.5 py-1"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
