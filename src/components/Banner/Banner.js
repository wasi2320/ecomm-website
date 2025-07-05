import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Image from "../designLayouts/Image";
// import banner from "../../assets/images/banner/bannerImg.jpg";
import banner1 from "../../assets/images/banner/newBanner2.jpg";
import banner4 from "../../assets/images/banner/newBanner3.jpg";
import newBanner from "../../assets/images/banner/newBanner.jpg";
import perfumeBanner1 from "../../assets/images/banner/perfumebanner1.jpg";
import perfumeBanner2 from "../../assets/images/banner/perfumeBanner2.jpg";
import perfumeBanner3 from "../../assets/images/banner/perfumeBanner3.jpg";
const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      <Slider {...settings}>
        {[perfumeBanner1,perfumeBanner2,perfumeBanner3].map((imgSrc, index) => (
          <Link to="/offer" key={index}>
            <div className="w-full "> 
              <img
                src={imgSrc}
                alt={`Banner ${index + 1}`}
                className="w-full "
              />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
  
  
  
};

export default Banner;
