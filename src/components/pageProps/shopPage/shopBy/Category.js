import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavTitle from "./NavTitle";

// Import category images (Replace with actual paths)
import newArrivalImg from "../../../../assets/images/banner/newArr.jpg";
import gadgetsImg from "../../../../assets/images/banner/gadgets.jpg";
import officeAccImg from "../../../../assets/images/banner/officeAcc.jpg";
import electronicsImg from "../../../../assets/images/banner/electronicLogo.jpg";
import othersImg from "../../../../assets/images/banner/others.jpg";
import perfumesImg from "../../../../assets/images/banner/perfume.jpg";

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
const initialCategories = [
  { id: 1, name: "Tools & Machining", image: tools, path: "/tools" },
  { id: 2, name: "Office, School & Shipping Supplies", image: office, path: "/office" },
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
  { id: 14, name: "Janitorial & Cleaning Supplies", image: janitorial, path: "/cleaning" },
  { id: 15, name: "Raw Materials", image: raw, path: "/raw" },
  { id: 16, name: "Food Service & Restaurant Supplies", image: foodService, path: "/food" },
  { id: 17, name: "Hardware & Building Materials", image: hardware, path: "/hardware" },
  { id: 18, name: "Furniture, Linens & Decor", image: furniture, path: "/furniture" },
  { id: 19, name: "Adhesives & Tapes", image: adhesives, path: "/adhesives" },
  { id: 20, name: "Welding, Soldering & Brazing", image: welding, path: "/welding" },
  { id: 21, name: "Pumps", image: pumps, path: "/pumps" },
  { id: 22, name: "Paint, Coatings & Supplies", image: paint, path: "/paint" },
  { id: 23, name: "Medical & Personal Care", image: medical, path: "/medical" },
  { id: 24, name: "Test Instruments & Gauges", image: testInstruments, path: "/test" },
  { id: 25, name: "Lab Equipment & Supplies", image: lab, path: "/lab" },
];




const Category = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState(initialCategories);

  // Function to shuffle categories smoothly every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCategories((prevCategories) => {
        let shuffled = [...prevCategories];
        let temp = shuffled[0];
        for (let i = 0; i < shuffled.length - 1; i++) {
          shuffled[i] = shuffled[i + 1];
        }
        shuffled[shuffled.length - 1] = temp;
        return shuffled;
      });
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" icons={false} />
  
      {/* Category Grid (4 Items Per Row) with Smooth Motion */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 text-center mt-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center cursor-pointer category-move transform hover:scale-105 transition-all duration-300"
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
  
      {/* Add Global Styles for Smooth Motion */}
      <style>
        {`
          @keyframes moveCategories {
            0% { transform: translateY(0px); }
            50% { transform: translateY(10px); }
            100% { transform: translateY(0px); }
          }
  
          .category-move {
            animation: moveCategories 4s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
  
};

export default Category;
