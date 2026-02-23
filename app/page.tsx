import { Metadata } from "next";
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import AboutSection from '@/components/AboutSection';
import LatestProjects from '@/components/LatestProjects';
import CtaSection from '@/components/CtaSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <LatestProjects />
      <CtaSection />
    </main>
  );
}


export const metadata: Metadata = {
  title: "Ana Sayfa",
  description: "Zentral Gayrimenkul | Konya ve Ankara emlak ofislerimizle satılık ev, arsa yatırımı ve güvenilir gayrimenkul danışmanlığı hizmetleri sunuyoruz.",
  keywords: ["konya gayrimenkul","ankara emlak ofisi","zentral gayrimenkul","satılık ev konya","kiralık daire ankara","konya emlakçı","ankara emlak danışmanlığı","arsa yatırımı","kârlı gayrimenkul"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ana Sayfa | Zentral Gayrimenkul",
    description: "Zentral Gayrimenkul | Konya ve Ankara emlak ofislerimizle satılık ev, arsa yatırımı ve güvenilir gayrimenkul danışmanlığı hizmetleri sunuyoruz.",
    url: `https://www.zentralgayrimenkul.com/`,
  },
};
