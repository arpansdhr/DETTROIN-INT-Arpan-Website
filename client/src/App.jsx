import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AcademicsSection from './components/AcademicsSection';
import AdmissionWizard from './components/AdmissionWizard';
import FacilitiesSection from './components/FacilitiesSection';
import EventsNoticeBoard from './components/EventsNoticeBoard';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

  return (
    <div className="app-root">
      <Navbar onOpenAdmission={() => setIsAdmissionModalOpen(true)} />
      
      <main>
        <HeroSection onOpenAdmission={() => setIsAdmissionModalOpen(true)} />
        <AboutSection />
        <AcademicsSection onOpenAdmission={() => setIsAdmissionModalOpen(true)} />
        <FacilitiesSection onOpenAdmission={() => setIsAdmissionModalOpen(true)} />
        <AdmissionWizard />
        <EventsNoticeBoard onOpenAdmission={() => setIsAdmissionModalOpen(true)} />
        <GallerySection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer onOpenAdmission={() => setIsAdmissionModalOpen(true)} />

      {isAdmissionModalOpen && (
        <AdmissionWizard 
          isModal={true} 
          onClose={() => setIsAdmissionModalOpen(false)} 
        />
      )}
    </div>
  );
}
