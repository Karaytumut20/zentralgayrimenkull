import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description: "Zentral Gayrimenkul web sitesi kullanım şartları ve yasal koşulları.",
  keywords: ["kullanım şartları","yasal uyarı","site kuralları","hukuki bildirimler","emlak kullanım şartları"],
  alternates: {
    canonical: "/kullanim-sartlari",
  },
  openGraph: {
    title: "Kullanım Şartları | Zentral Gayrimenkul",
    description: "Zentral Gayrimenkul web sitesi kullanım şartları ve yasal koşulları.",
    url: `https://www.zentralgayrimenkul.com/kullanim-sartlari`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
