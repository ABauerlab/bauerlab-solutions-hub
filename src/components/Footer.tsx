import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-heading text-2xl font-bold tracking-tight">
              Bauer<span className="text-primary">Lab</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Estruturamos marcas e negócios por meio de soluções digitais, audiovisuais, físicas e de ativação de marca.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Serviços</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/audiovisual" className="text-sm text-muted-foreground hover:text-primary transition-colors">Audiovisual</Link>
              <Link to="/ativacao-de-marca" className="text-sm text-muted-foreground hover:text-primary transition-colors">Ativação de Marca</Link>
              <Link to="/sistemas-digital" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sistemas & Digital</Link>
              <Link to="/posicionamento-marca" className="text-sm text-muted-foreground hover:text-primary transition-colors">Posicionamento & Marca</Link>
              <Link to="/materiais-fisicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Materiais Físicos</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Empresa</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/projetos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projetos</Link>
              <Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre</Link>
              <Link to="/contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contato</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Contato</h4>
            <div className="flex flex-col gap-2.5">
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                WhatsApp
              </a>
              <a href="mailto:contato@bauerlab.com.br" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                contato@bauerlab.com.br
              </a>
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
