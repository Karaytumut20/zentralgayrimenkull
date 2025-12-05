// components/Header.tsx
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // "PROJELER" linki kaldırıldı
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
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0f172a] py-4 shadow-xl' : 'bg-transparent py-8 border-b border-white/10'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className=" items-center gap-2 group relative w-68 h-18">
           <Image 
             src="/Yeni klasör (2)/test.png" 
             alt="Zentral Gayrimenkul" 
             fill 
             className="object-contain object-left" 
             priority
           />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-sm font-bold text-white hover:text-yellow-500 transition-colors tracking-wide relative group"
            >
              {item.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-yellow-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden lg:block">
          <Link href="/iletisim" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 text-sm font-bold tracking-widest uppercase transition-all rounded-sm">
            Bize Ulaşın
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
      
      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0f172a] border-t border-gray-800 animate-in slide-in-from-top-5">
          <div className="flex flex-col p-8 space-y-6 text-center">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white font-bold text-lg hover:text-yellow-500 tracking-widest"
              >
                {item.name}
              </Link>
            ))}
            <Link 
                href="/iletisim"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-yellow-500 font-bold text-lg hover:text-white tracking-widest"
            >
                İLETİŞİM
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}