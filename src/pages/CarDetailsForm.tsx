
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { CarFront, Upload, CalendarDays, Wrench, Info, User, Phone, Mail, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const CarDetailsForm = () => {
  const { toast } = useToast();
  
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    // Car details
    make: '',
    model: '',
    year: '',
    mileage: '',
    condition: '',
    additionalInfo: '',
    // Personal details
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Anfrage erfolgreich gesendet",
      description: "Wir werden uns in Kürze bei Ihnen melden.",
    });
    
    // Reset form
    setFormData({
      make: '',
      model: '',
      year: '',
      mileage: '',
      condition: '',
      additionalInfo: '',
      name: '',
      phone: '',
      email: '',
      message: '',
    });
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  return (
    <>
      <Helmet>
        <title>Auto-Anfrage | AutoExport Schweiz - Verkaufen Sie Ihr Auto zum Bestpreis</title>
        <meta name="description" content="Stellen Sie eine Anfrage für den Verkauf Ihres Autos. Einfach, schnell und zu Bestpreisen in der ganzen Schweiz." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow page-transition">
          <PageHeader
            title="Auto-Ankauf Anfrage"
            description="Füllen Sie das Formular aus, um ein unverbindliches Angebot für Ihr Auto zu erhalten"
            imageSrc="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2340&auto=format&fit=crop"
          />
          
          <section className="py-12 bg-auto-gray">
            <div className="container-custom">
              <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-auto-darkGray mb-6 flex items-center gap-2">
                  <CarFront className="text-auto-blue" />
                  Fahrzeug-Details
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-auto-darkGray">Fahrzeug-Informationen</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-auto-darkGray flex items-center gap-1">
                          <CarFront size={16} className="text-auto-blue" />
                          Marke*
                        </label>
                        <select 
                          name="make" 
                          value={formData.make}
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
                          <option value="skoda">Skoda</option>
                          <option value="seat">Seat</option>
                          <option value="volvo">Volvo</option>
                          <option value="other">Andere</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-auto-darkGray flex items-center gap-1">
                          <CarFront size={16} className="text-auto-blue" />
                          Modell*
                        </label>
                        <input 
                          type="text"
                          name="model" 
                          value={formData.model}
                          onChange={handleChange}
                          className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
                          placeholder="z.B. Golf, A4, 3er"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-auto-darkGray flex items-center gap-1">
                          <CalendarDays size={16} className="text-auto-blue" />
                          Erstzulassung*
                        </label>
                        <select 
                          name="year" 
                          value={formData.year}
                          onChange={handleChange}
                          className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
                          required
                        >
                          <option value="">Bitte wählen</option>
                          {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-auto-darkGray flex items-center gap-1">
                          <Upload size={16} className="text-auto-blue" />
                          Kilometerstand*
                        </label>
                        <input
                          type="number"
                          name="mileage"
                          value={formData.mileage}
                          onChange={handleChange}
                          className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
                          placeholder="z.B. 75000"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-auto-darkGray flex items-center gap-1">
                          <Wrench size={16} className="text-auto-blue" />
                          Zustand
                        </label>
                        <select 
                          name="condition" 
                          value={formData.condition}
                          onChange={handleChange}
                          className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
                        >
                          <option value="">Bitte wählen</option>
                          <option value="excellent">Sehr gut</option>
                          <option value="good">Gut</option>
                          <option value="fair">Befriedigend</option>
                          <option value="poor">Reparaturbedürftig</option>
                          <option value="accident">Unfallwagen</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium text-auto-darkGray flex items-center gap-1">
                          <Info size={16} className="text-auto-blue" />
                          Zusätzliche Informationen
                        </label>
                        <textarea
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleChange}
                          className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue min-h-[100px]"
                          placeholder="Beschreiben Sie weitere Details zu Ihrem Fahrzeug (z.B. Ausstattung, bekannte Mängel, etc.)"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-auto-lightGray pt-6 space-y-6">
                    <h3 className="text-xl font-semibold text-auto-darkGray">Kontaktdaten</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-auto-darkGray flex items-center gap-1">
                          <User size={16} className="text-auto-blue" />
                          Name*
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
                          placeholder="Vor- und Nachname"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-auto-darkGray flex items-center gap-1">
                          <Phone size={16} className="text-auto-blue" />
                          Telefonnummer*
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
                          placeholder="Für schnellere Rückmeldung"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium text-auto-darkGray flex items-center gap-1">
                          <Mail size={16} className="text-auto-blue" />
                          E-Mail*
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
                          placeholder="Ihre E-Mail Adresse"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium text-auto-darkGray flex items-center gap-1">
                          <Info size={16} className="text-auto-blue" />
                          Ihre Nachricht
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue min-h-[100px]"
                          placeholder="Weitere Informationen oder Fragen"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <button 
                      type="submit" 
                      className="bg-auto-blue text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-auto-darkBlue transition-colors flex items-center gap-2 mx-auto"
                    >
                      <Send size={18} />
                      <span>Anfrage absenden</span>
                    </button>
                    <p className="text-auto-mediumGray text-sm mt-3">
                      Wir werden uns innerhalb von 24 Stunden bei Ihnen melden
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CarDetailsForm;
