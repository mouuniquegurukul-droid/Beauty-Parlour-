import React from 'react';
import { BRAND_CONFIG } from '../constants/media';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-[#171514] text-[#F6F0E7] py-16 sm:py-20 border-t border-[#541C28]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#541C28]/30">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-xl sm:text-2xl font-semibold tracking-wide block text-[#F6F0E7]">
              {BRAND_CONFIG.ARTIST_NAME}
            </span>
            <p className="text-xs text-[#D9CABB]/80 tracking-wide font-normal">
              {BRAND_CONFIG.SUBTITLE}
            </p>
            <p className="text-xs text-[#D9CABB]/70 leading-relaxed max-w-sm pt-2">
              বাঙালি বিয়ের ঐতিহ্যবাহী রূপসজ্জা, আধুনিক রুচিশীল ফিনিশ এবং জীবনের সেরা মুহূর্তের স্মরণীয় কনে সাজ।
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs tracking-wider text-[#B89B68] font-semibold block mb-4">
              দ্রুত সূচিপত্র
            </span>
            <ul className="space-y-2 text-xs tracking-wide text-[#D9CABB]/85">
              <li>
                <button onClick={() => scrollTo('#hero')} className="hover:text-[#F6F0E7] transition-colors cursor-pointer">
                  প্রচ্ছদ
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#about')} className="hover:text-[#F6F0E7] transition-colors cursor-pointer">
                  শিল্পীর পরিচয়
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#services')} className="hover:text-[#F6F0E7] transition-colors cursor-pointer">
                  পরিষেবা
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#portfolio')} className="hover:text-[#F6F0E7] transition-colors cursor-pointer">
                  আমার কাজ (পোর্টফোলিও)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#experience')} className="hover:text-[#F6F0E7] transition-colors cursor-pointer">
                  কাজের প্রক্রিয়া
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#testimonials')} className="hover:text-[#F6F0E7] transition-colors cursor-pointer">
                  শুভবার্তা ও মতামত
                </button>
              </li>
            </ul>
          </div>

          {/* Connect / Contact */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs tracking-wider text-[#B89B68] font-semibold block mb-4">
              যোগাযোগ ও সোশ্যাল মিডিয়া
            </span>
            <ul className="space-y-2.5 text-xs text-[#D9CABB]/85 tracking-wide font-normal">
              <li className="flex items-center gap-2">
                <span className="text-[#D9CABB] font-medium">ইনস্টাগ্রাম:</span>
                <span className="text-[#D9CABB]/70">@bengalibridal_artistry</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D9CABB] font-medium">ফেসবুক:</span>
                <span className="text-[#D9CABB]/70">/bengalibridalmakeup</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D9CABB] font-medium">যোগাযোগ:</span>
                <span className="text-[#D9CABB]/85">{BRAND_CONFIG.PHONE_DISPLAY}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D9CABB] font-medium">লোকেশন:</span>
                <span className="text-[#D9CABB]/70">কলকাতা ও পশ্চিমবঙ্গজুড়ে উপলব্ধ</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D9CABB]/60 gap-4 tracking-wide">
          <p>
            © {new Date().getFullYear()} {BRAND_CONFIG.ARTIST_NAME}। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <span className="text-xs font-medium text-[#B89B68] tracking-wider">
            বাঙালি কনে সাজ • আভিজাত্য • ঐতিহ্য
          </span>
        </div>
      </div>
    </footer>
  );
};
