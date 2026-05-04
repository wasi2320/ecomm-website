import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaSearch } from "react-icons/fa";

const data = {
  "Orders & Shipping": [
    { q: "How long does shipping take?", a: "Shipping typically takes 3–7 business days depending on your location." },
    { q: "Do you offer international shipping?", a: "Yes, we ship to multiple countries. Delivery time may vary based on region." },
    { q: "Can I track my order?", a: "Yes, you will receive a tracking link once your order is dispatched." },
    { q: "What happens if my order is delayed?", a: "If your order is delayed, our support team will notify you and assist with updates." },
    { q: "Do you offer express shipping?", a: "Yes, express delivery options are available at checkout." },
    { q: "How are orders packaged?", a: "All products are securely packaged to ensure safe delivery." },
  ],

  "Products": [
    { q: "Are your perfumes authentic?", a: "Yes, all perfumes are 100% original and sourced from trusted suppliers." },
    { q: "How long do perfumes last?", a: "Most fragrances last between 6–10 hours depending on skin type and environment." },
    { q: "Do you sell tester perfumes?", a: "Yes, tester perfumes are available at a lower price with the same fragrance quality." },
    { q: "What types of perfumes do you offer?", a: "We offer Eau de Parfum, Eau de Toilette, and premium fragrance collections." },
    { q: "Are your perfumes suitable for gifting?", a: "Yes, our perfumes come in elegant packaging, perfect for gifts." },
    { q: "Do you offer niche fragrances?", a: "Yes, we provide both designer and niche perfume collections." },
    { q: "How should I apply perfume for best results?", a: "Apply on pulse points like wrists and neck for longer-lasting scent." },
    { q: "Do perfumes expire?", a: "Perfumes can last several years if stored properly away from heat and sunlight." },
    { q: "Are your products safe for sensitive skin?", a: "Most are safe, but we recommend testing on a small area first." },
    { q: "Do you restock sold-out products?", a: "Yes, popular items are restocked regularly based on availability." },
  ],

  "Returns & Refunds": [
    { q: "Can I return a product?", a: "Yes, returns are accepted within 30 days if the product is unopened." },
    { q: "Do you offer refunds?", a: "Yes, refunds are processed after inspection of returned items." },
    { q: "Can I exchange a product?", a: "Yes, exchanges are available for eligible products." },
    { q: "What if I receive a damaged item?", a: "Contact us immediately and we will arrange a replacement or refund." },
    { q: "Are shipping fees refundable?", a: "Shipping fees are non-refundable unless the error is from our side." },
    { q: "How long do refunds take?", a: "Refunds are typically processed within 5–7 business days." },
  ],

  "Tools & Equipment": [
    { q: "What types of tools do you offer?", a: "We offer hand tools, power tools, and industrial equipment." },
    { q: "Are your tools durable?", a: "Yes, our tools are built for long-term professional use." },
    { q: "Do tools come with warranty?", a: "Many tools include manufacturer warranties." },
    { q: "Are tools suitable for heavy-duty work?", a: "Yes, they are designed for demanding environments." },
    { q: "Do you sell tool accessories?", a: "Yes, we offer a wide range of accessories and attachments." },
    { q: "Can beginners use your tools?", a: "Yes, we offer tools suitable for both beginners and professionals." },
  ],

  "Electronics": [
    { q: "What electronics do you sell?", a: "We offer monitors, displays, and essential electronic equipment." },
    { q: "Do electronics come with warranty?", a: "Yes, most electronics include warranty coverage." },
    { q: "Are your electronics original?", a: "Yes, all electronics are sourced from verified suppliers." },
    { q: "Do you offer bulk electronics?", a: "Yes, bulk orders are available for businesses." },
    { q: "Can I return electronics?", a: "Yes, returns are accepted based on our return policy." },
    { q: "Are your products tested?", a: "Yes, all electronics are quality checked before dispatch." },
  ],

  "Cleaning Supplies": [
    { q: "Do you sell industrial cleaning products?", a: "Yes, we provide both household and industrial cleaning supplies." },
    { q: "Are cleaning products safe?", a: "Yes, when used as निर्देशed, they are safe and effective." },
    { q: "Do you offer eco-friendly options?", a: "Yes, selected eco-friendly products are available." },
    { q: "Can I buy in bulk?", a: "Yes, bulk purchasing options are available." },
    { q: "Are products suitable for commercial use?", a: "Yes, many are designed for commercial environments." },
    { q: "Do you restock frequently?", a: "Yes, popular cleaning items are restocked regularly." },
  ],
};

const HelpCenter = () => {
  const [activeCategory, setActiveCategory] = useState("Orders & Shipping");
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const categories = Object.keys(data);

  // 🔥 Filtered FAQs
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
      
      {/* 🔥 SIDEBAR */}
      <div className="md:w-1/4 border-r border-white/10 p-6">
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
      <div className="flex-1 p-6 md:p-10">

        {/* Search */}
        <div className="max-w-xl mb-10 relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
          <input
            type="text"
            placeholder="Search help..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setOpenIndex(null);
            }}
            className="w-full bg-[#111] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-white/20"
          />
        </div>

        {/* Title */}
        {!search && (
          <h3 className="text-2xl font-semibold mb-6">
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
                  className="flex justify-between items-center p-5 cursor-pointer"
                >
                  <h4 className="text-sm md:text-base">{item.q}</h4>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-gray-400"
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
                      <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
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