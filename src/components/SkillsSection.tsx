import { Layout, Server, Database, Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Bootstrap 5',
      'AJAX',
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      'Core PHP 8',
      'ASP.NET Core',
      'C#',
      '.NET MVC',
      'RESTful APIs',
      'PDO',
      'OOP',
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      'MySQL',
      'Database Design',
      'SQL Queries',
      'Query Optimization',
    ],
  },
  {
    title: 'Tools & Others',
    icon: Code2,
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Swagger / OpenAPI',
      'Composer',
      'XAMPP',
      'VS Code',
      'Visual Studio',
      'Razorpay',
      'Problem Solving',
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/20 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Tech Stack
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category header */}
              <div className="mb-5">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 mb-4">
                  <category.icon size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
