
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Navbar } from '@/components/Navbar';
import Hero from '@/components/Hero';
import CarValuationForm from '@/components/VehicleSearch';
import BenefitsSection from '@/components/FeaturedSection';
import ServicesSection from '@/components/ServicesSection';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>AutoExport Schweiz | #1 Auto Ankauf zu Bestpreisen</title>
        <meta name="description" content="Verkaufen Sie Ihr Auto schnell und einfach zu Bestpreisen. Sofortige Barauszahlung, kostenlose Bewertung, Abholung in der ganzen Schweiz. Auto verkaufen Schweiz." />
        <meta name="keywords" content="Auto verkaufen, Auto Ankauf Schweiz, Fahrzeug verkaufen, Auto Bestpreis, Gebrauchtwagen verkaufen, PKW Ankauf, sofort Bargeld, Auto bewerten" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow page-transition">
          {/* Hero Section */}
          <Hero />
          
          {/* Car Valuation Form */}
          <div className="container-custom relative z-20">
            <CarValuationForm />
          </div>
          
          {/* Benefits Section */}
          <BenefitsSection />
          
          {/* How It Works */}
          <ServicesSection />
          
          {/* Testimonials */}
          <Testimonials />
          
          {/* CTA Section */}
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
