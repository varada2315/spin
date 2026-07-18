import React from 'react';
import Link from './Link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050e1d] text-white pt-10 border-t border-white/5 selection:bg-[#14833b] selection:text-black relative z-10">
      <div className="bg-transparent rounded-[2.5rem] pt-20 pb-4 px-10 md:px-20 mb-4 border-t border-white/[0.02]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-8">
          
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Link className="inline-block" to="/">
                  <Logo 
                    lightMode={false} 
                    className="h-12 md:h-14 w-auto"
                  />
                </Link>
              </div>
              <div className="text-gray-400 text-sm leading-relaxed max-w-lg space-y-1 font-light opacity-55">
                <p>SPIN Global is a Ludhiana-based travel and visa consultancy offering fully customized domestic and international holiday packages, alongside business, tourist, visitor, and B2B visa services for clients all across India.</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-8 md:gap-12">
              <div className="space-y-3">
                <h4 className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">Phone / WhatsApp</h4>
                <Link to="tel:+916284661722" className="block text-white text-base font-medium tracking-tight hover:text-[#14833b] transition-colors cursor-pointer">+91 6284661722</Link>
              </div>
              <div className="space-y-3">
                <h4 className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">Email</h4>
                <Link to="mailto:info@spinglobal.in" className="block text-white text-base font-medium tracking-tight border-b border-white/20 pb-0.5 hover:text-[#14833b] transition-colors cursor-pointer">info@spinglobal.in</Link>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 md:gap-x-12">
              <div className="md:pl-12">
                <h3 className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Packages</h3>
                <ul className="space-y-4">
                  <li><Link className="text-gray-400 text-sm hover:text-white transition-colors font-light" to="/domestic">Domestic Packages</Link></li>
                  <li><Link className="text-gray-400 text-sm hover:text-white transition-colors font-light" to="/international">International Packages</Link></li>
                  <li><Link className="text-gray-400 text-sm hover:text-white transition-colors font-light" to="/visa">Visa Services</Link></li>
                  <li><Link className="text-gray-400 text-sm hover:text-white transition-colors font-light" to="/fleet">Luxury Fleet</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Legal</h3>
                <ul className="space-y-4">
                  <li><Link className="text-gray-400 text-sm hover:text-white transition-colors font-light" to="/terms">Terms of service</Link></li>
                  <li><Link className="text-gray-400 text-sm hover:text-white transition-colors font-light" to="/privacy">Privacy policy</Link></li>
                  <li><Link className="text-gray-400 text-sm hover:text-white transition-colors font-light" to="/refund">Refund Policy</Link></li>
                  <li><Link className="text-gray-400 text-sm hover:text-white transition-colors font-light" to="/disclaimer">Disclaimer</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Quick links</h3>
                <ul className="space-y-4">
                  <li><Link className="text-gray-400 text-sm hover:text-white transition-colors font-light" to="/">Home page</Link></li>
                  <li><Link className="text-gray-400 text-sm hover:text-white transition-colors font-light" to="/about">About us</Link></li>
                  <li><Link className="text-gray-400 text-sm hover:text-white transition-colors font-light" to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 pb-4 mb-4 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="relative p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/10 shadow-2xl backdrop-blur-sm w-full max-w-lg mx-auto overflow-hidden">
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#14833b]/5 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 mx-auto group-hover:bg-[#14833b]/20 group-hover:text-[#14833b] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-5 h-5" aria-hidden="true">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <h3 className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Headquarters</h3>
                  <h5 className="text-2xl md:text-3xl font-serif font-bold text-white mb-5">Ludhiana, India</h5>
                  <div className="space-y-1 text-gray-400 text-sm font-light leading-relaxed mb-8">
                    <p>Chandigarh Road, Ludhiana, Punjab, India</p>
                    <p className="text-xs text-[#14833b] font-bold uppercase tracking-wider">Online Availability — 24/7 Support</p>
                  </div>
                  <Link to="https://maps.google.com" target="_blank" className="inline-flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-wider hover:bg-[#14833b] hover:text-white transition-colors duration-300">Get Directions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-6 border-t border-white/5">
          <p className="text-gray-600 text-[9px] uppercase tracking-[0.4em] font-light">© 2026 SPIN Global. All rights reserved. Created under &quot;See Places In New ways&quot;.</p>
        </div>
      </div>
    </footer>
  );
}
