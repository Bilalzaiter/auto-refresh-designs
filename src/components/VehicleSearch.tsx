
import { useState } from 'react';
import { Search } from 'lucide-react';

const priceRanges = [
  { label: 'Beliebig', value: '' },
  { label: 'Bis 10\'000 CHF', value: '0-10000' },
  { label: '10\'000 - 20\'000 CHF', value: '10000-20000' },
  { label: '20\'000 - 30\'000 CHF', value: '20000-30000' },
  { label: '30\'000 - 50\'000 CHF', value: '30000-50000' },
  { label: '50\'000 - 100\'000 CHF', value: '50000-100000' },
  { label: 'Über 100\'000 CHF', value: '100000-' },
];

const VehicleSearch = () => {
  const [searchForm, setSearchForm] = useState({
    make: '',
    model: '',
    priceRange: '',
    yearFrom: '',
    yearTo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search form submitted:', searchForm);
    // Implement search functionality
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mx-auto max-w-5xl -mt-8 relative z-10">
      <h2 className="text-xl font-bold text-auto-darkGray mb-4">Finden Sie Ihr Traumauto</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-auto-darkGray">Marke</label>
            <select 
              name="make" 
              value={searchForm.make}
              onChange={handleChange}
              className="w-full p-2 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
            >
              <option value="">Alle Marken</option>
              <option value="audi">Audi</option>
              <option value="bmw">BMW</option>
              <option value="mercedes">Mercedes-Benz</option>
              <option value="volkswagen">Volkswagen</option>
              <option value="toyota">Toyota</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-auto-darkGray">Modell</label>
            <select 
              name="model" 
              value={searchForm.model}
              onChange={handleChange}
              className="w-full p-2 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
              disabled={!searchForm.make}
            >
              <option value="">Alle Modelle</option>
              {searchForm.make === 'audi' && (
                <>
                  <option value="a3">A3</option>
                  <option value="a4">A4</option>
                  <option value="a6">A6</option>
                  <option value="q5">Q5</option>
                </>
              )}
              {searchForm.make === 'bmw' && (
                <>
                  <option value="3er">3er</option>
                  <option value="5er">5er</option>
                  <option value="x3">X3</option>
                  <option value="x5">X5</option>
                </>
              )}
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-auto-darkGray">Preis</label>
            <select 
              name="priceRange" 
              value={searchForm.priceRange}
              onChange={handleChange}
              className="w-full p-2 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
            >
              {priceRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-auto-darkGray">Jahrgang von</label>
            <select 
              name="yearFrom" 
              value={searchForm.yearFrom}
              onChange={handleChange}
              className="w-full p-2 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
            >
              <option value="">Beliebig</option>
              {years.map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex items-end">
            <button 
              type="submit" 
              className="w-full p-2 bg-auto-blue text-white font-medium rounded-md hover:bg-auto-darkBlue transition-colors flex items-center justify-center gap-2"
            >
              <Search size={18} />
              <span>Suchen</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VehicleSearch;
