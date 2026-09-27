"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ServiceDetailList from "@/components/ServiceDetailList";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import digitalImg from "@/assets/digital.webp";

const items = [
  { title: "Sites institucionais", description: "Sua empresa precisa de uma presença digital profissional. Criamos sites que transmitem credibilidade, são otimizados para conversão e funcionam perfeitamente em qualquer dispositivo. Nada de templates, tudo sob medida para o seu negócio." },
  { title: "Desenvolvimento de sistemas web", description: "Plataformas funcionais que resolvem problemas reais da sua operação. Gestão interna, controle de estoque, agendamento, painéis administrativos, desenvolvemos o sistema que a sua empresa precisa." },
  { title: "Plataformas sob medida", description: "Quando nenhuma solução do mercado resolve, nós criamos a sua. Plataformas personalizadas que se encaixam perfeitamente no fluxo do seu negócio, com interface intuitiva e tecnologia moderna." },
  { title: "Google Meu Negócio", description: "Configuração e otimização completa do seu perfil no Google. Sua empresa aparece nas buscas locais com informações corretas, fotos profissionais e avaliações organizadas. Visibilidade local sem custo de anúncio." },
  { title: "Automações básicas", description: "Automatize tarefas repetitivas que tomam tempo da sua equipe. Respostas automáticas, notificações, integração entre sistemas e fluxos inteligentes que economizam horas de trabalho manual." },
  { title: "Estruturação digital completa", description: "Do domínio ao e-mail profissional, do site ao sistema, das redes sociais ao Google, organizamos toda a presença digital da sua empresa para que tudo funcione de forma integrada e profissional." },
  { title: "Serviços de contabilidade", description: "Através da ContaLab Digital, oferecemos soluções contábeis completas e integradas à sua estrutura digital. Regularização, fiscal, contábil e MEI com foco em agilidade e tecnologia.", link: "http://contalabdigital.com.br/" },
];

const SistemasDigital = () => {
  return (
    <Layout>
      <PageHero
        tag="Sistemas & Digital"
        title="Não é site bonito. É sistema funcional que gera resultado."
        description="Desenvolvemos soluções digitais que funcionam de verdade. Sites, sistemas, platforms e automações que estruturam o seu negócio no digital, com foco em performance, usabilidade e conversão."
      />

      {/* Imagem de impacto */}
      <section className="pb-12 md:pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-lg overflow-hidden"
          >
            <img src={digitalImg.src} alt="Desenvolvimento digital" className="w-full h-[300px] md:h-[500px] object-cover" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">O que entregamos</h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Cada solução digital que desenvolvemos é pensada para resolver um problema real do seu negócio. 
            Não entregamos templates. Entregamos ferramentas que fazem sua operação funcionar melhor.
          </p>
        </div>
        <ServiceDetailList items={items} />
      </Section>

      <Section className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Tecnologia a serviço do resultado.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Muita empresa contrata um \"site bonito\" e recebe um cartão de visita digital. Na BauerLab, 
              cada site e sistema é projetado como uma ferramenta de negócio, com navegação intuitiva, 
              carregamento rápido, SEO estruturado e foco em conversão.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Usamos tecnologias modernas e escaláveis. Seu site não vai ficar lento, não vai quebrar e não vai 
              precisar ser refeito em seis meses. Construímos para durar e para crescer junto com o seu negócio.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              E o mais importante: você tem acompanhamento real durante todo o processo. 
              Nada de sumir depois da entrega. Nada de \"vou ver isso depois\". 
              Resolve, entrega e acompanha.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { title: "Mobile-first", desc: "Mais de 70% dos acessos vêm do celular. Seu site precisa ser impecável no mobile." },
              { title: "SEO estruturado", desc: "Configuração técnica completa para seu site aparecer nas buscas do Google." },
              { title: "Alta performance", desc: "Carregamento rápido, código limpo e hospedagem otimizada." },
              { title: "Painel administrativo", desc: "Gerencie seu conteúdo sem depender de ninguém. Interface simples e funcional." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-heading font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Precisa de um site ou sistema que funcione de verdade?"
        description="Conte para a BauerLab o que sua empresa precisa. Fazemos um diagnóstico gratuito e apresentamos a solução ideal para o seu negócio."
      />
    </Layout>
  );
};

export default SistemasDigital;