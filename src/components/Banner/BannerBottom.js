import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import { MdLocalShipping } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { CgRedo } from "react-icons/cg";
import { FiTrendingUp, FiShield } from "react-icons/fi";
import { BsLightningChargeFill } from "react-icons/bs";

const BannerBottom = () => {
  const [ordersToday, setOrdersToday] = useState(0);

  //////////////////////////////////////////////////////
  // LIVE ORDERS
  //////////////////////////////////////////////////////
  useEffect(() => {
    const base = 120;
    const random = Math.floor(Math.random() * 80);

    setOrdersToday(base + random);

    const interval = setInterval(() => {
      setOrdersToday((prev) => prev + 1);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  //////////////////////////////////////////////////////
  // PARALLAX
  //////////////////////////////////////////////////////
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
  });

  const yParallax = useTransform(
    smoothProgress,
    [0, 1],
    [20, -20]
  );

  const opacity = useTransform(
    smoothProgress,
    [0, 0.2, 1],
    [0.7, 1, 0.9]
  );

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  //////////////////////////////////////////////////////
  // ETA
  //////////////////////////////////////////////////////
  const getETA = () => {
    const today = new Date();

    const min = new Date(today);
    const max = new Date(today);

    min.setDate(today.getDate() + 3);
    max.setDate(today.getDate() + 6);

    const format = (d) =>
      d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

    return `${format(min)} - ${format(max)}`;
  };

  //////////////////////////////////////////////////////
  // ITEMS
  //////////////////////////////////////////////////////
  const items = [
    {
      icon: <FaStar />,
      title: "4.9 Customer Rating",
      desc: "Based on verified customer reviews",
      glow: "from-yellow-500/20 to-amber-500/10",
    },

    {
      icon: <MdLocalShipping />,
      title: "Fast Worldwide Shipping",
      desc: `Estimated delivery: ${getETA()}`,
      glow: "from-yellow-500/20 to-orange-500/10",
    },

    {
      icon: <FiTrendingUp />,
      title: `${ordersToday}+ Orders Today`,
      desc: "Thousands trust us every day",
      glow: "from-yellow-500/20 to-amber-500/10",
    },

    {
      icon: <CgRedo />,
      title: "Easy Returns",
      desc: "30-day hassle-free return policy",
      glow: "from-yellow-500/20 to-orange-500/10",
    },

    {
      icon: <FiShield />,
      title: "Secure Checkout",
      desc: "SSL encrypted payment protection",
      glow: "from-yellow-500/20 to-amber-500/10",
    },

    {
      icon: <BsLightningChargeFill />,
      title: "Premium Experience",
      desc: "Luxury products with fast support",
      glow: "from-yellow-500/20 to-orange-500/10",
    },
  ];

  return (
    <section
      ref={ref}
      className="
        relative
        w-full
        overflow-hidden
        bg-[#050505]
        py-14
        sm:py-20
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* BLURS */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-yellow-500/5 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] sm:w-[450px] sm:h-[450px] bg-yellow-400/5 blur-[120px] rounded-full" />
      </div>

      {/* CONTENT */}
      <motion.div
        style={{
          y: yParallax,
          opacity,
        }}
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
        "
      >
        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.9,
          }}
          className="text-center mb-12"
        >
          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-yellow-500/20
              bg-yellow-500/5
              backdrop-blur-md
              mb-6
            "
          >
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

            <span
              className="
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.25em]
                text-yellow-300
              "
            >
              Trusted Worldwide
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              text-3xl
              sm:text-5xl
              font-bold
              text-white
              leading-tight
            "
          >
            Why Customers

            <span
              className="
                block
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-yellow-300
                via-yellow-500
                to-orange-400
              "
            >
              Choose Our Store
            </span>
          </h2>

          {/* DESC */}
          <p
            className="
              text-gray-500
              max-w-2xl
              mx-auto
              mt-5
              text-sm
              sm:text-base
              leading-relaxed
              px-2
            "
          >
            Premium quality products, luxury shopping experience,
            lightning-fast shipping, and secure checkout trusted
            by thousands of customers worldwide.
          </p>
        </motion.div>

        {/* MOBILE */}
        <div className="flex flex-col gap-4 md:hidden w-full">
          {items.map((item, index) => (
            <MobileCard
              key={index}
              item={item}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-2 xl:grid-cols-3 gap-5">
          <AnimatePresence>
            {items.map((item, index) => (
              <DesktopCard
                key={index}
                item={item}
                index={index}
                isInView={isInView}
              />
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

////////////////////////////////////////////////////////
// MOBILE CARD
////////////////////////////////////////////////////////

const MobileCard = ({ item, index, isInView }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.7,
        delay: index * 0.08,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-5
      "
    >
      {/* GLOW */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-40`}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex items-start gap-4">

        {/* ICON */}
        <div
          className="
            min-w-[58px]
            h-[58px]
            rounded-2xl
            flex
            items-center
            justify-center
            text-2xl
            text-yellow-400
            border
            border-yellow-500/20
            bg-yellow-500/5
          "
        >
          {item.icon}
        </div>

        {/* TEXT */}
        <div className="flex-1 min-w-0">

          <h3
            className="
              text-white
              text-xl
              font-semibold
              leading-snug
              break-words
            "
          >
            {item.title}
          </h3>

          <p
            className="
              text-sm
              text-gray-400
              mt-2
              leading-relaxed
              break-words
            "
          >
            {item.desc}
          </p>

          <div className="mt-4 w-12 h-[2px] bg-yellow-500/40" />
        </div>
      </div>
    </motion.div>
  );
};

////////////////////////////////////////////////////////
// DESKTOP CARD
////////////////////////////////////////////////////////

const DesktopCard = ({ item, index, isInView }) => {
  const cardRef = useRef(null);

  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 60,
    damping: 18,
  });

  const springY = useSpring(y, {
    stiffness: 60,
    damping: 18,
  });

  const rotateX = useTransform(
    springY,
    [-40, 40],
    [5, -5]
  );

  const rotateY = useTransform(
    springX,
    [-40, 40],
    [-5, 5]
  );

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768 || prefersReducedMotion) return;

    const rect = cardRef.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const moveX = (e.clientX - centerX) * 0.12;
    const moveY = (e.clientY - centerY) * 0.12;

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.8,
        delay: index * 0.08,
      }}
      style={{
        rotateX,
        rotateY,
        x: springX,
        y: springY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        scale: 1.02,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        p-7
      "
    >
      {/* GLOW */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-0 group-hover:opacity-100 transition duration-700`}
      />

      {/* BORDER */}
      <div className="absolute inset-0 rounded-3xl border border-yellow-500/10 group-hover:border-yellow-500/30 transition duration-500" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-start gap-5">

        {/* ICON */}
        <div
          className="
            relative
            min-w-[60px]
            h-[60px]
            rounded-2xl
            flex
            items-center
            justify-center
            text-2xl
            text-yellow-400
            border
            border-yellow-500/20
            bg-yellow-500/5
          "
        >
          {item.icon}
        </div>

        {/* TEXT */}
        <div className="flex-1">

          <h3 className="text-lg font-semibold text-white">
            {item.title}
          </h3>

          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            {item.desc}
          </p>

          <div className="mt-5 w-10 h-[2px] bg-yellow-500/40 group-hover:w-20 transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  );
};

export default BannerBottom;