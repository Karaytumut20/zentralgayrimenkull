const fs = require("fs");
const path = require("path");

console.log(
  "Ekstra Bileşenler (Arama, İlan Kartı, Özellikler) Çift Dilli Hale Getiriliyor...",
);

const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
};

ensureDir(path.join(__dirname, "components"));

// =====================================================================
// 1. SEARCH FILTER (Arama Filtresi) - TAM KOD
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
      {/* Tab Seçimi */}
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

      {/* Form Alanları */}
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
// 2. PROPERTY CARD (İlan Kartı) - TAM KOD
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

  // Fiyat formatlama (örn: 1.250.000 ₺)
  const formattedPrice = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <Link href={\`/ilan/\${property.id}\`} className="group block bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Resim Alanı */}
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

      {/* İçerik Alanı */}
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
// 3. PROPERTY FEATURES (İlan Detay Özellikleri) - TAM KOD
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
  "✅ İşlem Başarılı! Arama filtresi ve İlan kartları projenizden hiçbir özellik veya sınıf çıkarılmadan Çift Dilli (TR/EN) hale getirildi.",
);
