import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Import all category images
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
import perfume from "../../../assets/images/banner/perfume.jpg";


const categories = [
  { id: 1, name: "Tools", image: tools },
  { id: 2, name: "Office", image: office },
  { id: 3, name: "Plumbing", image: plumbing },
  { id: 4, name: "Safety", image: safety },
  { id: 5, name: "Grounds", image: ground },
  { id: 6, name: "Electronics", image: electronics },
  { id: 7, name: "Janitorial", image: janitorial },
  { id: 8, name: "Food Service", image: foodService },
  { id: 9, name: "Lab Equipment", image: lab },
  { id: 10, name: "Perfumes", image: perfume},
];

const CategoryOrbit = () => {
  const navigate = useNavigate();
  const [isPaused, setIsPaused] = useState(false);
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex justify-center items-center h-screen relative">
      {/* Center Button (Clickable) */}
      <motion.div
        className="absolute flex justify-center items-center bg-gray-900 text-white text-xl font-bold rounded-full shadow-lg cursor-pointer"
        initial={{ width: 150, height: 150 }}
        animate={{ width: ["150px", "170px", "150px"], height: ["150px", "170px", "150px"] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={() => navigate("/categories")} // Redirects to category page
      >
        Shop Categories
      </motion.div>

      {/* Rotating Icons */}
      {categories.map((category, index) => {
        const angle = (index / categories.length) * (2 * Math.PI);
        const radius = window.innerWidth < 768 ? 200 : 400; // Smaller radius for mobile
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={category.id}
            initial={{ x, y }}
            animate={isPaused ? { x, y } : { x: [x, -x, x], y: [y, -y, y] }}
            transition={{
              repeat: isPaused ? 0 : Infinity,
              duration: 10,
              ease: "linear",
            }}
            onMouseEnter={() => {
              setIsPaused(true);
              setHovered(category.id);
            }}
            onMouseLeave={() => {
              setIsPaused(false);
              setHovered(null);
            }}
            className="absolute flex flex-col justify-center items-center"
          >
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-md flex justify-center items-center transition-all"
              animate={{ scale: hovered === category.id ? 1.4 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <img src={category.image} alt={category.name} className="w-10 h-10 object-contain" />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CategoryOrbit;
