import React from 'react';
import Link from '../../components/Link';
import ScrollReveal from '../../components/ScrollReveal';
import '../../styles/c60c131a6bb38304.css';
import '../../styles/cb2791722ffd6245.css';

export default function DubaiEssential() {
  const [formData, setFormData] = React.useState({ name: '', phone: '', date: '', travellers: '1', message: '' });

  
  
  return (
    <ScrollReveal>
      <div className="page-dubaiessential-wrapper bg-black min-h-screen text-white overflow-x-hidden relative">
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-secondary/5 blur-[180px] rounded-full"></div>
        </div>
        
        <div className="relative z-10">
          <div className="bg-[#050505] min-h-screen text-white pb-20 selection:bg-secondary selection:text-black">
            
            {/* Header / Hero */}
            <section className="relative h-[55vh] w-full overflow-hidden">
              <div className="absolute inset-0" style={{transform:"scale(1.1)"}}>
                <img 
                  alt="DubaiEssential" 
                  decoding="async" 
                  className="object-cover w-full h-full opacity-65" 
                  style={{position:"absolute",height:"100%",width:"100%",left:"0",top:"0",right:"0",bottom:"0",color:"transparent"}} 
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80"
                />
              </div>
              <div className="container mx-auto px-4 h-full relative z-10 flex flex-col justify-end pb-12">
                <div>
                  <Link to="/domestic" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6 group text-xs uppercase tracking-widest font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
                    Back to Explore
                  </Link>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="bg-secondary text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Custom Tour</span>
                    <span className="text-sm font-bold uppercase tracking-wider text-secondary">Inclusive of Hotels & Transfers</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 tracking-tight">DubaiEssential</h1>
                </div>
              </div>
            </section>

            {/* Layout Grid: Left Form (Main Attraction) & Right Spots/Gallery */}
            <div className="container mx-auto px-4 mt-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
              
              {/* Left Column: Enquiry Form (2/3 width) - The Main Attraction */}
              <div className="lg:col-span-2 space-y-12">
                <div className="p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block">Direct Reservation</span>
                  <h2 className="text-3xl font-serif font-bold text-white mb-2">Book Your Customized Journey</h2>
                  <p className="text-sm text-white/50 mb-8 font-light">Fill in your details to customise this tour. Our experts will craft your personal itinerary and contact you directly on WhatsApp.</p>
                  
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    const text = `Hi SPIN Global, I want to book/enquire about the *DubaiEssential* package.
Details:
- *Name*: ${formData.name}
- *Contact*: ${formData.phone}
- *Travel Date*: ${formData.date}
- *Travellers*: ${formData.travellers}
- *Message*: ${formData.message || 'None'}`;
                    window.open(`https://wa.me/916284661722?text=${encodeURIComponent(text)}`, '_blank');
                  }} className="space-y-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2 font-bold">Your Name</label>
                        <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-secondary transition-all" placeholder="Full name" />
                      </div>
                      
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2 font-bold">WhatsApp / Phone Number</label>
                        <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-secondary transition-all" placeholder="WhatsApp number" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2 font-bold">Planned Travel Date</label>
                        <input required type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-secondary transition-all" />
                      </div>
                      
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2 font-bold">Total Travellers</label>
                        <select value={formData.travellers} onChange={(e) => setFormData({...formData, travellers: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-secondary transition-all">
                          {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n} className="bg-[#0b1d3a]">{n} Pax</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2 font-bold">Special Notes, Preferences & Requests (Optional)</label>
                      <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-secondary transition-all h-28 resize-none" placeholder="Preferences: e.g. 5-star resort stay, flight inclusions, sightseeing custom request..."></textarea>
                    </div>

                    <button type="submit" className="w-full enquire-now-btn py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all mt-4 flex items-center justify-center gap-2 cursor-pointer">
                      Send Booking Enquiry on WhatsApp
                    </button>
                  </form>
                </div>

                {/* Inclusions and Exclusions */}
                
                  <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                    <div className="space-y-8"><div className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check text-emerald-500" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><h3 className="text-xl font-bold uppercase tracking-widest">Inclusions</h3></div><ul className="space-y-4"><li className="text-white/60 flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></div>4* Hotel</li><li className="text-white/60 flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></div>Transfers</li><li className="text-white/60 flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></div>Sightseeing</li></ul></div><div className="space-y-8"><div className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x text-rose-500" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg><h3 className="text-xl font-bold uppercase tracking-widest">Exclusions</h3></div><ul className="space-y-4"><li className="text-white/40 flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-rose-500/30"></div>Visa fees</li><li className="text-white/40 flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-rose-500/30"></div>Personal expenses</li><li className="text-white/40 flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-rose-500/30"></div>Tips and gratuities</li></ul></div>
                  </section>
              </div>

              {/* Right Column: Sights Itinerary & Gallery (1/3 width) */}
              <div className="lg:col-span-1 space-y-12">
                
                {/* Sights */}
                <div className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.01]">
                  <h3 className="text-xl font-serif font-bold text-white mb-6 uppercase tracking-wider border-b border-white/10 pb-4">Key Attractions</h3>
                  <div className="space-y-6">
                    <div className="relative pl-12 group"><div className="absolute left-[15px] top-10 bottom-[-48px] w-px bg-white/10"></div><div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center group-hover:bg-secondary group-hover:text-black transition-all"><span className="text-xs font-bold">1</span></div><div><h3 className="text-xl font-bold mb-3">Day 1: Arrival &amp; Marina Cruise</h3><p className="text-white/50 leading-relaxed font-light">Arrival at Dubai International Airport. Transfer to hotel. Evening Dhow Cruise at Dubai Marina with dinner.</p></div></div><div className="relative pl-12 group"><div className="absolute left-[15px] top-10 bottom-[-48px] w-px bg-white/10"></div><div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center group-hover:bg-secondary group-hover:text-black transition-all"><span className="text-xs font-bold">2</span></div><div><h3 className="text-xl font-bold mb-3">Day 2: Dubai City Tour &amp; Burj Khalifa</h3><p className="text-white/50 leading-relaxed font-light">Half-day city tour covering Jumeirah Mosque, Burj Al Arab (photo stop), and Dubai Museum. Evening visit to Burj Khalifa 124th floor.</p></div></div><div className="relative pl-12 group"><div className="absolute left-[15px] top-10 bottom-[-48px] w-px bg-white/10"></div><div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center group-hover:bg-secondary group-hover:text-black transition-all"><span className="text-xs font-bold">3</span></div><div><h3 className="text-xl font-bold mb-3">Day 3: Desert Safari</h3><p className="text-white/50 leading-relaxed font-light">Free morning for shopping. Afternoon 4x4 Desert Safari with BBQ dinner, belly dancing, and camel riding.</p></div></div><div className="relative pl-12 group"><div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center group-hover:bg-secondary group-hover:text-black transition-all"><span className="text-xs font-bold">4</span></div><div><h3 className="text-xl font-bold mb-3">Day 4: Departure</h3><p className="text-white/50 leading-relaxed font-light">Breakfast at hotel. Pick up for airport drop according to flight schedule.</p></div></div>
                  </div>
                </div>

                {/* Visual Journey Gallery of Sights */}
                <div className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.01]">
                  <h3 className="text-xl font-serif font-bold text-white mb-6 uppercase tracking-wider border-b border-white/10 pb-4">Visual Gallery</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="relative h-20 rounded-xl overflow-hidden border border-white/10 shadow group/gal cursor-pointer">
                      <img alt="Sight 1" className="object-cover w-full h-full group-hover/gal:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80" />
                    </div>
                    <div className="relative h-20 rounded-xl overflow-hidden border border-white/10 shadow group/gal cursor-pointer">
                      <img alt="Sight 2" className="object-cover w-full h-full group-hover/gal:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=400&q=80" />
                    </div>
                    <div className="relative h-20 rounded-xl overflow-hidden border border-white/10 shadow group/gal cursor-pointer">
                      <img alt="Sight 3" className="object-cover w-full h-full group-hover/gal:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=400&q=80" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
