import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Import category images
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
  // { id: 1, name: "Tools & Machining", image: tools, path: "/category/tools" },
  //   { id: 2, name: "Office, School & Shipping Supplies", image: office, path: "/category/office" },
  //   { id: 3, name: "Plumbing", image: plumbing, path: "/category/plumbing" },
  //   { id: 4, name: "Safety", image: safety, path: "/category/safety" },
  //   { id: 5, name: "Grounds & Outdoor", image: ground, path: "/category/grounds" },
  //   { id: 6, name: "Electronics", image: electronics, path: "/category/electronics" },
  //   { id: 7, name: "Janitorial & Cleaning Supplies", image: janitorial, path: "/category/cleaning" },
  //   { id: 8, name: "Food Service & Restaurant Supplies", image: foodService, path: "/category/food" },
  //   { id: 9, name: "Test Instruments & Gauges", image: testInstruments, path: "/category/test" },
    { id: 10, name: "Giftsets", image: perfume, path: "/category/perfumes" },
    { id: 11, name: "Man Perfume", image: men, path: "/category/male" },
    { id: 12, name: "Woman Perfume", image: women, path: "/category/female" },
    { id: 13, name: "Tester", image: test, path: "/category/tester" },
    { id: 14, name: "Childern", image: children, path: "/category/children" },
  
];

const CategoryGrid = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full bg-gray-100 px-4 py-6">
      {/* Centered Title */}
      <h2 className="text-2xl font-bold mb-6 text-center">Shop Categories</h2>

      {/* Category Grid - Responsive Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            onMouseEnter={() => setHovered(category.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => navigate(category.path)}
            className="flex flex-col items-center cursor-pointer"
          >
            {/* Animated Circular Icon */}
            <motion.div
              className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full border-4 border-gray-300 bg-white shadow-md"
              animate={{ scale: hovered === category.id ? 1.3 : 1 }} // MacBook hover effect
              transition={{ duration: 0.3 }}
            >
              <img src={category.image} alt={category.name} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
            </motion.div>
            {/* Category Name */}
            <p className="mt-2 text-sm sm:text-base font-medium text-gray-700 text-center">{category.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
