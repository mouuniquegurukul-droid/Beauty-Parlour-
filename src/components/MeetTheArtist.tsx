import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../constants/media';
import { AboutSectionDecor } from './ui/section-bridal-decorations';
import { AnimatedText, AnimatedParagraph } from '@/components/ui/animated-text';

export const MeetTheArtist: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-transparent text-[#171514] pt-8 pb-14 sm:pt-14 sm:pb-20 lg:py-28 border-t border-[#D9CABB]/60 overflow-hidden"
    >
      {/* Decorative Bengali bridal line-art layer (NEW) z-index: 0 */}
      <AboutSectionDecor />

      {/* Existing content: position: relative; z-index: 1 */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-1 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          {/* Section label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#541C28]/10 border border-[#541C28]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#B89B68]" />
            <span className="text-xs tracking-widest font-semibold text-[#541C28] uppercase">
              শিল্পীর পরিচয়
            </span>
          </div>

          {/* Artist Name */}
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#171514]">
            <AnimatedText text={BRAND_CONFIG.ARTIST_NAME} underline={true} underlineClassName="max-w-[140px] mx-auto" />
          </h2>

          {/* Core Philosophy Quote */}
          <div className="py-2">
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[#541C28] leading-[1.3] italic max-w-2xl mx-auto">
              <AnimatedText text="“সৌন্দর্য ব্যক্তিগত," delay={0.1} /> <br />
              <AnimatedText text="তাই প্রতিটি সাজও আলাদা।”" className="font-semibold not-italic" delay={0.3} />
            </blockquote>
          </div>

          {/* Pure Authentic Copy (No invented credentials) */}
          <AnimatedParagraph className="text-base sm:text-lg text-[#171514]/80 font-normal leading-[1.8] max-w-2xl mx-auto" delay={0.45}>
            প্রতিটি কনের থাকে নিজস্ব গল্প, ঐতিহ্য এবং অনুভূতির গভীরতা। সনাতন বাঙালি বধূ সাজের ঐতিহ্য—গভীর চন্দন রেখা, টানা কাজলের স্নিগ্ধতা ও বেনারসির আভিজাত্যের সাথে আধুনিক স্কিন-ফার্স্ট টেকনিকের নিখুঁত মেলবন্ধন তৈরি করাই আমার ব্রাইডাল সাধনা।
          </AnimatedParagraph>
        </motion.div>
      </div>
    </section>
  );
};
