import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
}

const CTASection = ({
  title = "Pronto para estruturar sua marca?",
  description = "Conte para nós o que você precisa. Sem enrolação, sem promessas vazias. Vamos direto ao ponto.",
}: CTASectionProps) => {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-heading font-semibold hover:bg-primary/90 transition-colors"
            >
              Falar com a BauerLab <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-foreground/30 text-foreground px-8 py-3.5 rounded-md font-heading font-medium hover:border-primary hover:text-primary transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
