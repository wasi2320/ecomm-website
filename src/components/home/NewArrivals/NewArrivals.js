import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useAnimationFrame,
} from "framer-motion";
import Product from "../Products/Product";
import productsData from "../../category/productsData";

// 🔥 RANDOM PRODUCTS
const getRandomProducts = (products, count) => {
  const allProducts = Object.values(products).flat();
  return [...allProducts].sort(() => 0.5 - Math.random()).slice(0, count);
};

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [hovered, setHovered] = useState(false);

  // 🔥 MOTION VALUE
  const baseX = useMotionValue(0);

  // 🔥 ULTRA SMOOTH SPRING
  const x = useSpring(baseX, {
    stiffness: 15,
    damping: 50,
    mass: 1.5,
  });

  useEffect(() => {
    setProducts(getRandomProducts(productsData, 10));
  }, []);

  // 🔥 EXACT WIDTH (VERY IMPORTANT)
  const CARD_WIDTH = 260 + 32; // card + gap-8
  const loopWidth = CARD_WIDTH * products.length;

  // 🔥 CONSTANT SPEED (PIXELS PER SECOND)
  const SPEED = 40;

  useAnimationFrame((t, delta) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    if (hovered || products.length === 0) return;

    const moveBy = (delta / 1000) * SPEED;

    let next = baseX.get() - moveBy;

    // ✅ PERFECT INFINITE LOOP
    if (next <= -loopWidth) {
      next += loopWidth;
    }

    baseX.set(next);
  });

  return (
    <div className="w-full py-20 bg-[#0f0f0f] text-white overflow-hidden">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 mb-14">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-wide">
          New Arrivals
        </h2>
        <p className="text-gray-500 mt-3">
          Discover our latest premium collection
        </p>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block relative overflow-hidden">
        
        <motion.div
          style={{ x }}
          className="flex gap-8 px-6 will-change-transform transform-gpu"
        >
          {[...products, ...products].map((product, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="w-[260px] flex-shrink-0 group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative h-[420px] rounded-2xl overflow-hidden"
              >
                {/* GLASS */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl" />

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute inset-0 bg-white/10 blur-xl" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 h-full p-4 flex flex-col">
                  <Product {...product} />
                </div>

                {/* SHIMMER */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -left-[150%] top-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 group-hover:animate-shimmer" />
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* EDGE FADE */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0f0f0f] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0f0f0f] to-transparent" />
      </div>

      {/* MOBILE */}
      <div className="md:hidden overflow-x-auto no-scrollbar px-4">
        <div className="flex gap-4">
          {products.map((product, i) => (
            <div key={i} className="w-[200px] flex-shrink-0">
              <div className="relative h-[340px] rounded-xl overflow-hidden border border-white/10 bg-black">
                
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

                <div className="relative z-10 h-full p-3">
                  <Product {...product} />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default NewArrivals;