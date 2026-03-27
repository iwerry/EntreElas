import { motion } from "motion/react";
import { TrendingUp, Eye, Users, Monitor, ArrowRight } from "lucide-react";

export const CourseCardsSection = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const courses = [
    {
      title: "NAIL DESIGNER",
      subtitle: "Elite Nível I",
      desc: "A arte do alongamento e estética das unhas com as técnicas mais modernas do mercado.",
      img: "/cursos/designer-unhas.jpg",
      icon: <TrendingUp size={18} />,
      badge: "NOVO"
    },
    {
      title: "EXTENSÃO DE CÍLIOS",
      subtitle: "Master Look",
      desc: "Olhar marcante e natural. Aprenda visagismo e aplicação fio a fio.",
      img: "/cursos/extensao-cilios.jpg",
      icon: <Eye size={18} />,
    },
    {
      title: "DESIGNER DE SOBRANCELHAS",
      subtitle: "Arquitetura Facial",
      desc: "Harmonização facial através do design estratégico e henna.",
      img: "/cursos/designer-sobrancelhas.jpg",
      icon: <Users size={18} />,
    },
    {
      title: "INFORMÁTICA",
      subtitle: "Digital Pro",
      desc: "Ferramentas digitais essenciais para gerir seu negócio e crescer online.",
      img: "/cursos/informatica.jpg",
      icon: <Monitor size={18} />,
    }
  ];

  return (
    <section className="py-32 px-8 max-w-screen-2xl mx-auto relative z-10">
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
          <button className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-surface transition-all duration-500 group">
            <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={24} />
          </button>
          <button className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-surface transition-all duration-500 group">
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
            transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -15 }}
            className="bg-white rounded-[48px] p-5 shadow-[0_20px_50px_rgba(74,43,71,0.08)] hover:shadow-[0_40px_80px_rgba(74,43,71,0.15)] border border-primary/5 transition-all duration-700 group cursor-pointer"
          >
            <div className="relative aspect-[0.85/1] rounded-[40px] overflow-hidden mb-10">
              <img 
                src={course.img} 
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              {course.badge && (
                <span className="absolute top-6 left-6 bg-primary text-surface text-[9px] font-label font-bold px-4 py-1.5 rounded-full tracking-[0.2em] shadow-lg">
                  {course.badge}
                </span>
              )}
            </div>
            <div className="px-4 pb-8">
              <h4 className="font-label font-bold text-[12px] tracking-[0.15em] text-primary mb-4 opacity-80 group-hover:text-secondary transition-colors">
                {course.title}
              </h4>
              <p className="text-[12px] text-primary/60 leading-relaxed mb-10 line-clamp-2 font-body">
                {course.desc}
              </p>
              <div className="flex justify-between items-center pt-6 border-t border-primary/10 mb-6">
                <span className="font-headline italic text-xl text-primary/90 group-hover:text-secondary transition-colors duration-500">
                  {course.subtitle}
                </span>
                <div className="text-secondary opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
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
                className="w-full py-4 rounded-full border border-primary/10 text-[9px] font-label uppercase tracking-[0.2em] text-primary/60 hover:bg-secondary hover:text-surface hover:border-secondary transition-all duration-500 font-bold"
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
