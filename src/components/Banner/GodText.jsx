import React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

const GodText = ({ text = "", className = "" }) => {
  const letters = text.split("");

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 80, damping: 15 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 15 });

  const rotateY = useTransform(smoothX, [-100, 100], [-5, 5]);
  const rotateX = useTransform(smoothY, [-100, 100], [5, -5]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.03 },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: -60,
      rotateX: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY }}
      className="relative inline-block z-10"
    >
      {/* 🌈 TEXT (with fallback color) */}
      <motion.span
        variants={container}
        initial="hidden"
        animate="visible"
        className={`relative inline-block ${className} text-white`}
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block"
            style={{ whiteSpace: char === " " ? "pre" : "normal" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>

      {/* 💡 SUBTLE SHIMMER (behind text now) */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

export default GodText;