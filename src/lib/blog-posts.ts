export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  paragraphs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "por-que-seu-site-nao-aparece-no-google",
    title: "Por que seu site não aparece no Google (e o problema não é o design)",
    description: "A maioria dos sites que não rankeiam tem um problema técnico invisível, não estético.",
    date: "2026-08-03",
    category: "SEO",
    paragraphs: [
      "É comum um cliente chegar achando que o site não vende porque está feio. Na prática, o motivo mais frequente é técnico: o Google e as redes sociais recebem uma página vazia antes do JavaScript carregar, meta tags fixas em todo o site, ou uma URL de imagem que não existe em produção.",
      "Sites construídos como SPA (aplicação de página única) sem renderização no servidor sofrem exatamente com isso. O visitante vê o site pronto porque o navegador dele executa o JavaScript, mas um crawler que não executa JavaScript, ou executa com atraso, vê uma casca vazia.",
      "A correção não é reescrever o conteúdo, é migrar a renderização: gerar o HTML completo antes de entregar a página, com title e description únicos por rota, imagem de Open Graph real, sitemap.xml, e dados estruturados (JSON-LD) de Organization e Service.",
      "Quando isso é feito, o mesmo conteúdo que já existia passa a ser lido corretamente, e cada página de serviço vira uma porta de entrada própria no Google, não uma cópia da home.",
    ],
  },
  {
    slug: "o-que-e-um-diagnostico-de-trafego-pago",
    title: "O que realmente é um diagnóstico de tráfego pago",
    description: "Antes de otimizar campanha, é preciso confirmar que o que está sendo medido é real.",
    date: "2026-08-10",
    category: "Tráfego Pago",
    paragraphs: [
      "Muita gente pede para 'melhorar o CTR' ou 'baixar o CPC' sem antes confirmar uma coisa básica: o pixel está registrando o evento certo? Já vimos conta rodando campanha de vendas há meses sem o evento de compra sendo disparado corretamente, o que significa que toda otimização de algoritmo estava sendo feita com dado incompleto.",
      "Um diagnóstico sério de tráfego pago começa por aí: auditoria de rastreamento, conferência de evento de conversão, checagem se o domínio está verificado, e só depois entra em criativo, público e orçamento.",
      "Depois da base técnica corrigida, o trabalho vira menos sobre 'qual anúncio converte mais' e mais sobre repetir o que funciona com consistência: manter o que tem CTR acima da média do nicho, cortar o que não performa em prazo curto, e documentar tudo em relatório recorrente para a decisão não depender de achismo.",
    ],
  },
  {
    slug: "rebranding-nao-e-trocar-a-logo",
    title: "Rebranding não é trocar a logo",
    description: "O erro mais comum em processo de rebranding é tratar como projeto gráfico isolado.",
    date: "2026-08-17",
    category: "Branding",
    paragraphs: [
      "Quando uma marca cresce, é natural sentir que a identidade visual ficou datada. O problema é tratar isso só como 'preciso de uma logo nova'. Logo é a ponta visível de um processo que deveria começar em posicionamento: o que a marca representa, para quem ela fala, e o que a diferencia.",
      "Um rebranding que pula essa etapa troca a roupa e mantém o mesmo discurso confuso por baixo. O cliente sente que 'ficou bonito', mas a percepção de mercado não muda, porque o problema nunca foi visual.",
      "O processo correto passa por pesquisa de posicionamento, definição de tom de voz, arquitetura de marca, e só depois identidade visual aplicada em todos os pontos de contato: site, redes sociais, material impresso, sinalização física. Sem essa sequência, o investimento em design não sustenta resultado.",
    ],
  },
  {
    slug: "ssr-ssg-por-que-isso-importa-pro-seu-negocio",
    title: "SSR, SSG e por que isso importa pro seu negócio (não só pro programador)",
    description: "A escolha técnica de renderização afeta diretamente indexação, velocidade e conversão.",
    date: "2026-08-24",
    category: "Tecnologia",
    paragraphs: [
      "SSR (renderização no servidor) e SSG (geração estática) são termos técnicos, mas o efeito é comercial: páginas que chegam prontas pro navegador carregam mais rápido, são indexadas com mais confiabilidade pelo Google, e aparecem melhor quando compartilhadas no WhatsApp ou LinkedIn.",
      "O oposto, uma aplicação 100% client-side sem essa camada, funciona bem para quem já está no site, mas é pior para quem ainda não chegou: bot de busca, prévia de link, e até assistentes de IA generativa que hoje também rastreiam páginas para responder perguntas.",
      "Migrar para esse modelo não muda a experiência de quem usa o site no dia a dia, muda a forma como ele é encontrado antes disso. É investimento técnico com retorno em aquisição, não só em performance.",
    ],
  },
  {
    slug: "vale-a-pena-investir-em-audiovisual",
    title: "Como saber se vale a pena investir em audiovisual agora",
    description: "Vídeo institucional não é sempre a prioridade certa, existe uma ordem lógica.",
    date: "2026-08-31",
    category: "Audiovisual",
    paragraphs: [
      "Vídeo profissional tangibiliza autoridade rápido, mas não resolve problema de posicionamento mal definido. Se a marca ainda não sabe claramente o que quer comunicar, gastar em produção de vídeo é gastar em forma sem conteúdo.",
      "A ordem que costuma funcionar: primeiro clareza de posicionamento, depois estrutura digital (site, sistema) que sustenta a conversão, e então audiovisual entra como acelerador, não como base. Um vídeo institucional bem feito em cima de um posicionamento confuso só amplia a confusão com qualidade técnica.",
      "Quando a base já está pronta, audiovisual rende: conteúdo para redes sociais, vídeo institucional, captação de eventos e produção promocional passam a reforçar uma mensagem que já faz sentido, em vez de tentar criar uma do zero.",
    ],
  },
  {
    slug: "sinais-presenca-digital-fragmentada",
    title: "5 sinais de que sua presença digital está fragmentada",
    description: "Marca fragmentada tem sintomas específicos e recorrentes.",
    date: "2026-09-07",
    category: "Consultoria",
    paragraphs: [
      "Primeiro sinal: cada ponto de contato (site, Instagram, WhatsApp, Google Meu Negócio) foi feito por um fornecedor diferente, em épocas diferentes, sem ninguém olhando o conjunto.",
      "Segundo: a identidade visual muda de tom dependendo de onde o cliente olha, cores erradas no post, fonte diferente no site, logo com versão desatualizada circulando.",
      "Terceiro: ninguém sabe dizer, com número, quantos leads vêm de cada canal, porque o rastreamento nunca foi estruturado de verdade.",
      "Quarto: o site existe, mas não aparece nas buscas locais relevantes, porque nunca houve trabalho técnico de SEO, só design.",
      "Quinto, e mais comum: a empresa investe em anúncio, mas o link de destino é uma página genérica que não fecha o raciocínio do anúncio. Todos esses sinais têm a mesma raiz: falta de alguém olhando o ecossistema completo, não só a peça isolada.",
    ],
  },
  {
    slug: "o-que-perguntar-antes-de-contratar-uma-agencia",
    title: "O que perguntar antes de contratar uma agência",
    description: "Perguntas práticas que revelam se o fornecedor tem processo ou só promessa.",
    date: "2026-09-14",
    category: "Consultoria",
    paragraphs: [
      "Pergunta 1: 'Como vocês vão medir se isso está funcionando?' Se a resposta for vaga, é sinal de que não existe processo de acompanhamento definido.",
      "Pergunta 2: 'Posso ver um caso real, com número real?' Uma agência séria mostra dado verificável, não só print bonito de design.",
      "Pergunta 3: 'O que acontece se o prazo não for cumprido?' A resposta revela se existe compromisso de escopo e cronograma, ou se tudo é combinado informalmente.",
      "Pergunta 4: 'Depois da entrega, existe algum acompanhamento?' Projeto pontual sem relação contínua tende a ficar desatualizado rápido.",
      "Nenhuma dessas perguntas é hostil, são exatamente o tipo de pergunta que uma agência que trabalha com método gosta de responder, porque já tem a resposta pronta.",
    ],
  },
  {
    slug: "ctr-alto-nao-significa-venda-garantida",
    title: "CTR alto não significa venda garantida",
    description: "Métrica de topo de funil engana quem não olha a métrica seguinte.",
    date: "2026-09-21",
    category: "Tráfego Pago",
    paragraphs: [
      "CTR (taxa de clique) mede se o criativo chamou atenção, não se o produto ou serviço convenceu depois do clique. É perfeitamente possível ter CTR de 10% e conversão baixa, porque a promessa do anúncio não bate com a experiência da página de destino.",
      "Por isso, olhar métrica isolada é raso. O conjunto que importa é: CTR (chamou atenção), custo por clique (quanto custou trazer a pessoa), e custo por resultado real (lead, venda, conversa iniciada). Uma campanha só é boa quando as três fazem sentido juntas.",
      "Quando o custo por resultado está alto mesmo com CTR bom, o problema geralmente não está no anúncio, está na página ou no processo de atendimento depois do clique.",
    ],
  },
  {
    slug: "funil-whatsapp-sem-parecer-robotico",
    title: "Como estruturar um funil de WhatsApp sem parecer robótico",
    description: "Automação de atendimento funciona quando some no processo, não quando aparece nele.",
    date: "2026-09-28",
    category: "Tráfego Pago",
    paragraphs: [
      "O erro mais comum em funil de WhatsApp é fazer a pessoa sentir que está conversando com um roteiro. Mensagem de boas-vindas genérica, menu numérico infinito, e zero contexto do que ela viu antes de chegar ali.",
      "Um funil bem estruturado usa o contexto da campanha (o anúncio que ela clicou, o produto que ela procurou) para já chegar com uma mensagem relevante, e reserva a automação para triagem rápida, não para a conversa inteira.",
      "O objetivo técnico é simples: reduzir o tempo até um humano assumir a conversa quando ela já está qualificada, e usar automação só onde ela realmente economiza tempo sem piorar a experiência.",
    ],
  },
  {
    slug: "identidade-visual-aplicada-o-que-muda-na-pratica",
    title: "Identidade visual aplicada: o que muda na prática",
    description: "A diferença entre ter uma marca bonita e ter uma marca que funciona em qualquer lugar.",
    date: "2026-10-05",
    category: "Branding",
    paragraphs: [
      "Muita marca tem manual de identidade visual bonito em PDF e, na prática, cada peça nova sai diferente: cor errada no post, proporção errada no banner, versão antiga da logo circulando junto com a nova.",
      "Identidade visual aplicada significa que o manual vira regra usada de verdade: template de post, arte de campanha, cartão de visita, fachada, tudo seguindo o mesmo sistema, sem depender da memória de quem está produzindo naquele dia.",
      "O ganho não é estético, é de percepção: quando tudo é coerente, o público reconhece a marca em qualquer canal sem esforço, o que constrói confiança mais rápido do que qualquer peça isolada, por mais bonita que seja.",
    ],
  },
];
