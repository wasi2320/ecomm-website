import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// images (same as yours)
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

const CategoryCard = ({ category, navigate }) => {
  const [style, setStyle] = useState({});

  const isMobile = window.innerWidth < 768;

  const handleMouseMove = (e) => {
    if (isMobile) return; // ❌ disable tilt on mobile

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 12;
    const rotateY = (x - centerX) / 12;

    const translateX = (x - centerX) / 10;
    const translateY = (y - centerY) / 10;

    setStyle({
      transform: `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateX(${translateX}px)
        translateY(${translateY}px)
        scale(1.04)
      `,
    });
  };

  const resetStyle = () => {
    setStyle({
      transform:
        "perspective(1000px) rotateX(0) rotateY(0) translateX(0) translateY(0) scale(1)",
      transition: "all 0.4s ease",
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetStyle}
      onClick={() => navigate(category.path)}
      className="cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <div
        style={style}
        className="relative 
        h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px]   /* ✅ equal height */
        rounded-xl sm:rounded-2xl overflow-hidden 
        bg-white/5 backdrop-blur-md border border-white/10
        transition-all duration-300 will-change-transform"
      >
        {/* IMAGE */}
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover opacity-80"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* TITLE */}
        <div className="absolute bottom-3 sm:bottom-4 left-2 right-2 text-center px-2">
          <h3 className="text-[11px] sm:text-xs md:text-sm lg:text-base font-medium text-white leading-tight line-clamp-2">
            {category.name}
          </h3>
        </div>

        {/* GLOW (desktop only) */}
        <div className="hidden md:block absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 pointer-events-none">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

const CategoryGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#0f0f0f] px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 text-white">

      {/* HEADING */}
      <div className="max-w-7xl mx-auto mb-10 sm:mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
          Shop Categories
        </h2>
        <p className="text-gray-400 mt-2 text-xs sm:text-sm">
          Explore our premium collections
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto 
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