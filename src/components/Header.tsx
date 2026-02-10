import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpeg";

const navItems = [
  { label: "Início", path: "/" },
  { label: "Serviços", path: "/servicos" },
  { label: "Projetos", path: "/projetos" },
  { label: "Sobre", path: "/sobre" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 font-heading text-xl md:text-2xl font-bold tracking-tight">
          <img 
            src={logo} 
            alt="BauerLab" 
            className="w-8 h-8 md:w-9 md:h-9 rounded-md object-cover" 
            loading="eager"
            fetchPriority="high"
          />
          Bauer<span className="text-primary">Lab</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-bold transition-colors ${
                location.pathname === item.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5531998021169"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-5 py-2.5 rounded-md text-sm font-heading font-bold hover:bg-[#128C7E] transition-all flex items-center gap-2"
          >
            <MessageCircle size={18} /> Orçamento Rápido
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden bg-background flex flex-col p-8 pt-24"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-2xl font-bold ${
                    location.pathname === item.path ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://wa.me/5531998021169"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-[#25D366] text-white px-6 py-4 rounded-md text-lg font-heading font-bold text-center flex items-center justify-center gap-2"
              >
                <MessageCircle size={22} /> WhatsApp Direto
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;