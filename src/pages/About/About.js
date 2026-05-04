import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const prevLocation = location.state?.data || "Home";

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">

        <Breadcrumbs title="About" prevLocation={prevLocation} />

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-[#151515] border border-gray-800 rounded-2xl p-8 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row gap-10 items-center">

            {/* LEFT CONTENT */}
            <div className="lg:w-1/2 space-y-6">

              <h1 className="text-3xl font-bold">
                About <span className="text-yellow-400">RIDECONNECT</span>
              </h1>

              <p className="text-gray-400 leading-relaxed">
                RIDECONNECT is your all-in-one online marketplace designed to bring
                together a wide range of high-quality products across multiple
                industries. From tools and industrial equipment to electronics,
                office supplies, cleaning essentials, and lifestyle products—we
                make sourcing everything you need simple and efficient.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Our mission is to provide a seamless shopping experience backed by
                reliability, quality, and innovation. Whether you're a business
                owner, professional, or everyday customer, our platform is built
                to serve your needs with precision and ease.
              </p>

              <p className="text-gray-400 leading-relaxed">
                With a focus on customer satisfaction, we offer secure checkout,
                fast shipping, and responsive support. Every product is carefully
                selected to meet high standards, ensuring you get the best value
                every time you shop.
              </p>

              {/* FEATURES GRID */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  "Tools & Equipment",
                  "Office Supplies",
                  "Electronics",
                  "Cleaning & Janitorial",
                  "Outdoor & Sports",
                  "Industrial Solutions",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#1a1a1a] p-3 rounded-md border border-gray-700 text-sm text-center"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              {/* ADDRESS */}
              <div className="text-gray-400 mt-6">
                <p className="font-semibold text-white">Address</p>
                <p>2041 W Marconi Ave, Phoenix AZ 85023</p>
                <p>Legal Name: RIDECONNECT LLC</p>
              </div>

              {/* BUTTON */}
              <Link to="/shop">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
                >
                  Explore Products
                </motion.button>
              </Link>
            </div>

            {/* RIGHT VIDEO */}
            <div className="lg:w-1/2">
              <motion.video
                whileHover={{ scale: 1.02 }}
                className="w-full rounded-xl shadow-lg border border-gray-800"
                controls
                autoPlay
                loop
                muted
              >
                <source src="/trcVideo.mp4" type="video/mp4" />
              </motion.video>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;