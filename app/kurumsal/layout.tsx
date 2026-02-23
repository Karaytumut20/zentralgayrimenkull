import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurumsal",
  description: "Zentral Gayrimenkul hakkında. Konya ve Ankara merkezli ofislerimizle gayrimenkul sektöründe güven, misyon ve vizyonumuz.",
  keywords: ["kurumsal gayrimenkul","zentral gayrimenkul kimdir","hakkımızda","konya emlak danışmanlığı","ankara gayrimenkul ofisi","güvenilir emlak","kurumsal vizyon","emlak ofisi"],
  alternates: {
    canonical: "/kurumsal",
  },
  openGraph: {
    title: "Kurumsal | Zentral Gayrimenkul",
    description: "Zentral Gayrimenkul hakkında. Konya ve Ankara merkezli ofislerimizle gayrimenkul sektöründe güven, misyon ve vizyonumuz.",
    url: `https://www.zentralgayrimenkul.com/kurumsal`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
