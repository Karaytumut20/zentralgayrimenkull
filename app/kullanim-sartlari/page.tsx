import { Metadata } from "next";
"use client";
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


export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description: "Zentral Gayrimenkul web sitesi kullanım şartları ve yasal koşulları.",
  keywords: ["kullanım şartları","yasal uyarı","site kuralları","hukuki bildirimler","emlak kullanım şartları"],
  alternates: {
    canonical: "/kullanim-sartlari",
  },
  openGraph: {
    title: "Kullanım Şartları | Zentral Gayrimenkul",
    description: "Zentral Gayrimenkul web sitesi kullanım şartları ve yasal koşulları.",
    url: `https://www.zentralgayrimenkul.com/kullanim-sartlari`,
  },
};
