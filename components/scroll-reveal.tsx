'use client'
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type Direction = "top" | "bottom" | "left" | "right";

interface ScrollRevealProps extends PropsWithChildren {
  className?: string;
  direction?: Direction;
  distance?: number;
  delay?: number; // Time in seconds
}

export default function ScrollReveal({
  children,
  className,
  direction = "bottom",
  distance = 50,
  delay = 0
}: ScrollRevealProps) {

  const getInitialPosition = () => {
    switch (direction) {
      case "top": return { opacity: 0, y: -distance };
      case "bottom": return { opacity: 0, y: distance };
      case "left": return { opacity: 0, x: -distance };
      case "right": return { opacity: 0, x: distance };
      default: return { opacity: 0, y: distance };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: delay // Pass the delay here
      }}
    >
      {children}
    </motion.div>
  );
};
