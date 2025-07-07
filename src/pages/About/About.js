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

      <div className="pb-10 flex flex-col lg:flex-row items-center">
        {/* Text Section (Left) */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="max-w-[600px] text-base text-lightText mb-2">
            <span className="text-primeColor font-semibold text-lg">TRC</span>{" "}
            is your premier online destination for premium perfumes. We specialize in offering a carefully curated collection of authentic fragrances for both men and women—from luxury designer brands to niche and rare scents.
            <br /><br />
            At TRC, we believe that a great fragrance is more than just a scent—it's an experience. That’s why we’re committed to delivering only 100% genuine perfumes sourced directly from trusted suppliers. Whether you're looking for a personal signature scent or the perfect gift, our catalog is designed to inspire.
            <br /><br />
            Our user-friendly platform makes it easy to explore fragrance families, browse bestsellers, and discover new favorites. Every bottle is handled with care and attention, ensuring it reaches you in pristine condition. 
            <br /><br />
            We also prioritize customer satisfaction through secure checkout, responsive support, and fast, reliable shipping. With a commitment to quality and luxury, TRC is redefining the online perfume shopping experience—making elegance and sophistication just a click away.
            <br /><br />
            Choose TRC to explore a world of fine fragrances. Let your scent speak before you do.
          </h1>

          <h1 className="max-w-[600px] text-base text-lightText mb-2">
            <span className="text-primeColor font-semibold text-lg">Address</span>{" "}
            <br />
            2041 W Marconi Ave, Phoenix AZ 85023
            <br />
            Legal Name: RIDECONNECT LLC
          </h1>

          <Link to="/shop">
            <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
              Browse Perfumes
            </button>
          </Link>
        </div>

        {/* Video Section (Right) */}
        <div className="lg:w-1/2">
          <video
            className="w-full h-auto"
            controls
            autoPlay
            loop
          >
            <source src="/trcVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default About;
