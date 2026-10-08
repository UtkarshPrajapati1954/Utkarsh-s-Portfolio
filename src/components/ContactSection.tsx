import { Mail, Linkedin, Github, Send, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'prajapatiutkarsh1954@gmail.com',
    href: 'mailto:prajapatiutkarsh1954@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/utkarsh',
    href: 'https://www.linkedin.com/in/utkarsh-prajapati-',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/utkarsh',
    href: 'https://github.com/UtkarshPrajapati1954',
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:prajapatiutkarsh1954@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Your message will be sent via email.",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Wave SVG background with soft color */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          className="wave-animation"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '200px' }}
        >
          <path
            fill="hsl(var(--primary) / 0.08)"
            d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,181.3C960,213,1056,235,1152,224C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <svg
          className="wave-animation absolute bottom-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '150px', animationDelay: '-2s' }}
        >
          <path
            fill="hsl(var(--primary) / 0.05)"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,133.3C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out through any of these channels
          </p>
        </div>

        {/* Get In Touch Cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label !== 'Email' ? '_blank' : undefined}
              rel={item.label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <item.icon size={24} />
              </div>
              <div className="text-center">
                <p className="font-medium text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button variant="hero" size="lg" asChild>
            <a href="mailto:prajapatiutkarsh1954@gmail.com">
              <Mail size={18} className="mr-2" />
              Send me an email
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
  <a href="/resume.pdf" download="Utkarsh-Prajapati-Resume.pdf">
    <Download size={18} className="mr-2" />
    Download Resume
  </a>
</Button>
        </div>

        {/* Motivational text */}
        <p className="text-center text-muted-foreground mb-12">
          Looking for a dedicated full-stack developer? Let's discuss how I can contribute to your team!
        </p>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-card to-secondary/20 border border-border/50">
          <h3 className="font-display font-semibold text-2xl mb-6 text-center">
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder=" YourName SurName"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="youremail@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                placeholder="Describe what you’re looking for ..."
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              <Send size={18} className="mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
