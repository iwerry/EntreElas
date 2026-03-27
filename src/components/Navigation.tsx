import { motion } from "motion/react";
import { Search, Bookmark, Globe, Share } from "lucide-react";

export const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (page: string) => void }) => (
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
              currentPage === item ? 'text-secondary font-bold' : 'text-primary/70 hover:text-primary'
            }`}
          >
            {item === 'courses' ? 'Cursos' : item === 'home' ? 'Início' : item.charAt(0).toUpperCase() + item.slice(1)}
            <span className={`absolute bottom-0 left-0 h-[1.5px] bg-secondary transition-all duration-500 group-hover:w-full ${
              currentPage === item ? 'w-full' : 'w-0'
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

export const Footer = () => (
  <footer className="bg-primary-container text-surface relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-20 max-w-screen-2xl mx-auto">
      <div className="space-y-8">
        <img src="/Logo.png" alt="Entre Elas" className="h-12 object-contain brightness-0 invert" />
        <p className="font-body text-sm leading-[1.6] opacity-70">
          Uma plataforma dedicada ao empoderamento feminino através da curadoria de informações, direitos e oportunidades. Transformando o futuro de cada mulher brasileira.
        </p>
        <div className="flex gap-4">
          <a className="hover:scale-105 transition-transform duration-300 w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-secondary hover:border-secondary" href="#">
            <Globe size={16} />
          </a>
          <a className="hover:scale-105 transition-transform duration-300 w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-secondary hover:border-secondary" href="#">
            <Share size={16} />
          </a>
        </div>
        <div className="pt-6 border-t border-white/10">
          <h4 className="font-label font-light uppercase tracking-widest text-[10px] mb-3 text-secondary">Sede do Projeto</h4>
          <p className="font-body text-sm leading-[1.6] opacity-70">
            Ar 07 conjunto 9 casa 28<br />
            Sobradinho, DF - 73060-710
          </p>
        </div>
      </div>
      
      <div className="space-y-8 md:pl-12">
        <h4 className="font-label font-light uppercase tracking-widest text-[10px] text-secondary">Explorar</h4>
        <nav className="flex flex-col gap-4">
          <a className="text-on-primary-container hover:text-secondary transition-colors text-sm font-body" href="#">Reportagens Especiais</a>
          <a className="text-on-primary-container hover:text-secondary transition-colors text-sm font-body" href="#">Guia de Direitos</a>
          <a className="text-on-primary-container hover:text-secondary transition-colors text-sm font-body" href="#">Cursos e Oficinas</a>
          <a className="text-on-primary-container hover:text-secondary transition-colors text-sm font-body" href="#">Portal de Apoio</a>
          <a className="text-on-primary-container hover:text-secondary transition-colors text-sm font-body" href="#">Expediente Editorial</a>
        </nav>
      </div>

      <div className="space-y-8">
        <h4 className="font-label font-light uppercase tracking-widest text-[10px] text-secondary">Realização</h4>
        <div className="space-y-6">
          <div className="border-l-2 border-secondary/50 pl-6 py-2 group hover:border-secondary transition-colors">
            <p className="font-label font-bold text-lg tracking-tighter group-hover:text-secondary transition-colors">IBRAPPE</p>
            <p className="text-[10px] uppercase tracking-widest opacity-60">Instituto Brasileiro de Políticas Públicas</p>
          </div>
          <div className="border-l-2 border-secondary/50 pl-6 py-2 group hover:border-secondary transition-colors">
            <p className="font-label font-bold text-lg tracking-tighter group-hover:text-secondary transition-colors">MINISTÉRIO DAS MULHERES</p>
            <p className="text-[10px] uppercase tracking-widest opacity-60">Governo Federal</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="px-12 py-8 border-t border-white/5 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-label font-light uppercase tracking-[0.2em] text-on-primary-container/60">
      <span>@ 2026 Projeto Entre Elas - Criado por Ibrappe.org.br</span>
      <div className="flex gap-8">
        <a className="hover:text-secondary transition-colors" href="#">Privacidade</a>
        <a className="hover:text-secondary transition-colors" href="#">Termos de Uso</a>
        <a className="hover:text-secondary transition-colors" href="#">Contato</a>
      </div>
    </div>
  </footer>
);
