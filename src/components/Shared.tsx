import { motion } from "motion/react";

export const PartnershipStrip = () => {
  const partners = [
    { name: "IBRAPPE", img: "/logo_Ibrappe.png", link: "https://ibrappe.org.br/", invert: true, imgClass: "h-12 md:h-16" },
    { name: "Ministério das Mulheres", img: "/MinisterioMulhres.png", link: "https://www.gov.br/mulheres/pt-br", imgClass: "h-12 md:h-16 md:scale-110" },
    { name: "Governo Federal", img: "/Gov.png", link: "https://www.gov.br/pt-br", imgClass: "h-16 md:h-24 md:scale-110" }
  ];

  return (
    <section className="bg-primary py-16 px-8 overflow-hidden border-y border-white/5 relative z-10">
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

        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-28">
          {partners.map((partner, idx) => (
            <motion.a
              key={idx}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group flex items-center justify-center block"
            >
              <img
                src={partner.img}
                alt={partner.name}
                className={`${partner.imgClass} w-auto object-contain transition-all duration-500 opacity-90 group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] ${partner.invert ? 'brightness-0 invert' : ''}`}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
