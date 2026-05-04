import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
import Product from "../../components/home/Products/Product";
import productsData from "./productsData";

const categoryProductMapping = {
  tools: "tools",
  office: "office_shipping",
  plumbing: "plumbing",
  safety: "safety_security",
  grounds: "grounds_outdoor",
  heating: "heating_cooling",
  electronics: "electronics",
  cleaning: "janitorial_cleaning",
  food: "food_service",
  test: "test_instruments",
  perfumes: "perfumes",
  male: "male",
  female: "female",
  tester: "tester",
  children: "children",
};

const CategoryPage = () => {
  const { category } = useParams();

  const categoryKey = categoryProductMapping[category.toLowerCase()];
  const products = categoryKey ? productsData[categoryKey] : [];

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">

      <div className="max-w-[1400px] mx-auto px-6 py-8">

        {/* 🔥 HEADER */}
        <div className="mb-8">
          <Breadcrumbs
            title={
              category.charAt(0).toUpperCase() + category.slice(1)
            }
          />

          <div className="mt-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold tracking-wide">
              {category.toUpperCase()}
            </h1>

            <span className="text-sm text-gray-400">
              {products.length} Products
            </span>
          </div>
        </div>

        <div className="flex gap-8">

          {/* 🔥 SIDEBAR */}
          <div className="w-[260px] hidden lg:block">
            <div className="sticky top-24 bg-[#1a1a1a] p-5 rounded-2xl border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">
                Filters
              </h2>
              <ShopSideNav />
            </div>
          </div>

          {/* 🔥 PRODUCTS */}
          <div className="flex-1">

            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

                {products.map((item) => (
                  <div
                    key={item._id}
                    className="bg-gradient-to-b from-[#1a1a1a] to-[#111] p-4 rounded-2xl border border-gray-800 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10 transition duration-300"
                  >
                    <Product
                      _id={item._id}
                      img={item.img}
                      productName={item.productName}
                      price={item.price}
                      Oz={item.Oz}
                      badge={item.badge}
                      des={item.des}
                      rating={item.rating}
                    />
                  </div>
                ))}

              </div>
            ) : (
              <div className="flex justify-center items-center h-[300px]">
                <p className="text-gray-400 text-lg">
                  No products available in this category.
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;