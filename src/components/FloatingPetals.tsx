import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: string;
  animationDuration: number;
  delay: number;
  scale: number;
  rotation: number;
  xOffset: number;
}

export const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate static petals config
    const newPetals = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + "%",
      animationDuration: Math.random() * 15 + 15, // 15s to 30s
      delay: Math.random() * -30, // Negative delay to start immediately at different points
      scale: Math.random() * 0.8 + 0.5,
      rotation: Math.random() * 360,
      xOffset: Math.random() * 100 - 50
    }));
    setPetals(newPetals);
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-multiply">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          initial={{ top: "-10%", left: petal.left, opacity: 0 }}
          animate={{
            top: "110%",
            rotate: [petal.rotation, petal.rotation + 360],
            opacity: [0, 1, 1, 0],
            x: [0, petal.xOffset, -petal.xOffset, 0]
          }}
          transition={{
            duration: petal.animationDuration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
          style={{ scale: petal.scale }}
        >
          {/* Beautiful petal shape using CSS */}
          <div className="w-5 h-5 bg-gradient-to-br from-[#ffd3c8] to-[#C29B91] opacity-70 rounded-tl-full rounded-br-full rounded-tr-md rounded-bl-md shadow-[0_4px_10px_rgba(194,155,145,0.3)]"></div>
        </motion.div>
      ))}
    </div>
  );
};
