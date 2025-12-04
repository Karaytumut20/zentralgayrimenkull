// app/kurumsal/page.tsx
import PageBanner from "@/components/PageBanner";
import AboutSection from "@/components/AboutSection"; // Mevcut bileşeni tekrar kullanıyoruz
import { ShieldCheck, Users, Target } from "lucide-react";

export default function KurumsalPage() {
  return (
    <main>
      <PageBanner 
        title="KURUMSAL" 
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80" 
      />

      {/* Vizyon & Misyon */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-50 p-8 border-l-4 border-yellow-600">
            <ShieldCheck size={40} className="text-slate-900 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Güvenilirlik</h3>
            <p className="text-gray-600">
              Yatırımcılarımıza şeffaf, hukuki temelleri sağlam ve risk analizi yapılmış projeler sunuyoruz.
            </p>
          </div>
          <div className="bg-gray-50 p-8 border-l-4 border-yellow-600">
            <Target size={40} className="text-slate-900 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Vizyonumuz</h3>
            <p className="text-gray-600">
              Türkiye nin gayrimenkul gücünü global pazarlara taşıyarak, uluslararası bir marka olmak.
            </p>
          </div>
          <div className="bg-gray-50 p-8 border-l-4 border-yellow-600">
            <Users size={40} className="text-slate-900 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ekibimiz</h3>
            <p className="text-gray-600">
              Alanında uzman mimar, mühendis ve yatırım danışmanlarından oluşan 50+ kişilik profesyonel kadro.
            </p>
          </div>
        </div>
      </section>

      {/* Mevcut AboutSection Bileşeni */}
      <AboutSection />
    </main>
  );
}