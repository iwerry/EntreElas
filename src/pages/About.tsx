import { motion } from "motion/react";
import { ArrowRight, BookOpen, Quote } from "lucide-react";
import { PullQuote } from "../components/PullQuote";

export default function About({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
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
            className="col-span-12 lg:col-span-6"
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-secondary"></span>
              <BookOpen size={16} className="text-secondary" />
              <span className="font-label uppercase tracking-[0.3em] text-[10px] text-secondary font-bold">Nossa História</span>
            </div>
            <h1 className="font-headline italic text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-10 text-primary drop-shadow-sm break-words">
              Um compromisso <br />com o futuro
            </h1>
            <p className="text-xl md:text-2xl text-primary/80 font-newsreader italic leading-relaxed max-w-xl">
              O "Entre Elas" nasce da certeza de que apoiar o protagonismo feminino é a forma mais eficaz de transformar cenários sociais complexos.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="col-span-12 lg:col-span-6"
          >
            <div className="aspect-[4/3] bg-surface-container-low overflow-hidden rounded-[80px] shadow-2xl relative group">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/5 transition-colors duration-1000 z-10"></div>
              <img 
                src="/sobre/hero.jpg" 
                alt="About us" 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-[20%] transition-all duration-[2s] group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-40 px-8 bg-surface-container-low border-t border-primary/5 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-start relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3 sticky top-32"
          >
            <Quote size={48} className="text-secondary mb-8 drop-shadow-md" />
            <h2 className="font-headline italic text-3xl md:text-4xl text-primary leading-tight mb-6 break-words">Educação liberta, qualificação empodera.</h2>
            <div className="font-label text-[10px] uppercase tracking-widest text-primary/40 font-bold block mb-2">Fundação do Projeto</div>
            <div className="font-headline italic text-2xl text-secondary">Apoio Governamental e Institucional</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:w-2/3 space-y-12 font-body text-primary/70 text-lg leading-[1.8]"
          >
            <p className="font-newsreader italic text-2xl text-primary/80 mb-12 border-l-2 border-secondary pl-8">
              "Com base no Distrito Federal, atendemos mulheres em regiões administrativas cruciais, focando nas que estão em situação de vulnerabilidade e extrema pobreza."
            </p>
            <p>
              Ao lado do Ministério das Mulheres e operado pelo IBRAPPE (Instituto Brasileiro de Políticas Públicas), nosso projeto se sustenta em três grandes pilares: educação profissional, apoio psicológico e orientação jurídica. 
            </p>
            <p>
              Mais do que cursos profissionalizantes em Estética, Beleza ou Informática, o "Entre Elas" constrói espaços seguros de ressocialização, onde cada aluna descobre o potencial da formalização de seu negócio (MEI) e da geração imediata de renda. Entregamos desde o conhecimento técnico e os equipamentos de apoio nas aulas, até o kit material para os primeiros trabalhos no mercado.
            </p>
            <div className="flex flex-col md:flex-row bg-white rounded-3xl p-8 border border-primary/10 shadow-xl mt-16 items-center md:items-start gap-8 group hover:-translate-y-2 transition-transform duration-500 text-center md:text-left">
              <div className="w-24 h-24 bg-surface-container-low rounded-full flex items-center justify-center border-4 border-surface shrink-0 shadow-inner group-hover:border-secondary transition-colors">
                <img src="/logo_Ibrappe.png" alt="Ibrappe" className="w-12 h-12 object-contain brightness-0 invert" style={{ filter: 'brightness(0)' }} />
              </div>
              <div>
                <h3 className="font-label uppercase tracking-widest text-xs font-bold text-primary mb-2">Realização</h3>
                <p className="text-sm">Um esforço coordenado do Instituto Brasileiro de Políticas Públicas, com financiamento do Ministério das Mulheres.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <PullQuote />
    </motion.div>
  );
}
