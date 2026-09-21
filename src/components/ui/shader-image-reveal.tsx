import React, { useRef, useState, useEffect, useCallback } from 'react';

export type ShaderVariantId = 0 | 1 | 2 | 3; // 0: Silk Sweep, 1: Golden Bloom, 2: Maroon Curtain, 3: Soft Light Wave

export interface ShaderImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  animationVariant?: ShaderVariantId;
  staggerDelay?: number;
  triggerKey?: string | number;
  badge?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
}

const VERTEX_SHADER_SRC = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER_SRC = `
  precision mediump float;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_progress;
  uniform int u_variant;

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.y = 1.0 - st.y; // Match standard screen coordinates

    // Luxury Bengali Bridal Palette
    vec3 maroon = vec3(0.329, 0.110, 0.157);       // #541C28 Deep signature maroon
    vec3 deepWine = vec3(0.20, 0.05, 0.08);        // Deep luxury burgundy
    vec3 gold = vec3(0.722, 0.608, 0.408);         // #B89B68 Champagne gold
    vec3 warmIvory = vec3(0.965, 0.941, 0.906);    // #F6F0E7 Warm ivory
    vec3 richCrimson = vec3(0.42, 0.13, 0.18);

    float t = u_time * 0.0016;

    // Organic silk fluid dynamics
    float waveA = sin(st.x * 5.0 + st.y * 3.5 + t * 2.2);
    float waveB = cos(st.y * 6.5 - st.x * 4.0 + t * 2.8);
    float waveC = sin((st.x + st.y) * 5.5 + t * 1.5);
    float flow = (waveA + waveB + waveC) * 0.333;

    // Luxury cosmetic shimmer
    float shimmer = pow(max(0.0, sin(st.x * 10.0 + st.y * 8.0 + t * 3.5 + flow)), 5.0) * 0.4;

    // Harmonize palette
    vec3 baseCol = mix(deepWine, maroon, clamp(st.y + flow * 0.25, 0.0, 1.0));
    vec3 silkCol = mix(baseCol, richCrimson, sin(flow * 3.1415 + t) * 0.5 + 0.5);
    vec3 goldSilk = mix(silkCol, gold, smoothstep(-0.2, 0.5, flow) * 0.6 + shimmer);
    vec3 finalCol = mix(goldSilk, warmIvory, shimmer * 0.7);

    // Directional sweep based on variant
    float sweep = 0.0;
    if (u_variant == 0) {
      // Variant A: Silk sweep diagonal (bottom-left to top-right)
      sweep = (st.x + (1.0 - st.y)) * 0.5;
    } else if (u_variant == 1) {
      // Variant B: Golden bloom (center outward)
      sweep = length(st - vec2(0.5, 0.5)) * 1.3;
    } else if (u_variant == 2) {
      // Variant C: Maroon curtain (left to right)
      sweep = st.x;
    } else {
      // Variant D: Soft light wave (vertical top-down)
      sweep = (1.0 - st.y) + flow * 0.15;
    }

    // Mask gradient driven by progress
    float mask = smoothstep(u_progress * 1.4 - 0.2, u_progress * 1.4 + 0.3, sweep);
    
    // Overall canvas fade out as animation completes
    float alpha = mask * clamp((1.0 - u_progress * 1.1), 0.0, 1.0);

    gl_FragColor = vec4(finalCol, alpha);
  }
`;

export const ShaderImageReveal: React.FC<ShaderImageRevealProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
  animationVariant,
  staggerDelay = 0,
  triggerKey,
  badge,
  children,
  onClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Variant management: randomly select from 0-3 if not specified, avoiding repeat
  const [currentVariant, setCurrentVariant] = useState<ShaderVariantId>(() =>
    animationVariant !== undefined ? animationVariant : (Math.floor(Math.random() * 4) as ShaderVariantId)
  );
  const lastVariantRef = useRef<ShaderVariantId>(currentVariant);

  // Animation states: 'IDLE' | 'ANIMATING' | 'REVEALED'
  const [animStatus, setAnimStatus] = useState<'IDLE' | 'ANIMATING' | 'REVEALED'>('REVEALED');
  const [canvasOpacity, setCanvasOpacity] = useState<number>(0);
  const [imgStyle, setImgStyle] = useState<React.CSSProperties>({
    opacity: 1,
    transform: 'scale(1)',
    clipPath: 'none',
    visibility: 'visible',
  });

  const animStatusRef = useRef(animStatus);
  animStatusRef.current = animStatus;

  // WebGL context and handles
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const failsafeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Pick next variant (avoid repeating consecutively)
  const pickNextVariant = useCallback(() => {
    if (animationVariant !== undefined) {
      return animationVariant;
    }
    const candidates: ShaderVariantId[] = ([0, 1, 2, 3] as ShaderVariantId[]).filter(
      (v) => v !== lastVariantRef.current
    );
    const next = candidates[Math.floor(Math.random() * candidates.length)];
    lastVariantRef.current = next;
    return next;
  }, [animationVariant]);

  // WebGL setup
  const initWebGL = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return false;

    if (glRef.current && programRef.current) return true;

    try {
      const gl = canvas.getContext('webgl', { alpha: true, antialias: false, depth: false });
      if (!gl) return false;
      glRef.current = gl;

      const compileShader = (type: number, src: string) => {
        const shader = gl.createShader(type);
        if (!shader) return null;
        gl.shaderSource(shader, src);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          gl.deleteShader(shader);
          return null;
        }
        return shader;
      };

      const vs = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER_SRC);
      const fs = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SRC);
      if (!vs || !fs) return false;

      const program = gl.createProgram();
      if (!program) return false;
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.deleteProgram(program);
        return false;
      }

      programRef.current = program;

      // Set up quad buffer
      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      const positions = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

      const posAttr = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(posAttr);
      gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

      // Enable blending for smooth fade
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      return true;
    } catch {
      return false;
    }
  }, []);

  // Resize canvas according to container and capped DPR
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const gl = glRef.current;
    if (!canvas || !container || !gl) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width <= 0 || height <= 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const renderWidth = Math.floor(width * dpr);
    const renderHeight = Math.floor(height * dpr);

    if (canvas.width !== renderWidth || canvas.height !== renderHeight) {
      canvas.width = renderWidth;
      canvas.height = renderHeight;
      gl.viewport(0, 0, renderWidth, renderHeight);
    }
  }, []);

  // Complete reveal: force image 100% visible & cancel render loop
  const forceFullyRevealed = useCallback(() => {
    if (animFrameIdRef.current) {
      cancelAnimationFrame(animFrameIdRef.current);
      animFrameIdRef.current = null;
    }
    if (failsafeTimerRef.current) {
      clearTimeout(failsafeTimerRef.current);
      failsafeTimerRef.current = null;
    }
    setCanvasOpacity(0);
    setImgStyle({
      opacity: 1,
      transform: 'scale(1)',
      clipPath: 'none',
      visibility: 'visible',
      transition: 'opacity 0.5s ease-out, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), clip-path 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
    });
    setAnimStatus('REVEALED');
  }, []);

  // Trigger the animated reveal
  const startReveal = useCallback(() => {
    // Accessibility check: reduced motion
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      forceFullyRevealed();
      return;
    }

    const nextVar = pickNextVariant();
    setCurrentVariant(nextVar);

    const webglOk = initWebGL();
    if (!webglOk) {
      forceFullyRevealed();
      return;
    }

    resizeCanvas();

    // Prepare initial reveal styles for image based on variant
    let initialClip = 'inset(6% 6% 6% 6%)';
    if (nextVar === 0) {
      // Variant A: Silk sweep diagonal (bottom-left to top-right)
      initialClip = 'polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)';
    } else if (nextVar === 1) {
      // Variant B: Golden bloom (center outward)
      initialClip = 'inset(35% 35% 35% 35%)';
    } else if (nextVar === 2) {
      // Variant C: Maroon curtain (left to right)
      initialClip = 'inset(0% 100% 0% 0%)';
    } else {
      // Variant D: Soft light wave (vertical top-down)
      initialClip = 'inset(10% 0% 10% 0%)';
    }

    setAnimStatus('ANIMATING');
    setCanvasOpacity(1);
    setImgStyle({
      opacity: 0.25,
      transform: 'scale(1.04)',
      clipPath: initialClip,
      visibility: 'visible',
      transition: 'none',
    });

    // Failsafe timer: unconditionally forces visible after 1100ms
    if (failsafeTimerRef.current) clearTimeout(failsafeTimerRef.current);
    failsafeTimerRef.current = setTimeout(() => {
      forceFullyRevealed();
    }, 1100);

    // Stagger / delay handler
    const totalDuration = 950;
    startTimeRef.current = performance.now() + staggerDelay * 1000;

    let imageRevealed = false;

    const renderLoop = (now: number) => {
      if (now < startTimeRef.current) {
        animFrameIdRef.current = requestAnimationFrame(renderLoop);
        return;
      }

      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / totalDuration, 1.0);

      // WebGL Shader render
      const gl = glRef.current;
      const program = programRef.current;
      const canvas = canvasRef.current;

      if (gl && program && canvas) {
        gl.useProgram(program);

        const timeLoc = gl.getUniformLocation(program, 'u_time');
        const resLoc = gl.getUniformLocation(program, 'u_resolution');
        const progLoc = gl.getUniformLocation(program, 'u_progress');
        const varLoc = gl.getUniformLocation(program, 'u_variant');

        gl.uniform1f(timeLoc, elapsed);
        gl.uniform2f(resLoc, canvas.width, canvas.height);
        gl.uniform1f(progLoc, progress);
        gl.uniform1i(varLoc, nextVar);

        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      // 250ms - 900ms: Reveal the real photograph underneath
      if (elapsed >= 220 && !imageRevealed) {
        imageRevealed = true;
        setImgStyle({
          opacity: 1,
          transform: 'scale(1)',
          clipPath: 'none',
          visibility: 'visible',
          transition: 'opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1), clip-path 0.75s cubic-bezier(0.22, 1, 0.36, 1)',
        });
      }

      // Fade canvas out towards the end
      if (progress >= 0.7) {
        const fade = 1 - (progress - 0.7) / 0.3;
        setCanvasOpacity(Math.max(0, fade));
      }

      if (progress < 1.0) {
        animFrameIdRef.current = requestAnimationFrame(renderLoop);
      } else {
        // Animation finished: clean up and ensure 100% visible
        forceFullyRevealed();
      }
    };

    animFrameIdRef.current = requestAnimationFrame(renderLoop);
  }, [staggerDelay, pickNextVariant, initWebGL, resizeCanvas, forceFullyRevealed]);

  // Handle folder switch / category changes
  useEffect(() => {
    if (triggerKey === undefined) return;
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.95 && rect.bottom > 0;
    if (inView) {
      startReveal();
    } else {
      setAnimStatus('IDLE');
    }
  }, [triggerKey, startReveal]);

  // Scroll Trigger Observer with continuous replay support
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check if initial position is in viewport
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.95 && rect.bottom > 0;
    if (inView && animStatusRef.current !== 'ANIMATING') {
      startReveal();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target !== el) continue;

          // Enters viewport: trigger reveal (safe threshold ~0.12)
          if (entry.isIntersecting && entry.intersectionRatio >= 0.12) {
            if (animStatusRef.current === 'IDLE') {
              startReveal();
            }
          }
          // Well outside viewport: mark ready for next replay
          // CRITICAL: keep image visually safe (do NOT set opacity 0 here)
          else if (!entry.isIntersecting || entry.intersectionRatio <= 0.01) {
            if (animStatusRef.current === 'REVEALED') {
              setAnimStatus('IDLE');
            }
          }
        }
      },
      {
        threshold: [0, 0.01, 0.12, 0.25],
        rootMargin: '0px',
      }
    );

    observer.observe(el);

    // Resize observer to keep canvas matched with container
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(el);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      if (failsafeTimerRef.current) clearTimeout(failsafeTimerRef.current);
    };
  }, [startReveal, resizeCanvas]);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className={`shader-image-reveal relative overflow-hidden group cursor-pointer ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 1. REAL CLIENT PHOTOGRAPH (Permanent Base Layer) */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          ...imgStyle,
        }}
        className={`w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.025] ${imgClassName}`}
        onError={() => {
          // If image load error, still guarantee it's not hidden
          forceFullyRevealed();
        }}
      />

      {/* 2. TEMPORARY WEBGL SHADER CANVAS OVERLAY */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none transition-opacity duration-300"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: canvasOpacity,
          zIndex: 10,
        }}
      />

      {/* 3. Subtle Champagne Edge Highlight on Hover (Desktop) */}
      <div className="absolute inset-0 border border-[#B89B68]/0 group-hover:border-[#B89B68]/40 transition-colors duration-500 pointer-events-none z-15" />

      {/* 4. Sub-elements, overlays and badges */}
      {badge && <div className="absolute z-20 pointer-events-none">{badge}</div>}
      {children}
    </div>
  );
};
