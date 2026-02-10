"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall, TrendingUp, ShieldCheck } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#051328] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl lg:rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="lg:w-2/3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              <TrendingUp size={14} />
              <span>Yatırımınızı Şansa Bırakmayın</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Reel Enflasyona Karşı <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-200">
                En Güvenli Liman: Toprak
              </span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              Piyasadaki dalgalanmalardan etkilenmeyen, düzenli kira getirisi sağlayan ticari mülkler ve şehrin gelişim aksındaki arsa fırsatları için "Kapalı Portföy" dosyamızı inceleyin. Ücretsiz bölgesel analiz raporu için uzmanlarımızla hemen görüşün.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-300 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#D4AF37]" />
                <span>Hukuki Güvence</span>
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <TrendingUp size={18} className="text-[#D4AF37]" />
                <span>Yüksek Getiri Potansiyeli</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 flex flex-col w-full sm:w-auto gap-4">
            <Link href="/iletisim" className="group relative flex items-center justify-center gap-3 bg-[#D4AF37] text-[#051328] px-8 py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1 w-full">
              <PhoneCall size={20} className="group-hover:animate-bounce" />
              <span>Ücretsiz Danışmanlık</span>
            </Link>

            <Link href="/yatirim" className="group flex items-center justify-center gap-3 border border-white/20 bg-transparent text-white px-8 py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300 w-full">
              <span>Yatırım Modelleri</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
