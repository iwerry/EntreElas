import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Reports({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const reports = [
    {
      title: "IBRAPPE e Ministério das Mulheres lançam 'Entre Elas'",
      source: "Portal G1",
      date: "15 Jan 2026",
      desc: "Iniciativa visa capacitar 200 mulheres em situação de vulnerabilidade no DF, focando em autonomia financeira.",
      img: "/reportagens/g1.jpg"
    },
    {
      title: "Empreendedorismo Feminino: O Impacto do Projeto no DF",
      source: "Correio Braziliense",
      date: "22 Fev 2026",
      desc: "Como a qualificação técnica está mudando a realidade de famílias através do design de unhas e informática.",
      img: "/reportagens/correio.jpg"
    },
    {
      title: "Autonomia Econômica é Foco de Novo Edital",
      source: "Agência Brasília",
      date: "05 Mar 2026",
      desc: "Governo Federal reforça apoio a projetos que incentivam o protagonismo feminino e a geração de renda.",
      img: "/reportagens/agencia-brasilia.jpg"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-surface pt-32 pb-40 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.button 
          onClick={() => setCurrentPage('home')}
          whileHover={{ x: -5 }}
          className="flex items-center gap-3 text-primary/60 hover:text-primary transition-colors mb-16 font-label text-[10px] uppercase tracking-[0.3em] font-bold"
        >
          <ArrowRight className="rotate-180" size={16} /> Voltar para Home
        </motion.button>
        
        <div className="mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-12 bg-secondary"></div>
            <span className="font-label uppercase tracking-[0.4em] text-[10px] text-secondary font-bold">Imprensa</span>
            <div className="h-[2px] w-12 bg-secondary"></div>
          </motion.div>
          <h1 className="text-7xl md:text-[100px] font-headline italic text-primary mb-8 drop-shadow-sm">Na Mídia</h1>
          <p className="text-2xl text-primary/60 font-newsreader italic max-w-2xl mx-auto">
            Acompanhe a repercussão do projeto nos principais veículos de comunicação e portais de notícias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {reports.map((report, idx) => (
            <motion.a 
              href="#"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer flex flex-col h-full bg-white rounded-[40px] p-6 shadow-xl border border-primary/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[24px] mb-8 shadow-inner relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img 
                  src={report.img} 
                  alt={report.title} 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s] group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-label font-bold tracking-[0.2em] text-surface bg-secondary px-4 py-1.5 rounded-full uppercase shadow-md">{report.source}</span>
                <span className="text-[10px] font-label text-primary/40 tracking-widest font-bold">{report.date}</span>
              </div>
              <h3 className="text-3xl font-headline italic text-primary mb-6 group-hover:text-secondary transition-colors leading-[1.2]">{report.title}</h3>
              <p className="text-sm text-primary/60 leading-relaxed line-clamp-4 font-body mt-auto">{report.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
