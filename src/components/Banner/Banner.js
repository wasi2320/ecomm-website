import React, { useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import AnimatedText from "./AnimatedText";
import ImageWithGlow from "./ImageWithGlow";


// 🔥 GENERAL
import rcb1 from "../../assets/images/banner/rcb1.png";
import rcb2 from "../../assets/images/banner/rcb2.png";

// 🔥 PERFUMES
import perfumeBanner1 from "../../assets/images/banner/perfumeb.png";


// 🔥 CATEGORY BANNERS (use your generated images here)

// Tools
import toolsBanner from "../../assets/images/banner/toolsb.png";

// Office
import officeBanner from "../../assets/images/banner/officeb.png";

// Plumbing
import plumbingBanner from "../../assets/images/banner/plumbingb.png";

// Safety
import safetyBanner from "../../assets/images/banner/safteyb.png";

// Grounds
import groundBanner from "../../assets/images/banner/groundb.png";

// Electronics
import electronicsBanner from "../../assets/images/banner/electronicsb.png";

// Janitorial
import janitorialBanner from "../../assets/images/banner/cleaningb.png";

// Food Service
import foodBanner from "../../assets/images/banner/foodb.png";

// Lab Equipment
import labBanner from "../../assets/images/banner/labb.png";

const slides = [
  // 🔥 GENERAL (ALL CATEGORIES)
  {
    img: rcb1,
    title: "Everything You Need. One Trusted Store.",
    subtitle:
      "From tools to tech, essentials to luxury — quality products for every need, delivered with reliability.",
    gradient: "from-zinc-900 via-black to-black",
  },
  {
    img: rcb2,
    title: "Built for Businesses & Everyday Buyers",
    subtitle:
      "Shop across multiple categories with confidence — verified products, competitive pricing, and fast fulfillment.",
    gradient: "from-neutral-900 via-black to-black",
  },

  // 🔥 PERFUMES
  {
    img: perfumeBanner1,
    title: "Luxury Fragrance Collection",
    subtitle:
      "Authentic perfumes crafted for identity, presence, and long-lasting impressions.",
    gradient: "from-purple-900 via-black to-black",
  },

  // 🔥 TOOLS
  {
    img: toolsBanner,
    title: "Professional Tools & Equipment",
    subtitle:
      "Durable, high-performance tools built for precision, efficiency, and reliability on every job.",
    gradient: "from-yellow-900 via-black to-black",
  },

  // 🔥 OFFICE
  {
    img: officeBanner,
    title: "Office Essentials That Work Smarter",
    subtitle:
      "Boost productivity with premium office supplies designed for modern workspaces.",
    gradient: "from-blue-900 via-black to-black",
  },

  // 🔥 PLUMBING
  {
    img: plumbingBanner,
    title: "Reliable Plumbing Solutions",
    subtitle:
      "Engineered for durability and performance — everything you need for secure installations.",
    gradient: "from-cyan-900 via-black to-black",
  },

  // 🔥 SAFETY
  {
    img: safetyBanner,
    title: "Safety You Can Trust",
    subtitle:
      "Certified protective gear and equipment to keep your team safe in every environment.",
    gradient: "from-red-900 via-black to-black",
  },

  // 🔥 GROUNDS
  {
    img: groundBanner,
    title: "Grounds & Maintenance Equipment",
    subtitle:
      "Powerful tools to maintain outdoor spaces with efficiency and precision.",
    gradient: "from-green-900 via-black to-black",
  },

  // 🔥 ELECTRONICS
  {
    img: electronicsBanner,
    title: "Smart Electronics & Components",
    subtitle:
      "From essential devices to advanced components — power your projects with innovation.",
    gradient: "from-indigo-900 via-black to-black",
  },

  // 🔥 JANITORIAL
  {
    img: janitorialBanner,
    title: "Clean Spaces, Professional Results",
    subtitle:
      "High-quality cleaning supplies for commercial and industrial environments.",
    gradient: "from-slate-900 via-black to-black",
  },

  // 🔥 FOOD SERVICE
  {
    img: foodBanner,
    title: "Food Service Essentials",
    subtitle:
      "Reliable kitchen equipment and supplies for consistent performance and hygiene.",
    gradient: "from-orange-900 via-black to-black",
  },

  // 🔥 LAB
  {
    img: labBanner,
    title: "Precision Lab Equipment",
    subtitle:
      "Accurate, reliable instruments designed for professional research and testing.",
    gradient: "from-sky-900 via-black to-black",
  },
];

const Banner = () => {
  const [active, setActive] = useState(0);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, next) => setActive(next),
  };

  return (
    <div className="relative w-full overflow-hidden">

      {/* 🔥 Gradient Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 bg-gradient-to-r ${slides[active]?.gradient}`}
        />
      </AnimatePresence>

      {/* 🔥 Slider */}
      <div className="relative">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="w-full h-[420px] sm:h-[480px] md:h-[50vh] flex flex-col md:flex-row items-center perspective-[1000px]">

                {/* 🔥 TEXT (40%) */}
                <div className="w-full md:w-[40%] px-6 sm:px-10 md:px-16 text-white flex flex-col justify-center z-10">
                  
                  <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight">
                    <AnimatedText text={slide.title} />
                  </h1>

                  <p className="text-sm sm:text-base mt-3 max-w-md text-gray-300">
                    <AnimatedText text={slide.subtitle} />
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link to="/shop">
                      <button className="mt-6 px-6 py-2 border border-white hover:bg-white hover:text-black transition">
                        Shop Now
                      </button>
                    </Link>
                  </motion.div>

                </div>

                {/* 🔥 IMAGE (60%) */}
                <ImageWithGlow
                  src={slide.img}
                  active={active === index}
                />

              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

    </div>
  );
};

export default Banner;