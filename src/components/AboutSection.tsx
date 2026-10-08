export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Floating blobs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-20 -left-20 w-72 h-72 text-primary/10 floating-blob"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.9,-0.6C87.8,15.1,83,30.2,74.5,43C66,55.8,53.8,66.3,39.9,74.4C26,82.5,10.4,88.2,-4.6,89.1C-19.6,90,-34.1,86.1,-46.8,78.5C-59.5,70.9,-70.4,59.5,-78.3,46C-86.2,32.5,-91.1,16.3,-91.4,-0.2C-91.7,-16.7,-87.4,-33.4,-78.8,-47C-70.2,-60.6,-57.3,-71.1,-43,-77.7C-28.7,-84.3,-13,-87.1,1.4,-89.5C15.9,-91.9,30.6,-83.7,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="absolute bottom-20 -right-20 w-96 h-96 text-primary/10 floating-blob-delayed"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M39.9,-67.1C52.8,-60.2,65,-51.8,73.4,-40.1C81.8,-28.4,86.5,-14.2,87.2,0.4C87.9,15,84.5,30,76.8,42.5C69.1,55,57,65,43.4,72.3C29.8,79.6,14.9,84.2,0,84.2C-14.9,84.2,-29.8,79.5,-42.9,71.8C-56,64.1,-67.3,53.4,-75.3,40.4C-83.3,27.4,-88,12.2,-88,-2.8C-88,-17.8,-83.3,-35.6,-73.4,-48.6C-63.5,-61.6,-48.4,-69.8,-34,-73.3C-19.6,-76.8,-5.9,-75.6,5.5,-75.2C16.9,-74.8,27,-74,39.9,-67.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Get to Know <span className="gradient-text">Me Better</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Full Stack Developer focused on impactful end-to-end software solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Image/Avatar - compact on mobile */}
          <div className="relative order-1 lg:order-1">
            <div className="relative aspect-square max-w-[200px] sm:max-w-[280px] lg:max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl blur-xl opacity-60" />

              {/* Main image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl">
                <img
                  src="https://ik.imagekit.io/utkarshprajapati/UPP.jpeg"
                  alt="Utkarsh Prajapati"
                 className="w-full h-full object-cover object-[50%_10%]"


                />

              </div>
            </div>
          </div>

          {/* Content - compact on mobile */}
          <div className="space-y-4 lg:space-y-6 order-2 lg:order-2">
            <div className="prose prose-lg dark:prose-invert max-w-none">
  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">
    I’m a dedicated{" "}
    <span className="text-primary font-medium">Full Stack Developer</span>{" "}
    from Nadiad, focused on building reliable, scalable, and
    performance-driven web applications. I approach development with a
    strong problem-solving mindset, aiming to deliver solutions that are
    maintainable, efficient, and user-friendly.
  </p>

  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">
    I primarily work with{" "}
    <span className="text-foreground font-medium text-sm leading-tight">
      Core PHP 8, ASP.NET Core, C#, MySQL
    </span>
    , along with{" "}
    <span className="text-foreground font-medium text-sm leading-tight">
      JavaScript, React.js, Bootstrap, HTML5, and CSS3
    </span>{" "}
    for frontend development. I also have experience with{" "}
    <span className="text-foreground font-medium text-sm leading-tight">
      RESTful APIs, third-party API integrations, ABDM APIs, AJAX, PDO, and
      Razorpay
    </span>
    . I focus on clean, maintainable code and translating complex business
    requirements into practical, end-to-end solutions while continuously
    improving my technical skills.
  </p>
</div>

            {/* Hobbies */}
            <div className="pt-2 lg:pt-4">
              <span className="text-xs sm:text-sm text-foreground mb-2 lg:mb-3 block text-primary font-large font-bold">Interests & Hobbies:</span>
              <div className="flex flex-wrap gap-2">
                {['Travelling', 'Sports', 'Gaming'].map((hobby) => (
                  <span
                    key={hobby}
                    className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm rounded-lg bg-secondary/50 border border-border/50 text-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
