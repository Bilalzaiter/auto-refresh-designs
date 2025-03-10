
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { title: 'Auto verkaufen', href: '/' },
  { title: 'So funktioniert\'s', href: '/how-it-works' },
  { title: 'Über uns', href: '/about' },
  { title: 'FAQ', href: '/faq' },
  { title: 'Kontakt', href: '/contact' },
];

export const Navbar = () => {
  const location = useLocation();
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

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
            <span className={cn(
              "font-bold text-2xl tracking-tight transition-colors",
              isScrolled || mobileMenuOpen ? "text-auto-blue" : "text-white"
            )}>
              AutoExport
            </span>
            <span className={cn(
              "font-medium text-2xl transition-colors",
              isScrolled || mobileMenuOpen ? "text-auto-darkGray" : "text-white"
            )}>
              Schweiz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors duration-200",
                  location.pathname === item.href 
                    ? "text-auto-blue" 
                    : isScrolled 
                      ? "text-auto-darkGray hover:text-auto-blue" 
                      : "text-white hover:text-white/80"
                )}
              >
                {item.title}
              </Link>
            ))}
            <button className={cn(
              "ml-2 p-2 rounded-full transition-colors",
              isScrolled 
                ? "bg-auto-lightGray text-auto-darkGray hover:bg-auto-gray" 
                : "bg-white/20 text-white hover:bg-white/30"
            )}>
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={cn(
              "md:hidden p-2 transition-colors",
              isScrolled ? "text-auto-darkGray" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
        {/* Close button positioned absolutely at the top */}
        <button 
          className="absolute top-4 right-4 p-2 rounded-full bg-auto-lightGray text-auto-darkGray hover:bg-auto-gray transition-colors"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        
        <nav className="container-custom flex flex-col space-y-4 p-4">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className={cn(
                "px-4 py-3 text-lg font-medium rounded-md transition-colors",
                location.pathname === item.href
                  ? "text-auto-blue bg-auto-lightGray"
                  : "text-auto-darkGray hover:text-auto-blue hover:bg-auto-lightGray"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <div className="relative mt-4 px-4">
            <input
              type="text"
              placeholder="Nach Marke oder Modell suchen..."
              className="w-full p-3 pr-10 rounded-md border border-auto-lightGray focus:outline-none focus:ring-1 focus:ring-auto-blue"
            />
            <Search size={20} className="absolute right-8 top-1/2 transform -translate-y-1/2 text-auto-mediumGray" />
          </div>
        </nav>
      </div>
    </header>
  );
};
