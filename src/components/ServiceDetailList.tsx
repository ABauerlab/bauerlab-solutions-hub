"use client";

import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";

interface ServiceDetailProps {
  items: { title: string; description: string; link?: string }[];
  highlightFirst?: boolean;
}

const ServiceDetailList = ({ items, highlightFirst }: ServiceDetailProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
      {items.map((item, index) => {
        const isFeatured = highlightFirst && index === 0;
        const Content = (
          <div
            className={`flex gap-3 md:gap-4 p-4 md:p-6 rounded-lg h-full transition-colors group ${
              isFeatured ? "bg-primary" : "bg-card border border-border hover:border-primary/50"
            }`}
          >
            <div className="shrink-0 mt-0.5">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isFeatured ? "bg-lime" : "bg-primary/20"}`}>
                <Check size={12} className={isFeatured ? "text-lime-foreground" : "text-primary"} />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className={`font-heading font-semibold text-sm ${isFeatured ? "text-primary-foreground" : ""}`}>{item.title}</h3>
                {item.link && (
                  <ExternalLink size={14} className={`opacity-0 group-hover:opacity-100 transition-opacity ${isFeatured ? "text-primary-foreground" : "text-primary"}`} />
                )}
              </div>
              <p className={`text-sm leading-relaxed ${isFeatured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{item.description}</p>
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