import { notFound } from "next/navigation";
import BlogPost from "@/views/BlogPost";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";
import { blogPosts } from "@/lib/blog-posts";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return pageMetadata({ title: "Artigo não encontrado", description: "Artigo não encontrado.", path: "/blog" });

  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const breadcrumb = breadcrumbJsonLd([
    { name: "Início", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    url: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={articleJsonLd} />
      <BlogPost post={post} />
    </>
  );
}
