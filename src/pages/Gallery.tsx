import { motion } from "motion/react";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

export default function Gallery({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const images = [
    { src: "/galeria/img1.jpg", size: "lg:col-span-2 lg:row-span-2" },
    { src: "/galeria/img2.jpg", size: "lg:col-span-1 lg:row-span-1" },
    { src: "/galeria/img3.jpg", size: "lg:col-span-1 lg:row-span-1" },
    { src: "/galeria/img4.jpg", size: "lg:col-span-1 lg:row-span-1" },
    { src: "/galeria/img5.jpg", size: "lg:col-span-1 lg:row-span-1" },
    { src: "/galeria/img6.jpg", size: "lg:col-span-2 lg:row-span-1" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-surface pt-32 pb-40 px-8"
    >
      <div className="max-w-screen-2xl mx-auto">
        <motion.button 
          onClick={() => setCurrentPage('home')}
          whileHover={{ x: -5 }}
          className="flex items-center gap-3 text-primary/60 hover:text-primary transition-colors mb-16 font-label text-[10px] uppercase tracking-[0.3em] font-bold"
        >
          <ArrowRight className="rotate-180" size={16} /> Voltar para Home
        </motion.button>
        
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-8 bg-secondary"></div>
            <ImageIcon size={18} className="text-secondary" />
            <div className="h-[2px] w-8 bg-secondary"></div>
          </motion.div>
          <h1 className="text-6xl md:text-[80px] font-headline italic text-primary mb-8 drop-shadow-sm">Galeria do Projeto</h1>
          <p className="text-2xl text-primary/60 font-newsreader italic">
            Registros reais de nossos encontros, aulas e momentos de transformação de mulheres focadas em mudar suas realidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] gap-8">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className={`rounded-[48px] overflow-hidden group shadow-[0_20px_50px_rgba(74,43,71,0.08)] hover:shadow-2xl border border-primary/5 cursor-pointer relative ${img.size}`}
            >
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-1000 z-10 w-full h-full"></div>
              <img 
                src={img.src} 
                alt="Gallery preview" 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 border-[6px] border-white/0 group-hover:border-white/10 rounded-[48px] transition-colors duration-700 z-20 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
