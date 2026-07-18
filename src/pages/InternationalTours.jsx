import React, { useState } from 'react';
import Link from '../components/Link';
import ScrollReveal from '../components/ScrollReveal';
import { internationalPackages, getSightImages } from '../data/packages';
import '../styles/c60c131a6bb38304.css';
import '../styles/cb2791722ffd6245.css';
import '../styles/d341a51a5a93a76c.css';
import '../styles/0272aeee0702e8c7.css';

// Auto-slideshow for sights/destinations images in the card header
function CardImageCarousel({ name, mainImage, getSightImages }) {
  const sights = getSightImages(name);
  const images = [mainImage, ...sights.map(img => img.url)];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((img, idx) => (
        <img 
          key={idx}
          src={img}
          alt={name}
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ${idx === index ? 'opacity-85' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      <div className="absolute bottom-3 right-3 flex gap-1 z-20 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full">
        {images.map((_, idx) => (
          <div 
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === index ? 'bg-[#14833b]' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
}


export default function InternationalTours() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPackages = internationalPackages.filter(pkg =>
    pkg.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollReveal>
      <div className="page-internationaltours-wrapper bg-white min-h-screen text-black overflow-x-hidden relative" style={{ backgroundColor: "#ffffff", color: "#000000" }}>
        {/* Decorative background blobs */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-secondary/5 blur-[180px] rounded-full"></div>
        </div>
        
        <div className="relative z-10">
          <div className="bg-white min-h-screen text-black pb-20 selection:bg-secondary selection:text-black" style={{ backgroundColor: "#ffffff", color: "#000000" }}>
            
            {/* Hero Section */}
            <div className="internal-hero-container snap-start">
              <div className="internal-hero-bg">
                <img 
                  alt="INTERNATIONAL TOURS" 
                  decoding="async" 
                  data-nimg="fill" 
                  className="object-cover brightness-[0.4]" 
                  style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920&auto=format&fit=crop"
                />
              </div>
              <div className="internal-hero-overlay"></div>
              <div className="container mx-auto px-4 h-full relative z-10 flex flex-col items-center justify-center text-center">
                <div className="w-full" style={{"opacity":"1","transform":"none"}}>
                  <h1 className="internal-hero-title">INTERNATIONAL</h1>
                  <span className="internal-hero-script" style={{"opacity":"0","transform":"translateY(10px)"}}>Find Your Perfect Escape</span>
                </div>
              </div>
              
              {/* Category Navigation */}
              <div className="page-header-categories-wrapper">
                <div className="page-header-categories">
                  <Link className="category-item" to="/package1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package category-icon" aria-hidden="true">
                      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                      <path d="M12 22V12"></path>
                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                      <path d="m7.5 4.27 9 5.15"></path>
                    </svg>
                    <span className="category-label">Our Package</span>
                  </Link>
                  <Link className="category-item" to="/domestic">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin category-icon" aria-hidden="true">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="category-label">Domestic Tours</span>
                  </Link>
                  <Link className="category-item" to="/desert-safari">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tree-palm category-icon" aria-hidden="true">
                      <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"></path>
                      <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"></path>
                      <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"></path>
                      <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"></path>
                    </svg>
                    <span className="category-label">Desert Safari</span>
                  </Link>
                  <Link className="category-item" to="/fleet">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car category-icon" aria-hidden="true">
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                      <circle cx="7" cy="17" r="2"></circle>
                      <path d="M9 17h6"></path>
                      <circle cx="17" cy="17" r="2"></circle>
                    </svg>
                    <span className="category-label">Fleet</span>
                  </Link>
                  <Link className="category-item" to="/visa">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text category-icon" aria-hidden="true">
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                      <path d="M10 9H8"></path>
                      <path d="M16 13H8"></path>
                      <path d="M16 17H8"></path>
                    </svg>
                    <span className="category-label">Visa</span>
                  </Link>
                </div>
              </div>
              
              <div className="internal-hero-scroll" style={{"opacity":"1"}}>
                <div className="scroll-line"></div>
                <span className="scroll-text">DISCOVER MORE</span>
              </div>
            </div>

            {/* Content & Search Section */}
            <section className="py-12 relative">
              <div className="container mx-auto px-4 w-full">
                <div className="max-w-7xl mx-auto space-y-12">
                  
                  {/* Title and Search */}
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 pb-10">
                    <div className="text-center md:text-left">
                      <span className="text-secondary font-bold tracking-[0.5em] uppercase text-xs mb-3 block">Find Your Perfect Escape</span>
                      <h2 className="text-4xl md:text-6xl font-serif font-bold leading-none tracking-tighter uppercase">
                        Global <span className="text-secondary italic font-serif">Packages.</span>
                      </h2>
                    </div>
                    
                    {/* Premium Search Bar */}
                    <div className="w-full md:w-96 relative">
                      <input 
                        type="text"
                        placeholder="Search destinations..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-[#14833b] transition-all" style={{ backgroundColor: "#f9fafb", color: "#000000", borderColor: "#e5e7eb" }}
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute right-4 top-3.5 text-gray-400 pointer-events-none">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>
                  </div>

                  {/* Packages Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPackages.length > 0 ? (
                      filteredPackages.map((pkg) => (
                        <div 
                          key={pkg.id} 
                          className="group relative rounded-[2rem] overflow-hidden bg-white border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:border-[#14833b]/20 hover:shadow-[0_20px_50px_rgba(20,131,59,0.08)] flex flex-col justify-between h-[510px] transition-all hover:translate-y-[-4px]" 
                          style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb", color: "#111827", opacity: "1", transform: "none" }}
                        >
                          {/* Image card wrapper */}
                          <div className="relative h-48 overflow-hidden shrink-0">
                            <CardImageCarousel name={pkg.name} mainImage={pkg.image} getSightImages={getSightImages} />
                            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-secondary text-xs font-bold font-mono border border-white/5 z-20">
                              {pkg.id}
                            </div>
                            <div className="absolute top-4 right-4 bg-[#14833b] text-white text-[9px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-lg shadow-lg z-20 border border-white/10">
                              Customizable
                            </div>
                          </div>

                          {/* Card Content */}
                          <div className="p-6 flex flex-col justify-between flex-grow">
                            <div>
                              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-[#14833b] transition-colors">
                                {pkg.name}
                              </h3>
                              
                              <ul className="space-y-2 overflow-y-auto max-h-36 pr-1 no-scrollbar mb-4">
                                {pkg.sights.map((sight, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-gray-700 text-xs font-light leading-relaxed" style={{ color: "#4b5563" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#14833b" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span>{sight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Action CTA Button */}
                            <div className="mt-4 pt-4 border-t border-white/5 shrink-0">
                              <button 
                                onClick={() => window.triggerEnquiryModal && window.triggerEnquiryModal(pkg)}
                                className="w-full text-center enquire-now-btn py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 block cursor-pointer"
                              >
                                Enquire Now
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-20 text-white/40 text-lg">
                        No destinations found matching your search.
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </section>
            
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
