import React from 'react';
import Link from '../components/Link';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  return (
    <ScrollReveal>
      <div className="page-about-wrapper bg-[#050e1d] min-h-screen text-white overflow-x-hidden relative selection:bg-[#14833b] selection:text-black">
        {/* CSS Stylesheet Injector */}
        <style>{`
          .about-hero {
            position: relative;
            height: 75vh;
            min-height: 500px;
            width: 100%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justifyContent: center;
            text-align: center;
          }
          .about-hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(5,14,29,0.3) 0%, rgba(5,14,29,0.7) 60%, #050e1d 100%);
            z-index: 10;
          }
          .about-collage {
            position: relative;
            height: 480px;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .about-img-large {
            width: 75%;
            height: 380px;
            object-fit: cover;
            border-radius: 2.5rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 20px 45px rgba(0,0,0,0.5);
          }
          .about-img-small {
            position: absolute;
            bottom: 20px;
            right: 0;
            width: 50%;
            height: 240px;
            object-fit: cover;
            border-radius: 2rem;
            border: 6px solid #050e1d;
            box-shadow: 0 30px 60px rgba(0,0,0,0.6);
          }
          .about-grid-story {
            display: grid;
            grid-template-columns: 1.1fr 1fr;
            gap: 80px;
            align-items: center;
          }
          .about-glass-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 2.5rem;
            padding: 40px;
            backdrop-filter: blur(12px);
          }
          .about-grid-values {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-top: 50px;
          }
          .about-value-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 2rem;
            padding: 35px;
            transition: all 0.4s ease;
          }
          .about-value-card:hover {
            border-color: rgba(20, 131, 59, 0.3);
            transform: translateY(-5px);
            background: rgba(20, 131, 59, 0.02);
          }
          .about-grid-hq {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
          }
          .about-hq-img {
            width: 100%;
            height: 400px;
            object-fit: cover;
            border-radius: 2.5rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 25px 50px rgba(0,0,0,0.4);
          }
          .about-grid-contact-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 32px;
          }
          @media (max-width: 1024px) {
            .about-grid-story, .about-grid-hq {
              grid-template-columns: 1fr;
              gap: 48px;
            }
            .about-grid-values, .about-grid-contact-cards {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            .about-collage {
              height: 380px;
              margin-bottom: 24px;
            }
            .about-img-large {
              width: 80%;
              height: 300px;
            }
            .about-img-small {
              height: 180px;
            }
            .about-hq-img {
              height: 300px;
            }
          }
        `}</style>

        {/* Decorative background blobs */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#14833b]/5 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-[#14833b]/5 blur-[180px] rounded-full"></div>
        </div>
        
        <div className="relative z-10">
          {/* Internal Hero */}
          <div className="about-hero">
            <div className="absolute inset-0 z-0">
              <img 
                alt="Beautiful Landscape" 
                className="object-cover w-full h-full opacity-40 scale-105" 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"
              />
              <div className="about-hero-overlay"></div>
            </div>
            <div className="container mx-auto px-4 h-full relative z-20 flex flex-col items-center justify-center text-center">
              <span className="text-[#14833b] uppercase tracking-[0.6em] text-[10px] md:text-xs font-bold mb-4 block">See Places In New Ways</span>
              <h1 className="text-5xl md:text-8xl font-serif font-bold text-white tracking-tighter mb-4 leading-none">ABOUT US</h1>
              <div className="w-16 h-1 bg-[#14833b] rounded-full"></div>
            </div>
          </div>

          {/* Brand Story Section */}
          <section className="py-24 relative">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="about-grid-story">
                {/* Overlapping Collage */}
                <div className="about-collage">
                  <img 
                    alt="Travel Journey" 
                    className="about-img-large"
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&amp;w=800&amp;auto=format&amp;fit=crop"
                  />
                  <img 
                    alt="Luxury Destination" 
                    className="about-img-small"
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&amp;w=800&amp;auto=format&amp;fit=crop"
                  />
                </div>

                {/* Narrative text block */}
                <div className="space-y-6">
                  <span className="text-[#14833b] text-xs font-bold uppercase tracking-[0.3em] block">Our Origins</span>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                    We Believe Travel Should Feel <span className="italic text-[#eab308]">Simple &amp; Personal.</span>
                  </h2>
                  <div className="text-stone-300 text-sm md:text-base font-light leading-relaxed space-y-4 text-justify border-l-2 border-stone-800 pl-6">
                    <p>
                      SPIN Global started with a simple frustration — travel planning shouldn’t feel like a maze of confusing visa rules, copy-paste itineraries, and chatbots that never really answer your questions.
                    </p>
                    <p>
                      Founded with years of hands-on experience in premium travel consulting, SPIN was built to be different: one dedicated point of contact, real people who actually listen, and journeys planned around you, not a template.
                    </p>
                    <p>
                      The name SPIN stands for <strong>“See Places In New ways”</strong> — because we believe travel isn’t just about the destination, it’s about how thoughtfully the journey is planned. From first-time international travelers figuring out their first visa, to families planning a once-in-a-lifetime holiday, to businesses needing reliable visa support — SPIN exists to make every step feel simple, personal, and stress-free.
                    </p>
                    <p className="text-white font-medium italic pt-2">
                      &quot;We don’t just help you reach your destination. We help make the journey there just as enjoyable.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission & Vision inside Glass Card */}
              <div className="about-glass-card mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <span className="text-[#14833b] text-[10px] uppercase font-bold tracking-widest block">Core Purpose</span>
                    <h3 className="text-xl font-serif font-bold text-white tracking-tight pb-2 border-b border-white/5">Our Mission</h3>
                    <p className="text-stone-400 text-sm font-light leading-relaxed">
                      To make travel and visa planning simple, personal, and stress-free for every traveler — by being one trusted point of contact, from the first enquiry to the final visa stamp.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <span className="text-[#eab308] text-[10px] uppercase font-bold tracking-widest block">Future Outlook</span>
                    <h3 className="text-xl font-serif font-bold text-white tracking-tight pb-2 border-b border-white/5">Our Vision</h3>
                    <p className="text-stone-400 text-sm font-light leading-relaxed">
                      To be the travel and visa partner people trust and recommend — known for making every journey feel personal, simple, and worry-free.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values Section */}
          <section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16 space-y-3">
                <span className="text-[#14833b] text-xs font-bold uppercase tracking-[0.3em] block">Our Philosophies</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">The SPIN Pillars</h2>
              </div>
              <div className="about-grid-values">
                <div className="about-value-card">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#14833b]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">One Dedicated Contact</h3>
                  <p className="text-stone-400 text-sm font-light leading-relaxed">
                    No robot assistants or call centers. You get a dedicated travel consultant who knows your itinerary and preferences by name.
                  </p>
                </div>
                <div className="about-value-card">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#eab308]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Uncharted Discoveries</h3>
                  <p className="text-stone-400 text-sm font-light leading-relaxed">
                    True to our name, we help you see places in new ways by crafting custom pathways, private excursions, and unique timelines.
                  </p>
                </div>
                <div className="about-value-card">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#14833b]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Total Document Peace</h3>
                  <p className="text-stone-400 text-sm font-light leading-relaxed">
                    We thoroughly verify visa application files, flight itineraries, and vouchers so you can step onto your flight with absolute confidence.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Ludiana HQ and Online Delivery Info */}
          <section className="py-24 relative">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="about-grid-hq">
                <div className="space-y-6">
                  <span className="text-[#14833b] text-xs font-bold uppercase tracking-[0.4em] block">Based in Punjab, Serving All India</span>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">Accessible Everywhere, Completely Online</h2>
                  <p className="text-stone-300 text-sm md:text-base font-light leading-relaxed">
                    SPIN Global is a Ludhiana-based travel and visa consultancy. All of our custom travel planning, paperwork review, and visa advisory services are delivered online, making expert guidance available to you regardless of where you reside in India.
                  </p>
                  
                  <div className="about-grid-contact-cards">
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '20px', borderRadius: '16px' }}>
                      <h4 className="text-[#14833b] font-bold text-sm mb-1">Headquarters</h4>
                      <p className="text-stone-400 text-[11px] font-light leading-relaxed">Chandigarh Road, Ludhiana, Punjab, India</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '20px', borderRadius: '16px' }}>
                      <h4 className="text-[#eab308] font-bold text-sm mb-1">WhatsApp Chat</h4>
                      <p className="text-stone-400 text-[11px] font-light leading-relaxed">+91 6284661722<br/>(Available 24/7)</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '20px', borderRadius: '16px' }}>
                      <h4 className="text-[#14833b] font-bold text-sm mb-1">Direct Email</h4>
                      <p className="text-stone-400 text-[11px] font-light leading-relaxed">info@spinglobal.in</p>
                    </div>
                  </div>
                </div>

                <div>
                  <img 
                    alt="Premium India Travel" 
                    className="about-hq-img"
                    src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16 space-y-2">
                <span className="text-[#14833b] text-xs font-bold uppercase tracking-[0.3em] block">Fully Customized Offerings</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">What We Excel In</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/[0.02] border border-white/5 hover:border-[#14833b]/20 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#14833b]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">International Packages</h4>
                  <p className="text-stone-400 text-xs font-light leading-relaxed">Fully customized itineraries across Europe, Southeast Asia, Middle East, and beyond.</p>
                </div>
                <div className="bg-white/[0.02] border border-white/5 hover:border-[#14833b]/20 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#eab308]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.886H3.888l4.956 3.6L6.932 18.37 12 14.77l5.068 3.6-1.912-5.886 4.956-3.6h-6.2z"/></svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Domestic Packages</h4>
                  <p className="text-stone-400 text-xs font-light leading-relaxed">Explore the beauty of India: Kashmir, Andaman, Leh Ladakh, Kerala, Sikkim, Rajasthan &amp; more.</p>
                </div>
                <div className="bg-white/[0.02] border border-white/5 hover:border-[#14833b]/20 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#14833b]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="4"/><line x1="8" x2="8" y1="2" y2="4"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Visa Services</h4>
                  <p className="text-stone-400 text-xs font-light leading-relaxed">Tourist, visitor, and business visa assistance with end-to-end advisory and checkups.</p>
                </div>
                <div className="bg-white/[0.02] border border-white/5 hover:border-[#14833b]/20 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#eab308]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">B2B Visa Solutions</h4>
                  <p className="text-stone-400 text-xs font-light leading-relaxed">Dedicated visa filing and processing systems for travel agents and corporate firms.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Footer */}
          <section className="py-24 text-center space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                alt="Luxury Travel Sunset" 
                className="object-cover w-full h-full opacity-20"
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050e1d] via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 space-y-6 px-4">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">Let's Design Your Journey</h2>
              <p className="text-stone-400 text-sm max-w-md mx-auto">Skip the generic templates. Get a customized travel itinerary planned by a human specialist.</p>
              <button 
                onClick={() => window.triggerPlanMyTrip && window.triggerPlanMyTrip()}
                style={{
                  backgroundColor: '#14833b',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  padding: '16px 40px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(20, 131, 59, 0.4)'
                }}
              >
                Plan my trip
              </button>
            </div>
          </section>
        </div>
      </div>
    </ScrollReveal>
  );
}
