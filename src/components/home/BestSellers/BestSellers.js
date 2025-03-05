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

const products = [
  {
    _id: "1011",
    img: bestSellerOne,
    productName: "Flower Base",
    price: 35.00,
    category: "Featured",
    rating: 4,
    reviewName: "Megan S.",
    review: "High Quality",
    des: "An elegant vessel for floral arrangements.",
  },
  {
    _id: "1012",
    img: bestSellerTwo,
    productName: "New Backpack",
    price: 180.00,
    category: "New Arrival",
    rating: 5,
    reviewName: "Chris L.",
    review: "Durable Build",
    des: "A stylish and functional backpack.",
  },
  {
    _id: "1013",
    img: bestSellerThree,
    productName: "Household Materials",
    price: 25.00,
    category: "Best Sellers",
    rating: 4,
    reviewName: "Olivia B.",
    review: "Affordable Price",
    des: "Essential items for everyday living.",
  },
  {
    _id: "1014",
    img: bestSellerFour,
    productName: "Travel Bag",
    price: 220.00,
    category: "Final Offer",
    rating: 5,
    reviewName: "Kevin C",
    review: "Stylish Look",
    des: "A stylish and practical travel companion.",
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
    <div className="w-full pb-20 bg-gray-700 p-5 text-white">
      
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
