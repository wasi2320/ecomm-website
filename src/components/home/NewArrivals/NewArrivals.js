import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  newArrFive,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Round Table Clock"
            price="44.00"
            color="Black"
            badge={true}
            rating={4.5}
            reviewName="Alex M"
            review="Sleek Design"
            des=
            "Round Table Clock: A timeless and decorative timepiece, seamlessly blending functionality with aesthetic appeal, perfect for any tabletop or desk."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Smart Watch"
            price="250.00"
            color="Black"
            badge={true}
            rating={4}
            reviewName="Emily W"
            review="Powerful Performance"
            des=
            "Smart Watch: A cutting-edge wearable device seamlessly merging style and technology, empowering you with fitness tracking, notifications, and connectivity on your wrist."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="cloth Basket"
            price="80.00"
            color="Mixed"
            badge={true}
            rating={5}
            reviewName="Jason T."
            review="User-Friendly"
            des=
            "Cloth Basket: A versatile and stylish storage solution, combining form and function to organize your belongings with a touch of aesthetic charm."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Funny toys for babies"
            price="60.00"
            color="Mixed"
            badge={false}
            rating={4}
            reviewName="Sarah K"
            review=" Compact Size"
            des=
            "Funny Toys for Babies: Playful and engaging companions designed to bring smiles and laughter to little ones, fostering joy and developmental exploration."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="Funny toys for babies"
            price="60.00"
            color="Mixed"
            badge={false}
            rating={4}
            reviewName="Ryan H."
            review="Lightweight"
            des=
            "Funny Toys for Babies: Playful and engaging companions designed to bring smiles and laughter to little ones, fostering joy and developmental exploration."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrFive}
            productName="Perfume"
            price="260.00"
            color="Transparent"
            badge={false}
            rating={4}
            reviewName="Henry."
            review="Absolutely mesmerizing!"
            des=
            "Unveil a world of allure with our enchanting perfume. A carefully crafted blend of sophistication and allure that transcends time. The initial burst of top notes introduces you to a journey of sensuality, while the lingering base notes leave a lasting impression. This fragrance is more than just a scent; it's a narrative that unfolds uniquely on every wearer. Elevate your everyday moments to extraordinary with this olfactory masterpiece."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
