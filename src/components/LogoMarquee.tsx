"use client";

const brands = [
  "Vista Kodara",
  "Asari",
  "Mambaia",
  "ContaLab Digital",
  "Astroweb Atlas",
  "JBN Empreendimentos",
  "Mister Barbosa",
  "Grupo Soul Guetto",
  "Mindra Performance",
];

const LogoMarquee = () => {
  const track = [...brands, ...brands];

  return (
    <div className="border-y border-border bg-card/30 py-6 md:py-8 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-4">
        <p className="text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Marcas que já estruturamos
        </p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="flex gap-12 md:gap-20 animate-marquee whitespace-nowrap pr-12 md:pr-20">
          {track.map((brand, index) => (
            <span
              key={`${brand}-${index}`}
              className="font-heading font-bold text-lg md:text-2xl text-muted-foreground/50 hover:text-primary transition-colors shrink-0"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
