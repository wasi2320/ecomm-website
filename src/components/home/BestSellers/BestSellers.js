import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
  BestSellersFive,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20" style={{ backgroundColor: "grey", padding: '20px', color: 'white' }}>
      <Heading heading="Our Best Sellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Flower Base"
          price="35.00"
          color="Blank and White"
          badge={true}
          rating={4}
          reviewName="Megan S."
          review="High Quality"
          des="Flower Base: An elegant vessel designed to showcase and complement the beauty of floral arrangements, enhancing the ambiance of any space."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="New Backpack"
          price="180.00"
          color="Gray"
          badge={false}
          rating={5}
          reviewName="Chris L."
          review=" Durable Build"
          des="New Backpack: A stylish and functional companion for your daily adventures, offering ample storage and modern design to suit your on-the-go lifestyle."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Household materials"
          price="25.00"
          color="Mixed"
          badge={true}
          rating={4}
          reviewName="Olivia B."
          review="Affordable Price"
          des="Household Materials: Essential items and supplies for everyday living, encompassing a range of products that contribute to the functionality and comfort of a home."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Travel Bag"
          price="220.00"
          color="Black"
          badge={false}
          rating={5}
          reviewName="Kevin C"
          review="Stylish Look"
          des=
          "Travel Bag: Your go-to companion for journeys near and far, combining practicality with style to accommodate your essentials on the road."
        />
        <Product
          _id="1014"
          img={BestSellersFive}
          productName="Perfume"
          price="380.00"
          color="Transparent"
          badge={false}
          rating={5}
          reviewName="K.P"
          review="Long Lasting"
          des=
          "Indulge your senses in the exquisite allure of our signature fragrance. A harmonious blend of captivating notes that dance together, creating a symphony of elegance and charm. Immerse yourself in the essence of luxury with each enchanting spritz. Elevate your presence, leaving an unforgettable trail of sophistication. Embrace the power of scent and make every moment unforgettable with our captivating perfume."
        />
      </div>
    </div>
  );
};

export default BestSellers;
