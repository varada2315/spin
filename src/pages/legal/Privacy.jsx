import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';

export default function Privacy() {
  return (
    <ScrollReveal>
      <div className="bg-[#050e1d] min-h-screen text-white py-32 font-sans selection:bg-[#14833b] selection:text-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-[#14833b] border-b border-white/10 pb-4">Privacy Policy</h1>
          <div className="space-y-6 text-gray-400 leading-relaxed font-light">
            <p className="text-lg">Last Updated: July 2026</p>
            <p>At SPIN Global, accessible from Chandigarh Road, Ludhiana, Punjab, India, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by SPIN Global and how we use it.</p>
            <h2 className="text-2xl font-bold text-white mt-8">Information We Collect</h2>
            <p>We collect personal information that you provide to us directly, such as when you submit a lead form, contact us via WhatsApp, call us, or email us. This information may include your name, email address, phone number, travel preferences, and visa requirement details.</p>
            <h2 className="text-2xl font-bold text-white mt-8">How We Use Your Information</h2>
            <p>We use the information we collect to facilitate customized itinerary planning, visa advisory, and customer service support. This includes sending you updates on your bookings, consulting on documents, and contacting you regarding special requests.</p>
            <h2 className="text-2xl font-bold text-white mt-8">Third-Party Service Providers</h2>
            <p>SPIN Global does not sell or distribute your private contact details to unrelated third-party corporations. We only share information with certified partners (hotels, airlines, local operators) when necessary to fulfill travel itineraries.</p>
            <h2 className="text-2xl font-bold text-white mt-8">Consent</h2>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
