import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import AboutSection from '@/components/AboutSection';
import LatestProjects from '@/components/LatestProjects';
import CtaSection from '@/components/CtaSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <LatestProjects />
      <CtaSection />
    </main>
  );
}
