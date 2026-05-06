import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

import perfumeBanner1 from "../../../assets/images/banner/perfumeb.png";
import toolsBanner from "../../../assets/images/banner/toolsb.png";
import officeBanner from "../../../assets/images/banner/officeb.png";
import plumbingBanner from "../../../assets/images/banner/plumbingb.png";

const Sale = () => {
  const items = [
    {
      img: perfumeBanner1,
      link: "/category/perfumes",
      title: "Perfumes",
      glow: "rgba(168,85,247,0.35)", // purple
    },
    {
      img: toolsBanner,
      link: "/category/tools",
      title: "Tools",
      glow: "rgba(249,115,22,0.35)", // orange
    },
    {
      img: officeBanner,
      link: "/category/office",
      title: "Office Supplies",
      glow: "rgba(59,130,246,0.35)", // blue
    },
    {
      img: plumbingBanner,
      link: "/category/plumbing",
      title: "Plumbing",
      glow: "rgba(16,185,129,0.35)", // green
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <TiltCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Sale;

////////////////////////////////////////////////////
// 🔥 TILT CARD COMPONENT
////////////////////////////////////////////////////
const TiltCard = ({ item }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 120, damping: 12 });
  const rotateY = useSpring(x, { stiffness: 120, damping: 12 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateYValue = ((mouseX / width) - 0.5) * 12;
    const rotateXValue = ((mouseY / height) - 0.5) * -12;

    x.set(rotateYValue);
    y.set(rotateXValue);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link to={item.link}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative group h-[260px] sm:h-[300px] md:h-[340px] rounded-2xl overflow-hidden"
      >
        {/* IMAGE */}
        <motion.img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* GRADIENT DEPTH */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* 🔥 CATEGORY GLOW */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
          style={{
            boxShadow: `inset 0 0 120px ${item.glow}`,
          }}
        />

        {/* ✨ SHIMMER EFFECT */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-[150%] top-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 
          group-hover:animate-shimmer" />
        </div>

        {/* CONTENT */}
        <div className="absolute bottom-6 left-6 z-10 text-white">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-wide">
            {item.title}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-sm text-gray-300 group-hover:text-white transition">
            <span>Explore</span>
            <span className="transform group-hover:translate-x-1 transition">
              →
            </span>
          </div>
        </div>

        {/* BORDER LIGHT */}
        <div className="absolute inset-0 rounded-2xl border border-white/10 opacity-40 group-hover:opacity-80 transition" />
      </motion.div>
    </Link>
  );
};