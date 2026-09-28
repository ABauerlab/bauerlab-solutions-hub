"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

const Blog = () => {
  return (
    <Layout>
      <PageHero
        tag="Blog"
        title="Insights sobre marca, tecnologia e performance."
        description="Conteúdo autoral da BauerLab sobre estratégia digital, branding, audiovisual e tráfego pago. Direto da nossa experiência de campo."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => {
            const isFeatured = index === 0;
            return (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={isFeatured ? "md:col-span-2" : ""}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className={`group block p-6 rounded-2xl transition-colors duration-500 h-full ${
                    isFeatured ? "bg-primary" : "border border-border bg-card/40 hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isFeatured ? "text-lime" : "text-primary"}`}>
                      {isFeatured ? "Mais recente" : post.category}
                    </span>
                    <ArrowUpRight size={16} className={`opacity-0 group-hover:opacity-100 transition-opacity ${isFeatured ? "text-primary-foreground" : "text-primary"}`} />
                  </div>
                  <h2 className={`font-heading font-bold transition-colors ${isFeatured ? "text-2xl mb-3 text-primary-foreground" : "text-lg mb-2 group-hover:text-primary"}`}>
                    {post.title}
                  </h2>
                  <p className={`leading-relaxed mb-3 ${isFeatured ? "text-base text-primary-foreground/70 max-w-2xl" : "text-sm text-muted-foreground"}`}>{post.description}</p>
                  <p className={`text-xs ${isFeatured ? "text-primary-foreground/60" : "text-muted-foreground/60"}`}>{formatDate(post.date)}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <CTASection
        title="Quer aplicar isso no seu negócio?"
        description="Fale com a BauerLab. Explicamos exatamente como aplicaríamos esse processo no seu projeto."
      />
    </Layout>
  );
};

export default Blog;
