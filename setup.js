const fs = require("fs");
const path = require("path");

console.log(
  "Son Eksikler (Gizlilik, Kullanım Şartları, Projeler) Tamamlanıyor...",
);

const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
};

ensureDir(path.join(__dirname, "app", "gizlilik-politikasi"));
ensureDir(path.join(__dirname, "app", "kullanim-sartlari"));
ensureDir(path.join(__dirname, "app", "projeler", "[id]"));

// =====================================================================
// 1. GİZLİLİK POLİTİKASI
// =====================================================================
const gizlilikCode = `"use client";
import PageBanner from "@/components/PageBanner";
import { useLanguage } from "@/components/LanguageContext";

export default function GizlilikPage() {
  const { lang } = useLanguage();
  return (
    <main className="bg-white min-h-screen">
      <PageBanner
        title={lang === 'tr' ? "GİZLİLİK POLİTİKASI" : "PRIVACY POLICY"}
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80"
      />
      <section className="py-20 container mx-auto px-6 max-w-4xl">
        <div className="prose prose-lg text-gray-600">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">{lang === 'tr' ? "1. Veri Güvenliği Hakkında" : "1. About Data Security"}</h2>
          <p className="mb-6">
            {lang === 'tr'
              ? "Zentral Gayrimenkul Yatırım A.Ş. (Şirket) olarak, kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. 6698 sayılı Kişisel Verilerin Korunması Kanunu'na uygun olarak işlenerek muhafaza edilmesine büyük önem atfetmekteyiz."
              : "As Zentral Real Estate Investment Inc. (Company), we show maximum sensitivity to the security of your personal data. We attach great importance to processing and preserving it in accordance with the Personal Data Protection Law No. 6698."}
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">{lang === 'tr' ? "2. Kişisel Verilerin Toplanması" : "2. Collection of Personal Data"}</h2>
          <p className="mb-6">
            {lang === 'tr'
              ? "Kişisel verileriniz, Şirketimiz tarafından sağlanan hizmet ve ticari faaliyetlere bağlı olarak otomatik ya da otomatik olmayan yöntemlerle toplanabilecektir."
              : "Your personal data may be collected by automatic or non-automatic methods depending on the services and commercial activities provided by our Company."}
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">{lang === 'tr' ? "3. İletişim" : "3. Contact"}</h2>
          <p>
            {lang === 'tr' ? "Kişisel verilerinizle ilgili her türlü soru ve görüşleriniz için " : "For any questions or comments regarding your personal data, you can contact us at "}
            <strong>zentralgayrimenkul@gmail.com</strong>
            {lang === 'tr' ? " adresinden bize ulaşabilirsiniz." : "."}
          </p>
        </div>
      </section>
    </main>
  );
}
`;

// =====================================================================
// 2. KULLANIM ŞARTLARI
// =====================================================================
const kullanimCode = `"use client";
import PageBanner from "@/components/PageBanner";
import { useLanguage } from "@/components/LanguageContext";

export default function KullanimSartlariPage() {
  const { lang } = useLanguage();
  return (
    <main className="bg-white min-h-screen">
      <PageBanner
        title={lang === 'tr' ? "KULLANIM ŞARTLARI" : "TERMS OF USE"}
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80"
      />
      <section className="py-20 container mx-auto px-6 max-w-4xl">
        <div className="prose prose-lg text-gray-600">
          <p className="mb-6">
            {lang === 'tr'
              ? "Bu internet sitesine girmeniz veya bu internet sitesindeki herhangi bir bilgiyi kullanmanız aşağıdaki koşulları kabul ettiğiniz anlamına gelir."
              : "Entering this website or using any information on this website implies that you accept the following terms."}
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">{lang === 'tr' ? "Fikri Mülkiyet Hakları" : "Intellectual Property Rights"}</h2>
          <p className="mb-6">
            {lang === 'tr'
              ? "Bu internet sitesinde bulunan bilgiler, yazılar, resimler, markalar ve diğer işaretler Zentral Gayrimenkul'ün mülkiyetindedir."
              : "The information, texts, pictures, brands, and other signs on this website are the property of Zentral Real Estate."}
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">{lang === 'tr' ? "Sorumluluk Reddi" : "Disclaimer"}</h2>
          <p className="mb-6">
            {lang === 'tr'
              ? "Zentral Gayrimenkul, bu internet sitesinde yer alan bütün ürün ve hizmetleri önceden bildirimde bulunmadan değiştirme hakkını saklı tutar."
              : "Zentral Real Estate reserves the right to change all products and services on this website without prior notice."}
          </p>
        </div>
      </section>
    </main>
  );
}
`;

// =====================================================================
// 3. PROJELER LİSTESİ
// =====================================================================
const projelerCode = `"use client";
import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

const allProjects = [
  { id: 1, title: "Vadi İstanbul Konakları", loc: "Sarıyer, İstanbul", typeTR: "Konut", typeEN: "Residential", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00" },
  { id: 2, title: "Organize Sanayi Depo", loc: "Sincan, Ankara", typeTR: "Sanayi", typeEN: "Industrial", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d" },
  { id: 3, title: "Skyline Business Tower", loc: "Dubai", typeTR: "Ticari", typeEN: "Commercial", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e" },
  { id: 4, title: "Green Life Villaları", loc: "Bodrum, Muğla", typeTR: "Konut", typeEN: "Residential", img: "https://images.unsplash.com/photo-1600596542815-2250651d60c0" },
  { id: 5, title: "Lojistik Merkez Üssü", loc: "Gebze, Kocaeli", typeTR: "Lojistik", typeEN: "Logistics", img: "https://images.unsplash.com/photo-1553413077-190dd305871c" },
  { id: 6, title: "Finans Merkezi Ofis", loc: "Ataşehir, İstanbul", typeTR: "Ticari", typeEN: "Commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c" },
];

export default function ProjelerPage() {
  const { lang } = useLanguage();

  return (
    <main className="bg-white min-h-screen">
      <PageBanner title={lang === 'tr' ? "PROJELERİMİZ" : "OUR PROJECTS"} image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80" />
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <Link key={project.id} href={\`/projeler/\${project.id}\`} className="group cursor-pointer block">
              <div className="relative h-72 overflow-hidden rounded-sm mb-4">
                <Image src={project.img} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-yellow-600 text-white text-xs font-bold px-3 py-1">
                  {lang === 'tr' ? project.typeTR : project.typeEN}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">{project.title}</h3>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <MapPin size={16} className="mr-1" /> {project.loc}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
`;

// =====================================================================
// 4. PROJE DETAY SAYFASI
// =====================================================================
const projeDetayCode = `"use client";
import PageBanner from "@/components/PageBanner";
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
              <a href="/iletisim" className="block w-full text-center bg-yellow-600 py-3 font-bold rounded-sm hover:bg-yellow-700 transition-colors">
                {lang === 'tr' ? "BİLGİ AL" : "GET INFORMATION"}
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
`;

// Dosyaları Yazma
fs.writeFileSync(
  path.join(__dirname, "app", "gizlilik-politikasi", "page.tsx"),
  gizlilikCode,
);
fs.writeFileSync(
  path.join(__dirname, "app", "kullanim-sartlari", "page.tsx"),
  kullanimCode,
);
fs.writeFileSync(
  path.join(__dirname, "app", "projeler", "page.tsx"),
  projelerCode,
);
fs.writeFileSync(
  path.join(__dirname, "app", "projeler", "[id]", "page.tsx"),
  projeDetayCode,
);

console.log(
  "✅ Proje %100 Hazır! Kıyıda köşede kalan tüm sayfalar Çift Dilli (TR/EN) hale getirildi.",
);
