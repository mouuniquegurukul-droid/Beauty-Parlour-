import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface SpaceBackgroundProps {
  particleCount?: number;
  className?: string;
  speed?: number;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  isSoft: boolean;
  colorType: "champagne" | "ivory" | "maroon";
  baseAlpha: number;
  pulseSpeed: number;
  pulsePhase: number;
  vx: number;
  vy: number;
}

/**
 * SpaceBackground Component
 *
 * Adapted specifically for the Bengali bridal aesthetic:
 * - Replaces visual flatness with delicate champagne dust, soft ivory highlights,
 *   and muted maroon particles over the warm ivory (#F6F0E7) background.
 * - Particle opacity: 0.18 - 0.35 (clearly visible in empty ivory areas).
 * - Particle size: 1px - 3px with occasional 4px soft particles.
 * - Movement: slow, graceful floating movement.
 * - Fully respects prefers-reduced-motion (freezes movement).
 * - Responsive particle count: Mobile: 100, Tablet: 150, Desktop: 220.
 */
export const SpaceBackground: React.FC<SpaceBackgroundProps> = ({
  particleCount,
  className,
  speed = 0.35,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Device Pixel Ratio capped at 2 for performance
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Check for prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Responsive particle count: Mobile 100, Tablet 150, Desktop 220
    const getTargetCount = (): number => {
      if (typeof particleCount === "number" && particleCount > 0) {
        return particleCount;
      }
      if (width < 768) return 100;
      if (width < 1024) return 150;
      return 220;
    };

    const targetCount = getTargetCount();

    // Palette: Champagne gold, Muted maroon/wine, Soft warm ivory
    const createParticle = (): Particle => {
      const roll = Math.random();
      let colorType: "champagne" | "ivory" | "maroon" = "champagne";
      let baseAlpha = 0.26;

      if (roll < 0.55) {
        // ~55% Champagne dust
        colorType = "champagne";
        baseAlpha = 0.22 + Math.random() * 0.11; // 0.22 to 0.33
      } else if (roll < 0.80) {
        // ~25% Muted maroon/wine accent
        colorType = "maroon";
        baseAlpha = 0.20 + Math.random() * 0.12; // 0.20 to 0.32
      } else {
        // ~20% Soft warm ivory highlight
        colorType = "ivory";
        baseAlpha = 0.24 + Math.random() * 0.10; // 0.24 to 0.34
      }

      // Particle size: 1px-3px diameter (radius 0.5-1.5), occasional 4px soft particles (radius 1.8-2.2)
      const isSoft = Math.random() < 0.16;
      const radius = isSoft
        ? 1.8 + Math.random() * 0.4 // ~4px diameter soft particle
        : 0.6 + Math.random() * 0.9; // 1px - 3px diameter

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        isSoft,
        colorType,
        baseAlpha,
        pulseSpeed: 0.01 + Math.random() * 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
        vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.12 * speed,
        vy: prefersReducedMotion ? 0 : (-0.08 - Math.random() * 0.16) * speed,
      };
    };

    const particles: Particle[] = Array.from({ length: targetCount }, createParticle);

    // Color mapper using the website's bridal palette
    const getColor = (colorType: "champagne" | "ivory" | "maroon", alpha: number) => {
      switch (colorType) {
        case "champagne":
          // Champagne gold #B89B68
          return `rgba(184, 155, 104, ${alpha.toFixed(3)})`;
        case "maroon":
          // Muted maroon/wine #541C28
          return `rgba(84, 28, 40, ${alpha.toFixed(3)})`;
        case "ivory":
          // Soft warm ivory highlight
          return `rgba(255, 252, 245, ${alpha.toFixed(3)})`;
      }
    };

    let startTime = performance.now();

    const render = (currentTime: number) => {
      const elapsed = (currentTime - startTime) * 0.001;

      // Clear transparently so existing ivory page background shows through
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Wrap seamlessly
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          } else if (p.y > height + 10) {
            p.y = -10;
            p.x = Math.random() * width;
          }

          if (p.x < -10) {
            p.x = width + 10;
          } else if (p.x > width + 10) {
            p.x = -10;
          }
        }

        // Breathing pulse strictly in the 0.18 - 0.35 opacity range
        const pulse = Math.sin(elapsed * p.pulseSpeed * 60 + p.pulsePhase);
        const alpha = Math.max(0.18, Math.min(0.35, p.baseAlpha + pulse * 0.05));

        if (p.isSoft) {
          // Occasional 4px soft particle with gentle radial fade
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
          gradient.addColorStop(0, getColor(p.colorType, alpha));
          gradient.addColorStop(1, getColor(p.colorType, 0));
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Standard 1px - 3px particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = getColor(p.colorType, alpha);
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render(performance.now());
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    const handleResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      for (const p of particles) {
        if (p.x > width) p.x = Math.random() * width;
        if (p.y > height) p.y = Math.random() * height;
      }

      if (prefersReducedMotion) {
        render(performance.now());
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [particleCount, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "fixed inset-0 w-full h-full pointer-events-none block z-0",
        className
      )}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};

export default SpaceBackground;
