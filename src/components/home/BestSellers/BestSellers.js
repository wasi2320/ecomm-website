import React, { useState } from "react";
import ProductBanner from "../../../components/pageProps/shopPage/ProductBanner";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
  BestSellersFive,
} from "../../../assets/images/index";
import plu2 from "../../../assets/images/tools/plu2.jpg"
import off1 from "../../../assets/images/tools/off1.jpg"
import tools4 from "../../../assets/images/tools/tools4.jpg"
import tools9 from "../../../assets/images/tools/tools9.jpg"
const products = [
  {
    _id: "100002",
    img: plu2,
    productName: "Lever Handle",
    price: "150.00",
    color: "Silver",
    badge: true,
    rating: 4,
    reviewName: "Emily W",
    review: "Powerful Performance",
    des: "Lever Handle 8 Mount, Commercial 2 Hole Straight Service Sink Faucet",
  },
  {
    _id: "100001",
    img: off1,
    productName: "Tape Dispenser",
    price: "44.00",
    color: "Black",
    badge: true,
    rating: 4.5,
    reviewName: "Alex M",
    review: "Sleek Design",
    des: "Tape Dispenser, Handheld, For Tape 2 in W, 3 in Core Dia, 11 3/4 in L, Pistol Grip, Blue",
  },
  {
    _id: "100004",
    img: tools4,
    productName: "Square Drive Socket Set",
    price: "19.97",
    color: "Black",
    badge: true,
    rating: 4,
    reviewName: "Emily W",
    review: "Excellent Performance",
    des: "1/4 Hex, 1/2 Square; 3/8 x 7/16, 1/2 x 9/16, 5/8 x 11/16, 3/4 x 13/16, and 7/8 x 15/16 Drive",
  },
  {
    _id: "100009",
    img: tools9,
    productName: "Tool Box",
    price: "19.97",
    color: "Black",
    badge: true,
    rating: 4,
    reviewName: "Emily W",
    review: "Excellent Performance",
    des: "PACKOUT 4-Drawer Tool Box, Polymer, Black/Red, 22 in W x 16-1/2 in D x 14-1/2 in H",
  },
  {
    _id: "1015",
    img: BestSellersFive,
    productName: "Perfume",
    price: 380.00,
    category: "New Arrival",
    rating: 5,
    reviewName: "K.P",
    review: "Long Lasting",
    des: "A luxurious and captivating fragrance.",
  },
];

const BestSellers = () => {
  const [sortBy, setSortBy] = useState("Best Sellers");

  // Sorting function
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "Best Sellers") {
      return a.category === "Best Sellers" ? -1 : 1;
    } else if (sortBy === "New Arrival") {
      return a.category === "New Arrival" ? -1 : 1;
    } else if (sortBy === "Featured") {
      return a.category === "Featured" ? -1 : 1;
    } else if (sortBy === "Final Offer") {
      return a.category === "Final Offer" ? -1 : 1;
    }
    return 0;
  });

  return (
    <div className="w-full pb-20  p-5 text-white">
      
      <ProductBanner handleSortChange={setSortBy} />
      <Heading heading="Our Best Sellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {sortedProducts.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
