import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Core pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Fleet from './pages/Fleet';
import Visa from './pages/Visa';
import Package1 from './pages/Package1';
import Umrah from './pages/Umrah';

// Renamed pages
import Domestic from './pages/UAETours';
import International from './pages/InternationalTours';
import DesertSafari from './pages/DesertSafari';

// Dynamically generated package pages from PDF
import IndonesiaBali from './pages/packages/IndonesiaBali';
import UAE from './pages/packages/UAE';
import Vietnam from './pages/packages/Vietnam';
import Thailand from './pages/packages/Thailand';
import Singapore from './pages/packages/Singapore';
import Malaysia from './pages/packages/Malaysia';
import Japan from './pages/packages/Japan';
import Schengen from './pages/packages/Schengen';
import SriLanka from './pages/packages/SriLanka';
import Philippines from './pages/packages/Philippines';
import Georgia from './pages/packages/Georgia';
import Kazakhstan from './pages/packages/Kazakhstan';
import Maldives from './pages/packages/Maldives';
import SaudiArabia from './pages/packages/SaudiArabia';
import Turkey from './pages/packages/Turkey';
import Russia from './pages/packages/Russia';
import SouthKorea from './pages/packages/SouthKorea';
import Kenya from './pages/packages/Kenya';
import Egypt from './pages/packages/Egypt';
import Mauritius from './pages/packages/Mauritius';
import Nepal from './pages/packages/Nepal';
import Bhutan from './pages/packages/Bhutan';
import Kashmir from './pages/packages/Kashmir';
import Andaman from './pages/packages/Andaman';
import LehLadakh from './pages/packages/LehLadakh';
import Rajasthan from './pages/packages/Rajasthan';
import Goa from './pages/packages/Goa';
import Meghalaya from './pages/packages/Meghalaya';
import Sikkim from './pages/packages/Sikkim';
import Kerala from './pages/packages/Kerala';

import { useState, useEffect } from 'react';

// Legal pages
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Refund from './pages/legal/Refund';
import Disclaimer from './pages/legal/Disclaimer';

// Global interactive components
import FloatingWidgets from './components/FloatingWidgets';
import RecentlyViewed from './components/RecentlyViewed';
import TimedPopup from './components/TimedPopup';
import LeadModal from './components/LeadModal';
import EnquiryModal from './components/EnquiryModal';
import MascotGuide from './components/MascotGuide';

export default function App() {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [activeEnquiryPackage, setActiveEnquiryPackage] = useState(null);

  useEffect(() => {
    // Expose lead modal trigger globally so any page button (e.g. Hero CTA, package pricing enquiry) can open it
    window.triggerPlanMyTrip = () => {
      setIsLeadOpen(true);
    };
    window.triggerEnquiryModal = (pkg) => {
      setActiveEnquiryPackage(pkg);
      setIsEnquiryOpen(true);
    };
    return () => {
      window.triggerPlanMyTrip = null;
      window.triggerEnquiryModal = null;
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#050e1d] text-white font-sans antialiased flex flex-col relative selection:bg-[#14833b] selection:text-black">
        {/* Decorative background blobs */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#14833b]/5 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-[#14833b]/5 blur-[180px] rounded-full"></div>
        </div>

        <Navbar />
        <main className="flex-1 w-full relative z-10">
          <Routes>
            {/* Core page routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/package1" element={<Navigate to="/international" replace />} />
            <Route path="/desert-safari" element={<DesertSafari />} />
            
            {/* New cleaned routing paths */}
            <Route path="/domestic" element={<Domestic />} />
            <Route path="/international" element={<International />} />
            
            {/* Legacy redirect pathways for SEO/URL preservation */}
            <Route path="/uae-tours" element={<Navigate to="/domestic" replace />} />
            <Route path="/umrah" element={<Navigate to="/domestic" replace />} />
            <Route path="/international-tours" element={<Navigate to="/international" replace />} />

            {/* Keeping Umrah component route if directly accessed via deep link */}
            <Route path="/umrah-packages" element={<Umrah />} />

            {/* Legal Pages routes */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/disclaimer" element={<Disclaimer />} />

            {/* PDF generated details pages routes */}
            <Route path="/packages/indonesia-bali" element={<IndonesiaBali />} />
            <Route path="/packages/uae" element={<UAE />} />
            <Route path="/packages/vietnam" element={<Vietnam />} />
            <Route path="/packages/thailand" element={<Thailand />} />
            <Route path="/packages/singapore" element={<Singapore />} />
            <Route path="/packages/malaysia" element={<Malaysia />} />
            <Route path="/packages/japan" element={<Japan />} />
            <Route path="/packages/schengen" element={<Schengen />} />
            <Route path="/packages/sri-lanka" element={<SriLanka />} />
            <Route path="/packages/philippines" element={<Philippines />} />
            <Route path="/packages/georgia" element={<Georgia />} />
            <Route path="/packages/kazakhstan" element={<Kazakhstan />} />
            <Route path="/packages/maldives" element={<Maldives />} />
            <Route path="/packages/saudi-arabia" element={<SaudiArabia />} />
            <Route path="/packages/turkey" element={<Turkey />} />
            <Route path="/packages/russia" element={<Russia />} />
            <Route path="/packages/south-korea" element={<SouthKorea />} />
            <Route path="/packages/kenya" element={<Kenya />} />
            <Route path="/packages/egypt" element={<Egypt />} />
            <Route path="/packages/mauritius" element={<Mauritius />} />
            <Route path="/packages/nepal" element={<Nepal />} />
            <Route path="/packages/bhutan" element={<Bhutan />} />
            <Route path="/packages/kashmir" element={<Kashmir />} />
            <Route path="/packages/andaman" element={<Andaman />} />
            <Route path="/packages/leh-ladakh" element={<LehLadakh />} />
            <Route path="/packages/rajasthan" element={<Rajasthan />} />
            <Route path="/packages/goa" element={<Goa />} />
            <Route path="/packages/meghalaya" element={<Meghalaya />} />
            <Route path="/packages/sikkim" element={<Sikkim />} />
            <Route path="/packages/kerala" element={<Kerala />} />
          </Routes>
        </main>
        <Footer />

        {/* Global Interactive Elements */}
        <FloatingWidgets />
        <MascotGuide />
        <RecentlyViewed />
        <TimedPopup />
        <LeadModal isOpen={isLeadOpen} onClose={() => setIsLeadOpen(false)} />
        <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} packageData={activeEnquiryPackage} />
      </div>
    </Router>
  );
}
