// components/Footer.tsx
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

export default function Footer() {
  const quickLinks = [
    { name: "Anasayfa", href: "/" },
    { name: "Kurumsal", href: "/kurumsal" },
    { name: "Yatırım", href: "/yatirim" },
    { name: "Medya", href: "/medya" },
    { name: "İletişim", href: "/iletisim" },
  ];

  const activityLinks = [
    { name: "Site Yönetimi", href: "/yatirim" },
    { name: "Gayrimenkul Satış İşlemleri", href: "/yatirim" },
    { name: "Gayrimenkul Takibi", href: "/yatirim" },
    { name: "Villa Satışı", href: "/yatirim" },
    { name: "Fabrika Satışı", href: "/yatirim" },
    { name: "Arsa Geliştirme", href: "/yatirim" },
    { name: "Kiralama Yönetimi", href: "/yatirim" },
    { name: "Yatırım Danışmanlığı", href: "/yatirim" },
  ];

  const mapLinkKonya =
    "https://www.google.com/maps/place/Kumk%C3%B6pr%C3%BC,+K%C3%BC%C3%A7%C3%BCk+Kumk%C3%B6pr%C3%BC+Cd.+No:176,+42020+Karatay%2FKonya/@37.8509109,32.5291451,17z/data=!3m1!4b1!4m6!3m5!1s0x14d084d608e11d51:0x2253040cf55190e1!8m2!3d37.8509067!4d32.53172!16s%2Fg%2F11c2fn1wp3?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D";
  const mapLinkAnkara =
    "https://maps.google.com/?q=Ehlibeyt+Mahallesi+Ceyhun+Atuf+Kansu+Caddesi+No:100A/1238+Cankaya+Ankara";
  const yetkiBelgesiPdfYolu = "/YetkiBelgesi.pdf";

  // Sosyal Medya Linklerinizi buradan güncelleyebilirsiniz
  const socialLinks = {
    instagram:
      "https://www.instagram.com/zentral.gayrimenkul?igsh=N3VpMGVzdGdmNWFq&utm_source=qr",
    x_twitter: "https://twitter.com/zentralgayrimenkul",
    facebook: "https://facebook.com/zentralgayrimenkul",
    linkedin: "https://linkedin.com/company/zentralgayrimenkul",
  };

  return (
    <footer className="bg-[#0b1120] text-gray-300 border-t border-gray-800 font-sans">
      {/* Üst Kısım */}
      <div className="container mx-auto px-6 py-10">
        {/* Grid Yapısı */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* 1. SOL BLOK: Logo ve Açıklama (3 birim) */}
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
                7 yıllık tecrübe ile değer üreten, Konya ve Ankara merkezli
                gayrimenkul projeleri.
              </p>
            </div>

            {/* Sosyal Medya İkonları (YENİ) */}
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-yellow-600 hover:text-white transition-all shadow-md"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={socialLinks.x_twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-yellow-600 hover:text-white transition-all shadow-md"
                aria-label="X (Twitter)"
              >
                <Twitter size={16} />{" "}
                {/* Lucide'de X logosu Twitter olarak geçer */}
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-yellow-600 hover:text-white transition-all shadow-md"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-yellow-600 hover:text-white transition-all shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* 2. ORTA BLOK: Linkler (4 birim) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {/* Hızlı Erişim */}
            <div>
              <h3 className="text-white font-bold text-sm mb-3 border-l-2 border-yellow-600 pl-2">
                Hızlı Erişim
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

            {/* Faaliyetler */}
            <div>
              <h3 className="text-white font-bold text-sm mb-3 border-l-2 border-yellow-600 pl-2">
                Faaliyetler
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

          {/* 3. SAĞ BLOK: İletişim (Konya & Ankara) (5 birim) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <h3 className="text-white font-bold text-sm -mb-2 border-l-2 border-yellow-600 pl-2">
              İletişim Noktaları
            </h3>

            {/* İletişim Grid: Yan yana iki ofis */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* KONYA OFİS */}
              <div className="space-y-3 text-[11px]">
                <h4 className="text-yellow-600 font-bold text-xs uppercase tracking-wide">
                  Konya Ofis
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

                {/* Konya Telefonları (YENİ İKONLAR) */}
                <div className="flex flex-col gap-2 pl-6">
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
                  className="flex items-center gap-2 hover:text-yellow-500 transition-colors pl-0.5"
                >
                  <Mail className="text-gray-500 shrink-0" size={14} />
                  <span className="truncate">zentralgayrimenkul@gmail.com</span>
                </a>
              </div>

              {/* ANKARA OFİS */}
              <div className="space-y-3 text-[11px] sm:border-l sm:border-gray-800 sm:pl-4">
                <h4 className="text-yellow-600 font-bold text-xs uppercase tracking-wide">
                  Ankara Ofis
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

                {/* Ankara Telefonları (YENİ İKONLAR) */}
                <div className="flex flex-col gap-2 pl-6">
                  {/* Ahmet Okkalı'nın numarası */}
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
                  className="flex items-center gap-2 hover:text-yellow-500 transition-colors pl-0.5"
                >
                  <Mail className="text-gray-500 shrink-0" size={14} />
                  <span className="truncate">zentralankara@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Yetki Belgesi (Ortak) */}
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

      {/* Copyright Bar */}
      <div className="bg-[#050911] py-4 text-center text-[10px] text-gray-600 border-t border-gray-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 Zentral Gayrimenkul Yatırım A.Ş.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/gizlilik" className="hover:text-gray-400">
              Gizlilik
            </Link>
            <Link href="/kullanim" className="hover:text-gray-400">
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
