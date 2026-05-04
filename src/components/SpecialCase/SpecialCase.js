import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdSwitchAccount, MdOutlineCompare } from "react-icons/md";
import { FaHeart, FaArrowUp } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const SpecialCase = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [open, setOpen] = useState(true);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const Item = ({ icon, label, link, onClick, badge }) => (
    <motion.div
      initial={false}
      whileHover={{ width: 160 }}
      className="group flex items-center w-12 hover:w-40 h-12 bg-[#1a1a1a]/90 backdrop-blur-md text-white rounded-full shadow-lg border border-gray-700 hover:border-yellow-400 hover:shadow-[0_0_12px_rgba(255,200,0,0.5)] overflow-hidden transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      {link ? (
        <Link to={link} className="flex items-center w-full">
          
          {/* ICON (FIXED CENTER) */}
          <div className="min-w-[48px] h-12 flex items-center justify-center relative">
            {icon}
            {badge > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {badge}
              </span>
            )}
          </div>

          {/* LABEL */}
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-sm pr-4">
            {label}
          </span>

        </Link>
      ) : (
        <div className="flex items-center w-full">
          <div className="min-w-[48px] h-12 flex items-center justify-center">
            {icon}
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-sm pr-4">
            {label}
          </span>
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-4 z-50 hidden md:flex flex-col items-end gap-4">

      {/* TOGGLE */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="bg-yellow-400 text-black w-12 h-12 rounded-full shadow-lg font-bold flex items-center justify-center"
      >
        {open ? "−" : "+"}
      </motion.button>

      {/* ITEMS */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-4"
          >
            <Item icon={<MdSwitchAccount size={20} />} label="Profile" link="/signin" />
            <Item icon={<RiShoppingCart2Fill size={20} />} label="Cart" link="/cart" badge={products.length} />
            <Item icon={<FaHeart size={18} />} label="Wishlist" link="/offer" />
            <Item icon={<MdOutlineCompare size={20} />} label="Compare" link="/cart" />
            <Item icon={<BsChatDotsFill size={18} />} label="Support" link="/contact"/>
            <Item icon={<FaArrowUp size={18} />} label="Top" onClick={scrollTop} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpecialCase;



