import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaSearch } from "react-icons/fa";

const data = {
  "Orders & Shipping": [
    { q: "How long does shipping take?", a: "Shipping typically takes 3–7 business days depending on your location." },
    { q: "Do you offer international shipping?", a: "Yes, we ship to multiple countries." },
    { q: "Can I track my order?", a: "Yes, tracking link is provided after dispatch." },
    { q: "Do you offer express delivery?", a: "Yes, express shipping is available at checkout." },
    { q: "Can I change my shipping address?", a: "Only before order is shipped." },
    { q: "Do you ship on weekends?", a: "Orders are processed on working days only." },
  ],

  "Products": [
    { q: "Are your perfumes authentic?", a: "Yes, all perfumes are 100% original." },
    { q: "Do you sell testers?", a: "Yes, tester versions are available at lower price." },
    { q: "How long do perfumes last?", a: "Usually 6–10 hours depending on usage." },
    { q: "Do perfumes expire?", a: "They last years if stored properly." },
    { q: "Do you offer sample sizes?", a: "Yes, selected products include samples." },
    { q: "Are products safe for skin?", a: "Yes, but patch test is recommended." },
  ],

  "Returns & Refunds": [
    { q: "Can I return products?", a: "Yes, within 30 days if unused." },
    { q: "Do you offer refunds?", a: "Yes, after inspection." },
    { q: "How long do refunds take?", a: "5–7 business days." },
    { q: "Can I cancel order?", a: "Yes, before shipment." },
  ],

  "Tools & Equipment": [
    { q: "Are tools durable?", a: "Yes, industrial-grade quality." },
    { q: "Do tools have warranty?", a: "Yes, most include warranty." },
    { q: "Do you sell spare parts?", a: "Yes, replacement parts available." },
    { q: "Can beginners use tools?", a: "Yes, we offer beginner-friendly tools." },
  ],

  "Electronics": [
    { q: "Are electronics original?", a: "Yes, sourced from verified suppliers." },
    { q: "Do electronics come with warranty?", a: "Yes, included on most items." },
    { q: "Do you sell bulk electronics?", a: "Yes, for businesses." },
    { q: "Are products tested?", a: "Yes, all are quality checked." },
  ],

  "Cleaning Supplies": [
    { q: "Are cleaning products safe?", a: "Yes, when used properly." },
    { q: "Do you offer eco-friendly products?", a: "Yes, selected items available." },
    { q: "Can I buy in bulk?", a: "Yes, bulk orders supported." },
    { q: "Are products commercial grade?", a: "Yes, suitable for industries." },
  ],

  // ===============================
  // 🆕 NEW CATEGORIES ADDED
  // ===============================

  "Perfume Gifts": [
    { q: "Are perfume gift sets available?", a: "Yes, we offer premium gift sets." },
    { q: "Is packaging suitable for gifting?", a: "Yes, luxury gift packaging included." },
    { q: "Do gift sets include multiple perfumes?", a: "Some sets include mini fragrances." },
    { q: "Are perfumes original in gift sets?", a: "Yes, all are 100% original." },
  ],

  "Men Perfume": [
    { q: "What type of men perfumes do you offer?", a: "We offer fresh, woody, and strong masculine scents." },
    { q: "Are men perfumes long lasting?", a: "Yes, up to 10 hours depending on skin type." },
    { q: "Are these suitable for daily use?", a: "Yes, perfect for daily wear." },
    { q: "Do you offer luxury men perfumes?", a: "Yes, premium designer collections available." },
  ],

  "Women Perfume": [
    { q: "What types of women perfumes are available?", a: "Floral, fruity, and sweet fragrances." },
    { q: "Are women perfumes long lasting?", a: "Yes, 6–12 hours depending on usage." },
    { q: "Are these suitable for parties?", a: "Yes, perfect for special occasions." },
    { q: "Do you have luxury brands?", a: "Yes, premium fragrances available." },
  ],

  "Tester Perfume": [
    { q: "What is a tester perfume?", a: "It is the same fragrance in simple packaging." },
    { q: "Are testers original?", a: "Yes, same original fragrance." },
    { q: "Why are testers cheaper?", a: "Because they come without luxury packaging." },
    { q: "Do testers last long?", a: "Yes, same performance as regular perfumes." },
  ],

  "Children Perfume": [
    { q: "Are children perfumes safe?", a: "Yes, made with mild ingredients." },
    { q: "Are they alcohol-free?", a: "Many options are alcohol-free." },
    { q: "Do they have strong smell?", a: "No, they are light and soft fragrances." },
    { q: "Are they suitable for daily use?", a: "Yes, safe for daily application." },
  ],

  "Safety & Security": [
    { q: "Do you sell safety equipment?", a: "Yes, helmets, gloves, and protective gear." },
    { q: "Are products industrial grade?", a: "Yes, suitable for workplace safety." },
    { q: "Do you offer CCTV systems?", a: "Yes, security devices are available." },
    { q: "Are items certified?", a: "Yes, many products meet safety standards." },
  ],

  "Plumbing & HVAC": [
    { q: "Do you sell plumbing tools?", a: "Yes, full plumbing equipment available." },
    { q: "Do you offer HVAC systems?", a: "Yes, heating and cooling equipment available." },
    { q: "Are tools professional grade?", a: "Yes, for industrial and home use." },
    { q: "Do you sell spare parts?", a: "Yes, replacement parts available." },
  ],

  "Food Service": [
    { q: "Do you sell food service equipment?", a: "Yes, restaurant-grade tools and machines." },
    { q: "Is equipment suitable for restaurants?", a: "Yes, designed for commercial use." },
    { q: "Do you offer kitchen tools?", a: "Yes, full kitchen and cooking equipment." },
    { q: "Are items durable?", a: "Yes, built for heavy usage." },
  ],

  "Test Instruments": [
    { q: "What are test instruments used for?", a: "Used for measuring and industrial testing." },
    { q: "Are devices accurate?", a: "Yes, high precision instruments." },
    { q: "Do you offer digital gauges?", a: "Yes, modern digital tools available." },
    { q: "Are they calibrated?", a: "Yes, factory calibrated." },
  ],
};

const HelpCenter = () => {
  const [activeCategory, setActiveCategory] = useState("Orders & Shipping");
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const categories = Object.keys(data);

  const filteredFAQs = useMemo(() => {
    if (!search) return data[activeCategory];

    let all = [];
    Object.values(data).forEach((cat) => {
      all = [...all, ...cat];
    });

    return all.filter((item) =>
      item.q.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, activeCategory]);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-full min-h-screen bg-[#0f0f0f] text-white flex flex-col md:flex-row">

      {/* 🔥 MOBILE CATEGORY TABS */}
      <div className="md:hidden overflow-x-auto no-scrollbar px-4 py-3 border-b border-white/10">
        <div className="flex gap-3 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSearch("");
                setOpenIndex(null);
              }}
              className={`px-4 py-2 text-xs rounded-full whitespace-nowrap transition
                ${
                  activeCategory === cat
                    ? "bg-white text-black"
                    : "bg-white/10 text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 🔥 SIDEBAR (DESKTOP ONLY) */}
      <div className="hidden md:block md:w-1/4 border-r border-white/10 p-6">
        <h2 className="text-xl font-semibold mb-6">Help Center</h2>

        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSearch("");
                setOpenIndex(null);
              }}
              className={`w-full text-left px-4 py-2 rounded-lg text-sm transition ${
                activeCategory === cat
                  ? "bg-white/10"
                  : "hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 🔥 CONTENT */}
      <div className="flex-1 px-4 sm:px-6 md:px-10 py-6 md:py-10">

        {/* SEARCH */}
        <div className="max-w-xl mb-8 md:mb-10 relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
          <input
            type="text"
            placeholder="Search help..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setOpenIndex(null);
            }}
            className="w-full bg-[#111] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-white/20"
          />
        </div>

        {/* TITLE */}
        {!search && (
          <h3 className="text-xl sm:text-2xl font-semibold mb-6">
            {activeCategory}
          </h3>
        )}

        {/* FAQ LIST */}
        <div className="space-y-3 max-w-2xl">
          {filteredFAQs.length === 0 && (
            <p className="text-gray-500 text-sm">No results found</p>
          )}

          {filteredFAQs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="border border-white/10 rounded-xl bg-[#111]"
              >
                <div
                  onClick={() => toggle(i)}
                  className="flex justify-between items-center p-4 sm:p-5 cursor-pointer"
                >
                  <h4 className="text-xs sm:text-sm md:text-base pr-4">
                    {item.q}
                  </h4>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-gray-400 flex-shrink-0"
                  >
                    <FaPlus />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default HelpCenter;