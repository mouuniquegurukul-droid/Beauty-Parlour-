import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../constants/media';
import { SubtleMandalaLine, AlpanaGeometricDivider } from './AlpanaDecorations';
import { AnimatedText, AnimatedParagraph } from '@/components/ui/animated-text';

export const BookingFinale: React.FC = () => {
  return (
    <section
      id="booking"
      className="relative w-full bg-gradient-to-b from-[#541C28] to-[#321018] text-[#F6F0E7] py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Subtle Bengali-inspired geometric line art */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5">
        <SubtleMandalaLine className="w-[500px] h-[500px] sm:w-[700px] sm:h-[700px]" color="#F6F0E7" opacity={0.12} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Decorative Top Divider */}
        <div className="mb-12 sm:mb-16 w-full">
          <AlpanaGeometricDivider color="#F6F0E7" opacity={0.2} />
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs tracking-widest font-semibold text-[#D9CABB] uppercase block mb-4">
              সরাসরি বুকিং ও যোগাযোগ • {BRAND_CONFIG.ARTIST_NAME}
            </span>

            {/* Headline */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.12] text-[#F6F0E7] mb-6">
              <AnimatedText text="আপনার দিন।" delay={0.1} /> <br />
              <AnimatedText text="আপনার মুহূর্ত।" className="text-[#D9CABB] font-semibold" delay={0.25} /> <br />
              <AnimatedText text="আপনার সাজ।" delay={0.4} />
            </h2>

            {/* Supporting Text */}
            <AnimatedParagraph className="text-base sm:text-xl text-[#D9CABB]/90 font-normal max-w-xl mx-auto leading-[1.7] whitespace-pre-line" delay={0.55}>
              আপনার বিশেষ দিনের সাজ ও তারিখের প্রাপ্যতা নিশ্চিত করতে{'\n'}স্ক্রিনের নিচের ডানদিকের ফ্লোটিং বোতামে ট্যাপ করে কথা বলুন।
            </AnimatedParagraph>
          </motion.div>
        </div>

        {/* Booking Guidance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto bg-[#171514]/70 backdrop-blur-md p-8 sm:p-12 border border-[#D9CABB]/30 shadow-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#541C28]/80 border border-[#D9CABB]/30 text-xs text-[#D9CABB] font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#B89B68]" />
            <span>অগ্রিম বুকিং ও শিডিউল তথ্য</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold text-[#F6F0E7] mb-3">
            {BRAND_CONFIG.ARTIST_NAME}-এর সাথে সরাসরি আলাপ
          </h3>
          <p className="text-xs sm:text-sm text-[#D9CABB]/80 max-w-md mx-auto mb-6 leading-relaxed">
            ব্রাইডাল সিজনে প্রতিটি শুভলগ্নের জন্য সীমিত বুকিং গ্রহণ করা হয়। কাস্টমাইজড ব্রাইডাল প্যাকেজ ও তারিখ সম্পর্কে জানতে সরাসরি যোগাযোগ করুন।
          </p>

          <div className="text-xs sm:text-sm font-medium text-[#D9CABB] py-2 px-4 rounded-lg bg-[#541C28]/40 inline-block border border-[#D9CABB]/20 mb-8">
            সরাসরি হেল্পলাইন: <span className="text-[#F6F0E7] font-semibold">{BRAND_CONFIG.PHONE_DISPLAY}</span>
          </div>

          {/* Trust points */}
          <div className="pt-6 border-t border-[#D9CABB]/15 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left sm:text-center text-xs text-[#D9CABB]/75">
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
              <span>সরাসরি শিল্পীর সাথে কথা</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
              <span>তারিখ যাচাই ও পরামর্শ</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
              <span>ব্যক্তিগত রূপসজ্জা সেবা</span>
            </div>
          </div>
        </motion.div>

        {/* Decorative Bottom Divider */}
        <div className="mt-12 sm:mt-16 w-full">
          <AlpanaGeometricDivider color="#F6F0E7" opacity={0.2} />
        </div>

      </div>
    </section>
  );
};
