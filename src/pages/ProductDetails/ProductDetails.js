import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductsOnSale from "../../components/pageProps/productDetails/ProductsOnSale";

const ProductDetails = () => {
  const location = useLocation();
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState("");

  useEffect(() => {
    if (location.state?.item) {
      setProduct(location.state.item);
      setActiveImg(location.state.item.img);
    }
  }, [location]);

  // 🔥 ADD TO CART
  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item._id === product._id);

    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ ...product, qty });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart ✅");
  };

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">

      <div className="max-w-[1400px] mx-auto px-6 py-8">

        <Breadcrumbs title={product.productName || ""} />

        <div className="grid lg:grid-cols-2 gap-10 mt-6">

          {/* 🔥 LEFT: IMAGE GALLERY */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800"
          >
            {/* MAIN IMAGE */}
            <motion.img
              src={activeImg}
              className="w-full h-[400px] object-contain mb-4"
              whileHover={{ scale: 1.05 }}
            />

            {/* THUMBNAILS (for future multiple images) */}
            <div className="flex gap-3">
              {[product.img, product.img, product.img].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setActiveImg(img)}
                  className="w-20 h-20 object-contain bg-[#0f0f0f] p-2 rounded cursor-pointer border border-gray-700 hover:border-yellow-400"
                />
              ))}
            </div>
          </motion.div>

          {/* 🔥 RIGHT: BUY BOX */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 flex flex-col gap-6"
          >

            {/* TITLE */}
            <h1 className="text-2xl lg:text-3xl font-bold">
              {product.productName}
            </h1>

            {/* PRICE */}
            <p className="text-yellow-400 text-2xl font-semibold">
              ${product.price}
            </p>

            {/* DESCRIPTION */}
            <p className="text-gray-400">
              {product.des || "High quality product for professional use."}
            </p>

            {/* 🔥 QUANTITY */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Quantity</span>

              <div className="flex items-center border border-gray-700 rounded">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-1 hover:bg-gray-800"
                >
                  -
                </button>

                <span className="px-4">{qty}</span>

                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-3 py-1 hover:bg-gray-800"
                >
                  +
                </button>
              </div>
            </div>

            {/* 🔥 BUTTONS */}
            <div className="flex flex-col gap-3">

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:scale-[1.02] transition"
              >
                Add to Cart
              </motion.button>

              <button className="border border-gray-600 py-3 rounded-lg hover:bg-white hover:text-black transition">
                Buy Now
              </button>

            </div>

            {/* 🔥 TRUST BADGES */}
            <div className="text-sm text-gray-500 mt-4 space-y-1">
              <p>✔ Secure Checkout</p>
              <p>✔ Fast Shipping</p>
              <p>✔ 100% Original Products</p>
            </div>

          </motion.div>
        </div>

        {/* 🔥 RELATED PRODUCTS */}
        <div className="mt-14">
          <h2 className="text-xl font-semibold mb-6">
            Related Products
          </h2>

          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800">
            <ProductsOnSale />
          </div>
        </div>

      </div>

      {/* 🔥 STICKY MOBILE BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-[#1a1a1a] border-t border-gray-800 p-4 flex justify-between items-center lg:hidden">
        <span className="text-yellow-400 font-semibold">
          ${product.price}
        </span>

        <button
          onClick={handleAddToCart}
          className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold"
        >
          Add
        </button>
      </div>

    </div>
  );
};

export default ProductDetails;