// app/medya/page.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, BookOpen, TrendingUp, Calendar, MapPin, Building2 } from "lucide-react";

export default function MedyaPage() {
  return (
    <main className="bg-[#051328] min-h-screen text-white font-sans selection:bg-[#D4AF37] selection:text-[#051328]">
      
      {/* 1. HERO: CINEMATIC EDITORIAL (Dergi Kapağı Havası) */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Arka Plan Resmi (Şükran Dönüşüm / Konya Silüeti Temsili) */}
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
            alt="Konya 2025 Vizyonu" 
            fill 
            className="object-cover opacity-40 hover:scale-105 transition-transform duration-[3s] ease-out"
            priority
          />
          {/* Gradient Geçiş */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#051328] via-[#051328]/40 to-transparent"></div>
        </div>

        {/* Hero İçerik */}
        <div className="relative z-10 text-center max-w-5xl px-6">
          <div className="inline-block border border-[#D4AF37]/50 bg-[#051328]/50 backdrop-blur-md px-6 py-2 rounded-full mb-8">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              SON DAKİKA • KONYA 2025 RAPORU
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-8">
            Konya Konutta <br/> 
            <span className="text-[#D4AF37] italic">3 Yılın Rekorunu Kırdı.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            2025'in ilk yarısında 15.825 konut satışı ile tüm zamanların zirvesi görüldü. Selçuklu ve Meram'da fiyatlar %50 artış trendinde. İşte ilçe ilçe yatırım haritası.
          </p>
          
          <Link href="/haber/konya-2025-konut-satis-rekoru" className="group relative inline-block px-10 py-5 bg-white text-[#051328] font-bold tracking-widest uppercase overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Detaylı Raporu Oku</span>
            <div className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
          </Link>
        </div>
      </section>

      {/* 2. TRENDING STRIP (YENİLİKÇİ AKIŞ - GERÇEK VERİLER) */}
      <div className="border-y border-white/10 bg-[#051328]/50 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-[#D4AF37] rounded-full animate-pulse"></div>
              <span className="font-serif text-xl italic text-white">Piyasa Ekranı</span>
           </div>
           {/* Kayan Yazı Efekti İçin Basit Liste */}
           <div className="flex gap-8 text-sm text-gray-400 font-medium overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              <Link href="/haber/sukran-kentsel-donusum" className="hover:text-[#D4AF37] cursor-pointer whitespace-nowrap transition-colors flex items-center gap-2">
                 <Building2 size={14}/> Şükran Dönüşüm Projesi Teslimleri Başlıyor
              </Link>
              <span className="text-[#D4AF37]">•</span>
              <Link href="/haber/konya-osb-yatirim" className="hover:text-[#D4AF37] cursor-pointer whitespace-nowrap transition-colors flex items-center gap-2">
                 <TrendingUp size={14}/> Konya OSB Arsalarında %200 Değer Artışı
              </Link>
              <span className="text-[#D4AF37]">•</span>
              <Link href="/haber/kadinhani-projesi" className="hover:text-[#D4AF37] cursor-pointer whitespace-nowrap transition-colors flex items-center gap-2">
                 <MapPin size={14}/> Kadınhanı Dönüşüm 2025 Ortasında Bitiyor
              </Link>
           </div>
        </div>
      </div>

      {/* 3. MASONRY GRID (HABERLER - DOLU İÇERİK) */}
      <section className="py-24 px-6 bg-white text-[#051328]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* KART 1: SANAYİ YATIRIMI (BÜYÜK KART) */}
            <Link href="https://www.konyaekspres.com/yazarlar/nimet-donmez/konya-organize-sanayileriyle-uretiyor-buyuyor/20029" className="lg:col-span-2 group cursor-pointer relative overflow-hidden h-[500px] rounded-sm block">
              <Image 
                src="https://images.unsplash.com/photo-1590644365607-1c5a38fc43e0?q=80" 
                alt="Konya Sanayi" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051328] via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                 <div className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
                    <TrendingUp size={16} /> YATIRIM FIRSATI
                 </div>
                 <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-tight">
                   Konya OSB Genişliyor: Sanayi İmarlı Arsalarda "Altın Çağ"
                 </h3>
                 <p className="text-gray-300 line-clamp-2 mb-6 max-w-xl">
                   Türkiye'nin üretim üssü Konya'da, yeni açılan 5. ve 6. organize sanayi bölgeleri yatırımcıların radarına girdi. 2025 projeksiyonlarına göre sanayi parselleri, konuta göre %40 daha fazla prim vadediyor.
                 </p>
                 <span className="text-white underline decoration-[#D4AF37] underline-offset-4 font-bold text-sm uppercase group-hover:text-[#D4AF37] transition-colors">Analizi Oku</span>
              </div>
            </Link>

            {/* KART 2: KENTSEL DÖNÜŞÜM (ŞÜKRAN MAHALLESİ) */}
            <Link href="/haber/sukran-mahallesi-teslim" className="group cursor-pointer flex flex-col h-[500px] block">
               <div className="relative h-3/5 overflow-hidden rounded-sm mb-6">
                 <Image 
                   src="https://images.unsplash.com/photo-1449824913929-49aa7649cc3c?q=80" 
                   alt="Şükran Kentsel Dönüşüm" 
                   fill 
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute top-4 right-4 bg-[#051328] text-white px-3 py-1 text-xs font-bold">MERAM</div>
               </div>
               <div className="flex-1 flex flex-col justify-center">
                 <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-[#D4AF37] transition-colors">
                   Şükran Mahallesi Dönüşümü Tamamlanıyor: 2025 Başında Teslim
                 </h3>
                 <p className="text-gray-600 text-sm leading-relaxed mb-4">
                   Meram'ın tarihi dokusunu koruyarak yapılan devasa dönüşüm projesinde 1. etap sona erdi. Bölgedeki ticari üniteler ve ofisler şimdiden %80 doluluk oranına ulaştı.
                 </p>
                 <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-xs font-bold text-gray-400">
                    <span>12 KASIM 2024</span>
                    <ArrowUpRight size={16} />
                 </div>
               </div>
            </Link>

            {/* KART 3: MEVZUAT / BİLGİ */}
            <Link href="/haber/2025-konut-fiyat-tahmini" className="bg-[#F8F9FA] p-10 flex flex-col justify-center rounded-sm hover:bg-[#051328] hover:text-white transition-colors duration-500 group border border-gray-100 cursor-pointer block">
               <BookOpen size={40} className="text-[#D4AF37] mb-6" />
               <h3 className="text-2xl font-serif font-bold mb-4">
                 2025 Emlak Beklentileri: Fiyatlar %50 Artabilir
               </h3>
               <p className="text-gray-500 group-hover:text-gray-300 mb-8 leading-relaxed">
                 İnşaat maliyet endeksindeki %23'lük artış ve beklenen faiz indirimleriyle birlikte, uzmanlar 2025'in ikinci yarısında konut fiyatlarında sert bir yükseliş öngörüyor. Şimdi alım zamanı mı?
               </p>
               <span className="flex items-center gap-2 font-bold text-xs tracking-widest uppercase group-hover:text-[#D4AF37]">
                 RAPORU İNDİR <ArrowUpRight size={16} />
               </span>
            </Link>

            {/* KART 4: VİDEO RÖPORTAJ */}
            <div className="lg:col-span-2 bg-[#051328] text-white p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 rounded-sm relative overflow-hidden">
               {/* Arka plan dekor */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
               
               <div className="md:w-1/2 relative z-10">
                  <div className="flex items-center gap-2 text-[#D4AF37] mb-4">
                     <Play size={20} fill="currentColor" /> <span className="text-xs font-bold tracking-widest uppercase">ÖZEL RÖPORTAJ</span>
                  </div>
                  <h3 className="text-3xl font-serif mb-6 leading-tight">
                    "Konya'da Arsa Arzı Bitiyor Mu?"
                  </h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Yönetim Kurulu Başkanımız, Bloomberg HT yayınında Konya'nın genişleme akslarını ve yeni imara açılacak "Gelişim Vadisi" bölgelerini harita üzerinde anlattı.
                  </p>
                  <button className="border border-white/30 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white px-8 py-3 text-sm font-bold uppercase tracking-widest transition-colors">
                    YAYINI İZLE
                  </button>
               </div>
               
               <div className="md:w-1/2 w-full relative aspect-video bg-black rounded-lg overflow-hidden border border-white/10 group cursor-pointer">
                  <Image 
                    src="https://images.unsplash.com/photo-1559523161-0fc0d8b3c17c?q=80" 
                    alt="Video Röportaj" 
                    fill 
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/40 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all">
                        <Play size={24} fill="currentColor" className="ml-1" />
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER (LÜKS DAVETİYE KONSEPTİ) */}
      <section className="py-24 bg-[#051328] relative overflow-hidden border-t border-white/10">
         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37] rounded-full blur-[250px] opacity-10 pointer-events-none"></div>
         
         <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
               "Kapalı Portföy" Listesi
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
               Halka arz edilmeyen, sadece özel müşterilerimizle paylaştığımız fırsat dosyaları (kelepir arsalar, lansman öncesi daireler) için listeye katılın.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center max-w-lg mx-auto gap-0">
               <input 
                 type="email" 
                 placeholder="E-posta adresiniz" 
                 className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-gray-600 rounded-t-lg sm:rounded-l-lg sm:rounded-r-none"
               />
               <button className="bg-[#D4AF37] text-[#051328] px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-b-lg sm:rounded-r-lg sm:rounded-l-none">
                 DAVET İSTE
               </button>
            </div>
            <p className="text-xs text-gray-500 mt-6">*Spam gönderilmez. Sadece ayda 1 kez, en değerli fırsatlar.</p>
         </div>
      </section>

    </main>
  );
}