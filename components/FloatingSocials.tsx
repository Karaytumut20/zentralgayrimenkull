"use client";

import { Instagram, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FloatingSocials() {
  const links = {
    sahibinden: "https://www.sahibinden.com", 
    whatsapp: "https://wa.me/905000000000", 
    instagram: "https://instagram.com/kullaniciadi",
    phone: "tel:+905000000000",
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3 p-2">
      
      {/* 1. SAHİBİNDEN (Gradient Arka Plan + Net 'S' Harfi) */}
      <SocialItem 
        label="MAĞAZA" 
        subLabel="İlanları İncele"
        href={links.sahibinden}
        // Düz renk yerine görseldeki gibi parlak duran özel gradient:
        className="bg-gradient-to-br from-[#FFE544] to-[#FFD000] text-black border-yellow-400"
        isSpecial={true}
      >
        {/* SVG yerine direkt font ile 'S' yaptık, en net ve hatasız çözüm budur */}
        <span className="font-sans font-extrabold text-3xl leading-none select-none drop-shadow-sm">
          S
        </span>
      </SocialItem>

      {/* ARA ÇİZGİ */}
      <div className="w-8 h-[1px] bg-slate-300/50 mr-2"></div>

      {/* 2. WHATSAPP (Whatsapp Yeşili) */}
      <SocialItem 
        label="WHATSAPP" 
        href={links.whatsapp}
        className="bg-[#25D366] text-white"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </SocialItem>

      {/* 3. INSTAGRAM */}
      <SocialItem 
        label="INSTAGRAM" 
        href={links.instagram}
        className="bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 text-white"
      >
        <Instagram size={24} />
      </SocialItem>

      {/* 4. TELEFON */}
      <SocialItem 
        label="BİZİ ARAYIN" 
        href={links.phone}
        className="bg-blue-600 text-white"
      >
        <Phone size={24} />
      </SocialItem>

    </div>
  );
}

// --- ALT BİLEŞEN ---
interface SocialItemProps {
  children: React.ReactNode;
  label: string;
  subLabel?: string;
  href: string;
  className?: string; // className ile renkleri yönetmek daha esnek
  isSpecial?: boolean;
}

function SocialItem({ children, label, subLabel, href, className, isSpecial = false }: SocialItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={href} 
      target="_blank"
      className="relative flex items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* SOLDA AÇILAN TOOLTIP */}
      <div 
        className={`absolute right-[115%] top-1/2 -translate-y-1/2 transition-all duration-300 ease-out pointer-events-none whitespace-nowrap z-0
          ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
        `}
      >
        <div className="bg-slate-900/95 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-l-lg shadow-2xl flex flex-col items-end">
          <span className="font-bold text-xs tracking-widest">{label}</span>
          {subLabel && <span className="text-[10px] text-yellow-500">{subLabel}</span>}
        </div>
      </div>

      {/* İKON KUTUSU */}
      <div 
        className={`
          flex items-center justify-center rounded-l-xl shadow-xl transition-all duration-300 relative overflow-hidden z-10 border-r-0 border border-white/10
          ${isSpecial ? "w-14 h-14" : "w-12 h-12"} 
          ${isHovered ? "w-16" : ""} 
          ${className} 
        `}
      >
        {/* Işık Animasyonu (Sadece özel butonda) */}
        {isSpecial && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
        )}

        <div className={`transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"}`}>
          {children}
        </div>
      </div>
    </Link>
  );
}