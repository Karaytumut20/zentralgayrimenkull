// app/medya/page.tsx
import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";

// Örnek Haber Verileri
const news = [
  {
    id: 1,
    title: "Konya Sanayi Bölgesi Yatırımımız Başladı",
    date: "12 Kasım 2024",
    category: "Proje Haberleri",
    excerpt: "İç Anadolu'nun en büyük lojistik üssü olmaya aday projemizin temelleri atıldı.",
    image: "https://images.unsplash.com/photo-1590644365607-1c5a38fc43e0?q=80"
  },
  {
    id: 2,
    title: "2025 Gayrimenkul Raporu Yayınlandı",
    date: "05 Kasım 2024",
    category: "Sektörel Analiz",
    excerpt: "Uzman ekibimizin hazırladığı raporda, arsa yatırımlarının konuta göre %40 daha fazla kazandırdığı görüldü.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80"
  },
  {
    id: 3,
    title: "Dubai Ofisimiz Hizmete Girdi",
    date: "28 Ekim 2024",
    category: "Kurumsal",
    excerpt: "Global büyüme stratejimiz kapsamında Körfez bölgesindeki operasyonlarımızı Dubai ofisimizden yöneteceğiz.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80"
  },
  {
    id: 4,
    title: "Kentsel Dönüşümde Yeni Fırsatlar",
    date: "15 Ekim 2024",
    category: "Mevzuat",
    excerpt: "Yeni çıkan yasalarla birlikte İstanbul'da kentsel dönüşüm süreçleri hızlanıyor.",
    image: "https://images.unsplash.com/photo-1449824913929-49aa7649cc3c?q=80"
  },
  {
    id: 5,
    title: "Yatırımcı Buluşmaları: Ankara",
    date: "01 Ekim 2024",
    category: "Etkinlik",
    excerpt: "Başkentteki yatırımcılarımızla bir araya gelerek yeni dönem stratejilerimizi paylaştık.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80"
  },
  {
    id: 6,
    title: "Sürdürülebilir Mimari Ödülü",
    date: "20 Eylül 2024",
    category: "Ödüller",
    excerpt: "Vadi İstanbul projemiz, çevre dostu tasarımıyla 'Yeşil Bina' ödülüne layık görüldü.",
    image: "https://images.unsplash.com/photo-1518005052357-e98475018297?q=80"
  }
];

export default function MedyaPage() {
  return (
    <main>
      <PageBanner 
        title="MEDYA & HABERLER" 
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80" 
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <article key={item.id} className="bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full">
                {/* Resim */}
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>

                {/* İçerik */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-gray-400 text-xs mb-3 font-medium">
                    <Calendar size={14} className="mr-1" />
                    {item.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                    {item.excerpt}
                  </p>
                  
                  <Link href="#" className="flex items-center text-slate-900 font-bold text-sm uppercase tracking-wide group-hover:text-yellow-600 transition-colors mt-auto">
                    Haberi Oku <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Sayfalama (Pagination) Görünümü */}
          <div className="mt-12 flex justify-center gap-2">
            <button className="w-10 h-10 border border-gray-300 flex items-center justify-center font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors bg-slate-900 text-white">1</button>
            <button className="w-10 h-10 border border-gray-300 flex items-center justify-center font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors">2</button>
            <button className="w-10 h-10 border border-gray-300 flex items-center justify-center font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors">3</button>
          </div>
        </div>
      </section>
    </main>
  );
}