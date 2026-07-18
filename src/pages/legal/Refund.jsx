import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';

export default function Refund() {
  return (
    <ScrollReveal>
      <div className="bg-[#050e1d] min-h-screen text-white py-32 font-sans selection:bg-[#14833b] selection:text-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-[#14833b] border-b border-white/10 pb-4">Refund Policy</h1>
          <div className="space-y-6 text-gray-400 leading-relaxed font-light">
            <p className="text-lg">Last Updated: July 2026</p>
            <p>At SPIN Global, we understand that travel plans can change. This Refund Policy details our cancellation and refund protocols for holiday packages and visa consultancy fees.</p>
            <h2 className="text-2xl font-bold text-white mt-8">Visa Service Fees</h2>
            <p>Please note that government visa fees and our consultancy service fees are non-refundable once documentation has been submitted to the respective embassy, consulate, or VFS portal, regardless of the visa decision.</p>
            <h2 className="text-2xl font-bold text-white mt-8">Holiday Packages Cancellation</h2>
            <p>Refunds for hotel bookings, flights, and activities are subject to the specific refund policies of the partner airlines, resorts, and local transportation fleets. Cancellations must be submitted in writing to info@spinglobal.in.</p>
            <h2 className="text-2xl font-bold text-white mt-8">Processing Refunds</h2>
            <p>Approved refunds are processed back to the original source payment method or corporate bank account within 7 to 10 working days of approval, depending on bank clearance speeds.</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
