import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { MdLocalShipping } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { CgRedo } from "react-icons/cg";
import { FiTrendingUp } from "react-icons/fi";

const BannerBottom = () => {
  const [ordersToday, setOrdersToday] = useState(0);

  useEffect(() => {
    const base = 120;
    const random = Math.floor(Math.random() * 40);
    setOrdersToday(base + random);
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getETA = () => {
    const today = new Date();
    const min = new Date(today);
    const max = new Date(today);

    min.setDate(today.getDate() + 3);
    max.setDate(today.getDate() + 6);

    const format = (d) =>
      d.toLocaleDateString("en-US", { month: "short", day: "numeric" });

    return `${format(min)} - ${format(max)}`;
  };

  const items = [
    {
      icon: <FaStar size={18} />,
      title: "4.8 Rating",
      desc: "From 2,000+ happy customers",
    },
    {
      icon: <MdLocalShipping size={20} />,
      title: "Free Shipping",
      desc: `Estimated delivery: ${getETA()}`,
    },
    {
      icon: <FiTrendingUp size={20} />,
      title: `${ordersToday}+ Orders Today`,
      desc: "Trusted by thousands daily",
    },
    {
      icon: <CgRedo size={20} />,
      title: "30 Days Return",
      desc: "Hassle-free returns",
    },
  ];

  return (
    <div
      ref={ref}
      className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#0f0f0f] border-t border-white/5"
    >
      <motion.div
        style={{ y: yParallax }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
      >
        {items.map((item, index) => (
          <Card key={index} item={item} index={index} isInView={isInView} />
        ))}
      </motion.div>
    </div>
  );
};

// CARD
const Card = ({ item, index, isInView }) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 15 });
  const springY = useSpring(y, { stiffness: 120, damping: 15 });

  const rotateX = useTransform(springY, [-50, 50], [6, -6]);
  const rotateY = useTransform(springX, [-50, 50], [-6, 6]);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return; // ❌ disable tilt on mobile

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      style={{
        rotateX,
        rotateY,
        x: springX,
        y: springY,
      }}
      className="relative group rounded-xl border border-white/10 bg-black p-4 sm:p-5 md:p-6 flex items-center gap-3 sm:gap-4"
    >
      {/* LIGHT EFFECT (DESKTOP ONLY FEEL) */}
      <div className="pointer-events-none absolute inset-0 opacity-0 md:group-hover:opacity-100 transition duration-300">
        <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent" />
      </div>

      {/* TOP LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 md:group-hover:opacity-100 transition duration-300" />

      {/* ICON */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-300 md:group-hover:text-white md:group-hover:border-white/30"
      >
        {item.icon}
      </motion.div>

      {/* TEXT */}
      <div>
        <h3 className="text-xs sm:text-sm font-semibold text-white font-titleFont">
          {item.title}
        </h3>
        <p className="text-[11px] sm:text-xs text-lightText mt-1 font-bodyFont">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default BannerBottom;