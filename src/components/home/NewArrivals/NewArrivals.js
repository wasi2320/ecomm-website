import React, { useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import Product from "../Products/Product";
import productsData from "../../category/productsData";

const getRandomProducts = (products, count) => {
  const allProducts = Object.values(products).flat();
  return [...allProducts].sort(() => 0.5 - Math.random()).slice(0, count);
};

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [hovered, setHovered] = useState(null);

  // scroll position
  const [x, setX] = useState(0);

  useEffect(() => {
    setProducts(getRandomProducts(productsData, 12));
  }, []);

  // 🔥 ultra smooth continuous scroll
  useAnimationFrame((t, delta) => {
    setX((prev) => {
      const speed = hovered ? 0.02 : 0.06; // slow on hover
      let next = prev - delta * speed;

      // infinite loop reset
      if (next < -2000) next = 0;

      return next;
    });
  });

  return (
    <div className="w-full py-28 bg-[#0f0f0f] text-white overflow-hidden">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-wide">
          New Arrivals
        </h2>
        <p className="text-gray-500 mt-3">
          Discover our latest luxury collection
        </p>
      </div>

      {/* 🔥 FLOWING TRACK */}
      <div className="relative w-full overflow-hidden">

        <motion.div
          className="flex gap-10 px-6"
          style={{ x }}
        >
          {[...products, ...products].map((product, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(product._id)}
              onMouseLeave={() => setHovered(null)}
              className="min-w-[300px]"
            >
              <div
                className={`relative h-[460px] rounded-2xl overflow-hidden 
                transition-all duration-500
                ${
                  hovered === product._id
                    ? "scale-110 z-20"
                    : hovered
                    ? "scale-95 opacity-50"
                    : "scale-100"
                }`}
              >
                {/* Glass */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl" />

                {/* Content */}
                <div className="relative z-10 h-full p-4 flex flex-col">
                  <div className="flex-1 overflow-hidden">
                    <Product {...product} />
                  </div>
                </div>

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 pointer-events-none">
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* 🔥 EDGE FADE (PREMIUM TOUCH) */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0f0f0f] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0f0f0f] to-transparent" />

      </div>
    </div>
  );
};

export default NewArrivals;