// src/data/productsData.js

import {
    newArrOne,
    newArrTwo,
    newArrThree,
    newArrFour,
    newArrFive,
  } from "../../assets/images/index";
  
  const productsData = {
    electronics: [
      {
        _id: "100001",
        img: newArrOne,
        productName: "Round Table Clock",
        price: "44.00",
        color: "Black",
        badge: true,
        rating: 4.5,
        reviewName: "Alex M",
        review: "Sleek Design",
        des: "A timeless and decorative timepiece for any tabletop or desk.",
      },
      {
        _id: "100002",
        img: newArrTwo,
        productName: "Smart Watch",
        price: "250.00",
        color: "Black",
        badge: true,
        rating: 4,
        reviewName: "Emily W",
        review: "Powerful Performance",
        des: "A wearable device merging style and technology with fitness tracking.",
      },
    ],
    furniture: [
      {
        _id: "200001",
        img: newArrThree,
        productName: "Cloth Basket",
        price: "80.00",
        color: "Mixed",
        badge: true,
        rating: 5,
        reviewName: "Jason T.",
        review: "User-Friendly",
        des: "A stylish storage solution for organizing belongings.",
      },
      {
        _id: "200002",
        img: newArrFour,
        productName: "Wooden Chair",
        price: "120.00",
        color: "Brown",
        badge: false,
        rating: 4.2,
        reviewName: "Sarah L",
        review: "Durable & Stylish",
        des: "Perfectly crafted wooden chair for home and office.",
      },
    ],
    clothing: [
      {
        _id: "300001",
        img: newArrFive,
        productName: "Perfume",
        price: "260.00",
        color: "Transparent",
        badge: false,
        rating: 4,
        reviewName: "Henry.",
        review: "Absolutely mesmerizing!",
        des: "A luxurious fragrance that leaves a lasting impression.",
      },
    ],
  };
  
  export default productsData;
  