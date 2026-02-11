const fs = require("fs");
const path = require("path");

console.log("TypeScript (Vercel Build) Hatası Çözülüyor...");

const serviceCode = `"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Factory, Building2, Map, Globe, X, CheckCircle2, LucideIcon } from 'lucide-react';
import { useLanguage } from './LanguageContext';

// TİP TANIMLAMASI BURAYA EKLENDİ (Hatayı Çözen Kısım)
interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  icon: LucideIcon;
  longDescription: React.ReactNode;
}

export default function ServiceSection() {
  const { lang } = useLanguage();

  // STATE TİPİ BURADA BELİRTİLDİ (<ServiceItem | null>)
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: "01",
      title: lang === 'tr' ? "SANAYİ & LOJİSTİK" : "INDUSTRY & LOGISTICS",
      desc: lang === 'tr' ? "Organize sanayi bölgelerinde fabrika ve depo projeleri geliştirme." : "Factory and warehouse project development in organized industrial zones.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800",
      icon: Factory,
      longDescription: (
        <div className="space-y-4">
          <p>{lang === 'tr' ? 'Konya Organize Sanayi Bölgeleri başta olmak üzere...' : 'We develop turnkey projects for production and storage needs, especially in Konya Organized Industrial Zones.'}</p>
          <ul className="space-y-2 mt-4">
              <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span>{lang === 'tr' ? 'Fizibilite: Bölgesel teşvik ve lojistik analizi.' : 'Feasibility: Regional incentive and logistics analysis.'}</span></li>
              <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span>{lang === 'tr' ? 'Endüstriyel Tasarım: Yükleme rampaları.' : 'Industrial Design: Loading ramps and crane ways.'}</span></li>
          </ul>
        </div>
      )
    },
    {
      id: "02",
      title: lang === 'tr' ? "TİCARİ PLAZALAR" : "COMMERCIAL PLAZAS",
      desc: lang === 'tr' ? "Şehir merkezlerinde A+ ofis ve karma kullanım projeleri." : "A+ office and mixed-use projects in city centers.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
      icon: Building2,
      longDescription: (
        <div className="space-y-4">
          <p>{lang === 'tr' ? 'Şehrin en değerli lokasyonlarında ofis projeleri tasarlıyoruz.' : 'We design A+ office projects combining modern architecture and smart building technologies.'}</p>
          <ul className="space-y-2 mt-4">
              <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span>{lang === 'tr' ? 'Yüksek Kira Getirisi' : 'High Rental Income Guarantee'}</span></li>
              <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span>{lang === 'tr' ? 'Merkezi Konum' : 'Central Location & Accessibility'}</span></li>
          </ul>
        </div>
      )
    },
    {
      id: "03",
      title: lang === 'tr' ? "ARSA GELİŞTİRME" : "LAND DEVELOPMENT",
      desc: lang === 'tr' ? "İmar planlaması ve parselasyon süreçleri yönetimi." : "Zoning planning and parceling process management.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800",
      icon: Map,
      longDescription: (
        <div className="space-y-4">
          <p>{lang === 'tr' ? 'Ham arazileri inşaata hazır arsalara dönüştürüyoruz.' : 'We transform raw lands into construction-ready, high-value lands through professional planning.'}</p>
          <ul className="space-y-2 mt-4">
              <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span>{lang === 'tr' ? 'İmar Analizi' : 'Zoning Analysis'}</span></li>
              <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span>{lang === 'tr' ? 'Değer Artışı' : 'High Value Increase'}</span></li>
          </ul>
        </div>
      )
    },
    {
      id: "04",
      title: lang === 'tr' ? "ULUSLARARASI YATIRIM" : "INTERNATIONAL INVESTMENT",
      desc: lang === 'tr' ? "Londra ve Dubai pazarında gayrimenkul danışmanlığı." : "Real estate consultancy in London and Dubai markets.",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800",
      icon: Globe,
      longDescription: (
        <div className="space-y-4">
          <p>{lang === 'tr' ? 'Global pazarlarda döviz bazlı getiri sağlayan fırsatlar sunuyoruz.' : 'We offer real estate opportunities providing foreign exchange returns in global markets.'}</p>
          <ul className="space-y-2 mt-4">
              <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span>{lang === 'tr' ? 'Dubai: Vergisiz kazanç.' : 'Dubai: Tax-free income.'}</span></li>
              <li className="flex gap-3"><CheckCircle2 className="text-[#D4AF37] w-5 h-5 flex-shrink-0"/> <span>{lang === 'tr' ? 'Vatandaşlık İşlemleri' : 'Citizenship Programs'}</span></li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 lg:py-28 bg-[#F8F9FA]">
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[#051328]/80 backdrop-blur-sm" onClick={() => setActiveService(null)}></div>
            <div className="relative bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl animate-in zoom-in-95 duration-300">
                <button onClick={() => setActiveService(null)} className="absolute top-4 right-4 z-20 p-2.5 bg-[#051328] text-[#D4AF37] border border-[#D4AF37]/50 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-all">
                    <X size={24} />
                </button>
                <div className="relative h-56 w-full">
                    <Image src={activeService.image} alt={activeService.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                        <activeService.icon size={28} className="text-[#D4AF37]" />
                        <h3 className="text-2xl font-serif font-bold">{activeService.title}</h3>
                    </div>
                </div>
                <div className="p-8 text-gray-600">
                    {activeService.longDescription}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                        <Link href="/iletisim" className="block w-full text-center bg-[#051328] text-white py-3 font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#051328] transition-colors rounded-sm">
                            {lang === 'tr' ? 'Danışmanla Görüş' : 'Contact an Advisor'}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      )}

      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
          <span className="text-[#D4AF37] font-bold tracking-[0.3em] text-xs lg:text-sm uppercase block mb-3">
             {lang === 'tr' ? 'Uzmanlık Alanlarımız' : 'Our Areas of Expertise'}
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#051328]">
            {lang === 'tr' ? 'Sektörel Çözümler' : 'Sectoral Solutions'}
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <div key={idx} onClick={() => setActiveService(item)} className="group block relative h-[400px] overflow-hidden bg-[#051328] shadow-xl hover:shadow-2xl transition-all duration-500 rounded-sm cursor-pointer">
              <div className="absolute inset-0 h-full w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051328] via-[#051328]/50 to-transparent"></div>
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <div className="absolute top-8 left-8 right-8 flex justify-between items-start border-b border-white/20 pb-4 mb-auto">
                    <item.icon size={32} className="text-white group-hover:text-[#D4AF37] transition-colors" />
                    <span className="text-4xl font-serif font-bold text-white/10">{item.id}</span>
                </div>
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-[#D4AF37]">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 border-l-2 border-[#D4AF37] pl-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {item.desc}
                    </p>
                    <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                        {lang === 'tr' ? 'Detayları İncele' : 'View Details'} <ArrowRight size={16} className="text-[#D4AF37]" />
                    </div>
                </div>
              </div>
              <div className="absolute inset-4 border border-[#D4AF37] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all pointer-events-none z-30"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

fs.writeFileSync(
  path.join(__dirname, "components", "ServiceSection.tsx"),
  serviceCode,
);
console.log(
  "✅ Vercel Build (Type error: Property 'image' does not exist on type 'never') sorunu çözüldü!",
);
