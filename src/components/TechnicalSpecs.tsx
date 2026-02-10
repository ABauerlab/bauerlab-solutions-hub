import { motion } from "framer-motion";
import { Cpu, Camera, Mic, Sun, Layers, Clock } from "lucide-react";

const TechnicalSpecs = () => {
  const specs = [
    {
      icon: <Layers size={20} />,
      title: "Softwares de Elite",
      items: ["Adobe Premiere", "DaVinci Resolve", "After Effects", "Photoshop", "Lightroom Classic"]
    },
    {
      icon: <Camera size={20} />,
      title: "Captação Sony",
      items: ["Câmera Sony A6700", "Lente Viltrox 85mm", "Lente Tamron 11–20mm", "Qualidade S-Log3"]
    },
    {
      icon: <Mic size={20} />,
      title: "Áudio Cristalino",
      items: ["Hollyland Lark M2", "Dois canais independentes", "Cancelamento de ruído"]
    },
    {
      icon: <Sun size={20} />,
      title: "Iluminação Profissional",
      items: ["Tocha Sokani X100 RGB", "Softbox dedicado", "Bastão LED LUXCEO", "Flash Godox V850 III"]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {specs.map((spec, index) => (
          <motion.div
            key={spec.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 glass rounded-2xl"
          >
            <div className="text-primary mb-4">{spec.icon}</div>
            <h4 className="font-bold text-sm mb-3 uppercase tracking-wider">{spec.title}</h4>
            <ul className="space-y-2">
              {spec.items.map((item) => (
                <li key={item} className="text-xs text-muted-foreground flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary/40" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="p-8 border border-border rounded-2xl bg-card/50 flex flex-col md:flex-row gap-8 items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Clock size={24} />
          </div>
          <div>
            <h4 className="font-bold">Prazos e Entrega</h4>
            <p className="text-sm text-muted-foreground">Entrega em até 7 dias úteis após a captação.</p>
          </div>
        </div>
        <div className="text-xs text-muted-foreground max-w-md text-center md:text-right">
          Toda a produção é realizada pela <strong>14:02 Produções</strong>, dirigida por <strong>Ed Faria</strong>, garantindo máxima fidelidade de cor e execução técnica.
        </div>
      </motion.div>
    </div>
  );
};

export default TechnicalSpecs;