import React from 'react';

// Import all section components
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SolutionsSection from './sections/SolutionsSection';
import EducatorsSection from './sections/EducatorsSection';
import ParentsSection from './sections/ParentsSection';
import PricingSection from './sections/PricingSection';
import TestimonialsSection from './sections/TestimonialsSection';
import CTASection from './sections/CTASection';

const App = () => {
  return (
    <div className="min-h-screen font-sans bg-gray-50 overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <EducatorsSection />
        <ParentsSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;