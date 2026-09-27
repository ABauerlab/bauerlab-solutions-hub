"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  path: string;
  index: number;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, path, index, icon }: ServiceCardProps) => {
  const isExternal = path.startsWith("http");

  const CardContent = (
    <div className="group relative block glass p-6 md:p-8 rounded-2xl glass-hover h-full overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
        <ArrowUpRight className="text-primary" size={20} />
      </div>
      
      <div className="relative z-10">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-xs md:text-sm line-clamp-3">
          {description}
        </p>
      </div>

      <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-700" />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="min-w-[280px] sm:min-w-0 h-full"
    >
      {isExternal ? (
        <a href={path} target="_blank" rel="noopener noreferrer" className="block h-full">
          {CardContent}
        </a>
      ) : (
        <Link href={path} className="block h-full">
          {CardContent}
        </Link>
      )}
    </motion.div>
  );
};

export default ServiceCard;