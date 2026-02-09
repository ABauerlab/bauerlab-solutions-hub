import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import SistemasDigital from "./pages/SistemasDigital";
import PosicionamentoMarca from "./pages/PosicionamentoMarca";
import Audiovisual from "./pages/Audiovisual";
import AtivacaoMarca from "./pages/AtivacaoMarca";
import MateriaisFisicos from "./pages/MateriaisFisicos";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/sistemas-digital" element={<SistemasDigital />} />
          <Route path="/posicionamento-marca" element={<PosicionamentoMarca />} />
          <Route path="/audiovisual" element={<Audiovisual />} />
          <Route path="/ativacao-de-marca" element={<AtivacaoMarca />} />
          <Route path="/materiais-fisicos" element={<MateriaisFisicos />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
