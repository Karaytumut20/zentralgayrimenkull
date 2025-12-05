// app/page.tsx
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import AboutSection from '@/components/AboutSection';
// LatestProjects importu kaldırıldı

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      
      

      {/* LatestProjects (Projeler) bölümü tamamen kaldırıldı */}
    </main>
  );
}