import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Zentral Gayrimenkul gizlilik politikası, KVKK aydınlatma metni ve kişisel verilerin korunması hakkında bilgilendirme.",
  keywords: ["gizlilik politikası","kvkk aydınlatma metni","kişisel verilerin korunması","veri güvenliği","çerez politikası emlak"],
  alternates: {
    canonical: "/gizlilik-politikasi",
  },
  openGraph: {
    title: "Gizlilik Politikası | Zentral Gayrimenkul",
    description: "Zentral Gayrimenkul gizlilik politikası, KVKK aydınlatma metni ve kişisel verilerin korunması hakkında bilgilendirme.",
    url: `https://www.zentralgayrimenkul.com/gizlilik-politikasi`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
