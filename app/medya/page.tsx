import { Metadata } from "next";
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, BookOpen, TrendingUp, X, Calendar, Newspaper } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function MedyaPage() {
  const { lang } = useLanguage();
  const [selectedNews, setSelectedNews] = useState<string | null>(null);

  const openModal = (id: string) => { setSelectedNews(id); };
  const closeModal = () => { setSelectedNews(null); };

  const newsContent = {
    "konya-osb": {
      title: lang === 'tr' ? "Konya OSB Genişliyor: Sanayi İmarlı Arsalarda 'Altın Çağ'" : "Konya OIZ is Expanding: 'Golden Age' in Industrial Zoned Lands",
      date: lang === 'tr' ? "12 ARALIK 2025" : "DECEMBER 12, 2025",
      image: "/Yeni klasör (2)/konyaosb.webp",
      category: lang === 'tr' ? "YATIRIM FIRSATI" : "INVESTMENT OPPORTUNITY",
      body: (
        <>
          <p className="mb-4">
            {lang === 'tr'
              ? "Türkiye'nin üretim üssü Konya'da, yeni açılan 5. ve 6. organize sanayi bölgeleri yatırımcıların radarına girdi. 2025 projeksiyonlarına göre sanayi parselleri, konuta göre %40 daha fazla prim vadediyor."
              : "In Turkey's production base Konya, the newly opened 5th and 6th organized industrial zones have caught the radar of investors. According to 2025 projections, industrial parcels promise 40% more premium than residential ones."}
          </p>
          <h4 className="text-xl font-bold text-[#D4AF37] mb-2">{lang === 'tr' ? "Neden Şimdi Yatırım Yapılmalı?" : "Why Invest Now?"}</h4>
          <p className="mb-4">
            {lang === 'tr'
              ? "Bölgedeki altyapı çalışmalarının tamamlanmasıyla birlikte lojistik maliyetleri düşecek. Özellikle Aselsan Konya ve teknoloji vadisi projelerine yakın parsellerde metrekare birim fiyatlarının yıl sonuna kadar ikiye katlanması bekleniyor."
              : "With the completion of infrastructure works in the region, logistics costs will decrease. Especially in parcels close to Aselsan Konya and technology valley projects, square meter unit prices are expected to double by the end of the year."}
          </p>
        </>
      )
    },
    "sukran-donusum": {
      title: lang === 'tr' ? "Şükran Mahallesi Dönüşümü Tamamlanıyor" : "Şükran Neighborhood Transformation is Being Completed",
      date: lang === 'tr' ? "12 KASIM 2024" : "NOVEMBER 12, 2024",
      image: "/Yeni klasör (2)/1_88.jpg",
      category: lang === 'tr' ? "KENTSEL DÖNÜŞÜM" : "URBAN RENEWAL",
      body: (
        <>
          <p className="mb-4">
            {lang === 'tr'
              ? "Meram'ın tarihi dokusunu koruyarak yapılan devasa dönüşüm projesinde 1. etap sona erdi. Bölgedeki ticari üniteler ve ofisler şimdiden %80 doluluk oranına ulaştı."
              : "The 1st phase of the massive transformation project carried out by preserving the historical texture of Meram has ended. Commercial units and offices in the region have already reached an 80% occupancy rate."}
          </p>
          <p>
            {lang === 'tr'
              ? "Tarihi bedesten çarşısına yürüme mesafesindeki bu yeni yaşam alanı, modern mimari ile Selçuklu motiflerini birleştiriyor."
              : "This new living space, within walking distance of the historical bedesten bazaar, combines modern architecture with Seljuk motifs."}
          </p>
        </>
      )
    },
    "2025-beklentileri": {
      title: lang === 'tr' ? "2025 Emlak Beklentileri: Fiyatlar %50 Artabilir" : "2025 Real Estate Expectations: Prices May Increase by 50%",
      date: lang === 'tr' ? "RAPOR" : "REPORT",
      image: "/Yeni klasör (2)/artabilir.avif",
      category: lang === 'tr' ? "ANALİZ" : "ANALYSIS",
      body: (
        <>
          <p className="mb-4">
            {lang === 'tr'
              ? "İnşaat maliyet endeksindeki %23'lük artış ve beklenen faiz indirimleriyle birlikte, uzmanlar 2025'in ikinci yarısında konut fiyatlarında sert bir yükseliş öngörüyor."
              : "Coupled with a 23% increase in the construction cost index and expected interest rate cuts, experts predict a sharp rise in housing prices in the second half of 2025."}
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>{lang === 'tr' ? "Demir ve çimento maliyetlerinde artış." : "Increase in iron and cement costs."}</li>
              <li>{lang === 'tr' ? "Arsa stokunun azalması." : "Decrease in land stock."}</li>
          </ul>
        </>
      )
    },
    "manset-haber": {
      title: lang === 'tr' ? "Konya'nın Yeni 'Gelişim Vadisi' Belli Oldu" : "Konya's New 'Development Valley' Has Been Announced",
      date: lang === 'tr' ? "ÖZEL HABER" : "SPECIAL NEWS",
      image: "/Yeni klasör (2)/gelisim.jpg",
      category: lang === 'tr' ? "MANŞET" : "HEADLINE",
      body: (
        <>
          <p className="mb-4">
            {lang === 'tr'
              ? "Belediye meclisinden geçen son imar planlarına göre şehrin kuzey aksı \"Gelişim Vadisi\" ilan edildi. Bu bölgedeki tarlaların 1/1000'lik planları askıya çıktı."
              : "According to the latest zoning plans passed by the city council, the northern axis of the city was declared \"Development Valley\". The 1/1000 plans of the fields in this region were suspended."}
          </p>
          <div className="bg-gray-100 p-4 border-l-4 border-[#D4AF37] text-gray-700 italic">
              {lang === 'tr'
                ? "\"Uzmanlar uyarıyor: İmar planı kesinleşmeden yapılan yatırımlar risk taşıyabilir, ancak doğru parseli bulanlar için büyük fırsat.\""
                : "\"Experts warn: Investments made before the zoning plan is finalized may carry risks, but it is a great opportunity for those who find the right parcel.\""}
          </div>
        </>
      )
    }
  };

  const activeData = selectedNews ? newsContent[selectedNews as keyof typeof newsContent] : null;

  return (
    <main className="bg-[#051328] min-h-screen text-white font-sans selection:bg-[#D4AF37] selection:text-[#051328]">

      {/* --- POPUP / MODAL ALANI --- */}
      {selectedNews && activeData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300" onClick={closeModal}></div>

          <div className="relative bg-white text-[#051328] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl animate-in zoom-in-95 duration-300">
            <button onClick={closeModal} className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur p-2 rounded-full hover:bg-red-500 hover:text-white transition-colors">
                <X size={24} />
            </button>

            <div className="relative h-64 md:h-80 w-full">
                <Image src={activeData.image} alt={activeData.title as string} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 md:left-10">
                    <span className="bg-[#D4AF37] text-[#051328] px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm mb-2 inline-block">
                        {activeData.category}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-serif text-white leading-tight mt-2">
                        {activeData.title}
                    </h2>
                </div>
            </div>

            <div className="p-8 md:p-12">
                <div className="flex items-center gap-2 text-gray-400 text-sm font-bold mb-6 border-b border-gray-100 pb-4">
                    <Calendar size={16} /> {activeData.date}
                </div>
                <div className="prose prose-lg text-gray-600 max-w-none">
                    {activeData.body}
                </div>
            </div>
          </div>
        </div>
      )}

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/Yeni klasör (2)/1_88.jpg" alt="Konya 2025 Vizyonu" fill className="object-cover opacity-40 hover:scale-105 transition-transform duration-[3s] ease-out" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051328] via-[#051328]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <div className="inline-block border border-[#D4AF37]/50 bg-[#051328]/50 backdrop-blur-md px-6 py-2 rounded-full mb-8">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              {lang === 'tr' ? "SON DAKİKA • KONYA 2025 RAPORU" : "BREAKING • KONYA 2025 REPORT"}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-8">
            {lang === 'tr' ? "Konya Konutta" : "Konya Breaks 3-Year"} <br/>
            <span className="text-[#D4AF37] italic">{lang === 'tr' ? "3 Yılın Rekorunu Kırdı." : "Record in Housing."}</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            {lang === 'tr' ? "2025'in ilk yarısında 15.825 konut satışı ile tüm zamanların zirvesi görüldü." : "With 15,825 home sales in the first half of 2025, an all-time peak was seen."}
          </p>
          <button onClick={() => openModal('2025-beklentileri')} className="group relative inline-block px-10 py-5 bg-white text-[#051328] font-bold tracking-widest uppercase overflow-hidden cursor-pointer">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">{lang === 'tr' ? "Raporu Oku" : "Read the Report"}</span>
            <div className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
          </button>
        </div>
      </section>

      {/* 2. TRENDING STRIP */}
      <div className="border-y border-white/10 bg-[#051328]/50 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-[#D4AF37] rounded-full animate-pulse"></div>
              <span className="font-serif text-xl italic text-white">{lang === 'tr' ? "Piyasa Ekranı" : "Market Screen"}</span>
           </div>
           <div className="flex gap-8 text-sm text-gray-400 font-medium overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              <button onClick={() => openModal('sukran-donusum')} className="hover:text-[#D4AF37] cursor-pointer whitespace-nowrap transition-colors flex items-center gap-2">
                 {newsContent['sukran-donusum'].title}
              </button>
              <span className="text-[#D4AF37]">•</span>
              <button onClick={() => openModal('konya-osb')} className="hover:text-[#D4AF37] cursor-pointer whitespace-nowrap transition-colors flex items-center gap-2">
                 {newsContent['konya-osb'].title}
              </button>
           </div>
        </div>
      </div>

      {/* 3. MASONRY GRID */}
      <section className="py-24 px-6 bg-white text-[#051328]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* KART 1 */}
            <div onClick={() => openModal('konya-osb')} className="lg:col-span-2 group cursor-pointer relative overflow-hidden h-[500px] rounded-sm block">
              <Image src="/Yeni klasör (2)/konyaosb.webp" alt="Konya Sanayi" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051328] via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                  <div className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
                      <TrendingUp size={16} /> {newsContent['konya-osb'].category}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-tight">
                    {newsContent['konya-osb'].title}
                  </h3>
                  <span className="text-white underline decoration-[#D4AF37] underline-offset-4 font-bold text-sm uppercase group-hover:text-[#D4AF37] transition-colors">{lang === 'tr' ? "Analizi Oku" : "Read Analysis"}</span>
              </div>
            </div>

            {/* KART 2 */}
            <div onClick={() => openModal('sukran-donusum')} className="group cursor-pointer flex flex-col h-[500px] block">
               <div className="relative h-3/5 overflow-hidden rounded-sm mb-6">
                 <Image src="/Yeni klasör (2)/1_88.jpg" alt="Şükran Kentsel Dönüşüm" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute top-4 right-4 bg-[#051328] text-white px-3 py-1 text-xs font-bold">MERAM</div>
               </div>
               <div className="flex-1 flex flex-col justify-center">
                 <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-[#D4AF37] transition-colors">
                   {newsContent['sukran-donusum'].title}
                 </h3>
                 <p className="text-gray-600 text-sm leading-relaxed mb-4">
                   {lang === 'tr' ? "Meram'ın tarihi dokusunu koruyarak yapılan devasa dönüşüm projesinde 1. etap sona erdi." : "The 1st phase of the massive transformation project preserving Meram's historical texture has ended."}
                 </p>
                 <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-xs font-bold text-gray-400">
                   <span>{newsContent['sukran-donusum'].date}</span>
                   <ArrowUpRight size={16} />
                 </div>
               </div>
            </div>

            {/* KART 3 */}
            <div onClick={() => openModal('2025-beklentileri')} className="bg-[#F8F9FA] p-10 flex flex-col justify-center rounded-sm hover:bg-[#051328] hover:text-white transition-colors duration-500 group border border-gray-100 cursor-pointer block">
               <BookOpen size={40} className="text-[#D4AF37] mb-6" />
               <h3 className="text-2xl font-serif font-bold mb-4">
                 {newsContent['2025-beklentileri'].title}
               </h3>
               <p className="text-gray-500 group-hover:text-gray-300 mb-8 leading-relaxed">
                 {lang === 'tr' ? "İnşaat maliyet endeksindeki %23'lük artış ve beklenen faiz indirimleriyle birlikte..." : "Along with a 23% increase in construction cost index and expected interest cuts..."}
               </p>
               <span className="flex items-center gap-2 font-bold text-xs tracking-widest uppercase group-hover:text-[#D4AF37]">
                 {lang === 'tr' ? "RAPORU OKU" : "READ REPORT"} <ArrowUpRight size={16} />
               </span>
            </div>

            {/* KART 4: MANŞET HABER */}
            <div onClick={() => openModal('manset-haber')} className="lg:col-span-2 relative h-[400px] rounded-sm overflow-hidden group cursor-pointer block">
               <Image src="/Yeni klasör (2)/artabilir.avif" alt="Özel Haber Manşet" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-r from-[#051328] via-[#051328]/60 to-transparent"></div>
               <div className="absolute inset-0 p-10 flex flex-col justify-center max-w-xl">
                  <div className="flex items-center gap-2 text-[#D4AF37] mb-4">
                     <Newspaper size={20} /> <span className="text-xs font-bold tracking-widest uppercase">{newsContent['manset-haber'].category}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">
                    {newsContent['manset-haber'].title}
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed line-clamp-2">
                    {lang === 'tr' ? "Belediye meclisinden geçen son imar planlarına göre şehrin kuzey aksı yeni cazibe merkezi oluyor." : "According to the latest zoning plans passed by the city council, the city's northern axis becomes the new attraction center."}
                  </p>
                  <button className="w-max border border-white/30 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#051328] text-white px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all">
                    {lang === 'tr' ? "HARİTAYI İNCELE" : "EXAMINE THE MAP"}
                  </button>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. KAPALI PORTFÖY / İLETİŞİM ALANI */}
      <section className="py-24 bg-[#051328] relative overflow-hidden border-t border-white/10">
         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37] rounded-full blur-[250px] opacity-10 pointer-events-none"></div>
         <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">{lang === 'tr' ? "\"Kapalı Portföy\" Listesi" : "\"Closed Portfolio\" List"}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
               {lang === 'tr' ? "Halka arz edilmeyen, sadece özel müşterilerimizle paylaştığımız fırsat dosyaları için iletişime geçin." : "Contact us for opportunity files that are not offered to the public and shared only with our special clients."}
            </p>
            <Link
              href="/iletisim"
              className="inline-block bg-[#D4AF37] text-[#051328] px-12 py-4 text-lg font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              {lang === 'tr' ? "İLETİŞİME GEÇ" : "CONTACT US"}
            </Link>
         </div>
      </section>
    </main>
  );
}


export const metadata: Metadata = {
  title: "Medya",
  description: "Gayrimenkul sektörü, Konya ve Ankara emlak piyasası gelişmeleri, haberler ve Zentral Gayrimenkul duyuruları.",
  keywords: ["emlak haberleri","gayrimenkul sektörü","konya emlak piyasası","ankara konut fiyatları","zentral medya","emlak duyuruları","gayrimenkul trendleri"],
  alternates: {
    canonical: "/medya",
  },
  openGraph: {
    title: "Medya | Zentral Gayrimenkul",
    description: "Gayrimenkul sektörü, Konya ve Ankara emlak piyasası gelişmeleri, haberler ve Zentral Gayrimenkul duyuruları.",
    url: `https://www.zentralgayrimenkul.com/medya`,
  },
};
