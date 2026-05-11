import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useAnimationFrame,
} from "framer-motion";
import {
  HiOutlineArrowRight,
  HiSparkles,
} from "react-icons/hi2";
import Product from "../Products/Product";
import productsData from "../../category/productsData";

// 🔥 RANDOM PRODUCTS
const getRandomProducts = (products, count) => {
  const allProducts = Object.values(products).flat();

  return [...allProducts]
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
};

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [hovered, setHovered] = useState(false);

  //////////////////////////////////////////////////////
  // SMOOTH INFINITE SCROLL
  //////////////////////////////////////////////////////
  const baseX = useMotionValue(0);

  const x = useSpring(baseX, {
    stiffness: 18,
    damping: 45,
    mass: 1.4,
  });

  useEffect(() => {
    setProducts(getRandomProducts(productsData, 10));
  }, []);

  //////////////////////////////////////////////////////
  // LOOP SETTINGS
  //////////////////////////////////////////////////////
  const CARD_WIDTH = 290;
  const GAP = 32;
  const loopWidth = (CARD_WIDTH + GAP) * products.length;

  const SPEED = 38;

  useAnimationFrame((t, delta) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    if (hovered || products.length === 0) return;

    const moveBy = (delta / 1000) * SPEED;

    let next = baseX.get() - moveBy;

    if (next <= -loopWidth) {
      next += loopWidth;
    }

    baseX.set(next);
  });

  return (
    <section className="relative w-full overflow-hidden bg-[#070707] py-24 text-white">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-white/[0.03] blur-[140px] rounded-full" />

      <div className="absolute bottom-[-250px] right-[-200px] w-[500px] h-[500px] bg-white/[0.02] blur-[140px] rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* ===================================== */}
      {/* HEADER */}
      {/* ===================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl">
                <HiSparkles className="text-lg text-white" />
              </div>

              <span className="uppercase tracking-[0.3em] text-xs text-gray-500">
                Premium Collection
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              New
              <span className="text-gray-500"> Arrivals</span>
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl text-sm sm:text-base leading-relaxed">
              Explore the latest premium products crafted with modern
              design, luxury aesthetics, and exceptional quality.
            </p>
          </div>

          {/* RIGHT */}
          <motion.button
            whileHover={{ x: 5 }}
            className="group hidden md:flex items-center gap-3 border border-white/10
            bg-white/[0.03] hover:bg-white hover:text-black transition-all duration-500
            rounded-full px-6 py-3 backdrop-blur-xl"
          >
            Explore Collection

            <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>

      {/* ===================================== */}
      {/* DESKTOP SLIDER */}
      {/* ===================================== */}
      <div className="hidden md:block relative">

        {/* TOP LIGHT */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent pointer-events-none" />

        <motion.div
          style={{ x }}
          className="flex gap-8 px-6 will-change-transform transform-gpu"
        >
          {[...products, ...products].map((product, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="w-[290px] flex-shrink-0 group relative"
            >
              {/* CARD */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 160,
                  damping: 18,
                }}
                className="relative h-[500px] overflow-hidden rounded-[32px]"
              >
                {/* GLASS BACKGROUND */}
                <div
                  className="absolute inset-0 rounded-[32px]
                  bg-white/[0.04]
                  backdrop-blur-2xl
                  border border-white/10"
                />

                {/* HOVER GLOW */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100
                  transition duration-700"
                >
                  <div className="absolute inset-0 bg-white/[0.04] blur-2xl" />
                </div>

                {/* BORDER LIGHT */}
                <div
                  className="absolute inset-0 rounded-[32px]
                  bg-gradient-to-b from-white/10 via-transparent to-transparent
                  opacity-60"
                />

                {/* SHIMMER */}
                <div className="absolute inset-0 overflow-hidden rounded-[32px]">
                  <div
                    className="absolute top-0 -left-[120%] h-full w-[50%]
                    bg-gradient-to-r from-transparent via-white/20 to-transparent
                    skew-x-12 group-hover:left-[150%]
                    transition-all duration-[1800ms]"
                  />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 h-full p-4 flex flex-col">
                  <Product {...product} />
                </div>

                {/* FLOATING BADGE */}
                <div
                  className="absolute top-5 right-5 px-4 py-1.5 rounded-full
                  bg-black/50 border border-white/10 backdrop-blur-xl
                  text-[10px] uppercase tracking-[0.2em] text-gray-300"
                >
                  New
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* EDGE BLUR */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#070707] to-transparent z-20" />

        <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#070707] to-transparent z-20" />
      </div>

      {/* ===================================== */}
      {/* MOBILE VERSION */}
      {/* ===================================== */}
      <div className="md:hidden overflow-x-auto no-scrollbar px-4">
        <div className="flex gap-5 w-max pb-2">
          {products.map((product, i) => (
            <motion.div
              key={i}
              whileTap={{ scale: 0.98 }}
              className="w-[230px] flex-shrink-0"
            >
              <div
                className="relative h-[390px] rounded-[28px] overflow-hidden
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl"
              >
                {/* LIGHT */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />

                {/* SHIMMER */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute top-0 -left-[120%] h-full w-[60%]
                    bg-gradient-to-r from-transparent via-white/10 to-transparent
                    skew-x-12 animate-[shimmer_5s_linear_infinite]"
                  />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 h-full p-4">
                  <Product {...product} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===================================== */}
      {/* BOTTOM FADE */}
      {/* ===================================== */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#070707] to-transparent pointer-events-none" />
    </section>
  );
};

export default NewArrivals;