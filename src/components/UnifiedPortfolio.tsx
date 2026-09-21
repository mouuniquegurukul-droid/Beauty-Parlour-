import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { MEDIA_ASSETS, BRAND_CONFIG } from '../constants/media';
import { ShaderImageReveal } from './ui/shader-image-reveal';
import { AnimatedText, AnimatedParagraph } from '@/components/ui/animated-text';

export type FilterType = 'all' | 'bridal' | 'occasion' | 'video';

/**
 * Robust Video Container Reveal Component
 * Preserves uncropped 100% video frame with object-fit: contain and dedicated autoplay observer.
 * Does NOT put a canvas shader over active video playback.
 */
interface PortfolioVideoRevealProps {
  id: string;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  isPlaying: boolean;
  isMuted: boolean;
  onTogglePlay: () => void;
  onToggleMute: (e: React.MouseEvent) => void;
  videoSrc: string;
  badgeLabel: string;
  artistName: string;
  ariaLabel: string;
}

const PortfolioVideoReveal: React.FC<PortfolioVideoRevealProps> = ({
  id,
  videoRef,
  containerRef,
  isPlaying,
  isMuted,
  onTogglePlay,
  onToggleMute,
  videoSrc,
  badgeLabel,
  artistName,
  ariaLabel,
}) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === el) {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.12) {
              setInView(true);
            }
          }
        }
      },
      {
        threshold: [0, 0.12, 0.25],
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [containerRef]);

  return (
    <motion.div
      ref={containerRef}
      id={`portfolio-video-${id}`}
      className="relative w-full max-w-4xl mx-auto portfolio-reveal-item"
      initial={{ opacity: 0, scale: 0.97, y: 30 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      style={{
        willChange: 'opacity, transform',
        opacity: 1,
        transform: 'none',
        visibility: 'visible',
      }}
    >
      <div className="relative overflow-hidden bg-[#171514] border border-[#541C28]/60 shadow-2xl rounded-sm">
        {/* Header label for video */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#171514] border-b border-[#541C28]/40 text-[#F6F0E7]">
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                isPlaying ? 'bg-[#25D366] animate-pulse' : 'bg-[#D9CABB]/60'
              }`}
            />
            <span className="text-xs font-semibold tracking-wider text-[#D9CABB]">
              {badgeLabel}
            </span>
          </div>
          <span className="text-[11px] text-[#B89B68] font-medium tracking-wide">
            {artistName}
          </span>
        </div>

        {/* Video canvas strictly preserving complete original aspect ratio (object-fit: contain) */}
        <div className="relative w-full flex items-center justify-center bg-[#171514] overflow-hidden">
          <video
            ref={videoRef}
            src={videoSrc}
            playsInline
            muted={isMuted}
            loop
            preload="metadata"
            className="block w-full h-auto max-h-[80vh] object-contain mx-auto"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
            aria-label={ariaLabel}
          />

          {/* Play / Pause overlay button */}
          <button
            onClick={onTogglePlay}
            aria-label={isPlaying ? 'ভিডিও পজ করুন' : 'ভিডিও প্লে করুন'}
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/20 hover:bg-black/10 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#541C28]/90 text-[#F6F0E7] flex items-center justify-center shadow-2xl border border-[#D9CABB]/40 group-hover:scale-110 transition-transform">
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-current" />
              ) : (
                <Play className="w-6 h-6 fill-current ml-0.5" />
              )}
            </div>
          </button>

          {/* Audio Mute / Unmute Button (Sound On / Sound Off) */}
          <button
            onClick={onToggleMute}
            className="absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-full bg-[#171514]/90 text-[#F6F0E7] border border-[#D9CABB]/30 flex items-center gap-1.5 hover:bg-[#541C28] transition-all cursor-pointer backdrop-blur-xs shadow-lg text-xs"
            aria-label={isMuted ? 'সাউন্ড অন করুন (Sound On)' : 'সাউন্ড অফ করুন (Sound Off)'}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#D9CABB]" />
                <span className="text-[11px] font-medium text-[#D9CABB]">সাউন্ড অন</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#25D366]" />
                <span className="text-[11px] font-medium text-[#25D366]">সাউন্ড বাজছে</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const UnifiedPortfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [playingVideoId, setPlayingVideoId] = useState<'video-01' | 'video-02' | null>(null);
  const [isMuted01, setIsMuted01] = useState(true);
  const [isMuted02, setIsMuted02] = useState(true);

  const video1ContainerRef = useRef<HTMLDivElement>(null);
  const video2ContainerRef = useRef<HTMLDivElement>(null);
  const videoRef01 = useRef<HTMLVideoElement>(null);
  const videoRef02 = useRef<HTMLVideoElement>(null);

  const ratio1Ref = useRef<number>(0);
  const ratio2Ref = useRef<number>(0);

  // Manual toggle play / pause for videos
  const toggleVideoPlay = (id: 'video-01' | 'video-02') => {
    if (id === 'video-01') {
      if (playingVideoId === 'video-01') {
        videoRef01.current?.pause();
        setPlayingVideoId(null);
      } else {
        videoRef02.current?.pause();
        videoRef01.current
          ?.play()
          .then(() => setPlayingVideoId('video-01'))
          .catch(() => {});
      }
    } else {
      if (playingVideoId === 'video-02') {
        videoRef02.current?.pause();
        setPlayingVideoId(null);
      } else {
        videoRef01.current?.pause();
        videoRef02.current
          ?.play()
          .then(() => setPlayingVideoId('video-02'))
          .catch(() => {});
      }
    }
  };

  // Sound toggle (Sound On / Sound Off)
  const toggleVideoMute = (id: 'video-01' | 'video-02', e: React.MouseEvent) => {
    e.stopPropagation();
    if (id === 'video-01') {
      if (videoRef01.current) {
        const next = !isMuted01;
        videoRef01.current.muted = next;
        setIsMuted01(next);
      }
    } else {
      if (videoRef02.current) {
        const next = !isMuted02;
        videoRef02.current.muted = next;
        setIsMuted02(next);
      }
    }
  };

  // DEDICATED VIDEO AUTOPLAY OBSERVER
  // Plays muted when approximately 55-60% visible.
  // Pauses when leaving (< 0.35). Resumes when returning. Only dominant video plays.
  useEffect(() => {
    const el1 = video1ContainerRef.current;
    const el2 = video2ContainerRef.current;

    const videoAutoplayObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === el1) {
            ratio1Ref.current = entry.intersectionRatio;
          } else if (entry.target === el2) {
            ratio2Ref.current = entry.intersectionRatio;
          }
        }

        const r1 = ratio1Ref.current;
        const r2 = ratio2Ref.current;

        // Autoplay threshold 0.55 - 0.60
        if (r1 >= 0.55 && r1 >= r2) {
          // Video 01 dominant
          if (videoRef02.current && !videoRef02.current.paused) {
            videoRef02.current.pause();
          }
          if (videoRef01.current && videoRef01.current.paused) {
            videoRef01.current.play().catch(() => {});
          }
          setPlayingVideoId('video-01');
        } else if (r2 >= 0.55 && r2 > r1) {
          // Video 02 dominant
          if (videoRef01.current && !videoRef01.current.paused) {
            videoRef01.current.pause();
          }
          if (videoRef02.current && videoRef02.current.paused) {
            videoRef02.current.play().catch(() => {});
          }
          setPlayingVideoId('video-02');
        } else {
          // Check if scrolled out of view (< 0.35)
          if (r1 < 0.35 && videoRef01.current && !videoRef01.current.paused) {
            videoRef01.current.pause();
          }
          if (r2 < 0.35 && videoRef02.current && !videoRef02.current.paused) {
            videoRef02.current.pause();
          }
          if (r1 < 0.35 && r2 < 0.35) {
            setPlayingVideoId(null);
          }
        }
      },
      {
        threshold: [0, 0.25, 0.35, 0.55, 0.6, 0.75, 1.0],
      }
    );

    if (el1) videoAutoplayObserver.observe(el1);
    if (el2) videoAutoplayObserver.observe(el2);

    return () => {
      videoAutoplayObserver.disconnect();
    };
  }, [activeFilter]);

  // Filter Categories
  const filterTabs: { id: FilterType; label: string }[] = [
    { id: 'all', label: 'সব কাজ' },
    { id: 'bridal', label: 'ব্রাইডাল' },
    { id: 'occasion', label: 'বিশেষ অনুষ্ঠান' },
    { id: 'video', label: 'ভিডিও' },
  ];

  return (
    <section
      id="portfolio"
      className="relative w-full bg-transparent text-[#171514] py-24 sm:py-32 lg:py-40 border-t border-[#D9CABB]/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs tracking-widest font-semibold text-[#541C28] uppercase block mb-3">
              পোর্টফোলিও
            </span>

            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.12] text-[#171514] mb-4">
              <AnimatedText text="আমার কাজ" underline={true} underlineClassName="max-w-[120px] mx-auto" />
            </h2>

            <AnimatedParagraph className="text-base sm:text-lg text-[#171514]/75 font-normal max-w-xl mx-auto leading-[1.7]" delay={0.25}>
              কল্পনা দেবনাথের করা ব্রাইডাল ও বিশেষ অনুষ্ঠানের কিছু নির্বাচিত সাজ ও ভিডিও।
            </AnimatedParagraph>
          </motion.div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 sm:px-5 py-2 text-xs font-semibold tracking-wider transition-all duration-300 rounded-full cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#541C28] text-[#F6F0E7] shadow-sm'
                    : 'bg-[#D9CABB]/25 text-[#171514]/80 hover:bg-[#D9CABB]/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================
            HYBRID EDITORIAL GALLERY CONTAINER
            Strict mobile rhythm with all 9 photos and 2 videos intact:
            1. Large Photo (Client 01)
            2. Two Smaller Photos Side-by-Side (Client 02, Client 03)
            3. Large Photo (Client 04)
            4. Featured Video (Video 01)
            5. Two Photos Side-by-Side (Client 05, Client 06)
            6. Large Asymmetric Photo (Client 07)
            7. Twin Photos (Client 08)
            8. Second Featured Video (Video 02)
            9. Remaining Work (Client 09)
           ======================================================== */}
        <div className="space-y-10 sm:space-y-14 lg:space-y-20">
          {/* ITEM 1: LARGE PHOTO (Client 01) */}
          {['all', 'bridal'].includes(activeFilter) && (
            <div className="w-full max-w-5xl mx-auto">
              <ShaderImageReveal
                src={MEDIA_ASSETS.CLIENT_WORK_01}
                alt="বাঙালি ব্রাইডাল সিগনেচার রূপসজ্জা"
                className="w-full shadow-xl border border-[#D9CABB] aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9] bg-[#171514]"
                staggerDelay={0}
                triggerKey={activeFilter}
              >
                <div className="absolute inset-0 bg-[#541C28]/0 group-hover:bg-[#541C28]/25 transition-colors duration-500 pointer-events-none z-15" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex items-end justify-between pointer-events-none z-20">
                  <div className="bg-[#171514]/85 backdrop-blur-xs px-3.5 py-2 text-[#F6F0E7]">
                    <span className="text-[10px] sm:text-xs text-[#B89B68] font-semibold block uppercase tracking-wider">
                      বাঙালি ব্রাইডাল
                    </span>
                    <span className="text-xs sm:text-base font-medium">
                      সিগনেচার কনে সাজ • শুভদৃষ্টি
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-[#D9CABB] bg-[#541C28]/80 backdrop-blur-xs px-3 py-1 font-medium hidden sm:inline-block">
                    ০১
                  </span>
                </div>
              </ShaderImageReveal>
            </div>
          )}

          {/* ITEM 2 & 3: TWO SMALLER PHOTOS SIDE-BY-SIDE (Client 02, Client 03) */}
          {['all', 'bridal', 'occasion'].includes(activeFilter) && (
            <div className="grid grid-cols-2 gap-2.5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Left Photo: Client 02 (stagger: 0ms) */}
              <ShaderImageReveal
                src={MEDIA_ASSETS.CLIENT_WORK_02}
                alt="বৌভাত ও রিসেপশন রূপসজ্জা"
                className="shadow-lg border border-[#D9CABB] aspect-[3/4] sm:aspect-[4/5] bg-[#171514]"
                staggerDelay={0}
                triggerKey={activeFilter}
              >
                <div className="absolute inset-0 bg-[#541C28]/0 group-hover:bg-[#541C28]/25 transition-colors duration-500 pointer-events-none z-15" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 bg-[#171514]/85 backdrop-blur-xs px-2.5 py-1.5 text-[#F6F0E7] z-20">
                  <span className="text-[9px] sm:text-xs text-[#B89B68] font-semibold block uppercase">
                    রিসেপশন
                  </span>
                  <span className="text-[11px] sm:text-sm font-medium line-clamp-1">
                    বৌভাতের স্নিগ্ধ আভিজাত্য
                  </span>
                </div>
              </ShaderImageReveal>

              {/* Right Photo: Client 03 (stagger: 120ms) */}
              <ShaderImageReveal
                src={MEDIA_ASSETS.CLIENT_WORK_03}
                alt="ঐতিহ্যবাহী বেনারসি ব্রাইডাল লুক"
                className="shadow-lg border border-[#D9CABB] aspect-[3/4] sm:aspect-[4/5] bg-[#171514]"
                staggerDelay={0.12}
                triggerKey={activeFilter}
              >
                <div className="absolute inset-0 bg-[#541C28]/0 group-hover:bg-[#541C28]/25 transition-colors duration-500 pointer-events-none z-15" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 bg-[#171514]/85 backdrop-blur-xs px-2.5 py-1.5 text-[#F6F0E7] z-20">
                  <span className="text-[9px] sm:text-xs text-[#B89B68] font-semibold block uppercase">
                    ট্রেডিশনাল
                  </span>
                  <span className="text-[11px] sm:text-sm font-medium line-clamp-1">
                    সনাতন লাল বেনারসি কনে
                  </span>
                </div>
              </ShaderImageReveal>
            </div>
          )}

          {/* ITEM 4: LARGE PHOTO (Client 04) */}
          {['all', 'bridal'].includes(activeFilter) && (
            <div className="w-full max-w-4xl mx-auto">
              <ShaderImageReveal
                src={MEDIA_ASSETS.CLIENT_WORK_04}
                alt="শোলার মুকুট ও কপাল চন্দন"
                className="shadow-xl border-2 border-[#B89B68]/60 aspect-[4/5] sm:aspect-[16/11] bg-[#171514]"
                staggerDelay={0}
                triggerKey={activeFilter}
              >
                <div className="absolute inset-0 bg-[#541C28]/0 group-hover:bg-[#541C28]/25 transition-colors duration-500 pointer-events-none z-15" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex items-end justify-between pointer-events-none z-20">
                  <div className="bg-[#171514]/85 backdrop-blur-xs px-3.5 py-2 text-[#F6F0E7]">
                    <span className="text-[10px] sm:text-xs text-[#B89B68] font-semibold block uppercase">
                      মাস্টারপিস
                    </span>
                    <span className="text-xs sm:text-base font-medium">
                      শোলার মুকুট ও নিখুঁত চন্দন অঙ্কন
                    </span>
                  </div>
                  <span className="text-xs text-[#D9CABB] bg-[#541C28]/80 px-3 py-1 font-medium hidden sm:inline-block">
                    ০৪
                  </span>
                </div>
              </ShaderImageReveal>
            </div>
          )}

          {/* ITEM 5: FEATURED VIDEO 01 */}
          {['all', 'bridal', 'video'].includes(activeFilter) && (
            <PortfolioVideoReveal
              id="video-01"
              videoRef={videoRef01}
              containerRef={video1ContainerRef}
              isPlaying={playingVideoId === 'video-01'}
              isMuted={isMuted01}
              onTogglePlay={() => toggleVideoPlay('video-01')}
              onToggleMute={(e) => toggleVideoMute('video-01', e)}
              videoSrc={MEDIA_ASSETS.HERO_VIDEO}
              badgeLabel="ব্রাইডাল রিল ০১ • সিনেমাটিক রূপসজ্জা"
              artistName={BRAND_CONFIG.ARTIST_NAME}
              ariaLabel="বাঙালি ব্রাইডাল সিনেমাটিক রিল ০১"
            />
          )}

          {/* ITEM 6 & 7: TWO PHOTOS SIDE-BY-SIDE (Client 05, Client 06) */}
          {['all', 'bridal'].includes(activeFilter) && (
            <div className="grid grid-cols-2 gap-2.5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Left Photo: Client 05 (stagger: 0ms) */}
              <ShaderImageReveal
                src={MEDIA_ASSETS.CLIENT_WORK_05}
                alt="কপাল চন্দন ও টানা কাজলের নিখুঁত ফিনিশ"
                className="shadow-lg border border-[#D9CABB] aspect-[3/4] sm:aspect-[4/5] bg-[#171514]"
                staggerDelay={0}
                triggerKey={activeFilter}
              >
                <div className="absolute inset-0 bg-[#541C28]/0 group-hover:bg-[#541C28]/25 transition-colors duration-500 pointer-events-none z-15" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 bg-[#171514]/85 backdrop-blur-xs px-2.5 py-1.5 text-[#F6F0E7] z-20">
                  <span className="text-[9px] sm:text-xs text-[#B89B68] font-semibold block uppercase">
                    ডিটেইলস
                  </span>
                  <span className="text-[11px] sm:text-sm font-medium line-clamp-1">
                    চন্দন রেখা ও চোখের মায়াবী আবেদন
                  </span>
                </div>
              </ShaderImageReveal>

              {/* Right Photo: Client 06 (stagger: 120ms) */}
              <ShaderImageReveal
                src={MEDIA_ASSETS.CLIENT_WORK_06}
                alt="খোঁপা, গয়না ও ওড়নার নিখুঁত ড্র্যাপ"
                className="shadow-lg border border-[#D9CABB] aspect-[3/4] sm:aspect-[4/5] bg-[#171514]"
                staggerDelay={0.12}
                triggerKey={activeFilter}
              >
                <div className="absolute inset-0 bg-[#541C28]/0 group-hover:bg-[#541C28]/25 transition-colors duration-500 pointer-events-none z-15" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 bg-[#171514]/85 backdrop-blur-xs px-2.5 py-1.5 text-[#F6F0E7] z-20">
                  <span className="text-[9px] sm:text-xs text-[#B89B68] font-semibold block uppercase">
                    ঐতিহ্য
                  </span>
                  <span className="text-[11px] sm:text-sm font-medium line-clamp-1">
                    খোঁপা ও ওড়নার বিন্যাস
                  </span>
                </div>
              </ShaderImageReveal>
            </div>
          )}

          {/* ITEM 8: LARGE ASYMMETRIC PHOTO (Client 07) */}
          {['all', 'bridal', 'occasion'].includes(activeFilter) && (
            <div className="w-full max-w-4xl mx-auto">
              <ShaderImageReveal
                src={MEDIA_ASSETS.CLIENT_WORK_07}
                alt="গায়ে হলুদ ও সঙ্গীতের উজ্জ্বল সাজ"
                className="shadow-xl border border-[#D9CABB] aspect-[4/5] sm:aspect-[16/10] bg-[#171514]"
                staggerDelay={0}
                triggerKey={activeFilter}
              >
                <div className="absolute inset-0 bg-[#541C28]/0 group-hover:bg-[#541C28]/25 transition-colors duration-500 pointer-events-none z-15" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex items-end justify-between pointer-events-none z-20">
                  <div className="bg-[#171514]/85 backdrop-blur-xs px-3.5 py-2 text-[#F6F0E7]">
                    <span className="text-[10px] sm:text-xs text-[#B89B68] font-semibold block uppercase">
                      উৎসবের সাজ
                    </span>
                    <span className="text-xs sm:text-base font-medium">
                      গায়ে হলুদ ও প্রাক-বিবাহ মুহূর্ত
                    </span>
                  </div>
                  <span className="text-xs text-[#D9CABB] bg-[#541C28]/80 px-3 py-1 font-medium hidden sm:inline-block">
                    ০৭
                  </span>
                </div>
              </ShaderImageReveal>
            </div>
          )}

          {/* ITEM 9: PHOTOS (Client 08) */}
          {['all', 'bridal', 'occasion'].includes(activeFilter) && (
            <div className="max-w-4xl mx-auto">
              <ShaderImageReveal
                src={MEDIA_ASSETS.CLIENT_WORK_08}
                alt="শুভ আশীর্বাদ ও ঘরোয়া উৎসবের রূপসজ্জা"
                className="shadow-lg border border-[#D9CABB] aspect-[4/5] sm:aspect-[16/10] bg-[#171514]"
                staggerDelay={0}
                triggerKey={activeFilter}
              >
                <div className="absolute inset-0 bg-[#541C28]/0 group-hover:bg-[#541C28]/25 transition-colors duration-500 pointer-events-none z-15" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#171514]/85 backdrop-blur-xs px-3.5 py-2 text-[#F6F0E7] z-20">
                  <span className="text-[10px] sm:text-xs text-[#B89B68] font-semibold block uppercase">
                    অনুষ্ঠানের রূপ
                  </span>
                  <span className="text-xs sm:text-base font-medium">
                    শুভ আশীর্বাদ ও বিশেষ দিনের স্নিগ্ধ রূপ
                  </span>
                </div>
              </ShaderImageReveal>
            </div>
          )}

          {/* ITEM 10: SECOND FEATURED VIDEO (Video 02) */}
          {['all', 'bridal', 'occasion', 'video'].includes(activeFilter) && (
            <PortfolioVideoReveal
              id="video-02"
              videoRef={videoRef02}
              containerRef={video2ContainerRef}
              isPlaying={playingVideoId === 'video-02'}
              isMuted={isMuted02}
              onTogglePlay={() => toggleVideoPlay('video-02')}
              onToggleMute={(e) => toggleVideoMute('video-02', e)}
              videoSrc={MEDIA_ASSETS.BEAUTY_FILM_VIDEO}
              badgeLabel="ব্রাইডাল রিল ০২ • জীবন্ত রূপ ও চলচ্ছবি"
              artistName={BRAND_CONFIG.ARTIST_NAME}
              ariaLabel="বাঙালি ব্রাইডাল সিনেমাটিক রিল ০২"
            />
          )}

          {/* ITEM 11: REMAINING WORK (Client 09) */}
          {['all', 'bridal', 'occasion'].includes(activeFilter) && (
            <div className="w-full max-w-5xl mx-auto">
              <ShaderImageReveal
                src={MEDIA_ASSETS.CLIENT_WORK_09}
                alt="বাঙালি বধূর চিরন্তন রূপ ও আধুনিক গ্লো"
                className="shadow-xl border border-[#D9CABB] aspect-[4/5] sm:aspect-[16/10] bg-[#171514]"
                staggerDelay={0}
                triggerKey={activeFilter}
              >
                <div className="absolute inset-0 bg-[#541C28]/0 group-hover:bg-[#541C28]/25 transition-colors duration-500 pointer-events-none z-15" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex items-end justify-between pointer-events-none z-20">
                  <div className="bg-[#171514]/85 backdrop-blur-xs px-3.5 py-2 text-[#F6F0E7]">
                    <span className="text-[10px] sm:text-xs text-[#B89B68] font-semibold block uppercase">
                      ক্লাসিক ফিনিশ
                    </span>
                    <span className="text-xs sm:text-base font-medium">
                      বাঙালি বধূর চিরন্তন সৌন্দর্য ও আলো
                    </span>
                  </div>
                  <span className="text-xs text-[#D9CABB] bg-[#541C28]/80 px-3 py-1 font-medium hidden sm:inline-block">
                    ০৯
                  </span>
                </div>
              </ShaderImageReveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
