import Link from "next/link";
import { getEmail, getWhatsAppUrl } from "@/lib/contact";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const email = getEmail();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-heading text-2xl font-bold tracking-tight">
              <img src={logo.src} alt="BauerLab" className="w-9 h-9 rounded-md object-cover" />
              Bauer<span className="text-primary">Lab</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Estruturamos marcas e negócios por meio de soluções digitais, audiovisuais, físicas e de ativação de marca.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Serviços</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/audiovisual" className="text-sm text-muted-foreground hover:text-primary transition-colors">Audiovisual</Link>
              <Link href="/ativacao-de-marca" className="text-sm text-muted-foreground hover:text-primary transition-colors">Ativação de Marca</Link>
              <Link href="/sistemas-digital" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sistemas & Digital</Link>
              <Link href="/posicionamento-marca" className="text-sm text-muted-foreground hover:text-primary transition-colors">Posicionamento & Marca</Link>
              <Link href="/materiais-fisicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Materiais Físicos</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Empresa</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/projetos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projetos</Link>
              <Link href="/empresas-do-grupo" className="text-sm text-muted-foreground hover:text-primary transition-colors">Empresas do Grupo</Link>
              <Link href="/metodologia" className="text-sm text-muted-foreground hover:text-primary transition-colors">Metodologia</Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              <Link href="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre</Link>
              <Link href="/contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contato</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Contato</h4>
            <div className="flex flex-col gap-2.5">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                WhatsApp
              </a>
              <a href={`mailto:${email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {email}
              </a>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                R. Rio de Janeiro, 462 — Centro, Sala 2217<br />
                Belo Horizonte - MG, 30160-041
              </p>
              <p className="text-xs text-muted-foreground">CNPJ: 58.481.181/0001-03</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BauerLab. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Feito com precisão.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
