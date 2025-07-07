import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavTitle from "./NavTitle";

// Import category images (Replace with actual paths)
import tools from "../../../../assets/images/categoryGird2/tools.png";
import office from "../../../../assets/images/categoryGird2/office-and-shipping.png";
import plumbing from "../../../../assets/images/categoryGird2/plumbing-and-hvac.png";
import safety from "../../../../assets/images/categoryGird2/safety-and-security.png";
import ground from "../../../../assets/images/categoryGird2/grounds-maintenance-and-outdoor-equipment.png";
import electronics from "../../../../assets/images/categoryGird2/monitors-displays-and-projectors.png";
import janitorial from "../../../../assets/images/categoryGird2/cleaning-supplies.png";
import foodService from "../../../../assets/images/categoryGird2/G5201001.png";
import testInstruments from "../../../../assets/images/categoryGird2/test-instruments-and-gauges.png";
import perfume from "../../../../assets/images/giftsets/gs4.jpg";
import men from "../../../../assets/images/menPerfume/men2.jpg";
import women from "../../../../assets/images/womenPerfume/women2.jpg";
import test from "../../../../assets/images/tester/test2.jpg";
import children from "../../../../assets/images/children/ch2.jpg";
// Initial categories without swapping functionality
const initialCategories = [
  // { id: 1, name: "Tools & Machining", image: tools, path: "/category/tools" },
  // { id: 2, name: "Office, School & Shipping Supplies", image: office, path: "/category/office" },
  // { id: 3, name: "Plumbing", image: plumbing, path: "/category/plumbing" },
  // { id: 4, name: "Safety", image: safety, path: "/category/safety" },
  // { id: 5, name: "Grounds & Outdoor", image: ground, path: "/category/grounds" },
  // { id: 6, name: "Electronics", image: electronics, path: "/category/electronics" },
  // { id: 7, name: "Janitorial & Cleaning Supplies", image: janitorial, path: "/category/cleaning" },
  // { id: 8, name: "Food Service & Restaurant Supplies", image: foodService, path: "/category/food" },
  // { id: 9, name: "Test Instruments & Gauges", image: testInstruments, path: "/category/test" },
  { id: 9, name: "Giftsets", image: perfume, path: "/category/perfumes" },
  { id: 10, name: "Man's", image: men, path: "/category/Male" },
  { id: 11, name: "Woman's", image: women, path: "/category/female" },
  { id: 13, name: "Tester", image: test, path: "/category/tester" },
  { id: 13, name: "Childern", image: children, path: "/category/children" },
  
  
];

const Category = () => {
  const navigate = useNavigate();
  const [categories] = useState(initialCategories); // Static categories without shuffling

  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" icons={false} />
  
      {/* Category Grid (2 Items Per Row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-12 text-center mt-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate(category.path)}
          >
            {/* Circular Background Around the Icon */}
            <div className="w-24 h-24 flex items-center justify-center rounded-full border-4 border-gray-300 hover:border-primeColor transition-all duration-300 bg-white shadow-md">
              <img
                src={category.image}
                alt={category.name}
                className="w-16 h-16 object-contain"
              />
            </div>
            {/* Category Name */}
            <p className="mt-2 text-sm font-semibold text-gray-700 hover:text-primeColor transition duration-300">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Category;
