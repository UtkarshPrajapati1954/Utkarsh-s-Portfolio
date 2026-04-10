import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { CertificateModal } from './CertificateModal';
import { GraduationCap, Briefcase, Eye, Calendar, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';
// Remove the CertificateModal import
interface TimelineItem {
  id: string;
  type: 'education' | 'experience';
  title: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  images: string[];
}


// Image Preview Modal Component
const ImagePreviewModal = ({ item, onClose }: { item: TimelineItem; onClose: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div className="relative w-auto h-auto max-w-[90vw] max-h-[85vh] mt-16">
        {/* Image Counter */}
        {item.images.length > 1 && (
          <div className="absolute -top-14 left-1/2 -translate-x-1/2 text-gray-800 dark:text-white text-sm font-medium bg-white/90 dark:bg-black/70 px-4 py-2 rounded-full shadow-lg">
            {currentImageIndex + 1} / {item.images.length}
          </div>
        )}

        {/* Image Container */}
        <div 
          className="relative rounded-xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - Top Right of Image */}
          <button
  onClick={onClose}
  className="absolute top-3 right-3 z-10 h-8 w-8 bg-white/20 hover:bg-white/30 backdrop-blur-md text-black dark:text-black rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 border border-white/30"
  title="Close (ESC)"
>
  <X size={18} strokeWidth={2} />
</button>

          <img
            src={item.images[currentImageIndex]}
            alt={`${item.type === 'education' ? 'Certificate' : 'Experience Letter'} - Image ${currentImageIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain"
          />
          
          {/* Navigation Arrows for Multiple Images */}
          {item.images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/70 hover:bg-white dark:hover:bg-black/90 text-gray-800 dark:text-white h-10 w-10 rounded-full shadow-lg"
              >
                <ChevronLeft size={24} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/70 hover:bg-white dark:hover:bg-black/90 text-gray-800 dark:text-white h-10 w-10 rounded-full shadow-lg"
              >
                <ChevronRight size={24} />
              </Button>
            </>
          )}

          {/* Image Info Footer */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 text-white">
            <h3 className="font-bold text-lg mb-0.5">{item.title}</h3>
            <p className="text-xs opacity-90">{item.institution}</p>
            <p className="text-xs opacity-75 mt-0.5">{item.period}</p>
          </div>

          {/* Image Dots Indicator */}
          {item.images.length > 1 && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
              {item.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'w-8 bg-white' 
                      : 'w-2 bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const timelineData: TimelineItem[] = [
  {
    id: '1',
    type: 'education',
    title: 'Bachelor Of Enginering',
    institution: ' Gujarat Technological University ',
    location: 'Sardar Vallabhabhai Patel Insituite Of Technology , Vasad',
    period: '2021 - 2025',
    description: 'Specialized in Information Technology with focus on web technologies and software engineering.',
    achievements: ['CGPA:  8.18 / 10.0'],
    images: [
      'https://res.cloudinary.com/dv2pntqsr/image/upload/v1770481957/joixzkwv6ubfhfimheu5.jpg'
    ]
  },
  {
    id: '2',
    type: 'experience',
    title: 'Junior Developer',
    institution: 'SHIVALIK TRANSPORT PTY LTD, Perth, WA',
    location: 'Remote - Nadiad, Gujarat',
    period: 'Dec-2022 - Dec-2024',
    description: 'Worked as a Junior Developer on a part-time, remote basis with SHIVALIK TRANSPORT PTY LTD while pursuing a Bachelor of Engineering in Information Technology. Gained hands-on experience in managing and analysing transport-related data, preparing reports using Microsoft Excel, and working with data from an AWS-hosted MySQL database. Supported web development activities and contributed to an ASP.NET and C#-based system through application support, feature enhancements, and debugging, demonstrating steady technical growth and effective balance between academic and professional responsibilities.',
    achievements: ['Hands-on learning', 'Web Development' ],
    images: [
      'https://res.cloudinary.com/dbxwiln0a/image/upload/v1773140437/wz7xiaqk0pj37j4b2bqw.png'
    ]
  },
  {
    id: '3',
    type: 'experience',
    title: 'Software Developer Intern',
    institution: 'ScriptMatrix Private Limited',
    location: 'Vadodara, Gujarat.',
    period: 'Feb-2025 - April-2025',
    description: 'Started a journey of exploration and learning in full-stack web development, gaining hands-on experience with real-world CRM applications, understanding application architecture, databases, user workflows, and improving problem-solving skills, coding practices, and team collaboration.',
    achievements: ['Hands-on learning', 'Architecture understanding' ],
    images: [
      'https://res.cloudinary.com/dmf29idne/image/upload/v1769339206/hl6gindak0rzpbz2dfvy.jpg'
    ]
  },
  {
    id: '4',
    type: 'experience',
    title: 'Software Developer Trainee',
    institution: 'ScriptMatrix Private Limited',
    location: 'Vadodara, Gujarat.',
    period: 'May-2025 - Oct-2025',
    description: 'Software Development Trainee with hands-on experience in ASP.NET, C#, SQL Server, HTML, CSS, Bootstrap, and JavaScript. Gained practical knowledge of full-stack development, application architecture, database handling, and user workflows, while improving problem-solving, coding practices, and team collaboration.',
    achievements: ['Database handling', 'Problem-solving growth', 'Team collaboration'],
    images: [
      'https://res.cloudinary.com/dmf29idne/image/upload/v1769339210/sp1itldxylkjhd5n2l6o.jpg'
    ]
  },
  {
    id: '5',
    type: 'experience',
    title: 'Full Stack Developer [.Net(c#)]',
    institution: 'ScriptMatrix Private Limited',
    location: 'Vadodara, Gujarat.',
    period: 'Nov-2025 - Jan-2026',
    description: 'Worked as a Full Stack Developer, handling ASP.NET, C#, MySQL Server, HTML, CSS, Bootstrap, and JavaScript, with hands-on experience across both frontend and backend development. Contributed to the design, development, and integration of RESTful APIs to enable seamless communication between client-side and server-side systems. Actively participated in application architecture design, database management, user workflow implementation, and client communication, while continuously improving problem-solving abilities, clean coding practices, API security, and team collaboration.',
    achievements: ['Full-Stack Development', 'Web API', 'User Workflow Implementation', 'Clean Coding Practices', 'RESTful API Development & Integration','Problem-Solving', 'Client Communication'],
    images: [
      'https://res.cloudinary.com/dv2pntqsr/image/upload/v1770481962/lio2f8buvxbdjaruegja.jpg'
    ]
  }
];

export const EducationExperienceSection = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'education' | 'experience'>('all');
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  const filteredData = timelineData.filter(item => 
    activeFilter === 'all' ? true : item.type === activeFilter
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineHeight = rect.height;
      
      // Calculate how much of the timeline is visible/scrolled past
      const scrolledPast = windowHeight - rect.top;
      const totalScrollRange = timelineHeight + windowHeight * 0.5;
      
      const progress = Math.min(Math.max(scrolledPast / totalScrollRange, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredData]);

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
          Education & <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          My academic journey and professional experience that shaped my career
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          {(['all', 'education', 'experience'] as const).map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className="capitalize"
            >
              {filter === 'education' && <GraduationCap size={16} className="mr-2" />}
              {filter === 'experience' && <Briefcase size={16} className="mr-2" />}
              {filter}
            </Button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="max-w-4xl mx-auto relative">
        {/* Timeline Line - Desktop */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/30 hidden md:block overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-primary/50 transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>
        
        {/* Mobile Timeline Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border/30 md:hidden overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-primary/50 transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {filteredData.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex items-start gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg">
                  {item.type === 'education' ? (
                    <GraduationCap size={18} className="text-primary" />
                  ) : (
                    <Briefcase size={18} className="text-primary" />
                  )}
                </div>
              </div>

              {/* Content Card */}
              <div 
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}
              >
                <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                        item.type === 'education' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-accent/10 text-accent'
                      }`}>
                        {item.type === 'education' ? 'Education' : 'Experience'}
                      </span>
                      <h3 className="font-display font-bold text-lg md:text-xl text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium mt-1">{item.institution}</p>
                    </div>

                    {/* View Certificate/Letter Button */}
<Button
  variant="outline"
  size="icon"
  onClick={() => setSelectedItem(item)}
  className="shrink-0 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
  title={item.type === 'education' ? 'View Certificate' : 'View Experience Letter'}
>
  <Eye size={18} />
</Button>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  {item.achievements && (
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </div>
          ))}
        </div>
      </div>

     {/* Image Preview Modal */}
{selectedItem && (
  <ImagePreviewModal
    item={selectedItem}
    onClose={() => setSelectedItem(null)}
  />
)}

      
    </section>
  );
};
