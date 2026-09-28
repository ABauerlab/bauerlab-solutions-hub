"use client";

import Layout from "@/components/Layout";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { BlogPost as BlogPostType } from "@/lib/blog-posts";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

const BlogPost = ({ post }: { post: BlogPostType }) => {
  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Voltar para o blog
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4 block">{post.category}</span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">{post.title}</h1>
            <p className="text-xs text-muted-foreground/60 mb-10">{formatDate(post.date)}</p>
          </motion.div>
        </div>
      </section>

      <Section className="pt-0">
        <div className="max-w-3xl space-y-5 text-muted-foreground leading-relaxed">
          {post.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <CTASection
        title="Quer aplicar isso no seu negócio?"
        description="Fale com a BauerLab. Explicamos exatamente como aplicaríamos esse processo no seu projeto."
      />
    </Layout>
  );
};

export default BlogPost;
