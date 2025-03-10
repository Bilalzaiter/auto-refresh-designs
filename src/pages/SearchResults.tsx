
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Navbar } from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import { Search } from 'lucide-react';
import CTASection from '@/components/CTASection';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [isLoading, setIsLoading] = useState(false);
  
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Suchergebnisse für "{query}" | AutoExport Schweiz</title>
        <meta name="description" content={`Suchergebnisse für ${query}. Finden Sie Informationen zum Autoverkauf und Ankauf bei AutoExport Schweiz.`} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow page-transition">
          <PageHeader 
            title={`Suchergebnisse für "${query}"`}
            description="Hier finden Sie alle relevanten Informationen zu Ihrer Suche"
            imageSrc="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=2340&auto=format&fit=crop"
          />
          
          <div className="container-custom py-16">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Search size={24} className="text-auto-blue" />
                <h2 className="text-2xl font-bold text-auto-darkGray">Informationen zu "{query}"</h2>
              </div>
              
              <div className="mb-8">
                <p className="text-auto-mediumGray mb-4">
                  Wir bieten umfassende Informationen und Dienstleistungen rund um den Autoverkauf in der Schweiz. 
                  Hier finden Sie alles, was Sie über den Verkauf Ihres Fahrzeugs wissen müssen.
                </p>
                <p className="text-auto-mediumGray">
                  Haben Sie spezifische Fragen zu Ihrer Marke oder Ihrem Modell? 
                  Kontaktieren Sie uns direkt für eine persönliche Beratung.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-auto-lightGray rounded-md p-5 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-auto-darkGray mb-2">Auto bewerten lassen</h3>
                  <p className="text-auto-mediumGray mb-4">
                    Erhalten Sie eine kostenlose und unverbindliche Bewertung Ihres Fahrzeugs durch unsere Experten.
                  </p>
                  <a 
                    href="/how-it-works" 
                    className="text-auto-blue font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Mehr erfahren
                  </a>
                </div>
                
                <div className="border border-auto-lightGray rounded-md p-5 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-auto-darkGray mb-2">Kontakt aufnehmen</h3>
                  <p className="text-auto-mediumGray mb-4">
                    Sprechen Sie direkt mit unseren Ankaufsexperten für ein persönliches Angebot.
                  </p>
                  <a 
                    href="/contact" 
                    className="text-auto-blue font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Jetzt kontaktieren
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SearchResults;
