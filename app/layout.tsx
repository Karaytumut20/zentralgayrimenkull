// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 
import FloatingSocials from "@/components/FloatingSocials"; 

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  // ÖNEMLİ: Buraya sitenizin gerçek alan adını yazmalısınız
  metadataBase: new URL('https://www.zentralgayrimenkul.com'), 
  
  title: {
    default: 'Zentral Gayrimenkul Yatırım',
    template: '%s | Zentral Gayrimenkul' // Alt sayfalarda "İletişim | Zentral Gayrimenkul" gibi görünür
  },
  description: "Konya ve Ankara'da sanayi arsaları, lüks konut projeleri, ticari gayrimenkul yatırımları ve global danışmanlık hizmetleri.",
  keywords: ['Konya Emlak', 'Sanayi Arsası', 'Konut Projeleri', 'Yatırım Danışmanlığı', 'Zentral Gayrimenkul', 'Ankara Ofis', 'Satılık Arsa', 'Kiralık Dükkan', 'Gayrimenkul Yatırımı', 'emlakçı'],
  authors: [{ name: 'Zentral Gayrimenkul' }],
  creator: 'Zentral Gayrimenkul',
  
  // Sosyal Medya Paylaşımları (Open Graph)
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: '/',
    title: 'Zentral Gayrimenkul - Geleceği İnşa Ediyoruz',
    description: 'Yatırımlarınıza değer katan, güvenilir çözüm ortağınız.',
    siteName: 'Zentral Gayrimenkul',
    images: [
      {
        url: '/public/Yeni klasör (2)/android-icon-192x192.png', // Public klasörüne 1200x630px boyutunda bir kapak resmi eklemeniz önerilir
        width: 1200,
        height: 630,
        alt: 'Zentral Gayrimenkul Yatırım',
      },
    ],
  },
  
  // Twitter Kartları
  twitter: {
    card: 'summary_large_image',
    title: 'Zentral Gayrimenkul Yatırım',
    description: 'Konya ve Ankara merkezli gayrimenkul yatırım uzmanlığı.',
    images: ['/favicon.ico'], // Yukarıdaki aynı görseli kullanır
  },

  // İkon Ayarları
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    shortcut: '/favicon-16x16.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${montserrat.className} antialiased bg-white relative`}>
        
        {/* INLINE CSS (ANIMASYON İÇİN)
            Sahibinden butonundaki parıltı efektinin çalışması için gerekli.
        */}
        <style>{`
          @keyframes shimmer {
            100% { transform: translateX(100%); }
          }
        `}</style>

        <Header />
        
        {/* Her sayfada sağda sabit duracak sosyal medya menüsü */}
        <FloatingSocials />
        
        {children}
        
        <Footer />
      </body>
    </html>
  );
}