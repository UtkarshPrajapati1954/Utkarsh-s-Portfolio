import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] floating-blob" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/15 rounded-full blur-[100px] floating-blob-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Greeting badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 fade-in-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </div>

        {/* Main heading */}
        <h1 
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          Hi! I'm{' '}
          <span className="gradient-text glow-text">Utkarsh</span>,
          <br />
          <span className="text-muted-foreground">A Software Developer</span>
        </h1>

        {/* Description */}
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          I am a self-motivated and solutions-oriented Software Developer with a strong commitment 
          to continuous learning and innovation. I specialize in building modern, efficient, and 
          scalable web applications.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => handleNavClick('#projects')}
          >
            View My Work
          </Button>
          <Button 
            variant="hero-outline" 
            size="xl"
            onClick={() => handleNavClick('#contact')}
          >
            <Mail className="mr-2" size={20} />
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div 
          className="flex items-center justify-center gap-4 fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="https://www.linkedin.com/in/utkarsh-prajapati-"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/UtkarshPrajapati1954"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="mailto:prajapatiutkarsh1954@gmail.com"
            className="p-3 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

    </section>
  );
};
