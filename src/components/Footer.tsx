import Link from "next/link";
import { getEmail, getWhatsAppUrl } from "@/lib/contact";
import logo from "@/assets/logo.jpeg";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Footer = () => {
  const email = getEmail();

  const columns = [
    {
      title: "Serviços",
      links: [
        { href: "/audiovisual", label: "Audiovisual" },
        { href: "/ativacao-de-marca", label: "Ativação de Marca" },
        { href: "/sistemas-digital", label: "Sistemas & Digital" },
        { href: "/trafego-pago", label: "Tráfego Pago & Performance" },
        { href: "/posicionamento-marca", label: "Posicionamento & Marca" },
        { href: "/materiais-fisicos", label: "Materiais Físicos" },
        { href: "/consultoria-digital", label: "Consultoria Digital" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { href: "/projetos", label: "Projetos" },
        { href: "/empresas-do-grupo", label: "Empresas do Grupo" },
        { href: "/metodologia", label: "Metodologia" },
        { href: "/blog", label: "Blog" },
        { href: "/carreiras", label: "Carreiras" },
        { href: "/kit-imprensa", label: "Kit de Imprensa" },
        { href: "/sobre", label: "Sobre" },
        { href: "/contato", label: "Contato" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="mb-8 md:mb-0">
          <Link href="/" className="flex items-center gap-2 font-heading text-2xl font-bold tracking-tight">
            <img src={logo.src} alt="BauerLab" className="w-9 h-9 rounded-md object-cover" />
            Bauer<span className="text-primary">Lab</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
            Estruturamos marcas e negócios por meio de soluções digitais, audiovisuais, físicas e de ativação de marca.
          </p>
        </div>

        {/* Mobile: carrossel compacto pra não estender a rolagem */}
        <div className="md:hidden mt-8">
          <Carousel opts={{ align: "start", loop: false, dragFree: true }} className="-mx-4 px-4">
            <CarouselContent>
              {columns.map((col) => (
                <CarouselItem key={col.title} className="basis-[60%]">
                  <h3 className="font-heading font-semibold text-sm mb-4 text-foreground">{col.title}</h3>
                  <div className="flex flex-col gap-2.5">
                    {col.links.map((link) => (
                      <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </CarouselItem>
              ))}
              <CarouselItem className="basis-[60%]">
                <h3 className="font-heading font-semibold text-sm mb-4 text-foreground">Contato</h3>
                <div className="flex flex-col gap-2.5">
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    WhatsApp
                  </a>
                  <a href={`mailto:${email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {email}
                  </a>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    R. Rio de Janeiro, 462, Centro, Sala 2217<br />
                    Belo Horizonte - MG, 30160-041
                  </p>
                  <p className="text-xs text-muted-foreground">CNPJ: 58.481.181/0001-03</p>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop: grid normal */}
        <div className="hidden md:grid md:grid-cols-4 gap-10 mt-10">
          <div />
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading font-semibold text-sm mb-4 text-foreground">{col.title}</h3>
              <div className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4 text-foreground">Contato</h3>
            <div className="flex flex-col gap-2.5">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                WhatsApp
              </a>
              <a href={`mailto:${email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {email}
              </a>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                R. Rio de Janeiro, 462, Centro, Sala 2217<br />
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
