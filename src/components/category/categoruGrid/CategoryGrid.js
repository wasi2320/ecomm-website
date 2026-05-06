import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

// images
import tools from "../../../assets/images/categoryGird2/tools.png";
import office from "../../../assets/images/categoryGird2/office-and-shipping.png";
import plumbing from "../../../assets/images/categoryGird2/plumbing-and-hvac.png";
import safety from "../../../assets/images/categoryGird2/safety-and-security.png";
import ground from "../../../assets/images/categoryGird2/grounds-maintenance-and-outdoor-equipment.png";
import electronics from "../../../assets/images/categoryGird2/monitors-displays-and-projectors.png";
import janitorial from "../../../assets/images/categoryGird2/cleaning-supplies.png";
import foodService from "../../../assets/images/categoryGird2/G5201001.png";
import testInstruments from "../../../assets/images/categoryGird2/test-instruments-and-gauges.png";
import perfume from "../../../assets/images/giftsets/gs4.jpg";
import men from "../../../assets/images/menPerfume/men2.jpg";
import women from "../../../assets/images/womenPerfume/women2.jpg";
import test from "../../../assets/images/tester/test2.jpg";
import children from "../../../assets/images/children/ch2.jpg";

const categories = [
  { id: 1, name: "Tools & Machining", image: tools, path: "/category/tools" },
  { id: 2, name: "Office Supplies", image: office, path: "/category/office" },
  { id: 3, name: "Plumbing", image: plumbing, path: "/category/plumbing" },
  { id: 4, name: "Safety", image: safety, path: "/category/safety" },
  { id: 5, name: "Outdoor", image: ground, path: "/category/grounds" },
  { id: 6, name: "Electronics", image: electronics, path: "/category/electronics" },
  { id: 7, name: "Cleaning", image: janitorial, path: "/category/cleaning" },
  { id: 8, name: "Food Service", image: foodService, path: "/category/food" },
  { id: 9, name: "Instruments", image: testInstruments, path: "/category/test" },
  { id: 10, name: "Giftsets", image: perfume, path: "/category/perfumes" },
  { id: 11, name: "Men Perfume", image: men, path: "/category/male" },
  { id: 12, name: "Women Perfume", image: women, path: "/category/female" },
  { id: 13, name: "Tester", image: test, path: "/category/tester" },
  { id: 14, name: "Children", image: children, path: "/category/children" },
];

// 🔥 ULTRA SMOOTH CARD
const CategoryCard = ({ category, navigate }) => {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  // motion values (no re-render)
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // smooth springs
  const smoothRotateX = useSpring(rotateX, { stiffness: 120, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 120, damping: 20 });
  const smoothX = useSpring(x, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(-(py - centerY) / 10);
    rotateY.set((px - centerX) / 10);

    x.set((px - centerX) / 8);
    y.set((py - centerY) / 8);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onClick={() => navigate(category.path)}
      className="cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          x: smoothX,
          y: smoothY,
        }}
        whileHover={{ scale: 1.05 }}
        className="relative 
        h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px]
        rounded-xl sm:rounded-2xl overflow-hidden
        bg-white/5 backdrop-blur-md border border-white/10
        will-change-transform transform-gpu"
      >
        {/* IMAGE */}
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* TITLE */}
        <div className="absolute bottom-3 sm:bottom-4 left-2 right-2 text-center px-2">
          <h3 className="text-[11px] sm:text-xs md:text-sm lg:text-base font-medium text-white leading-tight line-clamp-2">
            {category.name}
          </h3>
        </div>

        {/* 🔥 LIGHT REFLECTION */}
        <motion.div
          className="hidden md:block absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15), transparent 60%)",
          }}
        />
      </motion.div>
    </div>
  );
};

const CategoryGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#0f0f0f] px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 text-white">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10 sm:mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
          Shop Categories
        </h2>
        <p className="text-gray-400 mt-2 text-xs sm:text-sm">
          Explore our premium collections
        </p>
      </div>

      {/* GRID */}
      <div
        className="max-w-7xl mx-auto 
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
        gap-4 sm:gap-6 md:gap-8"
      >
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            navigate={navigate}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;