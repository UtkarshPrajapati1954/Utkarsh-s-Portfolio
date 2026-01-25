import { useEffect, useRef, useState } from 'react';

export const CursorEffect = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const trailPositions = useRef<{ x: number; y: number }[]>(Array(6).fill({ x: 0, y: 0 }));
  const animationRef = useRef<number>();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let lastScrollY = window.scrollY;
    let scrollTimeout: ReturnType<typeof setTimeout>;
    let touchTimeout: ReturnType<typeof setTimeout>;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      // Smooth cursor following with lerp
      positionRef.current.x = lerp(positionRef.current.x, targetRef.current.x, 0.15);
      positionRef.current.y = lerp(positionRef.current.y, targetRef.current.y, 0.15);

      // Update main cursor elements
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${positionRef.current.x - 20}px, ${positionRef.current.y - 20}px, 0)`;
      }
      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${positionRef.current.x - 40}px, ${positionRef.current.y - 40}px, 0)`;
      }
      if (ambientRef.current) {
        ambientRef.current.style.transform = `translate3d(${positionRef.current.x - 70}px, ${positionRef.current.y - 70}px, 0)`;
      }

      // Update trail with delayed following
      for (let i = trailPositions.current.length - 1; i > 0; i--) {
        trailPositions.current[i] = {
          x: lerp(trailPositions.current[i].x, trailPositions.current[i - 1].x, 0.3),
          y: lerp(trailPositions.current[i].y, trailPositions.current[i - 1].y, 0.3),
        };
      }
      trailPositions.current[0] = {
        x: lerp(trailPositions.current[0].x, positionRef.current.x, 0.4),
        y: lerp(trailPositions.current[0].y, positionRef.current.y, 0.4),
      };

      // Apply trail positions
      trailRefs.current.forEach((ref, i) => {
        if (ref) {
          const scale = 0.3 + ((trailPositions.current.length - i) / trailPositions.current.length) * 0.5;
          const size = 16 * scale;
          ref.style.transform = `translate3d(${trailPositions.current[i].x - size / 2}px, ${trailPositions.current[i].y - size / 2}px, 0)`;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const updateTarget = (x: number, y: number) => {
      targetRef.current = { x, y };
      setIsVisible(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateTarget(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        updateTarget(touch.clientX, touch.clientY);
        clearTimeout(touchTimeout);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        // Immediately set position on touch start
        positionRef.current = { x: touch.clientX, y: touch.clientY };
        targetRef.current = { x: touch.clientX, y: touch.clientY };
        trailPositions.current = Array(6).fill({ x: touch.clientX, y: touch.clientY });
        setIsVisible(true);
      }
    };

    const handleScroll = () => {
      const scrollDelta = Math.abs(window.scrollY - lastScrollY);
      
      if (scrollDelta > 3) {
        // Show effect at last touch/mouse position during scroll
        setIsVisible(true);
      }
      
      lastScrollY = window.scrollY;
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Keep visible a bit longer after scroll stops
      }, 800);
    };

    const handleTouchEnd = () => {
      touchTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 600);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Start animation loop
    animate();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      clearTimeout(touchTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease-out' }}
    >
      {/* Main cursor glow */}
      <div
        ref={cursorRef}
        className="absolute w-10 h-10 rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.5) 0%, hsl(var(--primary) / 0.2) 40%, transparent 70%)',
        }}
      />
      
      {/* Outer glow ring */}
      <div
        ref={outerRef}
        className="absolute w-20 h-20 rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, hsl(var(--primary) / 0.1) 40%, transparent 70%)',
        }}
      />

      {/* Large ambient glow */}
      <div
        ref={ambientRef}
        className="absolute w-[140px] h-[140px] rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, hsl(var(--primary) / 0.04) 50%, transparent 70%)',
        }}
      />

      {/* Trail particles */}
      {Array(6).fill(0).map((_, index) => {
        const opacity = 0.15 + ((6 - index) / 6) * 0.35;
        const scale = 0.3 + ((6 - index) / 6) * 0.5;
        return (
          <div
            key={index}
            ref={(el) => {
              if (el) trailRefs.current[index] = el;
            }}
            className="absolute rounded-full will-change-transform"
            style={{
              width: 16 * scale,
              height: 16 * scale,
              background: `radial-gradient(circle, hsl(var(--primary) / ${opacity}) 0%, transparent 70%)`,
            }}
          />
        );
      })}
    </div>
  );
};
