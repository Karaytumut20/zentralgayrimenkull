// app/iletisim/page.tsx
import PageBanner from "@/components/PageBanner";
import { Phone, Mail, MapPin } from "lucide-react";

export default function IletisimPage() {
  return (
    <main>
      <PageBanner 
        title="İLETİŞİM" 
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80" 
      />

      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sol: İletişim Bilgileri */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Bize Ulaşın</h2>
              <p className="text-gray-600 mb-8">
                Yatırım fırsatları hakkında detaylı bilgi almak veya projelerimizi yerinde incelemek için bizimle iletişime geçin.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-50 p-3 rounded-sm"><MapPin className="text-yellow-600" /></div>
              <div>
                <h4 className="font-bold text-slate-900">Merkez Ofis</h4>
                <p className="text-gray-600 text-sm">Maslak Mah. Büyükdere Cad. No:123<br/>Sarıyer / İSTANBUL</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-50 p-3 rounded-sm"><Phone className="text-yellow-600" /></div>
              <div>
                <h4 className="font-bold text-slate-900">Telefon</h4>
                <p className="text-gray-600 text-sm">+90 (212) 555 00 00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-50 p-3 rounded-sm"><Mail className="text-yellow-600" /></div>
              <div>
                <h4 className="font-bold text-slate-900">E-Posta</h4>
                <p className="text-gray-600 text-sm">info@kurultay.org</p>
              </div>
            </div>
          </div>

          {/* Sağ: İletişim Formu */}
          <div className="w-full lg:w-2/3 bg-gray-50 p-8 md:p-12 rounded-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Mesaj Gönderin</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Adınız Soyadınız</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-yellow-600" placeholder="İsim Soyisim" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Telefon</label>
                  <input type="tel" className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-yellow-600" placeholder="0555..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Konu</label>
                <select className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-yellow-600 bg-white">
                  <option>Genel Bilgi</option>
                  <option>Yatırım Danışmanlığı</option>
                  <option>Proje Satış</option>
                  <option>Arsa Geliştirme</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mesajınız</label>
                <textarea rows={4} className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-yellow-600" placeholder="Mesajınızı buraya yazınız..."></textarea>
              </div>
              <button className="bg-yellow-600 text-white font-bold py-4 px-8 rounded-sm hover:bg-yellow-700 transition-colors w-full md:w-auto uppercase tracking-wider">
                Gönder
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}