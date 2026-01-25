import { Brain, Code, Code2, CodeIcon, Heart, HeartHandshake } from 'lucide-react';

export const Footer = () => {
  const currentYear = 2025;

  return (
    <footer className="py-8 px-6 border-t border-border/30 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo */}
          <a
            href="#home"
            className="font-display font-bold text-xl gradient-text"
          >
            UP<span className="text-foreground">.</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Designed & developed
            <Code2
              size={14}
              className="text-primary fill-primary mx-1"
            />
            By Utkarsh Prajapati. All rights reserved.
          </p>

          {/* Quick links */}
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};
