import { X, ChevronLeft, ChevronRight, GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface CertificateModalProps {
  item: {
    type: 'education' | 'experience';
    title: string;
    institution: string;
    location: string;
    period: string;
    description: string;
    achievements?: string[];
    images: string[];
  };
  onClose: () => void;
}

export const CertificateModal = ({ item, onClose }: CertificateModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 md:pt-24 p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl max-h-[calc(100vh-6rem)] md:max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl animate-scale-in">
        {/* Close button - sticky at top */}
        <div className="sticky top-0 z-20 flex justify-end p-4 bg-card/90 backdrop-blur-sm border-b border-border/50">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-secondary/80 hover:bg-secondary text-foreground transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Image Carousel */}
        {item.images.length > 0 && (
          <div className="relative w-full aspect-[4/3] bg-secondary/30 overflow-hidden">
            <img
              src={item.images[currentImageIndex]}
              alt={`${item.title} ${item.type === 'education' ? 'certificate' : 'experience letter'} ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            
            {item.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {item.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-primary w-6' 
                          : 'bg-foreground/50 hover:bg-foreground/70'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Type Badge */}
            <div className="absolute top-4 left-4">
              <span className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm ${
                item.type === 'education' 
                  ? 'bg-primary/20 text-primary border border-primary/30' 
                  : 'bg-accent/20 text-accent border border-accent/30'
              }`}>
                {item.type === 'education' ? (
                  <GraduationCap size={16} />
                ) : (
                  <Briefcase size={16} />
                )}
                {item.type === 'education' ? 'Certificate' : 'Experience Letter'}
              </span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-2 gradient-text">
            {item.title}
          </h2>
          
          <p className="text-lg font-medium text-foreground mb-4">{item.institution}</p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary">
              <Calendar size={14} />
              <span>{item.period}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary">
              <MapPin size={14} />
              <span>{item.location}</span>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            {item.description}
          </p>

          {/* Achievements */}
          {item.achievements && item.achievements.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-foreground mb-3">
                {item.type === 'education' ? 'Achievements' : 'Key Accomplishments'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.achievements.map((achievement, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-primary/10 text-primary border border-primary/20"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
