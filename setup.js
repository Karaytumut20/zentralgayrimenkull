const fs = require("fs");
const path = require("path");

// Temel ayarlar
const DOMAIN = "https://www.zentralgayrimenkul.com";
const SITE_NAME = "Zentral Gayrimenkul";

// 1. Merkezi siteConfig dosyasını oluşturma
const configDir = path.join(__dirname, "config");
if (!fs.existsSync(configDir)) {
  fs.mkdirSync(configDir, { recursive: true });
}

const siteConfigCode = `export const siteConfig = {
  name: "${SITE_NAME}",
  description: "Konya ve Ankara'nın önde gelen gayrimenkul danışmanlık firması Zentral Gayrimenkul ile kârlı yatırımlar, güvenilir konut ve arsa fırsatları.",
  url: "${DOMAIN}",
  ogImage: "${DOMAIN}/logo.png",
  keywords: [
    "gayrimenkul", "emlak", "konya emlak", "ankara gayrimenkul",
    "yatırım", "arsa", "satılık daire", "kiralık ev", "ticari mülk",
    "konya satılık arsa", "ankara yatırım danışmanlığı"
  ],
  creator: "${SITE_NAME}",
  authors: [{ name: "${SITE_NAME}", url: "${DOMAIN}" }],
  links: {
    twitter: "https://twitter.com/zentralgayrimenkul",
  }
};
`;

fs.writeFileSync(path.join(configDir, "site.ts"), siteConfigCode, "utf8");
console.log("✅ config/site.ts dosyası oluşturuldu.");

// 2. Sayfalar ve her sayfaya ÖZEL SEO (Konya ve Ankara Odaklı Keywords) verileri
const pages = [
  {
    file: "app/layout.tsx",
    isLayout: true,
  },
  {
    file: "app/page.tsx",
    title: "Ana Sayfa",
    desc: "Zentral Gayrimenkul | Konya ve Ankara emlak ofislerimizle satılık ev, arsa yatırımı ve güvenilir gayrimenkul danışmanlığı hizmetleri sunuyoruz.",
    route: "/",
    keywords: [
      "konya gayrimenkul",
      "ankara emlak ofisi",
      "zentral gayrimenkul",
      "satılık ev konya",
      "kiralık daire ankara",
      "konya emlakçı",
      "ankara emlak danışmanlığı",
      "arsa yatırımı",
      "kârlı gayrimenkul",
    ],
  },
  {
    file: "app/kurumsal/page.tsx",
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
    file: "app/projeler/page.tsx",
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
    file: "app/yatirim/page.tsx",
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
    file: "app/medya/page.tsx",
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
    file: "app/iletisim/page.tsx",
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
    file: "app/gizlilik-politikasi/page.tsx",
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
    file: "app/kullanim-sartlari/page.tsx",
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

// Layout için ana metadata kodu (config/site'dan çeker)
const layoutMetadataCode = `
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: \`%s | \${siteConfig.name}\`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  creator: siteConfig.creator,
  authors: siteConfig.authors,
  metadataBase: new URL(siteConfig.url),

  // Hreflang ve Canonical ayarları
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "en-US": "/",
      tr: "/",
      "tr-TR": "/",
    },
  },

  // Sosyal Medya ve Paylaşım Görünümü (OpenGraph)
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.links.twitter,
  },

  // Arama Motoru Bot Kuralları
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
`;

// İç sayfalar için Canonical + SEO metadata (Keywords dahil) kodu
const getPageMetadata = (title, desc, route, keywords) => `
export const metadata: Metadata = {
  title: "${title}",
  description: "${desc}",
  keywords: ${JSON.stringify(keywords)},
  alternates: {
    canonical: "${route}",
  },
  openGraph: {
    title: "${title} | ${SITE_NAME}",
    description: "${desc}",
    url: \`${DOMAIN}${route}\`,
  },
};
`;

// Dosya içi eski metadata kalıntılarını temizleme fonksiyonu
function removeOldMetadata(content) {
  const startIndex = content.indexOf("export const metadata");
  if (startIndex === -1) return content;

  const braceStartIndex = content.indexOf("{", startIndex);
  if (braceStartIndex === -1) return content;

  let braceCount = 1;
  let endIndex = braceStartIndex + 1;

  while (braceCount > 0 && endIndex < content.length) {
    if (content[endIndex] === "{") braceCount++;
    else if (content[endIndex] === "}") braceCount--;
    endIndex++;
  }

  if (content[endIndex] === ";") endIndex++;

  return content.slice(0, startIndex) + content.slice(endIndex);
}

// Dosyanın başına gerekli importları ekleme fonksiyonu
function ensureImports(content, isLayout) {
  let prepend = "";
  if (
    !content.includes("import { Metadata }") &&
    !content.includes("import type { Metadata }")
  ) {
    prepend += `import { Metadata } from "next";\n`;
  }
  if (isLayout && !content.includes("@/config/site")) {
    prepend += `import { siteConfig } from "@/config/site";\n`;
  }
  return prepend + content;
}

// Dosyaları tarama ve işleme
pages.forEach((page) => {
  const filePath = path.join(__dirname, page.file);

  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, "utf8");

    // Varsa mevcut metadata export bloğunu güvenle uçuruyoruz
    content = removeOldMetadata(content);

    // Gerekli kütüphane/ayarları en üste ekliyoruz
    content = ensureImports(content, page.isLayout);

    // Dosyanın en altına yeni metadata bloğunu ekliyoruz
    const metadataToAdd = page.isLayout
      ? layoutMetadataCode
      : getPageMetadata(page.title, page.desc, page.route, page.keywords);

    content = content.trim() + "\n\n" + metadataToAdd;

    fs.writeFileSync(filePath, content, "utf8");
    console.log(
      `✅ ${page.file} başarıyla bölgesel (Konya & Ankara) SEO için güncellendi.`,
    );
  } else {
    console.log(`⚠️ ${page.file} bulunamadı, atlanıyor.`);
  }
});

console.log(
  "🚀 Tüm SEO, Keywords ve Canonical yapılandırmaları başarıyla tamamlandı!",
);
