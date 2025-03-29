
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const bannerImages = [
  {
    url: "/smartwatch-banner1.jpg",
    alt: "Smartwatches collection",
    fallbackUrl: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1472&auto=format&fit=crop"
  },
  {
    url: "/smartwatch-banner2.jpg",
    alt: "Latest gadgets",
    fallbackUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop"
  },
  {
    url: "/smartwatch-banner3.jpg",
    alt: "Tech accessories",
    fallbackUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1528&auto=format&fit=crop"
  }
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Avanza al siguiente slide automáticamente cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === bannerImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerImages.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === bannerImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative overflow-hidden h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full">
      {/* Imágenes del banner */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {bannerImages.map((image, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = image.fallbackUrl;
                e.currentTarget.onerror = null;
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  {image.alt}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl">
                  Descubre nuestra colección exclusiva
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Botones de navegación */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full"
        onClick={goToPrevSlide}
        aria-label="Anterior"
      >
        <ChevronLeft />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full"
        onClick={goToNextSlide}
        aria-label="Siguiente"
      >
        <ChevronRight />
      </button>
      
      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
