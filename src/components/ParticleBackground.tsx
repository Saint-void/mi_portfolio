import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Setup particles
    const particleCount = Math.min(100, Math.floor((width * height) / 15000));
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      pulseSpeed: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.4,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.5 + 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(document.body);

    // Draw grid
    const drawGrid = (context: CanvasRenderingContext2D) => {
      context.strokeStyle = 'rgba(26, 26, 26, 0.15)';
      context.lineWidth = 0.5;

      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }
    };

    const animate = () => {
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      drawGrid(ctx);

      // Render and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Pulse alpha
        p.alpha += p.pulseSpeed;
        if (p.alpha > 0.65 || p.alpha < 0.1) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, p.alpha)})`;
        ctx.fill();

        // Connect particles close to each other
        particles.forEach((other) => {
          if (p === other) return;
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            const lineAlpha = (1 - dist / 120) * 0.04;
            ctx.strokeStyle = `rgba(0, 210, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw subtle decorative coordinate points in the background
      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.font = '8px monospace';
      ctx.fillText('SYS.LOC: [VOID://ORIGIN]', 30, height - 30);
      ctx.fillText('LATENCY: 12ms', width - 120, height - 30);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particles-canvas"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
