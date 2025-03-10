
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Nachricht gesendet",
        description: "Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen melden.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Kontakt | AutoExport Schweiz - Auto-Ankauf Service</title>
        <meta name="description" content="Kontaktieren Sie AutoExport Schweiz für den schnellen und unkomplizierten Auto-Ankauf. Erreichbar per Telefon, E-Mail oder Kontaktformular." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow page-transition">
          <PageHeader
            title="Kontaktieren Sie uns"
            description="Wir sind für Sie da und beantworten gerne Ihre Fragen"
            imageSrc="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1170&auto=format&fit=crop"
          />
          
          <section className="py-16">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Info Cards */}
                <div className="lg:col-span-1 space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-auto-lightGray hover:border-auto-blue transition-colors duration-300">
                    <div className="w-12 h-12 bg-auto-blue/10 rounded-full flex items-center justify-center mb-4">
                      <Phone className="text-auto-blue" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-auto-darkGray mb-2">Telefonisch</h3>
                    <p className="text-auto-mediumGray mb-4">Unsere Experten stehen Ihnen für telefonische Anfragen zur Verfügung.</p>
                    <a href="tel:+41445001122" className="text-auto-blue font-bold text-lg hover:underline">+41 44 500 11 22</a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-auto-lightGray hover:border-auto-blue transition-colors duration-300">
                    <div className="w-12 h-12 bg-auto-blue/10 rounded-full flex items-center justify-center mb-4">
                      <Mail className="text-auto-blue" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-auto-darkGray mb-2">Per E-Mail</h3>
                    <p className="text-auto-mediumGray mb-4">Senden Sie uns eine E-Mail, und wir antworten Ihnen innerhalb von 24 Stunden.</p>
                    <a href="mailto:info@autoexport-schweiz.ch" className="text-auto-blue font-bold hover:underline">info@autoexport-schweiz.ch</a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-auto-lightGray hover:border-auto-blue transition-colors duration-300">
                    <div className="w-12 h-12 bg-auto-blue/10 rounded-full flex items-center justify-center mb-4">
                      <Clock className="text-auto-blue" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-auto-darkGray mb-2">Öffnungszeiten</h3>
                    <div className="space-y-2 text-auto-mediumGray">
                      <div className="flex justify-between">
                        <span>Montag - Freitag:</span>
                        <span>08:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Samstag:</span>
                        <span>09:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sonntag:</span>
                        <span>Geschlossen</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-auto-darkGray mb-6">Schreiben Sie uns</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-auto-darkGray">Name*</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-auto-darkGray">E-Mail*</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-auto-darkGray">Telefon</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-medium text-auto-darkGray">Betreff*</label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue"
                            required
                          >
                            <option value="">Bitte wählen</option>
                            <option value="Auto verkaufen">Auto verkaufen</option>
                            <option value="Preisanfrage">Preisanfrage</option>
                            <option value="Termin vereinbaren">Termin vereinbaren</option>
                            <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-auto-darkGray">Nachricht*</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full p-3 border border-auto-lightGray rounded-md focus:outline-none focus:ring-1 focus:ring-auto-blue resize-none"
                          required
                        ></textarea>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="privacy"
                            type="checkbox"
                            className="h-4 w-4 text-auto-blue border-auto-lightGray rounded"
                            required
                          />
                        </div>
                        <label htmlFor="privacy" className="ml-3 text-sm text-auto-mediumGray">
                          Ich akzeptiere die <a href="/privacy" className="text-auto-blue hover:underline">Datenschutzbestimmungen</a>*
                        </label>
                      </div>
                      
                      <button
                        type="submit"
                        className="bg-auto-blue text-white px-6 py-3 rounded-md font-medium hover:bg-auto-darkBlue transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>Wird gesendet...</>
                        ) : (
                          <>
                            <Send size={18} />
                            Nachricht senden
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-auto-gray">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-auto-darkGray mb-12 text-center">Unsere Standorte</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    city: "Zürich (Hauptsitz)",
                    address: "Musterstrasse 123",
                    postal: "8000 Zürich",
                    phone: "+41 44 500 11 22",
                    email: "zuerich@autoexport-schweiz.ch"
                  },
                  {
                    city: "Bern",
                    address: "Beispielweg 45",
                    postal: "3000 Bern",
                    phone: "+41 31 500 11 22",
                    email: "bern@autoexport-schweiz.ch"
                  },
                  {
                    city: "Basel",
                    address: "Testplatz 67",
                    postal: "4000 Basel",
                    phone: "+41 61 500 11 22",
                    email: "basel@autoexport-schweiz.ch"
                  }
                ].map((location, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="h-48 bg-auto-lightGray">
                      <iframe
                        title={`Map of ${location.city}`}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10881.866370331512!2d8.533754628969466!3d47.3769428613074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a01f0f8f2eb%3A0x526a16501621f73c!2sZurich%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1639073975173!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-auto-darkGray mb-3">{location.city}</h3>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <MapPin size={18} className="text-auto-blue mr-2 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-auto-mediumGray">{location.address}</p>
                            <p className="text-auto-mediumGray">{location.postal}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Phone size={18} className="text-auto-blue mr-2 flex-shrink-0" />
                          <p className="text-auto-mediumGray">{location.phone}</p>
                        </div>
                        <div className="flex items-center">
                          <Mail size={18} className="text-auto-blue mr-2 flex-shrink-0" />
                          <p className="text-auto-mediumGray">{location.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="py-16">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-auto-darkGray mb-6">Fahrzeugbewertung vor Ort</h2>
                <p className="text-auto-mediumGray mb-8">
                  Möchten Sie Ihr Auto persönlich bewerten lassen? Vereinbaren Sie einen Termin bei einer unserer Filialen oder lassen Sie einen unserer Experten zu Ihnen kommen.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a 
                    href="tel:+41445001122" 
                    className="bg-auto-blue text-white px-6 py-3 rounded-md font-medium hover:bg-auto-darkBlue transition-colors flex items-center gap-2 justify-center"
                  >
                    <Phone size={18} />
                    Jetzt anrufen
                  </a>
                  <a 
                    href="#contact-form" 
                    className="bg-white border border-auto-blue text-auto-blue px-6 py-3 rounded-md font-medium hover:bg-auto-blue hover:text-white transition-colors flex items-center gap-2 justify-center"
                  >
                    <CheckCircle size={18} />
                    Termin vereinbaren
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;
