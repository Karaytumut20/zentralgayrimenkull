const fs = require("fs");
const path = require("path");

// Yeni eklenecek harita (Google Maps İşletme) linkleri
const newKonyaLink = "https://maps.app.goo.gl/u1nSimYFRpu4MFjB7";
const newAnkaraLink = "https://maps.app.goo.gl/2Bpn2eGKkEHqT82T6";

// Güncellenecek hedef dosyalar ve değişken kuralları
const filesToUpdate = [
  {
    path: "app/iletisim/page.tsx",
    replacements: [
      {
        regex: /(const\s+konyaMapLink\s*=\s*[\r\n\s]*)["'][^"']*["']/g,
        replacement: `$1"${newKonyaLink}"`,
      },
      {
        regex: /(const\s+ankaraMapLink\s*=\s*[\r\n\s]*)["'][^"']*["']/g,
        replacement: `$1"${newAnkaraLink}"`,
      },
    ],
  },
  {
    path: "components/Footer.tsx",
    replacements: [
      {
        regex: /(const\s+mapLinkKonya\s*=\s*[\r\n\s]*)["'][^"']*["']/g,
        replacement: `$1"${newKonyaLink}"`,
      },
      {
        regex: /(const\s+mapLinkAnkara\s*=\s*[\r\n\s]*)["'][^"']*["']/g,
        replacement: `$1"${newAnkaraLink}"`,
      },
    ],
  },
];

// Dosyaları sırayla kontrol et ve güncelle
filesToUpdate.forEach((fileInfo) => {
  const filePath = path.join(__dirname, fileInfo.path);

  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, "utf8");

    // İlgili dosyadaki linkleri regex ile bul ve değiştir
    fileInfo.replacements.forEach((rule) => {
      content = content.replace(rule.regex, rule.replacement);
    });

    // Değişiklikleri dosyaya kaydet
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Harita linkleri başarıyla güncellendi: ${fileInfo.path}`);
  } else {
    console.log(`⚠️ Dosya bulunamadı: ${fileInfo.path}`);
  }
});

console.log("🚀 Tüm harita linki güncelleme işlemleri eksiksiz tamamlandı!");
