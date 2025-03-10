
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { cn } from '@/lib/utils';

// FAQ data organized by categories
const faqData = [
  {
    category: "Verkaufsprozess",
    questions: [
      {
        question: "Wie funktioniert der Auto-Ankauf bei AutoExport Schweiz?",
        answer: "Der Prozess ist einfach und unkompliziert: Füllen Sie unser Formular aus oder rufen Sie uns an, wir bewerten Ihr Fahrzeug und machen Ihnen ein Angebot. Bei Interesse vereinbaren wir einen Termin zur Besichtigung oder Abholung. Nach kurzer Prüfung erhalten Sie sofort den vereinbarten Betrag in bar oder per Überweisung."
      },
      {
        question: "Wie lange dauert der gesamte Verkaufsprozess?",
        answer: "In der Regel kann der gesamte Prozess innerhalb eines Tages abgeschlossen werden. Von der ersten Anfrage bis zur Auszahlung vergehen oft nur wenige Stunden."
      },
      {
        question: "Muss ich mein Auto zu Ihnen bringen oder holen Sie es ab?",
        answer: "Beides ist möglich. Sie können Ihr Fahrzeug zu einer unserer Filialen bringen oder wir holen es kostenlos bei Ihnen zuhause oder an einem anderen Wunschort in der gesamten Schweiz ab."
      },
      {
        question: "Welche Unterlagen benötige ich für den Verkauf?",
        answer: "Sie benötigen den Fahrzeugausweis, Service-Heft (falls vorhanden), alle Fahrzeugschlüssel und einen gültigen Ausweis (ID oder Pass)."
      }
    ]
  },
  {
    category: "Fahrzeugbewertung & Preise",
    questions: [
      {
        question: "Wie wird der Preis für mein Auto ermittelt?",
        answer: "Wir bewerten Ihr Fahrzeug basierend auf Marke, Modell, Alter, Kilometerstand, Zustand und aktueller Marktsituation. Durch unser internationales Netzwerk können wir oft höhere Preise anbieten als der lokale Markt."
      },
      {
        question: "Kaufen Sie auch Unfallfahrzeuge oder defekte Autos?",
        answer: "Ja, wir kaufen auch Unfallfahrzeuge, Autos mit Motorschaden oder anderen technischen Defekten. Durch unser internationales Netzwerk können wir auch für solche Fahrzeuge faire Preise anbieten."
      },
      {
        question: "Ist Ihr Angebot unverbindlich?",
        answer: "Ja, unser Angebot ist völlig unverbindlich. Sie entscheiden, ob Sie verkaufen möchten oder nicht."
      },
      {
        question: "Sind die Preise verhandelbar?",
        answer: "Wir bemühen uns, Ihnen von Anfang an den bestmöglichen Preis anzubieten. In begründeten Fällen sind wir jedoch offen für Verhandlungen."
      }
    ]
  },
  {
    category: "Zahlung & Abmeldung",
    questions: [
      {
        question: "Wie erfolgt die Bezahlung?",
        answer: "Die Bezahlung erfolgt sofort bei Fahrzeugübergabe, entweder in bar oder per Sofort-Überweisung auf Ihr Bankkonto."
      },
      {
        question: "Wer kümmert sich um die Abmeldung des Fahrzeugs?",
        answer: "Wir übernehmen die komplette Abmeldung des Fahrzeugs beim Strassenverkehrsamt für Sie kostenlos und erledigen alle notwendigen Formalitäten."
      },
      {
        question: "Kann ich mein Auto auch verkaufen, wenn es noch finanziert wird?",
        answer: "Ja, auch Fahrzeuge mit laufender Finanzierung können verkauft werden. Wir zahlen die Restschuld direkt an die Finanzierungsgesellschaft und den Restbetrag an Sie aus."
      },
      {
        question: "Was passiert mit den Kontrollschildern?",
        answer: "Die Kontrollschilder bleiben in Ihrem Besitz. Sie können diese für ein neues Fahrzeug verwenden oder beim Strassenverkehrsamt abgeben."
      }
    ]
  },
  {
    category: "Fahrzeugzustand & Voraussetzungen",
    questions: [
      {
        question: "Muss mein Auto vorher durch die MFK?",
        answer: "Nein, wir kaufen auch Fahrzeuge mit abgelaufener MFK. Dies hat keinen großen Einfluss auf unseren Ankaufspreis."
      },
      {
        question: "Welche Fahrzeuge kaufen Sie an?",
        answer: "Wir kaufen praktisch alle Fahrzeugtypen und -marken an: PKWs, Nutzfahrzeuge, Oldtimer, Unfallwagen, Fahrzeuge mit hohem Kilometerstand oder defekte Autos."
      },
      {
        question: "Spielt das Alter oder der Kilometerstand eine Rolle?",
        answer: "Nein, wir kaufen Fahrzeuge aller Altersklassen und mit jedem Kilometerstand an. Selbst Autos mit sehr hoher Laufleistung sind für uns interessant."
      },
      {
        question: "Muss ich mein Auto vorher reinigen oder reparieren lassen?",
        answer: "Nein, das ist nicht notwendig. Wir kaufen Ihr Fahrzeug im aktuellen Zustand. Aufwändige Reinigungen oder Reparaturen vor dem Verkauf lohnen sich meist nicht."
      }
    ]
  }
];

const FAQ = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState("Verkaufsprozess");
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Array<{question: string, answer: string, category: string}>>([]);

  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term.length > 2) {
      const results = faqData.flatMap(category => 
        category.questions
          .filter(q => 
            q.question.toLowerCase().includes(term) || 
            q.answer.toLowerCase().includes(term)
          )
          .map(q => ({
            question: q.question,
            answer: q.answer,
            category: category.category
          }))
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <>
      <Helmet>
        <title>Häufig gestellte Fragen | AutoExport Schweiz - Auto-Ankauf</title>
        <meta name="description" content="Finden Sie Antworten auf häufig gestellte Fragen zum Auto-Ankauf bei AutoExport Schweiz. Informationen zu Preisen, Verkaufsprozess, Bezahlung und mehr." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow page-transition">
          <PageHeader
            title="Häufig gestellte Fragen (FAQ)"
            description="Finden Sie Antworten auf die häufigsten Fragen rund um den Auto-Ankauf"
            imageSrc="https://images.unsplash.com/photo-1544982877-f0f4427dee24?q=80&w=1287&auto=format&fit=crop"
          />
          
          <section className="py-16">
            <div className="container-custom">
              {/* Search bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Suchen Sie nach Antworten..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full p-4 pl-12 rounded-lg border border-auto-lightGray focus:outline-none focus:ring-2 focus:ring-auto-blue"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-auto-mediumGray" size={20} />
                </div>
              </div>
              
              {/* Search results */}
              {searchTerm.length > 2 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-auto-darkGray mb-6">Suchergebnisse ({searchResults.length})</h2>
                  
                  {searchResults.length === 0 ? (
                    <div className="bg-auto-gray p-6 rounded-lg text-center">
                      <p className="text-auto-mediumGray">Keine Ergebnisse gefunden. Bitte versuchen Sie es mit einem anderen Suchbegriff.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {searchResults.map((result, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-auto-lightGray">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="text-xs font-medium text-auto-blue bg-auto-blue/10 px-2 py-1 rounded-full mb-2 inline-block">
                                {result.category}
                              </span>
                              <h3 className="text-xl font-bold text-auto-darkGray mb-3">{result.question}</h3>
                            </div>
                          </div>
                          <p className="text-auto-mediumGray">{result.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              {/* FAQ categories and questions */}
              {(searchTerm.length <= 2) && (
                <>
                  {/* Categories tabs */}
                  <div className="flex flex-wrap gap-2 mb-8 justify-center">
                    {faqData.map((category) => (
                      <button
                        key={category.category}
                        onClick={() => setActiveCategory(category.category)}
                        className={cn(
                          "px-4 py-2 rounded-full font-medium transition-colors text-sm md:text-base",
                          activeCategory === category.category
                            ? "bg-auto-blue text-white"
                            : "bg-auto-gray text-auto-darkGray hover:bg-auto-lightGray"
                        )}
                      >
                        {category.category}
                      </button>
                    ))}
                  </div>
                  
                  {/* Questions and answers */}
                  <div className="space-y-4">
                    {faqData
                      .find(category => category.category === activeCategory)
                      ?.questions.map((item, index) => (
                        <div 
                          key={index} 
                          className="bg-white rounded-lg shadow-sm border border-auto-lightGray overflow-hidden transition-all duration-300"
                        >
                          <button
                            className="w-full p-6 flex justify-between items-center text-left"
                            onClick={() => toggleQuestion(item.question)}
                          >
                            <h3 className="text-lg font-bold text-auto-darkGray pr-8">{item.question}</h3>
                            {openQuestions[item.question] ? (
                              <ChevronUp size={20} className="text-auto-blue flex-shrink-0" />
                            ) : (
                              <ChevronDown size={20} className="text-auto-blue flex-shrink-0" />
                            )}
                          </button>
                          
                          <div 
                            className={cn(
                              "px-6 overflow-hidden transition-all duration-300",
                              openQuestions[item.question] ? "max-h-96 pb-6" : "max-h-0"
                            )}
                          >
                            <p className="text-auto-mediumGray">{item.answer}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </>
              )}
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
