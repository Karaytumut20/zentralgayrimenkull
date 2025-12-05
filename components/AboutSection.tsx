// components/AboutSection.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Target, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Arkaplan Deseni (Silik) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 transform translate-x-20 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* GÖRSEL ALANI: Üst üste binmiş resimler efekti */}
          <div className="w-full lg:w-1/2 relative">
            {/* Ana Resim */}
            <div className="relative h-[500px] w-full lg:w-[90%] z-10">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932" // Plaza/Toplantı
                alt="Kurumsal"
                fill
                className="object-cover rounded-sm shadow-2xl"
              />
            </div>
            {/* Dekoratif Alt Resim/Kutu */}
            <div className="absolute -bottom-10 -right-4 w-2/3 h-64 bg-slate-900 p-8 flex flex-col justify-center rounded-sm z-20 shadow-xl border-b-4 border-yellow-600 md:flex">
              <div className="flex items-center gap-4 mb-4">
                <Award className="text-yellow-500" size={40} />
                <div>
                  <p className="text-3xl font-bold text-white">25 Yıl</p>
                  <p className="text-gray-400 text-xs uppercase tracking-widest">Sektör Deneyimi</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm italic">
                Güven inşa etmek, bina inşa etmekten daha zordur. Biz zoru seçtik.
              </p>
            </div>
          </div>

          {/* İÇERİK ALANI */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-0.5 w-10 bg-yellow-600"></span>
              <span className="text-yellow-600 font-bold tracking-[0.2em] text-sm uppercase">Hakkımızda</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15]">
              Değer Yaratan <br />
              <span className="text-slate-700">Yatırım Stratejileri</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
              Zentral, gayrimenkul geliştirme ve yatırım alanında Türkiye nin önde gelen kuruluşlarından biridir. Sadece metrekare değil, yaşam kalitesi ve yüksek yatırım geri dönüşü (ROI) üretiyoruz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="bg-yellow-50 p-3 h-fit rounded-sm"><Target className="text-yellow-600" size={24} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Stratejik Konumlar</h4>
                  <p className="text-sm text-gray-500">Geleceğin parlayan bölgelerinde arsa ve proje yatırımları.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-yellow-50 p-3 h-fit rounded-sm"><Award className="text-yellow-600" size={24} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Yüksek Getiri</h4>
                  <p className="text-sm text-gray-500">Döviz endeksli kira ve değer artış garantili sistemler.</p>
                </div>
              </div>
            </div>

            <Link href="/kurumsal" className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-yellow-600 transition-colors rounded-sm group">
              Şirket Profilimiz
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}