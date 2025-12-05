// components/HeroSection.tsx

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* ... diğer kodlar ... */}
      
      <div className="absolute inset-0 w-full h-full">
         <div className="absolute inset-0 bg-slate-900/30 z-10"></div>
        
        <video
          suppressHydrationWarning={true}  // <-- BU SATIRI EKLE
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Yeni klasör (2)/video/Zentral Gayrimenkul.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ... */}
    </div>
  );
}