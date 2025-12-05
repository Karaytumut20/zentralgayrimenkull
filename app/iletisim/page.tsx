// app/iletisim/page.tsx
import PageBanner from "@/components/PageBanner";
import { Phone, Mail, MapPin, Navigation } from "lucide-react";

export default function IletisimPage() {
  // Konya Meram Koordinatları (Temsili Merkez)
  // Bu link haritaya tıklandığında açılacak olan Google Maps linkidir.
  const googleMapsLink = "https://www.google.com/maps/search/?api=1&query=Meram+Yeni+Yol+Caddesi+No:88+Meram+Konya";
  
  // Bu src ise sayfada gömülü (embed) olarak duran harita görselidir.
  const mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.182478440294!2d32.4786!3d37.8667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0859a6c9d0a79%3A0x6c6d0e6a6d6d0d0!2sMeram%20Yeni%20Yol%2C%20Konya!5e0!3m2!1str!2str!4v1625561234567!5m2!1str!2str";

  return (
    <main className="bg-white min-h-screen">
      <PageBanner 
        title="İLETİŞİM" 
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80" 
      />

      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* SOL: İLETİŞİM BİLGİLERİ (Premium Stil) */}
          <div className="w-full lg:w-1/3 space-y-10">
            <div>
              <h2 className="text-4xl font-serif text-[#051328] mb-6">Bize Ulaşın</h2>
              <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
              <p className="text-gray-500 text-lg leading-relaxed">
                Yatırım fırsatları hakkında detaylı bilgi almak veya projelerimizi yerinde incelemek için ofisimizi ziyaret edin veya bize ulaşın.
              </p>
            </div>

            <div className="space-y-8">
              {/* ADRES KUTUSU (Tıklanabilir) */}
              <a 
                href={googleMapsLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-6 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-[#051328] text-[#D4AF37] flex items-center justify-center rounded-sm shadow-xl group-hover:bg-[#D4AF37] group-hover:text-[#051328] transition-all duration-300">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-[#051328] text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">Merkez Ofis</h4>
                  <p className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors">Meram Yeni Yol Cad. No:88<br/>Meram / KONYA</p>
                </div>
              </a>

              {/* TELEFON KUTUSU (Tıklanabilir - Arama Yapar) */}
              <a 
                href="tel:+903325550000" 
                className="flex items-start gap-6 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-[#051328] text-[#D4AF37] flex items-center justify-center rounded-sm shadow-xl group-hover:bg-[#D4AF37] group-hover:text-[#051328] transition-all duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-[#051328] text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">Telefon</h4>
                  <p className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors">+90 (332) 555 00 00</p>
                  <p className="text-gray-400 text-sm">Hafta içi 09:00 - 18:00</p>
                </div>
              </a>

              {/* E-POSTA KUTUSU (Tıklanabilir - Mail Gönderir) */}
              <a 
                href="mailto:zentralgayrimenkul@gmail.com" 
                className="flex items-start gap-6 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-[#051328] text-[#D4AF37] flex items-center justify-center rounded-sm shadow-xl group-hover:bg-[#D4AF37] group-hover:text-[#051328] transition-all duration-300">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-[#051328] text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">E-Posta</h4>
                  <p className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors">zentralgayrimenkul@gmail.com</p>
                  <p className="text-gray-400 text-sm">7/24 Bize yazabilirsiniz</p>
                </div>
              </a>
            </div>
          </div>

          {/* SAĞ: LÜKS HARİTA TASARIMI (Tıklanabilir Alan) */}
          <div className="w-full lg:w-2/3 relative h-[600px]">
            {/* Harita Çerçevesi */}
            <div className="absolute -inset-4 border-2 border-[#D4AF37]/20 rounded-sm z-0"></div>
            
            <a 
              href={googleMapsLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative h-full w-full bg-[#051328] p-2 shadow-2xl rounded-sm z-10 overflow-hidden group cursor-pointer"
            >
              {/* Google Maps Iframe */}
              {/* pointer-events-none ekleyerek harita üzerindeki kaydırmayı engelliyoruz ki tıklama algılansın */}
              <div className="w-full h-full relative pointer-events-none">
                <iframe 
                    src={mapEmbedSrc}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(85%)" }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="group-hover:filter-none transition-all duration-700"
                ></iframe>
              </div>

              {/* Üstüne Binen Bilgi Kutusu */}
              <div className="absolute bottom-8 left-8 bg-white p-6 shadow-xl border-l-4 border-[#D4AF37] max-w-xs animate-in slide-in-from-bottom-10 duration-700 group-hover:scale-105 transition-transform">
                 <h5 className="font-serif font-bold text-[#051328] text-xl mb-2">Konya / Meram</h5>
                 <p className="text-gray-500 text-sm mb-4">Şehrin en prestijli lokasyonunda, yeşilin ve tarihin kalbindeyiz.</p>
                 <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-xs tracking-widest uppercase hover:text-[#051328] transition-colors">
                   Yol Tarifi Al <Navigation size={14} />
                 </div>
              </div>
              
              {/* Hover Overlay (Tıklanabilir olduğunu hissettirmek için) */}
              <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}