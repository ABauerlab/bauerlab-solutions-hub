"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Search, FileText, Hammer, CheckCircle2, PackageCheck, BarChart3 } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: <Search size={22} />,
    title: "Diagnóstico inicial",
    description: "Entendemos o negócio, o mercado, o público e o objetivo antes de propor qualquer solução. Escuta antes de proposta.",
  },
  {
    icon: <FileText size={22} />,
    title: "Proposta",
    description: "Escopo, prazo e entrega definidos antes de começar. Você sabe exatamente o que vai receber, quando e quanto vai investir.",
  },
  {
    icon: <Hammer size={22} />,
    title: "Produção",
    description: "Execução com acompanhamento real durante todo o processo, nada de sumir depois de assinar o contrato.",
  },
  {
    icon: <CheckCircle2 size={22} />,
    title: "Validação",
    description: "Revisão conjunta antes da entrega final, garantindo que o resultado é fiel ao que foi combinado.",
  },
  {
    icon: <PackageCheck size={22} />,
    title: "Entrega",
    description: "Entrega com qualidade e prazo cumprido. Sem surpresas, sem mudança de escopo de última hora.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Relatório periódico",
    description: "Para projetos de tráfego pago, acompanhamento contínuo com relatório recorrente do desempenho da conta.",
  },
];

const Metodologia = () => {
  return (
    <Layout>
      <PageHero
        tag="Metodologia"
        title="Do briefing à entrega, com método."
        description="Não trabalhamos por impulso criativo. Cada projeto segue um processo estruturado, replicável e transparente, do primeiro diagnóstico ao relatório de resultado."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-border bg-card/40 p-6 md:p-8 rounded-2xl h-full"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                {step.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1 block">
                Etapa {index + 1}
              </span>
              <h3 className="font-heading font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Relatório periódico em prática</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Para clientes de tráfego pago, o acompanhamento não termina na entrega da campanha. Rodamos relatórios
            recorrentes de performance, o mesmo modelo que já usamos hoje com clientes ativos.
          </p>
          <Link href="/servicos" className="inline-flex items-center gap-2 font-bold text-primary text-sm hover:gap-3 transition-all">
            Ver resultados reais de tráfego pago →
          </Link>
        </div>
      </Section>

      <CTASection
        title="Quer ver como isso funciona no seu projeto?"
        description="Converse com a BauerLab. Explicamos exatamente como aplicaríamos esse processo no seu negócio."
      />
    </Layout>
  );
};

export default Metodologia;
