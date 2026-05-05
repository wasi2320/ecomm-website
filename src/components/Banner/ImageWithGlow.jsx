import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const ImageWithGlow = ({ src, active }) => {
  // 🎯 raw mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 🎯 smooth motion (spring)
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 15 });

  // 🎯 tilt (very subtle)
  const rotateY = useTransform(smoothX, [-200, 200], [-8, 8]);
  const rotateX = useTransform(smoothY, [-200, 200], [8, -8]);

  // 🎯 glow movement
  const glowX = useTransform(smoothX, [-200, 200], [-50, 50]);
  const glowY = useTransform(smoothY, [-200, 200], [-50, 50]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className="w-full md:w-[60%] h-[260px] sm:h-[300px] md:h-full flex items-center justify-center relative overflow-hidden perspective-[1200px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 🌈 DYNAMIC LIGHT */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute w-64 h-64 rounded-full pointer-events-none blur-3xl opacity-40 bg-gradient-to-r from-white via-pink-300 to-purple-400"
      />

      {/* 💡 SECOND LIGHT LAYER (depth) */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute w-40 h-40 rounded-full pointer-events-none blur-2xl opacity-30 bg-white"
      />

      {/* 🖼 IMAGE */}
      <motion.img
        src={src}
        alt="banner"
        style={{
          rotateX,
          rotateY,
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: active ? 1 : 0.95,
        }}
        whileHover={{
          scale: 1.08,
        }}
        transition={{ type: "spring", stiffness: 120 }}
        className="max-w-full max-h-full object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
      />
    </div>
  );
};

export default ImageWithGlow;