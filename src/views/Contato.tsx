"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { getEmail, getWhatsAppUrl } from "@/lib/contact";

const Contato = () => {
  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "", empresa: "", mensagem: "" });
  const businessEmail = getEmail();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá, sou ${formData.nome}${formData.empresa ? ` da empresa ${formData.empresa}` : ""}.
E-mail: ${formData.email}
Telefone: ${formData.telefone}

Mensagem: ${formData.mensagem}`;
    
    window.open(getWhatsAppUrl(message), "_blank");
  };

  return (
    <Layout>
      <PageHero
        tag="Contato"
        title="Vamos conversar sobre o seu projeto."
        description="Conte o que você precisa. Sem formulários infinitos, sem enrolação, sem vendedores insistentes. Direto ao ponto, como tudo que fazemos na BauerLab."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-heading font-medium mb-2">Nome *</label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-heading font-medium mb-2">E-mail *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-heading font-medium mb-2">Telefone</label>
                <input
                  type="tel"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="(31) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-sm font-heading font-medium mb-2">Empresa</label>
                <input
                  type="text"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Nome da sua empresa"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-heading font-medium mb-2">Como podemos ajudar? *</label>
              <textarea
                required
                rows={6}
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Conte brevemente o que sua empresa precisa. Pode ser um site, uma identidade visual, produção de vídeo, ativação de marca ou tudo junto."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-heading font-semibold text-base hover:bg-primary/90 transition-all duration-300 hover:gap-3"
            >
              Enviar pelo WhatsApp <Send size={18} />
            </button>
            <p className="text-xs text-muted-foreground">
              Ao enviar, você será redirecionado para o WhatsApp com sua mensagem preenchida.
            </p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="p-6 border border-border rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle size={20} className="text-primary" />
                <h3 className="font-heading font-semibold">WhatsApp</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Resposta rápida, sem burocracia. Clique no botão abaixo e fale direto com a gente. 
                Geralmente respondemos em menos de 2 horas.
              </p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-heading font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                <MessageCircle size={16} />
                Abrir WhatsApp
              </a>
            </div>

            <div className="p-6 border border-border rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Mail size={20} className="text-primary" />
                <h3 className="font-heading font-semibold">E-mail</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Para propostas mais detalhadas, envie um e-mail com as informações do seu projeto.
              </p>
              <a href={`mailto:${businessEmail}`} className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:gap-3 transition-all duration-300">
                {businessEmail} <ArrowRight size={14} />
              </a>
            </div>

            <div className="p-6 border border-primary/20 rounded-lg bg-primary/5">
              <h3 className="font-heading font-semibold mb-2">Diagnóstico gratuito</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Não sabe por onde começar? Solicite um diagnóstico gratuito da sua marca. 
                Analisamos sua presença digital, identidade visual e pontos de melhoria. Sem compromisso.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contato;