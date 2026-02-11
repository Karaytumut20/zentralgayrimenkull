import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/FloatingSocials";
import { LanguageProvider } from "@/components/LanguageContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zentralgayrimenkul.com'),
  title: {
    default: 'Zentral Gayrimenkul Yatırım',
    template: '%s | Zentral Gayrimenkul'
  },
  description: "Konya ve Ankara'da sanayi arsaları, lüks konut projeleri, ticari gayrimenkul yatırımları ve global danışmanlık hizmetleri.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="tr">
      <body className={`${montserrat.className} antialiased bg-white relative`}>
        <style>{`
          @keyframes shimmer {
            100% { transform: translateX(100%); }
          }
        `}</style>

        {/* Tüm site artık bu Provider içinde. Sayfa geçişlerinde dil asla bozulmaz. */}
        <LanguageProvider>
          <Header />
          <FloatingSocials />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
