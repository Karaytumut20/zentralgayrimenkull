import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Zentral Gayrimenkul iletişim bilgileri. Konya ve Ankara ofislerimizin adresleri, telefon numaraları ve iletişim formumuz.",
  keywords: ["zentral gayrimenkul iletişim","konya emlak ofisi adresi","ankara gayrimenkul telefon","emlak danışmanına ulaşın","konya ankara emlak","bize ulaşın"],
  alternates: {
    canonical: "/iletisim",
  },
  openGraph: {
    title: "İletişim | Zentral Gayrimenkul",
    description: "Zentral Gayrimenkul iletişim bilgileri. Konya ve Ankara ofislerimizin adresleri, telefon numaraları ve iletişim formumuz.",
    url: `https://www.zentralgayrimenkul.com/iletisim`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
