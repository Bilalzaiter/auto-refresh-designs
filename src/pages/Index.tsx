
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Navbar } from '@/components/Navbar';
import Hero from '@/components/Hero';
import VehicleSearch from '@/components/VehicleSearch';
import FeaturedSection from '@/components/FeaturedSection';
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
        <title>AutoExport Schweiz | Premium Fahrzeuge Import & Export</title>
        <meta name="description" content="Ihr vertrauenswürdiger Partner für den Import und Export hochwertiger Fahrzeuge in der Schweiz. Persönliche Beratung und professionelle Abwicklung." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow page-transition">
          {/* Hero Section */}
          <Hero />
          
          {/* Search Filter */}
          <div className="container-custom relative z-20">
            <VehicleSearch />
          </div>
          
          {/* Featured Vehicles */}
          <FeaturedSection />
          
          {/* Services */}
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
