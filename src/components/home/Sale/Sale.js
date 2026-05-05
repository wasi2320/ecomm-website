import React from "react";
import { Link } from "react-router-dom";

import giftsetPerfume from "../../../assets/images/sale/giftset2.jpg";
import menPerfume from "../../../assets/images/sale/menPerfume.jpg";
import womenPerfume from "../../../assets/images/sale/womenPerfume.jpg";
import childrenPerfume from "../../../assets/images/sale/children.jpg";

const Sale = () => {
  const items = [
    { img: giftsetPerfume, link: "/category/perfumes", title: "Gift Sets" },
    { img: childrenPerfume, link: "/category/children", title: "Kids" },
    { img: menPerfume, link: "/category/male", title: "Men" },
    { img: womenPerfume, link: "/category/female", title: "Women" },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 bg-[#0f0f0f]">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {items.map((item, index) => (
          <Link to={item.link} key={index}>
            
            <div
              className="relative group h-[220px] sm:h-[260px] md:h-[300px] rounded-xl overflow-hidden 
              border border-white/10 bg-black transition duration-300"
            >
              
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* HOVER OVERLAY (DESKTOP ONLY FEEL) */}
              <div className="absolute inset-0 bg-black/20 md:group-hover:bg-black/40 transition duration-300" />

              {/* CONTENT */}
              <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 left-4 sm:left-5 md:left-6 text-white z-10">
                <h3 className="text-base sm:text-lg font-semibold tracking-wide font-titleFont">
                  {item.title}
                </h3>

                <button className="mt-2 sm:mt-3 text-[11px] sm:text-xs border border-white px-3 sm:px-4 py-1.5 transition hover:bg-white hover:text-black">
                  Shop Now
                </button>
              </div>

              {/* TOP GLOW */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 md:group-hover:opacity-100 transition duration-300" />

            </div>

          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sale;