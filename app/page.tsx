// app/page.tsx
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import AboutSection from '@/components/AboutSection';
import LatestProjects from '@/components/LatestProjects';
// Header ve Footer importlarını buradan kaldır, Layout hallediyor.

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      
      {/* İstatistik Bandı */}
      <section className="bg-yellow-600 py-16 text-white">
         <div className="container mx-auto px-6 flex flex-wrap justify-around text-center gap-8">
            <div><div className="text-5xl font-bold mb-1">50+</div><div className="text-sm opacity-90">Proje</div></div>
            <div><div className="text-5xl font-bold mb-1">1000+</div><div className="text-sm opacity-90">Müşteri</div></div>
            <div><div className="text-5xl font-bold mb-1">850</div><div className="text-sm opacity-90">Dönüm Arazi</div></div>
         </div>
      </section>

      <LatestProjects />
    </main>
  );
}