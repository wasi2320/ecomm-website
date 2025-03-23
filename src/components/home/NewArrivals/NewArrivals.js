import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import productsData from "../../category/productsData";

// Function to shuffle and select random products
const getRandomProducts = (products, count) => {
  const allProducts = Object.values(products).flat();
  const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const NewArrivals = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [randomProducts, setRandomProducts] = useState([]);

  // Generate random products only once when the component mounts
  useEffect(() => {
    setRandomProducts(getRandomProducts(productsData, 20));
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 769,
        settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
    ],
  };

  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        {randomProducts.map((product) => (
          <div
            key={product._id}
            className={`px-2 transition-all duration-300 ${
              hoveredProduct && hoveredProduct !== product._id
                ? "blur-sm"
                : "blur-none"
            }`}
            onMouseEnter={() => setHoveredProduct(product._id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div
              className={`transition-all duration-300 transform ${
                hoveredProduct === product._id ? "scale-110" : "scale-100"
              }`}
            >
              <Product {...product} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
