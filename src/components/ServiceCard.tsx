import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  path: string;
  index: number;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, path, index, icon }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        to={path}
        className="group block bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:glow-primary h-full"
      >
        <div className="text-primary mb-4">{icon}</div>
        <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
        <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Saiba mais <ArrowRight size={14} />
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
