import React from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const OrderSuccess = () => {
  const location = useLocation();

  const orderId = location.state?.orderId || "RTC-000000";
  const customer = location.state?.customer || "Customer";

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-white/5 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex justify-center"
        >
          <FaCheckCircle className="text-green-400 text-7xl" />
        </motion.div>

        <h1 className="text-4xl font-bold text-white mt-6">
          Thank You, {customer}!
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Your order has been placed successfully.
        </p>

        <div className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-6">
          <p className="text-gray-400 text-sm">
            ORDER NUMBER
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            {orderId}
          </h2>
        </div>

        <p className="text-gray-500 mt-6">
          A confirmation email has been sent to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">

          <Link to="/" className="flex-1">
            <button className="w-full h-14 rounded-2xl bg-white text-black font-semibold hover:bg-gray-200 transition">
              Continue Shopping
            </button>
          </Link>

          <button className="flex-1 h-14 rounded-2xl border border-white/10 text-white hover:bg-white hover:text-black transition">
            Track Order
          </button>

        </div>
      </motion.div>
    </div>
  );
};

export default OrderSuccess;