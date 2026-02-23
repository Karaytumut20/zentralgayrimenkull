const fs = require("fs");
const path = require("path");

// Kontrol edilecek sayfaların listesi
const pages = [
  "app/kurumsal/page.tsx",
  "app/projeler/page.tsx",
  "app/yatirim/page.tsx",
  "app/medya/page.tsx",
  "app/iletisim/page.tsx",
  "app/gizlilik-politikasi/page.tsx",
  "app/kullanim-sartlari/page.tsx",
  "app/page.tsx",
];

pages.forEach((page) => {
  const filePath = path.join(__dirname, page);

  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, "utf8");

    // Satır başındaki boş parantezleri (); veya () temizle
    content = content.replace(/^\s*\(\)\s*;/gm, "");
    content = content.replace(/^\s*\(\)\s*/gm, "");

    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Temizlendi: ${page}`);
  } else {
    console.log(`⚠️ Bulunamadı: ${page}`);
  }
});

console.log(
  "🚀 Boş parantez hatası (Parenthesized expression cannot be empty) başarıyla çözüldü!",
);
