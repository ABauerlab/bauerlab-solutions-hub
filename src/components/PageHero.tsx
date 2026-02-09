import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  tag?: string;
  title: string;
  description: string;
  children?: ReactNode;
}

const PageHero = ({ tag, title, description, children }: PageHeroProps) => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {tag && (
            <span className="inline-block text-xs font-heading font-semibold tracking-widest uppercase text-primary mb-4">
              {tag}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {description}
          </p>
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
