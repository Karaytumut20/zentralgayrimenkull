import { siteConfig } from "@/config/site";
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


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  creator: siteConfig.creator,
  authors: siteConfig.authors,
  metadataBase: new URL(siteConfig.url),

  // Hreflang ve Canonical ayarları
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "en-US": "/",
      tr: "/",
      "tr-TR": "/",
    },
  },

  // Sosyal Medya ve Paylaşım Görünümü (OpenGraph)
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.links.twitter,
  },

  // Arama Motoru Bot Kuralları
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
