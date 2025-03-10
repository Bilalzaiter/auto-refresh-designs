
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PhoneCall, ClipboardCheck, CarFront, Banknote, CheckCircle, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const HowItWorks = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>So funktioniert's | AutoExport Schweiz - Auto-Ankauf leicht gemacht</title>
        <meta name="description" content="Erfahren Sie, wie einfach der Auto-Verkauf mit AutoExport Schweiz funktioniert. Schnell, unkompliziert und zu Bestpreisen. Verkaufen Sie Ihr Auto in 4 einfachen Schritten." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow page-transition">
          <PageHeader
            title="So funktioniert der Auto-Ankauf"
            description="In nur 4 einfachen Schritten verkaufen Sie Ihr Auto schnell und unkompliziert"
            imageSrc="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1974&auto=format&fit=crop"
          />
          
          <section className="py-16">
            <div className="container-custom">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: PhoneCall,
                    title: '1. Anfrage stellen',
                    description: 'Kontaktieren Sie uns per Telefon oder Formular mit den wichtigsten Informationen zu Ihrem Fahrzeug.'
                  },
                  {
                    icon: ClipboardCheck,
                    title: '2. Bewertung erhalten',
                    description: 'Wir bewerten Ihr Fahrzeug kostenlos und unterbreiten Ihnen ein unverbindliches Angebot.'
                  },
                  {
                    icon: CarFront,
                    title: '3. Termin vereinbaren',
                    description: 'Bei Interesse vereinbaren wir einen Termin zur Besichtigung oder Abholung Ihres Fahrzeugs.'
                  },
                  {
                    icon: Banknote,
                    title: '4. Sofort Bargeld erhalten',
                    description: 'Nach kurzer Prüfung des Fahrzeugs erhalten Sie sofort den vereinbarten Betrag in bar oder per Überweisung.'
                  }
                ].map((step, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
                    <div className="w-12 h-12 bg-auto-blue/10 rounded-full flex items-center justify-center mb-4">
                      <step.icon className="text-auto-blue" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-auto-darkGray mb-3">{step.title}</h3>
                    <p className="text-auto-mediumGray">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-auto-gray">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-auto-darkGray mb-6">Was wir ankaufen</h2>
                  <p className="text-auto-mediumGray mb-6">
                    Wir kaufen nahezu alle Fahrzeugtypen und -marken an, unabhängig von Alter, Kilometerstand oder Zustand. Egal ob Ihr Auto noch fast neu ist oder schon viele Jahre auf dem Buckel hat - wir machen Ihnen ein faires Angebot.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {[
                      "Gebrauchtwagen aller Marken",
                      "Unfallfahrzeuge",
                      "Fahrzeuge mit hohem Kilometerstand",
                      "Defekte Fahrzeuge",
                      "Fahrzeuge mit abgelaufener MFK",
                      "Oldtimer und Sammlerstücke",
                      "Firmenwagen und Flotten",
                      "Leasingrückläufer"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle size={18} className="text-auto-blue mr-2 flex-shrink-0" />
                        <span className="text-auto-mediumGray">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="bg-auto-blue text-white px-6 py-3 rounded-md font-medium hover:bg-auto-darkBlue transition-colors flex items-center gap-2 mt-2">
                    Jetzt Anfrage stellen
                    <ArrowRight size={18} />
                  </button>
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070&auto=format&fit=crop" 
                    alt="Verschiedene Autos zum Ankauf" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16">
            <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-auto-darkGray mb-4">Häufig gestellte Fragen</h2>
                <p className="text-auto-mediumGray">
                  Hier finden Sie Antworten auf die am häufigsten gestellten Fragen zum Auto-Ankauf bei AutoExport Schweiz.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    question: "Welche Unterlagen benötige ich für den Verkauf?",
                    answer: "Sie benötigen den Fahrzeugausweis, Service-Heft (falls vorhanden), alle Fahrzeugschlüssel und einen gültigen Ausweis (ID oder Pass)."
                  },
                  {
                    question: "Wie wird der Preis für mein Auto ermittelt?",
                    answer: "Wir bewerten Ihr Fahrzeug basierend auf Marke, Modell, Alter, Kilometerstand, Zustand und aktueller Marktsituation. Durch unser internationales Netzwerk können wir oft höhere Preise anbieten als der lokale Markt."
                  },
                  {
                    question: "Muss mein Auto vorher durch die MFK?",
                    answer: "Nein, wir kaufen auch Fahrzeuge mit abgelaufener MFK. Dies hat keinen großen Einfluss auf unseren Ankaufspreis."
                  },
                  {
                    question: "Wie lange dauert der gesamte Verkaufsprozess?",
                    answer: "Der gesamte Prozess kann innerhalb eines Tages abgeschlossen werden. Von der ersten Anfrage bis zur Auszahlung vergehen oft nur wenige Stunden."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-auto-lightGray">
                    <h3 className="text-xl font-bold text-auto-darkGray mb-3">{faq.question}</h3>
                    <p className="text-auto-mediumGray">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <a href="/faq" className="inline-flex items-center gap-2 text-auto-blue hover:text-auto-darkBlue transition-colors font-medium">
                  Alle FAQ anzeigen
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default HowItWorks;
