
import { CarFront, PhoneCall, ClipboardCheck, Banknote } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: PhoneCall,
    title: 'Anfrage stellen',
    description: 'Kontaktieren Sie uns per Telefon oder Formular mit den wichtigsten Informationen zu Ihrem Fahrzeug.',
    number: '1'
  },
  {
    icon: ClipboardCheck,
    title: 'Bewertung erhalten',
    description: 'Wir bewerten Ihr Fahrzeug kostenlos und unterbreiten Ihnen ein unverbindliches Angebot.',
    number: '2'
  },
  {
    icon: CarFront,
    title: 'Termin vereinbaren',
    description: 'Bei Interesse vereinbaren wir einen Termin zur Besichtigung oder Abholung Ihres Fahrzeugs.',
    number: '3'
  },
  {
    icon: Banknote,
    title: 'Sofort Bargeld erhalten',
    description: 'Nach kurzer Prüfung des Fahrzeugs erhalten Sie sofort den vereinbarten Betrag in bar oder per Überweisung.',
    number: '4'
  },
];

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  number: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, number, index }: ServiceCardProps) => {
  return (
    <div 
      className="glass-effect p-6 rounded-lg transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] animate-fade-in relative"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-auto-blue rounded-full flex items-center justify-center text-white font-bold">
        {number}
      </div>
      <div className="w-12 h-12 bg-auto-blue/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-auto-blue" size={24} />
      </div>
      <h3 className="text-xl font-bold text-auto-darkGray mb-2">{title}</h3>
      <p className="text-auto-mediumGray">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-auto-gray/30 mix-blend-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1486684228390-a9e07b9bdf33?q=80&w=2340&auto=format&fit=crop"
          alt="Car handshake deal"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-auto-darkGray mb-4">So funktioniert der Auto-Ankauf</h2>
          <p className="text-auto-mediumGray text-lg">
            In nur vier einfachen Schritten verkaufen Sie Ihr Auto schnell und unkompliziert
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              number={service.number}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
