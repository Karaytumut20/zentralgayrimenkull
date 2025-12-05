// app/iletisim/page.tsx
import PageBanner from "@/components/PageBanner";
import { Phone, Mail, MapPin, Navigation, User, Smartphone } from "lucide-react";

export default function IletisimPage() {
  // --- KONYA DATALARI ---
  const konyaMapLink = "https://maps.google.com/?q=Meram+Yeniyol+Konya"; // Harita Linki
  const konyaEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.187321685764!2d32.493155!3d37.871578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0859a58957823%3A0x2406781234567890!2sKonya!5e0!3m2!1str!2str!4v1234567890"; // Embed Linki

  // --- ANKARA DATALARI ---
  const ankaraMapLink = "https://maps.google.com/?q=Ehlibeyt+Mahallesi+Ceyhun+Atuf+Kansu+Caddesi+No+100A+Cankaya+Ankara"; 
  const ankaraEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.0123456789!2d32.812345!3d39.901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f1234567890%3A0x1234567890abcdef!2sCankaya+Ankara!5e0!3m2!1str!2str!4v0987654321";

  return (
    <main className="bg-white min-h-screen">
      <PageBanner 
        title="İLETİŞİM" 
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80" 
      />

      <section className="py-20 container mx-auto px-6">
        
        {/* Üst Başlık Alanı */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif text-[#051328] mb-6">Ofislerimiz</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-gray-500 text-lg">
            Yatırım fırsatları hakkında detaylı bilgi almak için size en yakın ofisimizi ziyaret edebilir veya uzmanlarımızla iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="space-y-32"> {/* Ofisler arası boşluk */}

          {/* ==================== KONYA MERKEZ OFİS ==================== */}
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* SOL: Bilgiler */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <span className="text-[#D4AF37] font-bold tracking-widest text-sm uppercase">Genel Merkez</span>
                <h3 className="text-3xl font-serif text-[#051328] mt-2 mb-4">KONYA OFİS</h3>
                <p className="text-gray-500 leading-relaxed">
                  Meram'ın kalbinde, prestijli projelerimizi yerinde incelemeniz için sizleri bekliyoruz.
                </p>
              </div>

              <div className="space-y-6">
                {/* Adres */}
                <ContactItem 
                  icon={<MapPin size={24} />}
                  title="Adres"
                  lines={["Meram Yeni Yol Cad. No:88", "Meram / KONYA"]}
                  link={konyaMapLink}
                />
                
                {/* Telefon (GÜNCELLENDİ) */}
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-[#051328] text-[#D4AF37] flex items-center justify-center rounded-sm shadow-lg group-hover:bg-[#D4AF37] group-hover:text-[#051328] transition-all duration-300 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#051328] text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">Telefonlar</h4>
                    {/* İş Tel */}
                    <a href="tel:+903322338042" className="block text-gray-600 font-medium hover:text-[#051328] transition-colors">
                      0332 233 80 42 <span className="text-gray-400 text-sm font-normal">(Ofis)</span>
                    </a>
                    {/* İş Cep */}
                    <a href="tel:+905013338042" className="block text-gray-600 font-medium hover:text-[#051328] transition-colors mt-1">
                      0501 333 80 42 <span className="text-gray-400 text-sm font-normal">(Mobil)</span>
                    </a>
                  </div>
                </div>

                {/* Mail */}
                <ContactItem 
                  icon={<Mail size={24} />}
                  title="E-Posta"
                  lines={["zentralgayrimenkul@gmail.com", "7/24 Bize Ulaşın"]}
                  link="mailto:zentralgayrimenkul@gmail.com"
                />
              </div>
            </div>

            {/* SAĞ: Harita */}
            <MapBox 
              embedSrc={konyaEmbedSrc} 
              link={konyaMapLink} 
              locationName="Konya / Meram"
            />
          </div>


          {/* ==================== ANKARA ŞUBE ==================== */}
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center border-t border-gray-100 pt-20">
            
            {/* SOL (Normalde Sağ): Bilgiler */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <span className="text-[#D4AF37] font-bold tracking-widest text-sm uppercase">Şube</span>
                <h3 className="text-3xl font-serif text-[#051328] mt-2 mb-4">ANKARA OFİS</h3>
                <p className="text-gray-500 leading-relaxed">
                  Başkent'teki yatırımlarınız ve projelerimiz için Çankaya ofisimizde hizmetinizdeyiz.
                </p>
              </div>

              <div className="space-y-6">
                {/* Adres */}
                <ContactItem 
                  icon={<MapPin size={24} />}
                  title="Adres"
                  lines={["Ehlibeyt Mah. Ceyhun Atuf Kansu Cad.", "No: 100A/1238 Çankaya / ANKARA"]}
                  link={ankaraMapLink}
                />
                
                {/* Yetkili Kişi & Telefon */}
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-[#051328] text-[#D4AF37] flex items-center justify-center rounded-sm shadow-lg group-hover:bg-[#D4AF37] group-hover:text-[#051328] transition-all duration-300 flex-shrink-0">
                    <User size={24} />
                  </div>
                  <div>
                     <h4 className="font-bold text-[#051328] text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">Ahmet OKKALI</h4>
                     <a href="tel:+905323991663" className="block text-gray-600 font-medium hover:text-[#051328] transition-colors">
                        0532 399 1663
                     </a>
                  </div>
                </div>

                {/* Mail */}
                <ContactItem 
                  icon={<Mail size={24} />}
                  title="E-Posta"
                  lines={["Zentralankara@gmail.com", "Ankara ofisi için"]}
                  link="mailto:Zentralankara@gmail.com"
                />
              </div>
            </div>

            {/* SAĞ (Normalde Sol): Harita */}
            <MapBox 
              embedSrc={ankaraEmbedSrc} 
              link={ankaraMapLink} 
              locationName="Ankara / Çankaya"
            />
          </div>

        </div>
      </section>
    </main>
  );
}

// --- YARDIMCI COMPONENTLER ---

function ContactItem({ icon, title, lines, link }: { icon: any, title: string, lines: string[], link: string }) {
  return (
    <a 
      href={link} 
      target={link.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="flex items-start gap-4 group cursor-pointer"
    >
      <div className="w-12 h-12 bg-[#051328] text-[#D4AF37] flex items-center justify-center rounded-sm shadow-lg group-hover:bg-[#D4AF37] group-hover:text-[#051328] transition-all duration-300 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-[#051328] text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">{title}</h4>
        {lines.map((line, index) => (
          <p key={index} className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors text-sm lg:text-base">
            {line}
          </p>
        ))}
      </div>
    </a>
  );
}

function MapBox({ embedSrc, link, locationName }: { embedSrc: string, link: string, locationName: string }) {
  return (
    <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px]">
      <div className="absolute -inset-3 border-2 border-[#D4AF37]/20 rounded-sm z-0"></div>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block relative h-full w-full bg-[#051328] p-1 shadow-2xl rounded-sm z-10 overflow-hidden group cursor-pointer"
      >
        <div className="w-full h-full relative pointer-events-none">
          <iframe 
              src={embedSrc}
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(85%)" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="group-hover:filter-none transition-all duration-700"
          ></iframe>
        </div>
        
        <div className="absolute bottom-6 left-6 bg-white p-4 shadow-xl border-l-4 border-[#D4AF37] max-w-xs animate-in slide-in-from-bottom-5 duration-700 group-hover:scale-105 transition-transform">
            <h5 className="font-serif font-bold text-[#051328] text-lg mb-1">{locationName}</h5>
            <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-xs tracking-widest uppercase hover:text-[#051328] transition-colors">
              Yol Tarifi <Navigation size={12} />
            </div>
        </div>

        <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </a>
    </div>
  );
}