import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

// 🔥 PRODUCTS
import productsData from "../../category/productsData";

// images
import tools from "../../../assets/images/categoryGird2/tools.png";
import office from "../../../assets/images/categoryGird2/office-and-shipping.png";
import plumbing from "../../../assets/images/categoryGird2/plumbing-and-hvac.png";
import safety from "../../../assets/images/categoryGird2/safety-and-security.png";
import electronics from "../../../assets/images/categoryGird2/monitors-displays-and-projectors.png";
import janitorial from "../../../assets/images/categoryGird2/cleaning-supplies.png";
import perfume from "../../../assets/images/giftsets/gs4.jpg";

// 🔥 Item
const Item = ({ icon, label, link, badge }) => (
  <Link to={link} className="relative flex items-center gap-2 group">
    {icon}
    <span className="hidden group-hover:block text-sm">{label}</span>

    {badge > 0 && (
      <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-1.5 rounded-full">
        {badge}
      </span>
    )}
  </Link>
);

// 🔥 Categories (MANUAL LINKS ONLY)
const categoriesData = [
  {
    title: "Tools",
    key: "tools",
    path: "/category/tools",
    image: tools,
    sections: [
      {
        title: "Hand Tools",
        links: [
          { name: "Hammer", path: "/category/tools?type=hammer" },
          { name: "Wrench", path: "/category/tools?type=wrench" },
          { name: "Screwdriver", path: "/category/tools?type=screwdriver" },
          { name: "Pliers", path: "/category/tools?type=pliers" },
        ],
      },
      {
        title: "Power Tools",
        links: [
          { name: "Drill", path: "/category/tools?type=drill" },
          { name: "Saw", path: "/category/tools?type=saw" },
          { name: "Grinder", path: "/category/tools?type=grinder" },
        ],
      },
    ],
  },
  {
    title: "Office Supplies",
    key: "office",
    path: "/category/office",
    image: office,
    sections: [
      {
        title: "Stationery",
        links: [
          { name: "Pens", path: "/category/office?type=pens" },
          { name: "Paper", path: "/category/office?type=paper" },
          { name: "Notebooks", path: "/category/office?type=notebooks" },
        ],
      },
      {
        title: "Shipping",
        links: [
          { name: "Boxes", path: "/category/office?type=boxes" },
          { name: "Tape", path: "/category/office?type=tape" },
        ],
      },
    ],
  },
  {
    title: "Cleaning",
    key: "cleaning",
    path: "/category/cleaning",
    image: janitorial,
    sections: [
      {
        title: "Tools",
        links: [
          { name: "Mops", path: "/category/cleaning?type=mops" },
          { name: "Brooms", path: "/category/cleaning?type=brooms" },
        ],
      },
    ],
  },
  {
    title: "Plumbing",
    key: "plumbing",
    path: "/category/plumbing",
    image: plumbing,
    sections: [
      {
        title: "Pipes",
        links: [
          { name: "PVC Pipes", path: "/category/plumbing?type=pvc" },
          { name: "Steel Pipes", path: "/category/plumbing?type=steel" },
        ],
      },
    ],
  },
  {
    title: "Safety",
    key: "safety",
    path: "/category/safety",
    image: safety,
    sections: [
      {
        title: "Protection",
        links: [
          { name: "Gloves", path: "/category/safety?type=gloves" },
          { name: "Helmets", path: "/category/safety?type=helmets" },
        ],
      },
    ],
  },
  {
    title: "Electronics",
    key: "electronics",
    path: "/category/electronics",
    image: electronics,
    sections: [
      {
        title: "Devices",
        links: [
          { name: "Laptops", path: "/category/electronics?type=laptops" },
          { name: "Phones", path: "/category/electronics?type=phones" },
        ],
      },
    ],
  },
  {
    title: "Perfumes",
    key: "perfumes",
    path: "/category/perfumes",
    image: perfume,
    sections: [
      {
        title: "Types",
        links: [
          { name: "Men", path: "/category/male" },
          { name: "Women", path: "/category/female" },
          { name: "Tester", path: "/category/tester" },
        ],
      },
    ],
  },
];

const Header = () => {
  const cartProducts = useSelector((state) => state.orebiReducer.products);
  const navigate = useNavigate();

  // 🔥 SEARCH
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const allProducts = Object.values(productsData).flat();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value.trim()) {
      setSearchResults([]);
      setShowSearch(false);
      return;
    }

    const filtered = allProducts.filter((item) =>
      item.productName.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filtered.slice(0, 6));
    setShowSearch(true);
  };

  const handleSelectProduct = (id) => {
    setSearchTerm("");
    setShowSearch(false);
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    const close = () => setShowSearch(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  // 🔥 MEGA MENU
  const [showMega, setShowMega] = useState(false);
  const [activeCat, setActiveCat] = useState(categoriesData[0]);
  const timeoutRef = useRef(null);

  const openMenu = () => {
    clearTimeout(timeoutRef.current);
    setShowMega(true);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setShowMega(false), 150);
  };

  return (
    <div className="w-full bg-[#0f0f0f] sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-20">

        {/* LEFT */}
        <div className="flex items-center gap-6">

          <Link to="/">
            <h1 className="text-white text-2xl font-extrabold">
              RIDE<span className="text-yellow-400">CONNECT</span>
            </h1>
          </Link>

          {/* MEGA MENU */}
          <div
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
          >
            <div className="flex items-center gap-2 text-white cursor-pointer px-3 py-2 hover:bg-[#1a1a1a] rounded">
              <HiOutlineMenu />
              Categories
            </div>

            <AnimatePresence>
              {showMega && (
                <motion.div className="absolute left-0 top-full mt-2 w-[1000px] bg-white text-black rounded-xl shadow-xl flex">

                  {/* LEFT */}
                  <div className="w-[260px] bg-gray-50 border-r">
                    {categoriesData.map((cat) => (
                      <Link
                        key={cat.key}
                        to={cat.path}
                        onMouseEnter={() => setActiveCat(cat)}
                        className={`px-4 py-3 flex items-center gap-2 ${
                          activeCat.key === cat.key
                            ? "bg-white font-semibold"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <img src={cat.image} className="w-7 h-7" />
                        {cat.title}
                      </Link>
                    ))}
                  </div>

                  {/* RIGHT */}
                  <div className="flex-1 p-6 grid grid-cols-3 gap-6">
                    {activeCat.sections.map((sec, i) => (
                      <div key={i}>
                        <h3 className="font-semibold mb-3">{sec.title}</h3>
                        {sec.links.map((l, j) => (
                          <Link
                            key={j}
                            to={l.path}
                            className="block text-sm text-gray-600 hover:text-black mb-1"
                          >
                            {l.name}
                          </Link>
                        ))}
                      </div>
                    ))}

                    <div>
                      <h3 className="font-semibold mb-3">Featured</h3>
                      <img src={activeCat.image} className="w-full h-28 object-cover rounded" />
                      <Link
                        to={activeCat.path}
                        className="mt-3 block w-full bg-black text-white py-2 rounded text-center"
                      >
                        Shop All
                      </Link>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/" className="text-white">Home</NavLink>
          <NavLink to="/shop" className="text-white">Shop</NavLink>
          <NavLink to="/about" className="text-white">About</NavLink>
          <NavLink to="/contact" className="text-white">Contact</NavLink>
        </div>

        {/* SEARCH */}
        <div className="relative w-[40%]" onClick={(e) => e.stopPropagation()}>
          <input
            value={searchTerm}
            onChange={handleSearch}
            className="w-full h-10 px-3 rounded-md outline-none"
            placeholder="Search products..."
          />

          {showSearch && (
            <div className="absolute top-full left-0 w-full bg-white text-black shadow-xl rounded-md max-h-80 overflow-y-auto">
              {searchResults.map((item) => (
                <div
                  key={item._id}
                  onClick={() => handleSelectProduct(item._id)}
                  className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer"
                >
                  <img src={item.img} className="w-10 h-10 rounded" />
                  <div>
                    <p className="text-sm">{item.productName}</p>
                    <p className="text-xs text-gray-500">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5 text-white">
          <Item icon={<FiUser />} label="Profile" link="/signin" />
          <Item
            icon={<RiShoppingCart2Fill />}
            label="Cart"
            link="/cart"
            badge={cartProducts?.length || 0}
          />
        </div>

      </div>
    </div>
  );
};

export default Header;