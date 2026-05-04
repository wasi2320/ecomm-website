import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Flex from "../../designLayouts/Flex";
import { useNavigate } from "react-router-dom";

// Images
import tools from "../../../assets/images/categoryGird2/tools.png";
import office from "../../../assets/images/categoryGird2/office-and-shipping.png";
import plumbing from "../../../assets/images/categoryGird2/plumbing-and-hvac.png";
import safety from "../../../assets/images/categoryGird2/safety-and-security.png";
import ground from "../../../assets/images/categoryGird2/grounds-maintenance-and-outdoor-equipment.png";
import electronics from "../../../assets/images/categoryGird2/monitors-displays-and-projectors.png";
import janitorial from "../../../assets/images/categoryGird2/cleaning-supplies.png";
import perfume from "../../../assets/images/giftsets/gs4.jpg";

const categories = [
  {
    name: "Tools & Machining",
    key: "tools",
    image: tools,
    sections: [
      { title: "Hand Tools", items: ["Hammer", "Wrench", "Pliers"] },
      { title: "Power Tools", items: ["Drill", "Grinder", "Saw"] },
    ],
  },
  {
    name: "Office Supplies",
    key: "office",
    image: office,
    sections: [
      { title: "Stationery", items: ["Pens", "Paper", "Files"] },
      { title: "Furniture", items: ["Chair", "Desk"] },
    ],
  },
  {
    name: "Plumbing",
    key: "plumbing",
    image: plumbing,
    sections: [
      { title: "Pipes", items: ["PVC", "Steel"] },
      { title: "Fittings", items: ["Elbow", "Adapters"] },
    ],
  },
  {
    name: "Safety",
    key: "safety",
    image: safety,
    sections: [
      { title: "Protection", items: ["Gloves", "Helmet"] },
      { title: "Security", items: ["CCTV", "Alarms"] },
    ],
  },
  {
    name: "Outdoor",
    key: "grounds",
    image: ground,
    sections: [
      { title: "Gardening", items: ["Seeds", "Tools"] },
      { title: "Equipment", items: ["Mowers", "Trimmers"] },
    ],
  },
  {
    name: "Electronics",
    key: "electronics",
    image: electronics,
    sections: [
      { title: "Devices", items: ["Laptop", "Mobile"] },
      { title: "Accessories", items: ["Headphones", "Chargers"] },
    ],
  },
  {
    name: "Cleaning",
    key: "cleaning",
    image: janitorial,
    sections: [
      { title: "Supplies", items: ["Mop", "Vacuum"] },
      { title: "Chemicals", items: ["Detergent", "Sanitizer"] },
    ],
  },
  {
    name: "Perfumes",
    key: "perfumes",
    image: perfume,
    sections: [
      { title: "Men", items: ["Fresh", "Woody"] },
      { title: "Women", items: ["Floral", "Sweet"] },
    ],
  },
];

const HeaderBottom = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(categories[0]);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="w-full bg-[#F5F5F3] relative z-40">
      <div className="max-w-[1400px] mx-auto px-4">
        <Flex className="items-center h-14">

          {/* LEFT MENU BUTTON */}
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="relative flex items-center gap-2 cursor-pointer text-black"
          >
            <HiOutlineMenuAlt4 className="w-5 h-5" />
            <span className="text-sm font-medium">All Categories</span>

            {/* 🔥 MEGA MENU */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-0 top-full mt-2 w-[1000px] bg-white shadow-2xl rounded-xl border flex"
                >
                  {/* LEFT SIDEBAR */}
                  <div className="w-[260px] bg-gray-50 border-r">
                    {categories.map((cat) => (
                      <div
                        key={cat.key}
                        onMouseEnter={() => setActive(cat)}
                        className={`flex items-center gap-3 px-4 py-3 cursor-pointer ${
                          active.key === cat.key
                            ? "bg-white font-semibold"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <img src={cat.image} className="w-7 h-7" />
                        {cat.name}
                      </div>
                    ))}
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex-1 p-6 grid grid-cols-3 gap-6">
                    {active.sections.map((sec, i) => (
                      <div key={i}>
                        <h3 className="font-semibold mb-2">{sec.title}</h3>
                        {sec.items.map((item, j) => (
                          <p
                            key={j}
                            onClick={() =>
                              navigate(`/category/${active.key}`)
                            }
                            className="text-sm text-gray-600 hover:text-black cursor-pointer mb-1"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    ))}

                    {/* FEATURE BOX */}
                    <div>
                      <h3 className="font-semibold mb-2">Featured</h3>
                      <img
                        src={active.image}
                        className="w-full h-28 object-cover rounded"
                      />
                      <button
                        onClick={() =>
                          navigate(`/category/${active.key}`)
                        }
                        className="mt-3 w-full bg-black text-white py-2 rounded"
                      >
                        Shop All
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;