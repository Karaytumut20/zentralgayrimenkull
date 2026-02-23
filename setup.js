const fs = require("fs");
const path = require("path");

const DOMAIN = "https://www.zentralgayrimenkul.com";
const SITE_NAME = "Zentral Gayrimenkul";

// Bölgesel (Ankara & Konya) SEO verilerimiz
const pagesData = [
  {
    folder: "app/kurumsal",
    title: "Kurumsal",
    desc: "Zentral Gayrimenkul hakkında. Konya ve Ankara merkezli ofislerimizle gayrimenkul sektöründe güven, misyon ve vizyonumuz.",
    route: "/kurumsal",
    keywords: [
      "kurumsal gayrimenkul",
      "zentral gayrimenkul kimdir",
      "hakkımızda",
      "konya emlak danışmanlığı",
      "ankara gayrimenkul ofisi",
      "güvenilir emlak",
      "kurumsal vizyon",
      "emlak ofisi",
    ],
  },
  {
    folder: "app/projeler",
    title: "Projeler",
    desc: "Konya ve Ankara bölgesindeki en güncel, kazançlı ve lüks gayrimenkul & konut projelerini inceleyin.",
    route: "/projeler",
    keywords: [
      "konya konut projeleri",
      "ankara yeni emlak projeleri",
      "sıfır daireler",
      "lüks konut projeleri",
      "inşaat projeleri konya",
      "yatırımlık projeler",
      "ankara satılık lüks ev",
      "markalı konutlar",
    ],
  },
  {
    folder: "app/yatirim",
    title: "Yatırım",
    desc: "Geleceğinizi güvence altına alacak Ankara ve Konya kârlı gayrimenkul yatırım fırsatları, arsa ve ticari mülk seçenekleri.",
    route: "/yatirim",
    keywords: [
      "konya arsa yatırımı",
      "ankara kârlı gayrimenkul",
      "yatırımlık arsa",
      "ticari gayrimenkul ankara",
      "emlak yatırım danışmanlığı",
      "getirisi yüksek yatırımlar",
      "ankara arsa fiyatları",
    ],
  },
  {
    folder: "app/medya",
    title: "Medya",
    desc: "Gayrimenkul sektörü, Konya ve Ankara emlak piyasası gelişmeleri, haberler ve Zentral Gayrimenkul duyuruları.",
    route: "/medya",
    keywords: [
      "emlak haberleri",
      "gayrimenkul sektörü",
      "konya emlak piyasası",
      "ankara konut fiyatları",
      "zentral medya",
      "emlak duyuruları",
      "gayrimenkul trendleri",
    ],
  },
  {
    folder: "app/iletisim",
    title: "İletişim",
    desc: "Zentral Gayrimenkul iletişim bilgileri. Konya ve Ankara ofislerimizin adresleri, telefon numaraları ve iletişim formumuz.",
    route: "/iletisim",
    keywords: [
      "zentral gayrimenkul iletişim",
      "konya emlak ofisi adresi",
      "ankara gayrimenkul telefon",
      "emlak danışmanına ulaşın",
      "konya ankara emlak",
      "bize ulaşın",
    ],
  },
  {
    folder: "app/gizlilik-politikasi",
    title: "Gizlilik Politikası",
    desc: "Zentral Gayrimenkul gizlilik politikası, KVKK aydınlatma metni ve kişisel verilerin korunması hakkında bilgilendirme.",
    route: "/gizlilik-politikasi",
    keywords: [
      "gizlilik politikası",
      "kvkk aydınlatma metni",
      "kişisel verilerin korunması",
      "veri güvenliği",
      "çerez politikası emlak",
    ],
  },
  {
    folder: "app/kullanim-sartlari",
    title: "Kullanım Şartları",
    desc: "Zentral Gayrimenkul web sitesi kullanım şartları ve yasal koşulları.",
    route: "/kullanim-sartlari",
    keywords: [
      "kullanım şartları",
      "yasal uyarı",
      "site kuralları",
      "hukuki bildirimler",
      "emlak kullanım şartları",
    ],
  },
];

// Page.tsx dosyasını temizleme fonksiyonu (metadata'yı siler ve "use client"ı en üste alır)
function cleanPageFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, "utf8");

  // Metadata bloğunu güvenlice uçur
  const metaStart = content.indexOf("export const metadata");
  if (metaStart !== -1) {
    let braceCount = 0;
    let inMeta = false;
    let metaEnd = -1;
    for (let i = metaStart; i < content.length; i++) {
      if (content[i] === "{") {
        braceCount++;
        inMeta = true;
      } else if (content[i] === "}") {
        braceCount--;
      }

      if (inMeta && braceCount === 0) {
        metaEnd = i;
        if (content[i + 1] === ";") metaEnd++;
        break;
      }
    }
    if (metaEnd !== -1) {
      content = content.slice(0, metaStart) + content.slice(metaEnd + 1);
    }
  }

  // Metadata import satırlarını temizle
  content = content.replace(
    /import\s*\{\s*Metadata\s*\}\s*from\s*['"]next['"];?\n?/g,
    "",
  );

  // "use client" durumunu sayfanın en başına zorunlu olarak taşı
  const useClientRegex = /['"]use client['"];?/g;
  const parenthesisClientRegex = /\(['"]use client['"]\);?/g;

  if (useClientRegex.test(content) || parenthesisClientRegex.test(content)) {
    content = content.replace(useClientRegex, "");
    content = content.replace(parenthesisClientRegex, "");
    content = '"use client";\n\n' + content.trimStart();
  }

  fs.writeFileSync(filePath, content.trim() + "\n", "utf8");
  console.log(
    `✅ Hatalar temizlendi: ${filePath.split(path.sep).slice(-2).join("/")}`,
  );
}

// Next.js standartlarına uygun SEO Layout dosyası oluşturma fonksiyonu
function createLayoutFile(data) {
  const folderPath = path.join(__dirname, data.folder);
  if (!fs.existsSync(folderPath)) return;

  const layoutPath = path.join(folderPath, "layout.tsx");
  const layoutCode = `import { Metadata } from "next";

export const metadata: Metadata = {
  title: "${data.title}",
  description: "${data.desc}",
  keywords: ${JSON.stringify(data.keywords)},
  alternates: {
    canonical: "${data.route}",
  },
  openGraph: {
    title: "${data.title} | ${SITE_NAME}",
    description: "${data.desc}",
    url: \`${DOMAIN}${data.route}\`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;

  fs.writeFileSync(layoutPath, layoutCode, "utf8");
  console.log(`✅ SEO eklendi: ${data.folder}/layout.tsx`);
}

// Ana dizindeki app/page.tsx dosyasını temizle (Ana sayfa SEO'su app/layout.tsx içinden zaten yönetiliyor)
cleanPageFile(path.join(__dirname, "app", "page.tsx"));

// Alt sayfaları döngüyle temizle ve her klasöre özel layout.tsx (Server Component) oluştur
pagesData.forEach((data) => {
  const pagePath = path.join(__dirname, data.folder, "page.tsx");
  cleanPageFile(pagePath);
  createLayoutFile(data);
});

console.log(
  "🚀 Build Hatası Düzeltme ve SEO Optimizasyonu Tamamlandı! Vercel hatası çözüldü.",
);
