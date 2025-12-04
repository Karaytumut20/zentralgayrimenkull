// components/ServiceSection.tsx
"use client";
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "SANAYİ & LOJİSTİK",
    desc: "Organize sanayi bölgelerinde fabrika ve depo projeleri geliştirme.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800"
  },
  {
    title: "TİCARİ PLAZALAR",
    desc: "Şehir merkezlerinde A+ ofis ve karma kullanım projeleri.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
  },
  {
    title: "ARSA GELİŞTİRME",
    desc: "İmar planlaması ve parselasyon süreçleri yönetimi.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800"
  },
  {
    title: "ULUSLARARASI YATIRIM",
    desc: "Londra ve Dubai pazarlarında gayrimenkul danışmanlığı.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800"
  }
];

export default function ServiceSection() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-yellow-600 font-bold tracking-[0.2em] text-sm uppercase block mb-3">Uzmanlık Alanlarımız</span>
          <h2 className="text-4xl font-extrabold text-slate-900">Sektörel Çözümler</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <div key={idx} className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative h-[400px]">
              
              {/* Resim Alanı */}
              <div className="absolute inset-0 h-full w-full">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/70 transition-colors duration-300"></div>
              </div>

              {/* İçerik Alanı (Resmin üzerine biniyor) */}
              <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-12 h-1 bg-yellow-500 mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <h3 className="text-2xl font-bold mb-3 tracking-wide">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.desc}
                </p>
                
                <button className="flex items-center gap-2 text-yellow-500 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  İncele <ArrowRight size={16} />
                </button>
              </div>

              {/* Alt Çizgi Efekti */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}