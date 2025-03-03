
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Michael Brunner',
    location: 'Zürich',
    text: 'Die Beratung war erstklassig und der gesamte Prozess lief reibungslos ab. Mein neuer BMW übertrifft alle meine Erwartungen. Vielen Dank für den ausgezeichneten Service!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Sophie Weber',
    location: 'Bern',
    text: 'Ich habe bereits zweimal ein Auto über AutoExport Schweiz gekauft und war beide Male sehr zufrieden. Die Preise sind fair und die Qualität der Fahrzeuge ist top.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Thomas Keller',
    location: 'Genf',
    text: 'Ein großes Lob an das gesamte Team für die professionelle Abwicklung und die persönliche Betreuung. Der Finanzierungsservice hat mir sehr geholfen.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-auto-darkGray mb-4">Was unsere Kunden sagen</h2>
          <p className="text-auto-mediumGray max-w-2xl mx-auto">
            Erfahren Sie, was unsere zufriedenen Kunden über ihre Erfahrungen mit AutoExport Schweiz berichten.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className={cn(
                "flex transition-transform duration-500 ease-in-out",
                isAnimating ? "opacity-90" : "opacity-100"
              )}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-auto-gray rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-grow text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={18} 
                            className={cn(
                              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            )} 
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-auto-darkGray text-lg mb-4 italic">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div>
                        <h4 className="font-bold text-auto-darkGray">{testimonial.name}</h4>
                        <p className="text-auto-mediumGray text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={goToPrev}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-auto-darkGray hover:bg-auto-gray transition-colors"
            disabled={isAnimating}
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-auto-darkGray hover:bg-auto-gray transition-colors"
            disabled={isAnimating}
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setActiveIndex(index);
                  }
                }}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  activeIndex === index 
                    ? "bg-auto-blue w-6" 
                    : "bg-auto-lightGray hover:bg-auto-mediumGray/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
