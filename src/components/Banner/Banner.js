import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";

import perfumeBanner1 from "../../assets/images/banner/perfumebanner1.jpg";
import perfumeBanner2 from "../../assets/images/banner/perfumeBanner2.jpg";
import perfumeBanner3 from "../../assets/images/banner/perfumeBanner3.jpg";

const slides = [
  {
    img: perfumeBanner1,
    title: "Luxury Fragrance Collection",
    subtitle: "Elevate your presence with premium scents",
  },
  {
    img: perfumeBanner2,
    title: "Signature Scents",
    subtitle: "Crafted for timeless impressions",
  },
  {
    img: perfumeBanner3,
    title: "Exclusive Perfumes",
    subtitle: "Discover your identity through fragrance",
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
    <div className="w-full bg-[#0f0f0f] overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            
            {/* MAIN WRAPPER */}
            <div className="w-full min-h-[420px] sm:min-h-[480px] md:h-[40vh] flex flex-col md:flex-row items-center">

              {/* 🔥 TEXT */}
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 px-5 sm:px-8 md:px-16 py-8 md:py-10 text-white flex flex-col justify-center"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-titleFont font-semibold leading-tight">
                  {slide.title}
                </h1>

                <p className="text-sm sm:text-base text-lightText mt-3 md:mt-4 max-w-md">
                  {slide.subtitle}
                </p>

                {/* CTA */}
                <Link to="/shop">
                  <button className="mt-5 md:mt-6 px-5 md:px-6 py-2.5 md:py-2 text-white text-sm tracking-wide border border-white transition hover:bg-white hover:text-black w-fit">
                    Shop Now
                  </button>
                </Link>
              </motion.div>

              {/* 🔥 IMAGE */}
              <div className="w-full md:w-1/2 h-[220px] sm:h-[260px] md:h-full relative overflow-hidden">
                <motion.img
                  src={slide.img}
                  alt="banner"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: active === index ? 1 : 1.08 }}
                  transition={{ duration: 5 }}
                  className="w-full h-full object-cover"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/30" />
              </div>

            </div>

          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;