import React from "react";
import { Link } from "react-router-dom";

import Image from "../../designLayouts/Image";
import sales1 from "../../../assets/images/sale/sales1.jpg";
import sales2 from "../../../assets/images/sale/sales2.jpg";
import sales4 from "../../../assets/images/sale/sales4.jpg";
import giftsetPerfume from "../../../assets/images/sale/gitsetPerfume.jpg";
import menPerfume from "../../../assets/images/sale/menPerfume.jpg";
import womenPerfume from "../../../assets/images/sale/womenPerfume.jpg";
const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      {/* Left Section */}
      <div className="w-full md:w-2/3 lg:w-1/2 h-full">
        <Link to="/shop">
          <div className="relative">
            <Image className="h-full w-full object-cover rounded-lg" imgSrc={giftsetPerfume} />
            <button className="absolute bottom-4 left-4 bg-red-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-600 transition">
              Buy Now
            </button>
          </div>
        </Link>
      </div>
  
      {/* Right Section */}
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <div className="relative">
              <Image className="h-full w-full object-cover rounded-lg" imgSrc={menPerfume} />
              <button className="absolute bottom-4 left-4 bg-red-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-600 transition">
                Buy Now
              </button>
            </div>
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <div className="relative">
              <Image className="h-full w-full object-cover rounded-lg" imgSrc={womenPerfume} />
              <button className="absolute bottom-4 left-4 bg-red-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-600 transition">
                Buy Now
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
  
};

export default Sale;
