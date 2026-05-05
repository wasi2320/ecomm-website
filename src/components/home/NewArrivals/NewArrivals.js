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
  const [x, setX] = useState(0);

  useEffect(() => {
    setProducts(getRandomProducts(productsData, 12));
  }, []);

  useAnimationFrame((t, delta) => {
    if (window.innerWidth < 768) return;

    setX((prev) => {
      const speed = hovered ? 0.02 : 0.06;
      let next = prev - delta * speed;

      if (next < -1700) next = 0;

      return next;
    });
  });

  return (
    <div className="w-full py-16 sm:py-20 md:py-28 bg-[#0f0f0f] text-white overflow-hidden">

      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide">
          New Arrivals
        </h2>
        <p className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base">
          Discover our latest luxury collection
        </p>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block relative w-full overflow-hidden">
        <motion.div className="flex gap-6 lg:gap-8 px-6" style={{ x }}>
          {[...products, ...products].map((product, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(product._id)}
              onMouseLeave={() => setHovered(null)}
              className="w-[260px] lg:w-[280px] flex-shrink-0"
            >
              <div
                className={`relative h-[420px] lg:h-[440px] rounded-2xl overflow-hidden transition-all duration-500
                ${
                  hovered === product._id
                    ? "scale-105 z-20"
                    : hovered
                    ? "scale-95 opacity-50"
                    : "scale-100"
                }`}
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl" />

                <div className="relative z-10 h-full p-4 flex flex-col">
                  <div className="flex-1 flex flex-col">
                    <Product {...product} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-32 bg-gradient-to-r from-[#0f0f0f] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-32 bg-gradient-to-l from-[#0f0f0f] to-transparent" />
      </div>

      {/* MOBILE */}
      <div className="md:hidden overflow-x-auto no-scrollbar px-4">
        <div className="flex gap-4">
          {products.map((product, i) => (
            <div key={i} className="w-[200px] flex-shrink-0">
              <div className="relative h-[340px] rounded-xl overflow-hidden border border-white/10 bg-black">
                
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />

                <div className="relative z-10 h-full p-3 flex flex-col">
                  <div className="flex-1 flex flex-col">
                    <Product {...product} />
                  </div>
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