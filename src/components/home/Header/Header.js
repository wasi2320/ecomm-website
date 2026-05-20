import React, { useState, useRef, useEffect, useMemo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FiUser,
  FiSearch,
  FiChevronRight,
} from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useSelector } from "react-redux";

import productsData from "../../category/productsData";

// images
import tools from "../../../assets/images/categoryGird2/tools.png";
import office from "../../../assets/images/categoryGird2/office-and-shipping.png";
import plumbing from "../../../assets/images/categoryGird2/plumbing-and-hvac.png";
import safety from "../../../assets/images/categoryGird2/safety-and-security.png";
import electronics from "../../../assets/images/categoryGird2/monitors-displays-and-projectors.png";
import janitorial from "../../../assets/images/categoryGird2/cleaning-supplies.png";
import perfume from "../../../assets/images/giftsets/gs4.jpg";
import ground from "../../../assets/images/categoryGird2/grounds-maintenance-and-outdoor-equipment.png";
import foodService from "../../../assets/images/categoryGird2/G5201001.png";
import testInstruments from "../../../assets/images/categoryGird2/test-instruments-and-gauges.png";



//////////////////////////////////////////////////////////
// DATA
//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
// DATA
//////////////////////////////////////////////////////////

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
          { name: "Hammers", path: "/category/tools?type=hammers" },
          { name: "Screwdrivers", path: "/category/tools?type=screwdrivers" },
          { name: "Wrenches", path: "/category/tools?type=wrenches" },
        ],
      },
      {
        title: "Power Tools",
        links: [
          { name: "Drills", path: "/category/tools?type=drills" },
          { name: "Grinders", path: "/category/tools?type=grinders" },
          { name: "Saws", path: "/category/tools?type=saws" },
        ],
      },
    ],
  },

  {
    title: "Office",
    key: "office",
    path: "/category/office",
    image: office,
    sections: [
      {
        title: "Office Essentials",
        links: [
          { name: "Pens", path: "/category/office?type=pens" },
          { name: "Notebooks", path: "/category/office?type=notebooks" },
          { name: "Staplers", path: "/category/office?type=staplers" },
        ],
      },
      {
        title: "Organization",
        links: [
          { name: "Files", path: "/category/office?type=files" },
          { name: "Folders", path: "/category/office?type=folders" },
          { name: "Binders", path: "/category/office?type=binders" },
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
        title: "Cleaning Tools",
        links: [
          { name: "Mops", path: "/category/cleaning?type=mops" },
          { name: "Brooms", path: "/category/cleaning?type=brooms" },
          { name: "Brushes", path: "/category/cleaning?type=brushes" },
        ],
      },
      {
        title: "Cleaning Supplies",
        links: [
          { name: "Detergents", path: "/category/cleaning?type=detergents" },
          { name: "Disinfectants", path: "/category/cleaning?type=disinfectants" },
          { name: "Towels", path: "/category/cleaning?type=towels" },
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
        title: "Pipe Systems",
        links: [
          { name: "PVC Pipes", path: "/category/plumbing?type=pvc" },
          { name: "Copper Pipes", path: "/category/plumbing?type=copper" },
          { name: "Fittings", path: "/category/plumbing?type=fittings" },
        ],
      },
      {
        title: "Valves & Fixtures",
        links: [
          { name: "Ball Valves", path: "/category/plumbing?type=ball-valves" },
          { name: "Faucets", path: "/category/plumbing?type=faucets" },
          { name: "Hose Bibbs", path: "/category/plumbing?type=hose-bibbs" },
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
        title: "Personal Protection",
        links: [
          { name: "Gloves", path: "/category/safety?type=gloves" },
          { name: "Helmets", path: "/category/safety?type=helmets" },
          { name: "Goggles", path: "/category/safety?type=goggles" },
        ],
      },
      {
        title: "Workwear",
        links: [
          { name: "Safety Vests", path: "/category/safety?type=vests" },
          { name: "Boots", path: "/category/safety?type=boots" },
          { name: "Face Shields", path: "/category/safety?type=face-shields" },
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
          { name: "Monitors", path: "/category/electronics?type=monitors" },
          { name: "Smart Watches", path: "/category/electronics?type=smartwatches" },
        ],
      },
      {
        title: "Accessories",
        links: [
          { name: "Chargers", path: "/category/electronics?type=chargers" },
          { name: "Cables", path: "/category/electronics?type=cables" },
          { name: "Headphones", path: "/category/electronics?type=headphones" },
        ],
      },
    ],
  },

  // {
  //   title: "Perfumes",
  //   key: "perfumes",
  //   path: "/category/perfumes",
  //   image: perfume,
  //   sections: [
  //     {
  //       title: "For Men",
  //       links: [
  //         { name: "Classic", path: "/category/male?type=classic" },
  //         { name: "Sport", path: "/category/male?type=sport" },
  //         { name: "Luxury", path: "/category/male?type=luxury" },
  //       ],
  //     },
  //     {
  //       title: "For Women",
  //       links: [
  //         { name: "Floral", path: "/category/female?type=floral" },
  //         { name: "Sweet", path: "/category/female?type=sweet" },
  //         { name: "Luxury", path: "/category/female?type=luxury" },
  //       ],
  //     },
  //   ],
  // },

  // ✅ NEW CATEGORY 1
  {
    title: "Grounds & Outdoor",
    key: "grounds_outdoor",
    path: "/category/grounds",
    image: ground,
    sections: [
      {
        title: "Gardening Tools",
        links: [
          { name: "Shovels", path: "/category/grounds?type=shovels" },
          { name: "Rakes", path: "/category/grounds?type=rakes" },
          { name: "Trowels", path: "/category/grounds?type=trowels" },
        ],
      },
      {
        title: "Outdoor Equipment",
        links: [
          { name: "Hoses", path: "/category/grounds?type=hose" },
          { name: "Sprayers", path: "/category/grounds?type=sprayers" },
          { name: "Tents", path: "/category/grounds?type=tents" },
        ],
      },
    ],
  },

  // ✅ NEW CATEGORY 2
  {
    title: "Food Service",
    key: "food_service",
    path: "/category/food",
    image: foodService,
    sections: [
      {
        title: "Kitchen Equipment",
        links: [
          { name: "Cutlery", path: "/category/food?type=cutlery" },
          { name: "Cookware", path: "/category/food?type=cookware" },
          { name: "Food Prep", path: "/category/food?type=food-prep" },
        ],
      },
      {
        title: "Service Supplies",
        links: [
          { name: "Trays", path: "/category/food?type=trays" },
          { name: "Containers", path: "/category/food?type=containers" },
          { name: "Tableware", path: "/category/food?type=tableware" },
        ],
      },
    ],
  },

  // ✅ NEW CATEGORY 3
  {
    title: "Test Instruments",
    key: "test_instruments",
    path: "/category/test",
    image: testInstruments,
    sections: [
      {
        title: "Measuring Tools",
        links: [
          { name: "Tape Measures", path: "/category/test?type=tape-measures" },
          { name: "Calipers", path: "/category/test?type=calipers" },
          { name: "Micrometers", path: "/category/test?type=micrometers" },
        ],
      },
      {
        title: "Electrical Testing",
        links: [
          { name: "Multimeters", path: "/category/test?type=multimeters" },
          { name: "Voltage Testers", path: "/category/test?type=voltage-testers" },
          { name: "Gauges", path: "/category/test?type=gauges" },
        ],
      },
    ],
  },
];

//////////////////////////////////////////////////////////
// NAV ITEM
//////////////////////////////////////////////////////////

const NavItem = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative text-sm tracking-wide transition duration-300 ${
          isActive
            ? "text-yellow-400"
            : "text-gray-300 hover:text-white"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

//////////////////////////////////////////////////////////
// ACTION ICON
//////////////////////////////////////////////////////////

const ActionItem = ({ icon, link, badge }) => {
  return (
    <Link
      to={link}
      className="relative w-11 h-11 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-gray-300 hover:text-yellow-400 hover:border-yellow-400/30 transition-all duration-300"
    >
      {icon}

      {badge > 0 && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-yellow-400 text-black text-[11px] font-semibold flex items-center justify-center"
        >
          {badge}
        </motion.span>
      )}
    </Link>
  );
};

//////////////////////////////////////////////////////////
// HEADER
//////////////////////////////////////////////////////////

const Header = () => {
  const navigate = useNavigate();

  const cartProducts = useSelector(
    (state) => state.orebiReducer.products
  );

  //////////////////////////////////////////////////////////
  // SEARCH
  //////////////////////////////////////////////////////////

  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const allProducts = useMemo(
    () => Object.values(productsData).flat(),
    []
  );

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];

    return allProducts
      .filter((item) =>
        item.productName
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
      .slice(0, 6);
  }, [searchTerm, allProducts]);

  //////////////////////////////////////////////////////////
  // MEGA MENU
  //////////////////////////////////////////////////////////

  const [showMega, setShowMega] = useState(false);
  const [activeCat, setActiveCat] = useState(categoriesData[0]);

  const timeoutRef = useRef(null);

  const openMenu = () => {
    clearTimeout(timeoutRef.current);
    setShowMega(true);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMega(false);
    }, 120);
  };

  //////////////////////////////////////////////////////////
  // MOBILE MENU
  //////////////////////////////////////////////////////////

  const [mobileMenu, setMobileMenu] = useState(false);

  //////////////////////////////////////////////////////////
  // CLOSE SEARCH
  //////////////////////////////////////////////////////////

  useEffect(() => {
    const close = () => setShowSearch(false);

    window.addEventListener("click", close);

    return () => window.removeEventListener("click", close);
  }, []);

  //////////////////////////////////////////////////////////
  // PRODUCT SELECT
  //////////////////////////////////////////////////////////

  const handleSelectProduct = (id) => {
    navigate(`/product/${id}`);
    setSearchTerm("");
    setShowSearch(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050505]/80 backdrop-blur-2xl">
        <div className="max-w-[1450px] mx-auto px-4 md:px-8">

          {/* TOP BAR */}
          <div className="h-[78px] flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-4 lg:gap-10">

              {/* MOBILE BTN */}
              <button
                onClick={() => setMobileMenu(true)}
                className="md:hidden text-white text-3xl"
              >
                <HiOutlineMenuAlt3 />
              </button>

              {/* LOGO */}
              <Link to="/" className="group">
                <h1 className="text-2xl md:text-3xl font-black tracking-[0.2em] text-white">
                  RIDE
                  <span className="text-yellow-400 group-hover:text-white transition duration-500">
                    CONNECT
                  </span>
                </h1>
              </Link>

              {/* DESKTOP NAV */}
              <div className="hidden lg:flex items-center gap-8">

                {/* MEGA MENU */}
                <div
                  className="relative"
                  onMouseEnter={openMenu}
                  onMouseLeave={closeMenu}
                >
                  <button className="h-11 px-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl text-gray-300 hover:text-white hover:border-yellow-400/30 transition-all duration-300">
                    Categories
                  </button>

                  <AnimatePresence>
                    {showMega && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: 10,
                        }}
                        transition={{
                          duration: 0.22,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute top-full left-0 mt-4 w-[1050px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b]/95 backdrop-blur-3xl shadow-2xl"
                      >
                        <div className="grid grid-cols-[280px_1fr]">

                          {/* LEFT */}
                          <div className="border-r border-white/5 bg-white/[0.02] p-3">

                            {categoriesData.map((cat) => (
                              <button
                                key={cat.key}
                                onMouseEnter={() =>
                                  setActiveCat(cat)
                                }
                                className={`w-full flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 ${
                                  activeCat.key === cat.key
                                    ? "bg-white/10"
                                    : "hover:bg-white/[0.05]"
                                }`}
                              >
                                <img
                                  src={cat.image}
                                  alt={cat.title}
                                  className="w-14 h-14 rounded-xl object-cover"
                                />

                                <div className="text-left">
                                  <p className="text-white font-medium">
                                    {cat.title}
                                  </p>

                                  <p className="text-xs text-gray-500">
                                    Explore Collection
                                  </p>
                                </div>
                              </button>
                            ))}
                          </div>

                          {/* RIGHT */}
                          <div className="p-8 grid grid-cols-3 gap-8">

                            {/* LINKS */}
                            <div className="col-span-2 grid grid-cols-2 gap-8">
                              {activeCat.sections.map(
                                (sec, i) => (
                                  <div key={i}>
                                    <h3 className="text-white text-lg font-semibold mb-5">
                                      {sec.title}
                                    </h3>

                                    <div className="space-y-3">
                                      {sec.links.map(
                                        (l, j) => (
                                          <Link
                                            key={j}
                                            to={l.path}
                                            className="group flex items-center justify-between text-gray-400 hover:text-white transition"
                                          >
                                            <span>
                                              {l.name}
                                            </span>

                                            <FiChevronRight className="opacity-0 group-hover:opacity-100 transition" />
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  </div>
                                )
                              )}
                            </div>

                            {/* FEATURE */}
                            <div>
                              <div className="relative overflow-hidden rounded-3xl h-full min-h-[280px]">
                                <img
                                  src={activeCat.image}
                                  alt=""
                                  className="w-full h-full object-cover scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                                <div className="absolute bottom-6 left-6">
                                  <p className="text-sm text-gray-300 mb-2">
                                    Featured Collection
                                  </p>

                                  <h3 className="text-2xl font-semibold text-white">
                                    {activeCat.title}
                                  </h3>

                                  <Link
                                    to={activeCat.path}
                                    className="mt-4 inline-flex items-center gap-2 px-5 h-11 rounded-full bg-yellow-400 text-black font-medium hover:scale-105 transition"
                                  >
                                    Shop Now
                                  </Link>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <NavItem to="/">Home</NavItem>
                <NavItem to="/shop">Shop</NavItem>
                <NavItem to="/wishlist">Wishlist</NavItem>
                <NavItem to="/about">About</NavItem>
                <NavItem to="/contact">Contact</NavItem>

              </div>
            </div>

            {/* SEARCH */}
            <div
              className="hidden md:block relative w-[420px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">

                <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

                <input
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSearch(true);
                  }}
                  placeholder="Search products..."
                  className="w-full h-14 rounded-2xl bg-white/[0.03] border border-white/10 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-yellow-400/40 transition-all duration-300"
                />
              </div>

              {/* SEARCH DROPDOWN */}
              <AnimatePresence>
                {showSearch && searchResults.length > 0 && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="absolute top-full left-0 mt-4 w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b]/95 backdrop-blur-2xl"
                  >
                    {searchResults.map((item) => (
                      <button
                        key={item._id}
                        onClick={() =>
                          handleSelectProduct(item._id)
                        }
                        className="w-full flex items-center gap-4 p-4 hover:bg-white/[0.04] transition"
                      >
                        <img
                          src={item.img}
                          alt=""
                          className="w-14 h-14 rounded-2xl object-cover"
                        />

                        <div className="text-left">
                          <p className="text-white text-sm">
                            {item.productName}
                          </p>

                          <p className="text-yellow-400 text-sm mt-1">
                            ${item.price}
                          </p>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">

              <ActionItem
                icon={<FiUser size={20} />}
                link="/signin"
              />

              <ActionItem
                icon={<RiShoppingCart2Fill size={20} />}
                link="/cart"
                badge={cartProducts?.length || 0}
              />

            </div>
          </div>

          {/* MOBILE SEARCH */}
          <div className="md:hidden pb-4">
            <div className="relative">

              <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

              <input
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowSearch(true);
                }}
                placeholder="Search..."
                className="w-full h-12 rounded-2xl bg-white/[0.03] border border-white/10 pl-12 pr-4 text-white outline-none"
              />
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            {/* MENU */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 22,
              }}
              className="fixed top-0 left-0 z-[60] w-[88%] max-w-[380px] h-full bg-[#090909] border-r border-white/10 overflow-y-auto"
            >
              <div className="p-6">

                {/* TOP */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-white text-2xl font-bold">
                    Menu
                  </h2>

                  <button
                    onClick={() => setMobileMenu(false)}
                    className="w-10 h-10 rounded-full bg-white/10 text-white"
                  >
                    ✕
                  </button>
                </div>

                {/* NAV */}
                <div className="space-y-2">

                  {[
                    {
                      name: "Home",
                      path: "/",
                    },
                    {
                      name: "Shop",
                      path: "/shop",
                    },
                    {
                      name: "Wishlist",
                      path: "/wishlist",
                    },
                    {
                      name: "About",
                      path: "/about",
                    },
                    {
                      name: "Contact",
                      path: "/contact",
                    },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      to={item.path}
                      onClick={() =>
                        setMobileMenu(false)
                      }
                      className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-gray-300 hover:text-white transition"
                    >
                      {item.name}

                      <FiChevronRight />
                    </Link>
                  ))}
                </div>

                {/* CATEGORIES */}
                <div className="mt-10">

                  <h3 className="text-white text-lg font-semibold mb-5">
                    Categories
                  </h3>

                  <div className="space-y-3">
                    {categoriesData.map((cat) => (
                      <Link
                        key={cat.key}
                        to={cat.path}
                        onClick={() =>
                          setMobileMenu(false)
                        }
                        className="flex items-center gap-4 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition"
                      >
                        <img
                          src={cat.image}
                          alt=""
                          className="w-14 h-14 rounded-xl object-cover"
                        />

                        <div>
                          <p className="text-white">
                            {cat.title}
                          </p>

                          <p className="text-xs text-gray-500">
                            Explore Products
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;