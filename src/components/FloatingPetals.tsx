import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: string;
  duration: number;
  delay: number;
  scale: number;
  windSpeed?: number;
}

export const FloatingPetals = ({ variant = "global", className = "fixed inset-0 z-0" }: { variant?: "global" | "hero" | "pullquote", className?: string }) => {
  const [petals, setPetals] = useState<Petal[]>([]);
  const controls = useAnimation();

  useEffect(() => {
    // Hero has less petals (15), PullQuote has more (30) for accumulation
    const newPetals = Array.from({ length: variant === 'hero' ? 15 : 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + "%",
      duration: Math.random() * 10 + 8, // 8s to 18s to fall
      delay: Math.random() * 8, // Initial stagger
      scale: Math.random() * 0.7 + 0.4,
      windSpeed: Math.random() * 2 + 1.5,
    }));
    setPetals(newPetals);
  }, [variant]);

  useEffect(() => {
    if (petals.length === 0) return;

    if (variant === 'pullquote') {
      // Accumulation logic for PullQuote / Footer
      controls.start((i) => ({
        top: "98%", // Accumulate slightly above the absolute bottom line
        transition: { 
          duration: petals[i]?.duration || 10, 
          ease: "linear", 
          delay: petals[i]?.delay || 0 
        }
      }));

      const windTimer = setInterval(async () => {
        await controls.start((i) => ({
          x: "100vw",
          opacity: 0,
          transition: { duration: petals[i]?.windSpeed || 2.5, ease: "easeIn" }
        }));
        
        await controls.start({ top: "-10%", x: 0, opacity: 0, transition: { duration: 0 } });

        controls.start((i) => ({
          top: "98%",
          opacity: 1,
          transition: { 
            duration: petals[i]?.duration || 10, 
            ease: "linear", 
            delay: Math.random() * 5 
          }
        }));
      }, 20000);

      return () => clearInterval(windTimer);
    } else {
      // Hero or Global logic - continuous fall with a bump logic around 60%
      controls.start((i) => ({
        top: "110%", // Fall through screen
        x: variant === 'hero' ? [0, 0, 50, 0] : [0, 0, 0, 0], // slide right slightly at 50% for button evasion
        opacity: [0, 1, 1, 0],
        transition: { 
          duration: petals[i]?.duration || 15, 
          repeat: Infinity,
          ease: "linear", 
          delay: petals[i]?.delay || 0,
          times: [0, 0.4, 0.6, 1] // The x bump happens between 40%-60% duration
        }
      }));
    }
  }, [petals, controls, variant]);

  if (petals.length === 0) return null;

  return (
    <div className={`pointer-events-none overflow-hidden mix-blend-multiply ${className}`}>
      {petals.map((petal, i) => (
        <motion.div
          key={petal.id}
          custom={i}
          animate={controls}
          initial={{ top: "-10%", left: petal.left, x: 0, opacity: variant === 'pullquote' ? 1 : 0 }}
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
