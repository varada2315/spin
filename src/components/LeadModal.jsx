import React, { useState, useEffect } from 'react';

export default function LeadModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: '',
    dates: '',
    travelers: '1',
    name: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    if (isOpen) {
      setStep(1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step === 1 && !formData.destination) {
      alert('Please enter or select a destination!');
      return;
    }
    if (step === 2 && !formData.dates) {
      alert('Please fill in travel dates!');
      return;
    }
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Name and Phone Number are required!');
      return;
    }
    
    // Redirect to WhatsApp with message content
    const msg = `Hi SPIN Global, I want to plan a custom trip!\n\nDestination: ${formData.destination}\nDates: ${formData.dates}\nTravelers: ${formData.travelers}\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}`;
    const waUrl = `https://wa.me/916284661722?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#0b1d3a] border border-white/10 w-full max-w-lg rounded-3xl p-8 relative shadow-2xl">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white/60 hover:text-white text-xl p-2"
        >
          ✕
        </button>

        {/* Progress Bar */}
        <div className="w-full bg-white/10 h-1.5 rounded-full mb-6">
          <div 
            className="bg-[#14833b] h-full rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>

        {/* Mascot Guide Header in LeadModal */}
        <div className="flex gap-4 items-center mb-6 bg-white/5 border border-white/10 rounded-2xl p-3">
          <div className="w-12 h-12 shrink-0 bg-white/5 border border-white/10 rounded-xl p-0.5 flex items-center justify-center relative overflow-hidden">
            <img src="/assets/mascot.png" alt="Mascot Guide" className="object-contain w-full h-full" />
          </div>
          <div className="text-xs text-stone-200 font-light leading-relaxed text-left">
            {step === 1 && "Hello traveler! ✈️ Tell me, where is your dream vacation getaway?"}
            {step === 2 && "Awesome destination choice! When are you planning to take off?"}
            {step === 3 && "Almost done! Let me know your contact details so we can start curating!"}
          </div>
        </div>

        {step === 1 && (
          <div>
            <span className="text-[10px] text-[#14833b] font-bold uppercase tracking-widest block mb-1">Step 1 of 3</span>
            <h2 className="text-2xl font-serif font-bold text-white mb-6">Where is your dream getaway?</h2>
            <div className="space-y-4">
              <input 
                type="text" 
                name="destination"
                placeholder="e.g. Bali, Kashmir, Schengen..."
                value={formData.destination}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#14833b] transition-colors"
                required
              />
              <div className="flex flex-wrap gap-2 pt-2">
                {['Bali', 'Kashmir', 'Vietnam', 'Goa', 'Schengen'].map(dest => (
                  <button 
                    key={dest}
                    onClick={() => setFormData({ ...formData, destination: dest })}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${formData.destination === dest ? 'bg-[#14833b] border-[#14833b] text-white' : 'bg-white/5 border-white/10 text-white/60 hover:text-white'}`}
                  >
                    {dest}
                  </button>
                ))}
              </div>
            </div>
            <button 
              onClick={handleNext}
              className="w-full mt-8 bg-[#14833b] hover:bg-[#14833b]/80 text-white py-3 rounded-xl font-bold uppercase tracking-wider text-xs transition-colors"
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <span className="text-[10px] text-[#14833b] font-bold uppercase tracking-widest block mb-1">Step 2 of 3</span>
            <h2 className="text-2xl font-serif font-bold text-white mb-6">When are you looking to fly?</h2>
            <div className="space-y-6">
              <div>
                <label className="text-[10px] text-white/50 uppercase tracking-wider font-bold block mb-2">Preferred Dates</label>
                <input 
                  type="text" 
                  name="dates"
                  placeholder="e.g. Mid August, December 2026..."
                  value={formData.dates}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#14833b] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-[10px] text-white/50 uppercase tracking-wider font-bold block mb-2">Number of Travelers</label>
                <select 
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#14833b] transition-colors"
                >
                  {['1', '2', '3-5', '6+'].map(val => (
                    <option key={val} value={val} className="bg-[#0b1d3a]">{val} Traveler{val !== '1' ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <button 
                onClick={() => setStep(1)}
                className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl font-bold uppercase tracking-wider text-xs transition-colors"
              >
                Back
              </button>
              <button 
                onClick={handleNext}
                className="flex-1 bg-[#14833b] hover:bg-[#14833b]/80 text-white py-3 rounded-xl font-bold uppercase tracking-wider text-xs transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <span className="text-[10px] text-[#14833b] font-bold uppercase tracking-widest block mb-1">Step 3 of 3</span>
            <h2 className="text-2xl font-serif font-bold text-white mb-6">Contact &amp; Personal Info</h2>
            <div className="space-y-4">
              <input 
                type="text" 
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#14833b] transition-colors"
                required
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="WhatsApp Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#14833b] transition-colors"
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#14833b] transition-colors"
              />
            </div>
            <div className="flex gap-4 mt-8">
              <button 
                onClick={() => setStep(2)}
                className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl font-bold uppercase tracking-wider text-xs transition-colors"
              >
                Back
              </button>
              <button 
                onClick={handleSubmit}
                className="flex-1 bg-[#14833b] hover:bg-[#14833b]/80 text-white py-3 rounded-xl font-bold uppercase tracking-wider text-xs transition-colors"
              >
                Submit Plan
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
