import React from "react";
import Breadcrumbs from "../../../components/pageProps/Breadcrumbs";
import ShopSideNav from "../../../components/pageProps/shopPage/ShopSideNav";
import Product from "../Products/Product";
import Header from "../Header/Header";
import HeaderBottom from "../Header/HeaderBottom";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  newArrFive,
} from "../../../assets/images/index";


const products = [
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
    des: "Round Table Clock: A timeless and decorative timepiece, seamlessly blending functionality with aesthetic appeal, perfect for any tabletop or desk.",
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
    des: "Smart Watch: A cutting-edge wearable device seamlessly merging style and technology, empowering you with fitness tracking, notifications, and connectivity on your wrist.",
  },
  {
    _id: "100003",
    img: newArrThree,
    productName: "Cloth Basket",
    price: "80.00",
    color: "Mixed",
    badge: true,
    rating: 5,
    reviewName: "Jason T.",
    review: "User-Friendly",
    des: "Cloth Basket: A versatile and stylish storage solution, combining form and function to organize your belongings with a touch of aesthetic charm.",
  },
  {
    _id: "100004",
    img: newArrFour,
    productName: "Funny toys for babies",
    price: "60.00",
    color: "Mixed",
    badge: false,
    rating: 4,
    reviewName: "Sarah K",
    review: "Compact Size",
    des: "Funny Toys for Babies: Playful and engaging companions designed to bring smiles and laughter to little ones, fostering joy and developmental exploration.",
  },
  {
    _id: "100005",
    img: newArrTwo,
    productName: "Funny toys for babies",
    price: "60.00",
    color: "Mixed",
    badge: false,
    rating: 4,
    reviewName: "Ryan H.",
    review: "Lightweight",
    des: "Funny Toys for Babies: Playful and engaging companions designed to bring smiles and laughter to little ones, fostering joy and developmental exploration.",
  },
  {
    _id: "100006",
    img: newArrFive,
    productName: "Perfume",
    price: "260.00",
    color: "Transparent",
    badge: false,
    rating: 4,
    reviewName: "Henry.",
    review: "Absolutely mesmerizing!",
    des: "Unveil a world of allure with our enchanting perfume. A carefully crafted blend of sophistication and allure that transcends time. The initial burst of top notes introduces you to a journey of sensuality, while the lingering base notes leave a lasting impression.",
  },
];

const ArrivalPage = () => {
  return (
    <div>
        <Header />
        <HeaderBottom />
    <div className="max-w-container mx-auto px-4">
      
      <Breadcrumbs title="Products" />

      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        
        {/* Sidebar */}
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div>

        {/* Main Content */}
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          
          {/* Products Grid - 3 items per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((item) => (
              <Product
                key={item._id}
                _id={item._id}
                img={item.img}
                productName={item.productName}
                price={item.price}
                color={item.color}
                badge={item.badge}
                des={item.des}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
    </div>
  );
};

export default ArrivalPage;
