
import { ArrowRight, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-12 bg-auto-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="smallGrid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
            <pattern
              id="grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <rect width="100" height="100" fill="url(#smallGrid)" />
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">Bereit für Ihr neues Fahrzeug?</h2>
            <p className="text-white/90 text-lg mb-6">
              Kontaktieren Sie uns noch heute für eine persönliche Beratung und ein unverbindliches Angebot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-hover-effect bg-white text-auto-blue px-6 py-3 rounded-md font-medium text-lg flex items-center gap-2 hover:bg-opacity-90 transition-colors">
                Kontakt aufnehmen
                <ArrowRight size={20} />
              </button>
              <a 
                href="tel:+41123456789" 
                className="inline-flex items-center gap-2 text-white text-lg font-medium"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                +41 123 456 789
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop"
              alt="Car showroom"
              className="rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
