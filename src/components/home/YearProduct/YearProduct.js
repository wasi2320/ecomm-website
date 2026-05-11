import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  FaArrowLeft,
  FaArrowRight,
  FaQuoteRight,
  FaStar,
} from "react-icons/fa";

import pro1 from "../../../assets/pro1.jpg";
import pro2 from "../../../assets/pro2.jpg";
import pro3 from "../../../assets/pro3.jpg";
import pro4 from "../../../assets/pro4.jpg";

////////////////////////////////////////////////////////////
// TESTIMONIALS
////////////////////////////////////////////////////////////

const testimonials = [
  {
    id: 1,
    name: "Elisa Wiliams",
    role: "Workshop Owner",
    company: "Khan Auto Services",
    rating: 4.7,
    image: pro1,
    text: "Even in a workshop setting, The Ride Connect's perfumes create a fresh and welcoming environment.",
  },

  {
    id: 2,
    name: "Angel Johnson",
    role: "Homeowner",
    company: "DIY Enthusiast",
    rating: 4.8,
    image: pro2,
    text: "Their fragrances are long-lasting and truly premium. It feels like luxury every day.",
  },

  {
    id: 3,
    name: "Daniel James",
    role: "Engineer",
    company: "SafeBuild Contractors",
    rating: 4.6,
    image: pro3,
    text: "A surprising touch of elegance in my daily routine. Highly recommended.",
  },

  {
    id: 4,
    name: "Sophia Martinez",
    role: "Salon Owner",
    company: "Glamour Touch",
    rating: 4.9,
    image: pro4,
    text: "Our clients instantly notice the difference. It elevates the entire experience.",
  },
];

////////////////////////////////////////////////////////////
// MAIN COMPONENT
////////////////////////////////////////////////////////////

const YearProduct = () => {
  const [index, setIndex] = useState(0);

  ////////////////////////////////////////////////////////////
  // AUTOPLAY
  ////////////////////////////////////////////////////////////

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(interval);
  }, [index]);

  ////////////////////////////////////////////////////////////
  // NAVIGATION
  ////////////////////////////////////////////////////////////

  const nextSlide = () => {
    setIndex(
      (prev) =>
        (prev + 1) % testimonials.length
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0
        ? testimonials.length - 1
        : prev - 1
    );
  };

  const active = testimonials[index];

  ////////////////////////////////////////////////////////////
  // RENDER
  ////////////////////////////////////////////////////////////

  return (
    <section
      className="
      relative overflow-hidden
      bg-[#050505]
      py-24 sm:py-32
      text-white
    "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* LIGHTS */}
        <div
          className="
          absolute top-0 left-0
          w-[400px] h-[400px]
          rounded-full
          bg-yellow-400/10
          blur-3xl
        "
        />

        <div
          className="
          absolute bottom-0 right-0
          w-[400px] h-[400px]
          rounded-full
          bg-yellow-400/10
          blur-3xl
        "
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

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
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-20"
        >
          {/* BADGE */}
          <div
            className="
            inline-flex items-center gap-2
            px-5 py-2
            rounded-full
            border border-yellow-400/20
            bg-yellow-400/5
            mb-6
          "
          >
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

            <span
              className="
              text-xs uppercase
              tracking-[0.3em]
              text-yellow-300
            "
            >
              Customer Reviews
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
            text-4xl sm:text-5xl lg:text-6xl
            font-bold leading-tight
          "
          >
            What Our
            <span
              className="
              block text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-white
              to-yellow-400
            "
            >
              Clients Say
            </span>
          </h2>

          {/* TEXT */}
          <p
            className="
            mt-6 max-w-2xl mx-auto
            text-gray-400
            text-sm sm:text-base
            leading-relaxed
          "
          >
            Real experiences from customers
            who trust our premium products
            and luxury shopping experience.
          </p>
        </motion.div>

        {/* SLIDER */}
        <div
          className="
          grid lg:grid-cols-2
          gap-12 xl:gap-20
          items-center
        "
        >
          {/* IMAGE SIDE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.02,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* GLOW */}
              <div
                className="
                absolute inset-0
                rounded-[36px]
                bg-yellow-400/10
                blur-3xl
              "
              />

              {/* CARD */}
              <div
                className="
                relative overflow-hidden
                rounded-[36px]
                border border-white/10
                bg-[#111]
              "
              >
                {/* IMAGE */}
                <motion.img
                  src={active.image}
                  alt={active.name}
                  className="
                    w-full
                    h-[420px] sm:h-[520px]
                    object-cover
                    transform-gpu
                  "
                  whileHover={{
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                />

                {/* OVERLAY */}
                <div
                  className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/10
                  to-transparent
                "
                />

                {/* FLOATING BADGE */}
                <div
                  className="
                  absolute top-6 left-6
                  px-4 py-2
                  rounded-full
                  border border-yellow-400/20
                  bg-black/50
                  backdrop-blur-md
                  text-sm text-yellow-300
                "
                >
                  Verified Customer
                </div>

                {/* BOTTOM INFO */}
                <div
                  className="
                  absolute bottom-8 left-8 right-8
                "
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map(
                      (_, i) => (
                        <FaStar
                          key={i}
                          className="text-yellow-400"
                        />
                      )
                    )}
                  </div>

                  <h3 className="text-2xl font-semibold">
                    {active.name}
                  </h3>

                  <p className="text-gray-300 mt-1">
                    {active.role} •{" "}
                    {active.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* TEXT SIDE */}
          <div className="relative">

            {/* QUOTE ICON */}
            <div
              className="
              mb-8
              w-20 h-20
              rounded-2xl
              flex items-center justify-center
              bg-yellow-400/10
              border border-yellow-400/20
              text-yellow-400
              text-3xl
            "
            >
              <FaQuoteRight />
            </div>

            {/* QUOTE */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <h3
                  className="
                  text-2xl sm:text-3xl xl:text-4xl
                  font-semibold
                  leading-[1.4]
                "
                >
                  “{active.text}”
                </h3>

                {/* AUTHOR */}
                <div className="mt-10">

                  <p className="text-xl font-semibold">
                    {active.name}
                  </p>

                  <p className="text-gray-400 mt-2">
                    {active.role} •{" "}
                    {active.company}
                  </p>

                  {/* RATING */}
                  <div className="mt-5 flex items-center gap-3">

                    <div className="flex gap-1">
                      {[...Array(5)].map(
                        (_, i) => (
                          <FaStar
                            key={i}
                            className="text-yellow-400 text-sm"
                          />
                        )
                      )}
                    </div>

                    <span className="text-gray-300">
                      {active.rating}/5
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CONTROLS */}
            <div className="flex items-center gap-4 mt-14">

              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={prevSlide}
                className="
                w-14 h-14
                rounded-full
                border border-white/10
                bg-[#111]
                flex items-center justify-center
                text-white
                hover:border-yellow-400/30
                hover:text-yellow-400
                transition duration-300
              "
              >
                <FaArrowLeft />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={nextSlide}
                className="
                w-14 h-14
                rounded-full
                border border-white/10
                bg-[#111]
                flex items-center justify-center
                text-white
                hover:border-yellow-400/30
                hover:text-yellow-400
                transition duration-300
              "
              >
                <FaArrowRight />
              </motion.button>
            </div>

            {/* INDICATORS */}
            <div className="flex gap-3 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`
                    h-[6px]
                    rounded-full
                    transition-all duration-500
                    ${
                      i === index
                        ? "w-14 bg-yellow-400"
                        : "w-6 bg-white/20"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearProduct;