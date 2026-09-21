import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { MEDIA_ASSETS, BRAND_CONFIG } from '../constants/media';
import { AnimatedText, AnimatedParagraph } from '@/components/ui/animated-text';

/**
 * Hero Component
 *
 * Requirements:
 * - Replaces the static owner photo in the Hero media frame with Kalpana Debnath's welcome video.
 * - Fits the COMPLETE original video (1280x720, 16:9) inside the Hero media frame with zero cropping,
 *   no zoom, no stretching, and object-fit: contain.
 * - On every fresh visit or page reload:
 *   1. Reset video to 0:00.
 *   2. Automatically attempt sound-on play().
 *   3. Play Bengali welcome message.
 *   4. Play ONLY ONCE during that visit.
 *   5. Do NOT loop.
 *   6. When video finishes, stop naturally, keep final video frame visible, keep site completely silent.
 * - If browser blocks sound-on autoplay, provide a minimal elegant tap-to-play fallback inside this SAME Hero frame.
 * - Retains existing Bengali headline, copy, and "আমার কাজ দেখুন ↓" CTA scrolling to #portfolio.
 * - Only the floating WhatsApp button remains on the site.
 */
export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasAutoPlayedRef = useRef(false);

  useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  video.currentTime = 0;
  video.volume = 1;

  const startVideo = async () => {
    if (hasAutoPlayedRef.current) return;
    hasAutoPlayedRef.current = true;

    // First attempt: autoplay with original voice
    try {
      video.muted = false;
      await video.play();
    } catch (err) {
      // Mobile browser blocked sound autoplay.
      // Fallback: autoplay the video muted instead of leaving it stopped.
      try {
        video.muted = true;
        await video.play();
      } catch (fallbackErr) {
        console.info('Autoplay blocked:', fallbackErr);
      }
    }
  };

  startVideo();

  const handleEnded = () => {
    video.pause();
  };

  video.addEventListener('ended', handleEnded);

  return () => {
    video.removeEventListener('ended', handleEnded);
  };
}, []);
  const handleVideoClick = () => {
  const video = videoRef.current;
  if (!video) return;

  // First tap: turn on the original voice without pausing the video.
  if (video.muted) {
    video.muted = false;
    video.volume = 1;

    if (video.ended) {
      video.currentTime = 0;
    }

    video.play().catch(() => {});
    return;
  }

  // Subsequent taps: pause or resume the video.
  if (video.paused || video.ended) {
    if (video.ended) {
      video.currentTime = 0;
    }
    video.play().catch(() => {});
  } else {
    video.pause();
  }
};

  const handleScrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-auto min-h-0 lg:min-h-[100svh] bg-transparent text-[#171514] pt-20 pb-7 sm:pt-28 sm:pb-9 lg:py-0 lg:flex lg:items-center overflow-hidden"
    >
      {/* Subtle atmospheric background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9CABB]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#541C28]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* Unified Responsive Grid (No DOM Duplication)
            Mobile: order-1 (Label) -> order-2 (Hero Welcome Video) -> order-3 (Headline) -> order-4 (Copy) -> order-5 (CTAs)
            Desktop (lg): Left 7 cols for Text elements, Right 5 cols for Hero Video spanning rows
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-5 sm:gap-y-6 lg:gap-x-12 xl:gap-x-16 items-center text-center lg:text-left">
          
          {/* 1. Artist Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:col-span-7 lg:row-start-1 flex justify-center lg:justify-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#541C28]/10 border border-[#541C28]/25">
              <span className="text-xs font-semibold text-[#541C28] tracking-widest">
                {BRAND_CONFIG.ARTIST_NAME}
              </span>
              <span className="text-[11px] text-[#171514]/50">•</span>
              <span className="text-xs font-medium text-[#171514]/80 tracking-wide">
                ব্রাইডাল মেকআপ আর্টিস্ট
              </span>
            </div>
          </motion.div>

          {/* 2. Kalpana Debnath WELCOME VIDEO inside Hero Media Frame
              Mobile: order-2, natural aspect-ratio (16:9), uncropped, object-fit contain
              Desktop: order-5, spans rows 1 through 4 in right 5 columns
          */}
          <div className="order-2 lg:order-5 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-4 relative flex justify-center lg:justify-end my-2 sm:my-3 lg:my-0">
            <div className="relative w-[90vw] max-w-[340px] sm:max-w-[420px] lg:max-w-[480px]">
              
              {/* Offset maroon editorial frame */}
              <div
                aria-hidden="true"
                className="absolute -bottom-2.5 -right-2.5 sm:-bottom-3.5 sm:-right-3.5 w-full h-full border-2 border-[#541C28]/75 pointer-events-none rounded-sm"
              />

              {/* Video container adapting to natural 16:9 aspect ratio */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 1.05,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden bg-[#171514] border border-[#541C28]/60 shadow-2xl aspect-video flex items-center justify-center rounded-sm"
              >
                {/* Video element: full original frame, object-fit contain, no crop, no stretch */}
                <video
  ref={videoRef}
  src={MEDIA_ASSETS.WELCOME_VIDEO}
  autoPlay
  playsInline
  loop={false}
                  preload="auto"
                  className="block w-full h-auto max-h-full object-contain object-center cursor-pointer"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center',
                  }}
                  aria-label="কল্পনা দেবনাথ - বাংলা স্বাগতম বার্তা"
                  onClick={handleVideoClick}
                />
              </motion.div>

              {/* Thin Champagne-Gold Line animated underneath */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
                className="absolute -bottom-4 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B89B68] via-[#D9CABB] to-transparent"
              />
            </div>
          </div>

          {/* 3. Large Bengali Headline */}
          <h1 className="order-3 lg:col-span-7 lg:row-start-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.16] text-[#171514]">
            <AnimatedText text="প্রতিটি সাজে" delay={0.1} /> <br />
            <AnimatedText text="ফুটে উঠুক" delay={0.25} /> <br />
            <AnimatedText
              text="আপনার নিজস্ব সৌন্দর্য"
              delay={0.4}
              className="text-[#541C28] font-semibold"
            />
          </h1>

          {/* 4. Short Description */}
          <AnimatedParagraph
            delay={0.55}
            className="order-4 lg:col-span-7 lg:row-start-3 text-sm sm:text-base lg:text-lg text-[#171514]/80 font-normal leading-[1.7] max-w-xl mx-auto lg:mx-0"
          >
            ব্রাইডাল ও বিশেষ অনুষ্ঠানের সাজে ঐতিহ্য, সৌন্দর্য ও ব্যক্তিত্বের এক অনন্য প্রকাশ।
          </AnimatedParagraph>

          {/* 5. Primary CTA Button: Smoothly scrolls to #portfolio */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="order-5 lg:col-span-7 lg:row-start-4 flex justify-center lg:justify-start pt-2 sm:pt-3 w-full"
          >
            <a
              href="#portfolio"
              onClick={handleScrollToPortfolio}
              id="hero-cta-portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 bg-[#541C28] hover:bg-[#321018] text-[#F6F0E7] text-xs sm:text-sm tracking-wider font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-98 cursor-pointer"
            >
              <span>আমার কাজ দেখুন ↓</span>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
