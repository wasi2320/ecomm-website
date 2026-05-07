import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text = "", className = "" }) => {
  const letters = text.split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.015, // 🔥 much faster
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: -20, // 🔥 reduced movement (was -60)
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25, // 🔥 faster
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
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block font-bold will-change-transform"
          style={{
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;