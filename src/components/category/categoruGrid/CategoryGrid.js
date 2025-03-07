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
  { id: 1, name: "Tools & Machining", image: tools, path: "/tools" },
  { id: 2, name: "Office & Shipping Supplies", image: office, path: "/office" },
  { id: 3, name: "Plumbing", image: plumbing, path: "/plumbing" },
  { id: 4, name: "Safety & Security", image: safety, path: "/safety" },
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
  { id: 17, name: "Hardware & Building", image: hardware, path: "/hardware" },
  { id: 18, name: "Furniture & Decor", image: furniture, path: "/furniture" },
  { id: 19, name: "Adhesives & Tapes", image: adhesives, path: "/adhesives" },
  { id: 20, name: "Welding & Soldering", image: welding, path: "/welding" },
  { id: 21, name: "Pumps", image: pumps, path: "/pumps" },
  { id: 22, name: "Paint & Coatings", image: paint, path: "/paint" },
  { id: 23, name: "Medical & Personal Care", image: medical, path: "/medical" },
  { id: 24, name: "Test Instruments", image: testInstruments, path: "/test" },
  { id: 25, name: "Lab Equipment", image: lab, path: "/lab" },
];

const CategoryGrid = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop Categories</h2>

      {/* Category Grid - All Categories Visible */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            onMouseEnter={() => setHovered(category.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => navigate(category.path)}
            className="flex flex-col items-center cursor-pointer"
          >
            {/* Animated Circular Icon with MacBook Hover Effect */}
            <motion.div
              className="w-24 h-24 flex items-center justify-center rounded-full border-4 border-gray-300 bg-white shadow-md"
              animate={{ scale: hovered === category.id ? 1.4 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <img src={category.image} alt={category.name} className="w-16 h-16 object-contain" />
            </motion.div>
            <p className="mt-2 text-lg font-medium text-gray-700">{category.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
