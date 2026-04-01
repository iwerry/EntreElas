import { motion, AnimatePresence } from "motion/react";
import { Search, Globe, Share, Menu, X, User } from "lucide-react";
import { useState } from "react";

const searchIndex = [
  { 
    name: 'Início', id: 'home',
    keywords: ['home', 'página inicial', 'principal', 'hero', 'entre elas', 'ibrappe', 'ministério das mulheres', 'autonomia', 'transformação', 'inscrição', 'inscreva-se', 'apoio jurídico', 'educação', 'escuta ativa']
  },
  { 
    name: 'Cursos e Oficinas', id: 'courses',
    keywords: ['cursos', 'oficinas', 'qualificação', 'profissional', 'designer de sobrancelhas', 'sobrancelha', 'designer de unhas', 'unhas', 'manicure', 'extensão de cílios', 'cílios', 'informática', 'computador', 'tecnologia', 'beleza', 'estética', 'capacitação', 'emprego', 'trabalho', 'carreira', 'MEI', 'microempreendedor', 'formalização', 'renda', 'independência', 'acompanhamento psicológico', 'suporte jurídico', 'advogada']
  },
  { 
    name: 'Quem somos (Sobre o Projeto)', id: 'sobre',
    keywords: ['sobre', 'quem somos', 'história', 'projeto', 'ibrappe', 'instituto alex pires', 'ministério das mulheres', 'governo federal', 'distrito federal', 'vulnerabilidade', 'mulheres', 'missão', 'realização', 'parceria']
  },
  { 
    name: 'Reportagens Especiais', id: 'reportagens',
    keywords: ['reportagens', 'notícias', 'matérias', 'imprensa', 'mídia', 'cobertura', 'jornalismo', 'especial']
  },
  { 
    name: 'Guia de Direitos', id: 'direitos',
    keywords: ['direitos', 'lei', 'lei maria da penha', 'violência doméstica', 'medida protetiva', 'igualdade salarial', 'salário', 'direitos reprodutivos', 'saúde da mulher', 'planejamento familiar', 'gestação', 'parto', 'direitos trabalhistas', 'licença-maternidade', 'maternidade', 'estabilidade', 'amamentação', 'CLT', 'participação política', 'cotas', 'candidatura feminina', 'eleições', 'acesso à educação', 'educação', 'ciência', 'tecnologia', 'proteção', 'jurídico', 'advogada', 'governo']
  },
  { 
    name: 'Vozes e Histórias', id: 'vozes',
    keywords: ['vozes', 'histórias', 'depoimentos', 'relatos', 'testemunhos', 'superação', 'inspiração', 'comunidade', 'mulheres']
  },
  { 
    name: 'Galeria de Fotos', id: 'galeria',
    keywords: ['galeria', 'fotos', 'imagens', 'fotografias', 'eventos', 'registros', 'momentos']
  },
  { 
    name: 'Contato', id: 'contato',
    keywords: ['contato', 'fale conosco', 'telefone', 'email', 'endereço', 'localização', 'mapa', 'whatsapp', 'formulário']
  }
];

const allSuggestions = [
  'Lei Maria da Penha', 'Igualdade Salarial', 'Direitos Trabalhistas', 'Licença-maternidade',
  'Designer de Sobrancelhas', 'Designer de Unhas', 'Extensão de Cílios', 'Informática',
  'MEI', 'Formalização', 'Apoio Jurídico', 'Acompanhamento Psicológico',
  'IBRAPPE', 'Ministério das Mulheres', 'Violência Doméstica', 'Medida Protetiva',
  'Participação Política', 'Saúde da Mulher', 'Capacitação Profissional',
  'Cursos', 'Galeria', 'Direitos', 'Contato', 'Sobre'
];

export const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (page: string) => void }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const q = searchQuery.toLowerCase().trim();

  const filteredLinks = q === '' 
    ? searchIndex 
    : searchIndex.filter(item => 
        item.name.toLowerCase().includes(q) ||
        item.keywords.some(kw => kw.toLowerCase().includes(q))
      );

  const autocompleteSuggestions = q.length >= 2 
    ? allSuggestions.filter(s => s.toLowerCase().includes(q)).slice(0, 5)
    : [];

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-surface/90 backdrop-blur-xl sticky top-0 z-[60] border-b border-primary/5"
      >
        <div className="flex justify-between items-center w-full px-6 lg:px-8 py-4 lg:py-6 max-w-screen-2xl mx-auto">
          <motion.button 
            onClick={() => window.location.href = '/'}
            className="flex items-center relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Recarregar página inicial"
          >
            <motion.img 
              initial={{ filter: "drop-shadow(0px 0px 30px #4A2B47)", scale: 0.9 }}
              animate={{ filter: "drop-shadow(0px 0px 0px rgba(74,43,71,0))", scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="/Logo.png" 
              alt="Entre Elas" 
              className="h-10 lg:h-14 object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_15px_#4A2B47]" 
            />
          </motion.button>
          
          <nav className="hidden xl:flex items-center gap-10">
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
            className="flex items-center gap-4 lg:gap-6"
          >
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="w-10 h-10 rounded-full border border-primary/5 flex items-center justify-center hover:bg-primary hover:text-surface transition-all duration-500 bg-white shadow-sm"
              title="Pesquisar"
            >
              <Search size={16} strokeWidth={2} />
            </button>

            <button 
              className="xl:hidden w-10 h-10 rounded-full border border-primary/5 flex items-center justify-center hover:bg-primary hover:text-surface transition-all duration-500 bg-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[72px] lg:top-[104px] left-0 right-0 bg-surface/95 backdrop-blur-3xl z-[55] border-b border-primary/10 xl:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col px-8 py-8 gap-6">
              {['home', 'courses', 'reportagens', 'vozes', 'galeria', 'sobre'].map((item) => (
                <button 
                  key={item}
                  onClick={() => {
                    setCurrentPage(item);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left font-label uppercase tracking-[0.2em] text-xs transition-all duration-300 py-2 border-b border-primary/5 ${
                    currentPage === item ? 'text-secondary font-bold border-secondary/50' : 'text-primary'
                  }`}
                >
                  {item === 'courses' ? 'Cursos' : item === 'home' ? 'Início' : item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[100] flex items-start justify-center pt-32 px-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div 
              initial={{ y: -40, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -20, scale: 0.95 }}
              onClick={e => e.stopPropagation()}
              className="bg-surface w-full max-w-2xl rounded-[32px] shadow-2xl overflow-hidden border border-white"
            >
              <div className="p-6 border-b border-primary/10 flex items-center gap-4">
                <Search className="text-secondary" size={24} />
                <input 
                  type="text" 
                  autoFocus
                  placeholder="Pesquisar por cursos, galerias, projeto..." 
                  className="flex-1 bg-transparent border-none outline-none font-body text-lg text-primary placeholder:text-primary/40"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-primary/5 rounded-full text-primary/60 hover:text-primary transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="max-h-[60vh] overflow-y-auto p-4">
                {/* Autocomplete Suggestions */}
                {autocompleteSuggestions.length > 0 && (
                  <div className="px-4 pb-4 flex flex-wrap gap-2">
                    {autocompleteSuggestions.map(suggestion => (
                      <button
                        key={suggestion}
                        onClick={() => setSearchQuery(suggestion)}
                        className="px-4 py-2 bg-surface-container-low text-primary/70 rounded-full text-xs font-label uppercase tracking-wider hover:bg-secondary hover:text-surface transition-all duration-300 border border-primary/5"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}

                {/* Page Results */}
                {filteredLinks.length > 0 ? (
                  filteredLinks.map(link => {
                    const matchedKeywords = q.length >= 2 
                      ? link.keywords.filter(kw => kw.toLowerCase().includes(q)).slice(0, 3)
                      : [];
                    return (
                      <button
                        key={link.id}
                        onClick={() => {
                          setCurrentPage(link.id);
                          setIsSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="w-full text-left px-6 py-4 hover:bg-surface-container-low rounded-2xl transition-colors flex flex-col group"
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="font-headline text-2xl text-primary group-hover:text-secondary italic transition-colors">
                            {link.name}
                          </span>
                          <span className="text-[10px] font-label uppercase tracking-widest text-primary/30 group-hover:text-secondary/50 font-bold transition-colors shrink-0 ml-4">
                            Acessar Página
                          </span>
                        </div>
                        {matchedKeywords.length > 0 && (
                          <div className="flex gap-2 mt-2 flex-wrap">
                            {matchedKeywords.map(kw => (
                              <span key={kw} className="text-[10px] font-label text-secondary/60 bg-secondary/10 px-3 py-1 rounded-full">
                                {kw}
                              </span>
                            ))}
                          </div>
                        )}
                      </button>
                    );
                  })
                ) : (
                  <div className="px-6 py-12 text-center text-primary/50 font-body">
                    Nenhum resultado encontrado para "{searchQuery}"
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


