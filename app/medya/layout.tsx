import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medya",
  description: "Gayrimenkul sektörü, Konya ve Ankara emlak piyasası gelişmeleri, haberler ve Zentral Gayrimenkul duyuruları.",
  keywords: ["emlak haberleri","gayrimenkul sektörü","konya emlak piyasası","ankara konut fiyatları","zentral medya","emlak duyuruları","gayrimenkul trendleri"],
  alternates: {
    canonical: "/medya",
  },
  openGraph: {
    title: "Medya | Zentral Gayrimenkul",
    description: "Gayrimenkul sektörü, Konya ve Ankara emlak piyasası gelişmeleri, haberler ve Zentral Gayrimenkul duyuruları.",
    url: `https://www.zentralgayrimenkul.com/medya`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
