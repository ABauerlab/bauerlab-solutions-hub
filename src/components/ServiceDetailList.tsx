import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ServiceDetailProps {
  items: { title: string; description: string }[];
}

const ServiceDetailList = ({ items }: ServiceDetailProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          viewport={{ once: true }}
          className="flex gap-4 p-6 bg-card border border-border rounded-lg"
        >
          <div className="shrink-0 mt-0.5">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <Check size={12} className="text-primary" />
            </div>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-sm mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceDetailList;
