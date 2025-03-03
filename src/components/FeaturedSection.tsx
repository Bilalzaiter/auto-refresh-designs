
import VehicleCard from './VehicleCard';

// Sample vehicle data
const featuredVehicles = [
  {
    id: '1',
    title: 'Mercedes-Benz E 300 de AMG Line',
    price: 76900,
    year: 2022,
    mileage: 15000,
    fuel: 'Hybrid',
    transmission: 'Automatik',
    image: 'https://images.unsplash.com/photo-1617814076229-810b465a0034?q=80&w=2340&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '2',
    title: 'BMW 5er 530e xDrive Touring',
    price: 69500,
    year: 2021,
    mileage: 28400,
    fuel: 'Hybrid',
    transmission: 'Automatik',
    image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2340&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Audi A6 Avant 55 TFSI e quattro',
    price: 82300,
    year: 2023,
    mileage: 8900,
    fuel: 'Hybrid',
    transmission: 'Automatik',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2340&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Volkswagen ID.4 Pro Performance',
    price: 51900,
    year: 2022,
    mileage: 19500,
    fuel: 'Elektro',
    transmission: 'Automatik',
    image: 'https://images.unsplash.com/photo-1601928652068-71435986c5ee?q=80&w=2340&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Toyota RAV4 2.5 HSD Plug-in',
    price: 58700,
    year: 2022,
    mileage: 22100,
    fuel: 'Hybrid',
    transmission: 'Automatik',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2340&auto=format&fit=crop',
  },
];

const FeaturedSection = () => {
  return (
    <section className="py-16 bg-auto-gray">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-auto-darkGray mb-2">Ausgewählte Fahrzeuge</h2>
            <p className="text-auto-mediumGray max-w-2xl">
              Entdecken Sie unsere handverlesenen Premium-Fahrzeuge mit erstklassiger Qualität und umfassender Garantie.
            </p>
          </div>
          <button className="mt-4 md:mt-0 btn-secondary self-start">
            Alle Fahrzeuge anzeigen
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
