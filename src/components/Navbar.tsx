
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { title: 'Fahrzeuge', href: '/vehicles' },
  { title: 'Kaufen', href: '/buy' },
  { title: 'Verkaufen', href: '/sell' },
  { title: 'Finanzierung', href: '/finance' },
  { title: 'Über uns', href: '/about' },
  { title: 'Kontakt', href: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' 
        : 'bg-transparent py-4'
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
          >
            <span className="text-auto-blue font-bold text-2xl tracking-tight">
              AutoExport
            </span>
            <span className="text-auto-darkGray font-medium text-2xl">Schweiz</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="relative px-3 py-2 text-sm font-medium text-auto-darkGray hover:text-auto-blue transition-colors duration-200"
              >
                {item.title}
              </Link>
            ))}
            <button className="ml-2 p-2 rounded-full bg-auto-lightGray text-auto-darkGray hover:bg-auto-gray transition-colors">
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-auto-darkGray" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out pt-20",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container-custom flex flex-col space-y-4 p-4">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="px-4 py-3 text-lg font-medium text-auto-darkGray hover:text-auto-blue hover:bg-auto-lightGray rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <div className="relative mt-4 px-4">
            <input
              type="text"
              placeholder="Fahrzeug suchen..."
              className="w-full p-3 pr-10 rounded-md border border-auto-lightGray focus:outline-none focus:ring-1 focus:ring-auto-blue"
            />
            <Search size={20} className="absolute right-8 top-1/2 transform -translate-y-1/2 text-auto-mediumGray" />
          </div>
        </nav>
      </div>
    </header>
  );
};
