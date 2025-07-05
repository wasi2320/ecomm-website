import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import pro1 from "../../../assets/pro1.jpg";
import pro2 from "../../../assets/pro2.jpg";
import pro3 from "../../../assets/pro3.jpg";
import pro4 from "../../../assets/pro4.jpg";
import pro5 from "../../../assets/pro5.jpg";

const testimonials = [
  {
    id: 1,
    name: "Elisa Wiliams",
    role: "Workshop Owner",
    company: "Khan Auto Services",
    rating: 4.7,
    image: pro1,
    text: "Even in a workshop setting, The Ride Connect's perfumes create a fresh and welcoming environment. The scents are bold and long-lasting!",
    stat: "60%",
    statDescription: "Boost in team morale thanks to the refreshing ambiance created by our perfumes.",
  },
  {
    id: 2,
    name: "Angel Johnson",
    role: "Homeowner",
    company: "DIY Enthusiast",
    rating: 4.8,
    image: pro2,
    text: "I love the variety of perfumes at The Ride Connect! Their fragrances are long-lasting and truly premium.",
    stat: "80%",
    statDescription: "Customers reported improved satisfaction with our exclusive perfume collection.",
  },
  {
    id: 3,
    name: "Daniel James",
    role: "Construction Engineer",
    company: "SafeBuild Contractors",
    rating: 4.6,
    image: pro3,
    text: "The Ride Connect's perfumes bring a surprising touch of luxury to our daily grind. I even keep one in my work locker!",
    stat: "50%",
    statDescription: "Increase in workplace satisfaction with the introduction of high-end fragrances.",
  },
  {
    id: 4,
    name: "Sophia Martinez",
    role: "Salon Owner",
    company: "Glamour Touch",
    rating: 4.9,
    image: pro4,
    text: "Our clients love the sophisticated fragrance in our salon from The Ride Connect. It enhances the entire beauty experience!",
    stat: "70%",
    statDescription: "Increase in customer satisfaction due to our signature perfume scent in the salon.",
  },
  // {
  //   id: 5,
  //   name: "Michael Lee",
  //   role: "Restaurant Manager",
  //   company: "Spice Delight",
  //   rating: 4.7,
  //   image: pro5,
  //   text: "Our kitchen is more efficient than ever, thanks to the innovative tools provided by The Ride Connect.",
  //   stat: "65%",
  //   statDescription: "Increase in kitchen efficiency using top-notch equipment.",
  // },
];

const YearProduct = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-[#374151] to-[#000000] py-16 px-6 text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8">Real Business Results</h2>

      <div className="flex items-center justify-center space-x-6 w-full max-w-6xl overflow-hidden relative flex-wrap sm:flex-col md:flex-row">
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={testimonial.id}
              className={`flex flex-col items-center p-6 rounded-xl shadow-lg transition-all duration-1000 ease-in-out w-full sm:w-4/5 md:w-1/5 bg-gray-800 transform ${
                isActive ? "scale-105 z-10" : "scale-95 opacity-80"
              } mb-8 sm:mb-4 md:mb-0`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm">{testimonial.role}</p>
              <p className="text-sm text-gray-400">{testimonial.company}</p>
              <p className="mt-2 text-lg">⭐⭐⭐⭐ {testimonial.rating} </p>
              <p
                className={`mt-4 text-gray-300 text-center ${
                  isActive ? "text-lg" : "text-sm"
                }`}
              >
                {testimonial.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YearProduct;
