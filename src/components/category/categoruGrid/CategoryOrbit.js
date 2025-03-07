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

const categories = [
  { id: 1, name: "Tools", image: tools, path: "/tools" },
  { id: 2, name: "Office", image: office, path: "/office" },
  { id: 3, name: "Plumbing", image: plumbing, path: "/plumbing" },
  { id: 4, name: "Safety", image: safety, path: "/safety" },
  { id: 5, name: "Vehicle", image: vehicle, path: "/vehicle" },
  { id: 6, name: "Grounds", image: ground, path: "/grounds" },
  { id: 7, name: "Heating", image: heating, path: "/heating" },
  { id: 8, name: "Electrical", image: electrical, path: "/electrical" },
  { id: 9, name: "Power Transmission", image: power, path: "/power" },
  { id: 10, name: "Storage", image: storage, path: "/storage" },
  { id: 11, name: "Material Handling", image: material, path: "/material" },
  { id: 12, name: "Electronics", image: electronics, path: "/electronics" },
  { id: 13, name: "Lighting", image: lighting, path: "/lighting" },
  { id: 14, name: "Janitorial", image: janitorial, path: "/cleaning" },
  { id: 15, name: "Raw Materials", image: raw, path: "/raw" },
  { id: 16, name: "Food Service", image: foodService, path: "/food" },
  { id: 17, name: "Hardware", image: hardware, path: "/hardware" },
  { id: 18, name: "Furniture", image: furniture, path: "/furniture" },
  { id: 19, name: "Adhesives", image: adhesives, path: "/adhesives" },
  { id: 20, name: "Welding", image: welding, path: "/welding" },
  { id: 21, name: "Pumps", image: pumps, path: "/pumps" },
  { id: 22, name: "Paint", image: paint, path: "/paint" },
  { id: 23, name: "Medical", image: medical, path: "/medical" },
  { id: 24, name: "Test Instruments", image: testInstruments, path: "/test" },
  { id: 25, name: "Lab Equipment", image: lab, path: "/lab" },
];

const CategoryOrbit = () => {
  const navigate = useNavigate();
  const radius = 500; // Adjusted radius for better spacing
  const [isPaused, setIsPaused] = useState(false);
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex justify-center items-center h-screen relative">
      {/* Center Title */}
      <div className="absolute w-64 h-64 flex justify-center items-center bg-gray-900 text-white text-2xl font-bold rounded-full shadow-lg">
        Shop Categories
      </div>

      {/* Rotating Icons */}
      {categories.map((category, index) => {
        const angle = (index / categories.length) * (2 * Math.PI);
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
            onClick={() => navigate(category.path)}
            className="absolute flex flex-col justify-center items-center cursor-pointer"
          >
            <motion.div
              className="w-20 h-20 rounded-full bg-white shadow-md flex justify-center items-center transition-all"
              animate={{ scale: hovered === category.id ? 1.4 : 1 }} // Enlarges the hovered icon
              transition={{ duration: 0.3 }}
            >
              <img src={category.image} alt={category.name} className="w-12 h-12 object-contain" />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CategoryOrbit;
