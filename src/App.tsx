import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy loading das páginas para melhorar performance
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const SistemasDigital = lazy(() => import("./pages/SistemasDigital"));
const PosicionamentoMarca = lazy(() => import("./pages/PosicionamentoMarca"));
const Audiovisual = lazy(() => import("./pages/Audiovisual"));
const AtivacaoMarca = lazy(() => import("./pages/AtivacaoMarca"));
const MateriaisFisicos = lazy(() => import("./pages/MateriaisFisicos"));
const Projetos = lazy(() => import("./pages/Projetos"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Contato = lazy(() => import("./pages/Contato"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Componente de fallback simples enquanto a página carrega
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/sistemas-digital" element={<SistemasDigital />} />
            <Route path="/posicionamento-marca" element={<PosicionamentoMarca />} />
            <Route path="/14:02" element={<Audiovisual />} />
            <Route path="/ativacao-de-marca" element={<AtivacaoMarca />} />
            <Route path="/materiais-fisicos" element={<MateriaisFisicos />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;