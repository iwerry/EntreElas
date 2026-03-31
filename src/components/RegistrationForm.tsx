import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Check, ArrowRight, Send } from "lucide-react";

export const RegistrationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const data = Object.fromEntries(formData);
      await fetch("https://formsubmit.co/ajax/entreelasibrappe@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _cc: "faleconosco@projetoentreelas.com.br"
        }),
      });
      setSubmitted(true);
    } catch(error) {
      console.error("Erro ao enviar form:", error);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/90 border border-primary/10 shadow-2xl p-12 rounded-[48px] text-center"
      >
        <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center text-secondary mx-auto mb-8">
          <Check size={40} />
        </div>
        <h3 className="font-headline italic text-4xl text-primary mb-4">Mensagem Enviada!</h3>
        <p className="text-primary/60 font-newsreader italic text-lg">Obrigada por entrar em contato. Nossa equipe retornará o mais breve possível.</p>
      </motion.div>
    );
  }

  return (
    <div id="registration-form" className="bg-white/90 backdrop-blur-3xl border border-primary/10 shadow-[0_30px_80px_rgba(74,43,71,0.2)] p-12 lg:p-20 rounded-[64px]">
      <div className="mb-12">
        <h3 className="font-headline italic text-5xl text-primary mb-4">Fale Conosco</h3>
        <p className="text-primary/60 font-newsreader italic text-lg">Preencha os dados abaixo para tirar dúvidas ou falar com a coordenação do projeto.</p>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <input type="hidden" name="_subject" value="Novo Contato - Entre Elas" />
        <input type="hidden" name="_captcha" value="false" />
        
        <div className="space-y-2">
          <label className="font-label uppercase tracking-widest text-[10px] text-primary/60 ml-4 font-bold">Nome Completo</label>
          <input name="nome" required type="text" className="w-full bg-surface-container-highest border border-primary/10 rounded-full px-8 py-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" />
        </div>
        <div className="space-y-2">
          <label className="font-label uppercase tracking-widest text-[10px] text-primary/60 ml-4 font-bold">E-mail</label>
          <input name="email" required type="email" className="w-full bg-surface-container-highest border border-primary/10 rounded-full px-8 py-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" />
        </div>
        <div className="space-y-2">
          <label className="font-label uppercase tracking-widest text-[10px] text-primary/60 ml-4 font-bold">Telefone / WhatsApp</label>
          <input name="telefone" required type="tel" className="w-full bg-surface-container-highest border border-primary/10 rounded-full px-8 py-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="font-label uppercase tracking-widest text-[10px] text-primary/60 ml-4 font-bold">Mensagem</label>
          <textarea name="mensagem" required rows={4} className="w-full bg-surface-container-highest border border-primary/10 rounded-3xl px-8 py-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none"></textarea>
        </div>
        <div className="md:col-span-2 pt-8">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-secondary text-surface py-6 rounded-full font-label uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-4 hover:bg-primary transition-all duration-500 shadow-xl hover:shadow-2xl"
          >
            Enviar Mensagem <Send size={16} />
          </motion.button>
        </div>
      </form>
    </div>
  );
};
