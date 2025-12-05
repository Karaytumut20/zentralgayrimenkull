// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 
import FloatingSocials from "@/components/FloatingSocials"; // <--- 1. BİLEŞEN IMPORT EDİLDİ

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Kurultay Gayrimenkul Yatırım",
  description: "Global gayrimenkul ve inşaat projeleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${montserrat.className} antialiased bg-white relative`}>
        
        {/* 2. INLINE CSS (ANIMASYON İÇİN)
            Sahibinden butonundaki parıltı efektinin çalışması için 
            gerekli animasyon kodunu buraya ekledik. Config dosyasıyla uğraşmanıza gerek yok.
        */}
        <style>{`
          @keyframes shimmer {
            100% { transform: translateX(100%); }
          }
        `}</style>

        <Header />
        
        {/* 3. BİLEŞEN EKLENDİ (Her sayfada sağda sabit duracak) */}
        <FloatingSocials />
        
        {children}
        
        <Footer />
      </body>
    </html>
  );
}