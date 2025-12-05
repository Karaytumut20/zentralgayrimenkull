// components/Footer.tsx
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, ChevronRight, ShieldCheck, Download } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  
  const quickLinks = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Kurumsal', href: '/kurumsal' },
    { name: 'Yatırım', href: '/yatirim' },
    { name: 'Medya', href: '/medya' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  const activityLinks = [
    { name: 'Sanayi Arsaları', href: '/yatirim' },
    { name: 'Arsa Geliştirme', href: '/yatirim' },
    { name: 'Yurtdışı Yatırım', href: '/yatirim' },
    { name: 'Yatırım Danışmanlığı', href: '/yatirim' }, 
  ];

  const mapLink = "https://www.google.com/maps/place/Kumk%C3%B6pr%C3%BC,+K%C3%BC%C3%A7%C3%BCk+Kumk%C3%B6pr%C3%BC+Cd.+No:176,+42020+Karatay%2FKonya/@37.8509109,32.5291451,17z/data=!3m1!4b1!4m6!3m5!1s0x14d084d608e11d51:0x2253040cf55190e1!8m2!3d37.8509067!4d32.53172!16s%2Fg%2F11c2fn1wp3?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D";
  const yetkiBelgesiPdfYolu = "/YetkiBelgesi.pdf";

  return (
    <footer className="bg-[#0b1120] text-gray-300 border-t border-gray-800 font-sans">
      {/* Üst Kısım: Padding azaltıldı (py-10) */}
      <div className="container mx-auto px-6 py-10">
        
        {/* Grid Yapısı: 3 Sütuna düşürüldü (Daha yatay görünüm için) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* 1. SOL BLOK: Logo, Kısa Yazı ve Sosyal Medya (3 birim genişlik) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <Link href="/" className="relative block w-48 h-12 mb-4">
                  <Image 
                      src="/Yeni klasör (2)/test.png" 
                      alt="Zentral Gayrimenkul" 
                      fill 
                      className="object-contain object-left" 
                  />
              </Link>
              <p className="text-xs text-gray-400 mb-4 max-w-xs">
                15 yıllık tecrübe ile değer üreten gayrimenkul projeleri.
              </p>
            </div>
            
            {/* Sosyal Medya Butonu */}
            <div>
               <a href="https://www.instagram.com/zentral.gayrimenkul?igsh=N3VpMGVzdGdmNWFq&utm_source=qr" className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-yellow-500 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-yellow-600 transition-all">
                    <Instagram size={16} />
                  </div>
                  <span>Instagram'da Takip Et</span>
               </a>
            </div>
          </div>

          {/* 2. ORTA BLOK: Linkler (Yan yana 2 liste) (5 birim genişlik) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {/* Hızlı Erişim */}
            <div>
              <h3 className="text-white font-bold text-sm mb-3 border-l-2 border-yellow-600 pl-2">Hızlı Erişim</h3>
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="flex items-center hover:text-yellow-500 transition-colors text-xs">
                      <ChevronRight size={12} className="mr-1 text-yellow-600" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Faaliyet Alanları */}
            <div>
              <h3 className="text-white font-bold text-sm mb-3 border-l-2 border-yellow-600 pl-2">Faaliyetler</h3>
              <ul className="space-y-2">
                {activityLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="flex items-center hover:text-yellow-500 transition-colors text-xs">
                      <ChevronRight size={12} className="mr-1 text-yellow-600" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. SAĞ BLOK: İletişim ve Yetki Belgesi (4 birim genişlik) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* İletişim Bilgileri (Kompakt) */}
            <div>
              <h3 className="text-white font-bold text-sm mb-3 border-l-2 border-yellow-600 pl-2">İletişim</h3>
              <div className="space-y-2 text-xs">
                <a href={mapLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-yellow-500 transition-colors">
                  <MapPin className="text-yellow-600 shrink-0" size={14} />
                  <span>Kumköprü Mah. Küçükkumköprü Cad. No:176DC Karatay/Konya</span>
                </a>
                <div className="flex items-center gap-4">
                    <a href="tel:03322338042" className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
                        <Phone className="text-yellow-600 shrink-0" size={14} />
                        <span>0332 233 80 42</span>
                    </a>
                    <a href="tel:05013338042" className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
                        <Phone className="text-yellow-600 shrink-0" size={14} />
                        <span>0501 333 80 42</span>
                    </a>
                </div>
                <a href="mailto:zentralgayrimenkul@gmail.com" className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
                  <Mail className="text-yellow-600 shrink-0" size={14} />
                  <span>zentralgayrimenkul@gmail.com</span>
                </a>
              </div>
            </div>

            {/* --- YETKİ BELGESİ (YATAY & KOMPAKT TASARIM) --- */}
            <a 
              href={yetkiBelgesiPdfYolu} 
              download="Zentral_Yetki_Belgesi.pdf"
              className="mt-auto group flex items-center justify-between p-3 rounded-lg border border-gray-700 bg-[#111827] hover:border-yellow-600 hover:bg-[#161f32] transition-all cursor-pointer shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-600/10 flex items-center justify-center shrink-0 group-hover:bg-yellow-600 transition-colors">
                   <ShieldCheck size={16} className="text-yellow-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-200 group-hover:text-white">Semih Bahadır Kahraman</div>
                  <div className="text-[10px] text-yellow-600 font-mono tracking-wide">Belge No: 4202217</div>
                </div>
              </div>
              <Download size={14} className="text-gray-500 group-hover:text-yellow-500 transition-colors" />
            </a>
            {/* ----------------------------------------------- */}

          </div>
        </div>
      </div>
      
      {/* Copyright Bar (Daha ince) */}
      <div className="bg-[#050911] py-4 text-center text-[10px] text-gray-600 border-t border-gray-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 Zentral Gayrimenkul Yatırım A.Ş.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/gizlilik" className="hover:text-gray-400">Gizlilik</Link>
            <Link href="/kullanim" className="hover:text-gray-400">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}