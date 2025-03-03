
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-auto-darkGray text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-white font-bold text-xl">AutoExport</span>
              <span className="text-auto-lightGray font-medium text-xl">Schweiz</span>
            </div>
            <p className="text-auto-lightGray mb-4">
              Ihr vertrauenswürdiger Partner für Premium-Fahrzeuge in der Schweiz seit 2005.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-auto-blue" />
                <span>+41 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-auto-blue" />
                <span>info@autoexport-schweiz.ch</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-auto-blue" />
                <span>Musterstrasse 123<br />8000 Zürich, Schweiz</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/vehicles" className="text-auto-lightGray hover:text-white transition-colors">
                  Fahrzeuge
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-auto-lightGray hover:text-white transition-colors">
                  Dienstleistungen
                </Link>
              </li>
              <li>
                <Link to="/financing" className="text-auto-lightGray hover:text-white transition-colors">
                  Finanzierung
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-auto-lightGray hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-auto-lightGray hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Öffnungszeiten</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-auto-lightGray">Montag - Freitag</span>
                <span>09:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-auto-lightGray">Samstag</span>
                <span>10:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-auto-lightGray">Sonntag</span>
                <span>Geschlossen</span>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-2">Folgen Sie uns</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-auto-lightGray hover:text-auto-blue transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-auto-lightGray hover:text-auto-blue transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-auto-lightGray hover:text-auto-blue transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-auto-lightGray mb-4">
              Abonnieren Sie unseren Newsletter, um die neuesten Angebote und Updates zu erhalten.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-auto-lightGray focus:outline-none focus:ring-1 focus:ring-auto-blue"
              />
              <button
                type="submit"
                className="w-full p-2 bg-auto-blue text-white font-medium rounded-md hover:bg-auto-darkBlue transition-colors"
              >
                Abonnieren
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-auto-lightGray text-sm">
            &copy; {currentYear} AutoExport Schweiz. Alle Rechte vorbehalten.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm">
            <Link to="/privacy" className="text-auto-lightGray hover:text-white transition-colors">
              Datenschutz
            </Link>
            <Link to="/terms" className="text-auto-lightGray hover:text-white transition-colors">
              AGB
            </Link>
            <Link to="/imprint" className="text-auto-lightGray hover:text-white transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
