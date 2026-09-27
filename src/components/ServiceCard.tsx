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
  tone?: "primary" | "lime";
}

const ServiceCard = ({ title, description, path, index, icon, tone }: ServiceCardProps) => {
  const isExternal = path.startsWith("http");

  const toneClasses =
    tone === "primary"
      ? "bg-primary border-transparent"
      : tone === "lime"
      ? "bg-lime border-transparent"
      : "border border-border bg-card/40 hover:border-primary/40";
  const textClasses = tone === "primary" ? "text-primary-foreground" : tone === "lime" ? "text-lime-foreground" : "";
  const mutedClasses =
    tone === "primary" ? "text-primary-foreground/70" : tone === "lime" ? "text-lime-foreground/70" : "text-muted-foreground";
  const iconWrapClasses =
    tone === "primary" ? "bg-primary-foreground/15 text-primary-foreground" : tone === "lime" ? "bg-lime-foreground/10 text-lime-foreground" : "bg-primary/10 text-primary";
  const blobClasses = tone ? "bg-black/10" : "bg-primary/5 group-hover:bg-primary/10";

  const CardContent = (
    <div className={`group relative block p-6 md:p-8 rounded-2xl transition-colors duration-500 h-full overflow-hidden ${toneClasses}`}>
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
        <ArrowUpRight className={tone ? textClasses : "text-primary"} size={20} />
      </div>

      <div className="relative z-10">
        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500 ${iconWrapClasses}`}>
          {icon}
        </div>
        <h3 className={`text-lg md:text-xl font-bold mb-2 transition-colors duration-300 ${textClasses || "group-hover:text-primary"}`}>
          {title}
        </h3>
        <p className={`leading-relaxed text-xs md:text-sm line-clamp-3 ${mutedClasses}`}>
          {description}
        </p>
      </div>

      <div className={`absolute -bottom-8 -right-8 w-20 h-20 rounded-full blur-2xl transition-all duration-700 ${blobClasses}`} />
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