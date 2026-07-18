import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';

export default function Terms() {
  return (
    <ScrollReveal>
      <div className="bg-[#050e1d] min-h-screen text-white py-32 font-sans selection:bg-[#14833b] selection:text-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-[#14833b] border-b border-white/10 pb-4">Terms of Service</h1>
          <div className="space-y-6 text-gray-400 leading-relaxed font-light">
            <p className="text-lg">Last Updated: July 2026</p>
            <p>Welcome to SPIN Global (&quot;See Places In New ways&quot;). These Terms of Service govern your use of our travel planning, visa consultancy, and booking advisory services provided online or at our head office in Ludhiana, Punjab, India.</p>
            <h2 className="text-2xl font-bold text-white mt-8">1. Custom Packages &amp; Booking</h2>
            <p>Every holiday package and visa application is customized to the client's parameters. Booking rates are subject to availability of flight seats and hotel rooms, and are finalized upon deposit receipt. Visas are processed in accordance with national embassy guidelines.</p>
            <h2 className="text-2xl font-bold text-white mt-8">2. Client Responsibility</h2>
            <p>Clients are solely responsible for supplying accurate personal files, financial logs, and active passports (with at least 6 months validity) for visa submissions. Any inaccuracy in forms is the responsibility of the traveler.</p>
            <h2 className="text-2xl font-bold text-white mt-8">3. Intellectual Property</h2>
            <p>All content on the SPIN Global website, including custom graphics, branding, text copy, and custom-written itineraries, is owned by SPIN Global and protected by Indian trademark and copyright regulations.</p>
            <h2 className="text-2xl font-bold text-white mt-8">4. Liability</h2>
            <p>SPIN Global acts as a personalized coordinator between travelers and global service providers (airlines, transport fleets, hotels). We are not liable for scheduling disruptions or government decisions regarding final visa stamps.</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
