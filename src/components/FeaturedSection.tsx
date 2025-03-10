
import { ArrowRight, Banknote, Calendar, ClipboardCheck, Clock, Shield, Truck } from 'lucide-react';

const benefits = [
  {
    id: '1',
    icon: Banknote,
    title: 'Bestpreise für Ihr Fahrzeug',
    description: 'Wir zahlen Ihnen garantiert den besten Preis für Ihr Auto - sofort und in bar.',
  },
  {
    id: '2',
    icon: Clock,
    title: 'Schnelle Abwicklung',
    description: 'Von der Bewertung bis zur Auszahlung dauert es nur wenige Stunden, nicht Tage oder Wochen.',
  },
  {
    id: '3',
    icon: ClipboardCheck,
    title: 'Kostenlose Fahrzeugbewertung',
    description: 'Lassen Sie Ihr Fahrzeug kostenlos und unverbindlich von unseren Experten bewerten.',
  },
  {
    id: '4',
    icon: Truck,
    title: 'Schweizweite Abholung',
    description: 'Wir holen Ihr Fahrzeug kostenlos in der ganzen Schweiz bei Ihnen ab.',
  },
  {
    id: '5',
    icon: Shield,
    title: 'Seriös und zuverlässig',
    description: 'Seit über 10 Jahren Ihr vertrauenswürdiger Partner für den Auto-Ankauf in der Schweiz.',
  },
  {
    id: '6',
    icon: Calendar,
    title: 'Sofortige Abmeldung',
    description: 'Wir übernehmen alle Formalitäten und melden Ihr Fahrzeug kostenlos für Sie ab.',
  },
];

const BenefitCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <div className="w-12 h-12 bg-auto-blue/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-auto-blue" size={24} />
      </div>
      <h3 className="text-xl font-bold text-auto-darkGray mb-2">{title}</h3>
      <p className="text-auto-mediumGray flex-grow">{description}</p>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-auto-gray">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-auto-darkGray mb-2">Warum mit uns verkaufen?</h2>
            <p className="text-auto-mediumGray max-w-2xl">
              Als führender Auto-Ankäufer in der Schweiz bieten wir Ihnen zahlreiche Vorteile für den schnellen und unkomplizierten Verkauf Ihres Fahrzeugs.
            </p>
          </div>
          <button className="mt-4 md:mt-0 bg-transparent border border-auto-blue text-auto-blue hover:bg-auto-blue hover:text-white px-5 py-2 rounded-md font-medium transition-colors flex items-center gap-2 self-start">
            <span>Alle Vorteile</span>
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} icon={benefit.icon} title={benefit.title} description={benefit.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
