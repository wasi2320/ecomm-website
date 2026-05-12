import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useAnimationFrame,
} from "framer-motion";
import { HiOutlineArrowRight, HiSparkles } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart, toggleWishlist } from "../../../redux/orebiSlice";
import Product from "../Products/Product";
import productsData from "../../category/productsData";

// 🔥 RANDOM PRODUCTS
const getRandomProducts = (products, count) => {
  const all = Object.values(products).flat();
  return [...all].sort(() => 0.5 - Math.random()).slice(0, count);
};

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const baseX = useMotionValue(0);
  const x = useSpring(baseX, { stiffness: 18, damping: 45 });

  useEffect(() => {
    setProducts(getRandomProducts(productsData, 10));
  }, []);

  const CARD_WIDTH = 290;
  const GAP = 32;
  const loopWidth = (CARD_WIDTH + GAP) * products.length;
  const SPEED = 38;

  useAnimationFrame((t, delta) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    if (hovered || products.length === 0) return;

    let moveBy = (delta / 1000) * SPEED;
    let next = baseX.get() - moveBy;

    if (next <= -loopWidth) next += loopWidth;

    baseX.set(next);
  });

  const openProduct = (product) => {
    navigate(`/product/${product._id}`, {
      state: { item: product },
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#070707] py-24 text-white">

      {/* HEADER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-12">
        <div className="flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 mb-3 text-gray-400">
              <HiSparkles />
              Premium Collection
            </div>

            <h2 className="text-5xl font-semibold">
              New <span className="text-gray-500">Arrivals</span>
            </h2>
          </div>

          <button className="hidden md:flex items-center gap-2 px-6 py-2 border border-white/10 rounded-full">
            Explore <HiOutlineArrowRight />
          </button>
        </div>
      </div>

      {/* DESKTOP SLIDER */}
      <div className="hidden md:block">
        <motion.div style={{ x }} className="flex gap-8 px-6">
          {[...products, ...products].map((product, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="w-[290px] flex-shrink-0"
            >
              <div className="h-[500px] rounded-[28px] bg-white/5 border border-white/10 overflow-hidden">
                <div className="p-4 h-full relative">

                  <Product {...product} />

                  {/* ❤️ Wishlist Button */}
                  {/* <button
                    onClick={() => dispatch(toggleWishlist(product))}
                    className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded-full text-xs"
                  >
                    ❤️
                  </button> */}

                  {/* 🛒 Add to cart */}
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          _id: product._id,
                          name: product.productName,
                          quantity: 1,
                          image: product.img,
                          price: product.price,
                        })
                      )
                    }
                    className="absolute bottom-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs"
                  >
                    Add to Cart
                  </button>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden overflow-x-auto px-4 no-scrollbar">
        <div className="flex gap-4 w-max">

          {products.map((product, i) => (
            <div key={i} className="relative w-[230px]">

              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden relative">

                <Product {...product} />

                {/* ❤️ Wishlist */}
                <button
                  onClick={() => dispatch(toggleWishlist(product))}
                  className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-full text-xs"
                >
                  ❤️
                </button>

                {/* 🛒 Cart */}
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        _id: product._id,
                        name: product.productName,
                        quantity: 1,
                        image: product.img,
                        price: product.price,
                      })
                    )
                  }
                  className="absolute bottom-2 left-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs"
                >
                  Cart
                </button>

              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default NewArrivals;