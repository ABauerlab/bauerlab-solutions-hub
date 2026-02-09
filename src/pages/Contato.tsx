import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";

const Contato = () => {
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá, sou ${formData.nome}. ${formData.mensagem}`;
    window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Layout>
      <PageHero
        tag="Contato"
        title="Vamos conversar."
        description="Conte o que você precisa. Sem formulários infinitos, sem enrolação. Direto ao ponto."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-heading font-medium mb-2">Nome</label>
              <input
                type="text"
                required
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm font-heading font-medium mb-2">E-mail</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-heading font-medium mb-2">Mensagem</label>
              <textarea
                required
                rows={5}
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Conte brevemente o que você precisa"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-heading font-semibold hover:bg-primary/90 transition-colors"
            >
              Enviar <Send size={16} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="font-heading font-semibold text-lg mb-3">Prefere o WhatsApp?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Resposta rápida, sem burocracia. Clique no botão abaixo e fale direto com a gente.
              </p>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-foreground/30 text-foreground px-6 py-3 rounded-md font-heading font-medium hover:border-primary hover:text-primary transition-all duration-300"
              >
                <MessageCircle size={18} />
                Abrir WhatsApp
              </a>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-3">E-mail</h3>
              <a href="mailto:contato@bauerlab.com.br" className="text-sm text-primary hover:underline">
                contato@bauerlab.com.br
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contato;
