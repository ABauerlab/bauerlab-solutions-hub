import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
}

const CTASection = ({
  title = "Pronto para parar de amadorismo?",
  description = "Sua marca merece uma estrutura profissional que converte. Sem enrolação, sem contratos infinitos. Vamos direto ao resultado.",
}: CTASectionProps) => {
  return (
    <section className="py-20 md:py-32 border-t border-border bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{title}</h2>
          <p className="text-lg text-muted-foreground mb-10">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5531998021169"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded-md font-heading font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20"
            >
              Falar com Especialista <ArrowRight size={20} />
            </a>
            <a
              href="https://wa.me/5531998021169"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] px-10 py-5 rounded-md font-heading font-bold text-lg hover:bg-[#25D366]/10 transition-all"
            >
              <MessageCircle size={20} /> WhatsApp
            </a>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Resposta em menos de 15 minutos em horário comercial.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;