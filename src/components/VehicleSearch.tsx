
import { useState } from 'react';
import { ArrowRight, Calculator } from 'lucide-react';

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

const CarValuationForm = () => {
  const [valuationForm, setValuationForm] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    condition: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setValuationForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Valuation form submitted:', valuationForm);
    // Implement valuation request functionality
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mx-auto max-w-5xl -mt-8 relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <Calculator size={24} className="text-auto-blue" />
        <h2 className="text-2xl font-bold text-auto-darkGray">Schnelle Auto-Bewertung</h2>
      </div>
      <p className="text-auto-mediumGray mb-6">Erhalten Sie kostenlos und unverbindlich eine Preiseinschätzung für Ihr Fahrzeug</p>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-auto-darkGray">Marke*</label>
            <select 
              name="make" 
              value={valuationForm.make}
              onChange={handleChange}
              className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
              required
            >
              <option value="">Bitte wählen</option>
              <option value="audi">Audi</option>
              <option value="bmw">BMW</option>
              <option value="mercedes">Mercedes-Benz</option>
              <option value="vw">Volkswagen</option>
              <option value="toyota">Toyota</option>
              <option value="other">Andere</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-auto-darkGray">Modell*</label>
            <input 
              type="text"
              name="model" 
              value={valuationForm.model}
              onChange={handleChange}
              className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
              placeholder="z.B. Golf, A4, 3er"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-auto-darkGray">Erstzulassung*</label>
            <select 
              name="year" 
              value={valuationForm.year}
              onChange={handleChange}
              className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
              required
            >
              <option value="">Bitte wählen</option>
              {years.map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-auto-darkGray">Kilometerstand*</label>
            <input
              type="number"
              name="mileage"
              value={valuationForm.mileage}
              onChange={handleChange}
              className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
              placeholder="z.B. 75000"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-auto-darkGray">Zustand</label>
            <select 
              name="condition" 
              value={valuationForm.condition}
              onChange={handleChange}
              className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
            >
              <option value="">Bitte wählen</option>
              <option value="excellent">Sehr gut</option>
              <option value="good">Gut</option>
              <option value="fair">Befriedigend</option>
              <option value="poor">Reparaturbedürftig</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-auto-darkGray">Telefonnummer*</label>
            <input
              type="tel"
              name="phone"
              value={valuationForm.phone}
              onChange={handleChange}
              className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
              placeholder="Für schnelle Rückmeldung"
              required
            />
          </div>
        </div>
        
        <div className="flex justify-end">
          <button 
            type="submit" 
            className="bg-auto-blue text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-auto-darkBlue transition-colors flex items-center gap-2"
          >
            <span>Kostenlos bewerten</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarValuationForm;
