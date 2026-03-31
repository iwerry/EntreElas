import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { RegistrationForm } from "../components/RegistrationForm";

export default function Contato({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-surface"
    >
      <section className="py-32 px-8 max-w-screen-2xl mx-auto pb-40">
        <motion.button 
          onClick={() => setCurrentPage('home')}
          whileHover={{ x: -5 }}
          className="flex items-center gap-3 text-primary/60 hover:text-primary transition-colors mb-16 font-label text-[10px] uppercase tracking-[0.3em] font-bold"
        >
          <ArrowRight className="rotate-180" size={16} /> Voltar para Home
        </motion.button>

        <div className="grid grid-cols-12 gap-16 items-start lg:items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-secondary"></span>
              <span className="font-label uppercase tracking-[0.3em] text-[10px] text-secondary font-bold">Contato</span>
            </div>
            <h1 className="font-headline italic text-5xl md:text-7xl lg:text-7xl leading-[0.9] mb-10 text-primary drop-shadow-sm">
              Vamos <br />Conversar
            </h1>
            <p className="text-lg md:text-xl text-primary/80 font-newsreader italic leading-relaxed mb-12 max-w-xl">
              Entre em contato com nossa equipe para dúvidas sobre os cursos, os direitos, ou como podemos apoiar você ou sua comunidade.
            </p>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center text-secondary bg-surface-container-low">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-primary">E-mail Oficial</h4>
                  <p className="text-primary/70 font-body text-sm mt-1">faleconosco@projetoentreelas.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center text-secondary bg-surface-container-low">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-primary">Sede do Projeto</h4>
                  <p className="text-primary/70 font-body text-sm mt-1">AR 07 conjunto 9 casa 28, Sobradinho, DF</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="col-span-12 lg:col-span-7"
          >
            <div className="relative z-20">
              <RegistrationForm />
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
