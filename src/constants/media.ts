/**
 * STRICT MEDIA ASSETS LOCK
 * Exact Cloudinary URLs mapped directly to each section according to strict requirements.
 * Every media item is used exactly once.
 */

export const MEDIA_ASSETS = {
  // WELCOME VIDEO - Owner's Bengali Welcome Greeting (Use in Welcome Video section)
  WELCOME_VIDEO: "https://res.cloudinary.com/a3efqjsz/video/upload/v1789967817/Woman_welcoming_visitors_in_Bengali-clip-1_20260921102623.mp4",

  // HERO VIDEO - VIDEO 01 (Use ONLY in HERO)
  HERO_VIDEO: "https://res.cloudinary.com/a3efqjsz/video/upload/v1789923941/AQOlDvN1K9GsDIruzqfsAdyrEmNEyqojyqPhlDFIz0H8o2l4qhpWH9txuokNGEwFeX1rN_kYWGZgNc_ySdD32w1Y.mp4",

  // BEAUTY FILM - VIDEO 02 (Use ONLY in BEAUTY IN MOTION)
  BEAUTY_FILM_VIDEO: "https://res.cloudinary.com/a3efqjsz/video/upload/v1789925384/AQPp4ImsRmKY15gqlLQYfjaIhoExgK1ztQ3877vD6mBbiNeDvUSboSe7np4Dynq4RA1tkrfc9_4l7s1BnmsL2plAjRzosNMaWcj3x50.mp4",

  // OWNER / MAKEUP ARTIST (Use ONLY in MEET THE ARTIST, never as client work)
  OWNER_IMAGE: "https://res.cloudinary.com/a3efqjsz/image/upload/v1789925456/facebook_1789878225040_7507293398798285030.jpg",

  // CLIENT WORK 01 (Use ONLY in SELECTED WORK)
  CLIENT_WORK_01: "https://res.cloudinary.com/a3efqjsz/image/upload/v1789925454/FB_IMG_1789878349371.jpg",

  // CLIENT WORK 02 (Use ONLY in SELECTED WORK)
  CLIENT_WORK_02: "https://res.cloudinary.com/a3efqjsz/image/upload/v1789925458/FB_IMG_1789838325858.jpg",

  // CLIENT WORK 03 (Use ONLY in SELECTED WORK)
  CLIENT_WORK_03: "https://res.cloudinary.com/a3efqjsz/image/upload/v1789925461/FB_IMG_1789838138359.jpg",

  // CLIENT WORK 04 (Use ONLY in BENGALI BRIDAL)
  CLIENT_WORK_04: "https://res.cloudinary.com/a3efqjsz/image/upload/v1789925465/FB_IMG_1789838306909.jpg",

  // CLIENT WORK 05 (Use ONLY in DETAILS)
  CLIENT_WORK_05: "https://res.cloudinary.com/a3efqjsz/image/upload/v1789925467/FB_IMG_1789838188855.jpg",

  // CLIENT WORK 06 (Use ONLY in DETAILS)
  CLIENT_WORK_06: "https://res.cloudinary.com/a3efqjsz/image/upload/v1789925467/FB_IMG_1789838099536.jpg",

  // CLIENT WORK 07 (Use ONLY in REAL WORK)
  CLIENT_WORK_07: "https://res.cloudinary.com/a3efqjsz/image/upload/v1789925468/FB_IMG_1789838120219.jpg",

  // CLIENT WORK 08 (Use ONLY in REAL WORK)
  CLIENT_WORK_08: "https://res.cloudinary.com/a3efqjsz/image/upload/v1789925466/FB_IMG_1789838212276.jpg",

  // CLIENT WORK 09 (Use ONLY in REAL WORK)
  CLIENT_WORK_09: "https://res.cloudinary.com/a3efqjsz/image/upload/v1789925469/FB_IMG_1789838089920.jpg",
} as const;

export const BRAND_CONFIG = {
  ARTIST_NAME: "কল্পনা দেবনাথ",
  ENGLISH_NAME: "Kalpana Debnath",
  SUBTITLE: "বাঙালি ব্রাইডাল • বিশেষ সাজ • রূপসজ্জা",
  WHATSAPP_NUMBER: "917005585929",
  PHONE_DISPLAY: "+91 70055 85929",
  DEFAULT_MESSAGE: "নমস্কার কল্পনা দেবনাথ, আপনার মেকআপ সার্ভিস সম্পর্কে জানতে চাই। আমার অনুষ্ঠানের তারিখ:",
  COLORS: {
    primaryIvory: "#F6F0E7",
    bengaliMaroon: "#541C28",
    darkBurgundy: "#321018",
    charcoal: "#171514",
    warmBeige: "#D9CABB",
    mutedChampagne: "#B89B68",
  },
};
