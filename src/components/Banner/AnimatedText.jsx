import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text = "", className = "" }) => {
  const letters = text.split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: -60,
      rotateX: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={`inline-block ${className}`}
      style={{ perspective: 1000 }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block font-bold"
          style={{
            whiteSpace: char === " " ? "pre" : "normal",
            textShadow: "0 4px 10px rgba(0,0,0,0.6)", // 🔥 3D feel
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;