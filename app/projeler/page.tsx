import { Metadata } from "next";
"use client";
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
            <Link key={project.id} href={`/projeler/${project.id}`} className="group cursor-pointer block">
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


export const metadata: Metadata = {
  title: "Projeler",
  description: "Konya ve Ankara bölgesindeki en güncel, kazançlı ve lüks gayrimenkul & konut projelerini inceleyin.",
  keywords: ["konya konut projeleri","ankara yeni emlak projeleri","sıfır daireler","lüks konut projeleri","inşaat projeleri konya","yatırımlık projeler","ankara satılık lüks ev","markalı konutlar"],
  alternates: {
    canonical: "/projeler",
  },
  openGraph: {
    title: "Projeler | Zentral Gayrimenkul",
    description: "Konya ve Ankara bölgesindeki en güncel, kazançlı ve lüks gayrimenkul & konut projelerini inceleyin.",
    url: `https://www.zentralgayrimenkul.com/projeler`,
  },
};
