// setup.js
const fs = require("fs");
const path = require("path");

console.log("Kurulum başlatılıyor...");

const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

ensureDir(path.join(__dirname, "components"));
ensureDir(path.join(__dirname, "app"));

// --- 1. APP/PAGE.TSX ---
const pageCode = `import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import AboutSection from '@/components/AboutSection';
import LatestProjects from '@/components/LatestProjects';
import CtaSection from '@/components/CtaSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <LatestProjects />
      <CtaSection />
    </main>
  );
}
`;

// --- 2. COMPONENTS/CTASECTION.TSX ---
const ctaCode = `"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall, TrendingUp, ShieldCheck } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#051328] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl lg:rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="lg:w-2/3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              <TrendingUp size={14} />
              <span>Yatırımınızı Şansa Bırakmayın</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Reel Enflasyona Karşı <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-200">
                En Güvenli Liman: Toprak
              </span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              Piyasadaki dalgalanmalardan etkilenmeyen, düzenli kira getirisi sağlayan ticari mülkler ve şehrin gelişim aksındaki arsa fırsatları için "Kapalı Portföy" dosyamızı inceleyin. Ücretsiz bölgesel analiz raporu için uzmanlarımızla hemen görüşün.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-300 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#D4AF37]" />
                <span>Hukuki Güvence</span>
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <TrendingUp size={18} className="text-[#D4AF37]" />
                <span>Yüksek Getiri Potansiyeli</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 flex flex-col w-full sm:w-auto gap-4">
            <Link href="/iletisim" className="group relative flex items-center justify-center gap-3 bg-[#D4AF37] text-[#051328] px-8 py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1 w-full">
              <PhoneCall size={20} className="group-hover:animate-bounce" />
              <span>Ücretsiz Danışmanlık</span>
            </Link>

            <Link href="/yatirim" className="group flex items-center justify-center gap-3 border border-white/20 bg-transparent text-white px-8 py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300 w-full">
              <span>Yatırım Modelleri</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
`;

// --- 3. COMPONENTS/HEROSECTION.TSX ---
const heroCode = `"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Building2, ShieldCheck, Globe } from "lucide-react";

const slides = [
  {
    id: 1,
    category: "YÖNETİM ANLAYIŞIMIZ",
    icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37]" />,
    description: "Mülkünüzün değerini koruyan, şeffaf ve profesyonel yönetim süreçleri.",
    tags: [
      "Doğru Yönetim",
      "Hızlı Geri Dönüş",
      "Müşteri Memnuniyeti",
      "Arsa & Kira Yönetimi",
      "Şeffaf Raporlama",
      "Hukuki Güvence"
    ]
  },
  {
    id: 2,
    category: "HİZMETLERİMİZ",
    icon: <Building2 className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37]" />,
    description: "Alımdan satışa, kiralamadan değerlemeye uçtan uca gayrimenkul çözümleri.",
    tags: [
      "Alım, Satım & Kiralama",
      "Gayrimenkul Değerleme",
      "Portföy Yönetimi",
      "Pazarlama Stratejileri",
      "Pazarlık Yönetimi",
      "Yasal Süreç Takibi"
    ]
  },
  {
    id: 3,
    category: "GLOBAL VİZYON",
    icon: <Globe className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37]" />,
    description: "Konya'dan dünyaya açılan yatırım fırsatları ve güvenilir danışmanlık.",
    tags: [
      "Yabancı Yatırımcı",
      "Vatandaşlık İşlemleri",
      "Döviz Bazlı Getiri",
      "Gerçek Değer Analizi",
      "Stratejik Konumlar",
      "Uzman Rehberlik"
    ]
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0,
  })
};

export default function HeroSection() {
  const [[page, direction], setPage] = useState([0, 1]);
  const currentSlide = ((page % slides.length) + slides.length) % slides.length;

  const [dragStartX, setDragStartX] = useState(null);
  const [dragEndX, setDragEndX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 50;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const goToSlide = (index) => {
    const slideDirection = index > currentSlide ? 1 : -1;
    if (index !== currentSlide) {
      setPage([index, slideDirection]);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [page]);

  const handleDragStart = (clientX) => {
    setDragEndX(null);
    setDragStartX(clientX);
    setIsDragging(true);
  };

  const handleDragMove = (clientX) => {
    if (isDragging) {
      setDragEndX(clientX);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (!dragStartX || !dragEndX) return;

    const distance = dragStartX - dragEndX;
    if (distance > minSwipeDistance) paginate(1);
    else if (distance < -minSwipeDistance) paginate(-1);

    setDragStartX(null);
    setDragEndX(null);
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center overflow-hidden bg-[#051328]">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#051328]/80 via-[#051328]/70 to-[#051328] lg:bg-gradient-to-r lg:from-[#051328] lg:via-[#051328]/90 lg:to-transparent z-10"></div>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50 lg:opacity-60">
          <source src="/Yeni klasör (2)/video/Zentral Gayrimenkul.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-20 h-full flex flex-col justify-center lg:flex-row lg:items-center gap-10 lg:gap-24 pt-28 pb-12 lg:py-0">
        <div className="lg:w-1/2 text-white animate-in slide-in-from-left duration-1000 text-center lg:text-left pointer-events-none">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 lg:mb-6">
            <div className="h-[2px] w-8 lg:w-12 bg-[#D4AF37]"></div>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-xs lg:text-sm uppercase">PRESTİJİN ADRESİ</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-6 lg:mb-8 drop-shadow-xl">
            Emlakta <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Güvenin Merkezi</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 lg:mb-10 font-light">
            Yatırımlarınızı şansa bırakmayın. 7 yılı aşkın tecrübe, kurumsal yapı ve şeffaf yönetim anlayışıyla geleceğinizi birlikte inşa ediyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto pointer-events-auto">
            <Link href="/iletisim" className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-[#D4AF37] text-[#051328] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 rounded-sm shadow-lg shadow-yellow-900/20">
              Bize Ulaşın <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </Link>
            <Link href="/yatirim" className="w-full sm:w-auto group flex items-center justify-center gap-3 border border-white/20 bg-white/5 backdrop-blur-sm text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#051328] transition-all duration-300 rounded-sm">
              Fırsatları İncele
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 w-full mt-4 lg:mt-0" onTouchStart={(e) => handleDragStart(e.targetTouches[0].clientX)} onTouchMove={(e) => handleDragMove(e.targetTouches[0].clientX)} onTouchEnd={handleDragEnd} onMouseDown={(e) => handleDragStart(e.clientX)} onMouseMove={(e) => handleDragMove(e.clientX)} onMouseUp={handleDragEnd} onMouseLeave={() => { if (isDragging) handleDragEnd(); }}>
          <div className={\`relative min-h-[320px] lg:h-[420px] w-full overflow-hidden lg:overflow-visible \${isDragging ? "cursor-grabbing" : "cursor-grab"}\`}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div key={page} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }} className="absolute inset-0">
                <div className="bg-slate-900/60 lg:bg-white/5 backdrop-blur-xl border border-white/10 p-6 lg:p-10 rounded-xl lg:rounded-sm h-full flex flex-col justify-center relative shadow-2xl select-none">
                  <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6 border-b border-white/10 pb-4">
                    <div className="p-2 lg:p-3 bg-[#D4AF37]/10 rounded-lg lg:rounded-sm text-[#D4AF37]">
                      {slides[currentSlide].icon}
                    </div>
                    <h3 className="text-xl lg:text-2xl font-serif text-white tracking-wide">{slides[currentSlide].category}</h3>
                  </div>
                  <p className="text-gray-300 text-sm lg:text-lg mb-6 leading-relaxed">{slides[currentSlide].description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-3 pointer-events-none">
                    {slides[currentSlide].tags.map((tag, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs lg:text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full flex-shrink-0"></div><span className="truncate">{tag}</span>
                      </div>
                    ))}
                  </div>
                  <div key={\`progress-\${page}\`} className="absolute bottom-0 left-0 h-1 bg-[#D4AF37] w-full origin-left animate-[progress_6s_linear_infinite]"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-2 lg:gap-3 mt-6 justify-center lg:justify-start">
            {slides.map((_, index) => (
              <button key={index} onClick={() => goToSlide(index)} className={\`h-1.5 rounded-full transition-all duration-300 \${currentSlide === index ? "w-8 lg:w-12 bg-[#D4AF37]" : "w-2 lg:w-4 bg-gray-600 hover:bg-gray-400"}\`} aria-label={\`Slide \${index + 1}\`} />
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{\`
        @keyframes progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      \`}</style>
    </section>
  );
}
`;

// --- 4. COMPONENTS/LATESTPROJECTS.TSX (SAHİBİNDEN LİNKİ DÜZELTİLDİ) ---
const latestProjectsCode = `import Image from 'next/image';
import { MapPin, ArrowUpRight, ExternalLink, Building2, Factory, Gem, Sparkles } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: "Sanayi & Lojistik Yatırımları",
    subtitle: "Yüksek Kira Getirili Fabrika & Depo Arsaları",
    location: "Konya OSB & Gelişim Aksları",
    count: "18+ Fırsat Dosyası",
    icon: <Factory size={28} />,
    image: "https://images.unsplash.com/photo-1565793979206-10951493332d?q=80&w=1000"
  },
  {
    id: 2,
    title: "Ultra Lüks Yaşam Alanları",
    subtitle: "Meram & Selçuklu'da Prestijli Villalar",
    location: "Meram, Yaka & Selçuklu",
    count: "25+ Özel Portföy",
    icon: <Gem size={28} />,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000"
  },
  {
    id: 3,
    title: "Ticari Merkez & Plazalar",
    subtitle: "Şehrin Kalbinde Kurumsal Ofisler",
    location: "Konya Finans Merkezi",
    count: "12+ Ticari Ünite",
    icon: <Building2 size={28} />,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000"
  }
];

export default function LatestProjects() {
  // SAHİBİNDEN MAĞAZA LİNKİNİZ BURADA GÜNCELLENDİ
  const SAHIBINDEN_LINK = "https://zentralgayrimenkul.sahibinden.com/";

  return (
    <section className="py-28 bg-[#0B0F19] text-white relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-extrabold text-slate-800/20 pointer-events-none select-none whitespace-nowrap z-0">
        PREMIUM PORTFOLIO
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-600/30 rounded-full blur-[180px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/40 rounded-full blur-[180px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-500"></span>
              </div>
              <span className="text-yellow-500 font-bold tracking-[0.3em] text-sm uppercase flex items-center gap-2">
                <Sparkles size={16} /> CANLI VİTRİN
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Sadece En İyiler. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                Fırsatları Keşfedin.
              </span>
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl">
              Konya'nın en prestijli ve yüksek getiri potansiyeline sahip gayrimenkulleri, uzman ekibimiz tarafından sizin için seçildi. Aşağıdaki kategorilere tıklayarak güncel mağazamıza ulaşabilirsiniz.
            </p>
          </div>

          <div className="hidden lg:block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <a
              href={SAHIBINDEN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-950 px-10 py-6 rounded-lg font-extrabold text-xl uppercase tracking-wider hover:scale-[1.02] transition-transform"
            >
              <span>TÜM İLANLARI GÖR</span>
              <ExternalLink className="group-hover:rotate-45 transition-transform duration-300 bg-white/20 p-1 rounded-full w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={SAHIBINDEN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[550px] rounded-[2rem] overflow-hidden cursor-pointer perspective-1000"
            >
              <div className="absolute -inset-[2px] bg-gradient-to-r from-yellow-500 via-white to-yellow-500 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 z-0"></div>

              <div className="relative h-full w-full bg-slate-900 rounded-[2rem] overflow-hidden z-10 border border-slate-800 group-hover:border-transparent transition-colors">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 group-hover:rotate-1"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent opacity-90"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"></div>

                <div className="absolute top-0 left-0 w-full h-full p-8 flex flex-col justify-between">

                  <div className="flex justify-between items-start transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className="bg-yellow-500/20 backdrop-blur-md text-yellow-400 p-4 rounded-2xl shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                      {cat.icon}
                    </div>
                    <div className="bg-slate-800/80 backdrop-blur-sm text-yellow-400 font-bold text-sm px-4 py-2 rounded-full border border-yellow-500/30 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                      </span>
                      {cat.count}
                    </div>
                  </div>

                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                     <h3 className="text-3xl font-extrabold mb-2 text-white group-hover:text-yellow-400 transition-colors">{cat.title}</h3>
                     <p className="text-slate-300 text-lg mb-6 opacity-90">{cat.subtitle}</p>

                     <div className="flex items-center justify-between border-t border-slate-700/50 pt-6 group-hover:border-yellow-500/30">
                        <div className="flex items-center text-slate-400 text-sm font-medium">
                           <MapPin size={18} className="mr-2 text-yellow-500" />
                           {cat.location}
                        </div>

                        <div className="flex items-center gap-2 text-yellow-400 font-bold uppercase tracking-wider opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-200">
                           İncele <ArrowUpRight size={20} className="bg-yellow-400/20 rounded-full p-1" />
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 md:hidden relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg blur opacity-75 animate-pulse group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <a
              href={SAHIBINDEN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex justify-center items-center gap-3 bg-slate-900 text-yellow-400 px-6 py-5 w-full rounded-lg font-extrabold shadow-2xl uppercase tracking-widest"
            >
               TÜM İLANLARI GÖR
               <ExternalLink size={24} className="animate-bounce" />
            </a>
        </div>
      </div>
    </section>
  );
}
`;

// Dosyaları yazıyoruz
fs.writeFileSync(path.join(__dirname, "app", "page.tsx"), pageCode);
fs.writeFileSync(
  path.join(__dirname, "components", "HeroSection.tsx"),
  heroCode,
);
fs.writeFileSync(path.join(__dirname, "components", "CtaSection.tsx"), ctaCode);
fs.writeFileSync(
  path.join(__dirname, "components", "LatestProjects.tsx"),
  latestProjectsCode,
);

console.log(
  "✅ Kurulum tamamlandı! Sahidinden.com linki düzeltildi, HeroSection güncellendi, CtaSection eklendi ve Anasayfa (page.tsx) zenginleştirildi.",
);
