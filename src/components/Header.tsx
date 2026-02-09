import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Início", path: "/" },
  {
    label: "Serviços",
    path: "/servicos",
    children: [
      { label: "Audiovisual", path: "/audiovisual" },
      { label: "Ativação de Marca", path: "/ativacao-de-marca" },
      { label: "Sistemas & Digital", path: "/sistemas-digital" },
      { label: "Posicionamento & Marca", path: "/posicionamento-marca" },
      { label: "Materiais Físicos", path: "/materiais-fisicos" },
    ],
  },
  { label: "Projetos", path: "/projetos" },
  { label: "Sobre", path: "/sobre" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        <Link to="/" className="font-heading text-xl md:text-2xl font-bold tracking-tight">
          Bauer<span className="text-primary">Lab</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <Link
                  to={item.path}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-card border border-border rounded-md py-2 min-w-[220px] shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-heading font-semibold hover:bg-primary/90 transition-colors"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full text-left py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 flex flex-col gap-1">
                        <Link to={item.path} className="py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                          Visão Geral
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`py-3 text-sm font-medium transition-colors ${
                      location.pathname === item.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-heading font-semibold text-center hover:bg-primary/90 transition-colors"
              >
                Fale Conosco
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
