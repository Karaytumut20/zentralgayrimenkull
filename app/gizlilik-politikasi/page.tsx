import { Metadata } from "next";
"use client";
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


export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Zentral Gayrimenkul gizlilik politikası, KVKK aydınlatma metni ve kişisel verilerin korunması hakkında bilgilendirme.",
  keywords: ["gizlilik politikası","kvkk aydınlatma metni","kişisel verilerin korunması","veri güvenliği","çerez politikası emlak"],
  alternates: {
    canonical: "/gizlilik-politikasi",
  },
  openGraph: {
    title: "Gizlilik Politikası | Zentral Gayrimenkul",
    description: "Zentral Gayrimenkul gizlilik politikası, KVKK aydınlatma metni ve kişisel verilerin korunması hakkında bilgilendirme.",
    url: `https://www.zentralgayrimenkul.com/gizlilik-politikasi`,
  },
};
