import { motion } from "motion/react";
import { ArrowRight, Monitor, Package, Sparkles, Users, Briefcase, Heart, Gavel } from "lucide-react";
import { CourseCardsSection } from "../components/CourseCardsSection";

export default function Courses({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-surface"
    >
      {/* Courses Hero */}
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
              <span className="font-label uppercase tracking-[0.3em] text-[10px] text-secondary font-bold">Qualificação Profissional</span>
            </div>
            <h1 className="font-headline italic text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-10 text-primary drop-shadow-sm break-words">
              Caminhos para a <br />Independência
            </h1>
            <p className="text-lg md:text-2xl text-primary/80 font-newsreader italic leading-relaxed mb-12 max-w-xl">
              No âmbito do projeto "Entre Elas", desenvolvido pelo IBRAPPE em parceria com o Ministério das Mulheres, oferecemos trilhas de aprendizado focadas em áreas de alta demanda.
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
                src="/cursos/hero.jpg" 
                alt="Women studying" 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-[20%] transition-all duration-[2s] group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Categories Replacement */}
      <CourseCardsSection setCurrentPage={setCurrentPage} />

      {/* Details Section */}
      <section className="py-40 px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-12 gap-24">
          <div className="col-span-12 lg:col-span-5 space-y-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-6 text-secondary bg-surface-container-low p-4 rounded-full w-max border border-primary/5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Users size={20} />
                </div>
                <h4 className="font-label uppercase tracking-[0.3em] text-[10px] font-bold pr-6">Público-alvo</h4>
              </div>
              <p className="text-4xl font-newsreader italic text-primary leading-tight mt-8">
                Cerca de 200 mulheres em situação de vulnerabilidade social no Distrito Federal e entorno.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-6 text-secondary bg-surface-container-low p-4 rounded-full w-max border border-primary/5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Briefcase size={20} />
                </div>
                <h4 className="font-label uppercase tracking-[0.3em] text-[10px] font-bold pr-6">Estrutura</h4>
              </div>
              <p className="text-xl text-primary/70 leading-relaxed font-body mt-8">
                Três turmas por área com carga horária de 40 horas cada, garantindo profundidade e prática intensiva.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-7 bg-surface-container-highest p-20 rounded-[80px] relative overflow-hidden shadow-2xl border border-white"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>
            <h2 className="font-headline italic text-5xl text-primary mb-16 relative z-10 drop-shadow-md">Apoio Complementar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
              <div className="space-y-8 bg-white/50 backdrop-blur-md p-10 rounded-[40px] shadow-sm border border-primary/5 hover:-translate-y-2 transition-transform duration-500">
                <div className="w-16 h-16 rounded-[24px] bg-secondary text-surface flex items-center justify-center shadow-lg shadow-secondary/30">
                  <Heart size={32} strokeWidth={2} />
                </div>
                <h4 className="font-label uppercase tracking-[0.2em] text-xs font-bold text-primary">Acompanhamento Psicológico</h4>
                <p className="text-sm text-primary/70 leading-relaxed font-body">
                  Suporte focado no resgate da autoestima e fortalecimento do empoderamento pessoal, essenciais para a jornada de transformação.
                </p>
              </div>
              <div className="space-y-8 bg-white/50 backdrop-blur-md p-10 rounded-[40px] shadow-sm border border-primary/5 hover:-translate-y-2 transition-transform duration-500">
                <div className="w-16 h-16 rounded-[24px] bg-secondary text-surface flex items-center justify-center shadow-lg shadow-secondary/30">
                  <Gavel size={32} strokeWidth={2} />
                </div>
                <h4 className="font-label uppercase tracking-[0.2em] text-xs font-bold text-primary">Suporte Jurídico</h4>
                <p className="text-sm text-primary/70 leading-relaxed font-body">
                  Orientações sobre direitos fundamentais e auxílio na formalização de microempreendimentos (MEI), abrindo portas para a legalidade.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
