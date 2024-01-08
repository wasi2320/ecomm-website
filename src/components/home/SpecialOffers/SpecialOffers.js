import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
  spfFive,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Cap for Boys"
          price="35.00"
          color="Blank and White"
          badge={true}
          rating={5}
          reviewName="Stephon"
          review="Amazing Product"
          des=
          "Cap for boys: A trendy and versatile accessory that adds a cool and sporty flair to any casual outfit."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Tea Table"
          price="180.00"
          color="Gray"
          badge={true}
          rating={4}
          reviewName="Macchall"
          review="Good Quality"
          des=
          "Tea table: A stylish and functional centerpiece, perfect for elevating your tea time or enhancing the aesthetic appeal of your living space."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Headphones"
          price="25.00"
          color="Mixed"
          badge={true}
          reviewName="Naqi"
          review="Good"
          rating={5}
          des="Headphones: Immersive audio experience and comfort combined in a sleek design, delivering high-quality sound for your listening pleasure."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Sun glasses"
          price="220.00"
          color="Black"
          badge={true}
          reviewName="Angelina"
          review="Amazing Product"
          rating={4}
          des="Sunglasses: Fashionable eye protection that blends style and UV defense for a chic and shielded outdoor experience."
        />
        <Product
          _id="1104"
          img={spfFive}
          productName="Perfume"
          price="220.00"
          color="transparent"
          badge={true}
          reviewName="Taylor"
          review="This perfume is pure magic in a bottle!"
          rating={5}
          des="Step into a realm of timeless elegance with our exquisite perfume. Each spray is a poetic dance of floral and oriental notes, creating an aura of undeniable grace. The carefully curated blend captures the essence of femininity and mystery, making it the perfect accessory for any occasion. Immerse yourself in the symphony of scents that unfold, leaving a trail of sophistication in your wake."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
