"use client";
import Link from "next/link";
import { ArrowRight, PhoneCall, TrendingUp, ShieldCheck } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function CtaSection() {
  const { lang } = useLanguage();
  return (
    <section className="relative py-20 lg:py-28 bg-[#051328] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl lg:rounded-3xl p-8 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6">
              {lang === 'tr' ? 'Reel Enflasyona Karşı' : 'Against Real Inflation'} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-200">
                {lang === 'tr' ? 'En Güvenli Liman: Toprak' : 'The Safest Haven: Land'}
              </span>
            </h2>
          </div>
          <div className="lg:w-1/3 flex flex-col w-full sm:w-auto gap-4">
            <Link href="/iletisim" className="group flex items-center justify-center gap-3 bg-[#D4AF37] text-[#051328] px-8 py-5 rounded-xl font-bold uppercase w-full">
              <PhoneCall size={20} /> <span>{lang === 'tr' ? 'Ücretsiz Danışmanlık' : 'Free Consultation'}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}