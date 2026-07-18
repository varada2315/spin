import React, { useState } from 'react';
import Link from '../components/Link';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Name and Phone Number are required!');
      return;
    }
    const msg = `Hi SPIN Global,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const waUrl = `https://wa.me/916284661722?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <ScrollReveal>
      <div className="page-contact-wrapper bg-[#050e1d] min-h-screen text-white overflow-x-hidden relative selection:bg-[#14833b] selection:text-black">
        {/* Decorative background blobs */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#14833b]/5 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-[#14833b]/5 blur-[180px] rounded-full"></div>
        </div>
        
        <div className="relative z-10">
          {/* Hero */}
          <div className="internal-hero-container snap-start relative h-[40vh] min-h-[300px] w-full overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <img 
                alt="Contact SPIN Global" 
                className="object-cover w-full h-full opacity-40" 
                src="https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=crop&amp;w=1920&amp;q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050e1d]/50 to-[#050e1d]"></div>
            </div>
            <div className="container mx-auto px-4 h-full relative z-10 flex flex-col items-center justify-center text-center">
              <span className="text-[#14833b] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Get In Touch</span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight mb-4">CONTACT</h1>
              <div className="w-16 h-1 bg-[#14833b] rounded-full"></div>
            </div>
          </div>

          <section className="py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                {/* Form section */}
                <div className="lg:col-span-7 space-y-8">
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                    Send Us a <span className="italic text-[#14833b]">Message</span>
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 block">Full Name *</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 text-white h-12 rounded-xl px-4 focus:outline-none focus:border-[#14833b] transition-colors"
                          required
                        />
                      </div>
                      <div className="group">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 block">Phone / WhatsApp *</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 text-white h-12 rounded-xl px-4 focus:outline-none focus:border-[#14833b] transition-colors"
                          required
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 block">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 text-white h-12 rounded-xl px-4 focus:outline-none focus:border-[#14833b] transition-colors"
                      />
                    </div>
                    <div className="group">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 block">Your Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full min-h-[120px] bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#14833b] transition-colors resize-none"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="inline-flex items-center gap-3 bg-[#14833b] hover:bg-white hover:text-black text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors duration-300"
                    >
                      SEND VIA WHATSAPP
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send">
                        <path d="m22 2-7 20-4-9-9-4Z"></path>
                        <path d="M22 2 11 13"></path>
                      </svg>
                    </button>
                  </form>
                </div>

                {/* Info section */}
                <div className="lg:col-span-5 space-y-8">
                  <h2 className="text-3xl font-serif font-bold text-white">Contact Info</h2>
                  <div className="space-y-6">
                    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#14833b] shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      </div>
                      <div>
                        <h4 className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-1">Head Office Address</h4>
                        <p className="text-sm font-light leading-relaxed">Chandigarh Road, Ludhiana, Punjab, India</p>
                      </div>
                    </div>

                    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#14833b] shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      </div>
                      <div>
                        <h4 className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-1">Phone / WhatsApp</h4>
                        <p className="text-sm font-light leading-relaxed">+91 6284661722</p>
                      </div>
                    </div>

                    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#14833b] shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      </div>
                      <div>
                        <h4 className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-1">Email Address</h4>
                        <p className="text-sm font-light leading-relaxed">info@spinglobal.in</p>
                      </div>
                    </div>

                    <div className="bg-[#14833b] rounded-3xl p-6 flex gap-4 text-black">
                      <div className="w-12 h-12 rounded-2xl bg-black/10 flex items-center justify-center text-black shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                      </div>
                      <div>
                        <h4 className="text-[10px] text-black/60 uppercase tracking-wider font-bold mb-1">Service Availability</h4>
                        <p className="text-base font-bold">24 Hours / 7 Days Online</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>
      </div>
    </ScrollReveal>
  );
}
