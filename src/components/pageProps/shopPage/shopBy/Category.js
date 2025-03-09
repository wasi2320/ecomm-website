import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavTitle from "./NavTitle";

// Import category images (Replace with actual paths)
import tools from "../../../../assets/images/categoryGird2/tools.png";
import office from "../../../../assets/images/categoryGird2/office-and-shipping.png";
import plumbing from "../../../../assets/images/categoryGird2/plumbing-and-hvac.png";
import safety from "../../../../assets/images/categoryGird2/safety-and-security.png";
import vehicle from "../../../../assets/images/categoryGird2/automotive-belts.png";
import ground from "../../../../assets/images/categoryGird2/grounds-maintenance-and-outdoor-equipment.png";
import heating from "../../../../assets/images/categoryGird2/fans-and-HVAC-equipment.png";
import electrical from "../../../../assets/images/categoryGird2/G2165773.png";
import power from "../../../../assets/images/categoryGird2/power-transmission-and-pneumatics.png";
import storage from "../../../../assets/images/categoryGird2/storage-shelving-ladders-and-lifts.png";
import material from "../../../../assets/images/categoryGird2/G4370934.png";
import electronics from "../../../../assets/images/categoryGird2/monitors-displays-and-projectors.png";
import lighting from "../../../../assets/images/categoryGird2/lighting equipment.png";
import janitorial from "../../../../assets/images/categoryGird2/cleaning-supplies.png";
import raw from "../../../../assets/images/categoryGird2/raw-materials.png";
import foodService from "../../../../assets/images/categoryGird2/G5201001.png";
import hardware from "../../../../assets/images/categoryGird2/hardware.png";
import furniture from "../../../../assets/images/categoryGird2/tables.png";
import adhesives from "../../../../assets/images/categoryGird2/adhesives-and-sealants.png";
import welding from "../../../../assets/images/categoryGird2/welding-and-soldering-equipment-and-supplies.png";
import pumps from "../../../../assets/images/categoryGird2/pumps.png";
import paint from "../../../../assets/images/categoryGird2/paint.png";
import medical from "../../../../assets/images/categoryGird2/medical and personal care.png";
import testInstruments from "../../../../assets/images/categoryGird2/test-instruments-and-gauges.png";
import lab from "../../../../assets/images/categoryGird2/G5940842.png";

// Initial categories without swapping functionality
const initialCategories = [
  { id: 1, name: "Tools & Machining", image: tools, path: "/category/tools" },
  { id: 2, name: "Office, School & Shipping Supplies", image: office, path: "/category/office" },
  { id: 3, name: "Plumbing", image: plumbing, path: "/category/plumbing" },
  { id: 4, name: "Safety", image: safety, path: "/category/safety" },
  { id: 5, name: "Vehicle Maintenance", image: vehicle, path: "/category/vehicle" },
  { id: 6, name: "Grounds & Outdoor", image: ground, path: "/category/grounds" },
  { id: 7, name: "Heating & Cooling", image: heating, path: "/category/heating" },
  { id: 8, name: "Electrical Supplies", image: electrical, path: "/category/electrical" },
  { id: 9, name: "Power Transmission", image: power, path: "/category/power" },
  { id: 10, name: "Storage & Workspace", image: storage, path: "/category/storage" },
  { id: 11, name: "Material Handling", image: material, path: "/category/material" },
  { id: 12, name: "Electronics", image: electronics, path: "/category/electronics" },
  { id: 13, name: "Lighting", image: lighting, path: "/category/lighting" },
  { id: 14, name: "Janitorial & Cleaning Supplies", image: janitorial, path: "/category/cleaning" },
  { id: 15, name: "Raw Materials", image: raw, path: "/category/raw" },
  { id: 16, name: "Food Service & Restaurant Supplies", image: foodService, path: "/category/food" },
  { id: 17, name: "Hardware & Building Materials", image: hardware, path: "/category/hardware" },
  { id: 18, name: "Furniture, Linens & Decor", image: furniture, path: "/category/furniture" },
  { id: 19, name: "Adhesives & Tapes", image: adhesives, path: "/category/adhesives" },
  { id: 20, name: "Welding, Soldering & Brazing", image: welding, path: "/category/welding" },
  { id: 21, name: "Pumps", image: pumps, path: "/category/pumps" },
  { id: 22, name: "Paint, Coatings & Supplies", image: paint, path: "/category/paint" },
  { id: 23, name: "Medical & Personal Care", image: medical, path: "/category/medical" },
  { id: 24, name: "Test Instruments & Gauges", image: testInstruments, path: "/category/test" },
  { id: 25, name: "Lab Equipment & Supplies", image: lab, path: "/category/lab" },
];

const Category = () => {
  const navigate = useNavigate();
  const [categories] = useState(initialCategories); // Static categories without shuffling

  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" icons={false} />
  
      {/* Category Grid (4 Items Per Row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 text-center mt-6">
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
