const fs = require("fs");
const path = require("path");

console.log(
  "Son Revizeler (Footer Hataları, Link Optimizasyonu ve Ekstra Bileşenler) Uygulanıyor...",
);

// =====================================================================
// 1. FOOTER.TSX (404 Linkleri ve Yıl Düzeltildi)
// =====================================================================
const footerCode = `"use client";
import Link from "next/link";
import { Phone, Smartphone, Mail, MapPin, Instagram, Twitter, Facebook, Linkedin, ChevronRight, ShieldCheck, Download } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();

  const quickLinks = [
    { name: lang === 'tr' ? "Anasayfa" : "Home", href: "/" },
    { name: lang === 'tr' ? "Kurumsal" : "Corporate", href: "/kurumsal" },
    { name: lang === 'tr' ? "Yatırım" : "Investment", href: "/yatirim" },
    { name: lang === 'tr' ? "Medya" : "Media", href: "/medya" },
    { name: lang === 'tr' ? "İletişim" : "Contact", href: "/iletisim" },
  ];

  const activityLinks = [
    { name: lang === 'tr' ? "Site Yönetimi" : "Site Management", href: "/yatirim" },
    { name: lang === 'tr' ? "Gayrimenkul Satış İşlemleri" : "Real Estate Sales", href: "/yatirim" },
    { name: lang === 'tr' ? "Gayrimenkul Takibi" : "Real Estate Tracking", href: "/yatirim" },
    { name: lang === 'tr' ? "Villa Satışı" : "Villa Sales", href: "/yatirim" },
    { name: lang === 'tr' ? "Fabrika Satışı" : "Factory Sales", href: "/yatirim" },
    { name: lang === 'tr' ? "Arsa Geliştirme" : "Land Development", href: "/yatirim" },
    { name: lang === 'tr' ? "Kiralama Yönetimi" : "Rental Management", href: "/yatirim" },
    { name: lang === 'tr' ? "Yatırım Danışmanlığı" : "Investment Consultancy", href: "/yatirim" },
  ];

  const mapLinkKonya = "https://www.google.com/maps/place/Kumk%C3%B6pr%C3%BC,+K%C3%BC%C3%A7%C3%BCk+Kumk%C3%B6pr%C3%BC+Cd.+No:176,+42020+Karatay%2FKonya/@37.8509109,32.5291451,17z/data=!3m1!4b1!4m6!3m5!1s0x14d084d608e11d51:0x2253040cf55190e1!8m2!3d37.8509067!4d32.53172!16s%2Fg%2F11c2fn1wp3?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D";
  const mapLinkAnkara = "https://maps.google.com/?q=Ehlibeyt+Mahallesi+Ceyhun+Atuf+Kansu+Caddesi+No:100A/1238+Cankaya+Ankara";
  const yetkiBelgesiPdfYolu = "/YetkiBelgesi.pdf";

  const socialLinks = {
    instagram: "https://www.instagram.com/zentral.gayrimenkul?igsh=N3VpMGVzdGdmNWFq&utm_source=qr",
    x_twitter: "https://twitter.com/zentralgayrimenkul",
    facebook: "https://facebook.com/zentralgayrimenkul",
    linkedin: "https://linkedin.com/company/zentralgayrimenkul"
  };

  return (
    <footer className="bg-[#0b1120] text-gray-300 border-t border-gray-800 font-sans">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">

          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <Link href="/" className="relative block w-48 h-12 mb-4">
                <Image src="/Yeni klasör (2)/test.png" alt="Zentral Gayrimenkul" fill className="object-contain object-left" />
              </Link>
              <p className="text-xs text-gray-400 mb-6 max-w-xs leading-relaxed">
                {lang === 'tr'
                  ? '7 yıllık tecrübe ile değer üreten, Konya ve Ankara merkezli gayrimenkul projeleri.'
                  : 'Real estate projects based in Konya and Ankara, producing value with 7 years of experience.'}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-yellow-600 hover:text-white transition-all shadow-md"><Instagram size={16} /></a>
              <a href={socialLinks.x_twitter} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-yellow-600 hover:text-white transition-all shadow-md"><Twitter size={16} /></a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-yellow-600 hover:text-white transition-all shadow-md"><Facebook size={16} /></a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-yellow-600 hover:text-white transition-all shadow-md"><Linkedin size={16} /></a>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-white font-bold text-sm mb-3 border-l-2 border-yellow-600 pl-2">{lang === 'tr' ? 'Hızlı Erişim' : 'Quick Links'}</h3>
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.name}><Link href={item.href} className="flex items-center hover:text-yellow-500 transition-colors text-xs"><ChevronRight size={12} className="mr-1 text-yellow-600"/>{item.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm mb-3 border-l-2 border-yellow-600 pl-2">{lang === 'tr' ? 'Faaliyetler' : 'Activities'}</h3>
              <ul className="space-y-2">
                {activityLinks.map((item) => (
                  <li key={item.name}><Link href={item.href} className="flex items-center hover:text-yellow-500 transition-colors text-xs"><ChevronRight size={12} className="mr-1 text-yellow-600"/>{item.name}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <h3 className="text-white font-bold text-sm -mb-2 border-l-2 border-yellow-600 pl-2">{lang === 'tr' ? 'İletişim Noktaları' : 'Contact Points'}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="space-y-3 text-[11px]">
                <h4 className="text-yellow-600 font-bold text-xs uppercase tracking-wide">{lang === 'tr' ? 'Konya Ofis' : 'Konya Office'}</h4>
                <a href={mapLinkKonya} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-yellow-500 transition-colors group">
                  <MapPin className="text-gray-500 group-hover:text-yellow-600 shrink-0 mt-0.5" size={14}/>
                  <span className="text-gray-400 group-hover:text-gray-200">Kumköprü Mah. Küçükkumköprü Cad. No:176DC Karatay/Konya</span>
                </a>
                <div className="flex flex-col gap-2 pl-6">
                  <a href="tel:03322338042" className="flex items-center gap-2 hover:text-yellow-500 transition-colors"><Phone size={14} className="text-gray-500" /><span>0332 233 80 42</span></a>
                  <a href="tel:05013338042" className="flex items-center gap-2 hover:text-yellow-500 transition-colors"><Smartphone size={14} className="text-gray-500" /><span>0501 333 80 42</span></a>
                </div>
                <a href="mailto:zentralgayrimenkul@gmail.com" className="flex items-center gap-2 hover:text-yellow-500 transition-colors pl-0.5">
                  <Mail className="text-gray-500 shrink-0" size={14} />
                  <span className="truncate">zentralgayrimenkul@gmail.com</span>
                </a>
              </div>

              <div className="space-y-3 text-[11px] sm:border-l sm:border-gray-800 sm:pl-4">
                <h4 className="text-yellow-600 font-bold text-xs uppercase tracking-wide">{lang === 'tr' ? 'Ankara Ofis' : 'Ankara Office'}</h4>
                <a href={mapLinkAnkara} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-yellow-500 transition-colors group">
                  <MapPin className="text-gray-500 group-hover:text-yellow-600 shrink-0 mt-0.5" size={14}/>
                  <span className="text-gray-400 group-hover:text-gray-200">Ehlibeyt Mah. Ceyhun Atuf Kansu Cad. No:100A/1238 Çankaya/Ankara</span>
                </a>
                <div className="flex flex-col gap-2 pl-6">
                  <a href="tel:05323991663" className="flex items-center gap-2 hover:text-yellow-500 transition-colors"><Smartphone size={14} className="text-gray-500" /><span>0532 399 1663</span></a>
                </div>
                <a href="mailto:Zentralankara@gmail.com" className="flex items-center gap-2 hover:text-yellow-500 transition-colors pl-0.5">
                  <Mail className="text-gray-500 shrink-0" size={14} />
                  <span className="truncate">zentralankara@gmail.com</span>
                </a>
              </div>
            </div>

            <a href={yetkiBelgesiPdfYolu} download="Zentral_Yetki_Belgesi.pdf" className="mt-auto group flex items-center justify-between p-2.5 rounded border border-gray-800 bg-[#0e1525] hover:border-yellow-600/50 hover:bg-[#161f32] transition-all cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-600/10 flex items-center justify-center shrink-0 group-hover:bg-yellow-600 transition-colors"><ShieldCheck size={14} className="text-yellow-600 group-hover:text-white transition-colors"/></div>
                <div><div className="text-[11px] font-bold text-gray-300 group-hover:text-white">Semih Bahadır Kahraman</div></div>
              </div>
              <Download size={12} className="text-gray-600 group-hover:text-yellow-500 transition-colors"/>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar: Kırık Linkler ve Yıl Düzeltildi */}
      <div className="bg-[#050911] py-4 text-center text-[10px] text-gray-600 border-t border-gray-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Zentral Gayrimenkul Yatırım A.Ş.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/gizlilik-politikasi" className="hover:text-gray-400">
              {lang === 'tr' ? 'Gizlilik' : 'Privacy'}
            </Link>
            <Link href="/kullanim-sartlari" className="hover:text-gray-400">
              {lang === 'tr' ? 'Kullanım Şartları' : 'Terms of Use'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
`;

// =====================================================================
// 2. PROJECT DETAIL (Link Optimizasyonu)
// =====================================================================
const projeDetayCode = `"use client";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import { MapPin, Bed, Bath, Move } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { use } from "react";

const projectsData = [
  {
    id: "1",
    title: "Vadi İstanbul Konakları",
    location: "Sarıyer, İstanbul",
    priceTR: "15.000.000 ₺ Başlayan Fiyatlarla",
    priceEN: "Starting from 15.000.000 ₺",
    descTR: "İstanbul'un en prestijli konumunda, orman manzaralı lüks yaşam.",
    descEN: "Luxury living with forest view in the most prestigious location of Istanbul.",
    specs: { beds: 4, baths: 3, area: 240 },
    images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00"]
  }
];

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { lang } = useLanguage();
  const resolvedParams = use(params);
  const project = projectsData.find(p => p.id === resolvedParams.id) || projectsData[0];

  return (
    <main className="bg-white min-h-screen">
      <PageBanner title={project.title.toUpperCase()} image={project.images[0]} />
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">

          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{project.title}</h2>
            <div className="flex items-center text-gray-500 mb-6">
              <MapPin size={18} className="mr-1 text-yellow-600" /> {project.location}
            </div>

            <div className="flex gap-6 border-y border-gray-200 py-6 mb-8">
               <div className="flex items-center gap-2 text-slate-800"><Move className="text-yellow-600"/> <b>{project.specs.area} m²</b></div>
               <div className="flex items-center gap-2 text-slate-800"><Bed className="text-yellow-600"/> <b>{project.specs.beds} {lang === 'tr' ? "Oda" : "Beds"}</b></div>
               <div className="flex items-center gap-2 text-slate-800"><Bath className="text-yellow-600"/> <b>{project.specs.baths} {lang === 'tr' ? "Banyo" : "Baths"}</b></div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">{lang === 'tr' ? "Proje Hakkında" : "About the Project"}</h3>
            <p className="text-gray-600 leading-relaxed mb-8">{lang === 'tr' ? project.descTR : project.descEN}</p>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-slate-900 text-white p-8 rounded-sm sticky top-32">
              <p className="text-gray-400 text-sm uppercase">{lang === 'tr' ? "Fiyat" : "Price"}</p>
              <div className="text-2xl font-bold text-yellow-500 mb-6">{lang === 'tr' ? project.priceTR : project.priceEN}</div>
              {/* <a href> yerine <Link href> yapıldı, sayfa geçişleri hızlandırıldı */}
              <Link href="/iletisim" className="block w-full text-center bg-yellow-600 py-3 font-bold rounded-sm hover:bg-yellow-700 transition-colors">
                {lang === 'tr' ? "BİLGİ AL" : "GET INFORMATION"}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
`;

// =====================================================================
// 3. SEARCH FILTER (Çift Dilli Arama Filtresi)
// =====================================================================
const searchFilterCode = `"use client";
import { useState } from 'react';
import { Search } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function SearchFilter() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'satilik' | 'kiralik'>('satilik');

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-4xl mx-auto -mt-10 relative z-20">
      <div className="flex gap-4 mb-6 border-b pb-2">
        <button
          onClick={() => setActiveTab('satilik')}
          className={\`pb-2 font-semibold transition-colors \${activeTab === 'satilik' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}\`}
        >
          {lang === 'tr' ? 'Satılık' : 'For Sale'}
        </button>
        <button
          onClick={() => setActiveTab('kiralik')}
          className={\`pb-2 font-semibold transition-colors \${activeTab === 'kiralik' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}\`}
        >
          {lang === 'tr' ? 'Kiralık' : 'For Rent'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-500 uppercase">{lang === 'tr' ? 'Konum' : 'Location'}</label>
          <input
            type="text"
            placeholder={lang === 'tr' ? 'İlçe, Mahalle...' : 'District, Neighborhood...'}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-500 uppercase">{lang === 'tr' ? 'Emlak Tipi' : 'Property Type'}</label>
          <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white">
            <option>{lang === 'tr' ? 'Daire' : 'Apartment'}</option>
            <option>{lang === 'tr' ? 'Villa' : 'Villa'}</option>
            <option>{lang === 'tr' ? 'Arsa' : 'Land'}</option>
            <option>{lang === 'tr' ? 'Ofis' : 'Office'}</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-500 uppercase">{lang === 'tr' ? 'Fiyat Aralığı' : 'Price Range'}</label>
          <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white">
            <option>{lang === 'tr' ? 'Tümü' : 'All'}</option>
            <option>0 - 1.000.000 ₺</option>
            <option>1M - 3M ₺</option>
            <option>3M - 5M ₺</option>
            <option>5M ₺ +</option>
          </select>
        </div>

        <div className="flex items-end">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <Search size={20} />
            {lang === 'tr' ? 'İlan Ara' : 'Search'}
          </button>
        </div>
      </div>
    </div>
  );
}
`;

// =====================================================================
// 4. PROPERTY CARD (Çift Dilli İlan Kartı)
// =====================================================================
const propertyCardCode = `import Image from 'next/image';
import Link from 'next/link';
import { Bed, Bath, Move, MapPin } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface PropertyProps {
  id: string;
  title: string;
  price: number;
  location: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'Satılık' | 'Kiralık';
}

export default function PropertyCard({ property }: { property: PropertyProps }) {
  const { lang } = useLanguage();

  const formattedPrice = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <Link href={\`/ilan/\${property.id}\`} className="group block bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-64 w-full overflow-hidden">
        <span className={\`absolute top-3 left-3 px-3 py-1 text-xs font-bold text-white rounded-full z-10 \${property.type === 'Satılık' ? 'bg-blue-600' : 'bg-green-600'}\`}>
          {property.type === 'Satılık' ? (lang === 'tr' ? 'Satılık' : 'For Sale') : (lang === 'tr' ? 'Kiralık' : 'For Rent')}
        </span>
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin size={16} className="mr-1" />
          {property.location}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">{property.title}</h3>
        <div className="text-2xl font-bold text-blue-600 mb-4">{formattedPrice}</div>

        <div className="flex justify-between items-center text-gray-600 border-t pt-4">
          <div className="flex items-center gap-1">
            <Bed size={18} />
            <span className="text-sm font-medium">{property.beds} {lang === 'tr' ? 'Oda' : 'Beds'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={18} />
            <span className="text-sm font-medium">{property.baths} {lang === 'tr' ? 'Banyo' : 'Baths'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Move size={18} />
            <span className="text-sm font-medium">{property.sqft} m²</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
`;

// =====================================================================
// 5. PROPERTY FEATURES (Çift Dilli İlan Özellikleri)
// =====================================================================
const propertyFeaturesCode = `import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface FeatureProps {
  features: string[];
}

export default function PropertyFeatures({ features }: FeatureProps) {
  const { lang } = useLanguage();

  return (
    <div className="bg-gray-50 p-6 rounded-xl mt-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {lang === 'tr' ? 'Emlak Özellikleri' : 'Property Features'}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-700">
            <CheckCircle2 size={18} className="text-blue-600 " />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
`;

// Dosyaları Yazma İşlemi
fs.writeFileSync(path.join(__dirname, "components", "Footer.tsx"), footerCode);
fs.writeFileSync(
  path.join(__dirname, "app", "projeler", "[id]", "page.tsx"),
  projeDetayCode,
);
fs.writeFileSync(
  path.join(__dirname, "components", "SearchFilter.tsx"),
  searchFilterCode,
);
fs.writeFileSync(
  path.join(__dirname, "components", "PropertyCard.tsx"),
  propertyCardCode,
);
fs.writeFileSync(
  path.join(__dirname, "components", "PropertyFeatures.tsx"),
  propertyFeaturesCode,
);

console.log(
  "✅ Tüm Son Revizeler Tamamlandı! Footer 404 hatası giderildi, Link optimizasyonu yapıldı ve ekstra bileşenler (SearchFilter, PropertyCard, vb.) İngilizceye %100 çevrildi.",
);
