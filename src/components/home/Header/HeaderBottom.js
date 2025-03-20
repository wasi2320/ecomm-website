import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import logo from "../../../assets/images/RTC.png"; // Add your logo here

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
import perfume from "../../../assets/images/banner/perfume.jpg";
const categories = [
 { id: 1, name: "Tools & Machining", image: tools, path: "/category/tools" },
    { id: 2, name: "Office, School & Shipping Supplies", image: office, path: "/category/office" },
    { id: 3, name: "Plumbing", image: plumbing, path: "/category/plumbing" },
    { id: 4, name: "Safety", image: safety, path: "/category/safety" },
    { id: 5, name: "Grounds & Outdoor", image: ground, path: "/category/grounds" },
    { id: 6, name: "Electronics", image: electronics, path: "/category/electronics" },
    { id: 7, name: "Janitorial & Cleaning Supplies", image: janitorial, path: "/category/cleaning" },
    { id: 8, name: "Food Service & Restaurant Supplies", image: foodService, path: "/category/food" },
    { id: 9, name: "Test Instruments & Gauges", image: testInstruments, path: "/category/test" },
    { id: 10, name: "Perfumes", image: perfume, path: "/category/perfumes" },
];

const HeaderBottom = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#F5F5F3] relative">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-row items-center justify-between w-full px-4 h-16 lg:h-24">
          
          

          {/* Category Dropdown */}
          <div
            onClick={() => setShow(!show)}
            className="flex h-10 cursor-pointer items-center gap-2 text-primeColor relative"
          >
            <HiOutlineMenuAlt4 className="w-5 h-5" />
            <p className="text-[14px] font-normal hidden sm:block">Categories</p>

            {/* Dropdown Menu */}
            {show && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-12 left-0 z-50 bg-primeColor w-56 text-[#767676] h-auto p-4 pb-6"
              >
                {categories.map((category) => (
                  <li
                    key={category.id}
                    className="flex items-center gap-2 px-4 py-2 border-b border-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer"
                    onClick={() => navigate(category.path)}
                  >
                    <img src={category.image} alt={category.name} className="w-6 h-6 object-contain" />
                    {category.name}
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
