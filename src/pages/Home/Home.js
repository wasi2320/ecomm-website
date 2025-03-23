import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import CategoryGrid from "../../components/category/categoruGrid/CategoryGrid";
import CategoryOrbit from "../../components/category/categoruGrid/CategoryOrbit";
import FAQSection from "../../components/Faq/FAQSection";
import BusinessGraph from "../../components/category/Bussiness/BussinessGraph";
const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div className="max-w-container-fluid mx-auto px-4">
        <Sale />
        <div className="w-full bg-gradient-to-b from-[#374151] to-[#000000] py-16 px-6 text-white rounded ">
        <NewArrivals />
        </div >
        {/* <BestSellers /> */}
        
        {/* <SpecialOffers /> */}
        <CategoryGrid /> 
        <YearProduct />
        <BusinessGraph />
        <FAQSection />
       
        
        
      </div>
    </div>
  );
};

export default Home;
