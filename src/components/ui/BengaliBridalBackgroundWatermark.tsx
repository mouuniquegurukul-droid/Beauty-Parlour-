import React from 'react';

/**
 * BengaliBridalBackgroundWatermark (STATIC)
 *
 * Subtle, luxury Bengali bridal background design directly onto
 * the existing ivory background.
 *
 * Features:
 * - Bengali Alpana-inspired line art & delicate botanical/floral curves
 * - Colors: Muted deep maroon (#541C28) & restrained champagne gold (#B89B68)
 * - Opacity: ~0.078 (within 0.05–0.08 luxury watermark range)
 * - Large partial decorative motifs entering from edges
 * - Center area behind text kept clean
 * - 100% static: NO animation, NO particles, NO canvas, NO external images
 * - pointer-events: none, sits directly above ivory base and behind all content
 */
export const BengaliBridalBackgroundWatermark: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      style={{ pointerEvents: 'none' }}
    >
      {/* ------------------------------------------------------------------ */}
      {/* 1. LARGE PARTIAL ALPANA MOTIF — Entering from Upper-Right Edge    */}
      {/* ------------------------------------------------------------------ */}
      <div className="absolute top-0 right-0 translate-x-[12%] -translate-y-[10%] sm:translate-x-[8%] sm:-translate-y-[8%] pointer-events-none">
        <svg
          viewBox="0 0 700 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[360px] sm:w-[520px] md:w-[640px] lg:w-[760px] h-auto"
          style={{ opacity: 0.078 }}
        >
          {/* Concentric Alpana guide rings */}
          <circle cx="700" cy="0" r="140" stroke="#B89B68" strokeWidth="1.2" />
          <circle cx="700" cy="0" r="185" stroke="#541C28" strokeWidth="1.3" strokeDasharray="5 5" />
          <circle cx="700" cy="0" r="235" stroke="#B89B68" strokeWidth="1.2" />
          <circle cx="700" cy="0" r="290" stroke="#541C28" strokeWidth="1.4" />
          <circle cx="700" cy="0" r="350" stroke="#B89B68" strokeWidth="1.2" strokeDasharray="6 6" />
          <circle cx="700" cy="0" r="420" stroke="#541C28" strokeWidth="1.5" />
          <circle cx="700" cy="0" r="485" stroke="#B89B68" strokeWidth="1.2" />
          <circle cx="700" cy="0" r="555" stroke="#541C28" strokeWidth="1.4" strokeDasharray="6 6" />
          <circle cx="700" cy="0" r="630" stroke="#B89B68" strokeWidth="1.3" />

          {/* Radiating Lotus Petals (Kamal Dal) from center corner */}
          <path
            d="M 700 235 C 625 235, 560 205, 515 160 C 560 115, 625 85, 700 85"
            stroke="#541C28"
            strokeWidth="1.4"
          />
          <path
            d="M 700 350 C 585 350, 490 305, 425 240 C 490 175, 585 130, 700 130"
            stroke="#B89B68"
            strokeWidth="1.3"
          />
          <path
            d="M 700 420 C 555 420, 440 365, 365 290 C 440 215, 555 160, 700 160"
            stroke="#541C28"
            strokeWidth="1.5"
          />
          <path
            d="M 700 485 C 530 485, 395 430, 305 340 C 395 250, 530 195, 700 195"
            stroke="#B89B68"
            strokeWidth="1.3"
          />
          <path
            d="M 700 555 C 500 555, 350 490, 245 385 C 350 280, 500 215, 700 215"
            stroke="#541C28"
            strokeWidth="1.4"
          />
          <path
            d="M 700 630 C 470 630, 305 550, 180 425 C 305 300, 470 220, 700 220"
            stroke="#B89B68"
            strokeWidth="1.3"
          />

          {/* Traditional Bengali scalloped wavy borders (Dheu) */}
          <path
            d="M 700 290 Q 660 295 635 270 Q 605 240 590 205 Q 575 170 555 130 Q 535 90 530 50 Q 525 20 530 0"
            stroke="#541C28"
            strokeWidth="1.3"
          />
          <path
            d="M 700 375 Q 645 385 600 350 Q 555 310 530 260 Q 500 210 480 155 Q 460 100 455 50 Q 450 15 455 0"
            stroke="#B89B68"
            strokeWidth="1.3"
          />
          <path
            d="M 700 455 Q 630 470 575 425 Q 520 375 480 315 Q 440 255 410 185 Q 380 115 375 55 Q 370 20 375 0"
            stroke="#541C28"
            strokeWidth="1.3"
          />

          {/* Bengali Bridal Kolka finial flourishes */}
          <path
            d="M 305 340 C 265 315, 250 270, 275 235 C 295 205, 340 210, 350 245 C 360 280, 320 320, 305 340 Z"
            stroke="#541C28"
            strokeWidth="1.3"
          />
          <path
            d="M 245 385 C 205 360, 190 315, 215 280 C 235 250, 280 255, 290 290 C 300 325, 260 365, 245 385 Z"
            stroke="#B89B68"
            strokeWidth="1.3"
          />

          {/* Decorative Chandan Bindis (Dots) */}
          <circle cx="560" cy="95" r="3.5" fill="#541C28" />
          <circle cx="490" cy="150" r="3.5" fill="#B89B68" />
          <circle cx="425" cy="210" r="3.5" fill="#541C28" />
          <circle cx="365" cy="280" r="3.5" fill="#B89B68" />
          <circle cx="305" cy="355" r="3.5" fill="#541C28" />
          <circle cx="245" cy="430" r="3.5" fill="#B89B68" />
          <circle cx="190" cy="510" r="3.5" fill="#541C28" />
          <circle cx="145" cy="590" r="3.5" fill="#B89B68" />
          <circle cx="635" cy="55" r="3" fill="#B89B68" />
          <circle cx="535" cy="120" r="3" fill="#541C28" />
          <circle cx="445" cy="190" r="3" fill="#B89B68" />
          <circle cx="370" cy="265" r="3" fill="#541C28" />
        </svg>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 2. DELICATE BOTANICAL LINE-ART — Entering from Left Edge           */}
      {/* ------------------------------------------------------------------ */}
      <div className="absolute top-[16%] sm:top-[20%] left-0 -translate-x-[10%] sm:-translate-x-[5%] pointer-events-none">
        <svg
          viewBox="0 0 420 850"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[220px] sm:w-[320px] md:w-[380px] lg:w-[440px] h-auto"
          style={{ opacity: 0.078 }}
        >
          {/* Main ascending bridal creeper vine (lata) */}
          <path
            d="M 10 20 C 70 100, 160 180, 170 280 C 180 380, 80 460, 130 560 C 180 660, 260 720, 240 840"
            stroke="#541C28"
            strokeWidth="1.4"
          />
          {/* Secondary parallel vine with champagne gold dash */}
          <path
            d="M 35 40 C 95 120, 175 195, 185 290 C 195 390, 100 465, 150 565 C 200 665, 275 725, 260 840"
            stroke="#B89B68"
            strokeWidth="1.2"
            strokeDasharray="5 5"
          />

          {/* Leaf pair 1: upper */}
          <path
            d="M 140 160 C 190 145, 235 165, 220 200 C 185 215, 150 190, 140 160 Z"
            stroke="#B89B68"
            strokeWidth="1.3"
          />
          <path d="M 140 160 Q 185 180 220 200" stroke="#B89B68" strokeWidth="0.8" />

          {/* Leaf pair 2: mid-upper */}
          <path
            d="M 170 280 C 240 265, 290 295, 270 340 C 225 360, 185 330, 170 280 Z"
            stroke="#541C28"
            strokeWidth="1.4"
          />
          <path d="M 170 280 Q 230 310 270 340" stroke="#541C28" strokeWidth="0.9" />

          {/* Stylized Lotus Bud (Kamal Koli) branching off */}
          <path
            d="M 170 280 C 215 245, 260 235, 295 250 C 325 265, 335 290, 320 315 C 295 330, 265 320, 240 295"
            stroke="#B89B68"
            strokeWidth="1.3"
          />
          <circle cx="315" cy="285" r="4" fill="#541C28" />
          <circle cx="325" cy="295" r="3" fill="#B89B68" />

          {/* Leaf pair 3: center curve inward */}
          <path
            d="M 105 430 C 50 445, 15 485, 30 520 C 70 535, 110 500, 105 430 Z"
            stroke="#B89B68"
            strokeWidth="1.3"
          />
          <path d="M 105 430 Q 60 480 30 520" stroke="#B89B68" strokeWidth="0.8" />

          {/* Leaf pair 4: mid-lower */}
          <path
            d="M 130 560 C 200 540, 255 570, 240 620 C 195 640, 145 610, 130 560 Z"
            stroke="#541C28"
            strokeWidth="1.4"
          />
          <path d="M 130 560 Q 190 590 240 620" stroke="#541C28" strokeWidth="0.9" />

          {/* Leaf pair 5: lower sweep */}
          <path
            d="M 210 700 C 280 680, 335 710, 320 760 C 275 780, 225 750, 210 700 Z"
            stroke="#B89B68"
            strokeWidth="1.3"
          />
          <path d="M 210 700 Q 270 730 320 760" stroke="#B89B68" strokeWidth="0.8" />

          {/* Delicate curling tendrils */}
          <path
            d="M 175 220 C 215 200, 250 205, 255 225 C 260 245, 230 255, 220 245"
            stroke="#541C28"
            strokeWidth="1.1"
          />
          <path
            d="M 140 500 C 180 480, 215 485, 220 505 C 225 525, 195 535, 185 525"
            stroke="#B89B68"
            strokeWidth="1.1"
          />
          <path
            d="M 195 640 C 235 620, 270 625, 275 645 C 280 665, 250 675, 240 665"
            stroke="#541C28"
            strokeWidth="1.1"
          />

          {/* Dot accents */}
          <circle cx="255" cy="225" r="2.5" fill="#B89B68" />
          <circle cx="220" cy="505" r="2.5" fill="#541C28" />
          <circle cx="275" cy="645" r="2.5" fill="#B89B68" />
        </svg>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 3. PARTIAL ORNAMENTAL MOTIF — Near Lower Section (Bottom-Left)     */}
      {/* ------------------------------------------------------------------ */}
      <div className="absolute bottom-0 left-0 -translate-x-[15%] translate-y-[15%] sm:-translate-x-[10%] sm:translate-y-[10%] pointer-events-none">
        <svg
          viewBox="0 0 620 620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[320px] sm:w-[440px] md:w-[540px] lg:w-[620px] h-auto"
          style={{ opacity: 0.078 }}
        >
          {/* Concentric Alpana arcs entering from bottom-left */}
          <circle cx="0" cy="620" r="140" stroke="#B89B68" strokeWidth="1.2" />
          <circle cx="0" cy="620" r="190" stroke="#541C28" strokeWidth="1.3" strokeDasharray="5 5" />
          <circle cx="0" cy="620" r="250" stroke="#B89B68" strokeWidth="1.2" />
          <circle cx="0" cy="620" r="320" stroke="#541C28" strokeWidth="1.4" />
          <circle cx="0" cy="620" r="400" stroke="#B89B68" strokeWidth="1.2" strokeDasharray="6 6" />
          <circle cx="0" cy="620" r="490" stroke="#541C28" strokeWidth="1.5" />
          <circle cx="0" cy="620" r="570" stroke="#B89B68" strokeWidth="1.3" />

          {/* Radial Lotus Petals outward from bottom-left */}
          <path
            d="M 0 490 C 80 490, 150 455, 195 410 C 150 365, 80 330, 0 330"
            stroke="#541C28"
            strokeWidth="1.4"
          />
          <path
            d="M 0 400 C 120 400, 225 355, 290 290 C 225 225, 120 180, 0 180"
            stroke="#B89B68"
            strokeWidth="1.3"
          />
          <path
            d="M 0 320 C 160 320, 290 260, 380 165 C 290 70, 160 15, 0 15"
            stroke="#541C28"
            strokeWidth="1.5"
          />
          <path
            d="M 180 620 C 180 500, 225 395, 290 330 C 355 395, 400 500, 400 620"
            stroke="#B89B68"
            strokeWidth="1.3"
          />
          <path
            d="M 320 620 C 320 460, 380 330, 475 235 C 570 330, 625 460, 625 620"
            stroke="#541C28"
            strokeWidth="1.4"
          />

          {/* Bengali Kolka petal flourishes */}
          <path
            d="M 380 165 C 420 145, 440 100, 415 65 C 390 30, 345 35, 335 70 C 325 105, 365 145, 380 165 Z"
            stroke="#541C28"
            strokeWidth="1.3"
          />
          <path
            d="M 475 235 C 515 255, 535 300, 510 335 C 485 370, 440 365, 430 330 C 420 295, 460 255, 475 235 Z"
            stroke="#B89B68"
            strokeWidth="1.3"
          />

          {/* Chandan bindi dots */}
          <circle cx="195" cy="410" r="3.5" fill="#541C28" />
          <circle cx="290" cy="290" r="3.5" fill="#B89B68" />
          <circle cx="380" cy="165" r="3.5" fill="#541C28" />
          <circle cx="290" cy="330" r="3.5" fill="#B89B68" />
          <circle cx="475" cy="235" r="3.5" fill="#541C28" />
        </svg>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 4. OCCASIONAL SUBTLE FLORAL CURVES — Middle-Right Margin           */}
      {/* ------------------------------------------------------------------ */}
      <div className="absolute top-[52%] right-0 translate-x-[12%] sm:translate-x-[6%] pointer-events-none">
        <svg
          viewBox="0 0 340 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[180px] sm:w-[260px] md:w-[320px] lg:w-[380px] h-auto"
          style={{ opacity: 0.075 }}
        >
          {/* Gentle descending botanical arch */}
          <path
            d="M 340 20 C 265 45, 170 120, 150 220 C 130 325, 195 405, 160 510 C 150 540, 130 555, 100 560"
            stroke="#541C28"
            strokeWidth="1.3"
          />
          <path
            d="M 340 45 C 275 70, 190 140, 170 235 C 150 335, 210 410, 180 510"
            stroke="#B89B68"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />

          {/* Outward blooming petal flourishes */}
          <path
            d="M 150 220 C 90 200, 45 230, 65 275 C 105 290, 140 265, 150 220 Z"
            stroke="#B89B68"
            strokeWidth="1.3"
          />
          <path
            d="M 170 355 C 110 335, 65 365, 85 410 C 125 425, 160 400, 170 355 Z"
            stroke="#541C28"
            strokeWidth="1.3"
          />

          {/* Subtle paisley / kolka curl */}
          <path
            d="M 65 275 C 38 258, 20 225, 38 198 C 60 170, 98 175, 105 202 C 110 230, 82 262, 65 275 Z"
            stroke="#541C28"
            strokeWidth="1.2"
          />

          <circle cx="38" cy="198" r="3" fill="#B89B68" />
          <circle cx="85" cy="410" r="2.5" fill="#541C28" />
          <circle cx="65" cy="275" r="2.5" fill="#B89B68" />
        </svg>
      </div>
    </div>
  );
};
