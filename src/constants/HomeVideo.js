import React from "react";
import { motion } from "framer-motion";

const logos = [
  { src: "/walmart5.png", alt: "Walmart" },
  { src: "/shopify1.png", alt: "Shopify" },
  { src: "/tiktok1.png", alt: "TikTok" },
  { src: "/amazon3.png", alt: "Amazon" },
  { src: "/ebay3.png", alt: "eBay" }
];

const HomeVideo = () => {
  return (
    <div className="overflow-hidden  py-1">
      <motion.div
        className="flex space-x-8 w-full"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="h-16" />
        ))}
      </motion.div>
    </div>
  );
};

export default HomeVideo;
