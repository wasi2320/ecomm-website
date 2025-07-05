import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
import Product from "../../components/home/Products/Product";
import productsData from "./productsData";
// Category mapping to map URL category to productsData key
const categoryProductMapping = {
  // "tools": "tools",
  // "office": "office_shipping",
  // "plumbing": "plumbing",
  // "safety": "safety_security",
  // "grounds": "grounds_outdoor",
  // "heating": "heating_cooling",
  // "electronics": "electronics",
  // "cleaning": "janitorial_cleaning",
  // "food": "food_service",
  // "test": "test_instruments",
  "perfumes": "perfumes",
  "male":"male",
  "female":"female"
  
};

const CategoryPage = () => {
  const { category } = useParams(); // Get category name from URL

  // Map the category to the corresponding product key
  const categoryKey = categoryProductMapping[category.toLowerCase()];
  const products = categoryKey ? productsData[categoryKey] : []; // Get products for the selected category

  return (
    <div>
      <div className="max-w-container mx-auto px-4">
        <Breadcrumbs title={category.charAt(0).toUpperCase() + category.slice(1)} />

        <div className="w-full h-full flex pb-20 gap-10">
          {/* Sidebar */}
          <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
            <ShopSideNav />
          </div>

          {/* Main Content */}
          <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map((item) => (
                  <Product
                    key={item._id}
                    _id={item._id}
                    img={item.img}
                    productName={item.productName}
                    price={item.price}
                    Oz={item.Oz}
                    badge={item.badge}
                    des={item.des}
                    rating={item.rating}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No products available in this category.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
