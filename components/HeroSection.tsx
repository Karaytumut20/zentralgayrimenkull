// components/HeroSection.tsx

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 w-full h-full">
        {/* Lacivert Filtre (Videonun üzerinde kalarak yazıları okunur kılar) */}
        <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* DİKKAT: Videonu 'public' klasörüne at ve adını buraya yaz */}
          <source src="/Yeni klasör (2)/video/Zentralgayrimenkul.mp4" type="video/mp4" />
          
          Tarayıcınız video etiketini desteklemiyor.
        </video>
      </div>

      {/* İÇERİK */}
     
    </div>
  );
}