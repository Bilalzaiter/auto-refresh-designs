
import { ArrowRight, Phone, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <h2 className="text-3xl font-bold mb-4">Bereit, Ihr Auto zu verkaufen?</h2>
            <p className="text-white/90 text-lg mb-6">
              Kontaktieren Sie uns jetzt und erhalten Sie in wenigen Minuten ein kostenloses Angebot für Ihr Fahrzeug!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/how-it-works" 
                className="btn-hover-effect bg-white text-auto-blue px-6 py-3 rounded-md font-medium text-lg flex items-center gap-2 hover:bg-opacity-90 transition-colors"
              >
                Jetzt Auto bewerten
                <ArrowRight size={20} />
              </Link>
              <a 
                href="tel:+41XXXXXXXXX" 
                className="inline-flex items-center gap-2 text-white text-lg font-medium"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                +41 XX XXX XX XX
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <ThumbsUp size={24} className="text-white" />
                <h3 className="text-xl font-bold text-white">Zufriedene Kunden</h3>
              </div>
              <blockquote className="italic text-white/90 mb-4">
                "Schnell, unkompliziert und zu einem fairen Preis! AutoExport Schweiz hat mein Auto innerhalb eines Tages übernommen und direkt das Geld überwiesen. Sehr professionell!"
              </blockquote>
              <div className="text-right text-white/80">
                - Michael S. aus Zürich
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
