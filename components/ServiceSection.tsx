"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Factory, Building2, Map, Globe, X, CheckCircle2, LucideIcon } from 'lucide-react';

// --- VERİ YAPISI ---
interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  icon: LucideIcon;
  longDescription: React.ReactNode; 
}

const services: ServiceItem[] = [
  {
    id: "01",
    title: "SANAYİ & LOJİSTİK",
    desc: "Organize sanayi bölgelerinde fabrika ve depo projeleri geliştirme.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800",
    icon: Factory,
    longDescription: (
      <div className="space-y-4">
        <p>
          Konya Organize Sanayi Bölgeleri (OSB) başta olmak üzere, üretim ve depolama ihtiyaçlarına yönelik anahtar teslim projeler geliştiriyoruz. Yüksek tavan, güçlendirilmiş zemin ve gelişmiş enerji altyapısına sahip modern tesisler inşa ediyoruz.
        </p>
        <h4 className="text-lg font-bold text-[#051328] border-b border-gray-200 pb-2">Hizmet Kapsamı:</h4>
        <ul className="space-y-2">
            <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span><strong>Fizibilite:</strong> Bölgesel teşvik ve lojistik analizi.</span></li>
            <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span><strong>Endüstriyel Tasarım:</strong> Vinç yolları ve yükleme rampaları.</span></li>
            <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span><strong>Süreç Yönetimi:</strong> Ruhsat, iskan ve bürokrasi takibi.</span></li>
        </ul>
      </div>
    )
  },
  {
    id: "02",
    title: "TİCARİ PLAZALAR",
    desc: "Şehir merkezlerinde A+ ofis ve karma kullanım projeleri.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
    icon: Building2,
    longDescription: (
      <div className="space-y-4">
        <p>
          Şehrin en değerli lokasyonlarında, modern mimari ve akıllı bina teknolojilerini birleştiren A+ ofis projeleri tasarlıyoruz. Kurumsal firmalar için yüksek prestij ve verimlilik sağlayan çalışma alanları sunuyoruz.
        </p>
        <h4 className="text-lg font-bold text-[#051328] border-b border-gray-200 pb-2">Öne Çıkanlar:</h4>
        <ul className="space-y-2">
            <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span><strong>Yüksek Kira Getirisi:</strong> Kurumsal kiracı garantisi.</span></li>
            <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span><strong>Akıllı Altyapı:</strong> Fiber ağlar ve iklimlendirme sistemleri.</span></li>
            <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span><strong>Merkezi Konum:</strong> Finans merkezlerine yürüme mesafesi.</span></li>
        </ul>
      </div>
    )
  },
  {
    id: "03",
    title: "ARSA GELİŞTİRME",
    desc: "İmar planlaması ve parselasyon süreçleri yönetimi.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800",
    icon: Map,
    longDescription: (
      <div className="space-y-4">
        <p>
          Ham arazileri profesyonel planlama süreçleriyle inşaata hazır, yüksek değerli arsalara dönüştürüyoruz. Belediyelerle koordineli çalışarak 18. Madde, ifraz ve tevhid işlemlerini uzman ekibimizle yönetiyoruz.
        </p>
        <h4 className="text-lg font-bold text-[#051328] border-b border-gray-200 pb-2">Süreç Detayları:</h4>
        <ul className="space-y-2">
            <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span><strong>İmar Analizi:</strong> 1/1000 ve 1/5000 plan takibi.</span></li>
            <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span><strong>Kat Karşılığı:</strong> Adil paylaşım modelleri geliştirme.</span></li>
            <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span><strong>Değer Artışı:</strong> Arazi vasfından arsa vasfına geçiş.</span></li>
        </ul>
      </div>
    )
  },
  {
    id: "04",
    title: "ULUSLARARASI YATIRIM",
    desc: "Londra ve Dubai pazarlarında gayrimenkul danışmanlığı.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800",
    icon: Globe,
    longDescription: (
      <div className="space-y-4">
        <p>
          Londra, Dubai ve Karadağ başta olmak üzere global pazarlarda döviz bazlı getiri sağlayan gayrimenkul fırsatları sunuyoruz. Hukuki süreçlerden oturum izni başvurularına kadar uçtan uca danışmanlık veriyoruz.
        </p>
        <h4 className="text-lg font-bold text-[#051328] border-b border-gray-200 pb-2">Fırsatlar:</h4>
        <ul className="space-y-2">
            <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span><strong>Dubai:</strong> Vergisiz kazanç ve yüksek kira getirisi.</span></li>
            <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span><strong>Londra:</strong> Stabil pazar ve değer koruma.</span></li>
            <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span><strong>Vatandaşlık:</strong> Yatırım yoluyla oturum programları.</span></li>
        </ul>
      </div>
    )
  }
];

export default function ServiceSection() {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  return (
    <section className="py-16 lg:py-28 bg-[#F8F9FA]">
      
      {/* --- POP-UP MODAL ALANI --- */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Arka Plan Karartma */}
            <div 
                className="absolute inset-0 bg-[#051328]/80 backdrop-blur-sm transition-opacity"
                onClick={() => setActiveService(null)}
            ></div>

            {/* Modal İçeriği */}
            <div className="relative bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl animate-in zoom-in-95 duration-300">
                
                {/* Kapatma Butonu */}
                <button 
                    onClick={() => setActiveService(null)}
                    className="absolute top-4 right-4 z-20 p-2 bg-white/80 rounded-full hover:bg-red-500 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Modal Görseli */}
                <div className="relative h-56 w-full">
                    <Image 
                        src={activeService.image} 
                        alt={activeService.title} 
                        fill 
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                        <activeService.icon size={28} className="text-[#D4AF37]" />
                        <h3 className="text-2xl font-serif font-bold">{activeService.title}</h3>
                    </div>
                </div>

                {/* Modal Metni */}
                <div className="p-8 text-gray-600 leading-relaxed text-base">
                    {activeService.longDescription}
                    
                    {/* BUTON: İLETİŞİM SAYFASINA GİDER */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                        <Link 
                            href="/iletisim" 
                            className="block w-full text-center bg-[#051328] text-white py-3 font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#051328] transition-colors rounded-sm"
                        >
                            Danışmanla Görüş
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      )}


      <div className="container mx-auto px-4 lg:px-6">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
          <span className="text-[#D4AF37] font-bold tracking-[0.3em] text-xs lg:text-sm uppercase block mb-3">
             Uzmanlık Alanlarımız
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#051328]">
            Sektörel Çözümler
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
        </div>

        {/* Grid Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveService(item)}
              className="group block relative h-[400px] overflow-hidden bg-[#051328] shadow-xl hover:shadow-2xl transition-all duration-500 rounded-sm cursor-pointer"
            >
              
              {/* Arka Plan Resmi */}
              <div className="absolute inset-0 h-full w-full">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051328] via-[#051328]/50 to-transparent"></div>
              </div>

              {/* İçerik */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <div className="absolute top-8 left-8 right-8 flex justify-between items-start border-b border-white/20 pb-4 mb-auto group-hover:border-[#D4AF37]/50 transition-colors duration-500">
                    <item.icon size={32} className="text-white group-hover:text-[#D4AF37] transition-colors duration-300" />
                    <span className="text-4xl font-serif font-bold text-white/10 group-hover:text-white/20 transition-colors duration-300">
                        {item.id}
                    </span>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 border-l-2 border-[#D4AF37] pl-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {item.desc}
                    </p>
                    <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                        Detayları İncele <ArrowRight size={16} className="text-[#D4AF37]" />
                    </div>
                </div>
              </div>

              {/* Çerçeve Efekti */}
              <div className="absolute inset-4 border border-[#D4AF37] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-none z-30"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}