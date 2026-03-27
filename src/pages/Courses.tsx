import { motion } from "motion/react";
import { ArrowRight, Monitor, Package, Sparkles, Users, Briefcase, Heart, Gavel } from "lucide-react";
import { RegistrationForm } from "../components/RegistrationForm";

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
            <h1 className="font-headline italic text-7xl lg:text-8xl leading-[0.9] mb-10 text-primary drop-shadow-sm">
              Caminhos para a <br />Independência
            </h1>
            <p className="text-2xl text-primary/80 font-newsreader italic leading-relaxed mb-12 max-w-xl">
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

      {/* Course Categories */}
      <section className="py-40 px-8 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-container pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {/* Informatics */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="flex items-center gap-8">
                <div className="w-20 h-20 rounded-[32px] bg-secondary flex items-center justify-center text-surface shadow-lg shadow-secondary/30">
                  <Monitor size={40} strokeWidth={2} />
                </div>
                <h2 className="font-headline italic text-5xl text-surface">Informática & <br />Empreendedorismo</h2>
              </div>
              <div className="bg-surface/5 backdrop-blur-xl p-16 rounded-[48px] border border-surface/10 hover:border-secondary/50 group transition-all duration-700 hover:shadow-[0_20px_60px_rgba(201,148,81,0.15)]">
                <h3 className="font-label uppercase tracking-[0.3em] text-xs text-secondary mb-6 font-bold drop-shadow-md">Informática Básica e Avançada</h3>
                <p className="text-xl text-surface/80 leading-relaxed mb-10 font-newsreader italic">
                  Com foco aplicado ao empreendedorismo, capacitamos para o domínio das ferramentas digitais essenciais para a gestão de negócios e inserção no mercado moderno.
                </p>
                <div className="flex items-center gap-4 text-secondary font-label text-[10px] uppercase tracking-[0.2em] font-bold">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Package size={16} />
                  </div>
                  Locação de computadores inclusa
                </div>
              </div>
            </motion.div>

            {/* Beauty */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-16"
            >
              <div className="flex items-center gap-8">
                <div className="w-20 h-20 rounded-[32px] bg-secondary flex items-center justify-center text-surface shadow-lg shadow-secondary/30">
                  <Sparkles size={40} strokeWidth={2} />
                </div>
                <h2 className="font-headline italic text-5xl text-surface">Estética & <br />Beleza</h2>
              </div>
              <div className="grid grid-cols-1 gap-8">
                {[
                  { title: "Designer de Unhas", desc: "Técnicas modernas de manicure e embelezamento." },
                  { title: "Extensão de Cílios", desc: "Especialização em técnicas de volume e aplicação." },
                  { title: "Designer de Sobrancelhas", desc: "Visagismo e técnicas de design facial." }
                ].map((course, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: 10 }}
                    className="bg-surface/5 backdrop-blur-xl p-10 rounded-[40px] border border-surface/10 hover:border-secondary/50 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(201,148,81,0.1)] relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <h3 className="font-label font-bold uppercase tracking-[0.2em] text-xs text-secondary mb-3 drop-shadow-md">{course.title}</h3>
                    <p className="text-sm text-surface/70 font-body">{course.desc}</p>
                  </motion.div>
                ))}
                <div className="flex items-center gap-4 text-secondary font-label text-[10px] uppercase tracking-[0.2em] mt-4 font-bold">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Package size={16} />
                  </div>
                  Kits de materiais profissionais inclusos
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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

      {/* Registration Form integrated with high contrast */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto relative z-20">
        <RegistrationForm />
      </section>

      {/* CTA Bottom */}
      <section className="py-40 px-8 text-center bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/30 via-primary/5 to-transparent blur-3xl rounded-[100%]"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="font-headline italic text-6xl md:text-7xl text-surface mb-12 drop-shadow-xl">Pronta para transformar <br/> sua realidade?</h2>
          <motion.button 
            onClick={() => {
              document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-surface px-16 py-6 font-label text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-surface hover:text-primary transition-all duration-500 flex items-center gap-6 mx-auto shadow-[0_20px_50px_rgba(201,148,81,0.4)] hover:shadow-[0_20px_70px_rgba(201,148,81,0.6)] rounded-full"
          >
            Inscrever-se nos Cursos <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </section>
    </motion.div>
  );
}
