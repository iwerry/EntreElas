import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ArrowRight, BookOpen, Gavel } from "lucide-react";
import { PartnershipStrip } from "../components/Shared";
import { CourseCardsSection } from "../components/CourseCardsSection";
import { FloatingPetals } from "../components/FloatingPetals";
import { PullQuote } from "../components/PullQuote";

const Hero = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => (
  <section className="relative min-h-[95vh] flex items-center overflow-hidden px-8 max-w-screen-2xl mx-auto z-10">
    <FloatingPetals variant="hero" className="absolute inset-0 z-10" />
    <div className="absolute inset-0 z-0 bg-surface/50 backdrop-blur-3xl -mx-[100vw] pointer-events-none"></div>
    <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div className="grid grid-cols-12 w-full items-center gap-16 relative z-10">
      <div className="col-span-12 lg:col-span-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-4"
        >
          <div className="h-[1px] w-16 bg-secondary"></div>
          <span className="font-label uppercase tracking-[0.4em] text-[10px] text-secondary font-bold">Edição 2026 • IBRAPPE</span>
        </motion.div>

        <h1 className="font-headline italic text-5xl md:text-7xl lg:text-[110px] leading-[0.85] mb-12 text-primary tracking-tighter mix-blend-multiply">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="block"
          >
            Sua Jornada de
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="block text-secondary drop-shadow-sm"
          >
            Autonomia e
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="block"
          >
            Transformação
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-2xl text-primary/70 max-w-lg leading-relaxed mb-16 font-newsreader italic"
        >
          Um espaço curado para o fortalecimento do protagonismo feminino através da educação, rede de apoio e políticas públicas integradas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap gap-6 relative z-20"
        >
          <button
            onClick={() => setCurrentPage('courses')}
            className="bg-primary text-surface px-8 py-5 md:px-14 md:py-6 w-full sm:w-auto text-center justify-center font-label text-[10px] uppercase tracking-[0.3em] hover:bg-secondary transition-all duration-500 shadow-[0_20px_50px_rgba(74,43,71,0.3)] hover:shadow-[0_20px_60px_rgba(201,148,81,0.4)] hover:-translate-y-1 flex items-center gap-4 group rounded-full"
          >
            Conheça nossos cursos <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
          </button>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeSDy9ngM7S6JbYGExYw-JfVo1YbFiui5k909vA1dlIfvb8tg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary/20 text-primary px-8 py-5 w-full sm:w-auto md:px-14 md:py-6 font-label text-[10px] uppercase tracking-[0.3em] hover:bg-primary hover:border-primary hover:text-surface transition-all duration-500 rounded-full font-bold shadow-xl flex items-center justify-center"
          >
            Inscreva-se Gratuito
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="col-span-12 lg:col-span-6 relative z-10"
      >
        <div className="relative w-full aspect-[4/5] lg:aspect-[0.9/1] bg-surface-container-low overflow-hidden rounded-[80px] shadow-2xl border border-white/20">
          <img
            alt="Professional woman"
            className="w-full h-full object-cover grayscale-[20%] contrast-[1.05] hover:scale-105 transition-transform duration-[3s]"
            src="/home/hero.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute -bottom-8 -left-4 md:-bottom-12 md:-left-12 bg-white/90 backdrop-blur-2xl p-8 md:p-12 shadow-[0_30px_60px_rgba(74,43,71,0.15)] rounded-[40px] max-w-[85vw] md:max-w-xs border border-white"
        >
          <Quote className="text-secondary mb-4 md:mb-6 drop-shadow-md" size={32} strokeWidth={2} />
          <p className="font-headline italic text-2xl md:text-3xl text-primary leading-tight">"A autonomia é o primeiro passo para a liberdade real."</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="py-40 px-8 max-w-screen-2xl mx-auto relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center mb-32"
    >
      <h2 className="font-headline italic text-5xl mb-6 text-primary">Sobre o Entre Elas</h2>
      <div className="w-24 h-[1px] bg-secondary"></div>
    </motion.div>
    <div className="grid grid-cols-12 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="col-span-12 lg:col-span-6 lg:col-start-2"
      >
        <p className="font-newsreader text-3xl leading-[1.6] text-primary mb-12 italic">
          O projeto Entre Elas nasce da convicção de que a transformação social brasileira passa, obrigatoriamente, pelo fortalecimento das mulheres em todas as suas esferas de atuação.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="col-span-12 lg:col-span-4 mt-8 lg:mt-32"
      >
        <div className="space-y-8">
          <p className="text-sm leading-[1.8] text-primary/70">
            Através de uma metodologia curatorial, unimos ferramentas de capacitação profissional, suporte jurídico e acolhimento psicossocial. Nosso objetivo não é apenas informar, mas criar uma rede de sustentação que permita a cada mulher desenhar sua própria trajetória de independência.
          </p>
          <p className="text-sm leading-[1.8] text-primary/70">
            Uma iniciativa do IBRAPPE em parceria direta com o Ministério das Mulheres, refletindo o compromisso do Governo Federal com a equidade e o progresso nacional.
          </p>
          <a className="inline-block font-label text-[10px] uppercase tracking-[0.3em] text-secondary border-b-2 border-secondary/30 pb-2 hover:border-secondary transition-colors font-bold" href="#">Conheça o Programa Completo</a>
        </div>
      </motion.div>
    </div>
  </section>
);

const FeaturesGrid = () => (
  <section className="px-8 pb-40 max-w-screen-2xl mx-auto relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="md:col-span-2 bg-primary-container p-16 flex flex-col justify-between min-h-[450px] rounded-[48px] shadow-2xl relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary-container to-secondary/20 opacity-50"></div>
        <BookOpen className="text-surface relative z-10 drop-shadow-md" size={48} strokeWidth={1.5} />
        <div className="relative z-10">
          <h3 className="font-headline italic text-5xl text-surface mb-6">Educação e Carreira</h3>
          <p className="text-surface/80 max-w-md font-body text-base leading-relaxed">Módulos exclusivos desenvolvidos por especialistas para sua transição profissional e ascensão no mercado de trabalho atual.</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-white p-12 flex flex-col justify-center items-center text-center rounded-[48px] shadow-2xl border border-primary/5 hover:-translate-y-2 transition-transform duration-500"
      >
        <div className="mb-8 p-6 bg-surface-container-low rounded-full shadow-inner">
          <Gavel className="text-secondary" size={40} strokeWidth={1.5} />
        </div>
        <h3 className="font-label uppercase tracking-widest text-xs mb-4 text-primary font-bold">Apoio Jurídico</h3>
        <p className="text-[11px] text-primary/60 leading-relaxed uppercase tracking-wider">Orientação especializada sobre direitos fundamentais e proteção legal em todos os contextos.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-secondary p-12 flex flex-col justify-between min-h-[400px] rounded-[48px] shadow-2xl relative overflow-hidden group hover:shadow-[0_20px_60px_rgba(201,148,81,0.5)] transition-shadow duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-white/20 to-transparent"></div>
        <h3 className="font-headline italic text-4xl text-surface relative z-10 drop-shadow-md">Espaço de <br />Escuta Ativa</h3>
        <p className="text-surface/90 text-sm leading-relaxed relative z-10">Conecte-se com uma comunidade de mulheres que compartilham vivências e superações semelhantes.</p>
        <div className="flex -space-x-4 relative z-10 mt-8">
          {[1, 2, 3].map((i) => (
            <img
              key={i}
              alt="avatar"
              className="w-12 h-12 rounded-full border-[3px] border-secondary object-cover shadow-lg"
              src={`https://picsum.photos/seed/woman${i}/100/100`}
            />
          ))}
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-secondary shadow-lg z-10 border-[3px] border-secondary">+12k</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="md:col-span-2 relative group overflow-hidden rounded-[48px] shadow-2xl cursor-pointer"
      >
        <img
          className="w-full h-full object-cover grayscale opacity-80 transition-all duration-[2s] group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
          src="/galeria/img1.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent p-12 flex items-end">
          <div>
            <span className="font-label text-[10px] text-secondary font-bold uppercase tracking-[0.4em] mb-4 block drop-shadow-md">Galeria de Vozes</span>
            <h3 className="font-headline italic text-5xl text-surface drop-shadow-lg">Histórias que inspiram <br />novas realidades</h3>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);



export default function Home({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Hero setCurrentPage={setCurrentPage} />
      <PartnershipStrip />
      <CourseCardsSection setCurrentPage={setCurrentPage} />
      <FeaturesGrid />
      <PullQuote />
    </motion.div>
  );
}
