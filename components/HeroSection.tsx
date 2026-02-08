// components/HeroSection.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; // Link eklendi

// --- VERİ YAPISI ---

// Sahne 0: Slogan (Açılış)
const sloganData = [
  { tr: "Emlakta", en: "In Real Estate" },
  { tr: "Güvenin", en: "Of Trust" },
  { tr: "Merkezi", en: "Center" },
];

// Sahne 1: Yönetim ve Prensipler
const scene1 = {
  title: { tr: "YÖNETİM ANLAYIŞIMIZ", en: "OUR MANAGEMENT APPROACH" },
  items: [
    { tr: "Doğru Yönetim", en: "Correct Management" },
    { tr: "Hızlı Geri Dönüş", en: "Fast Feedback" },
    { tr: "Müşteri Memnuniyeti", en: "Customer Satisfaction" },
    { tr: "Arsa & Kira Yönetimi", en: "Land & Rent Management" },
    { tr: "Şeffaf Yönetim", en: "Transparent Management" },
    {
      tr: "Kontrol Sizde, Yönetim Bizde",
      en: "Control Is Yours, Management Is Ours",
    },
  ],
};

// Sahne 2: Hizmetler ve Operasyon
const scene2 = {
  title: { tr: "PROFESYONEL HİZMETLER", en: "PROFESSIONAL SERVICES" },
  items: [
    { tr: "Alım, Satım & Kiralama", en: "Buying, Selling & Renting" },
    { tr: "Gayrimenkul Değerleme", en: "Property Valuation" },
    { tr: "Portföy Yönetimi", en: "Portfolio Management" },
    { tr: "Pazarlama ve Tanıtım", en: "Marketing and Promotion" },
    { tr: "Pazarlık ve Teklif Yönetimi", en: "Negotiation Management" },
    { tr: "Yasal Süreç Takibi", en: "Legal Process Tracking" },
  ],
};

// Sahne 3: Felsefe ve Kapanış (CTA)
const scene3 = {
  title: { tr: "SİZİN İÇİN BURADAYIZ", en: "HERE FOR YOU" },
  items: [
    { tr: "Dinleriz & Anlarız", en: "We Listen & Understand" },
    { tr: "Yönlendiririz", en: "We Guide" },
    { tr: "Gerçek Değer", en: "Real Value" },
    { tr: "Güvenli İşlem", en: "Secure Deal" },
    { tr: "BİLGİ ALIN", en: "GET INFORMATION", isCta: true, href: "/iletisim" }, // Link eklendi
    { tr: "BİZE ULAŞIN", en: "CONTACT US", isCta: true, href: "/iletisim" }, // Link eklendi
  ],
};

// --- ANİMASYON AYARLARI ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, filter: "blur(5px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 60, damping: 12 },
  },
  exit: {
    y: 50,
    opacity: 0,
    filter: "blur(10px)",
    transition: { duration: 0.5 },
  },
};

export default function HeroSection() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    // Sahnelerin ekranda kalma süreleri (milisaniye)
    // Son sahne (index 3) süresi 10 saniyeye (10000ms) çıkarıldı.
    const durations = [3500, 6000, 6000, 10000];

    const timer = setTimeout(() => {
      setActiveStage((prev) => (prev + 1) % 4);
    }, durations[activeStage]);

    return () => clearTimeout(timer);
  }, [activeStage]);

  return (
    <div className="relative h-screen w-full flex flex-col justify-center overflow-hidden font-sans bg-slate-900">
      {/* --- ARKAPLAN VİDEOSU --- */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <video
          suppressHydrationWarning={true}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/Yeni klasör (2)/video/Zentral Gayrimenkul.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* --- İÇERİK ALANI --- */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center pt-24 md:pt-32 pb-10">
        <AnimatePresence mode="wait">
          {/* SAHNE 0: SLOGAN */}
          {activeStage === 0 && (
            <motion.div
              key="stage0"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center text-center space-y-6"
            >
              {sloganData.map((line, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight drop-shadow-2xl">
                    {line.tr}
                  </h1>
                  <p className="text-xl md:text-3xl text-[#D4AF37] font-serif italic mt-2">
                    {line.en}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* DİĞER SAHNELER */}
          {activeStage > 0 && (
            <motion.div
              key={`stage${activeStage}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-5xl mx-auto"
            >
              {/* Başlık Bölümü */}
              <motion.div
                variants={itemVariants}
                className="text-center mb-8 md:mb-12 border-b border-white/20 pb-4"
              >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                  {activeStage === 1
                    ? scene1.title.tr
                    : activeStage === 2
                      ? scene2.title.tr
                      : scene3.title.tr}
                </h2>
                <p className="text-[#D4AF37] text-sm md:text-lg tracking-[0.2em] uppercase">
                  {activeStage === 1
                    ? scene1.title.en
                    : activeStage === 2
                      ? scene2.title.en
                      : scene3.title.en}
                </p>
              </motion.div>

              {/* Grid Liste */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8">
                {(activeStage === 1
                  ? scene1.items
                  : activeStage === 2
                    ? scene2.items
                    : scene3.items
                ).map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className={`flex flex-col ${idx % 2 === 0 ? "md:text-right items-center md:items-end" : "md:text-left items-center md:items-start"} text-center`}
                  >
                    {item.isCta ? (
                      // Buton Görünümü (Aktif Link)
                      <Link
                        href={item.href || "/iletisim"}
                        className="mt-4 inline-block bg-[#D4AF37] text-[#051328] px-8 py-4 rounded-sm font-bold text-lg hover:bg-white transition-colors shadow-[0_0_15px_rgba(212,175,55,0.4)] cursor-pointer"
                      >
                        <span className="block">{item.tr}</span>
                        <span className="block text-xs opacity-70 font-normal mt-1">
                          {item.en}
                        </span>
                      </Link>
                    ) : (
                      // Normal Liste Görünümü
                      <>
                        <span className="text-xl md:text-2xl font-bold text-white leading-tight">
                          {item.tr}
                        </span>
                        <span className="text-sm md:text-base text-gray-400 font-light mt-1">
                          {item.en}
                        </span>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
