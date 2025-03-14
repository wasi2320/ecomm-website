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
import vehicle from "../../../assets/images/categoryGird2/automotive-belts.png";
import ground from "../../../assets/images/categoryGird2/grounds-maintenance-and-outdoor-equipment.png";
import heating from "../../../assets/images/categoryGird2/fans-and-HVAC-equipment.png";
import electrical from "../../../assets/images/categoryGird2/G2165773.png";
import power from "../../../assets/images/categoryGird2/power-transmission-and-pneumatics.png";
import storage from "../../../assets/images/categoryGird2/storage-shelving-ladders-and-lifts.png";
import material from "../../../assets/images/categoryGird2/G4370934.png";
import electronics from "../../../assets/images/categoryGird2/monitors-displays-and-projectors.png";
import lighting from "../../../assets/images/categoryGird2/lighting equipment.png";
import janitorial from "../../../assets/images/categoryGird2/cleaning-supplies.png";
import raw from "../../../assets/images/categoryGird2/raw-materials.png";
import foodService from "../../../assets/images/categoryGird2/G5201001.png";
import hardware from "../../../assets/images/categoryGird2/hardware.png";
import furniture from "../../../assets/images/categoryGird2/tables.png";
import adhesives from "../../../assets/images/categoryGird2/adhesives-and-sealants.png";
import welding from "../../../assets/images/categoryGird2/welding-and-soldering-equipment-and-supplies.png";
import pumps from "../../../assets/images/categoryGird2/pumps.png";
import paint from "../../../assets/images/categoryGird2/paint.png";
import medical from "../../../assets/images/categoryGird2/medical and personal care.png";
import testInstruments from "../../../assets/images/categoryGird2/test-instruments-and-gauges.png";
import lab from "../../../assets/images/categoryGird2/G5940842.png";

const categories = [
  { id: 1, name: "Tools & Machining", image: tools, path: "/tools" },
  { id: 2, name: "Office & Shipping Supplies", image: office, path: "/office" },
  { id: 3, name: "Plumbing", image: plumbing, path: "/plumbing" },
  { id: 4, name: "Safety", image: safety, path: "/safety" },
  { id: 5, name: "Vehicle Maintenance", image: vehicle, path: "/vehicle" },
  { id: 6, name: "Grounds & Outdoor", image: ground, path: "/grounds" },
  { id: 7, name: "Heating & Cooling", image: heating, path: "/heating" },
  { id: 8, name: "Electrical Supplies", image: electrical, path: "/electrical" },
  { id: 9, name: "Power Transmission", image: power, path: "/power" },
  { id: 10, name: "Storage & Workspace", image: storage, path: "/storage" },
  { id: 11, name: "Material Handling", image: material, path: "/material" },
  { id: 12, name: "Electronics", image: electronics, path: "/electronics" },
  { id: 13, name: "Lighting", image: lighting, path: "/lighting" },
  { id: 14, name: "Janitorial & Cleaning", image: janitorial, path: "/cleaning" },
  { id: 15, name: "Raw Materials", image: raw, path: "/raw" },
  { id: 16, name: "Food Service", image: foodService, path: "/food" },
  { id: 17, name: "Hardware", image: hardware, path: "/hardware" },
  { id: 18, name: "Furniture & Decor", image: furniture, path: "/furniture" },
  { id: 19, name: "Adhesives & Tapes", image: adhesives, path: "/adhesives" },
  { id: 20, name: "Welding & Soldering", image: welding, path: "/welding" },
  { id: 21, name: "Pumps", image: pumps, path: "/pumps" },
  { id: 22, name: "Paint & Coatings", image: paint, path: "/paint" },
  { id: 23, name: "Medical & Personal Care", image: medical, path: "/medical" },
  { id: 24, name: "Test Instruments", image: testInstruments, path: "/test" },
  { id: 25, name: "Lab Equipment", image: lab, path: "/lab" },
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
