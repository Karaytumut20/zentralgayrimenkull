// components/PageBanner.tsx
interface PageBannerProps {
  title: string;
  image: string;
}

export default function PageBanner({ title, image }: PageBannerProps) {
  return (
    <div className="relative h-[30vh] lg:h-[40vh] min-h-[250px] lg:min-h-[300px] w-full flex items-center justify-center overflow-hidden">
      {/* Arkaplan Resmi */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div> {/* Karartma */}
      </div>

      {/* Başlık */}
      <div className="relative z-10 text-center animate-fade-in-up px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-2 shadow-black drop-shadow-lg">
          {title}
        </h1>
        <div className="w-16 lg:w-24 h-1 bg-yellow-600 mx-auto"></div> {/* Altın Çizgi */}
      </div>
    </div>
  );
}