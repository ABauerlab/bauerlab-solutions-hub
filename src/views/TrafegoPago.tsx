"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Target, MessageCircle, TrendingUp, Search, FileBarChart } from "lucide-react";

interface Stat {
  label: string;
  value: string;
}

interface CaseStudy {
  name: string;
  invested: string;
  context: string;
  stats: Stat[];
}

const cases: CaseStudy[] = [
  {
    name: "Kodara",
    invested: "R$ 1.272,38 investidos (histórico total)",
    context: "Alcance de 275.563 pessoas. Duas campanhas ativas: geração de leads via quiz e atendimento via WhatsApp.",
    stats: [
      { label: "Quiz — investido", value: "R$ 93,57" },
      { label: "Quiz — leads", value: "31" },
      { label: "Quiz — CTR", value: "4,77%" },
      { label: "Quiz — custo por lead", value: "≈ R$ 3,02" },
      { label: "WhatsApp — investido", value: "R$ 27,76" },
      { label: "WhatsApp — conversas iniciadas", value: "17" },
      { label: "WhatsApp — CTR", value: "3,79%" },
    ],
  },
  {
    name: "Mambaia",
    invested: "R$ 141,77 investidos",
    context: "Campanha de tráfego para landing page do estúdio.",
    stats: [
      { label: "CTR", value: "6,01%" },
      { label: "CPC", value: "R$ 0,15" },
      { label: "Visualizações de landing page", value: "247" },
    ],
  },
  {
    name: "Mindra Performance",
    invested: "R$ 51,10 investidos",
    context: "Cliente da Espanha anunciando no Brasil. Campanha de ebook chegou a CTR de 11,18%.",
    stats: [
      { label: "CTR (média)", value: "10,43%" },
      { label: "CPC", value: "R$ 0,09" },
      { label: "Visualizações de landing page", value: "188" },
    ],
  },
  {
    name: "Campanha de Retargeting",
    invested: "R$ 128,37 investidos",
    context: "Campanha de retargeting via WhatsApp.",
    stats: [
      { label: "CTR", value: "2,61%" },
      { label: "Conversas iniciadas", value: "23" },
      { label: "Custo por conversa", value: "≈ R$ 5,58" },
    ],
  },
];

const TrafegoPago = () => {
  return (
    <Layout>
      <PageHero
        tag="Tráfego Pago & Performance"
        title="Números reais. Sem embelezamento."
        description="Estes são resultados de contas de anúncio que operamos — nossas e de clientes. Nenhum número aqui é estimativa ou projeção: é o que rodou de verdade."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c, index) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 md:p-8 rounded-2xl h-full"
            >
              <div className="flex items-center gap-2 text-primary mb-2">
                <Target size={18} />
                <h3 className="font-heading font-bold text-xl">{c.name}</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-1">{c.invested}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.context}</p>
              <div className="grid grid-cols-2 gap-3">
                {c.stats.map((stat) => (
                  <div key={stat.label} className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="text-lg font-bold text-primary">{stat.value}</div>
                    <div className="text-[11px] text-muted-foreground leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl glass p-6 md:p-8 rounded-2xl flex gap-5 items-start"
        >
          <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Search size={20} />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 block">
              Diagnóstico em campo
            </span>
            <h3 className="font-heading font-bold text-lg mb-2">Rastreamento quebrado, corrigido antes de escalar</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Na conta Kodara, identificamos que a campanha de vendas pelo site não estava registrando compras pelo
              pixel — um problema comum que infla o custo por resultado sem que o cliente perceba. Auditoria e
              correção de rastreamento fazem parte do nosso processo antes de qualquer campanha ser escalada.
            </p>
          </div>
        </motion.div>
      </Section>

      <Section className="border-t border-border bg-primary/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
            <FileBarChart size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Relatório padrão BauerLab</h2>
          <p className="text-muted-foreground leading-relaxed mb-2">
            Rodamos toda segunda-feira um relatório de performance para clientes ativos de tráfego pago — o mesmo
            processo que aplicamos hoje para a Mindra Performance.
          </p>
          <p className="text-sm text-muted-foreground/70 italic">
            {"{{PENDENTE: modelo oficial de relatório semanal}}"}
          </p>
        </motion.div>
      </Section>

      <CTASection
        title="Quer ver o que sua verba de anúncio pode render?"
        description="Falamos com números reais, não com projeção genérica. Converse com a BauerLab sobre o seu tráfego pago."
      />
    </Layout>
  );
};

export default TrafegoPago;
