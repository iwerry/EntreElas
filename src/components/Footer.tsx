import { Globe, Share } from "lucide-react";

export const Footer = () => (
  <footer className="relative z-10 border-t-[3px] border-surface/80 bg-[#1e101d] overflow-hidden text-surface shadow-[0_-10px_40px_rgba(0,0,0,0.2)] mt-0">
    {/* Animated Background layer */}
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-20 max-w-screen-2xl mx-auto relative z-10">
      <div className="space-y-8">
        <a href="/" className="inline-block hover:scale-105 transition-transform duration-300" title="Recarregar página inicial">
          <img src="/Logo.png" alt="Entre Elas" className="h-12 object-contain brightness-0 invert opacity-90" />
        </a>
        <p className="font-body text-sm leading-[1.6] opacity-70">
          Uma plataforma dedicada ao empoderamento feminino através da curadoria de informações, direitos e oportunidades. Transformando o futuro de cada mulher brasileira.
        </p>
        <div className="flex gap-4">
          <a className="hover:scale-110 transition-transform duration-300 w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-surface" href="#">
            <Globe size={16} />
          </a>
          <a className="hover:scale-110 transition-transform duration-300 w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-surface" href="#">
            <Share size={16} />
          </a>
        </div>
        <div className="pt-8 border-t border-white/10 mt-6">
          <h4 className="font-label font-bold uppercase tracking-widest text-xs mb-3 text-secondary drop-shadow-md">Sede do Projeto</h4>
          <p className="font-body text-sm leading-[1.6] opacity-70">
            Ar 07 conjunto 9 casa 28<br />
            Sobradinho, DF - 73060-710
          </p>
        </div>
      </div>
      
      <div className="space-y-8 md:pl-16">
        <h4 className="font-label font-bold uppercase tracking-widest text-xs text-secondary drop-shadow-md">Explorar</h4>
        <nav className="flex flex-col gap-5">
          <a className="text-surface/70 hover:text-surface transition-colors text-sm font-body flex items-center gap-2 group" href="#">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Reportagens Especiais
          </a>
          <a className="text-surface/70 hover:text-surface transition-colors text-sm font-body flex items-center gap-2 group" href="#">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Guia de Direitos
          </a>
          <a className="text-surface/70 hover:text-surface transition-colors text-sm font-body flex items-center gap-2 group" href="#">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Cursos e Oficinas
          </a>
          <a className="text-surface/70 hover:text-surface transition-colors text-sm font-body flex items-center gap-2 group" href="#">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Portal de Apoio
          </a>
          <a className="text-surface/70 hover:text-surface transition-colors text-sm font-body flex items-center gap-2 group" href="#">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Expediente Editorial
          </a>
        </nav>
      </div>

      <div className="space-y-8">
        <h4 className="font-label font-bold uppercase tracking-widest text-xs text-secondary drop-shadow-md">Realização</h4>
        <div className="space-y-8">
          <div className="border-l-2 border-secondary/50 pl-6 py-1 group hover:border-secondary transition-colors cursor-pointer">
            <p className="font-label font-bold text-lg tracking-wide group-hover:text-secondary transition-colors text-surface/90">IBRAPPE</p>
            <p className="text-[10px] uppercase tracking-widest opacity-60 mt-1">Instituto Brasileiro de Políticas Públicas</p>
          </div>
          <div className="border-l-2 border-secondary/50 pl-6 py-1 group hover:border-secondary transition-colors cursor-pointer">
            <p className="font-label font-bold text-lg tracking-wide group-hover:text-secondary transition-colors uppercase text-surface/90">Min. das Mulheres</p>
            <p className="text-[10px] uppercase tracking-widest opacity-60 mt-1">Governo Federal</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="px-12 py-8 border-t border-white/5 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-label font-bold uppercase tracking-[0.2em] text-surface/50 relative z-10 bg-[#150a14]">
      <span>@ 2026 Projeto Entre Elas - Criado por Ibrappe.org.br</span>
      <div className="flex gap-8">
        <a className="hover:text-secondary transition-colors" href="#">Privacidade</a>
        <a className="hover:text-secondary transition-colors" href="#">Termos de Uso</a>
        <a className="hover:text-secondary transition-colors" href="#">Contato</a>
      </div>
    </div>
  </footer>
);
