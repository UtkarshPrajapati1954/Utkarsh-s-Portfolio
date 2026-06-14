import {ExternalLink,Eye, X,ChevronLeft,ChevronRight,} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { ProjectDetailsModal } from './ProjectDetailsModal';

const projects = [
  {
  title: 'BuilderOne CRM',
  description:
    'A comprehensive Builder CRM solution designed to streamline lead management, follow-ups, property listings, customer interactions, and payment tracking. The system helps builders and real estate teams manage their sales pipeline efficiently through role-based access, dashboards, and real-time analytics.',

  technologies: [
    'ASP.NET Core Web API',
    'C#',
    'React.js',
    'MySQL',
    'Entity Framework Core',
    'JWT Authentication',
    'Bootstrap'
  ],

  liveLink: 'https://builderone.onrender.com/',

  images: [
    'https://res.cloudinary.com/dsuyzccs6/image/upload/f_auto,q_auto/Login_js7mdh',
    'https://very-amaranth-mgylsv56.edgeone.app/Dashboard.png',
    'https://allied-sapphire-dtk2yc36.edgeone.app/Leads.png',
    'https://builderone.edgeone.app/Properties.png',
    'https://running-blue-lfrdkbkh.edgeone.app/FollowUp.png',
    'https://builderone1.edgeone.app/Reports.png'
  ],

  details:
  'BuilderOne CRM is an enterprise-grade real estate management platform developed to simplify and automate builder sales operations. The system provides end-to-end management of leads, follow-ups, properties, customers, payments, and team activities. Key features include role-based access control, JWT authentication, dashboard analytics, Kanban lead tracking, property media management, payment monitoring, and comprehensive reporting. The application was built using React.js, ASP.NET Core Web API, C#, Entity Framework Core, and MySQL, delivering a responsive, secure, and scalable solution for modern real estate businesses.'
},
  {
  title: 'Personal Portfolio Website',
  description:
    'This portfolio showcases my work and skills in a clear and professional way. Each project highlights the challenges I tackled, the approach I took, and the results I achieved. It\'s designed to give you a quick insight into my experience, problem-solving abilities, and attention to detail. Feel free to explore and reach out if you\'d like to collaborate!',
  technologies: ['React - Frontend framework', 'TypeScript - Type safety', 'Vite - Build tool', 'Tailwind CSS - Styling', 'shadcn/ui - UI components'],
  liveLink: '#',
  images: [
    'https://res.cloudinary.com/dhpfn4umb/image/upload/v1769019287/kgrpcenleedlzx6fvxgk.png',
    
  ],
  details:
    'This portfolio showcases my work and skills in a clear and professional way. Each project highlights the challenges I tackled, the approach I took, and the results I achieved. It\'s designed to give you a quick insight into my experience, problem-solving abilities, and attention to detail. Feel free to explore and reach out if you\'d like to collaborate!',
},

  {
    title: 'E-Commerce Real Estate Platform',
    description:
      'This project was developed by our team during the national hackathon "Hack.SVIT", organized at Sardar Vallabhbhai Patel Institute of Technology, Vasad. I was responsible for developing the frontend of the application, where I applied my learning to build a responsive and user-friendly interface. This project greatly enhanced my practical skills and overall learning experience.',
    technologies: ['React Js', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    liveLink:
      'https://realestatetestingwebsite.on.drv.tw/front-end%20real-estate%20website/desgin/home.html',
    images: [
      'https://res.cloudinary.com/dhpfn4umb/image/upload/v1768757902/bjbwpgy0pn0b2kaxet0r.png',
      'https://res.cloudinary.com/dhpfn4umb/image/upload/v1768757990/vdfdatoyekppskall2za.png',
      'https://res.cloudinary.com/dhpfn4umb/image/upload/v1768758074/ni1lhq9fwktb4cbnm0mc.png',
      'https://res.cloudinary.com/dhpfn4umb/image/upload/v1768758117/l2xiloth9lwrv3ex89rr.png',
      'https://res.cloudinary.com/dhpfn4umb/image/upload/v1768758125/c6swkumwqrfg7rcn9eup.png',
    ],
    details:
      'This project was developed by our team during the international hackathon "Hack.SVIT", organized at Sardar Vallabhbhai Patel Institute of Technology, Vasad. I was responsible for developing the frontend of the application, where I applied my learning to build a responsive and user-friendly interface. This project greatly enhanced my practical skills and overall learning experience.',
  },
  
  // {
  //   title: 'Employee Portal Dashboard',
  //   description:
  //     'Internal portal for employee management, attendance tracking, and performance reviews. Streamlined HR processes with intuitive user interface.',
  //   technologies: ['ASP.NET Core', 'C#', 'SQL Server', 'JavaScript', 'CSS'],
  //   liveLink: '#',
  //   images: [
  //     'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop',
  //     'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=450&fit=crop',
  //   ],
  //   details:
  //     'An internal employee portal that centralizes HR operations and improves workforce management. Features include automated attendance tracking, performance review workflows, leave management, and employee self-service capabilities. The intuitive dashboard provides managers with actionable insights into team productivity and engagement.',
  // },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] =
    useState<typeof projects[0] | null>(null);

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
    >
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `blob-float ${
                15 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>

          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 px-4 md:px-0">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full"
            >
              <h3 className="font-display font-semibold text-xl md:text-2xl mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <span className="text-sm text-muted-foreground block mb-2">
                  Technologies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/40 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <Button
                  variant="hero"
                  size="sm"
                  className="flex-1"
                  asChild
                >
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </Button>

                <Button
                  variant="hero-outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => setSelectedProject(project)}
                >
                  <Eye size={16} className="mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default function ProjectGallery({ project }) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!isViewerOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setIsViewerOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () =>
      window.removeEventListener('keydown', handleKeyDown);
  }, [isViewerOpen, currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* VIEW BUTTON */}
      <button
        onClick={() => {
          setCurrentImageIndex(0);
          setIsViewerOpen(true);
        }}
        className="flex items-center justify-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100"
      >
        <Eye size={16} />
        View Images
      </button>

      {/* IMAGE VIEWER MODAL */}
      {isViewerOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={() => setIsViewerOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={28} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-white"
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={project.images[currentImageIndex]}
            alt="Project"
            className="max-w-[90%] max-h-[80%] rounded-xl shadow-lg"
          />

          <button
            onClick={nextImage}
            className="absolute right-6 text-white"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
}
