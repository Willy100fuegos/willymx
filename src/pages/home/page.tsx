import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import TechStackSection from './components/TechStackSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-wily-dark text-slate-300 font-sans antialiased selection:bg-wily-blue selection:text-white leading-relaxed">
      <Navbar scrolled={scrolled} />
      <HeroSection />
      <ProfileSection />
      <SkillsSection />
      <TechStackSection />
      <ProjectsSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}