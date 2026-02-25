"use client";
import Link from "next/link";
import {
  Phone,
  Smartphone,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  ChevronRight,
  ShieldCheck,
  Download,
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();

  const quickLinks = [
    { name: lang === "tr" ? "Anasayfa" : "Home", href: "/" },
    { name: lang === "tr" ? "Kurumsal" : "Corporate", href: "/kurumsal" },
    { name: lang === "tr" ? "Yatırım" : "Investment", href: "/yatirim" },
    { name: lang === "tr" ? "Medya" : "Media", href: "/medya" },
    { name: lang === "tr" ? "İletişim" : "Contact", href: "/iletisim" },
  ];

  const activityLinks = [
    {
      name: lang === "tr" ? "Site Yönetimi" : "Site Management",
      href: "/yatirim",
    },
    {
      name: lang === "tr" ? "Gayrimenkul Satış İşlemleri" : "Real Estate Sales",
      href: "/yatirim",
    },
    {
      name: lang === "tr" ? "Gayrimenkul Takibi" : "Real Estate Tracking",
      href: "/yatirim",
    },
    { name: lang === "tr" ? "Villa Satışı" : "Villa Sales", href: "/yatirim" },
    {
      name: lang === "tr" ? "Fabrika Satışı" : "Factory Sales",
      href: "/yatirim",
    },
    {
      name: lang === "tr" ? "Arsa Geliştirme" : "Land Development",
      href: "/yatirim",
    },
    {
      name: lang === "tr" ? "Kiralama Yönetimi" : "Rental Management",
      href: "/yatirim",
    },
    {
      name: lang === "tr" ? "Yatırım Danışmanlığı" : "Investment Consultancy",
      href: "/yatirim",
    },
  ];

  const mapLinkKonya = "https://maps.app.goo.gl/u1nSimYFRpu4MFjB7";
  const mapLinkAnkara = "https://maps.app.goo.gl/2Bpn2eGKkEHqT82T6";
  const yetkiBelgesiPdfYolu = "/YetkiBelgesi.pdf";

  // YENİ EKLENEN GERÇEK SOSYAL MEDYA LİNKLERİNİZ
  const socialLinks = {
    instagram:
      "https://www.instagram.com/zentral.gayrimenkul?igsh=N3VpMGVzdGdmNWFq&utm_source=qr",
    x_twitter: "https://x.com/zentralgyo?s=11",
    facebook: "https://www.facebook.com/profile.php?id=61585609359960",
    linkedin: "https://www.linkedin.com/in/zentral-gayrimenkul-125b393ab/",
  };

  return (
    <footer className="bg-[#0b1120] text-gray-300 border-t border-gray-800 font-sans">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <Link href="/" className="relative block w-48 h-12 mb-4">
                <Image
                  src="/Yeni klasör (2)/test.png"
                  alt="Zentral Gayrimenkul"
                  fill
                  className="object-contain object-left"
                />
              </Link>
              <p className="text-xs text-gray-400 mb-6 max-w-xs leading-relaxed">
                {lang === "tr"
                  ? "7 yıllık tecrübe ile değer üreten, Konya ve Ankara merkezli gayrimenkul projeleri."
                  : "Real estate projects based in Konya and Ankara, producing value with 7 years of experience."}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-yellow-600 hover:text-white transition-all shadow-md"
              >
                <Instagram size={16} />
              </a>
              <a
                href={socialLinks.x_twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-yellow-600 hover:text-white transition-all shadow-md"
              >
                <Twitter size={16} />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-yellow-600 hover:text-white transition-all shadow-md"
              >
                <Facebook size={16} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-yellow-600 hover:text-white transition-all shadow-md"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-white font-bold text-sm mb-3 border-l-2 border-yellow-600 pl-2">
                {lang === "tr" ? "Hızlı Erişim" : "Quick Links"}
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center hover:text-yellow-500 transition-colors text-xs"
                    >
                      <ChevronRight
                        size={12}
                        className="mr-1 text-yellow-600"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm mb-3 border-l-2 border-yellow-600 pl-2">
                {lang === "tr" ? "Faaliyetler" : "Activities"}
              </h3>
              <ul className="space-y-2">
                {activityLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center hover:text-yellow-500 transition-colors text-xs"
                    >
                      <ChevronRight
                        size={12}
                        className="mr-1 text-yellow-600"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <h3 className="text-white font-bold text-sm -mb-2 border-l-2 border-yellow-600 pl-2">
              {lang === "tr" ? "İletişim Noktaları" : "Contact Points"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3 text-[11px]">
                <h4 className="text-yellow-600 font-bold text-xs uppercase tracking-wide">
                  {lang === "tr" ? "Konya Ofis" : "Konya Office"}
                </h4>
                <a
                  href={mapLinkKonya}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-yellow-500 transition-colors group"
                >
                  <MapPin
                    className="text-gray-500 group-hover:text-yellow-600 shrink-0 mt-0.5"
                    size={14}
                  />
                  <span className="text-gray-400 group-hover:text-gray-200">
                    Kumköprü Mah. Küçükkumköprü Cad. No:176DC Karatay/Konya
                  </span>
                </a>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:03322338042"
                    className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
                  >
                    <Phone size={14} className="text-gray-500" />
                    <span>0332 233 80 42</span>
                  </a>
                  <a
                    href="tel:05013338042"
                    className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
                  >
                    <Smartphone size={14} className="text-gray-500" />
                    <span>0501 333 80 42</span>
                  </a>
                </div>
                <a
                  href="mailto:zentralgayrimenkul@gmail.com"
                  className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
                >
                  <Mail className="text-gray-500 shrink-0" size={14} />
                  <span className="truncate">zentralgayrimenkul@gmail.com</span>
                </a>
              </div>

              <div className="space-y-3 text-[11px] sm:border-l sm:border-gray-800 sm:pl-4">
                <h4 className="text-yellow-600 font-bold text-xs uppercase tracking-wide">
                  {lang === "tr" ? "Ankara Ofis" : "Ankara Office"}
                </h4>
                <a
                  href={mapLinkAnkara}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-yellow-500 transition-colors group"
                >
                  <MapPin
                    className="text-gray-500 group-hover:text-yellow-600 shrink-0 mt-0.5"
                    size={14}
                  />
                  <span className="text-gray-400 group-hover:text-gray-200">
                    Ehlibeyt Mah. Ceyhun Atuf Kansu Cad. No:100A/1238
                    Çankaya/Ankara
                  </span>
                </a>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:05323991663"
                    className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
                  >
                    <Smartphone size={14} className="text-gray-500" />
                    <span>0532 399 1663</span>
                  </a>
                </div>
                <a
                  href="mailto:Zentralankara@gmail.com"
                  className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
                >
                  <Mail className="text-gray-500 shrink-0" size={14} />
                  <span className="truncate">zentralankara@gmail.com</span>
                </a>
              </div>
            </div>

            <a
              href={yetkiBelgesiPdfYolu}
              download="Zentral_Yetki_Belgesi.pdf"
              className="mt-auto group flex items-center justify-between p-2.5 rounded border border-gray-800 bg-[#0e1525] hover:border-yellow-600/50 hover:bg-[#161f32] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-600/10 flex items-center justify-center shrink-0 group-hover:bg-yellow-600 transition-colors">
                  <ShieldCheck
                    size={14}
                    className="text-yellow-600 group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-300 group-hover:text-white">
                    Semih Bahadır Kahraman
                  </div>
                </div>
              </div>
              <Download
                size={12}
                className="text-gray-600 group-hover:text-yellow-500 transition-colors"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#050911] py-4 text-center text-[10px] text-gray-600 border-t border-gray-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Zentral Gayrimenkul Yatırım A.Ş.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/gizlilik-politikasi" className="hover:text-gray-400">
              {lang === "tr" ? "Gizlilik" : "Privacy"}
            </Link>
            <Link href="/kullanim-sartlari" className="hover:text-gray-400">
              {lang === "tr" ? "Kullanım Şartları" : "Terms of Use"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
