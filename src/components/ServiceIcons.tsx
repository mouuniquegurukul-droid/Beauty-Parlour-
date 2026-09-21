import React from 'react';

interface ServiceIconProps {
  id: string;
  className?: string;
}

/**
 * ServiceIcon
 * 
 * Five small, elegant line-art icons crafted specifically for each service:
 * 01 - Bengali Bridal Makeup: Minimal Bengali bridal sholar mukut & tikka jewellery
 * 02 - Reception & Engagement: Minimal engagement ring with delicate floral detail
 * 03 - Party & Special Occasion: Minimal elegant beauty sparkle icon
 * 04 - Hair Styling: Minimal bridal hair comb with decorative floral crest
 * 05 - Saree Draping: Minimal flowing silk saree aanchal & pleats fabric line icon
 *
 * Style:
 * - Ultra-clean premium line-art
 * - Deep muted maroon (#541C28)
 * - Thin strokes (1.35px)
 * - Sized ~18px–22px
 * - Pure SVG, static, no animation, no background circles
 */
export const ServiceIcon: React.FC<ServiceIconProps> = ({ id, className = 'w-4 h-4 sm:w-5 sm:h-5 text-[#541C28]' }) => {
  switch (id) {
    // 01: Bengali Bridal Makeup — minimal Bengali bridal face / jewellery icon (Sholar Mukut & Tikka)
    case '01':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          {/* Traditional Bengali Mukut crest arch */}
          <path d="M 4 10 C 7 5, 12 3, 12 3 C 12 3, 17 5, 20 10" />
          <path d="M 7 10 Q 12 6, 17 10" />
          {/* Central tikka chain & pendant */}
          <path d="M 12 3 V 12" />
          <path d="M 12 12 C 10.5 14, 10.5 15.5, 12 17 C 13.5 15.5, 13.5 14, 12 12 Z" />
          {/* Chandan forehead bindi accent */}
          <circle cx="12" cy="14.5" r="0.8" fill="currentColor" />
          {/* Side bridal floral pin flourishes */}
          <path d="M 5.5 10.5 Q 4 12, 5 13.5" />
          <path d="M 18.5 10.5 Q 20 12, 19 13.5" />
        </svg>
      );

    // 02: Reception & Engagement — minimal engagement ring with subtle floral detail
    case '02':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          {/* Slender ring band */}
          <circle cx="12" cy="14" r="6.5" />
          {/* Solitaire diamond facet mount */}
          <path d="M 9.5 7.5 L 11 4.5 H 13 L 14.5 7.5 Z" />
          <path d="M 11 4.5 L 12 7.5 L 13 4.5" />
          {/* Delicate floral leaf sprig flanking the gem */}
          <path d="M 8.5 6 C 7 4.5, 7.5 3, 9 3.5 C 9.5 4.5, 9.5 5.5, 8.5 6 Z" />
          <path d="M 15.5 6 C 17 4.5, 16.5 3, 15 3.5 C 14.5 4.5, 14.5 5.5, 15.5 6 Z" />
        </svg>
      );

    // 03: Party & Special Occasion — minimal elegant sparkle / beauty icon
    case '03':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          {/* Primary 4-pointed diamond star sparkle */}
          <path d="M 11 2 C 11 7, 11 7, 16 11 C 11 15, 11 15, 11 20 C 11 15, 11 15, 6 11 C 11 7, 11 7, 11 2 Z" />
          {/* Secondary delicate mini starlet */}
          <path d="M 18.5 4 C 18.5 6.5, 18.5 6.5, 21 8.5 C 18.5 10.5, 18.5 10.5, 18.5 13 C 18.5 10.5, 18.5 10.5, 16 8.5 C 18.5 6.5, 18.5 6.5, 18.5 4 Z" />
          {/* Fine beauty pearl accent */}
          <circle cx="17.5" cy="18.5" r="1" fill="currentColor" />
        </svg>
      );

    // 04: Hair Styling — minimal feminine hair / comb line icon
    case '04':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          {/* Decorative floral crest top */}
          <path d="M 12 4.5 C 10.5 3, 8.5 4, 9 6 C 9.5 7.5, 12 8.5, 12 8.5 C 12 8.5, 14.5 7.5, 15 6 C 15.5 4, 13.5 3, 12 4.5 Z" />
          {/* Comb curved bridge */}
          <path d="M 4.5 10 C 8.5 8, 15.5 8, 19.5 10" />
          {/* Comb slender teeth */}
          <path d="M 6.5 9.8 V 18" />
          <path d="M 9.25 9.2 V 18.5" />
          <path d="M 12 8.9 V 19" />
          <path d="M 14.75 9.2 V 18.5" />
          <path d="M 17.5 9.8 V 18" />
        </svg>
      );

    // 05: Saree Draping — minimal flowing saree / fabric line icon
    case '05':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          {/* Cascading aanchal curve */}
          <path d="M 5 4 C 11 3, 15 8, 11.5 13.5 C 9 17.5, 13.5 19.5, 19 18" />
          {/* Inner pleat contour line */}
          <path d="M 7.5 6.5 C 12.5 5.5, 15.5 9.5, 13 14 C 11 18, 14.5 19.8, 18 19" strokeDasharray="3 2" />
          {/* Traditional pleat gathering fan at base */}
          <path d="M 6 18.5 L 7.5 21.5" />
          <path d="M 8.5 18 L 10 21.5" />
          <path d="M 11 18 L 12.5 21.5" />
          {/* Subtle aanchal border tip */}
          <path d="M 5 4 L 4 6.5" />
        </svg>
      );

    default:
      return null;
  }
};
