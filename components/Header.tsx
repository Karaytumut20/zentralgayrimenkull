"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggleLanguage } = useLanguage();

  const navLinks = [
    { name: lang === 'tr' ? 'ANASAYFA' : 'HOME', href: '/' },
    { name: lang === 'tr' ? 'KURUMSAL' : 'CORPORATE', href: '/kurumsal' },
    { name: lang === 'tr' ? 'YATIRIM' : 'INVESTMENT', href: '/yatirim' },
    { name: lang === 'tr' ? 'MEDYA' : 'MEDIA', href: '/medya' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-[#0f172a] py-3 shadow-xl' : 'bg-transparent py-4 lg:py-8 border-b border-white/10'}`}>
      <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center">

        <Link href="/" className="relative block w-32 h-10 lg:w-64 lg:h-16 shrink-0 z-50">
           <Image src="/Yeni klasör (2)/test.png" alt="Zentral" fill className="object-contain object-left" priority />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((item) => (
            <Link key={item.name} href={item.href} className="text-xs xl:text-sm font-bold text-white hover:text-yellow-500 transition-colors tracking-wide relative group">
              {item.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-yellow-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <button onClick={toggleLanguage} className="flex items-center gap-2 text-white hover:text-yellow-500 transition-colors font-bold text-sm">
            <Globe size={18} /> {lang === 'tr' ? 'EN' : 'TR'}
          </button>
          <Link href="/iletisim" className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 xl:px-8 xl:py-3 text-xs xl:text-sm font-bold tracking-widest uppercase transition-all rounded-sm">
            {lang === 'tr' ? 'BİZE ULAŞIN' : 'CONTACT US'}
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-4 z-50 relative">
          <button onClick={toggleLanguage} className="text-white hover:text-yellow-500 flex items-center gap-1 font-bold text-sm">
            <Globe size={20} /> {lang === 'tr' ? 'EN' : 'TR'}
          </button>
          <button className="text-white p-1 hover:text-yellow-500" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#0f172a] z-40 flex flex-col items-center justify-center animate-in fade-in duration-200">
          <div className="flex flex-col space-y-8 text-center mt-10">
            {navLinks.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white font-bold text-2xl hover:text-yellow-500 tracking-widest">
                {item.name}
              </Link>
            ))}
            <div className="w-16 h-1 bg-white/10 mx-auto my-4"></div>
            <Link href="/iletisim" onClick={() => setIsMobileMenuOpen(false)} className="text-yellow-500 font-bold text-2xl hover:text-white tracking-widest">
              {lang === 'tr' ? 'İLETİŞİM' : 'CONTACT'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
