import { useEffect, useRef } from 'react';

export const Background3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let time = 0;

    interface Orb {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      phase: number;
    }

    let orbs: Orb[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initOrbs();
    };

    const initOrbs = () => {
      orbs = [];
      const orbCount = 5;
      
      for (let i = 0; i < orbCount; i++) {
        orbs.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 150 + Math.random() * 200,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Check if dark mode
      const isDark = document.documentElement.classList.contains('dark');
      
      orbs.forEach((orb, i) => {
        // Smooth floating motion
        orb.x += orb.speedX + Math.sin(time + orb.phase) * 0.5;
        orb.y += orb.speedY + Math.cos(time + orb.phase * 0.7) * 0.5;

        // Gentle mouse influence
        const dx = mouseX - orb.x;
        const dy = mouseY - orb.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 400) {
          orb.x += dx * 0.001;
          orb.y += dy * 0.001;
        }

        // Wrap around smoothly
        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius;
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius;
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius;

        // Pulsing radius
        const pulsingRadius = orb.radius + Math.sin(time * 0.8 + orb.phase) * 30;

        // Create gradient based on theme
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, pulsingRadius
        );

        if (isDark) {
          // Dark theme: cyan/teal glow - increased visibility
          const hue = 174 + i * 10;
          gradient.addColorStop(0, `hsla(${hue}, 72%, 56%, 0.35)`);
          gradient.addColorStop(0.4, `hsla(${hue}, 72%, 50%, 0.2)`);
          gradient.addColorStop(0.7, `hsla(${hue}, 60%, 45%, 0.08)`);
          gradient.addColorStop(1, 'transparent');
        } else {
          // Light theme: blue/cyan glow - increased visibility
          const hue = 199 + i * 8;
          gradient.addColorStop(0, `hsla(${hue}, 89%, 48%, 0.25)`);
          gradient.addColorStop(0.4, `hsla(${hue}, 89%, 50%, 0.15)`);
          gradient.addColorStop(0.7, `hsla(${hue}, 70%, 55%, 0.06)`);
          gradient.addColorStop(1, 'transparent');
        }

        ctx.beginPath();
        ctx.arc(orb.x, orb.y, pulsingRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw subtle connecting lines between nearby orbs
      orbs.forEach((orb, i) => {
        orbs.slice(i + 1).forEach((other) => {
          const dx = orb.x - other.x;
          const dy = orb.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 400) {
            const opacity = (1 - dist / 400) * (isDark ? 0.2 : 0.15);
            ctx.beginPath();
            ctx.moveTo(orb.x, orb.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = isDark 
              ? `hsla(174, 72%, 56%, ${opacity})`
              : `hsla(199, 89%, 48%, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      }
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  );
};