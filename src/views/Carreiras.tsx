"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { Briefcase } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/contact";

const areas = [
  "Design & Identidade Visual",
  "Desenvolvimento Web & Sistemas",
  "Audiovisual & Produção",
  "Tráfego Pago & Performance",
  "Atendimento & Gestão de Projetos",
];

const Carreiras = () => {
  return (
    <Layout>
      <PageHero
        tag="Carreiras"
        title="A BauerLab está sempre de olho em quem faz diferente."
        description="Não temos vagas abertas no momento, mas mantemos um banco de talentos ativo para quando surgir a próxima posição."
      />

      <Section>
        <div className="max-w-2xl">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
            <Briefcase size={24} />
          </div>
          <h2 className="text-xl font-bold mb-3">Nenhuma vaga aberta no momento</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Quando abrirmos processo seletivo, ele será publicado aqui primeiro. Se você atua em uma dessas áreas
            e quer ficar no radar, manda seu portfólio pelo WhatsApp, guardamos pra quando a vaga certa aparecer.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {areas.map((area) => (
              <span key={area} className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground">
                {area}
              </span>
            ))}
          </div>
          <a
            href={getWhatsAppUrl("Olá! Gostaria de deixar meu portfólio no banco de talentos da BauerLab.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-heading font-bold text-sm hover:bg-primary/90 transition-colors"
          >
            Enviar portfólio pelo WhatsApp
          </a>
        </div>
      </Section>

      <CTASection
        title="Quer estruturar sua marca com a gente?"
        description="Se você é cliente, não colaborador, fale sobre seu projeto na página de contato."
      />
    </Layout>
  );
};

export default Carreiras;
