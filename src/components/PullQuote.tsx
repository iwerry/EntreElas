import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote } from "lucide-react";
import { FloatingPetals } from "./FloatingPetals";

export const quotesList = [
  "Quando uma mulher se transforma, ela move o mundo ao seu redor.",
  "A autonomia financeira é passaporte direto para a liberdade de escolha.",
  "A educação feminina não constrói apenas profissionais, constrói gerações.",
  "Onde há uma mulher empoderada, existe uma rede invencível de proteção.",
  "Empreender não é só sobre negócios, é sobre reescrever a própria história.",
  "Direitos conquistados são sementes para um futuro com equidade absoluta.",
  "Cada mulher que avança quebra um ciclo e abre portas para as próximas.",
  "A verdadeira inovação começa ao darmos voz e palco às essências femininas.",
  "Apoio não é somente estar presente. É ensinar o caminho e fornecer a pista para ela voar.",
  "A independência não é um prêmio, mas o primeiro passo da verdadeira liderança."
];

export const PullQuote = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotesList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-surface-container-low py-40 relative overflow-hidden z-10">
      <FloatingPetals variant="pullquote" className="absolute inset-0 z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="max-w-5xl mx-auto text-center px-8 relative flex flex-col justify-center items-center z-20">
        <Quote className="text-secondary mb-12 drop-shadow-md z-20" size={64} strokeWidth={1} />
        <div className="relative w-full h-[200px] md:h-[150px] flex items-center justify-center z-20">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -15 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-full px-4 font-headline italic text-2xl md:text-4xl lg:text-[56px] text-primary leading-[1.1] z-20 mix-blend-multiply flex items-center justify-center break-words"
            >
              "{quotesList[index]}"
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <cite className="font-label uppercase tracking-[0.4em] text-[12px] text-secondary not-italic font-bold mt-12 block z-20 relative">— Manifesto Entre Elas</cite>
      </div>
    </section>
  );
};