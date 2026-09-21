import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ExperienceSectionDecor } from './ui/section-bridal-decorations';
import { AnimatedText, AnimatedParagraph } from '@/components/ui/animated-text';

export const TheExperience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  const progressLineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const steps = [
    {
      step: '০১',
      title: 'যোগাযোগ ও তারিখ যাচাই',
      desc: 'আপনার বিয়ের তারিখ, সময় ও স্থান জানিয়ে সরাসরি হোয়াটসঅ্যাপে যোগাযোগ করুন।',
    },
    {
      step: '০২',
      title: 'পরামর্শ ও পরিকল্পনা',
      desc: 'আপনার পছন্দের সাজ, শাড়ির রঙ, গহনার ধরন ও স্কিনটোন অনুযায়ী সেরা রূপসজ্জা নিয়ে আলোচনা।',
    },
    {
      step: '০৩',
      title: 'ব্যক্তিগত রূপরেখা',
      desc: 'কপালের চন্দন নকশা, চুলের খোঁপা ও ওড়না পরা নিখুঁতভাবে নির্ধারণ করে সাজের চূড়ান্ত পরিকল্পনা।',
    },
    {
      step: '০৪',
      title: 'আপনার শুভ মুহূর্ত',
      desc: 'বিয়ের মাহেন্দ্রক্ষণে এক শান্ত ও আরামদায়ক পরিবেশে পরম যত্নে প্রস্ফুটিত হবে আপনার কাঙ্ক্ষিত কনে সাজ।',
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full bg-transparent text-[#171514] py-28 sm:py-36 lg:py-44 overflow-hidden border-t border-[#D9CABB]/60"
    >
      {/* Decorative Bengali bridal line-art layer (NEW) z-index: 0 */}
      <ExperienceSectionDecor />

      {/* Existing content: position: relative; z-index: 1 */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-1">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-28">
          <span className="text-xs tracking-widest font-semibold text-[#541C28] block mb-3">
            ব্রাইডাল অভিজ্ঞতা
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.12] text-[#171514]">
            <AnimatedText text="যোগাযোগ থেকে" delay={0.1} /> <br />
            <AnimatedText text="আপনার মাহেন্দ্রক্ষণ পর্যন্ত।" className="text-[#541C28] font-semibold" delay={0.3} />
          </h2>
          <AnimatedParagraph className="text-sm sm:text-base text-[#171514]/75 font-normal leading-[1.7] mt-4" delay={0.45}>
            একটি স্বচ্ছ ও সুচিন্তিত রূপসজ্জা প্রক্রিয়া, যা কনে ও তার পরিবারের মনে এনে দেয় পূর্ণ স্বস্তি ও নিশ্চিন্ত ভরসা।
          </AnimatedParagraph>
        </div>

        {/* Animated Progress Line Container */}
        <div className="relative mb-16 hidden lg:block">
          {/* Base background line */}
          <div className="w-full h-[1px] bg-[#D9CABB]" />
          {/* Active animated progress line */}
          <motion.div
            style={{ width: progressLineWidth }}
            className="absolute top-0 left-0 h-[2px] bg-[#541C28]"
          />
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col space-y-4 relative"
            >
              {/* Step indicator */}
              <div className="flex items-baseline justify-between border-b border-[#D9CABB]/80 pb-3">
                <span className="text-3xl sm:text-4xl font-semibold text-[#541C28]">
                  {item.step}
                </span>
                <span className="text-xs tracking-wider text-[#171514]/60 font-medium">
                  ধাপ {item.step}
                </span>
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-[#171514]">
                {item.title}
              </h3>

              <p className="text-sm text-[#171514]/80 font-normal leading-[1.7]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
