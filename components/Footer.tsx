// components/Footer.tsx
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';

export default function Footer() {
  
  // Linkleri burada tanımlıyoruz ki yönetmesi kolay olsun
  const quickLinks = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Kurumsal', href: '/kurumsal' },
    { name: 'Projeler', href: '/projeler' },
    { name: 'Yatırım', href: '/yatirim' },
    { name: 'Medya & Haberler', href: '/medya' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  const activityLinks = [
    { name: 'Sanayi Arsaları', href: '/yatirim' }, // Yatırım sayfasına gider
    { name: 'Fabrika Projeleri', href: '/projeler' }, // Projelere gider
    { name: 'Ticari Plazalar', href: '/projeler' },
    { name: 'Arsa Geliştirme', href: '/yatirim' },
    { name: 'Yurtdışı Yatırım', href: '/yatirim' },
  ];

  return (
    <footer className="bg-[#0b1120] text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* 1. Sütun: Firma Bilgisi */}
          <div>
            <Link href="/" className="text-3xl font-bold tracking-tighter text-white block mb-6">
              KURULTAY<span className="text-yellow-500">.</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Gayrimenkul ve yatırım sektöründe 15 yılı aşkın tecrübemizle, yerel ve global pazarlarda değer üreten projeler geliştiriyoruz.
            </p>
            <div className="flex gap-4">
              {/* Sosyal Medya İkonları (Linkleri olmadığı için # kaldı) */}
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* 2. Sütun: Hızlı Erişim (DÜZELTİLDİ) */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-yellow-600 pl-3">Hızlı Erişim</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="flex items-center hover:text-yellow-500 transition-colors text-sm">
                    <ChevronRight size={14} className="mr-2 text-yellow-600" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Sütun: Faaliyet Alanları (YÖNLENDİRİLDİ) */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-yellow-600 pl-3">Faaliyet Alanları</h3>
            <ul className="space-y-3">
              {activityLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="flex items-center hover:text-yellow-500 transition-colors text-sm">
                    <ChevronRight size={14} className="mr-2 text-yellow-600" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Sütun: İletişim */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-yellow-600 pl-3">İletişim Bilgileri</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-yellow-600 mt-1 shrink-0" size={18} />
                <p>Maslak Mah. Büyükdere Cad. No:123<br />Sarıyer / İSTANBUL</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-yellow-600 shrink-0" size={18} />
                <p>+90 (212) 555 00 00</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-yellow-600 shrink-0" size={18} />
                <p>info@kurultay.org</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Copyright Bar (Linkler Eklendi) */}
      <div className="bg-[#050911] py-6 text-center text-xs text-gray-500 border-t border-gray-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Kurultay Gayrimenkul Yatırım A.Ş. Tüm hakları saklıdır.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link href="/kullanim-sartlari" className="hover:text-white transition-colors">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}