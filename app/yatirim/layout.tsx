import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yatırım",
  description: "Geleceğinizi güvence altına alacak Ankara ve Konya kârlı gayrimenkul yatırım fırsatları, arsa ve ticari mülk seçenekleri.",
  keywords: ["konya arsa yatırımı","ankara kârlı gayrimenkul","yatırımlık arsa","ticari gayrimenkul ankara","emlak yatırım danışmanlığı","getirisi yüksek yatırımlar","ankara arsa fiyatları"],
  alternates: {
    canonical: "/yatirim",
  },
  openGraph: {
    title: "Yatırım | Zentral Gayrimenkul",
    description: "Geleceğinizi güvence altına alacak Ankara ve Konya kârlı gayrimenkul yatırım fırsatları, arsa ve ticari mülk seçenekleri.",
    url: `https://www.zentralgayrimenkul.com/yatirim`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
