"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ServiceDetailList from "@/components/ServiceDetailList";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import materiaisImg from "@/assets/materiais.webp";

const items = [
  { title: "Cartões de visita premium", description: "Design profissional e impressão em alta qualidade. Acabamentos especiais como hot stamping, verniz localizado e papel texturizado. Seu cartão transmite a seriedade da sua marca antes mesmo de você abrir a boca." },
  { title: "Adesivos e etiquetas personalizadas", description: "Materiais que estendem a identidade visual para embalagens, produtos, vitrines e veículos. Cada adesivo é uma peça de comunicação da sua marca." },
  { title: "Displays, banners e totens", description: "Materiais de ponto de venda, eventos e fachada com qualidade gráfica impecável. Displays que chamam atenção e comunicam com clareza, alinhados à identidade visual." },
  { title: "Folders, catálogos e apresentações", description: "Materiais impressos com design profissional para apresentações comerciais, feiras e reuniões. Cada peça é uma extensão da marca que reforça credibilidade." },
  { title: "Embalagens e papelaria institucional", description: "Envelopes, papel timbrado, pastas, etiquetas e embalagens personalizadas. Todo ponto de contato físico é uma oportunidade de reforçar a marca." },
  { title: "Produção com controle de qualidade", description: "Não é gráfica comum. Acompanhamos cada etapa da produção para garantir que cores, acabamentos e materiais estejam exatamente como aprovado no projeto." },
];

const MateriaisFisicos = () => {
  return (
    <Layout>
      <PageHero
        tag="Materiais Físicos"
        title="Não é gráfica comum. É extensão da marca."
        description="Produzimos materiais gráficos que mantêm a identidade visual, a qualidade e a coerência da sua marca em cada peça. Do cartão de visita ao display, tudo com o mesmo rigor e profissionalismo."
      />

      <section className="pb-8 md:pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-lg overflow-hidden"
          >
            <img src={materiaisImg.src} alt="Materiais gráficos premium" className="w-full h-[220px] md:h-[500px] object-cover" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">O que entregamos</h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Cada material físico que produzimos é tratado com o mesmo rigor criativo e estratégico do digital. 
            Porque um cartão de visita mal feito diz tanto sobre a empresa quanto um site amador.
          </p>
        </div>
        <ServiceDetailList items={items} highlightFirst />
      </Section>

      <Section className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">O físico comunica tanto quanto o digital.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Na era digital, muita empresa esquece que o mundo físico ainda existe. E comunica. 
              O cartão que você entrega numa reunião. O adesivo na embalagem. O display na loja. 
              Cada material é um ponto de contato com a marca.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Se esse material é genérico, a percepção da marca é genérica. 
              Se é premium, a percepção muda completamente.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Na BauerLab, cada peça é projetada dentro do sistema visual da marca. 
              Cores, tipografia, acabamento, papel. Tudo é escolhido com propósito. 
              O resultado é um material que não vai para a gaveta. Vai para a mão do cliente, e fica na memória.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { title: "Design alinhado à marca", desc: "Cada peça segue o manual de marca e mantém a coerência visual em todas as aplicações." },
              { title: "Acabamentos especiais", desc: "Hot stamping, verniz, laminação, relevo seco, detalhes que fazem a diferença na percepção de qualidade." },
              { title: "Materiais premium", desc: "Papéis, substratos e insumos selecionados para cada tipo de aplicação e objetivo." },
              { title: "Acompanhamento de produção", desc: "Garantimos que a peça impressa seja fiel ao projeto aprovado. Sem surpresas." },
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
        title="Precisa de materiais que representem sua marca com qualidade?"
        description="Converse com a BauerLab. Produzimos materiais gráficos com o mesmo rigor criativo e estratégico do digital."
      />
    </Layout>
  );
};

export default MateriaisFisicos;
