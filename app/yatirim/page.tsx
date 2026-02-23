import { Metadata } from "next";
"use client";

import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TrendingUp, PieChart, Shield, Globe, ArrowRight, CheckCircle2, Landmark, Building, Briefcase, Coins, Map, AreaChart, X, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function YatirimPage() {
  const { lang } = useLanguage();
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);

  const links = {
    sahibinden: "https://zentralgayrimenkul.sahibinden.com/",
    hepsiemlak: "https://www.hepsiemlak.com/emlak-ofisi/zentral-gayrimenkul-161271",
  };

  return (
    <main className="bg-white text-slate-800">
      <PageBanner
        title={lang === 'tr' ? "YATIRIM & VARLIK YÖNETİMİ" : "INVESTMENT & ASSET MANAGEMENT"}
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80"
      />

      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
             <div className="inline-block px-3 py-1 bg-red-100 text-red-600 font-bold text-xs rounded-full mb-4 animate-pulse">
                {lang === 'tr' ? "EKONOMİK GERÇEKLER" : "ECONOMIC FACTS"}
             </div>
             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
               {lang === 'tr' ? "Paranızın Erimesine" : "Don't Let Your Money"} <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                 {lang === 'tr' ? "Seyirci Kalmayın." : "Melt Away."}
               </span>
             </h2>
             <p className="text-gray-600 text-lg mb-6 leading-relaxed">
               {lang === 'tr'
                 ? "Enflasyonist ortamda nakitte kalmak, kaybetmeyi kabul etmektir. Zentral Gayrimenkul olarak, sadece mülk satmıyoruz; servet koruma ve büyütme stratejileri sunuyoruz. Döviz ve altının durağanlığına inat, toprak yatırımı ve ticari mülklerle reel büyüme vadediyoruz."
                 : "Staying in cash in an inflationary environment means accepting a loss. As Zentral Real Estate, we don't just sell properties; we offer wealth protection and growth strategies. In contrast to the stagnation of foreign exchange and gold, we promise real growth with land investments and commercial properties."}
             </p>

             <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-yellow-600 shadow-sm">
                <p className="font-serif italic text-slate-700">
                  {lang === 'tr' ? "\"Toprak üretilemeyen tek şeydir, bu yüzden ona yatırım yapın.\"" : "\"Buy land, they're not making it anymore.\""}
                </p>
                <p className="text-right text-sm text-yellow-600 font-bold mt-2">- Mark Twain</p>
             </div>
          </div>

          <div className="w-full lg:w-1/2 bg-slate-900 p-8 rounded-2xl text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600 rounded-full blur-[120px] opacity-20"></div>
             <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
               <AreaChart className="text-yellow-500" />
               <span>{lang === 'tr' ? "Son 5 Yıl Getiri Analizi" : "Last 5 Years Return Analysis"}</span>
             </h3>

             <div className="space-y-6">
               <div>
                 <div className="flex justify-between text-sm mb-1 text-gray-400">
                   <span>{lang === 'tr' ? "Gayrimenkul (Arsa/Ticari)" : "Real Estate (Land/Commercial)"}</span>
                   <span className="text-green-400">%850+</span>
                 </div>
                 <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                   <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 w-[95%] shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
                 </div>
               </div>
               <div>
                 <div className="flex justify-between text-sm mb-1 text-gray-400">
                   <span>{lang === 'tr' ? "Altın / Döviz" : "Gold / Foreign Currency"}</span>
                   <span className="text-yellow-400">%420</span>
                 </div>
                 <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                   <div className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 w-[60%]"></div>
                 </div>
               </div>
               <div>
                 <div className="flex justify-between text-sm mb-1 text-gray-400">
                   <span>{lang === 'tr' ? "Mevduat Faizi" : "Deposit Interest"}</span>
                   <span className="text-red-400">%210</span>
                 </div>
                 <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                   <div className="h-full bg-red-500 w-[30%] opacity-70"></div>
                 </div>
               </div>
             </div>
             <p className="text-xs text-gray-500 mt-6">{lang === 'tr' ? "*Veriler Konya ili sanayi ve imarlı arsa ortalamaları baz alınarak temsil edilmiştir." : "*Data is represented based on the averages of industrial and zoned land in Konya province."}</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80')] bg-cover bg-center bg-fixed relative">
        <div className="absolute inset-0 bg-slate-900/90"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{lang === 'tr' ? "Geleceğinizi Bugün İnşa Edin" : "Build Your Future Today"}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-xl leading-relaxed">
            {lang === 'tr' ? "Sınırlı sayıdaki fırsat portföylerimiz ve lansmana özel fiyatlarımız için yatırım danışmanlarımızla iletişime geçin." : "Contact our investment advisors for our limited opportunity portfolios and special launch prices."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/iletisim" className="bg-yellow-600 text-white px-10 py-4 font-bold rounded-lg hover:bg-yellow-500 transition-all shadow-[0_0_20px_rgba(202,138,4,0.5)] transform hover:scale-105">
               {lang === 'tr' ? "ÜCRETSİZ DANIŞMANLIK AL" : "GET FREE CONSULTATION"}
             </Link>

             <button onClick={() => setIsPortfolioModalOpen(true)} className="bg-transparent border-2 border-white text-white px-10 py-4 font-bold rounded-lg hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2">
               {lang === 'tr' ? "GÜNCEL FIRSATLARI GÖR" : "SEE CURRENT OPPORTUNITIES"}
               <ExternalLink size={18} />
             </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{lang === 'tr' ? "Yatırım Modellerimiz" : "Our Investment Models"}</h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto">{lang === 'tr' ? "Risk profilinize ve bütçenize en uygun enstrümanı seçin, uzmanlarımız yönetsin." : "Choose the instrument that best suits your risk profile and budget, let our experts manage it."}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-t-4 border-yellow-600">
              <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-600 transition-colors">
                <Map size={30} className="text-yellow-700 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{lang === 'tr' ? "Arsa Geliştirme" : "Land Development"}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {lang === 'tr' ? "İmara açılacak veya imarı yeni gelmiş ham toprak yatırımı. En yüksek getiri potansiyeli buradadır." : "Investment in raw land that will be zoned or has recently been zoned. The highest return potential is here."}
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> {lang === 'tr' ? "Uzun Vade (3-5 Yıl)" : "Long Term (3-5 Years)"}</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> {lang === 'tr' ? "Yüksek Kâr Marjı" : "High Profit Margin"}</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-t-4 border-blue-600">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Briefcase size={30} className="text-blue-700 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{lang === 'tr' ? "Ticari Mülk" : "Commercial Property"}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {lang === 'tr' ? "Kurumsal kiracılı dükkan, mağaza ve ofis yatırımları. Düzenli kira geliri ve amortisman odaklıdır." : "Shop, store, and office investments with corporate tenants. Focused on regular rental income and depreciation."}
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> {lang === 'tr' ? "Düzenli Nakit Akışı" : "Regular Cash Flow"}</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> {lang === 'tr' ? "Kurumsal Kiracı" : "Corporate Tenant"}</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-t-4 border-emerald-600">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                <Building size={30} className="text-emerald-700 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{lang === 'tr' ? "Kentsel Dönüşüm" : "Urban Renewal"}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {lang === 'tr' ? "Eski yapıların yıkılıp yenilenmesi sürecine ortaklık. Kat karşılığı veya pay alımı ile değer artışı." : "Partnership in the process of demolishing and renewing old buildings. Value increase through flat for land or share purchase."}
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> {lang === 'tr' ? "Orta Vade (1-2 Yıl)" : "Medium Term (1-2 Years)"}</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> {lang === 'tr' ? "Risksiz Yenileme" : "Risk-Free Renovation"}</li>
              </ul>
            </div>

             <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-t-4 border-purple-600">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                <Coins size={30} className="text-purple-700 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{lang === 'tr' ? "Topraktan Giriş" : "Early Stage Entry"}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {lang === 'tr' ? "Konut projelerine temel aşamasında (lansman) girip, proje bitiminde yüksek primle çıkış modeli." : "Entering housing projects at the foundation stage (launch) and exiting with a high premium at the end of the project."}
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> {lang === 'tr' ? "Kısa Vade Al-Sat" : "Short Term Buy-Sell"}</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> {lang === 'tr' ? "Lansman İndirimi" : "Launch Discount"}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{lang === 'tr' ? "Örnek Senaryo: Arsa Yatırımı" : "Example Scenario: Land Investment"}</h3>
              <p className="text-gray-600 mb-6">
                {lang === 'tr' ? "2020 yılında Konya Yazır bölgesinden m²'si 200 TL'den alınan 1000m² arsanın bugünkü piyasa değeri analizi." : "Market value analysis today of a 1000m² land bought for 200 TL per m² from the Konya Yazır region in 2020."}
              </p>
              <div className="space-y-4">
                 <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold text-gray-500">{lang === 'tr' ? "Başlangıç Yatırımı (2020)" : "Initial Investment (2020)"}</span>
                    <span className="font-bold text-slate-900">200.000 ₺</span>
                 </div>
                 <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold text-gray-500">{lang === 'tr' ? "Mevcut Değer (2025)" : "Current Value (2025)"}</span>
                    <span className="font-bold text-slate-900">3.500.000 ₺</span>
                 </div>
                 <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg">
                    <span className="font-bold text-green-700">{lang === 'tr' ? "NET KAZANÇ" : "NET PROFIT"}</span>
                    <span className="font-bold text-green-700 text-xl">{lang === 'tr' ? "%1650 Artış" : "1650% Increase"}</span>
                 </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-2xl opacity-20"></div>
               <div className="relative bg-slate-900 text-white p-8 rounded-2xl text-center transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Landmark size={48} className="mx-auto text-yellow-500 mb-4" />
                  <p className="text-lg font-light opacity-90">{lang === 'tr' ? "Gayrimenkul, siz uyurken bile sizin için çalışmaya devam eden tek yatırımdır." : "Real estate is the only investment that keeps working for you even while you sleep."}</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">{lang === 'tr' ? "Profesyonel Yatırım Yönetimi" : "Professional Investment Management"}</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Globe size={40} />, title: lang === 'tr' ? "Pazar Analizi" : "Market Analysis", desc: lang === 'tr' ? "Veriye dayalı analizlerle şehrin en hızlı değerlenen noktalarını tespit ediyoruz." : "We identify the fastest appreciating spots in the city with data-driven analysis." },
              { icon: <Shield size={40} />, title: lang === 'tr' ? "Güvenli Alım" : "Secure Purchase", desc: lang === 'tr' ? "Hukuki kontrolleri yapılmış sorunsuz mülkleri portföye ekliyoruz." : "We add problem-free properties with legal checks to our portfolio." },
              { icon: <TrendingUp size={40} />, title: lang === 'tr' ? "Değer Katma" : "Adding Value", desc: lang === 'tr' ? "Tarlayı arsaya, arsayı projeye dönüştürerek değer artışı sağlıyoruz." : "We create value increase by transforming fields into land and lands into projects." },
              { icon: <PieChart size={40} />, title: lang === 'tr' ? "Kâr Realizasyonu" : "Profit Realization", desc: lang === 'tr' ? "Doğru zamanda, en yüksek fiyattan satış yaparak kârı realize ediyoruz." : "We realize profit by selling at the highest price at the right time." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl hover:shadow-2xl hover:border-yellow-500 transition-all group relative z-10">
                <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-900 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                {idx !== 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-slate-300 z-0">
                    <ArrowRight size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

     <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2">HOTSPOTS</h4>
              <h2 className="text-3xl md:text-4xl font-bold">{lang === 'tr' ? "Yatırımın Gözbebeği Lokasyonlar" : "The Heart of Investment Locations"}</h2>
            </div>
            <Link href="/iletisim" className="mt-4 md:mt-0 border border-white/20 px-6 py-3 rounded-full hover:bg-yellow-600 hover:border-yellow-600 transition-all">
              {lang === 'tr' ? "Bölge Analiz Raporu İste" : "Request Regional Analysis Report"}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="relative group overflow-hidden rounded-2xl h-80">
                <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000" alt="Sanayi" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-yellow-500 mb-2">{lang === 'tr' ? "Yeni Sanayi Aksı" : "New Industrial Axis"}</h3>
                  <p className="text-gray-300 text-sm">{lang === 'tr' ? "Fabrika ve depo arzının yetersiz olduğu bölgelerde sanayi imarlı arsalar." : "Industrial zoned lands in areas where factory and warehouse supply is insufficient."}</p>
                </div>
             </div>

             <div className="relative group overflow-hidden rounded-2xl h-80">
                <Image src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=1000" alt="Konut" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-yellow-500 mb-2">{lang === 'tr' ? "Üniversite & Hastane Çevresi" : "University & Hospital Surroundings"}</h3>
                  <p className="text-gray-300 text-sm">{lang === 'tr' ? "1+1 ve 2+1 daire talebinin hiç bitmediği, kira garantili lokasyonlar." : "Rental guaranteed locations where the demand for 1+1 and 2+1 apartments never ends."}</p>
                </div>
             </div>

             <div className="relative group overflow-hidden rounded-2xl h-80">
                <Image src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000" alt="Tarla" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-yellow-500 mb-2">{lang === 'tr' ? "Gelişim Vadisi" : "Development Valley"}</h3>
                  <p className="text-gray-300 text-sm">{lang === 'tr' ? "Şehrin genişleme yönünde yer alan, henüz imara açılmamış fırsat tarlaları." : "Opportunity fields located in the direction of the city's expansion, not yet zoned."}</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {isPortfolioModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-[in_0.2s_ease-out_fade-in]">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-all duration-300" onClick={() => setIsPortfolioModalOpen(false)}></div>
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl relative z-10 overflow-hidden transform transition-all animate-[in_0.3s_ease-out_zoom-in_slide-in-from-bottom-4]">
            <div className="bg-slate-900 text-white p-6 flex justify-between items-center">
              <h3 className="font-bold text-xl flex items-center gap-2"><Map size={24} className="text-yellow-500" /> {lang === 'tr' ? "Portföy Seçimi" : "Portfolio Selection"}</h3>
              <button onClick={() => setIsPortfolioModalOpen(false)} className="hover:bg-white/20 rounded-full p-2 transition-colors"><X size={24} /></button>
            </div>
            <div className="p-8">
              <p className="text-center text-gray-500 mb-8">{lang === 'tr' ? "Tüm ilanlarımıza ve güncel fırsatlarımıza aşağıdaki platform mağazalarımızdan ulaşabilirsiniz." : "You can reach all our listings and current opportunities from our platform stores below."}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href={links.sahibinden} target="_blank" rel="noopener noreferrer" className="group relative flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border-2 border-slate-100 hover:border-yellow-400 bg-slate-50 hover:bg-yellow-50 transition-all duration-300">
                  <div className="w-24 h-24 relative bg-white rounded-xl shadow-md p-2 flex items-center justify-center overflow-hidden">
                     <Image src="/Yeni klasör (2)/sahibinden.png" alt="Sahibinden" fill className="object-contain" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-xl text-slate-800 group-hover:text-yellow-700 transition-colors">SAHİBİNDEN</h4>
                    <p className="text-xs text-gray-400 mt-1 font-medium tracking-wider">{lang === 'tr' ? "MAĞAZAMIZI ZİYARET ET" : "VISIT OUR STORE"}</p>
                  </div>
                </a>
                <a href={links.hepsiemlak} target="_blank" rel="noopener noreferrer" className="group relative flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border-2 border-slate-100 hover:border-red-500 bg-slate-50 hover:bg-red-50 transition-all duration-300">
                  <div className="w-24 h-24 relative bg-white rounded-xl shadow-md p-2 flex items-center justify-center overflow-hidden">
                       <Image src="/Yeni klasör (2)/hepsiemlak.png" alt="Hepsiemlak" fill className="object-contain" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-xl text-slate-800 group-hover:text-red-600 transition-colors">HEPSİEMLAK</h4>
                    <p className="text-xs text-gray-400 mt-1 font-medium tracking-wider">{lang === 'tr' ? "PORTFÖYÜMÜZÜ İNCELE" : "REVIEW OUR PORTFOLIO"}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}


export const metadata: Metadata = {
  title: "Yatırım",
  description: "Geleceğinizi güvence altına alacak Ankara ve Konya kârlı gayrimenkul yatırım fırsatları, arsa ve ticari mülk seçenekleri.",
  keywords: ["konya arsa yatırımı","ankara kârlı gayrimenkul","yatırımlık arsa","ticari gayrimenkul ankara","emlak yatırım danışmanlığı","getirisi yüksek yatırımlar","ankara arsa fiyatları"],
  alternates: {
    canonical: "/yatirim",
  },
  openGraph: {
    title: "Yatırım | Zentral Gayrimenkul",
    description: "Geleceğinizi güvence altına alacak Ankara ve Konya kârlı gayrimenkul yatırım fırsatları, arsa ve ticari mülk seçenekleri.",
    url: `https://www.zentralgayrimenkul.com/yatirim`,
  },
};
