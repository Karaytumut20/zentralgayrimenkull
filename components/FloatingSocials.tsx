"use client";

import { Instagram, Phone, X, Smartphone, PhoneCall } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function FloatingSocials() {
  // POP-UP KONTROLÜ İÇİN STATE
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  const links = {
    sahibinden: "https://zentralgayrimenkul.sahibinden.com/", 
    hepsiemlak: "https://www.hepsiemlak.com/emlak-ofisi/zentral-gayrimenkul-161271",
    whatsapp: "https://wa.me/905013338042", 
    instagram: "https://www.instagram.com/zentral.gayrimenkul?igsh=N3VpMGVzdGdmNWFq&utm_source=qr",
  };

  const phones = {
    mobile: "0501 333 80 42",
    office: "0332 233 80 42"
  };

  return (
    <>
      {/* --- ANA YAN MENÜ --- */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3 p-2">
        
        {/* 1. SAHİBİNDEN */}
        <SocialItem 
          label="SAHİBİNDEN" 
          subLabel="Mağazamızı Gez"
          href={links.sahibinden}
          className="bg-gradient-to-br from-[#FFE544] to-[#FFD000] text-black border-yellow-400"
          isSpecial={true}
        >
          <span className="font-sans font-extrabold text-3xl leading-none select-none drop-shadow-sm">S</span>
        </SocialItem>

        {/* 2. HEPSİEMLAK */}
        <SocialItem 
          label="HEPSİEMLAK" 
          subLabel="Portföyümüz"
          href={links.hepsiemlak}
          className="bg-transparent border-0 p-0 overflow-hidden relative" 
          isSpecial={true}
        >
          <div className="relative w-full h-full"> 
              <Image 
                  src="/Yeni klasör (2)/hepsiemlak.png" 
                  alt="Hepsiemlak"
                  fill
                  className="object-cover" 
                  priority
              />
          </div>
        </SocialItem>

        <div className="w-8 h-[1px] bg-slate-300/50 mr-2"></div>

        {/* 3. WHATSAPP */}
        <SocialItem 
          label="WHATSAPP" 
          href={links.whatsapp}
          className="bg-[#25D366] text-white"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </SocialItem>

      {/* 4. INSTAGRAM */}
      <SocialItem 
        label="INSTAGRAM" 
        href={links.instagram}
        className="bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 text-white"
      >
        <Instagram size={24} />
      </SocialItem>

      {/* 5. TELEFON (TIKLAYINCA POP-UP AÇAR) */}
      <SocialItem 
        label="BİZİ ARAYIN" 
        // href boş bıraktık çünkü onClick kullanacağız
        onClick={() => setIsPhoneModalOpen(true)}
        className="bg-blue-600 text-white cursor-pointer"
      >
        <Phone size={24} />
      </SocialItem>
      </div>

      {/* --- TELEFON SEÇİM MODALI --- */}
      {isPhoneModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-all duration-300"
            onClick={() => setIsPhoneModalOpen(false)} 
          ></div>

          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm relative z-10 overflow-hidden animate-[in_0.2s_ease-out_fade-in_zoom-in]">
            
            <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <PhoneCall size={20} className="text-yellow-500" />
                İletişim Hattı Seçin
              </h3>
              <button 
                onClick={() => setIsPhoneModalOpen(false)}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 flex flex-col gap-4">
              
              <a 
                href={`tel:${phones.mobile.replace(/ /g, "")}`}
                className="group flex items-center gap-4 p-4 rounded-xl border-2 border-slate-100 hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                  <Smartphone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold tracking-wider uppercase">Şirket Cep</p>
                  <p className="text-lg font-bold text-slate-800">{phones.mobile}</p>
                </div>
              </a>

              <a 
                href={`tel:${phones.office.replace(/ /g, "")}`}
                className="group flex items-center gap-4 p-4 rounded-xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold tracking-wider uppercase">Ofis Sabit</p>
                  <p className="text-lg font-bold text-slate-800">{phones.office}</p>
                </div>
              </a>

            </div>
            
            <div className="bg-gray-50 p-3 text-center text-xs text-gray-400">
              Aramak istediğiniz numaraya tıklayın.
            </div>

          </div>
        </div>
      )}
    </>
  );
}

// --- GÜNCELLENMİŞ ALT BİLEŞEN ---
interface SocialItemProps {
  children: React.ReactNode;
  label: string;
  subLabel?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  isSpecial?: boolean;
}

function SocialItem({ children, label, subLabel, href, onClick, className, isSpecial = false }: SocialItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  // HATA ÇÖZÜMÜ: Content'i bir bileşen (function) değil, bir JSX değişkeni olarak tanımladık.
  // Artık React bunu yeni bir bileşen olarak algılamayacak, render'ın bir parçası olarak görecek.
  const commonContent = (
    <>
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
          flex items-center justify-center rounded-l-xl shadow-xl transition-all duration-300 relative overflow-hidden z-10 
          ${isSpecial ? "w-14 h-14" : "w-12 h-12"} 
          ${isHovered ? "w-16" : ""} 
          ${className} 
        `}
      >
        {isSpecial && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite] z-20 pointer-events-none"></div>
        )}
        <div className={`transition-transform duration-300 w-full h-full flex items-center justify-center ${isHovered ? "scale-110" : "scale-100"}`}>
          {children}
        </div>
      </div>
    </>
  );

  // Eğer onClick varsa BUTON, yoksa LINK olarak render et
  if (onClick) {
    return (
      <button 
        onClick={onClick}
        className="relative flex items-center group appearance-none focus:outline-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {commonContent}
      </button>
    );
  }

  return (
    <Link 
      href={href || "#"} 
      target="_blank"
      className="relative flex items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {commonContent}
    </Link>
  );
}