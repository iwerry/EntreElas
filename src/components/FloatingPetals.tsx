import { motion, useAnimation } from "motion/react";
import { useEffect, useState, useRef } from "react";

interface PetalConfig {
  id: number;
  left: string;
  duration: number;
  delay: number;
  scale: number;
  windSpeed: number;
}

const AccumulatingPetal = ({ petal, windTrigger }: { petal: PetalConfig, windTrigger: number }) => {
  const controls = useAnimation();
  const isAccumulated = useRef(false);

  const drop = async (delaySeconds: number) => {
    isAccumulated.current = false;
    await controls.start({
      top: ["-10%", "98%"],
      x: 0,
      opacity: [1, 1], // Always visible while falling
      transition: { duration: petal.duration, ease: "linear", delay: delaySeconds }
    });
    // Once drop transition is finished, petal is ready to be blown
    isAccumulated.current = true;
  };

  useEffect(() => {
    // Initial drop
    drop(petal.delay);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (windTrigger > 0 && isAccumulated.current) {
      isAccumulated.current = false;
      controls.start({
        x: "100vw",
        opacity: 0, // fade out as it blows away
        transition: { duration: petal.windSpeed, ease: "easeIn" }
      }).then(() => {
        // Immediately reset and fall again with small random delay
        controls.set({ top: "-10%", x: 0, opacity: 0 });
        drop(Math.random() * 3);
      });
    }
  }, [windTrigger, controls, petal]);

  return (
    <motion.div
      animate={controls}
      initial={{ top: "-10%", left: petal.left, x: 0, opacity: 0 }}
      className="absolute"
      style={{ scale: petal.scale }}
    >
      <motion.div 
        animate={{ rotate: [0, 360], x: [0, 20, -20, 0] }}
        transition={{
          rotate: { duration: Math.random() * 8 + 4, repeat: Infinity, ease: "linear" },
          x: { duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="w-5 h-5 bg-gradient-to-br from-[#ffd3c8] to-[#C29B91] opacity-70 rounded-tl-full rounded-br-full rounded-tr-md rounded-bl-md shadow-[0_4px_10px_rgba(194,155,145,0.3)]"
      />
    </motion.div>
  );
};

export const FloatingPetals = ({ variant = "global", className = "fixed inset-0 z-0" }: { variant?: "global" | "hero" | "pullquote", className?: string }) => {
  const [petals, setPetals] = useState<PetalConfig[]>([]);
  const controls = useAnimation();
  const [windTrigger, setWindTrigger] = useState(0);

  useEffect(() => {
    // Create configs once
    const newPetals = Array.from({ length: variant === 'hero' ? 15 : 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + "%",
      duration: Math.random() * 10 + 8, // 8s to 18s to fall
      delay: Math.random() * 10,
      scale: Math.random() * 0.7 + 0.4,
      windSpeed: Math.random() * 2 + 1.5,
    }));
    setPetals(newPetals);
  }, [variant]);

  useEffect(() => {
    if (petals.length === 0) return;

    if (variant === 'pullquote') {
      const windTimer = setInterval(() => {
        setWindTrigger(prev => prev + 1);
      }, 20000);
      return () => clearInterval(windTimer);
    } else {
      // Hero / Global logic
      controls.start((i) => ({
        top: "110%",
        x: variant === 'hero' ? [0, 0, 50, 0] : [0, 0, 0, 0], // Evade button
        opacity: [0, 1, 1, 0],
        transition: { 
          duration: petals[i]?.duration || 15, 
          repeat: Infinity,
          ease: "linear", 
          delay: petals[i]?.delay || 0,
          times: [0, 0.4, 0.6, 1] 
        }
      }));
    }
  }, [petals, controls, variant]);

  if (petals.length === 0) return null;

  return (
    <div className={`pointer-events-none overflow-hidden mix-blend-multiply ${className}`}>
      {variant === 'pullquote' ? (
        petals.map((petal) => (
          <AccumulatingPetal key={petal.id} petal={petal} windTrigger={windTrigger} />
        ))
      ) : (
        petals.map((petal, i) => (
          <motion.div
            key={petal.id}
            custom={i}
            animate={controls}
            initial={{ top: "-10%", left: petal.left, x: 0, opacity: 0 }}
            className="absolute"
            style={{ scale: petal.scale }}
          >
            <motion.div 
              animate={{ rotate: [0, 360], x: [0, 20, -20, 0] }}
              transition={{
                 rotate: { duration: Math.random() * 8 + 4, repeat: Infinity, ease: "linear" },
                 x: { duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-5 h-5 bg-gradient-to-br from-[#ffd3c8] to-[#C29B91] opacity-70 rounded-tl-full rounded-br-full rounded-tr-md rounded-bl-md shadow-[0_4px_10px_rgba(194,155,145,0.3)]"
            />
          </motion.div>
        ))
      )}
    </div>
  );
};
