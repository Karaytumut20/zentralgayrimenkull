const fs = require("fs");
const path = require("path");

const targetFile = "components/FloatingSocials.tsx";
const filePath = path.join(__dirname, targetFile);

if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, "utf8");

  // Değiştirilecek eski sade yapı
  const oldSectionRegex =
    /<div className="p-4 space-y-4">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*\)\}/;

  // Yeni, daha belirgin ve şık yapı
  const newSection = `<div className="p-5 space-y-6 bg-gray-50">
              <div>
                <div className="flex items-center gap-2 mb-4">
                   <div className="w-6 h-1 bg-blue-600 rounded-full"></div>
                   <h4 className="text-sm font-black text-[#051328] tracking-widest uppercase">KONYA</h4>
                </div>
                <a href={\`tel:\${phones.konyaOffice.replace(/ /g, "")}\`} className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-2xl bg-white hover:border-blue-500 hover:shadow-lg transition-all mb-3 group">
                  <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-blue-500 transition-colors"><Building2 size={24} className="text-blue-600 group-hover:text-white transition-colors" /></div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase mb-0.5 tracking-wider">{lang === 'tr' ? 'Sabit Hat' : 'Office Line'}</p>
                    <p className="font-black text-xl text-[#051328] tracking-wide group-hover:text-blue-600 transition-colors">{phones.konyaOffice}</p>
                  </div>
                </a>
                <a href={\`tel:\${phones.konyaMobile.replace(/ /g, "")}\`} className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-2xl bg-white hover:border-yellow-500 hover:shadow-lg transition-all group">
                  <div className="bg-yellow-50 p-3 rounded-xl group-hover:bg-yellow-500 transition-colors"><Smartphone size={24} className="text-yellow-600 group-hover:text-white transition-colors" /></div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase mb-0.5 tracking-wider">{lang === 'tr' ? 'Mobil Hat' : 'Mobile Line'}</p>
                    <p className="font-black text-xl text-[#051328] tracking-wide group-hover:text-yellow-600 transition-colors">{phones.konyaMobile}</p>
                  </div>
                </a>
              </div>
              <div className="pt-2">
                <div className="flex items-center gap-2 mb-4">
                   <div className="w-6 h-1 bg-red-600 rounded-full"></div>
                   <h4 className="text-sm font-black text-[#051328] tracking-widest uppercase">ANKARA</h4>
                </div>
                <a href={\`tel:\${phones.ankaraMobile.replace(/ /g, "")}\`} className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-2xl bg-white hover:border-red-500 hover:shadow-lg transition-all group">
                  <div className="bg-red-50 p-3 rounded-xl group-hover:bg-red-500 transition-colors"><User size={24} className="text-red-600 group-hover:text-white transition-colors" /></div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase mb-0.5 tracking-wider">{lang === 'tr' ? 'Ahmet Okkalı' : 'Ahmet Okkali'}</p>
                    <p className="font-black text-xl text-[#051328] tracking-wide group-hover:text-red-600 transition-colors">{phones.ankaraMobile}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}`;

  // Değişimi uygula
  if (oldSectionRegex.test(content)) {
    content = content.replace(oldSectionRegex, newSection);
    fs.writeFileSync(filePath, content, "utf8");
    console.log(
      `✅ Arama Pop-up arayüzü başarıyla daha belirgin hale getirildi: ${targetFile}`,
    );
  } else {
    console.log(
      `⚠️ Değiştirilecek bölüm bulunamadı. Lütfen dosyayı kontrol edin.`,
    );
  }
} else {
  console.log(`⚠️ Dosya bulunamadı: ${targetFile}`);
}
