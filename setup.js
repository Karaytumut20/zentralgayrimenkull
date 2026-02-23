const fs = require("fs");
const path = require("path");

// Domain adresinizi buraya girin
const DOMAIN = "https://www.zentralgayrimenkul.com";

const publicDir = path.join(__dirname, "public");
const date = new Date().toISOString().split("T")[0];

// Projenizdeki mevcut rotalar
const routes = [
  { path: "", priority: "1.0", changefreq: "daily" },
  { path: "kurumsal", priority: "0.8", changefreq: "monthly" },
  { path: "projeler", priority: "0.9", changefreq: "weekly" },
  { path: "yatirim", priority: "0.8", changefreq: "monthly" },
  { path: "medya", priority: "0.7", changefreq: "weekly" },
  { path: "iletisim", priority: "0.8", changefreq: "monthly" },
  { path: "gizlilik-politikasi", priority: "0.5", changefreq: "yearly" },
  { path: "kullanim-sartlari", priority: "0.5", changefreq: "yearly" },
];

// Sitemap içeriğini oluştur
const sitemapUrls = routes
  .map(
    (route) => `
  <url>
    <loc>${DOMAIN}/${route.path}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join("");

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>`;

// Robots.txt içeriğini oluştur
const robotsContent = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;

// Public klasörü yoksa oluştur
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Dosyaları yaz
try {
  fs.writeFileSync(
    path.join(publicDir, "sitemap.xml"),
    sitemapContent.trim(),
    "utf8",
  );
  console.log(
    "✅ sitemap.xml başarıyla oluşturuldu! (Konum: public/sitemap.xml)",
  );

  fs.writeFileSync(
    path.join(publicDir, "robots.txt"),
    robotsContent.trim(),
    "utf8",
  );
  console.log(
    "✅ robots.txt başarıyla oluşturuldu! (Konum: public/robots.txt)",
  );
} catch (error) {
  console.error("❌ Dosyalar oluşturulurken bir hata meydana geldi:", error);
}
