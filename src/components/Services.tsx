import React from 'react';
import { ServiceItem } from '../types';
import { ServiceIcon } from './ServiceIcons';
import { ServicesSectionDecor } from './ui/section-bridal-decorations';
import { AnimatedText, AnimatedParagraph } from '@/components/ui/animated-text';

export const Services: React.FC = () => {
  const servicesData: ServiceItem[] = [
    {
      id: '01',
      number: '০১',
      title: 'বাঙালি ব্রাইডাল মেকআপ',
      subtitle: 'বিয়ের মূল দিনের বিশেষ সিগনেচার সাজ',
      description:
        'ঐতিহ্যবাহী বাঙালি সংস্কৃতির প্রতি গভীর শ্রদ্ধা রেখে এক অনন্য রাজকীয় ব্রাইডাল অভিজ্ঞতা। এতে রয়েছে বিশেষ স্কিন প্রিপারেশন, উজ্জ্বল বেস, নিখুঁত টানা কাজল, কপালে নিপুণ চন্দন অঙ্কন এবং গহনা ও ওড়নার নিখুঁত বিন্যাস।',
      details: [
        'সম্পূর্ণ এইচডি / এয়ারব্রাশ সমন্বিত দীর্ঘস্থায়ী বেস',
        'কপালে ও ভ্রূতে নিখুঁত চন্দন নকশা',
        'ঐতিহ্যবাহী শোলার মুকুট ও ওড়না সেট করা',
        'অনুষ্ঠানের উপযোগী লিপ ও আই মেকআপ',
      ],
    },
    {
      id: '02',
      number: '০২',
      title: 'রিসেপশন ও এনগেজমেন্ট',
      subtitle: 'বৌভাত ও বাগদানের আধুনিক সান্ধ্য সাজ',
      description:
        'বৌভাত ও এনগেজমেন্ট অনুষ্ঠানের জন্য আধুনিক আভিজাত্যময় লুক। সতেজ দীপ্তিময় ত্বক, সাথে মানানসই স্মোকি বা উইংড আই মেকআপ এবং রুচিশীল হেয়ার স্টাইলিং।',
      details: [
        'লুমিনাস ডিউয়ি বা ভেলভেট ফিনিশ',
        'আধুনিক উইংড বা সফট স্মোকি আই টেকনিক',
        'প্রিমিয়াম ল্যাশ ও নিখুঁত কন্ট্যুরিং',
        'গহনা ও পোশাকের সাথে পরিপূর্ণ সামঞ্জস্য',
      ],
    },
    {
      id: '03',
      number: '০৩',
      title: 'পার্টি ও বিশেষ অনুষ্ঠান',
      subtitle: 'পরিবার ও অতিথিদের জন্য রুচিশীল সাজ',
      description:
        'গায়ে হলুদ, সঙ্গীত কিংবা বিয়ের অনুষ্ঠানে অংশ নেওয়া কনে-পক্ষ ও বর-পক্ষের পরিবারের সদস্য এবং বিশেষ অতিথিদের জন্য আকর্ষণীয় ও টেকসই রূপসজ্জা।',
      details: [
        'অনুষ্ঠানের আলো ও পোশাকের রঙের সাথে সামঞ্জস্য',
        'নিখুঁত শেড ম্যাচিং ও স্কিন ব্যালেন্সিং',
        'মার্জিত ও দীর্ঘস্থায়ী আই মেকআপ',
        'দীর্ঘ সময়ের অনুষ্ঠানে নিখুঁত স্থায়িত্ব',
      ],
    },
    {
      id: '04',
      number: '০৪',
      title: 'কেশসজ্জা ও হেয়ার স্টাইলিং',
      subtitle: 'ঐতিহ্যবাহী খোপা ও ফুলেল বিন্যাস',
      description:
        'তাজা বেলি ফুল বা গোলাপ দিয়ে সাজানো ক্লাসিক বাঙালি ব্রাইডাল খোপা থেকে শুরু করে আধুনিক টেক্সচার্ড ওয়েভ বা শৈল্পিক বেণী—সব ধরনের নিখুঁত কেশসজ্জা।',
      details: [
        'তাজা ফুলে সাজানো ঐতিহ্যবাহী ব্রাইডাল খোপা',
        'ভারী গহনা ও টিকলির জন্য মজবুত বেস',
        'মাথা পট্টি ও মুকুট নিখুঁতভাবে বসানো',
        'আবহাওয়া-সহনশীল দীর্ঘস্থায়ী হেয়ার সেটিং',
      ],
    },
    {
      id: '05',
      number: '০৫',
      title: 'শাড়ি ড্রাপিং',
      subtitle: 'বেনারসি ও সিল্কের নিখুঁত ড্রাপিং ও প্লিটিং',
      description:
        'বেনারসি, কাঞ্জিভরম কিংবা ঢাকাই জামদানির নিখুঁত প্লিটিং ও পিনিং। যাতে অনুষ্ঠানের ব্যস্ততার মাঝেও আপনি স্বাচ্ছন্দ্যে চলাফেরা করতে পারেন এবং সাজ থাকে অটুট।',
      details: [
        'ঐতিহ্যবাহী আটপৌরে ও আধুনিক বাঙালি ড্রাপ',
        'আঁচলের সুষম প্লিটিং ও দৈর্ঘ্য সমন্বয়',
        'স্বাচ্ছন্দ্য ও দীর্ঘক্ষণ চলাফেরার জন্য মজবুত পিনিং',
        'মাথার ওড়না ও ঘোমটার শৈল্পিক লেয়ারিং',
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full bg-transparent text-[#171514] py-24 sm:py-32 border-t border-[#D9CABB]/60 overflow-hidden"
    >
      {/* Decorative Bengali bridal line-art layer (NEW) z-index: 0 */}
      <ServicesSectionDecor />

      {/* Existing content: position: relative; z-index: 1 */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-1">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <span className="text-xs tracking-widest font-semibold text-[#541C28] block mb-3">
              পরিষেবা
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.12] text-[#171514]">
              <AnimatedText text="আপনার বিশেষ মুহূর্তের" delay={0.1} /> <br />
              <AnimatedText text="জন্য বিশেষ সাজ" className="text-[#541C28] font-semibold" delay={0.3} />
            </h2>
          </div>

          <AnimatedParagraph className="text-sm sm:text-base text-[#171514]/75 max-w-md font-normal leading-[1.7]" delay={0.45}>
            আপনার ত্বক, পোশাক ও অনুষ্ঠানের প্রকৃতির ওপর নির্ভর করে প্রতিটি সাজ আলাদাভাবে পরিকল্পনা করা হয়।
          </AnimatedParagraph>
        </div>

        {/* Typography-Led Services List */}
        <div className="divide-y divide-[#D9CABB]/80">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className="py-8 sm:py-10"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2 sm:px-4">
                <div className="flex items-start sm:items-baseline gap-6 sm:gap-10">
                  {/* Large Editorial Number */}
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#541C28]/80">
                    {item.number}
                  </span>

                  {/* Service Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-[#171514] flex items-center gap-2.5 sm:gap-3">
                      <span>{item.title}</span>
                      <ServiceIcon id={item.id} className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] text-[#541C28] shrink-0" />
                    </h3>
                    <p className="text-xs sm:text-sm text-[#171514]/70 tracking-wide font-normal mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Permanently visible service description and inclusions on initial load */}
              <div className="pt-6 sm:pt-8 pb-4 px-2 sm:px-4 pl-12 sm:pl-20 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 text-[#171514]/85 block opacity-100 visible h-auto">
                <div>
                  <p className="text-sm sm:text-base leading-[1.7] font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="border-l border-[#541C28]/20 pl-6 space-y-2">
                  <span className="text-xs tracking-wider text-[#541C28] font-semibold block mb-2">
                    সাজের অন্তর্ভুক্ত বিষয়সমূহ
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#171514]/80">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#541C28]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
