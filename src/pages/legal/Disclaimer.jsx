import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';

export default function Disclaimer() {
  return (
    <ScrollReveal>
      <div className="bg-[#050e1d] min-h-screen text-white py-32 font-sans selection:bg-[#14833b] selection:text-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-[#14833b] border-b border-white/10 pb-4">Disclaimer</h1>
          <div className="space-y-6 text-gray-400 leading-relaxed font-light">
            <p className="text-lg">Last Updated: July 2026</p>
            <p>The information provided on the SPIN Global website (spinglobal.in) is for general information purposes only. While we endeavor to keep all information updated and accurate, we make no guarantees regarding completeness, accuracy, or real-time visa policy modifications.</p>
            <h2 className="text-2xl font-bold text-white mt-8">Embassy Authority</h2>
            <p>SPIN Global is a private visa advisory and travel planning consultancy. We assist in formatting documentation, submitting applications, and advising on best practices. The authority to grant or reject a visa rests entirely with the respective government embassy or immigration authority.</p>
            <h2 className="text-2xl font-bold text-white mt-8">External Links</h2>
            <p>Our website may contain links to external government immigration portals. We are not responsible for the privacy regulations or updates on these third-party governmental domains.</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
