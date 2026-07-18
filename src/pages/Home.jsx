import React from 'react';
import Link from '../components/Link';
import ScrollReveal from '../components/ScrollReveal';
import '../styles/c60c131a6bb38304.css';
import '../styles/cb2791722ffd6245.css';
import '../styles/0af97432752930cd.css';
import '../styles/36f37d68f8b1eea4.css';
import '../styles/d8d63bc0096300aa.css';
import '../styles/2721a31764380f73.css';

export default function Home() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [hoveredBtn, setHoveredBtn] = React.useState(null);
  const [hasMounted, setHasMounted] = React.useState(false);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    setHasMounted(true);
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(err => {
        console.warn("Autoplay failed, browser blocked it:", err);
      });
    }
  }, []);
  
  const getCardStyle = (index, activeIndex) => {
    const diff = (index - activeIndex + 7) % 7;
    const transitionStyle = hasMounted ? 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'none';
    if (diff === 0) {
      return {
        zIndex: 30,
        opacity: 1,
        transform: 'scale(1.1) translateX(0px)',
        transition: transitionStyle,
        pointerEvents: 'auto'
      };
    } else if (diff === 1) {
      return {
        zIndex: 20,
        opacity: 0.7,
        transform: 'translateX(320px) scale(0.9) rotate(5deg)',
        transition: transitionStyle,
        pointerEvents: 'auto'
      };
    } else if (diff === 2) {
      return {
        zIndex: 10,
        opacity: 0.4,
        transform: 'translateX(580px) scale(0.7) rotate(10deg)',
        transition: transitionStyle,
        pointerEvents: 'auto'
      };
    } else if (diff === 3) {
      return {
        zIndex: 0,
        opacity: 0,
        transform: 'translateX(800px) scale(0.5) rotate(15deg)',
        transition: transitionStyle,
        pointerEvents: 'none'
      };
    } else if (diff === 4) {
      return {
        zIndex: 0,
        opacity: 0,
        transform: 'translateX(-800px) scale(0.5) rotate(-15deg)',
        transition: transitionStyle,
        pointerEvents: 'none'
      };
    } else if (diff === 5) {
      return {
        zIndex: 10,
        opacity: 0.4,
        transform: 'translateX(-580px) scale(0.7) rotate(-10deg)',
        transition: transitionStyle,
        pointerEvents: 'auto'
      };
    } else if (diff === 6) {
      return {
        zIndex: 20,
        opacity: 0.7,
        transform: 'translateX(-320px) scale(0.9) rotate(-5deg)',
        transition: transitionStyle,
        pointerEvents: 'auto'
      };
    }
  };

  const featuredPackages = [
    { name: "Indonesia (Bali)", label: "Tropical Oasis", desc: "Tropical breeze, mystical temples & pristine beaches.", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80", route: "/packages/indonesia-bali" },
    { name: "Singapore", label: "Futuristic Vibe", desc: "Gardens by the Bay, luxury shopping & dynamic skyline.", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80", route: "/packages/singapore" },
    { name: "Malaysia", label: "Cultural Escape", desc: "Petronas towers, rainforests & historic streetscapes.", img: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80", route: "/packages/malaysia" },
    { name: "Thailand", label: "Exotic Retreat", desc: "Gilded temples, lively night markets & islands.", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80", route: "/packages/thailand" },
    { name: "Maldives", label: "Private Lagoon", desc: "Turquoise waters, luxury overwater villas & coral reefs.", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80", route: "/packages/maldives" },
    { name: "Vietnam", label: "Heritage Cruise", desc: "Halong Bay sails, ancient towns & flavorful local cuisines.", img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80", route: "/packages/vietnam" },
    { name: "Schengen Wonders", label: "European Royalty", desc: "Historic architecture, Swiss peaks & rich heritage.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", route: "/packages/schengen" }
  ];

  return (
    <ScrollReveal>
      <div className="page-home-wrapper bg-white min-h-screen text-black overflow-x-hidden relative" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
        {/* Decorative background blobs */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-secondary/5 blur-[180px] rounded-full"></div>
        </div>
        
        <div className="relative z-10">
          <div className="bg-white min-h-screen text-black overflow-x-hidden relative" style={{ backgroundColor: '#ffffff', color: '#000000' }}><div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden"><div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full animate-pulse"></div><div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-secondary/5 blur-[180px] rounded-full"></div></div><div className="relative z-10"><div><div className="page-header-container"><section className="page-header-hero !h-[100dvh] flex items-center justify-center"><div className="absolute inset-0 z-0 bg-stone-900"><video ref={videoRef} src="/assets/8747377-uhd_4096_2160_30fps.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover scale-105"></video><div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div><div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]"></div></div><div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col items-center pt-24 pb-16"><div className="flex flex-col items-center w-full" style={{"opacity":"1","transform":"none"}}><h1 className="hero-main-title tracking-tight" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: '1.1' }}>SPIN THE GLOBE</h1><span className="page-header-script text-[#14833b] mt-4 block">Explore the World</span><p className="text-white/60 text-xs md:text-sm font-light tracking-widest mt-6 uppercase">See Places in New ways</p><button onClick={() => window.triggerPlanMyTrip && window.triggerPlanMyTrip()} className="mt-10 hero-cta-btn px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 cursor-pointer relative z-30">Plan my trip</button></div></div><div className="page-header-categories-wrapper"><div className="page-header-categories">
  <Link className="category-item " to="/international">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package category-icon" aria-hidden="true"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
    <span className="category-label">International</span>
  </Link>
  <Link className="category-item " to="/domestic">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin category-icon" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
    <span className="category-label">Domestic</span>
  </Link>
  <Link className="category-item " to="/visa">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text category-icon" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
    <span className="category-label">Visa Services</span>
  </Link>
  <Link className="category-item " to="/fleet">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car category-icon" aria-hidden="true"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
    <span className="category-label">Fleet</span>
  </Link>
  <Link className="category-item " to="/contact">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail category-icon" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    <span className="category-label">Contact Us</span>
  </Link>
</div></div></section></div></div><section className="snap-start bg-white relative flex flex-col items-center pt-10 md:pt-20 pb-2" style={{ backgroundColor: '#ffffff' }}><div className="container mx-auto px-4 text-center z-20 mb-4 md:mb-6"><span className="text-secondary uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold block mb-1">Wonderful Place For You</span><h2 className="text-3xl md:text-5xl font-serif font-bold text-black leading-tight">Explore by Category</h2></div><div className="w-full mt-2"><div className="marquee-container group/container relative"><div className="marquee-track"><div className="marquee-item"><Link to="/package1"><div className="relative h-[400px] w-[300px] rounded-3xl overflow-hidden group border border-stone-200 cursor-pointer"><img alt="Our Package" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 group-hover:scale-110" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div><div className="absolute bottom-0 left-0 p-6 w-full"><h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-secondary transition-colors">International Packages</h3><p className="text-gray-400 text-xs font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">Curated escapes across the globe.</p></div></div></Link></div><div className="marquee-item"><Link to="/uae-tours"><div className="relative h-[400px] w-[300px] rounded-3xl overflow-hidden group border border-stone-200 cursor-pointer"><img alt="UAE Tours" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 group-hover:scale-110" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div><div className="absolute bottom-0 left-0 p-6 w-full"><h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-secondary transition-colors">Domestic Packages</h3><p className="text-gray-400 text-xs font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">Explore Kashmir, Goa, Kerala & more.</p></div></div></Link></div><div className="marquee-item"><Link to="/visa"><div className="relative h-[400px] w-[300px] rounded-3xl overflow-hidden group border border-stone-200 cursor-pointer"><img alt="Tourist Visa" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 group-hover:scale-110" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div><div className="absolute bottom-0 left-0 p-6 w-full"><h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-secondary transition-colors">Tourist &amp; Visitor Visas</h3><p className="text-gray-400 text-xs font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">Global travel approvals simplified.</p></div></div></Link></div><div className="marquee-item"><Link to="/fleet"><div className="relative h-[400px] w-[300px] rounded-3xl overflow-hidden group border border-stone-200 cursor-pointer"><img alt="Luxury Fleet" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 group-hover:scale-110" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div><div className="absolute bottom-0 left-0 p-6 w-full"><h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-secondary transition-colors">Luxury Fleet</h3><p className="text-gray-400 text-xs font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">Travel in style and comfort.</p></div></div></Link></div><div className="marquee-item"><Link to="/visa"><div className="relative h-[400px] w-[300px] rounded-3xl overflow-hidden group border border-stone-200 cursor-pointer"><img alt="Visa Service" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 group-hover:scale-110" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div><div className="absolute bottom-0 left-0 p-6 w-full"><h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-secondary transition-colors">Visa Services</h3><p className="text-gray-400 text-xs font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">Tourist, Visitor, Business & B2B Visa.</p></div></div></Link></div><div className="marquee-item"><Link to="/package1"><div className="relative h-[400px] w-[300px] rounded-3xl overflow-hidden group border border-stone-200 cursor-pointer"><img alt="Our Package" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 group-hover:scale-110" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div><div className="absolute bottom-0 left-0 p-6 w-full"><h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-secondary transition-colors">International Packages</h3><p className="text-gray-400 text-xs font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">Curated escapes across the globe.</p></div></div></Link></div><div className="marquee-item"><Link to="/uae-tours"><div className="relative h-[400px] w-[300px] rounded-3xl overflow-hidden group border border-stone-200 cursor-pointer"><img alt="UAE Tours" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 group-hover:scale-110" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div><div className="absolute bottom-0 left-0 p-6 w-full"><h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-secondary transition-colors">Domestic Packages</h3><p className="text-gray-400 text-xs font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">Explore Kashmir, Goa, Kerala & more.</p></div></div></Link></div><div className="marquee-item"><Link to="/visa"><div className="relative h-[400px] w-[300px] rounded-3xl overflow-hidden group border border-stone-200 cursor-pointer"><img alt="Tourist Visa" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 group-hover:scale-110" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div><div className="absolute bottom-0 left-0 p-6 w-full"><h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-secondary transition-colors">Tourist &amp; Visitor Visas</h3><p className="text-gray-400 text-xs font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">Global travel approvals simplified.</p></div></div></Link></div><div className="marquee-item"><Link to="/fleet"><div className="relative h-[400px] w-[300px] rounded-3xl overflow-hidden group border border-stone-200 cursor-pointer"><img alt="Luxury Fleet" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 group-hover:scale-110" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div><div className="absolute bottom-0 left-0 p-6 w-full"><h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-secondary transition-colors">Luxury Fleet</h3><p className="text-gray-400 text-xs font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">Travel in style and comfort.</p></div></div></Link></div><div className="marquee-item"><Link to="/visa"><div className="relative h-[400px] w-[300px] rounded-3xl overflow-hidden group border border-stone-200 cursor-pointer"><img alt="Visa Service" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 group-hover:scale-110" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div><div className="absolute bottom-0 left-0 p-6 w-full"><h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-secondary transition-colors">Visa Services</h3><p className="text-gray-400 text-xs font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">Tourist, Visitor, Business & B2B Visa.</p></div></div></Link></div><div className="marquee-item"><Link to="/package1"><div className="relative h-[400px] w-[300px] rounded-3xl overflow-hidden group border border-stone-200 cursor-pointer"><img alt="Our Package" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 group-hover:scale-110" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div><div className="absolute bottom-0 left-0 p-6 w-full"><h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-secondary transition-colors">International Packages</h3><p className="text-gray-400 text-xs font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">Curated escapes across the globe.</p></div></div></Link></div><div className="marquee-item"><Link to="/uae-tours"><div className="relative h-[400px] w-[300px] rounded-3xl overflow-hidden group border border-stone-200 cursor-pointer"><img alt="UAE Tours" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 group-hover:scale-110" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div><div className="absolute bottom-0 left-0 p-6 w-full"><h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-secondary transition-colors">Domestic Packages</h3><p className="text-gray-400 text-xs font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">Explore Kashmir, Goa, Kerala & more.</p></div></div></Link></div><div className="marquee-item"><Link to="/visa"><div className="relative h-[400px] w-[300px] rounded-3xl overflow-hidden group border border-stone-200 cursor-pointer"><img alt="Tourist Visa" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 group-hover:scale-110" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div><div className="absolute bottom-0 left-0 p-6 w-full"><h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-secondary transition-colors">Tourist &amp; Visitor Visas</h3><p className="text-gray-400 text-xs font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">Global travel approvals simplified.</p></div></div></Link></div><div className="marquee-item"><Link to="/fleet"><div className="relative h-[400px] w-[300px] rounded-3xl overflow-hidden group border border-stone-200 cursor-pointer"><img alt="Luxury Fleet" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 group-hover:scale-110" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div><div className="absolute bottom-0 left-0 p-6 w-full"><h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-secondary transition-colors">Luxury Fleet</h3><p className="text-gray-400 text-xs font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">Travel in style and comfort.</p></div></div></Link></div><div className="marquee-item"><Link to="/visa"><div className="relative h-[400px] w-[300px] rounded-3xl overflow-hidden group border border-stone-200 cursor-pointer"><img alt="Visa Service" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-700 group-hover:scale-110" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div><div className="absolute bottom-0 left-0 p-6 w-full"><h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-secondary transition-colors">Visa Services</h3><p className="text-gray-400 text-xs font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">Tourist, Visitor, Business & B2B Visa.</p></div></div></Link></div></div><div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div><div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div><div className="absolute inset-y-0 left-4 z-20 flex items-center opacity-0 group-hover/container:opacity-100 transition-opacity duration-300"><button className="bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-110 active:scale-95" aria-label="Scroll Left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left w-6 h-6" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button></div><div className="absolute inset-y-0 right-4 z-20 flex items-center opacity-0 group-hover/container:opacity-100 transition-opacity duration-300"><button className="bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-110 active:scale-95" aria-label="Scroll Right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-6 h-6" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button></div></div></div></section><section className="emirates-showcase-section py-2" style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: 'auto', borderTop: 'none' }}><div className="container mx-auto px-4"><div className="text-center mb-8 md:mb-12"><div style={{"opacity":"1","transform":"none"}}><span className="text-secondary font-serif italic text-base md:text-lg mb-0 block">Discover the Magic</span><h2 className="text-2xl md:text-4xl font-serif font-bold text-black tracking-tight">Featured International</h2><div className="w-12 h-px bg-secondary mx-auto mt-2 opacity-30"></div></div></div><div className="emirates-carousel-container"><div className="emirates-carousel-stage relative flex items-center justify-center h-[350px] md:h-[430px]" data-no-reveal>{featuredPackages.map((pkg, idx) => { const style = getCardStyle(idx, activeIndex); return (
  <div key={idx} className="absolute w-[200px] h-[300px] md:w-[260px] md:h-[380px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl cursor-pointer group" style={style}><button className="block relative w-full h-full text-left bg-transparent p-0 border-none outline-none cursor-pointer" onClick={() => { if (idx === activeIndex) { window.triggerEnquiryModal && window.triggerEnquiryModal(pkg); } else { setActiveIndex(idx); } }}><img alt={pkg.name} loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src={pkg.img}/><div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_transparent_40%,_rgba(0,0,0,0.4)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div><div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-20"><div className="slide-top"><span className="text-secondary tracking-[0.4em] text-[8px] font-extrabold uppercase mb-2 block opacity-80 group-hover:opacity-100 transition-opacity">{pkg.label}</span><h3 className="text-xl md:text-2xl font-serif font-bold text-white leading-tight">{pkg.name}</h3></div><div className="transition-all duration-700 ease-[0.16,1,0.3,1] opacity-100 translate-y-0"><p className="text-gray-300 text-[10px] md:text-xs mb-4 line-clamp-2 font-light leading-relaxed italic">&quot;{pkg.desc}&quot;</p><div className="flex items-center gap-3 text-secondary text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] group/link"><div className="w-6 h-px bg-secondary/30 group-hover/link:w-10 transition-all"></div>Explorer<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin group-hover/link:translate-x-1 transition-transform" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div></div></div><div className="absolute inset-0 border border-white/5 group-hover:border-secondary/30 rounded-[32px] transition-colors duration-700"></div></button></div>
); })}</div><div className="flex flex-col items-center gap-4 mt-6 md:mt-10 relative z-40" style={{ position: 'relative', zIndex: 40 }}><div className="flex gap-4"><button onClick={() => setActiveIndex((prev) => (prev - 1 + 7) % 7)} style={{ width: '48px', height: '48px', borderRadius: '9999px', border: '1px solid rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justify: 'center', backgroundColor: hoveredBtn === 'prev' ? '#000000' : 'rgba(0, 0, 0, 0.05)', color: hoveredBtn === 'prev' ? '#ffffff' : '#000000', outline: 'none', boxShadow: 'none', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseEnter={() => setHoveredBtn('prev')} onMouseLeave={() => setHoveredBtn(null)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: hoveredBtn === 'prev' ? '#ffffff' : '#000000', transition: 'color 0.3s ease' }} aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button><div className="flex items-center gap-2 px-4">{[0,1,2,3,4,5,6].map((i) => (
  <div key={i} onClick={() => setActiveIndex(i)} className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === activeIndex ? 'w-8 bg-secondary' : 'w-1.5 bg-black/20'}`} />
))}</div><button onClick={() => setActiveIndex((prev) => (prev + 1) % 7)} style={{ width: '48px', height: '48px', borderRadius: '9999px', border: '1px solid rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justify: 'center', backgroundColor: hoveredBtn === 'next' ? '#000000' : 'rgba(0, 0, 0, 0.05)', color: hoveredBtn === 'next' ? '#ffffff' : '#000000', outline: 'none', boxShadow: 'none', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseEnter={() => setHoveredBtn('next')} onMouseLeave={() => setHoveredBtn(null)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: hoveredBtn === 'next' ? '#ffffff' : '#000000', transition: 'color 0.3s ease' }} aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button></div></div></div></div></section><section className="relative py-12 md:py-16 overflow-hidden bg-white" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-center">
      <div className="relative" style={{ opacity: "1", transform: "none" }}>
        <div className="aspect-[4/3] rounded-[3rem] overflow-hidden relative border border-white/5 shadow-2xl">
          <img 
            alt="Luxury Experience" 
            loading="lazy" 
            decoding="async" 
            data-nimg="fill" 
            className="object-cover" 
            style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent" }} 
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 p-6 md:p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10">
            <p className="text-secondary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 italic">
              A Moment in Time
            </p>
            <h4 className="text-lg md:text-2xl font-serif font-bold italic text-white">
              &quot;The true essence of travel is not just the destination, but the luxury of peace.&quot;
            </h4>
          </div>
        </div>
        <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-28 h-28 md:w-40 md:h-40 rounded-full bg-secondary text-black flex items-center justify-center text-center p-4 md:p-6 font-black uppercase text-[8px] md:text-[10px] tracking-widest border-4 md:border-8 border-black shadow-2xl rotate-12">
          Curated <br/> Excellence
        </div>
      </div>
      <div>
        <span className="text-secondary font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block italic">
          Brand Philosophy
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 md:mb-10 leading-tight">
          Beyond The <br /> Ordinary.
        </h2>
        <p className="text-stone-600 text-sm md:text-lg font-light leading-relaxed mb-6 md:mb-10">
          At SPIN Global, we believe every journey should be a signature moment. We bridge the gap between simple transportation and immersive storytelling.
        </p>
      </div>
    </div>
  </div>
</section><div>
      <section className="SPIN Global-editorial-section" style={{ backgroundColor: '#ffffff', color: '#000000', height: 'auto', padding: '60px 0' }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="editorial-header mb-4 md:mb-6">
            <div className="relative" style={{"opacity":"0","transform":"translateY(50px)"}}>
              <span className="editorial-label">The SPIN Global Blueprint</span>
              <h2 className="editorial-main-title" style={{ color: '#000000' }}>
                Redefining the <br/>
                <span className="italic-secondary">Experience</span> of Travel.
              </h2>
            </div>
          </div>
          
          <div className="editorial-composition">
            <div className="composition-main">
              <div className="main-image-wrapper" style={{"transform":"none"}}>
                <img 
                  alt="Luxury Resort" 
                  loading="lazy" 
                  decoding="async" 
                  data-nimg="fill" 
                  className="object-cover" 
                  style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} 
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
            
            <div className="composition-secondary">
              <div className="narrative-text">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 italic leading-tight text-black" style={{"opacity":"1","transform":"none"}}>
                  &quot;Where strategy meets <br/> 
                  <span className="text-secondary drop-shadow-md">serendipity.</span>&quot;
                </h3>
                <p className="text-stone-600 text-sm md:text-base font-light leading-relaxed mb-6">
                  We are more than an agency. We are curators of time. Every itinerary is a masterpiece of logistics and luxury, tailored to your exact specifications.
                </p>
                
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="flex items-start gap-3 group">
                    <div className="p-2 bg-stone-100 rounded-xl border border-stone-200 group-hover:bg-secondary/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-5 h-5 text-secondary" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-black font-bold text-lg mb-1">Global Reach</h4>
                      <p className="text-stone-500 text-xs leading-relaxed max-w-sm">
                        Access to over 2000+ private terminals and exclusive resorts worldwide.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 group">
                    <div className="p-2 bg-stone-100 rounded-xl border border-stone-200 group-hover:bg-secondary/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-compass w-5 h-5 text-secondary" aria-hidden="true">
                        <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-black font-bold text-lg mb-1">Curated Journeys</h4>
                      <p className="text-stone-500 text-xs leading-relaxed max-w-sm">
                        Bespoke itineraries designed around your specific passions and timeline.
                      </p>
                    </div>
                  </div>
                </div>
                
                <button className="editorial-btn hover:scale-105 transition-transform">
                  Discover More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right ml-2 w-5 h-5" aria-hidden="true">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-50/50 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
      </section>
    </div><div><section className="pt-24 pb-24 bg-white relative overflow-hidden" style={{ backgroundColor: '#ffffff', color: '#000000' }}><div className="absolute inset-0 opacity-20 pointer-events-none"><div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div><div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div></div><div className="container mx-auto px-4 relative z-10"><div className="flex flex-col lg:flex-row justify-between items-end mb-6 md:mb-8 gap-6"><div className="max-w-2xl"><span className="text-secondary text-xs font-black uppercase tracking-[0.6em] mb-6 block" style={{"opacity":"0","transform":"translateX(-20px)"}}>The Sovereign Collection</span><h2 className="text-4xl md:text-7xl font-serif font-bold text-black leading-[0.8] tracking-tighter" style={{"opacity":"1","transform":"none"}}>Bespoke <br/> <span className="text-secondary italic">Privilege.</span></h2></div><div className="lg:w-1/3" style={{"opacity":"1"}}><p className="text-stone-600 text-base md:text-lg font-light leading-relaxed italic border-l border-stone-200 pl-8">&quot;Luxury is not a price point. It is a level of service where the imagination is the only boundary.&quot;</p></div></div><div className="flex flex-col md:flex-row h-auto md:h-[50vh] min-h-[400px] gap-4"><Link className="flex-1 flex" to="/contact"><div className="relative group rounded-[3rem] overflow-hidden cursor-pointer bg-[#0a0a0a] border border-stone-200 w-full h-[300px] md:h-full"><img alt="Royal Concierge" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-[2000ms] group-hover:scale-105" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/><div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div><div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/20 transition-all duration-700 pointer-events-none rounded-[3rem]"></div><div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between"><div className="flex justify-between items-start"><div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all duration-500"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crown" aria-hidden="true"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg></div><div className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-secondary italic">01</div></div><div><span className="text-secondary text-[10px] font-bold uppercase tracking-widest mb-3 block opacity-0 group-hover:opacity-100 transition-opacity duration-700">Personalized Excellence</span><h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-700">Royal Concierge</h3><div className="overflow-hidden"><p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100">Beyond reservations. We handle everything from elite event curation to personal lifestyle management with utmost discretion.</p></div><div className="mt-4 md:mt-6 flex items-center gap-4 text-xs font-black uppercase tracking-widest text-secondary opacity-0 group-hover:opacity-100 transition-all">Inquire Privately <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-2 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div></div></div></div></Link><Link className="flex-1 flex" to="/contact"><div className="relative group rounded-[3rem] overflow-hidden cursor-pointer bg-[#0a0a0a] border border-stone-200 w-full h-[300px] md:h-full"><img alt="Private Discoveries" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-[2000ms] group-hover:scale-105" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/><div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div><div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/20 transition-all duration-700 pointer-events-none rounded-[3rem]"></div><div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between"><div className="flex justify-between items-start"><div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all duration-500"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-compass" aria-hidden="true"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg></div><div className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-secondary italic">02</div></div><div><span className="text-secondary text-[10px] font-bold uppercase tracking-widest mb-3 block opacity-0 group-hover:opacity-100 transition-opacity duration-700">Uncharted Expeditions</span><h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-700">Private Discoveries</h3><div className="overflow-hidden"><p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100">Uncharted luxury. Experience the Emirates hidden treasures in absolute privacy with expert local curators.</p></div><div className="mt-4 md:mt-6 flex items-center gap-4 text-xs font-black uppercase tracking-widest text-secondary opacity-0 group-hover:opacity-100 transition-all">Inquire Privately <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-2 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div></div></div></div></Link><Link className="flex-1 flex" to="/contact"><div className="relative group rounded-[3rem] overflow-hidden cursor-pointer bg-[#0a0a0a] border border-stone-200 w-full h-[300px] md:h-full"><img alt="Exclusive Events" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-[2000ms] group-hover:scale-105" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/><div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div><div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/20 transition-all duration-700 pointer-events-none rounded-[3rem]"></div><div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between"><div className="flex justify-between items-start"><div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all duration-500"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music" aria-hidden="true"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg></div><div className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-secondary italic">03</div></div><div><span className="text-secondary text-[10px] font-bold uppercase tracking-widest mb-3 block opacity-0 group-hover:opacity-100 transition-opacity duration-700">Red Carpet Access</span><h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-700">Exclusive Events</h3><div className="overflow-hidden"><p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100">Red-carpet orchestration for the most high-profile gatherings. We turn visions into legendary reality.</p></div><div className="mt-4 md:mt-6 flex items-center gap-4 text-xs font-black uppercase tracking-widest text-secondary opacity-0 group-hover:opacity-100 transition-all">Inquire Privately <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-2 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div></div></div></div></Link></div></div><div className="absolute bottom-10 right-10 rotate-90 origin-right pointer-events-none"><span className="text-[10px] font-black uppercase tracking-[1em] text-white/5">Reserved Access Only</span></div></section>    </div>
    
    <div>
      <section className="pt-20 pb-16 relative overflow-hidden bg-white" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
        <div className="absolute top-10 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div style={{ opacity: "0", transform: "translateX(-50px)" }}>
              <span className="text-secondary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Client Voices</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black mb-6 leading-tight">
                What Our <br/><span className="text-secondary">Clients Say</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-secondary to-transparent mb-8"></div>
              <p className="text-stone-600 text-lg font-light leading-relaxed mb-12">
                Experience the testimonials from our satisfied clients who trust us with their premium transportation needs across the region.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <button className="h-2 rounded-full transition-all duration-500 w-12 bg-secondary" aria-label="Testimonial 1"></button>
                  <button className="h-2 rounded-full transition-all duration-500 w-2 bg-black/20 hover:bg-black/40" aria-label="Testimonial 2"></button>
                  <button className="h-2 rounded-full transition-all duration-500 w-2 bg-black/20 hover:bg-black/40" aria-label="Testimonial 3"></button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="group relative" style={{ opacity: "1", transform: "none" }}>
                <div className="relative bg-stone-50 border border-stone-200 shadow-xl group-hover:border-secondary/50 rounded-[2rem] p-8 md:p-12 transition-all duration-500">
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 border border-secondary/50">
                      <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-lg md:text-xl text-stone-800 font-light leading-relaxed mb-10 text-justify">
                    SPIN Global transformed our corporate transportation needs. Their fleet is immaculate, drivers are highly professional, and the service is consistently reliable. We&#x27;ve never experienced any delays or issues. Highly recommended for premium business travel.
                  </p>
                  <div className="h-px bg-gradient-to-r from-secondary/50 via-transparent to-transparent mb-8"></div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-serif font-bold text-black mb-2">Sarah Mitchell</h4>
                      <div className="flex items-center gap-2 text-stone-600 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-4 h-4 text-stone-500" aria-hidden="true">
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        Dubai, UAE
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="h-10 w-10 rounded-full border border-stone-200 hover:border-secondary/50 flex items-center justify-center text-stone-500 hover:text-secondary transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left w-5 h-5" aria-hidden="true">
                          <path d="m15 18-6-6 6-6"></path>
                        </svg>
                      </button>
                      <button className="h-10 w-10 rounded-full border border-stone-200 hover:border-secondary/50 flex items-center justify-center text-stone-500 hover:text-secondary transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-5 h-5" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-6 pt-6 border-t border-white/5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-4 h-4 fill-secondary text-secondary" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-4 h-4 fill-secondary text-secondary" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-4 h-4 fill-secondary text-secondary" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-4 h-4 fill-secondary text-secondary" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-4 h-4 fill-secondary text-secondary" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <div>
      <section className="relative py-12 md:py-16 overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Luxury Yacht Sunset" 
            loading="lazy" 
            decoding="async" 
            data-nimg="fill" 
            className="object-cover opacity-85 scale-105 group-hover:scale-100 transition-transform duration-[3000ms]" 
            style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent" }} 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div style={{ opacity: "0", transform: "translateY(40px)" }}>
              <span className="text-secondary text-xs font-bold uppercase tracking-[0.8em] mb-8 block">Tailor-Made Holidays</span>
              <h2 className="text-5xl md:text-8xl font-serif font-bold text-white mb-10 leading-none">
                Want a<span className="text-secondary italic">Custom</span> <br/>
                <span className="text-white">Itinerary?</span>
              </h2>
              <p className="text-gray-400 text-xl mb-12 font-light leading-relaxed max-w-xl">
                Whether it&#x27;s a private yacht party, a desert adventure, or a luxury shopping tour, we can build it exactly how you want it.
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                <Link to="/contact">
                  <button data-slot="button" data-variant="default" data-size="default" className="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 has-[&gt;svg]:px-3 bg-secondary text-black hover:bg-white px-12 py-8 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all shadow-[0_10px_30px_rgba(234,179,8,0.2)] group/btn">
                    Contact Expert
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right ml-3 w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </button>
                </Link>
                <Link to="https://wa.me/916284661722" target="_blank" rel="noopener noreferrer">
                  <button data-slot="button" data-variant="default" data-size="default" className="justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 has-[&gt;svg]:px-3 bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-secondary/50 backdrop-blur-xl px-12 py-8 rounded-2xl font-bold text-sm tracking-widest uppercase flex items-center gap-4 transition-all group/wa shadow-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-5 h-5 text-secondary group-hover/wa:scale-110 transition-transform" aria-hidden="true">
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                    </svg>
                    WhatsApp Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div></div>
        </div>
      </div></div>
    </ScrollReveal>
  );
}
