
import { Car, CreditCard, ShieldCheck, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Car,
    title: 'Fahrzeugberatung',
    description: 'Persönliche Beratung bei der Auswahl des idealen Fahrzeugs nach Ihren individuellen Anforderungen.',
  },
  {
    icon: CreditCard,
    title: 'Finanzierung',
    description: 'Maßgeschneiderte Finanzierungslösungen mit attraktiven Konditionen und flexiblen Laufzeiten.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantie',
    description: 'Umfassende Garantieleistungen für ein sorgenfreies Fahrerlebnis und langfristige Zufriedenheit.',
  },
  {
    icon: Truck,
    title: 'Lieferservice',
    description: 'Bequeme Fahrzeuglieferung direkt zu Ihrem Wunschort in der gesamten Schweiz.',
  },
];

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, index }: ServiceCardProps) => {
  return (
    <div 
      className="glass-effect p-6 rounded-lg transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
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
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2283&auto=format&fit=crop"
          alt="Luxury car background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-auto-darkGray mb-4">Unsere Services</h2>
          <p className="text-auto-mediumGray text-lg">
            Wir bieten Ihnen umfassende Dienstleistungen rund um den Fahrzeugkauf und -verkauf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
