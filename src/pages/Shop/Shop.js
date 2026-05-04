import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
import productsData from "../../components/category/productsData";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);

  // 🔥 Combine ALL products
  const allProducts = Object.values(productsData).flat();

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 py-8">

        <Breadcrumbs title="Shop" />

        <div className="flex gap-8 mt-6">

          {/* Sidebar */}
          <div className="w-[260px] hidden lg:block">
            <div className="sticky top-24 bg-[#1a1a1a] p-5 rounded-2xl border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              <ShopSideNav />
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            <Pagination 
              itemsPerPage={itemsPerPage} 
              items={allProducts} 
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Shop;