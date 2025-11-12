import Navigation from './components/Navigation';
import HeroSection from './components/sections/HeroSection';
import TechStackSection from './components/sections/TechStackSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import FooterSection from './components/sections/FooterSection';

function App() {
  return (
    <div className="min-h-screen bg-linear-bg">
      <Navigation />
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
