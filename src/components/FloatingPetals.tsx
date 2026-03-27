import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: string;
  duration: number;
  delay: number;
  scale: number;
}

export const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);
  const controls = useAnimation();

  useEffect(() => {
    // Create petals config once
    const newPetals = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + "%",
      duration: Math.random() * 10 + 8, // 8s to 18s to fall
      delay: Math.random() * 10,
      scale: Math.random() * 0.7 + 0.4,
    }));
    setPetals(newPetals);
  }, []);

  useEffect(() => {
    if (petals.length === 0) return;

    // Initial drop
    controls.start((i) => ({
      top: "96%",
      transition: { 
        duration: petals[i]?.duration || 10, 
        ease: "linear", 
        delay: petals[i]?.delay || 0 
      }
    }));

    // Wind interval (every 20s)
    const windTimer = setInterval(async () => {
      // 1. Blow them away
      await controls.start({
        x: "100vw",
        opacity: 0,
        transition: { duration: 2.5, ease: "easeIn" }
      });
      
      // 2. Reset silently to top
      await controls.start({
        top: "-10%",
        x: 0,
        opacity: 0,
        transition: { duration: 0 }
      });

      // 3. Fall again
      controls.start((i) => ({
        top: "96%",
        opacity: 1,
        transition: { 
          duration: petals[i]?.duration || 10, 
          ease: "linear", 
          delay: Math.random() * 5 
        }
      }));
    }, 20000);

    return () => clearInterval(windTimer);
  }, [petals, controls]);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-multiply">
      {petals.map((petal, i) => (
        <motion.div
          key={petal.id}
          custom={i}
          animate={controls}
          initial={{ top: "-10%", left: petal.left, x: 0, opacity: 1 }}
          className="absolute"
          style={{ scale: petal.scale }}
        >
          <motion.div 
            animate={{ 
               rotate: [0, 360],
               x: [0, 20, -20, 0]
            }}
            transition={{
               rotate: { duration: Math.random() * 8 + 4, repeat: Infinity, ease: "linear" },
               x: { duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-5 h-5 bg-gradient-to-br from-[#ffd3c8] to-[#C29B91] opacity-70 rounded-tl-full rounded-br-full rounded-tr-md rounded-bl-md shadow-[0_4px_10px_rgba(194,155,145,0.3)]"
          />
        </motion.div>
      ))}
    </div>
  );
};
