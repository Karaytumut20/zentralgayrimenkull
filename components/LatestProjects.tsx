"use client";
import Image from 'next/image';
import { MapPin, ArrowUpRight, ExternalLink, Building2, Factory, Gem, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function LatestProjects() {
  const { lang } = useLanguage();
  const SAHIBINDEN_LINK = "https://zentralgayrimenkul.sahibinden.com/";

  const categories = [
    {
      id: 1,
      title: lang === 'tr' ? "Sanayi & Lojistik Yatırımları" : "Industry & Logistics",
      subtitle: lang === 'tr' ? "Yüksek Kira Getirili Fabrika & Depo" : "High Rental Yield Factories & Warehouses",
      location: "Konya OSB",
      count: lang === 'tr' ? "18+ Fırsat" : "18+ Opportunities",
      icon: <Factory size={28} />,
      image: "https://images.unsplash.com/photo-1565793979206-10951493332d?q=80&w=1000"
    },
    {
      id: 2,
      title: lang === 'tr' ? "Ultra Lüks Yaşam Alanları" : "Ultra Luxury Living Spaces",
      subtitle: lang === 'tr' ? "Meram'da Prestijli Villalar" : "Prestigious Villas in Meram",
      location: "Meram & Selçuklu",
      count: lang === 'tr' ? "25+ Özel Portföy" : "25+ Special Portfolio",
      icon: <Gem size={28} />,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000"
    },
    {
      id: 3,
      title: lang === 'tr' ? "Ticari Merkez & Plazalar" : "Commercial Plazas",
      subtitle: lang === 'tr' ? "Şehrin Kalbinde Kurumsal Ofisler" : "Corporate Offices in the Heart of the City",
      location: "Konya Finans Merkezi",
      count: lang === 'tr' ? "12+ Ticari Ünite" : "12+ Commercial Units",
      icon: <Building2 size={28} />,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000"
    }
  ];

  return (
    <section className="py-28 bg-[#0B0F19] text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-extrabold text-slate-800/20 pointer-events-none select-none whitespace-nowrap z-0">PREMIUM</div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-600/30 rounded-full blur-[180px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-yellow-500 font-bold tracking-[0.3em] text-sm uppercase flex items-center gap-2">
                <Sparkles size={16} /> {lang === 'tr' ? 'CANLI VİTRİN' : 'LIVE SHOWCASE'}
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              {lang === 'tr' ? 'Sadece En İyiler.' : 'Only The Best.'} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                {lang === 'tr' ? 'Fırsatları Keşfedin.' : 'Discover the Opportunities.'}
              </span>
            </h2>
          </div>
          <div className="hidden lg:block relative group">
            <a href={SAHIBINDEN_LINK} target="_blank" rel="noopener noreferrer" className="relative flex items-center gap-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-950 px-10 py-6 rounded-lg font-extrabold text-xl uppercase tracking-wider hover:scale-[1.02] transition-transform">
              <span>{lang === 'tr' ? 'TÜM İLANLARI GÖR' : 'VIEW ALL LISTINGS'}</span>
              <ExternalLink className="group-hover:rotate-45 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((cat) => (
            <a key={cat.id} href={SAHIBINDEN_LINK} target="_blank" rel="noopener noreferrer" className="group relative h-[550px] rounded-[2rem] overflow-hidden cursor-pointer">
              <div className="relative h-full w-full bg-slate-900 rounded-[2rem] overflow-hidden z-10 border border-slate-800">
                <Image src={cat.image} alt={cat.title} fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent opacity-90"></div>
                <div className="absolute top-0 left-0 w-full h-full p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className="bg-yellow-500/20 text-yellow-400 p-4 rounded-2xl">{cat.icon}</div>
                    <div className="bg-slate-800/80 text-yellow-400 font-bold text-sm px-4 py-2 rounded-full border border-yellow-500/30">
                      {cat.count}
                    </div>
                  </div>
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                     <h3 className="text-3xl font-extrabold mb-2 text-white">{cat.title}</h3>
                     <p className="text-slate-300 text-lg mb-6">{cat.subtitle}</p>
                     <div className="flex items-center justify-between border-t border-slate-700/50 pt-6">
                        <div className="flex items-center text-slate-400 text-sm font-medium"><MapPin size={18} className="mr-2 text-yellow-500" />{cat.location}</div>
                        <div className="flex items-center gap-2 text-yellow-400 font-bold uppercase tracking-wider opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                           {lang === 'tr' ? 'İncele' : 'Review'} <ArrowUpRight size={20} className="bg-yellow-400/20 rounded-full p-1" />
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}