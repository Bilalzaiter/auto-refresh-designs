
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  imageSrc: string;
}

const PageHeader = ({ title, description, imageSrc }: PageHeaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => setIsLoading(false);
  }, [imageSrc]);

  return (
    <div className="relative pt-20 pb-20 lg:pt-32 lg:pb-28">
      {/* Background Image */}
      <div 
        className={cn(
          "absolute inset-0 transition-all duration-1000",
          isLoading ? "scale-105 blur-lg" : "scale-100 blur-0"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 mix-blend-multiply"></div>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative container-custom z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
          {description && (
            <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
