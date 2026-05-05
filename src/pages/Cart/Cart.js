import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/orebiSlice";
import { emptyCart } from "../../assets/images/index";
import ItemCard from "./ItemCard";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);

  const [totalAmt, setTotalAmt] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(0);

  // 🔥 TOTAL
  useEffect(() => {
    let price = 0;
    products.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalAmt(price);
  }, [products]);

  // 🔥 SHIPPING
  useEffect(() => {
    if (totalAmt <= 200) setShippingCharge(30);
    else if (totalAmt <= 400) setShippingCharge(0);
    else setShippingCharge(20);
  }, [totalAmt]);

  return (
    <div className="w-full bg-[#0f0f0f] text-white min-h-screen pb-20">

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Breadcrumbs title="Cart" />
      </div>

      {products.length > 0 ? (
        <div className="max-w-7xl mx-auto px-4 mt-8">

          {/* 🔥 HEADER (DESKTOP ONLY) */}
          <div className="hidden md:grid grid-cols-5 text-sm text-gray-400 border-b border-white/10 pb-4 mb-4">
            <span className="col-span-2">Product</span>
            <span>Price</span>
            <span>Qty</span>
            <span>Total</span>
          </div>

          {/* 🔥 ITEMS */}
          <div className="flex flex-col gap-4">
            {products.map((item) => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>

          {/* 🔥 ACTIONS */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">

            {/* LEFT */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="text"
                placeholder="Coupon code"
                className="bg-black border border-white/10 px-4 py-2 text-sm outline-none focus:border-white/30 w-full sm:w-52"
              />
              <button className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition">
                Apply
              </button>
            </div>

            {/* RIGHT */}
            <button
              onClick={() => dispatch(resetCart())}
              className="text-sm text-red-400 hover:text-red-600 transition"
            >
              Reset Cart
            </button>
          </div>

          {/* 🔥 TOTAL SECTION */}
          <div className="mt-10 flex justify-end">
            <div className="w-full sm:w-[400px] bg-black border border-white/10 rounded-xl p-6 space-y-4">

              <h2 className="text-lg font-semibold">Order Summary</h2>

              <div className="flex justify-between text-sm text-gray-400">
                <span>Subtotal</span>
                <span className="text-white">${totalAmt}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-400">
                <span>Shipping</span>
                <span className="text-white">${shippingCharge}</span>
              </div>

              <div className="border-t border-white/10 pt-3 flex justify-between text-base font-semibold">
                <span>Total</span>
                <span>${totalAmt + shippingCharge}</span>
              </div>

              <Link to="/paymentgateway">
                <button className="w-full mt-4 py-3 bg-white text-black font-medium hover:opacity-90 transition">
                  Proceed to Checkout
                </button>
              </Link>

            </div>
          </div>

        </div>
      ) : (
        /* 🔥 EMPTY STATE */
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col items-center justify-center text-center px-4 mt-20"
        >
          <img
            src={emptyCart}
            alt="emptyCart"
            className="w-60 sm:w-72 opacity-80"
          />

          <h2 className="text-xl sm:text-2xl font-semibold mt-6">
            Your cart is empty
          </h2>

          <p className="text-gray-400 text-sm mt-2 max-w-md">
            Looks like you haven’t added anything yet. Start exploring and
            discover premium products curated for you.
          </p>

          <Link to="/shop">
            <button className="mt-6 px-8 py-3 bg-white text-black text-sm font-medium hover:opacity-90 transition">
              Continue Shopping
            </button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;