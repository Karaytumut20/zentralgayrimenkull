// components/LatestProjects.tsx
import Image from 'next/image';
import { MapPin, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Vadi İstanbul Konakları",
    location: "Sarıyer, İstanbul",
    category: "Konut Projesi",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00"
  },
  {
    title: "Organize Sanayi Depo",
    location: "Sincan, Ankara",
    category: "Sanayi & Lojistik",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
  },
  {
    title: "Skyline Business Tower",
    location: "Business Bay, Dubai",
    category: "Ticari Ofis",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e"
  }
];

export default function LatestProjects() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h3 className="text-yellow-500 font-bold tracking-widest uppercase mb-2">Portföyümüz</h3>
            <h2 className="text-4xl font-bold">Öne Çıkan Projeler</h2>
          </div>
          <button className="hidden md:block border border-gray-600 hover:bg-white hover:text-slate-900 hover:border-white px-6 py-3 transition-all rounded-sm text-sm font-bold uppercase tracking-wider">
            Tüm Projeleri Gör
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative h-[450px] overflow-hidden rounded-lg cursor-pointer">
              {/* Resim */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay (Üzerine gelince koyulaşma) */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* İçerik */}
              <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <div className="flex items-center text-gray-300 text-sm mb-4">
                  <MapPin size={16} className="mr-1 text-yellow-500" />
                  {project.location}
                </div>
                <div className="flex items-center gap-2 text-yellow-500 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">
                  Detayları İncele <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobil Buton */}
        <div className="mt-8 md:hidden text-center">
             <button className="border border-gray-600 text-white px-6 py-3 w-full rounded-sm">Tüm Projeleri Gör</button>
        </div>
      </div>
    </section>
  );
}