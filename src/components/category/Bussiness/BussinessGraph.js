import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaChartLine, FaDollarSign, FaBoxOpen } from "react-icons/fa";

// Counter
const Counter = ({ value, start }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    const duration = 2000;
    const end = parseFloat(value.replace(/[^0-9.]/g, ""));

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = end * easeOut;

      setDisplay(current.toFixed(value.includes(".") ? 1 : 0));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [value, start]);

  return <span>{value.replace(/[0-9.]+/, display)}</span>;
};

// Card
const StatCard = ({ stat, inView }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative group rounded-3xl p-[1px] overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Border glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

      <div className="relative bg-[#111] border border-white/10 rounded-3xl p-12 text-center overflow-hidden">

        {/* Spotlight */}
        <motion.div
          className="pointer-events-none absolute w-40 h-40 rounded-full bg-white/10 blur-2xl"
          style={{
            left: smoothX,
            top: smoothY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />

        {/* Icon */}
        <div className="text-2xl mb-4 text-white/70 flex justify-center">
          {stat.icon}
        </div>

        {/* Number */}
        <div className="text-5xl font-semibold tracking-wide">
          <Counter value={stat.value} start={inView} />
        </div>

        {/* Label */}
        <p className="mt-4 text-gray-400 text-sm tracking-wide">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
};

export default function BusinessGraph() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "$2M", label: "Total Revenue", icon: <FaDollarSign /> },
    { value: "86%", label: "Growth Rate", icon: <FaChartLine /> },
    { value: "12000+", label: "Products Sold", icon: <FaBoxOpen /> },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-[#0f0f0f] py-32 px-6 text-white overflow-hidden"
    >
      {/* 🔥 SMOOTH BACKGROUND (FIXED) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[140%] h-[140%] bg-[#0f0f0f] from-white/10 via-transparent to-white/10 blur-3xl animate-floatGradient" />
        <div className="absolute w-[160%] h-[160%] bg-[#0f0f0f] from-transparent via-white/5 to-transparent blur-3xl animate-floatGradient" />
      </div>

      {/* Heading */}
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-wide">
          Performance That Speaks
        </h2>
        <p className="text-gray-400 mt-4 text-sm">
          Precision. Growth. Excellence.
        </p>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-14 relative z-10">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} inView={inView} />
        ))}
      </div>
    </div>
  );
}