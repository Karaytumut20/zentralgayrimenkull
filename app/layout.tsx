import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Header import edildi
import Footer from "@/components/Footer"; // Footer import edildi

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
      <body className={`${montserrat.className} antialiased bg-white`}>
        <Header /> {/* Sayfanın en tepesinde */}
        {children} {/* Değişen sayfa içeriği burada */}
        <Footer /> {/* Sayfanın en altında */}
      </body>
    </html>
  );
}