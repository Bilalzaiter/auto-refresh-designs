
import { useState } from 'react';
import { Heart, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VehicleCardProps {
  id: string;
  title: string;
  price: number;
  year: number;
  mileage: number;
  fuel: string;
  transmission: string;
  image: string;
  featured?: boolean;
}

const VehicleCard = ({
  id,
  title,
  price,
  year,
  mileage,
  fuel,
  transmission,
  image,
  featured = false,
}: VehicleCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const formattedPrice = new Intl.NumberFormat('de-CH', {
    style: 'currency',
    currency: 'CHF',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
  
  const formattedMileage = new Intl.NumberFormat('de-CH').format(mileage);

  return (
    <div className={cn(
      "group relative rounded-lg overflow-hidden bg-white transition-all duration-300 card-hover",
      featured ? "md:col-span-2" : ""
    )}>
      {/* Favorite Button */}
      <button 
        className="absolute z-10 top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm text-auto-mediumGray hover:text-auto-red hover:bg-white transition-colors duration-200"
        onClick={() => setIsFavorite(!isFavorite)}
      >
        <Heart 
          size={18} 
          className={cn(isFavorite ? "fill-auto-red text-auto-red" : "")}
        />
      </button>
      
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {featured && (
          <div className="absolute top-3 left-3 z-10">
            <div className="rounded-full px-3 py-1 bg-auto-blue text-white text-xs font-medium">
              Empfohlen
            </div>
          </div>
        )}
        <img
          src={image}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-all duration-700 group-hover:scale-105",
            isLoaded ? "blur-0" : "blur-sm"
          )}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-lg text-auto-darkGray mb-2">{title}</h3>
        <p className="font-bold text-xl text-auto-blue mb-3">{formattedPrice}</p>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="text-sm text-auto-mediumGray">
            <span className="font-medium">Jahrgang:</span> {year}
          </div>
          <div className="text-sm text-auto-mediumGray">
            <span className="font-medium">Kilometer:</span> {formattedMileage}
          </div>
          <div className="text-sm text-auto-mediumGray">
            <span className="font-medium">Treibstoff:</span> {fuel}
          </div>
          <div className="text-sm text-auto-mediumGray">
            <span className="font-medium">Getriebe:</span> {transmission}
          </div>
        </div>
        
        <div className="flex gap-2">
          <button className="flex-1 bg-auto-blue text-white py-2 rounded transition-colors hover:bg-auto-darkBlue text-sm font-medium">
            Details ansehen
          </button>
          <button className="bg-auto-lightGray text-auto-darkGray p-2 rounded hover:bg-auto-gray transition-colors">
            <Info size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
