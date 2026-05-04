import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 12;
    const rotateY = (x - centerX) / 12;

    // Magnetic pull
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
      transform: "perspective(1000px) rotateX(0) rotateY(0) translateX(0) translateY(0) scale(1)",
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
        className="relative h-[180px] rounded-2xl overflow-hidden 
        bg-white/5 backdrop-blur-md border border-white/10
        transition-all duration-300 will-change-transform"
      >
        {/* Image */}
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover opacity-80"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Title */}
        <div className="absolute bottom-4 left-4 right-4 text-center">
          <h3 className="text-sm md:text-base font-medium tracking-wide text-white">
            {category.name}
          </h3>
        </div>

        {/* Glow */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 pointer-events-none">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

const CategoryGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#0f0f0f] px-6 py-16 text-white">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
          Shop Categories
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Explore our premium collections
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
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