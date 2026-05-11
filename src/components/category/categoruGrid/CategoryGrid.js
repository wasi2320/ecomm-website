import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// IMAGES
import tools from "../../../assets/images/categoryGird2/tools.png";
import office from "../../../assets/images/categoryGird2/office-and-shipping.png";
import plumbing from "../../../assets/images/categoryGird2/plumbing-and-hvac.png";
import safety from "../../../assets/images/categoryGird2/safety-and-security.png";
import ground from "../../../assets/images/categoryGird2/grounds-maintenance-and-outdoor-equipment.png";
import electronics from "../../../assets/images/categoryGird2/monitors-displays-and-projectors.png";
import janitorial from "../../../assets/images/categoryGird2/cleaning-supplies.png";
import foodService from "../../../assets/images/categoryGird2/G5201001.png";
import testInstruments from "../../../assets/images/categoryGird2/test-instruments-and-gauges.png";
import perfume from "../../../assets/images/giftsets/gs4.jpg";
import men from "../../../assets/images/menPerfume/men2.jpg";
import women from "../../../assets/images/womenPerfume/women2.jpg";
import test from "../../../assets/images/tester/test2.jpg";
import children from "../../../assets/images/children/ch2.jpg";

// ICONS
import {
  FiArrowUpRight,
  FiShoppingBag,
  FiTool,
} from "react-icons/fi";

const categories = [
  {
    id: 1,
    name: "Tools",
    image: tools,
    path: "/category/tools",
    icon: <FiTool />,
  },
  {
    id: 2,
    name: "Office",
    image: office,
    path: "/category/office",
    icon: <FiShoppingBag />,
  },
  {
    id: 3,
    name: "Plumbing",
    image: plumbing,
    path: "/category/plumbing",
    icon: <FiShoppingBag />,
  },
  {
    id: 4,
    name: "Safety",
    image: safety,
    path: "/category/safety",
    icon: <FiShoppingBag />,
  },
  {
    id: 5,
    name: "Outdoor",
    image: ground,
    path: "/category/grounds",
    icon: <FiShoppingBag />,
  },
  {
    id: 6,
    name: "Electronics",
    image: electronics,
    path: "/category/electronics",
    icon: <FiShoppingBag />,
  },
  {
    id: 7,
    name: "Cleaning",
    image: janitorial,
    path: "/category/cleaning",
    icon: <FiShoppingBag />,
  },
  {
    id: 8,
    name: "Food Service",
    image: foodService,
    path: "/category/food",
    icon: <FiShoppingBag />,
  },
  {
    id: 9,
    name: "Instruments",
    image: testInstruments,
    path: "/category/test",
    icon: <FiShoppingBag />,
  },
  {
    id: 10,
    name: "Giftsets",
    image: perfume,
    path: "/category/perfumes",
    icon: <FiShoppingBag />,
  },
  {
    id: 11,
    name: "Men",
    image: men,
    path: "/category/male",
    icon: <FiShoppingBag />,
  },
  {
    id: 12,
    name: "Women",
    image: women,
    path: "/category/female",
    icon: <FiShoppingBag />,
  },
  {
    id: 13,
    name: "Tester",
    image: test,
    path: "/category/tester",
    icon: <FiShoppingBag />,
  },
  {
    id: 14,
    name: "Children",
    image: children,
    path: "/category/children",
    icon: <FiShoppingBag />,
  },
];

////////////////////////////////////////////////////////////
// CARD
////////////////////////////////////////////////////////////

const CategoryCard = ({ category, navigate, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      onClick={() => navigate(category.path)}
      className="group relative cursor-pointer"
    >
      <div
        className="
        relative overflow-hidden rounded-[28px]
        border border-white/10
        bg-[#111]
        h-[180px] sm:h-[220px] lg:h-[260px]
        transition-all duration-500
        hover:border-yellow-400/40
        hover:shadow-[0_0_60px_rgba(250,204,21,0.08)]
      "
      >
        {/* IMAGE */}
        <motion.img
          src={category.image}
          alt={category.name}
          loading="lazy"
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            absolute inset-0
            w-full h-full
            object-cover
          "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* LIGHT */}
        <div
          className="
          absolute inset-0 opacity-0
          group-hover:opacity-100
          transition duration-700
          bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.15),transparent_60%)]
        "
        />

        {/* TOP BADGE */}
        <div
          className="
          absolute top-4 left-4 z-20
          w-10 h-10 rounded-full
          bg-black/50 backdrop-blur-xl
          border border-white/10
          flex items-center justify-center
          text-yellow-400
        "
        >
          {category.icon}
        </div>

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 w-full p-5 z-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3
                className="
                text-white
                text-lg sm:text-xl
                font-semibold
                tracking-wide
              "
              >
                {category.name}
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Premium Collection
              </p>
            </div>

            {/* ARROW */}
            <motion.div
              whileHover={{
                rotate: -45,
              }}
              className="
              min-w-[42px] h-[42px]
              rounded-full
              bg-yellow-400
              text-black
              flex items-center justify-center
              shadow-lg
            "
            >
              <FiArrowUpRight size={18} />
            </motion.div>
          </div>
        </div>

        {/* BORDER */}
        <div
          className="
          absolute inset-0 rounded-[28px]
          border border-white/5
          group-hover:border-yellow-400/20
          transition duration-500
        "
        />

        {/* SHIMMER */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="
            absolute top-0 -left-[120%]
            h-full w-[40%]
            rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
            group-hover:animate-shimmer
          "
          />
        </div>
      </div>
    </motion.div>
  );
};

////////////////////////////////////////////////////////////
// MAIN
////////////////////////////////////////////////////////////

const CategoryGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 bg-[#0a0a0a] overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div
            className="
            inline-flex items-center gap-2
            px-5 py-2 rounded-full
            border border-yellow-400/20
            bg-yellow-400/5
            backdrop-blur-xl
            mb-6
          "
          >
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

            <span className="text-xs tracking-[0.3em] uppercase text-yellow-300">
              Shop Collections
            </span>
          </div>

          <h2
            className="
            text-4xl sm:text-5xl lg:text-6xl
            font-bold text-white
            leading-tight
          "
          >
            Explore Categories
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-5 text-sm sm:text-base">
            Browse premium collections crafted for professionals,
            luxury shoppers, and modern lifestyles.
          </p>
        </motion.div>

        {/* GRID */}
        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
          gap-5 sm:gap-7
        "
        >
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              navigate={navigate}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;