
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4 animate-fade-in">
        <div className="max-w-md w-full text-center bg-white rounded-lg shadow-md p-8">
          <div className="w-24 h-24 bg-auto-lightGray rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-auto-darkGray text-5xl font-bold">404</span>
          </div>
          
          <h1 className="text-3xl font-bold text-auto-darkGray mb-4">Seite nicht gefunden</h1>
          
          <p className="text-auto-mediumGray mb-8">
            Die gewünschte Seite existiert nicht oder wurde möglicherweise verschoben.
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center justify-center gap-2 btn-primary w-full"
          >
            <ArrowLeft size={18} />
            Zurück zur Startseite
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
