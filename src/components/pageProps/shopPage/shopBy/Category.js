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

const initialCategories = [
  { id: 1, name: "New Arrivals", image: newArrivalImg, path: "/newArrival" },
  { id: 2, name: "Gadgets", image: gadgetsImg, path: "/gadgets" },
  { id: 3, name: "Office Accessories", image: officeAccImg, path: "/officeacc" },
  { id: 4, name: "Electronics", image: electronicsImg, path: "/electronics" },
  { id: 5, name: "Others", image: othersImg, path: "/others" },
  { id: 6, name: "Perfumes", image: perfumesImg, path: "/others" },
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

      {/* Category Grid (2 Items Per Row) with Smooth Motion */}
      <div className="grid grid-cols-2 gap-10 text-center mt-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center cursor-pointer category-move transform hover:scale-105 transition-all duration-300"
            onClick={() => navigate(category.path)}
          >
            {/* Bigger Circular Category Icon */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300 hover:border-primeColor transition-all duration-300">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bigger Category Name */}
            <p className="mt-3 text-lg font-semibold text-gray-700 hover:text-primeColor transition duration-300">
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
            50% { transform: translateY(15px); }
            100% { transform: translateY(0px); }
          }

          .category-move {
            animation: moveCategories 5s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Category;
