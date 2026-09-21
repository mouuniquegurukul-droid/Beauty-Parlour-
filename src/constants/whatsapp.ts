export const WHATSAPP_NUMBER = "917005585929";

export const WHATSAPP_DEFAULT_MESSAGE =
  "নমস্কার কল্পনা দেবনাথ, আপনার মেকআপ সার্ভিস সম্পর্কে জানতে চাই। আমার অনুষ্ঠানের তারিখ:";

/**
 * Programmatically generates the direct WhatsApp chat link for Kalpana Debnath.
 * Uses international number format: 917005585929 (Country: India +91, Number: 7005585929)
 * Pre-filled message is encoded via encodeURIComponent.
 */
export const getWhatsAppUrl = (customMessage?: string): string => {
  const message = customMessage || WHATSAPP_DEFAULT_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
