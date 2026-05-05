import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import FooterListTitle from "./FooterListTitle";
import { paymentCard } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { Link } from "react-router-dom";

import bbb from "../../../assets/trust/bbb.png";
import dh from "../../../assets/trust/D&H.jpeg";

const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () =>
    String(emailInfo)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);

  const handleSubscription = () => {
    if (!emailInfo) setErrMsg("Enter your email");
    else if (!emailValidation()) setErrMsg("Invalid email");
    else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };

  const categories = [
    { name: "Giftsets", path: "/category/perfumes" },
    { name: "Men", path: "/category/male" },
    { name: "Women", path: "/category/female" },
    { name: "Children", path: "/category/children" },
    { name: "Tester", path: "/category/tester" },
  ];

  return (
    <div className="relative w-full bg-[#0f0f0f] border-t border-white/10 overflow-hidden">

      {/* TOP */}
      <div className="py-12 sm:py-16 md:py-20">

        {/* glow */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/5 blur-[120px] top-[-100px] left-[-100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto 
          grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 
          gap-8 sm:gap-10 md:gap-12 
          px-4 sm:px-6"
        >

          {/* ABOUT */}
          <div className="text-white">
            <FooterListTitle title="About Us" />
            <p className="text-lightText text-xs sm:text-sm mt-4 leading-relaxed">
            With over 3 years of experience in the ecommerce industry, we are dedicated to delivering high-quality products backed by reliability, transparency, and customer satisfaction. Our mission is to create a seamless shopping experience where customers can shop with confidence, knowing they are receiving genuine products at competitive prices. From secure payments to fast shipping and responsive support, every step of our process is designed to build trust and long-term relationships with our customers.
            </p>
          </div>

          {/* SHOP */}
          <div className="text-white">
            <FooterListTitle title="Shop" />
            <ul className="text-white mt-4 space-y-2 sm:space-y-3">
              {categories.map((c, i) => (
                <MagneticLink key={i} to={c.path}>
                  {c.name}
                </MagneticLink>
              ))}
            </ul>
          </div>

          {/* ACCOUNT */}
          <div className="text-white">
            <FooterListTitle title="Account" />
            <ul className="mt-4 space-y-2 sm:space-y-3">
              {["Profile", "Orders", "Addresses", "Payments"].map((item, i) => (
                <MagneticText key={i}>{item}</MagneticText>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="text-white">
            <FooterListTitle title="Stay Updated" />

            <div className="mt-5 sm:mt-6">
              {subscription ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-500 text-xs sm:text-sm text-white"
                >
                  You're subscribed ✔
                </motion.p>
              ) : (
                <>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      value={emailInfo}
                      onChange={(e) => setEmailInfo(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 bg-black border border-white/10 px-4 py-2 sm:py-3 text-xs sm:text-sm text-white outline-none focus:border-white/30"
                    />

                    <button
                      onClick={handleSubscription}
                      className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm border border-white text-white hover:bg-white hover:text-black transition"
                    >
                      Subscribe
                    </button>
                  </div>

                  {errMsg && (
                    <p className="text-red-500 text-[11px] mt-2">{errMsg}</p>
                  )}
                </>
              )}
            </div>
          </div>

        </motion.div>
      </div>

      {/* TRUST */}
      <div className="border-t border-white/10 py-12 sm:py-14 md:py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

          <p className="text-[10px] sm:text-xs tracking-[0.3em] text-gray-500 uppercase">
            Trusted & Verified
          </p>

          <h3 className="text-lg sm:text-2xl md:text-3xl text-white font-semibold mt-3">
            Built on Trust. Backed by Results.
          </h3>

          {/* STATS */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 text-xs sm:text-sm text-gray-400">
            <div>⭐ 4.8/5 Rating</div>
            <div>🚚 Fast US Shipping</div>
            <div>🔥 10,000+ Orders Delivered</div>
          </div>

          {/* LOGOS */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-16 mt-8 sm:mt-10">
            <img
              src={bbb}
              alt="BBB"
              className="h-10 sm:h-14 md:h-16 object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
            />
            <img
              src={dh}
              alt="D&H"
              className="h-10 sm:h-14 md:h-16 object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
            />
          </div>

          {/* PAYMENT */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <Image
              className="w-[80%] sm:w-[60%] md:w-[40%] opacity-70"
              imgSrc={paymentCard}
            />
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/5 py-5 sm:py-6 text-center text-[10px] sm:text-xs text-gray-500">
        © {new Date().getFullYear()} TRC Shop — All rights reserved
      </div>

    </div>
  );
};

export default Footer;

////////////////////////////////////////////////////
// MAGNETIC LINK (DISABLED ON MOBILE)
////////////////////////////////////////////////////
const MagneticLink = ({ children, to }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const isMobile = window.innerWidth < 768;

  const handleMove = (e) => {
    if (isMobile) return;

    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.2);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.2);
  };

  return (
    <motion.li
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="text-xs sm:text-sm text-lightText hover:text-white cursor-pointer"
    >
      <Link to={to} className="relative inline-block group">
        {children}
        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
      </Link>
    </motion.li>
  );
};

////////////////////////////////////////////////////
// MAGNETIC TEXT
////////////////////////////////////////////////////
const MagneticText = ({ children }) => (
  <motion.li
    whileHover={{ x: 4 }}
    className="text-xs sm:text-sm text-lightText hover:text-white cursor-pointer transition"
  >
    {children}
  </motion.li>
);