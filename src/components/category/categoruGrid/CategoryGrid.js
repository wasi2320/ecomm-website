import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
  { id: 1, name: "Tools & Machining", image: tools, path: "/category/electronics" },
  { id: 2, name: "Office & Shipping Supplies", image: office, path: "/category/office" },
  { id: 3, name: "Plumbing", image: plumbing, path: "/category/plumbing" },
  { id: 4, name: "Safety & Security", image: safety, path: "/category/safety" },
  { id: 5, name: "Vehicle Maintenance", image: vehicle, path: "/category/vehicle" },
  { id: 6, name: "Grounds & Outdoor", image: ground, path: "/category/grounds" },
  { id: 7, name: "Heating & Cooling", image: heating, path: "/category/heating" },
  { id: 8, name: "Electrical Supplies", image: electrical, path: "/category/electrical" },
  { id: 9, name: "Power Transmission", image: power, path: "/category/power" },
  { id: 10, name: "Storage & Workspace", image: storage, path: "/category/storage" },
  { id: 11, name: "Material Handling", image: material, path: "/category/material" },
  { id: 12, name: "Electronics", image: electronics, path: "/category/electronics" },
  { id: 13, name: "Lighting", image: lighting, path: "/category/lighting" },
  { id: 14, name: "Janitorial & Cleaning", image: janitorial, path: "/category/cleaning" },
  { id: 15, name: "Raw Materials", image: raw, path: "/category/raw" },
  { id: 16, name: "Food Service", image: foodService, path: "/category/food" },
  { id: 17, name: "Hardware & Building", image: hardware, path: "/category/hardware" },
  { id: 18, name: "Furniture & Decor", image: furniture, path: "/category/furniture" },
  { id: 19, name: "Adhesives & Tapes", image: adhesives, path: "/category/adhesives" },
  { id: 20, name: "Welding & Soldering", image: welding, path: "/category/welding" },
  { id: 21, name: "Pumps", image: pumps, path: "/category/pumps" },
  { id: 22, name: "Paint & Coatings", image: paint, path: "/category/paint" },
  { id: 23, name: "Medical & Personal Care", image: medical, path: "/category/medical" },
  { id: 24, name: "Test Instruments", image: testInstruments, path: "/category/test" },
  { id: 25, name: "Lab Equipment", image: lab, path: "/category/lab" },
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
