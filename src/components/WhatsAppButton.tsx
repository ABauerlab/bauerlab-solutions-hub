import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5531998021169";

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,45%)] text-white px-5 py-3.5 rounded-full shadow-lg hover:bg-[hsl(142,70%,40%)] transition-all duration-300 hover:scale-105 group"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      aria-label="Fale pelo WhatsApp"
    >
      <MessageCircle size={22} className="fill-white" />
      <span className="hidden sm:inline text-sm font-heading font-semibold">
        Fale Conosco
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
