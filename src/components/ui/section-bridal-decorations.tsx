import React from 'react';

/**
 * SectionBridalDecorations (STATIC)
 *
 * Very subtle static decorative pattern in the ivory background areas
 * behind/around the existing text.
 *
 * Style:
 * - Minimal Bengali Alpana-inspired line art
 * - Delicate leaf/floral curves
 * - Premium Bengali bridal aesthetic
 * - Very thin lines (0.75px–1px)
 * - Deep maroon (#541C28) + muted champagne gold (#B89B68)
 * - Extremely low opacity: 0.05–0.06 (within 0.04–0.07 range)
 * - Barely visible, elegant, static (NO ANIMATION)
 * - Center behind text kept clean
 * - Small partial ornaments near section corners/edges
 */

// --------------------------------------------------------------------------
// 1. "শিল্পীর পরিচয় / কল্পনা দেবনাথ" (About Section)
// Corner ornaments: Top-Left floral curve + Bottom-Right partial Alpana
// --------------------------------------------------------------------------
export const AboutSectionDecor: React.FC = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ pointerEvents: 'none' }}
    >
      {/* Top-Left: Delicate static botanical/floral curve */}
      <div className="absolute -top-6 -left-8 sm:-left-3 lg:left-4 pointer-events-none">
        <svg
          viewBox="0 0 240 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[140px] sm:w-[190px] lg:w-[230px] h-auto"
          style={{ opacity: 0.055 }}
        >
          <path
            d="M 10 10 C 50 35, 100 80, 110 145 C 120 205, 80 245, 140 275"
            stroke="#541C28"
            strokeWidth="0.85"
          />
          <path
            d="M 22 30 C 65 65, 95 105, 90 160 C 85 200, 115 225, 150 240"
            stroke="#B89B68"
            strokeWidth="0.75"
            strokeDasharray="3 3"
          />
          {/* Delicate leaf curves */}
          <path
            d="M 75 75 C 100 65, 115 78, 105 95 C 90 105, 75 92, 75 75 Z"
            stroke="#B89B68"
            strokeWidth="0.75"
          />
          <path
            d="M 110 145 C 142 135, 158 155, 145 172 C 125 180, 110 165, 110 145 Z"
            stroke="#541C28"
            strokeWidth="0.75"
          />
          {/* Stylized lotus bud */}
          <path
            d="M 140 275 C 152 258, 168 262, 168 278 C 160 290, 144 286, 140 275 Z"
            stroke="#541C28"
            strokeWidth="0.75"
          />
          <circle cx="168" cy="278" r="2" fill="#B89B68" />
          <circle cx="105" cy="95" r="1.5" fill="#541C28" />
          <circle cx="145" cy="172" r="1.5" fill="#B89B68" />
        </svg>
      </div>

      {/* Bottom-Right: Small partial Alpana-inspired motif */}
      <div className="absolute -bottom-10 -right-10 sm:-right-4 lg:right-2 pointer-events-none">
        <svg
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[150px] sm:w-[200px] lg:w-[250px] h-auto"
          style={{ opacity: 0.06 }}
        >
          <path
            d="M 280 20 A 240 240 0 0 0 40 280"
            stroke="#B89B68"
            strokeWidth="0.85"
            strokeDasharray="3 3"
          />
          <path
            d="M 280 55 A 205 205 0 0 0 75 280"
            stroke="#541C28"
            strokeWidth="0.75"
          />
          <path
            d="M 280 95 A 165 165 0 0 0 115 280"
            stroke="#B89B68"
            strokeWidth="0.75"
          />
          <path
            d="M 280 135 A 125 125 0 0 0 155 280"
            stroke="#541C28"
            strokeWidth="0.75"
            strokeDasharray="4 2"
          />
          {/* Subtle dots */}
          <circle cx="130" cy="235" r="2" fill="#B89B68" />
          <circle cx="170" cy="195" r="2" fill="#541C28" />
          <circle cx="225" cy="155" r="2" fill="#B89B68" />
        </svg>
      </div>
    </div>
  );
};

// --------------------------------------------------------------------------
// 2. "পরিষেবা" (Services Section)
// Corner ornaments: Top-Right Bengali bridal Kalka + Bottom-Left floral curve
// --------------------------------------------------------------------------
export const ServicesSectionDecor: React.FC = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ pointerEvents: 'none' }}
    >
      {/* Top-Right: Minimal Bengali bridal Kalka curve */}
      <div className="absolute top-4 -right-8 sm:-right-3 lg:right-4 pointer-events-none">
        <svg
          viewBox="0 0 240 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[140px] sm:w-[190px] lg:w-[240px] h-auto"
          style={{ opacity: 0.055 }}
        >
          <path
            d="M 220 300 C 190 285, 120 245, 105 175 C 92 110, 130 65, 185 30 C 210 15, 230 10, 240 10"
            stroke="#B89B68"
            strokeWidth="0.85"
          />
          <path
            d="M 210 290 C 180 270, 130 230, 120 170 C 110 115, 140 70, 195 40"
            stroke="#541C28"
            strokeWidth="0.75"
            strokeDasharray="4 2"
          />
          <path
            d="M 185 30 C 165 22, 150 35, 158 55 C 165 70, 180 62, 178 50"
            stroke="#B89B68"
            strokeWidth="0.75"
          />
          <circle cx="105" cy="175" r="2" fill="#B89B68" />
          <circle cx="120" cy="125" r="1.5" fill="#541C28" />
          <circle cx="140" cy="85" r="1.5" fill="#B89B68" />
        </svg>
      </div>

      {/* Bottom-Left: Delicate leaf/floral curve */}
      <div className="absolute bottom-6 -left-8 sm:-left-3 lg:left-4 pointer-events-none">
        <svg
          viewBox="0 0 220 270"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[130px] sm:w-[180px] lg:w-[220px] h-auto"
          style={{ opacity: 0.055 }}
        >
          <path
            d="M 10 260 C 60 230, 95 190, 90 125 C 80 70, 115 30, 170 10"
            stroke="#541C28"
            strokeWidth="0.85"
          />
          <path
            d="M 22 245 C 65 215, 80 165, 75 120 C 70 70, 105 40, 145 22"
            stroke="#B89B68"
            strokeWidth="0.75"
            strokeDasharray="3 3"
          />
          <path
            d="M 90 125 C 115 110, 132 118, 125 138 C 110 150, 95 140, 90 125 Z"
            stroke="#B89B68"
            strokeWidth="0.75"
          />
          <circle cx="170" cy="10" r="2" fill="#B89B68" />
          <circle cx="125" cy="138" r="1.5" fill="#541C28" />
        </svg>
      </div>
    </div>
  );
};

// --------------------------------------------------------------------------
// 3. "কাজের প্রক্রিয়া" (The Experience Section)
// Corner ornaments: Top-Left Alpana arch + Bottom-Right floral branch
// --------------------------------------------------------------------------
export const ExperienceSectionDecor: React.FC = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ pointerEvents: 'none' }}
    >
      {/* Top-Left: Small static Alpana arch */}
      <div className="absolute top-8 -left-8 sm:-left-3 lg:left-4 pointer-events-none">
        <svg
          viewBox="0 0 240 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[140px] sm:w-[190px] lg:w-[240px] h-auto"
          style={{ opacity: 0.06 }}
        >
          <path
            d="M 0 240 A 210 210 0 0 1 210 0"
            stroke="#B89B68"
            strokeWidth="0.85"
            strokeDasharray="3 3"
          />
          <path
            d="M 0 200 A 175 175 0 0 1 175 0"
            stroke="#541C28"
            strokeWidth="0.75"
          />
          <path
            d="M 0 160 A 140 140 0 0 1 140 0"
            stroke="#B89B68"
            strokeWidth="0.75"
          />
          <circle cx="125" cy="55" r="2" fill="#B89B68" />
          <circle cx="90" cy="90" r="1.5" fill="#541C28" />
          <circle cx="55" cy="125" r="2" fill="#B89B68" />
        </svg>
      </div>

      {/* Bottom-Right: Delicate floral tendril */}
      <div className="absolute bottom-6 -right-8 sm:-right-3 lg:right-4 pointer-events-none">
        <svg
          viewBox="0 0 220 270"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[130px] sm:w-[180px] lg:w-[220px] h-auto"
          style={{ opacity: 0.055 }}
        >
          <path
            d="M 210 260 C 160 230, 125 180, 135 120 C 142 65, 105 25, 50 10"
            stroke="#541C28"
            strokeWidth="0.85"
          />
          <path
            d="M 198 245 C 155 215, 140 165, 145 115 C 150 68, 120 40, 75 20"
            stroke="#B89B68"
            strokeWidth="0.75"
            strokeDasharray="3 3"
          />
          <path
            d="M 135 120 C 110 105, 92 112, 98 132 C 115 142, 130 135, 135 120 Z"
            stroke="#B89B68"
            strokeWidth="0.75"
          />
          <circle cx="50" cy="10" r="2" fill="#B89B68" />
          <circle cx="98" cy="132" r="1.5" fill="#541C28" />
        </svg>
      </div>
    </div>
  );
};

// --------------------------------------------------------------------------
// 4. "প্রশংসাসূচক মন্তব্য / শুভবার্তা" (Testimonials Section)
// Corner ornaments: Top-Right floral curve + Bottom-Left ornamental arc
// --------------------------------------------------------------------------
export const TestimonialsSectionDecor: React.FC = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ pointerEvents: 'none' }}
    >
      {/* Top-Right: Delicate botanical line art */}
      <div className="absolute top-6 -right-8 sm:-right-3 lg:right-4 pointer-events-none">
        <svg
          viewBox="0 0 220 270"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[130px] sm:w-[180px] lg:w-[220px] h-auto"
          style={{ opacity: 0.055 }}
        >
          <path
            d="M 210 10 C 170 40, 125 90, 130 145 C 135 200, 175 230, 120 260"
            stroke="#541C28"
            strokeWidth="0.85"
          />
          <path
            d="M 198 30 C 160 60, 130 100, 132 152 C 138 190, 110 215, 80 230"
            stroke="#B89B68"
            strokeWidth="0.75"
            strokeDasharray="3 3"
          />
          <circle cx="120" cy="260" r="2" fill="#B89B68" />
          <circle cx="130" cy="145" r="1.5" fill="#541C28" />
        </svg>
      </div>

      {/* Bottom-Left: Subtle ornamental bridal curve */}
      <div className="absolute bottom-6 -left-8 sm:-left-3 lg:left-4 pointer-events-none">
        <svg
          viewBox="0 0 220 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[130px] sm:w-[180px] lg:w-[220px] h-auto"
          style={{ opacity: 0.055 }}
        >
          <path
            d="M 15 250 C 50 235, 110 195, 120 135 C 128 80, 95 45, 40 15"
            stroke="#B89B68"
            strokeWidth="0.85"
          />
          <path
            d="M 28 238 C 60 220, 100 185, 108 130 C 115 85, 88 52, 50 26"
            stroke="#541C28"
            strokeWidth="0.75"
            strokeDasharray="4 2"
          />
          <circle cx="120" cy="135" r="2" fill="#B89B68" />
          <circle cx="40" cy="15" r="2" fill="#B89B68" />
        </svg>
      </div>
    </div>
  );
};
