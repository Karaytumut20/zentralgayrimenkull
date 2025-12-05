// app/kurumsal/page.tsx
"use client"; // İnteraktif özellikler (FAQ açılıp kapanması) için gerekli

import React, { useState } from "react";
import PageBanner from "@/components/PageBanner";
import AboutSection from "@/components/AboutSection";
import Link from "next/link"; // Sayfa içi geçişler için
import { 
  ShieldCheck, Users, Target, Building2, TrendingUp, Award, 
  MapPin, Handshake, Briefcase, ChevronRight, ChevronDown, Quote, ExternalLink
} from "lucide-react";

export default function KurumsalPage() {
  // FAQ İçin State Yönetimi
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Gayrimenkul alım-satım işlemlerinde hizmet bedeliniz (komisyon) nedir?",
      answer: "Şeffaflık ilkemiz gereği, Taşınmaz Ticareti Hakkında Yönetmelik standartlarını uyguluyoruz. Alım-satım işlemlerinde satış bedeli üzerinden %2 + KDV alıcıdan, %2 + KDV satıcıdan olmak üzere hizmet bedeli uygulanır. Kiralama işlemlerinde ise bir kira bedeli + KDV olarak işlem yapılır. Tüm ödemeler faturalandırılır."
    },
    {
      question: "Yatırımlık arsa alırken nelere dikkat ediyorsunuz, süreç nasıl işliyor?",
      answer: "Konya'nın gelişen bölgelerini (özellikle sanayi ve yeni yerleşim akslarını) yakından takip ediyoruz. Size sunduğumuz her arsa için önce 'İmar Durumu Sorgulaması', 'Altyapı Analizi' ve 'Gelecek 5 Yıllık Değerleme Tahmini' yapıyoruz. Hisseli tapularda 'Rıza-i Taksim' sözleşmelerinin varlığını kontrol edip, hukuki olarak %100 temiz yerleri portföyümüze alıyoruz."
    },
    {
      question: "Yabancı uyruklu yatırımcılar için vatandaşlık işlemlerini yönetiyor musunuz?",
      answer: "Evet. Bünyemizdeki hukuk departmanı ve anlaşmalı olduğumuz yeminli tercümanlarla süreci A'dan Z'ye yönetiyoruz. 400.000 USD ve üzeri gayrimenkul yatırımıyla Türk Vatandaşlığı kazanımı sürecinde, tapu devrinden vatandaşlık başvurusuna kadar tüm bürokrasiyi sizin adınıza biz takip ediyoruz."
    },
    {
      question: "Kredi işlemlerinde yardımcı oluyor musunuz?",
      answer: "Anlaşmalı olduğumuz kamu ve özel bankalar sayesinde müşterilerimize özel faiz oranları ve hızlı kredi onayı imkanı sunuyoruz. Finans ekibimiz, gelir durumunuza en uygun ödeme planını oluşturmanızda ve ekspertiz sürecinin hızlı sonuçlanmasında size tam destek sağlar."
    }
  ];

  return (
    <main className="bg-white text-slate-800">
      {/* 1. HERO BANNER */}
      <PageBanner 
        title="GÜÇLÜ GEÇMİŞ, AYDINLIK GELECEK" 
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
      />

      {/* 2. GİRİŞ: PRESTİJ MANİFESTOSU */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 z-0 opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1 bg-yellow-100 text-yellow-700 font-bold text-xs tracking-widest rounded-full mb-4">
                KONYA'NIN EMLAK LİDERİ
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                Toprağa Değer, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">
                  Hayata Güven Katıyoruz.
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Konya'nın Selçuklu mirasını modern şehircilik anlayışıyla harmanlıyoruz. 
                Sadece metrekare değil, yaşam standartlarını satıyoruz. Yüksek yatırım değeri taşıyan 
                portföyümüz ve şeffaf yönetim anlayışımızla, paranızın karşılığını fazlasıyla almanızı sağlıyoruz.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {/* SAHİBİNDEN BUTONU */}
                <a 
                  href="https://www.sahibinden.com" // BURAYA KENDİ SAHİBİNDEN LİNKİNİZİ YAPIŞTIRIN
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-yellow-500 text-black px-8 py-4 rounded-lg shadow-xl hover:bg-yellow-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-bold"
                >
                  <Briefcase size={22} className="text-black" />
                  <span>İLANLARIMIZI İNCELE</span>
                  <ExternalLink size={16} className="opacity-60 group-hover:opacity-100" />
                </a>
              </div>

            </div>
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000" className="rounded-2xl shadow-2xl mt-12 w-full h-64 object-cover" alt="Ofis" />
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000" className="rounded-2xl shadow-2xl w-full h-64 object-cover" alt="Toplantı" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-600 text-white p-6 rounded-xl shadow-xl">
                <p className="font-bold text-3xl">15+</p>
                <p className="text-xs uppercase tracking-wider opacity-90">Yıllık Tecrübe</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600 rounded-full blur-[100px] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <Quote size={60} className="text-yellow-600 opacity-50 mb-6" />
          <p className="text-2xl md:text-3xl font-light italic leading-relaxed max-w-4xl mb-10 text-gray-200">
            "Bizim işimiz binalar değil, insanlardır. Bir ailenin huzurla oturacağı bir ev bulduğumuzda veya bir yatırımcının birikimini katladığımızda hissettiğimiz mutluluk, tüm ticari kaygıların ötesindedir."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-300 border-2 border-yellow-500 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" alt="CEO" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <div className="font-bold text-xl text-white">Ahmet Yılmaz</div>
              <div className="text-yellow-500 text-sm">Kurucu & Yönetim Kurulu Bşk.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. İSTATİSTİKLER */}
      <section className="bg-slate-900 py-20 text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          {[
            { icon: Building2, val: "2,500+", label: "Portföy Sayısı" },
            { icon: Users, val: "15,000+", label: "Müşteri Görüşmesi" },
            { icon: Handshake, val: "%98", label: "Başarılı Satış" },
            { icon: Award, val: "12", label: "Sektör Ödülü" },
          ].map((item, idx) => (
            <div key={idx} className="group p-6 border border-slate-700 rounded-xl hover:border-yellow-500 transition-colors bg-slate-800/50 backdrop-blur-sm">
              <item.icon className="w-12 h-12 mx-auto mb-4 text-yellow-500 group-hover:scale-110 transition-transform" />
              <h3 className="text-4xl font-bold mb-2">{item.val}</h3>
              <p className="text-slate-400 text-sm uppercase tracking-widest">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TARİHÇE (TIMELINE) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-yellow-600 font-bold tracking-widest uppercase mb-3">BAŞARI YOLCULUĞUMUZ</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Konya'dan Dünyaya Açılan Kapı</h3>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-600 via-slate-300 to-gray-50"></div>
            {[
              { year: "2010", title: "Temeller Atıldı", desc: "Konya merkezde ilk ofisimiz küçük bir hayalle açıldı.", side: "left" },
              { year: "2015", title: "Bölgesel Büyüme", desc: "Meram ve Selçuklu şubelerimizle hizmet ağımızı genişlettik.", side: "right" },
              { year: "2019", title: "Dijital Dönüşüm", desc: "Online emlak sistemine geçiş ve kurumsal kimlik yenilenmesi.", side: "left" },
              { year: "2024", title: "Global Vizyon", desc: "Yabancı yatırımcı departmanımız ve 50+ kişilik dev kadromuz kuruldu.", side: "right" }
            ].map((item, index) => (
              <div key={index} className={`relative flex items-center justify-between mb-12 w-full ${item.side === "right" ? "flex-row-reverse" : ""}`}>
                <div className="w-5/12"></div>
                <div className="z-20 flex items-center justify-center w-12 h-12 bg-yellow-600 rounded-full shadow-lg border-4 border-white">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className={`w-5/12 bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-600 hover:shadow-2xl transition-shadow duration-300 ${item.side === "left" ? "text-right" : "text-left"}`}>
                  <span className="text-5xl font-bold text-slate-100 absolute top-2 opacity-50 select-none -z-10">{item.year}</span>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ÇALIŞMA SİSTEMİMİZ */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Süreç Nasıl İşliyor?</h2>
            <p className="text-gray-600 mb-8">
              Karmaşık bürokratik işlemleri sizin yerinize biz yönetiyoruz. Size sadece imza atmak ve kahvenizi yudumlamak kalıyor.
            </p>
            {/* İLETİŞİM SAYFASINA YÖNLENDİRME */}
            <Link href="/iletisim">
              <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg flex items-center gap-2 group">
                Detaylı Bilgi Alın 
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { id: "01", title: "Analiz & Tanışma", text: "Beklentilerinizi dinliyor, bütçenize en uygun rotayı belirliyoruz." },
              { id: "02", title: "Portföy Sunumu", text: "Size özel seçilmiş, hukuki kontrolü yapılmış gayrimenkulleri sunuyoruz." },
              { id: "03", title: "Pazarlık & Anlaşma", text: "Satıcı ile şeffaf bir ortamda, en doğru fiyat için masaya oturuyoruz." },
              { id: "04", title: "Tapu & Teslim", text: "Tüm resmi işlemleri tamamlıyor, anahtarınızı teslim ediyoruz." },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative group overflow-hidden">
                <div className="absolute -right-4 -top-4 text-9xl font-bold text-gray-50 group-hover:text-yellow-50 transition-colors duration-300 pointer-events-none">
                  {step.id}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VİZYON MİSYON */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-slate-900 group">
              <ShieldCheck size={48} className="text-slate-900 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Güven Politikamız</h3>
              <p className="text-gray-600">
                Yatırımcılarımıza şeffaf, hukuki temelleri sağlam ve risk analizi profesyonelce yapılmış projeler sunuyoruz.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-yellow-600 group">
              <Target size={48} className="text-yellow-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Vizyon</h3>
              <p className="text-gray-600">
                Türkiye'nin gayrimenkul gücünü global pazarlara taşıyarak, uluslararası bir marka olmak. Konya'dan dünyaya açılan bir pencere.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-slate-900 group">
              <Users size={48} className="text-slate-900 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Uzman Kadro</h3>
              <p className="text-gray-600">
                Sadece emlak danışmanı değil; mimar, mühendis ve hukukçulardan oluşan 50+ kişilik dev kadromuzla yanınızdayız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CEO MESAJI */}
  
      {/* 8. SIKÇA SORULAN SORULAR (FAQ - DOLU VE İNTERAKTİF) */}
      <section className="py-24 container mx-auto px-6">
         <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900">Merak Edilenler</h2>
            <p className="text-gray-500 mt-2 text-lg">Aklınızdaki soruları şeffaflıkla yanıtlıyoruz.</p>
         </div>
         
         <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((item, index) => (
               <div 
                 key={index} 
                 className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                   activeFaq === index 
                     ? "bg-slate-900 border-slate-900 shadow-xl" 
                     : "bg-white border-gray-200 hover:border-yellow-500"
                 }`}
               >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <span className={`font-bold text-lg ${activeFaq === index ? "text-white" : "text-slate-800"}`}>
                      {item.question}
                    </span>
                    <ChevronDown 
                      className={`transition-transform duration-300 ${
                        activeFaq === index ? "text-yellow-500 rotate-180" : "text-gray-400"
                      }`} 
                    />
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      activeFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-slate-700/50">
                      {item.answer}
                    </div>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* 9. MEVCUT ABOUT SECTION */}
    </main>
  );
}