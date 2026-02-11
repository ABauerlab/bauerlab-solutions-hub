/**
 * Simple obfuscation to prevent basic scrapers from harvesting contact info.
 * Using Base64 encoding for the strings.
 */

const encodedPhone = "NTUzMTk5ODAyMTE2OQ=="; // 5531998021169
const encodedEmail = "Y29udGF0by5iYXVlcmxhYkBnbWFpbC5jb20="; // contato.bauerlab@gmail.com

export const getPhone = () => atob(encodedPhone);
export const getEmail = () => atob(encodedEmail);

export const getWhatsAppUrl = (message?: string) => {
  const phone = getPhone();
  const baseUrl = `https://wa.me/${phone}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
};