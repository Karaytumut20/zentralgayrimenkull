"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Award } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function AboutSection() {
  const { lang } = useLanguage();
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 transform translate-x-20 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[500px] w-full lg:w-[90%] z-10">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932"
                alt="Kurumsal"
                fill
                className="object-cover rounded-sm shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-10 -right-4 w-2/3 h-64 bg-slate-900 p-8 flex flex-col justify-center rounded-sm z-20 shadow-xl border-b-4 border-yellow-600">
              <div className="flex items-center gap-4 mb-4">
                <Award className="text-yellow-500" size={40} />
                <div>
                  <p className="text-3xl font-bold text-white">
                    7+ {lang === "tr" ? "Yıl" : "Years"}
                  </p>
                  <p className="text-gray-400 text-xs uppercase tracking-widest">
                    {lang === "tr" ? "Sektör Deneyimi" : "Industry Experience"}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm italic">
                {lang === "tr"
                  ? "Güven inşa etmek, bina inşa etmekten daha zordur. Biz zoru seçtik."
                  : "Building trust is harder than building a house. We chose the hard way."}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-0.5 w-10 bg-yellow-600"></span>
              <span className="text-yellow-600 font-bold tracking-[0.2em] text-sm uppercase">
                {lang === "tr" ? "Hakkımızda" : "About Us"}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15]">
              {lang === "tr" ? "Değer Kazandıran" : "Value Creating"} <br />
              <span className="text-slate-700">
                {lang === "tr"
                  ? "Yatırım Stratejileri"
                  : "Investment Strategies"}
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
              {lang === "tr"
                ? "Bugüne kadar 1.000’in üzerinde kiralama ve 500’den fazla satış işlemini başarıyla tamamladık."
                : "We have successfully completed over 1,000 rentals and 500 sales transactions to date."}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="bg-yellow-50 p-3 h-fit rounded-sm">
                  <Target className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    {lang === "tr"
                      ? "Stratejik Konumlar"
                      : "Strategic Locations"}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {lang === "tr"
                      ? "Geleceğin parlayan bölgelerinde..."
                      : "Investments in shining future areas..."}
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/kurumsal"
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-yellow-600 transition-colors rounded-sm group"
            >
              {lang === "tr" ? "Şirket Profilimiz" : "Company Profile"}{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
