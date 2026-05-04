import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import pro1 from "../../../assets/pro1.jpg";
import pro2 from "../../../assets/pro2.jpg";
import pro3 from "../../../assets/pro3.jpg";
import pro4 from "../../../assets/pro4.jpg";

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

const YearProduct = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const active = testimonials[index];

  return (
    <div className="w-full bg-[#0f0f0f] text-white py-24 px-6">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Real stories from real customers
        </p>
      </div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image Side */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent blur-2xl opacity-30"></div>
          <img
            src={active.image}
            alt={active.name}
            className="relative rounded-3xl w-full h-[420px] object-cover shadow-2xl"
          />
        </div>

        {/* Content Side */}
        <div className="flex flex-col justify-center">

          {/* Quote */}
          <h3 className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
            “{active.text}”
          </h3>

          {/* Info */}
          <div className="mt-4">
            <p className="text-lg font-semibold">{active.name}</p>
            <p className="text-sm text-gray-400">
              {active.role} • {active.company}
            </p>
          </div>

          {/* Rating */}
          <div className="mt-4 text-gray-300">
            ⭐⭐⭐⭐ {active.rating}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
            >
              <FaArrowRight />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default YearProduct;