// components/Header.tsx
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'ANASAYFA', href: '/' },
    { name: 'KURUMSAL', href: '/kurumsal' },
    { name: 'YATIRIM', href: '/yatirim' },
    { name: 'MEDYA', href: '/medya' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 
      ${isScrolled || isMobileMenuOpen ? 'bg-[#0f172a] py-3 shadow-xl' : 'bg-transparent py-4 lg:py-8 border-b border-white/10'}`}
    >
      <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="relative block w-32 h-10 lg:w-64 lg:h-16 shrink-0 z-50">
           <Image 
             src="/Yeni klasör (2)/test.png" 
             alt="Zentral Gayrimenkul" 
             fill 
             className="object-contain object-left" 
             priority
           />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-xs xl:text-sm font-bold text-white hover:text-yellow-500 transition-colors tracking-wide relative group"
            >
              {item.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-yellow-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden lg:block">
          <Link href="/iletisim" className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 xl:px-8 xl:py-3 text-xs xl:text-sm font-bold tracking-widest uppercase transition-all rounded-sm">
            Bize Ulaşın
          </Link>
        </div>

        {/* MOBILE TOGGLE - Z-Index artırıldı ve renk garanti altına alındı */}
        <button 
          className="lg:hidden text-white p-2 hover:text-yellow-500 transition-colors z-50 relative" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menüyü Aç/Kapa"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#0f172a] z-40 flex flex-col items-center justify-center animate-in fade-in duration-200">
          <div className="flex flex-col space-y-8 text-center">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white font-bold text-2xl hover:text-yellow-500 tracking-widest"
              >
                {item.name}
              </Link>
            ))}
            <div className="w-16 h-1 bg-white/10 mx-auto my-4"></div>
            <Link 
                href="/iletisim"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-yellow-500 font-bold text-2xl hover:text-white tracking-widest"
            >
                İLETİŞİM
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}