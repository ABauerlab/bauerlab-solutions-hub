"use client";

import Link from "next/link";
import logo from "@/assets/logo.jpeg";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
        <Link href="/" className="inline-flex items-center gap-2 font-heading text-3xl font-bold tracking-tight mb-12">
          <img src={logo.src} alt="BauerLab" className="w-12 h-12 rounded-xl object-cover shadow-2xl" />
          Bauer<span className="text-primary">Lab</span>
        </Link>

        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <p className="mb-8 text-xl text-muted-foreground font-heading">
          A página que você procura não existe ou foi movida.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-md font-heading font-bold hover:bg-primary/90 transition-all"
        >
          Voltar para o Início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;