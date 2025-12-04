// app/yatirim/page.tsx
import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, PieChart, Shield, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

export default function YatirimPage() {
  return (
    <main>
      <PageBanner 
        title="YATIRIM MODELLERİ" 
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80" // Finans/Borsa görseli
      />

      {/* Giriş: Yatırım Felsefesi */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
             <h4 className="text-yellow-600 font-bold tracking-widest text-sm uppercase mb-2">Geleceği Tasarlıyoruz</h4>
             <h2 className="text-4xl font-bold text-slate-900 mb-6">Enflasyona Karşı <br/>Güçlü Kalkan</h2>
             <p className="text-gray-600 text-lg mb-6 leading-relaxed">
               Paranın değerini korumanın her zamankinden daha zor olduğu bu dönemde, Kurultay Gayrimenkul olarak Arsa Geliştirme ve Ticari Mülk modellerimizle yatırımcılarımıza döviz bazında getiri sunuyoruz.
             </p>
             <ul className="space-y-4 mb-8">
               {[
                 "Yüksek prim potansiyeline sahip gelişen bölgeler",
                 "Hukuki ve teknik altyapısı tamamlanmış projeler",
                 "Şeffaf süreç yönetimi ve düzenli raporlama",
                 "Global piyasalara erişim imkanı"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                   <CheckCircle2 className="text-yellow-600 shrink-0" size={20} />
                   {item}
                 </li>
               ))}
             </ul>
          </div>
          <div className="w-full lg:w-1/2 relative h-[400px]">
            <Image 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80" 
              alt="Yatırım Analizi" 
              fill 
              className="object-cover rounded-sm shadow-2xl"
            />
            {/* Overlay kutu */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-sm hidden md:block">
              <p className="text-3xl font-bold text-yellow-500">%150+</p>
              <p className="text-xs tracking-widest uppercase">Ortalama Değer Artışı</p>
            </div>
          </div>
        </div>
      </section>

      {/* Süreç: Nasıl Çalışır? */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">Yatırım Sürecimiz</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Globe size={40} />, title: "Pazar Analizi", desc: "Potansiyeli yüksek lokasyonların uzman ekiplerce tespiti." },
              { icon: <Shield size={40} />, title: "Güvenli Alım", desc: "Hukuki denetimler sonrası sorunsuz tapu devri." },
              { icon: <TrendingUp size={40} />, title: "Değer Katma", desc: "Projelendirme ve imar çalışmalarıyla değer artışı sağlama." },
              { icon: <PieChart size={40} />, title: "Kâr Realizasyonu", desc: "Doğru zamanda satış veya kiralama ile yatırımı nakde çevirme." }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-sm hover:bg-slate-700 transition-colors group relative">
                <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                {/* Ok işareti (Son eleman hariç) */}
                {idx !== 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-600 z-10">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-yellow-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Portföyünüzü Birlikte Büyütelim</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            Siz de kazanan yatırımcılar arasına katılın. Uzmanlarımız size özel yatırım planını hazırlasın.
          </p>
          <Link href="/iletisim" className="bg-slate-900 text-white px-10 py-4 font-bold rounded-sm hover:bg-white hover:text-slate-900 transition-all uppercase tracking-widest inline-block">
            Danışmanla Görüş
          </Link>
        </div>
      </section>
    </main>
  );
}