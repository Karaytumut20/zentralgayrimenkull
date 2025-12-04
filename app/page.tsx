// app/page.tsx
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import AboutSection from '@/components/AboutSection';
import LatestProjects from '@/components/LatestProjects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <HeroSection />
      
      {/* 1. Hakkımızda Bölümü (Yeni) */}
      <AboutSection />
      
      {/* 2. Hizmetler (ServiceSection - Daha önce vermiştik) */}
      <ServiceSection />
      
      {/* 3. İstatistik Bandı (Basit ama etkili) */}
      <section className="bg-yellow-600 py-16 text-white">
         <div className="container mx-auto px-6 flex flex-wrap justify-around text-center gap-8">
            <div>
              <div className="text-5xl font-bold mb-1">50+</div>
              <div className="text-sm font-medium uppercase tracking-widest opacity-90">Proje</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-1">1000+</div>
              <div className="text-sm font-medium uppercase tracking-widest opacity-90">Müşteri</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-1">850</div>
              <div className="text-sm font-medium uppercase tracking-widest opacity-90">Dönüm Arazi</div>
            </div>
         </div>
      </section>

      {/* 4. Öne Çıkan Projeler (Yeni) */}
      <LatestProjects />

      {/* 5. Footer (Yeni) */}
    </main>
  );
}