import { motion } from "motion/react";
import { Quote, Eye, ArrowRight } from "lucide-react";

export default function Voices({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "ALUNA DE ESTÉTICA",
      quote: "O projeto me deu a coragem que eu não sabia que tinha para recomeçar.",
      img: "/vozes/maria-silva.jpg"
    },
    {
      name: "Ana Paula",
      role: "EMPREENDEDORA DIGITAL",
      quote: "Hoje eu entendo que a tecnologia é minha aliada, não um bicho de sete cabeças.",
      img: "/vozes/ana-paula.jpg"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-primary relative overflow-hidden flex flex-col pt-32 pb-40"
    >
      {/* Epic Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-secondary/10 blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            x: [0, 100, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-primary-container/80 blur-[150px] mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/80 to-primary"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-8 w-full relative z-10 flex-1 flex flex-col justify-center">
        <div className="mb-24 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 text-surface"
          >
            <Quote className="text-secondary drop-shadow-md" size={40} />
            <h1 className="font-headline italic text-5xl lg:text-7xl drop-shadow-lg">Vozes</h1>
            <div className="h-[2px] w-24 bg-secondary ml-4 shadow-sm"></div>
          </motion.div>
          <motion.button 
            onClick={() => setCurrentPage('home')}
            whileHover={{ x: -5 }}
            className="flex items-center gap-3 text-secondary hover:text-surface transition-colors font-label text-[10px] uppercase tracking-[0.3em] font-bold"
          >
            <ArrowRight className="rotate-180" size={16} /> Voltar para Home
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[80px] mb-12 shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative cursor-pointer border-2 border-transparent hover:border-secondary/30 transition-colors duration-700">
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors duration-[1.5s] z-10"></div>
                
                {/* View Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20">
                  <div className="w-24 h-24 rounded-full bg-surface/10 backdrop-blur-md border border-white/20 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-700 shadow-2xl">
                    <Eye className="text-white" size={32} strokeWidth={1.5} />
                  </div>
                </div>

                <img 
                  src={t.img} 
                  alt={t.name} 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s] group-hover:scale-110"
                />
              </div>
              <div className="text-center bg-primary-container p-12 rounded-[40px] shadow-2xl relative z-20 -mt-24 mx-8 border border-white/5 backdrop-blur-xl group-hover:-translate-y-4 transition-transform duration-700">
                <h4 className="text-[10px] text-secondary tracking-[0.4em] uppercase font-label mb-6 font-bold">{t.role}</h4>
                <p className="font-headline italic text-4xl text-surface mb-8">"{t.quote}"</p>
                <div className="text-sm font-label text-surface/60 uppercase tracking-widest">— {t.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
