// components/HeroSection.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Building2, ShieldCheck, Globe } from "lucide-react";

// --- VERİ YAPISI ---
const slides = [
  {
    id: 1,
    category: "YÖNETİM ANLAYIŞIMIZ",
    icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37]" />,
    description:
      "Mülkünüzün değerini koruyan, şeffaf ve profesyonel yönetim süreçleri.",
    tags: [
      "Doğru Yönetim",
      "Hızlı Geri Dönüş",
      "Müşteri Memnuniyeti",
      "Arsa & Kira Yönetimi",
      "Şeffaf Raporlama",
      "Hukuki Güvence",
    ],
  },
  {
    id: 2,
    category: "HİZMETLERİMİZ",
    icon: <Building2 className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37]" />,
    description:
      "Alımdan satışa, kiralamadan değerlemeye uçtan uca gayrimenkul çözümleri.",
    tags: [
      "Alım, Satım & Kiralama",
      "Gayrimenkul Değerleme",
      "Portföy Yönetimi",
      "Pazarlama Stratejileri",
      "Pazarlık Yönetimi",
      "Yasal Süreç Takibi",
    ],
  },
  {
    id: 3,
    category: "GLOBAL VİZYON",
    icon: <Globe className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37]" />,
    description:
      "Konya'dan dünyaya açılan yatırım fırsatları ve güvenilir danışmanlık.",
    tags: [
      "Yabancı Yatırımcı",
      "Vatandaşlık İşlemleri",
      "Döviz Bazlı Getiri",
      "Gerçek Değer Analizi",
      "Stratejik Konumlar",
      "Uzman Rehberlik",
    ],
  },
];

// --- FRAMER MOTION ANİMASYON VARYANTLARI ---
const slideVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    };
  },
};

export default function HeroSection() {
  const [[page, direction], setPage] = useState([0, 1]);
  const currentSlide = ((page % slides.length) + slides.length) % slides.length;

  // --- SÜRÜKLE / KAYDIR (SWIPE & DRAG) STATE'LERİ ---
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragEndX, setDragEndX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 50;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const goToSlide = (index: number) => {
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

  // --- ORTAK SÜRÜKLEME MANTIĞI ---
  const handleDragStart = (clientX: number) => {
    setDragEndX(null);
    setDragStartX(clientX);
    setIsDragging(true);
  };

  const handleDragMove = (clientX: number) => {
    if (isDragging) {
      setDragEndX(clientX);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (!dragStartX || !dragEndX) return;

    const distance = dragStartX - dragEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      paginate(1);
    } else if (isRightSwipe) {
      paginate(-1);
    }

    // Değerleri sıfırla
    setDragStartX(null);
    setDragEndX(null);
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center overflow-hidden bg-[#051328]">
      {/* 1. ARKAPLAN VIDEO & OVERLAY */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#051328]/80 via-[#051328]/70 to-[#051328] lg:bg-gradient-to-r lg:from-[#051328] lg:via-[#051328]/90 lg:to-transparent z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50 lg:opacity-60"
        >
          <source
            src="/Yeni klasör (2)/video/Zentral Gayrimenkul.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* 2. İÇERİK ALANI */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20 h-full flex flex-col justify-center lg:flex-row lg:items-center gap-10 lg:gap-24 pt-28 pb-12 lg:py-0">
        {/* SOL TARAF: SABİT BAŞLIK */}
        <div className="lg:w-1/2 text-white animate-in slide-in-from-left duration-1000 text-center lg:text-left pointer-events-none">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 lg:mb-6">
            <div className="h-[2px] w-8 lg:w-12 bg-[#D4AF37]"></div>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-xs lg:text-sm uppercase">
              PRESTİJİN ADRESİ
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-6 lg:mb-8 drop-shadow-xl">
            Emlakta <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Güvenin Merkezi
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 lg:mb-10 font-light">
            Yatırımlarınızı şansa bırakmayın. 7 yılı aşkın tecrübe, kurumsal
            yapı ve şeffaf yönetim anlayışıyla geleceğinizi birlikte inşa
            ediyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto pointer-events-auto">
            <Link
              href="/iletisim"
              className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-[#D4AF37] text-[#051328] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 rounded-sm shadow-lg shadow-yellow-900/20"
            >
              Bize Ulaşın
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/yatirim"
              className="w-full sm:w-auto group flex items-center justify-center gap-3 border border-white/20 bg-white/5 backdrop-blur-sm text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#051328] transition-all duration-300 rounded-sm"
            >
              Fırsatları İncele
            </Link>
          </div>
        </div>

        {/* SAĞ TARAF: DEĞİŞEN BİLGİ KARTI */}
        <div
          className="lg:w-1/2 w-full mt-4 lg:mt-0"
          // --- MOBİL DOKUNMATİK (TOUCH) EVENTLERİ ---
          onTouchStart={(e) => handleDragStart(e.targetTouches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.targetTouches[0].clientX)}
          onTouchEnd={handleDragEnd}
          // --- MASAÜSTÜ FARE (MOUSE) EVENTLERİ ---
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => {
            if (isDragging) handleDragEnd(); // Fare basılıyken elementten çıkılırsa işlemi tamamla
          }}
        >
          {/* isDragging state'ine göre imleci güncelliyoruz */}
          <div
            className={`relative min-h-[320px] lg:h-[420px] w-full overflow-hidden lg:overflow-visible ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                {/* Glassmorphism Kart */}
                <div className="bg-slate-900/60 lg:bg-white/5 backdrop-blur-xl border border-white/10 p-6 lg:p-10 rounded-xl lg:rounded-sm h-full flex flex-col justify-center relative shadow-2xl select-none">
                  {/* Kategori Başlığı */}
                  <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6 border-b border-white/10 pb-4">
                    <div className="p-2 lg:p-3 bg-[#D4AF37]/10 rounded-lg lg:rounded-sm text-[#D4AF37]">
                      {slides[currentSlide].icon}
                    </div>
                    <h3 className="text-xl lg:text-2xl font-serif text-white tracking-wide">
                      {slides[currentSlide].category}
                    </h3>
                  </div>

                  {/* Açıklama */}
                  <p className="text-gray-300 text-sm lg:text-lg mb-6 leading-relaxed">
                    {slides[currentSlide].description}
                  </p>

                  {/* Etiketler (Tags) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-3 pointer-events-none">
                    {slides[currentSlide].tags.map((tag, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs lg:text-sm text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full flex-shrink-0"></div>
                        <span className="truncate">{tag}</span>
                      </div>
                    ))}
                  </div>

                  {/* İlerleme Çubuğu */}
                  <div
                    key={`progress-${page}`}
                    className="absolute bottom-0 left-0 h-1 bg-[#D4AF37] w-full origin-left animate-[progress_6s_linear_infinite]"
                  ></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slayt Kontrol Noktaları */}
          <div className="flex gap-2 lg:gap-3 mt-6 justify-center lg:justify-start">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 lg:w-12 bg-[#D4AF37]"
                    : "w-2 lg:w-4 bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes progress {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}
