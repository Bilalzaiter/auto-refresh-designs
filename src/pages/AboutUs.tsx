
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building, Award, Users, Handshake, MapPin } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const AboutUs = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Über uns | AutoExport Schweiz - Auto-Ankauf Spezialist</title>
        <meta name="description" content="Erfahren Sie mehr über AutoExport Schweiz - Ihr vertrauenswürdiger Partner für den Auto-Ankauf in der Schweiz seit über 10 Jahren. Zuverlässig, fair und schnell." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow page-transition">
          <PageHeader
            title="Über AutoExport Schweiz"
            description="Seit über 10 Jahren Ihr zuverlässiger Partner für den Auto-Ankauf"
            imageSrc="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop"
          />
          
          <section className="py-16">
            <div className="container-custom">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-auto-darkGray mb-6">Unsere Geschichte</h2>
                  <p className="text-auto-mediumGray mb-4">
                    AutoExport Schweiz wurde 2013 mit einer klaren Vision gegründet: Den Autoverkauf für Privatpersonen so einfach und fair wie möglich zu gestalten. Was als kleines Familienunternehmen begann, hat sich zu einem der führenden Auto-Ankauf Spezialisten in der Schweiz entwickelt.
                  </p>
                  <p className="text-auto-mediumGray mb-4">
                    Unser Erfolg basiert auf einem einfachen Prinzip: Wir bieten faire Preise, einen transparenten Prozess und einen erstklassigen Service. Dieser Ansatz hat uns erlaubt, über 50,000 zufriedene Kunden zu betreuen und mehr als 100,000 Fahrzeuge erfolgreich anzukaufen und weiterzuvermitteln.
                  </p>
                  <p className="text-auto-mediumGray">
                    Heute sind wir stolz darauf, ein Team von über 25 Experten zu beschäftigen, die alle dasselbe Ziel verfolgen: Ihnen den bestmöglichen Service beim Verkauf Ihres Fahrzeugs zu bieten.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -top-4 -bottom-4 -left-4 -right-4 bg-auto-blue/5 rounded-lg"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1974&auto=format&fit=crop" 
                    alt="AutoExport Schweiz Büro" 
                    className="rounded-lg w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-auto-gray">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-auto-darkGray mb-12 text-center">Warum wir anders sind</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Building,
                    title: "Etabliertes Unternehmen",
                    description: "Seit über 10 Jahren am Markt mit nachweislicher Erfolgsgeschichte und tausenden zufriedenen Kunden."
                  },
                  {
                    icon: Award,
                    title: "Bestpreise garantiert",
                    description: "Durch unsere internationalen Netzwerke können wir höhere Preise als viele Mitbewerber anbieten."
                  },
                  {
                    icon: Users,
                    title: "Experten-Team",
                    description: "Unser Team besteht aus erfahrenen Kfz-Fachleuten, die jedes Fahrzeug professionell bewerten."
                  },
                  {
                    icon: Handshake,
                    title: "Persönlicher Service",
                    description: "Wir betreuen Sie individuell und persönlich - keine anonymen Call-Center oder Chatbots."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-auto-blue/10 rounded-full flex items-center justify-center mb-4">
                      <item.icon className="text-auto-blue" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-auto-darkGray mb-2">{item.title}</h3>
                    <p className="text-auto-mediumGray">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="py-16">
            <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-auto-darkGray mb-4">Unsere Standorte</h2>
                <p className="text-auto-mediumGray">
                  Mit Büros in mehreren Schweizer Städten sind wir immer in Ihrer Nähe. Dank unserem schweizweiten Netzwerk können wir Ihr Fahrzeug direkt bei Ihnen zuhause oder an Ihrem Wunschort abholen.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    city: "Zürich",
                    address: "Musterstrasse 123",
                    postal: "8000 Zürich",
                    phone: "+41 44 123 45 67"
                  },
                  {
                    city: "Bern",
                    address: "Beispielweg 45",
                    postal: "3000 Bern",
                    phone: "+41 31 987 65 43"
                  },
                  {
                    city: "Basel",
                    address: "Testplatz 67",
                    postal: "4000 Basel",
                    phone: "+41 61 234 56 78"
                  }
                ].map((location, index) => (
                  <div key={index} className="border border-auto-lightGray rounded-lg p-6 hover:border-auto-blue transition-colors duration-300">
                    <div className="flex items-start mb-4">
                      <MapPin className="text-auto-blue mr-2 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h3 className="text-xl font-bold text-auto-darkGray">{location.city}</h3>
                        <p className="text-auto-mediumGray">{location.address}</p>
                        <p className="text-auto-mediumGray">{location.postal}</p>
                        <p className="text-auto-blue font-medium mt-2">{location.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
