import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projeler",
  description: "Konya ve Ankara bölgesindeki en güncel, kazançlı ve lüks gayrimenkul & konut projelerini inceleyin.",
  keywords: ["konya konut projeleri","ankara yeni emlak projeleri","sıfır daireler","lüks konut projeleri","inşaat projeleri konya","yatırımlık projeler","ankara satılık lüks ev","markalı konutlar"],
  alternates: {
    canonical: "/projeler",
  },
  openGraph: {
    title: "Projeler | Zentral Gayrimenkul",
    description: "Konya ve Ankara bölgesindeki en güncel, kazançlı ve lüks gayrimenkul & konut projelerini inceleyin.",
    url: `https://www.zentralgayrimenkul.com/projeler`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
