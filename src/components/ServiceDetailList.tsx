"use client";

import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";

interface ServiceDetailProps {
  items: { title: string; description: string; link?: string }[];
}

const ServiceDetailList = ({ items }: ServiceDetailProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
      {items.map((item, index) => {
        const Content = (
          <div className="flex gap-3 md:gap-4 p-4 md:p-6 bg-card border border-border rounded-lg h-full hover:border-primary/50 transition-colors group">
            <div className="shrink-0 mt-0.5">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <Check size={12} className="text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-heading font-semibold text-sm">{item.title}</h3>
                {item.link && (
                  <ExternalLink size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </div>
        );

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            {item.link ? (
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block h-full"
              >
                {Content}
              </a>
            ) : (
              Content
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServiceDetailList;