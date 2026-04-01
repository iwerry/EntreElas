import { motion } from "motion/react";
import { ArrowRight, BookOpen, Scale, Shield, Landmark, Briefcase, Heart } from "lucide-react";

export default function DireitosPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const direitos = [
    {
      title: "Lei Maria da Penha",
      icon: <Shield size={32} strokeWidth={1.5} />,
      desc: "Marco no enfrentamento à violência doméstica e familiar contra a mulher, garantindo proteção e medidas protetivas.",
      link: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm"
    },
    {
      title: "Igualdade Salarial",
      icon: <Scale size={32} strokeWidth={1.5} />,
      desc: "Direito constitucional e lei recente que obriga a igualdade salarial e critérios remuneratórios entre mulheres e homens para exercício de função equivalente.",
      link: "https://www.planalto.gov.br/ccivil_03/_Ato2023-2026/2023/Lei/L14611.htm"
    },
    {
      title: "Direitos Reprodutivos",
      icon: <Heart size={32} strokeWidth={1.5} />,
      desc: "Garantia de assistência à saúde, planejamento familiar, métodos contraceptivos e acompanhamento digno durante a gestação e parto.",
      link: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-mulher"
    },
    {
      title: "Direitos Trabalhistas",
      icon: <Briefcase size={32} strokeWidth={1.5} />,
      desc: "Licença-maternidade de 120 dias, estabilidade no emprego desde a confirmação da gravidez e intervalos para amamentação no trabalho.",
      link: "https://www.tst.jus.br/direitos-da-mulher"
    },
    {
      title: "Participação Política",
      icon: <Landmark size={32} strokeWidth={1.5} />,
      desc: "Cotas mínimas de 30% para candidaturas femininas e repasses obrigatórios do fundo partidário para campanhas de mulheres.",
      link: "https://www.mpf.mp.br/o-mpf/unidades/procuradoria-geral-da-republica-pgr/noticias/eleicoes-2026-quais-sao-as-novas-regras-para-aumentar-a-participacao-de-mulheres-na-politica"
    },
    {
      title: "Acesso à Educação",
      icon: <BookOpen size={32} strokeWidth={1.5} />,
      desc: "Garantia de acesso, permanência e igualdade de condições no ensino em todos os níveis, além de incentivo em áreas de ciência e tecnologia.",
      link: "https://www.gov.br/mec/pt-br"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-surface"
    >
      <section className="py-32 px-8 max-w-screen-2xl mx-auto">
        <motion.button 
          onClick={() => setCurrentPage('home')}
          whileHover={{ x: -5 }}
          className="flex items-center gap-3 text-primary/60 hover:text-primary transition-colors mb-16 font-label text-[10px] uppercase tracking-[0.3em] font-bold"
        >
          <ArrowRight className="rotate-180" size={16} /> Voltar para Home
        </motion.button>

        <div className="grid grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-7"
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-secondary"></span>
              <span className="font-label uppercase tracking-[0.3em] text-[10px] text-secondary font-bold">Guia Prático</span>
            </div>
            <h1 className="font-headline italic text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-10 text-primary drop-shadow-sm">
              Conheça Seus <br />Direitos
            </h1>
            <p className="text-lg md:text-2xl text-primary/80 font-newsreader italic leading-relaxed mb-12 max-w-xl">
              Uma seleção didática dos principais direitos que garantem a proteção, igualdade e autonomia de todas as mulheres brasileiras.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="aspect-[4/5] bg-surface-container-low overflow-hidden rounded-[80px] shadow-2xl relative group border border-primary/10">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80" 
                alt="Women Rights" 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-8 max-w-screen-2xl mx-auto pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {direitos.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white p-10 rounded-[48px] shadow-lg border border-primary/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group flex flex-col"
            >
              <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center text-secondary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-surface transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="font-headline italic text-3xl text-primary mb-4">{item.title}</h3>
              <p className="text-primary/70 font-body text-sm leading-relaxed mb-6 flex-grow">
                {item.desc}
              </p>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-auto font-label text-[10px] uppercase tracking-[0.2em] font-bold text-secondary hover:text-primary transition-colors underline underline-offset-4 decoration-secondary/30 hover:decoration-primary"
              >
                Saiba mais.
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
