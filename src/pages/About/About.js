import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">RTC</span>{" "}
          ,  is your premier destination for a seamless e-commerce experience. As a pioneering e-commerce platform, RTC is committed to providing a diverse range of high-quality products, ensuring that customers find everything they need in one convenient space.

          At RTC, we prioritize reliability, transparency, and customer satisfaction. Our platform boasts a user-friendly interface, making online shopping a breeze for customers of all backgrounds. We understand the importance of trust in the online marketplace, and that's why we have stringent quality control measures in place to guarantee the authenticity and excellence of every product we offer.

          Our commitment extends beyond the transaction – we aim to build lasting relationships with our customers. From trending fashion and cutting-edge electronics to everyday essentials, RTC curates a catalog that meets the evolving needs and preferences of our diverse customer base.

          With a focus on innovation and efficiency, RTC utilizes the latest e-commerce technologies to streamline the shopping process. Our secure payment gateways and efficient logistics ensure a smooth and secure transaction from the moment you browse our website to the arrival of your carefully packaged order at your doorstep.

          Choose RTC for a reliable, convenient, and enjoyable online shopping experience. Join us in the exciting journey of e-commerce, where quality meets convenience.l
          looking style.
        </h1>
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Address</span>{" "}
          <br></br>
          2041 W Marconi Ave, Phoenix AZ 85023
          Legal Name: RIDECONNECT LLC
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
