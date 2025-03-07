
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2340&auto=format&fit=crop';
    img.onload = () => setIsLoading(false);
  }, []);

  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className={cn(
          "absolute inset-0 transition-all duration-1000",
          isLoading ? "scale-105 blur-lg" : "scale-100 blur-0"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent mix-blend-multiply"></div>
        <img
          src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2340&auto=format&fit=crop"
          alt="Luxury car"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative container-custom pt-48 pb-24 min-h-[90vh] flex flex-col justify-center">
        <div className="max-w-2xl animate-fade-in">
          <div className="inline-block rounded-full bg-white/10 backdrop-blur-md px-4 py-1 mb-4 text-white text-sm font-medium tracking-wide">
            Premium Automobile
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Finden Sie Ihr <span className="text-auto-blue">Traumauto</span> in der Schweiz
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
            Entdecken Sie erstklassige Fahrzeuge mit persönlicher Beratung und professioneller Abwicklung - von Anfang bis Ende.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-hover-effect bg-auto-blue text-white px-6 py-3 rounded-md font-medium text-lg flex items-center gap-2 hover:bg-auto-darkBlue transition-colors duration-300">
              Fahrzeuge entdecken
              <ArrowRight size={20} />
            </button>
            <button className="btn-hover-effect bg-white/10 text-white backdrop-blur-sm border border-white/30 px-6 py-3 rounded-md font-medium text-lg hover:bg-white/20 transition-colors duration-300">
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-fade-in"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
