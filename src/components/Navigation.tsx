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
  <footer className="relative z-10 border-t border-primary/20 overflow-hidden text-surface">
    {/* Animated Background layer */}
    <div className="absolute inset-0 z-0 bg-primary-container">
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/40 rounded-full blur-[120px] pointer-events-none"></div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-20 max-w-screen-2xl mx-auto relative z-10">
      <div className="space-y-8">
        <img src="/Logo.png" alt="Entre Elas" className="h-12 object-contain brightness-0 invert" />
        <p className="font-body text-sm leading-[1.6] opacity-80">
          Uma plataforma dedicada ao empoderamento feminino através da curadoria de informações, direitos e oportunidades. Transformando o futuro de cada mulher brasileira.
        </p>
        <div className="flex gap-4">
          <a className="hover:scale-110 transition-transform duration-300 w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-primary" href="#">
            <Globe size={16} />
          </a>
          <a className="hover:scale-110 transition-transform duration-300 w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-primary" href="#">
            <Share size={16} />
          </a>
        </div>
        <div className="pt-8 border-t border-white/10 mt-6">
          <h4 className="font-label font-bold uppercase tracking-widest text-xs mb-3 text-secondary drop-shadow-md">Sede do Projeto</h4>
          <p className="font-body text-sm leading-[1.6] opacity-80">
            Ar 07 conjunto 9 casa 28<br />
            Sobradinho, DF - 73060-710
          </p>
        </div>
      </div>
      
      <div className="space-y-8 md:pl-16">
        <h4 className="font-label font-bold uppercase tracking-widest text-xs text-secondary drop-shadow-md">Explorar</h4>
        <nav className="flex flex-col gap-5">
          <a className="text-surface/80 hover:text-surface transition-colors text-sm font-body flex items-center gap-2 group" href="#">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Reportagens Especiais
          </a>
          <a className="text-surface/80 hover:text-surface transition-colors text-sm font-body flex items-center gap-2 group" href="#">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Guia de Direitos
          </a>
          <a className="text-surface/80 hover:text-surface transition-colors text-sm font-body flex items-center gap-2 group" href="#">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Cursos e Oficinas
          </a>
          <a className="text-surface/80 hover:text-surface transition-colors text-sm font-body flex items-center gap-2 group" href="#">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Portal de Apoio
          </a>
          <a className="text-surface/80 hover:text-surface transition-colors text-sm font-body flex items-center gap-2 group" href="#">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Expediente Editorial
          </a>
        </nav>
      </div>

      <div className="space-y-8">
        <h4 className="font-label font-bold uppercase tracking-widest text-xs text-secondary drop-shadow-md">Realização</h4>
        <div className="space-y-8">
          <div className="border-l-2 border-secondary/50 pl-6 py-1 group hover:border-secondary transition-colors cursor-pointer">
            <p className="font-label font-bold text-lg tracking-wide group-hover:text-secondary transition-colors">IBRAPPE</p>
            <p className="text-[10px] uppercase tracking-widest opacity-70 mt-1">Instituto Brasileiro de Políticas Públicas</p>
          </div>
          <div className="border-l-2 border-secondary/50 pl-6 py-1 group hover:border-secondary transition-colors cursor-pointer">
            <p className="font-label font-bold text-lg tracking-wide group-hover:text-secondary transition-colors uppercase">Min. das Mulheres</p>
            <p className="text-[10px] uppercase tracking-widest opacity-70 mt-1">Governo Federal</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="px-12 py-8 border-t border-white/10 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-label font-bold uppercase tracking-[0.2em] text-surface/60 relative z-10">
      <span>@ 2026 Projeto Entre Elas - Criado por Ibrappe.org.br</span>
      <div className="flex gap-8">
        <a className="hover:text-secondary transition-colors" href="#">Privacidade</a>
        <a className="hover:text-secondary transition-colors" href="#">Termos de Uso</a>
        <a className="hover:text-secondary transition-colors" href="#">Contato</a>
      </div>
    </div>
  </footer>
);
