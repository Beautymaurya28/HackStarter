import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import CTASection from '../components/landing/CTASection';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    document.title = 'HackStarter - Build Amazing Apps Fast';
  }, []);

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;