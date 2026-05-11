import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaStar,
  FaShoppingCart,
  FaBolt,
  FaShieldAlt,
  FaTruck,
  FaUndo,
  FaHeart,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/orebiSlice";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductsOnSale from "../../components/pageProps/productDetails/ProductsOnSale";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState("");
  const [added, setAdded] = useState(false);

  //////////////////////////////////////////////////////
  // LOAD PRODUCT
  //////////////////////////////////////////////////////
  useEffect(() => {
    if (location.state?.item) {
      setProduct(location.state.item);
      setActiveImg(location.state.item.img);
    }
  }, [location]);

  //////////////////////////////////////////////////////
  // ADD TO CART
  //////////////////////////////////////////////////////
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: product._id,
        name: product.productName,
        quantity: qty,
        image: product.img,
        badge: product.badge,
        price: product.price,
        colors: product.color,
      })
    );

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  //////////////////////////////////////////////////////
  // BUY NOW
  //////////////////////////////////////////////////////
  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/payment");
  };

  //////////////////////////////////////////////////////
  // RENDER STARS
  //////////////////////////////////////////////////////
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`text-sm ${
          i < Math.floor(product.rating || 4)
            ? "text-yellow-400"
            : "text-gray-600"
        }`}
      />
    ));
  };

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-white/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <Breadcrumbs title={product.productName || "Product Details"} />

        {/* MAIN SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-6">
              {/* MAIN IMAGE */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl group">
                {/* SHIMMER */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -left-[120%] top-0 h-full w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer" />
                </div>

                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute inset-0 bg-yellow-400/10 blur-3xl" />
                </div>

                <motion.img
                  src={activeImg}
                  alt={product.productName}
                  className="w-full h-[350px] sm:h-[500px] object-contain p-6 relative z-10"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                />

                {/* BADGE */}
                {product.badge && (
                  <div className="absolute top-5 left-5 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full z-20">
                    NEW
                  </div>
                )}

                {/* WISHLIST */}
                <button className="absolute top-5 right-5 w-11 h-11 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition z-20">
                  <FaHeart />
                </button>
              </div>

              {/* THUMBNAILS */}
              <div className="flex gap-4 mt-5">
                {[product.img, product.img, product.img].map((img, i) => (
                  <motion.div
                    whileHover={{ y: -4 }}
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`w-24 h-24 rounded-2xl overflow-hidden border cursor-pointer transition ${
                      activeImg === img
                        ? "border-yellow-400 bg-yellow-400/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <img
                      src={img}
                      alt="thumb"
                      className="w-full h-full object-contain p-2"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* CATEGORY */}
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs mb-3">
              Premium Collection
            </p>

            {/* TITLE */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {product.productName}
            </h1>

            {/* REVIEWS */}
            <div className="flex items-center gap-3 mt-5">
              <div className="flex gap-1">{renderStars()}</div>

              <span className="text-gray-400 text-sm">
                ({product.rating || 4.5}) Reviews
              </span>
            </div>

            {/* PRICE */}
            <div className="flex items-center gap-4 mt-6">
              <span className="text-4xl font-bold text-yellow-400">
                ${product.price}
              </span>

              <span className="text-lg text-gray-500 line-through">
                ${(product.price * 1.2).toFixed(2)}
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-400 leading-8 mt-8 text-sm sm:text-base">
              {product.des ||
                "Crafted with premium quality materials and designed for modern lifestyles. This product delivers durability, elegance, and performance in every detail."}
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
                <FaTruck className="text-yellow-400 text-xl mb-3" />
                <h3 className="font-semibold">Fast Shipping</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Worldwide delivery
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
                <FaShieldAlt className="text-yellow-400 text-xl mb-3" />
                <h3 className="font-semibold">Secure Payment</h3>
                <p className="text-gray-400 text-sm mt-1">
                  100% encrypted
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
                <FaUndo className="text-yellow-400 text-xl mb-3" />
                <h3 className="font-semibold">Easy Returns</h3>
                <p className="text-gray-400 text-sm mt-1">
                  7 day return policy
                </p>
              </div>
            </div>

            {/* QUANTITY */}
            <div className="mt-10">
              <h3 className="text-sm text-gray-400 mb-3">Quantity</h3>

              <div className="flex items-center gap-5">
                <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-14 h-14 text-xl hover:bg-white/10 transition"
                  >
                    -
                  </button>

                  <span className="w-16 text-center font-semibold">
                    {qty}
                  </span>

                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-14 h-14 text-xl hover:bg-white/10 transition"
                  >
                    +
                  </button>
                </div>

                <p className="text-green-400 text-sm">
                  In Stock
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {/* ADD TO CART */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAddToCart}
                className="relative overflow-hidden group h-14 rounded-2xl border border-yellow-400 bg-yellow-400 text-black font-semibold"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition" />

                <span className="relative z-10 flex items-center justify-center gap-3">
                  <FaShoppingCart />
                  {added ? "Added Successfully" : "Add to Cart"}
                </span>
              </motion.button>

              {/* BUY NOW */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleBuyNow}
                className="relative overflow-hidden group h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute inset-0 bg-white/10 blur-2xl" />
                </div>

                <span className="relative z-10 flex items-center justify-center gap-3 font-semibold">
                  <FaBolt />
                  Buy Now
                </span>
              </motion.button>
            </div>

            {/* TRUST TEXT */}
            <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-400 space-y-2">
              <p>✔ 100% Original Product Guarantee</p>
              <p>✔ Secure SSL Encrypted Checkout</p>
              <p>✔ Trusted by Thousands of Customers</p>
            </div>
          </motion.div>
        </div>

        {/* RELATED PRODUCTS */}
        <div className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs">
                Discover More
              </p>

              <h2 className="text-3xl font-bold mt-2">
                Related Products
              </h2>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-6 backdrop-blur-xl">
            <ProductsOnSale />
          </div>
        </div>
      </div>

      {/* MOBILE STICKY BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 border-t border-white/10 bg-black/80 backdrop-blur-2xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-400">Price</p>

            <h3 className="text-yellow-400 font-bold text-xl">
              ${product.price}
            </h3>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex-1 h-12 rounded-2xl bg-yellow-400 text-black font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;