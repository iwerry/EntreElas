import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Bookmark, BookOpen, Gavel, Globe, Share, Quote, Monitor, Sparkles, Users, Heart, Briefcase, Package, ArrowRight, TrendingUp, Eye, Check, Send } from "lucide-react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (page: string) => void }) => (
  <motion.header 
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="bg-surface/90 backdrop-blur-xl sticky top-0 z-50 border-b border-primary/5"
  >
    <div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
      <motion.button 
        onClick={() => setCurrentPage('home')}
        className="flex items-center relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.img 
          initial={{ filter: "drop-shadow(0px 0px 30px #4A2B47)", scale: 0.9 }}
          animate={{ filter: "drop-shadow(0px 0px 0px rgba(74,43,71,0))", scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/Logo.png" 
          alt="Entre Elas" 
          className="h-12 md:h-14 object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_15px_#4A2B47]" 
        />
      </motion.button>
      <nav className="hidden md:flex items-center gap-12">
        {['home', 'courses', 'reportagens', 'vozes', 'galeria', 'sobre'].map((item, i) => (
          <motion.button 
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
            onClick={() => setCurrentPage(item)}
            className={`relative font-label uppercase tracking-[0.2em] text-[10px] transition-all duration-500 py-2 group ${
              currentPage === item ? 'text-secondary' : 'text-primary/70 hover:text-primary'
            }`}
          >
            {item === 'courses' ? 'Cursos' : item === 'home' ? 'Início' : item.charAt(0).toUpperCase() + item.slice(1)}
            <span className={`absolute bottom-0 left-0 w-0 h-[1px] bg-secondary transition-all duration-500 group-hover:w-full ${
              currentPage === item ? 'w-full' : ''
            }`}></span>
          </motion.button>
        ))}
      </nav>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex items-center gap-6"
      >
        <button className="w-10 h-10 rounded-full border border-primary/5 flex items-center justify-center hover:bg-primary hover:text-surface transition-all duration-500">
          <Search size={18} strokeWidth={1.5} />
        </button>
        <button className="w-10 h-10 rounded-full border border-primary/5 flex items-center justify-center hover:bg-primary hover:text-surface transition-all duration-500">
          <Bookmark size={18} strokeWidth={1.5} />
        </button>
      </motion.div>
    </div>
  </motion.header>
);

const Hero = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => (
  <section className="relative min-h-[95vh] flex items-center overflow-hidden px-8 max-w-screen-2xl mx-auto">
    <div className="grid grid-cols-12 w-full items-center gap-16">
      <div className="col-span-12 lg:col-span-6 z-10 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-4"
        >
          <div className="h-[1px] w-16 bg-secondary"></div>
          <span className="font-label uppercase tracking-[0.4em] text-[10px] text-secondary font-bold">Edição 2026 • IBRAPPE</span>
        </motion.div>
        
        <h1 className="font-headline italic text-7xl lg:text-[110px] leading-[0.85] mb-12 text-primary tracking-tighter">
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
            className="block text-secondary"
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
          className="flex flex-wrap gap-6"
        >
          <button 
            onClick={() => setCurrentPage('courses')}
            className="bg-primary text-surface px-14 py-6 font-label text-[10px] uppercase tracking-[0.3em] hover:bg-secondary transition-all duration-500 shadow-2xl shadow-primary/20 flex items-center gap-4 group"
          >
            Começar Jornada <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => {
              setCurrentPage('courses');
              setTimeout(() => {
                document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="border border-primary/10 text-primary px-14 py-6 font-label text-[10px] uppercase tracking-[0.3em] hover:bg-primary hover:text-surface transition-all duration-500"
          >
            Pré-cadastro
          </button>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="col-span-12 lg:col-span-6 relative"
      >
        <div className="relative w-full aspect-[4/5] lg:aspect-[0.9/1] bg-surface-container-low overflow-hidden rounded-[80px] shadow-2xl">
          <img 
            alt="Professional woman" 
            className="w-full h-full object-cover grayscale-[20%] contrast-[1.05] hover:scale-105 transition-transform duration-[3s]" 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1920"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute -bottom-12 -left-12 bg-white p-12 shadow-2xl rounded-[40px] max-w-xs border border-primary/5"
        >
          <Quote className="text-secondary mb-6" size={32} strokeWidth={1} />
          <p className="font-headline italic text-3xl text-primary leading-tight">"A autonomia é o primeiro passo para a liberdade real."</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const PartnershipStrip = () => {
  const partners = [
    { name: "IBRAPPE", img: "https://ibrappe.org.br/wp-content/uploads/2023/10/logo-ibrappe-1.png" },
    { name: "Ministério das Mulheres", img: "https://www.gov.br/mulheres/pt-br/assuntos/noticias/ministerio-das-mulheres-lanca-campanha-de-combate-ao-feminicidio-neste-domingo-2/logo-ministerio-das-mulheres.png/@@images/image" },
    { name: "Governo Federal", img: "https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/logomarcas/logomarca-governo-federal-2023/govbr-logo-horizontal-cor-rgb.png" }
  ];

  return (
    <section className="bg-primary py-16 px-8 overflow-hidden border-y border-white/5">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <span className="text-surface/40 text-[10px] font-label tracking-[0.3em] uppercase mb-2">Realização</span>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-secondary"></div>
            <span className="text-surface font-headline italic text-2xl">Edição 2026</span>
          </div>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
              className="relative group cursor-pointer"
            >
              <img 
                src={partner.img} 
                alt={partner.name} 
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <motion.div 
                className="absolute -bottom-4 left-0 w-0 h-[1px] bg-secondary group-hover:w-full transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CourseCardsSection = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const courses = [
    {
      title: "NAIL DESIGNER",
      subtitle: "Elite Nível I",
      desc: "A arte do alongamento e estética das unhas com as técnicas mais modernas do mercado.",
      img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800",
      icon: <TrendingUp size={18} />,
      badge: "NOVO"
    },
    {
      title: "EXTENSÃO DE CÍLIOS",
      subtitle: "Master Look",
      desc: "Olhar marcante e natural. Aprenda visagismo e aplicação fio a fio.",
      img: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&q=80&w=800",
      icon: <Eye size={18} />,
    },
    {
      title: "DESIGNER DE SOBRANCELHAS",
      subtitle: "Arquitetura Facial",
      desc: "Harmonização facial através do design estratégico e henna.",
      img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
      icon: <Users size={18} />,
    },
    {
      title: "INFORMÁTICA",
      subtitle: "Digital Pro",
      desc: "Ferramentas digitais essenciais para gerir seu negócio e crescer online.",
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800",
      icon: <Monitor size={18} />,
    }
  ];

  return (
    <section className="py-32 px-8 max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-6xl font-light text-primary mb-6 leading-tight">
            Explore nossas <span className="font-headline italic text-secondary">formações</span>
          </h2>
          <p className="text-primary/60 text-base max-w-md leading-relaxed font-newsreader italic">
            Currículos desenhados por especialistas para garantir que você saia pronta para o mercado de luxo e tecnologia.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          <button className="w-14 h-14 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-surface transition-all duration-500 group">
            <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={24} />
          </button>
          <button className="w-14 h-14 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-surface transition-all duration-500 group">
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            whileHover={{ y: -15 }}
            className="bg-surface rounded-[48px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 group cursor-pointer"
          >
            <div className="relative aspect-[0.85/1] rounded-[40px] overflow-hidden mb-10">
              <img 
                src={course.img} 
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {course.badge && (
                <span className="absolute top-6 left-6 bg-primary text-surface text-[9px] font-label font-bold px-4 py-1.5 rounded-full tracking-[0.2em] shadow-lg">
                  {course.badge}
                </span>
              )}
            </div>
            <div className="px-4 pb-8">
              <h4 className="font-label font-bold text-[12px] tracking-[0.15em] text-primary mb-4 opacity-80">
                {course.title}
              </h4>
              <p className="text-[12px] text-primary/50 leading-relaxed mb-10 line-clamp-2 font-body">
                {course.desc}
              </p>
              <div className="flex justify-between items-center pt-6 border-t border-primary/5 mb-6">
                <span className="font-headline italic text-xl text-primary/90 group-hover:text-secondary transition-colors duration-500">
                  {course.subtitle}
                </span>
                <div className="text-secondary opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                  {course.icon}
                </div>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentPage('courses');
                  setTimeout(() => {
                    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full py-4 rounded-full border border-primary/5 text-[9px] font-label uppercase tracking-[0.2em] text-primary/40 hover:bg-secondary hover:text-surface hover:border-secondary transition-all duration-500"
              >
                Quero me inscrever
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section className="py-40 px-8 max-w-screen-2xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center mb-32"
    >
      <h2 className="font-headline italic text-5xl mb-6">Sobre o Entre Elas</h2>
      <div className="w-24 h-[1px] bg-secondary"></div>
    </motion.div>
    <div className="grid grid-cols-12 editorial-gap">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="col-span-12 lg:col-span-6 lg:col-start-2"
      >
        <p className="font-newsreader text-3xl leading-snug text-primary mb-12 italic">
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
          <a className="inline-block font-label text-[10px] uppercase tracking-[0.3em] text-secondary border-b border-secondary/30 pb-2 hover:border-secondary transition-colors" href="#">Conheça o Programa Completo</a>
        </div>
      </motion.div>
    </div>
  </section>
);

const FeaturesGrid = () => (
  <section className="px-8 pb-40 max-w-screen-2xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="md:col-span-2 bg-primary-container p-16 flex flex-col justify-between min-h-[450px]"
      >
        <BookOpen className="text-surface" size={40} strokeWidth={1} />
        <div>
          <h3 className="font-headline italic text-4xl text-surface mb-6">Educação e Carreira</h3>
          <p className="text-on-primary-container max-w-md font-body text-sm leading-relaxed">Módulos exclusivos desenvolvidos por especialistas para sua transição profissional e ascensão no mercado de trabalho atual.</p>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-surface-container-highest p-12 flex flex-col justify-center items-center text-center"
      >
        <div className="mb-8 p-6 bg-surface rounded-full">
          <Gavel className="text-primary" size={32} strokeWidth={1} />
        </div>
        <h3 className="font-label uppercase tracking-widest text-xs mb-4">Apoio Jurídico</h3>
        <p className="text-[10px] text-primary/60 leading-relaxed uppercase tracking-wider">Orientação especializada sobre direitos fundamentais e proteção legal em todos os contextos.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-secondary p-12 flex flex-col justify-between min-h-[400px]"
      >
        <h3 className="font-headline italic text-3xl text-surface">Espaço de <br />Escuta Ativa</h3>
        <p className="text-surface/80 text-sm leading-relaxed">Conecte-se com uma comunidade de mulheres que compartilham vivências e superações semelhantes.</p>
        <div className="flex -space-x-4">
          {[1, 2, 3].map((i) => (
            <img 
              key={i}
              alt="avatar" 
              className="w-10 h-10 rounded-full border-2 border-secondary object-cover" 
              src={`https://picsum.photos/seed/woman${i}/100/100`}
              referrerPolicy="no-referrer"
            />
          ))}
          <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-[10px] font-bold text-secondary">+12k</div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="md:col-span-2 relative group overflow-hidden"
      >
        <img 
          className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/40 flex items-end p-12">
          <div>
            <span className="font-label text-[10px] text-surface uppercase tracking-[0.4em] mb-4 block">Galeria de Vozes</span>
            <h3 className="font-headline italic text-4xl text-surface">Histórias que inspiram <br />novas realidades</h3>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const PullQuote = () => (
  <section className="bg-surface-container-low py-40">
    <div className="max-w-4xl mx-auto text-center px-8">
      <Quote className="text-secondary mx-auto mb-8" size={48} strokeWidth={1} />
      <blockquote className="font-headline italic text-5xl lg:text-6xl text-primary leading-tight mb-12">
        "Quando uma mulher se transforma, ela move o mundo ao seu redor."
      </blockquote>
      <cite className="font-label uppercase tracking-[0.3em] text-[10px] text-secondary not-italic">— Manifesto Entre Elas</cite>
    </div>
  </section>
);

const RegistrationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-surface-container-low p-12 rounded-[48px] text-center"
      >
        <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center text-secondary mx-auto mb-8">
          <Check size={40} />
        </div>
        <h3 className="font-headline italic text-4xl text-primary mb-4">Pré-cadastro Realizado!</h3>
        <p className="text-primary/60 font-newsreader italic text-lg">Obrigada por se interessar. Nossa equipe entrará em contato em breve para os próximos passos.</p>
      </motion.div>
    );
  }

  return (
    <div id="registration-form" className="bg-surface-container-low p-12 lg:p-20 rounded-[64px] shadow-sm">
      <div className="mb-12">
        <h3 className="font-headline italic text-5xl text-primary mb-4">Pré-cadastro</h3>
        <p className="text-primary/60 font-newsreader italic text-lg">Preencha os dados abaixo para concorrer a uma vaga nos cursos gratuitos.</p>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="font-label uppercase tracking-widest text-[10px] text-primary/40 ml-4">Nome Completo</label>
          <input required type="text" className="w-full bg-surface border border-primary/5 rounded-full px-8 py-4 focus:outline-none focus:border-secondary transition-colors" />
        </div>
        <div className="space-y-2">
          <label className="font-label uppercase tracking-widest text-[10px] text-primary/40 ml-4">E-mail</label>
          <input required type="email" className="w-full bg-surface border border-primary/5 rounded-full px-8 py-4 focus:outline-none focus:border-secondary transition-colors" />
        </div>
        <div className="space-y-2">
          <label className="font-label uppercase tracking-widest text-[10px] text-primary/40 ml-4">Telefone / WhatsApp</label>
          <input required type="tel" className="w-full bg-surface border border-primary/5 rounded-full px-8 py-4 focus:outline-none focus:border-secondary transition-colors" />
        </div>
        <div className="space-y-2">
          <label className="font-label uppercase tracking-widest text-[10px] text-primary/40 ml-4">Curso de Interesse</label>
          <div className="relative">
            <select required className="w-full bg-surface border border-primary/5 rounded-full px-8 py-4 focus:outline-none focus:border-secondary transition-colors appearance-none">
              <option value="">Selecione um curso</option>
              <option value="informatica">Informática & Empreendedorismo</option>
              <option value="unhas">Designer de Unhas</option>
              <option value="cilios">Extensão de Cílios</option>
              <option value="sobrancelhas">Designer de Sobrancelhas</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary/20">
              <ArrowRight className="rotate-90" size={14} />
            </div>
          </div>
        </div>
        <div className="md:col-span-2 pt-8">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-secondary text-surface py-6 rounded-full font-label uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-4 hover:bg-primary transition-all duration-500 shadow-xl"
          >
            Enviar Cadastro <Send size={16} />
          </motion.button>
        </div>
      </form>
    </div>
  );
};

const CoursesPage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void, key?: string }) => (
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
        className="flex items-center gap-3 text-primary/60 hover:text-primary transition-colors mb-16 font-label text-[10px] uppercase tracking-[0.3em]"
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
            <span className="h-[1px] w-12 bg-secondary"></span>
            <span className="font-label uppercase tracking-[0.3em] text-[10px] text-secondary">Qualificação Profissional</span>
          </div>
          <h1 className="font-headline italic text-7xl lg:text-8xl leading-[0.9] mb-10 text-primary">
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
          <div className="aspect-[4/3] bg-surface-container-low overflow-hidden rounded-[64px] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1920" 
              alt="Women studying" 
              className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Course Categories */}
    <section className="py-40 px-8 bg-primary">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Informatics */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 rounded-[32px] bg-secondary/20 flex items-center justify-center text-secondary">
                <Monitor size={40} strokeWidth={1} />
              </div>
              <h2 className="font-headline italic text-5xl text-surface">Informática & <br />Empreendedorismo</h2>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-16 rounded-[48px] border border-white/10 group hover:bg-white/10 transition-all duration-700">
              <h3 className="font-label uppercase tracking-[0.3em] text-xs text-secondary mb-6">Informática Básica e Avançada</h3>
              <p className="text-lg text-surface/70 leading-relaxed mb-10 font-newsreader italic">
                Com foco aplicado ao empreendedorismo, capacitamos para o domínio das ferramentas digitais essenciais para a gestão de negócios e inserção no mercado moderno.
              </p>
              <div className="flex items-center gap-4 text-secondary font-label text-[10px] uppercase tracking-[0.2em]">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Package size={14} />
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
              <div className="w-20 h-20 rounded-[32px] bg-secondary/20 flex items-center justify-center text-secondary">
                <Sparkles size={40} strokeWidth={1} />
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
                  className="bg-white/5 backdrop-blur-sm p-10 rounded-[32px] border border-white/10 hover:bg-white/10 transition-all duration-500"
                >
                  <h3 className="font-label uppercase tracking-[0.2em] text-xs text-secondary mb-3">{course.title}</h3>
                  <p className="text-sm text-surface/60 font-body">{course.desc}</p>
                </motion.div>
              ))}
              <div className="flex items-center gap-4 text-secondary font-label text-[10px] uppercase tracking-[0.2em] mt-4">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Package size={14} />
                </div>
                Kits de materiais profissionais inclusos
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Registration Form */}
    <section className="py-40 px-8 max-w-4xl mx-auto">
      <RegistrationForm />
    </section>

    {/* Details Section */}
    <section className="py-40 px-8 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-12 gap-24">
        <div className="col-span-12 lg:col-span-5 space-y-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 text-secondary">
              <Users size={24} />
              <h4 className="font-label uppercase tracking-[0.3em] text-[10px]">Público-alvo</h4>
            </div>
            <p className="text-4xl font-newsreader italic text-primary leading-tight">
              Cerca de 200 mulheres em situação de vulnerabilidade social no Distrito Federal e entorno.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 text-secondary">
              <Briefcase size={24} />
              <h4 className="font-label uppercase tracking-[0.3em] text-[10px]">Estrutura</h4>
            </div>
            <p className="text-xl text-primary/70 leading-relaxed font-body">
              Três turmas por área com carga horária de 40 horas cada, garantindo profundidade e prática intensiva.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-7 bg-surface-container-low p-20 rounded-[64px] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32"></div>
          <h2 className="font-headline italic text-5xl text-primary mb-16 relative z-10">Apoio Complementar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-8">
              <div className="w-16 h-16 rounded-3xl bg-secondary/10 flex items-center justify-center text-secondary">
                <Heart size={32} strokeWidth={1} />
              </div>
              <h4 className="font-label uppercase tracking-[0.2em] text-xs font-bold">Acompanhamento Psicológico</h4>
              <p className="text-sm text-primary/60 leading-relaxed font-body">
                Suporte focado no resgate da autoestima e fortalecimento do empoderamento pessoal, essenciais para a jornada de transformação.
              </p>
            </div>
            <div className="space-y-8">
              <div className="w-16 h-16 rounded-3xl bg-secondary/10 flex items-center justify-center text-secondary">
                <Gavel size={32} strokeWidth={1} />
              </div>
              <h4 className="font-label uppercase tracking-[0.2em] text-xs font-bold">Suporte Jurídico</h4>
              <p className="text-sm text-primary/60 leading-relaxed font-body">
                Orientações sobre direitos fundamentais e auxílio na formalização de microempreendimentos (MEI), abrindo portas para a legalidade.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-32 px-8 text-center bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="font-headline italic text-6xl text-surface mb-12">Pronta para transformar sua realidade?</h2>
        <motion.button 
          onClick={() => {
            document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-secondary text-surface px-16 py-6 font-label text-[10px] uppercase tracking-[0.4em] hover:bg-surface hover:text-primary transition-all duration-500 flex items-center gap-6 mx-auto shadow-2xl"
        >
          Inscrever-se nos Cursos <ArrowRight size={20} />
        </motion.button>
      </motion.div>
    </section>
  </motion.div>
);

const ReportsPage = () => {
  const reports = [
    {
      title: "IBRAPPE e Ministério das Mulheres lançam 'Entre Elas'",
      source: "Portal G1",
      date: "15 Jan 2026",
      desc: "Iniciativa visa capacitar 200 mulheres em situação de vulnerabilidade no DF, focando em autonomia financeira.",
      img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Empreendedorismo Feminino: O Impacto do Projeto no DF",
      source: "Correio Braziliense",
      date: "22 Fev 2026",
      desc: "Como a qualificação técnica está mudando a realidade de famílias através do design de unhas e informática.",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Autonomia Econômica é Foco de Novo Edital",
      source: "Agência Brasília",
      date: "05 Mar 2026",
      desc: "Governo Federal reforça apoio a projetos que incentivam o protagonismo feminino e a geração de renda.",
      img: "https://images.unsplash.com/photo-1585829365294-bb7c63b3ecda?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-surface pt-32 pb-20 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h1 className="text-7xl font-headline italic text-primary mb-6">Na Mídia</h1>
          <p className="text-xl text-primary/60 font-newsreader italic">Acompanhe a repercussão do projeto nos principais veículos de comunicação.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {reports.map((report, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-[32px] mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={report.img} 
                  alt={report.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] font-label font-bold tracking-[0.2em] text-secondary uppercase">{report.source}</span>
                <span className="w-1 h-1 rounded-full bg-primary/20"></span>
                <span className="text-[10px] font-label text-primary/40 tracking-widest">{report.date}</span>
              </div>
              <h3 className="text-2xl font-headline italic text-primary mb-4 group-hover:text-secondary transition-colors">{report.title}</h3>
              <p className="text-sm text-primary/60 leading-relaxed line-clamp-3">{report.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const VoicesPage = () => {
  const stories = [
    {
      name: "Maria Silva",
      role: "Aluna de Estética",
      quote: "O projeto me deu a coragem que eu não sabia que tinha para recomeçar.",
      type: "video",
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Ana Paula",
      role: "Empreendedora Digital",
      quote: "Hoje eu entendo que a tecnologia é minha aliada, não um bicho de sete cabeças.",
      type: "audio",
      img: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-primary pt-32 pb-20 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-32 text-center">
          <h1 className="text-7xl font-headline italic text-surface mb-6">Vozes da Mudança</h1>
          <p className="text-xl text-surface/60 font-newsreader italic">Histórias reais de superação e autonomia contadas por quem viveu a transformação.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-24">
          {stories.map((story, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[80px] shadow-2xl mb-12 relative">
                <img 
                  src={story.img} 
                  alt={story.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-24 h-24 rounded-full bg-surface/20 backdrop-blur-xl border border-surface/30 flex items-center justify-center text-surface group-hover:bg-secondary group-hover:border-secondary transition-all duration-500"
                  >
                    {story.type === 'video' ? <Eye size={32} /> : <Eye size={32} />}
                  </motion.button>
                </div>
              </div>
              <div className="text-center">
                <span className="text-[10px] font-label font-bold tracking-[0.3em] text-secondary uppercase mb-4 block">{story.role}</span>
                <h3 className="text-4xl font-headline italic text-surface mb-6">{story.name}</h3>
                <p className="text-xl text-surface/60 font-newsreader italic leading-relaxed max-w-sm mx-auto">"{story.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const GalleryPage = () => {
  const photos = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1522071823942-42c2efd26c13?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-surface pt-32 pb-20 px-8"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-20 text-center">
          <h1 className="text-7xl font-headline italic text-primary mb-6">Galeria do Projeto</h1>
          <p className="text-xl text-primary/60 font-newsreader italic">Registros de nossos encontros, aulas e momentos de transformação.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {photos.map((photo, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative group overflow-hidden rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <img 
                src={photo} 
                alt="Gallery item" 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const AboutPage = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen bg-surface pt-32 pb-20 px-8"
  >
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-10 flex items-center gap-4">
            <div className="h-[1px] w-16 bg-secondary"></div>
            <span className="font-label uppercase tracking-[0.4em] text-[10px] text-secondary font-bold">Institucional</span>
          </div>
          <h1 className="text-8xl font-headline italic text-primary mb-10 leading-[0.85]">
            O Projeto <br />
            <span className="text-secondary">Entre Elas</span>
          </h1>
          <p className="text-2xl text-primary/80 font-newsreader italic leading-relaxed mb-12">
            O projeto “Entre Elas” promove a qualificação profissional de mulheres em situação de vulnerabilidade social no Distrito Federal, incentivando a autonomia econômica e o empreendedorismo feminino.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[80px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1920" 
              alt="About project" 
              className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-6">
          <h3 className="font-label uppercase tracking-[0.2em] text-xs font-bold text-secondary">Missão</h3>
          <p className="text-sm text-primary/70 leading-relaxed font-body">Capacitar mulheres através da educação técnica e suporte psicossocial, visando a independência financeira e o fortalecimento da autoestima.</p>
        </div>
        <div className="space-y-6">
          <h3 className="font-label uppercase tracking-[0.2em] text-xs font-bold text-secondary">Visão</h3>
          <p className="text-sm text-primary/70 leading-relaxed font-body">Ser referência em políticas públicas de inclusão produtiva feminina no Distrito Federal e entorno.</p>
        </div>
        <div className="space-y-6">
          <h3 className="font-label uppercase tracking-[0.2em] text-xs font-bold text-secondary">Valores</h3>
          <p className="text-sm text-primary/70 leading-relaxed font-body">Equidade, transparência, acolhimento, inovação e compromisso social.</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Footer = () => (
  <footer className="bg-primary-container text-surface">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-20 max-w-screen-2xl mx-auto">
      <div className="space-y-8">
        <img src="/Logo.png" alt="Entre Elas" className="h-12 object-contain brightness-0 invert" />
        <p className="font-body text-sm leading-[1.6] opacity-70">
          Uma plataforma dedicada ao empoderamento feminino através da curadoria de informações, direitos e oportunidades. Transformando o futuro de cada mulher brasileira.
        </p>
        <div className="flex gap-4">
          <a className="hover:scale-105 transition-transform duration-300 w-10 h-10 border border-white/20 flex items-center justify-center" href="#">
            <Globe size={16} />
          </a>
          <a className="hover:scale-105 transition-transform duration-300 w-10 h-10 border border-white/20 flex items-center justify-center" href="#">
            <Share size={16} />
          </a>
        </div>
      </div>
      
      <div className="space-y-8 md:pl-12">
        <h4 className="font-label font-light uppercase tracking-widest text-[10px]">Explorar</h4>
        <nav className="flex flex-col gap-4">
          <a className="text-on-primary-container hover:text-surface text-sm font-body" href="#">Reportagens Especiais</a>
          <a className="text-on-primary-container hover:text-surface text-sm font-body" href="#">Guia de Direitos</a>
          <a className="text-on-primary-container hover:text-surface text-sm font-body" href="#">Cursos e Oficinas</a>
          <a className="text-on-primary-container hover:text-surface text-sm font-body" href="#">Portal de Apoio</a>
          <a className="text-on-primary-container hover:text-surface text-sm font-body" href="#">Expediente Editorial</a>
        </nav>
      </div>

      <div className="space-y-8">
        <h4 className="font-label font-light uppercase tracking-widest text-[10px]">Realização</h4>
        <div className="space-y-6">
          <div className="border-l-2 border-secondary/50 pl-6 py-2">
            <p className="font-label font-bold text-lg tracking-tighter">IBRAPPE</p>
            <p className="text-[10px] uppercase tracking-widest opacity-60">Instituto Brasileiro de Políticas Públicas</p>
          </div>
          <div className="border-l-2 border-secondary/50 pl-6 py-2">
            <p className="font-label font-bold text-lg tracking-tighter">MINISTÉRIO DAS MULHERES</p>
            <p className="text-[10px] uppercase tracking-widest opacity-60">Governo Federal</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="px-12 py-8 border-t border-white/5 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-label font-light uppercase tracking-[0.2em] text-on-primary-container">
      <span>@ 2026 Projeto Entre Elas - Criado por Ibrappe.org.br</span>
      <div className="flex gap-8">
        <a className="hover:text-surface" href="#">Privacidade</a>
        <a className="hover:text-surface" href="#">Termos de Uso</a>
        <a className="hover:text-surface" href="#">Contato</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Hero setCurrentPage={setCurrentPage} />
              <PartnershipStrip />
              <CourseCardsSection setCurrentPage={setCurrentPage} />
              <AboutSection />
              <FeaturesGrid />
              <PullQuote />
            </motion.div>
          )}
          {currentPage === 'courses' && (
            <CoursesPage key="courses" setCurrentPage={setCurrentPage} />
          )}
          {currentPage === 'reportagens' && (
            <ReportsPage key="reportagens" />
          )}
          {currentPage === 'vozes' && (
            <VoicesPage key="vozes" />
          )}
          {currentPage === 'galeria' && (
            <GalleryPage key="galeria" />
          )}
          {currentPage === 'sobre' && (
            <AboutPage key="sobre" />
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
