import React from 'react';
import { motion } from 'motion/react';
import { TestimonialsSectionDecor } from './ui/section-bridal-decorations';
import { AnimatedText, AnimatedParagraph } from '@/components/ui/animated-text';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      id: '01',
      quote:
        '“বিয়ের দিনের ব্যস্ততায় মেকআপ নিয়ে একটুও দুশ্চিন্তা করতে হয়নি। কনে সাজের ঐতিহ্য ও আভিজাত্য বজায় রেখে খুব যত্ন নিয়ে প্রতিটি ডিটেইল নিখুঁতভাবে ফুটিয়ে তুলেছিলেন।”',
      client: 'অনন্যা চ্যাটার্জী',
      occasion: 'বাঙালি বিয়ের শুভ লগ্ন',
    },
    {
      id: '02',
      quote:
        '“কপালের চন্দনের কলকা এত সুন্দর হবে ভাবতেই পারিনি। ছবি আর ভিডিওতে মেকআপ একদম স্বাভাবিক ও উজ্জ্বল লেগেছে। সারাদিন বেনারসি শাড়ি আর গহনাও খুব সুন্দরভাবে সেট ছিল।”',
      client: 'শ্রেয়া মুখার্জী',
      occasion: 'বৌভাত ও রিসেপশন',
    },
    {
      id: '03',
      quote:
        '“শান্ত ও আন্তরিক ব্যবহারের কারণে সাজগোজের সময়টা খুব স্বস্তিদায়ক ছিল। সময়মতো রেডি করে দেওয়ায় বিয়ের প্রতিটি পর্ব একদম নিখুঁতভাবে উপভোগ করতে পেরেছি।”',
      client: 'পায়ল ব্যানার্জী',
      occasion: 'আইবুড়োভাত ও প্রাক-বিবাহ অনুষ্ঠান',
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#D9CABB]/25 text-[#171514] py-28 sm:py-36 lg:py-40 overflow-hidden border-t border-[#D9CABB]/60"
    >
      {/* Decorative Bengali bridal line-art layer (NEW) z-index: 0 */}
      <TestimonialsSectionDecor />

      {/* Existing content: position: relative; z-index: 1 */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-1">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs tracking-widest font-semibold text-[#541C28] block mb-3">
            প্রশংসাসূচক মন্তব্য
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.12] text-[#171514]">
            <AnimatedText text="ভালোবাসা ও আস্থা," delay={0.1} /> <br />
            <AnimatedText text="তাদের নিজস্ব ভাষায়।" className="text-[#541C28] font-semibold" delay={0.3} />
          </h2>
          <AnimatedParagraph className="text-xs sm:text-sm text-[#171514]/70 font-medium tracking-wide mt-3" delay={0.45}>
            বাঙালি কনেদের বাস্তব অভিজ্ঞতা ও আন্তরিক অনুভূতি
          </AnimatedParagraph>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {reviews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col justify-between p-8 sm:p-10 bg-[#F6F0E7] border border-[#D9CABB]/80 shadow-xs"
            >
              {/* Oversized editorial quotation mark */}
              <div
                className="text-6xl sm:text-7xl text-[#541C28]/25 select-none leading-none -mb-6"
                aria-hidden="true"
              >
                “
              </div>

              <blockquote className="text-base sm:text-lg text-[#171514]/85 font-normal leading-[1.7] mb-8 relative z-10">
                {item.quote}
              </blockquote>

              <div className="pt-4 border-t border-[#D9CABB]/60">
                <div className="font-semibold text-sm tracking-wide text-[#171514]">
                  {item.client}
                </div>
                <div className="text-xs text-[#541C28] tracking-wider font-semibold mt-0.5">
                  {item.occasion}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
