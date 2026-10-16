import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import SpecialtiesSection from './components/SpecialtiesSection';
import DoctorsSection from './components/DoctorsSection';
import UnitsSection from './components/UnitsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { BookingModal, SearchModal } from './components/Modals';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  const handleOpenSearch = () => setIsSearchOpen(true);
  const handleCloseSearch = () => setIsSearchOpen(false);

  return (
    <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">

      {/* Sticky Top Navigation */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenSearch={handleOpenSearch}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section matching visual reference Synora */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onOpenSearch={handleOpenSearch}
        />

        {/* Features / Benefits Carousel Cards */}
        <FeaturesSection
          onOpenBooking={handleOpenBooking}
        />

        {/* Medical Specialties Section */}
        <SpecialtiesSection
          onOpenBooking={handleOpenBooking}
          onOpenSearch={handleOpenSearch}
        />

        {/* Doctors / Medical Team */}
        <DoctorsSection
          onOpenBooking={handleOpenBooking}
        />

        {/* Clinic Units / Locations */}
        <UnitsSection
          onOpenBooking={handleOpenBooking}
        />

        {/* About Vita Natural */}
        <AboutSection
          onOpenBooking={handleOpenBooking}
        />

        {/* Contact & Schedule Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
      />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={handleCloseSearch}
      />

    </div>
  );
}
