import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import FooterListTitle from "./FooterListTitle";
import { paymentCard } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { Link } from "react-router-dom";

// ✅ IMPORT TRUST IMAGES
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
    if (!emailInfo) {
      setErrMsg("Enter your email");
    } else if (!emailValidation()) {
      setErrMsg("Invalid email");
    } else {
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
  
      {/* 🔥 TOP SECTION */}
      <div className="py-20">
  
        {/* glow */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute w-[500px] h-[500px] bg-white/5 blur-[120px] top-[-100px] left-[-100px]" />
        </div>
  
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 px-6"
        >
  
          {/* ABOUT */}
          <div className="text-white">
            <FooterListTitle title="About TRC Shop" />
            <p className="text-lightText text-sm mt-4 leading-relaxed">
              Premium fragrances curated for identity and presence. Authentic,
              long-lasting, and crafted for those who value elegance.
            </p>
          </div>
  
          {/* SHOP */}
          <div className="text-white">
            <FooterListTitle title="Shop" />
            <ul className="mt-4 space-y-3">
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
            <ul className="mt-4 space-y-3">
              {["Profile", "Orders", "Addresses", "Payments"].map((item, i) => (
                <MagneticText key={i}>{item}</MagneticText>
              ))}
            </ul>
          </div>
  
          {/* 🔥 NEWSLETTER (NOW INLINE) */}
          <div className="text-white">
            <FooterListTitle title="Stay Updated" />
  
            <div className="mt-6">
              {subscription ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-500 text-sm"
                >
                  You're subscribed ✔
                </motion.p>
              ) : (
                <>
                  <div className="flex flex-col gap-4">
                    <input
                      value={emailInfo}
                      onChange={(e) => setEmailInfo(e.target.value)}
                      placeholder="Enter your email"
                      className="bg-black border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-white/30"
                    />
  
                    <button
                      onClick={handleSubscription}
                      className="px-6 py-3 text-sm border border-white text-white hover:bg-white hover:text-black transition"
                    >
                      Subscribe
                    </button>
                  </div>
  
                  {errMsg && (
                    <p className="text-red-500 text-xs mt-2">{errMsg}</p>
                  )}
                </>
              )}
            </div>
          </div>
  
        </motion.div>
      </div>
  
      {/* 🔥 TRUST SECTION (FULL WIDTH BIG) */}
      <div className="border-t border-white/10 py-16">
  
        <div className="max-w-7xl mx-auto px-6 text-center">
  
          {/* HEADLINE */}
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
            Trusted & Verified
          </p>
  
          <h3 className="text-2xl md:text-3xl text-white font-semibold mt-3">
            Built on Trust. Backed by Results.
          </h3>
  
          {/* STATS */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm text-gray-400">
  
            <div className="flex items-center gap-2">
              ⭐ <span>4.8/5 Rating</span>
            </div>
  
            <div className="flex items-center gap-2">
              🚚 <span>Fast US Shipping</span>
            </div>
  
            <div className="flex items-center gap-2">
              🔥 <span>10,000+ Orders Delivered</span>
            </div>
  
          </div>
  
          {/* 🔥 BIG LOGOS */}
          {/* <div className="flex justify-center items-center gap-16 mt-10">
  
            <img
              src={bbb}
              alt="BBB"
              className="h-14 md:h-16 object-contain opacity-80 grayscale 
              hover:grayscale-0 hover:opacity-100 hover:scale-110 
              transition duration-300"
            />
  
            <img
              src={dh}
              alt="D&H"
              className="h-14 md:h-16 object-contain opacity-80 grayscale 
              hover:grayscale-0 hover:opacity-100 hover:scale-110 
              transition duration-300"
            />
  
          </div> */}
  
          {/* PAYMENT */}
          <div className="mt-10 flex justify-center">
            <Image
              className="w-[60%] md:w-[40%] opacity-70"
              imgSrc={paymentCard}
            />
          </div>
  
        </div>
      </div>
  
      {/* 🔥 BOTTOM */}
      <div className="border-t border-white/5 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} TRC Shop — All rights reserved
      </div>
  
    </div>
  );
};

export default Footer;

////////////////////////////////////////////////////
// 🔥 MAGNETIC LINK
////////////////////////////////////////////////////
const MagneticLink = ({ children, to }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.2);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.li
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="text-sm text-lightText hover:text-white cursor-pointer"
    >
      <Link to={to} className="relative inline-block group">
        {children}
        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
      </Link>
    </motion.li>
  );
};

////////////////////////////////////////////////////
// 🔥 MAGNETIC TEXT
////////////////////////////////////////////////////
const MagneticText = ({ children }) => {
  return (
    <motion.li
      whileHover={{ x: 4 }}
      className="text-sm text-lightText hover:text-white cursor-pointer transition"
    >
      {children}
    </motion.li>
  );
};