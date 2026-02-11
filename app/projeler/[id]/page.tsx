"use client";
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
