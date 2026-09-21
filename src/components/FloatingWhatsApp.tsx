import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../constants/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Appear softly once the user starts browsing (or after 400ms)
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const whatsappLink = getWhatsAppUrl();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 pointer-events-auto select-none pb-[env(safe-area-inset-bottom,0px)] pr-[env(safe-area-inset-right,0px)]"
        >
          {/* Single Combined Floating WhatsApp Button: [ WhatsApp-এ যোগাযোগ করুন   WhatsApp Icon ] */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp-এ যোগাযোগ করুন"
            id="floating-whatsapp-btn"
            className="group relative inline-flex items-center gap-2 sm:gap-2.5 pl-4 pr-3.5 sm:pl-5 sm:pr-4 py-2.5 sm:py-3 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:shadow-green-600/30 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer font-['Hind_Siliguri',sans-serif]"
          >
            {/* Bengali CTA Text */}
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-white whitespace-nowrap">
              WhatsApp-এ যোগাযোগ করুন
            </span>

            {/* WhatsApp Icon */}
            <div className="relative flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-white stroke-[#25D366] transition-transform duration-300 group-hover:scale-110" />
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
