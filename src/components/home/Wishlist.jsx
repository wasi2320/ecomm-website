import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { toggleWishlist, addToCart } from "../../redux/orebiSlice";

const Wishlist = () => {
  const dispatch = useDispatch();

  const wishlist =
    useSelector((state) => state.orebiReducer.wishlist) || [];

  return (
    <div className="min-h-screen bg-[#070707] text-white px-4 py-10">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold">
          My <span className="text-gray-500">Wishlist</span>
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          Your saved products appear here
        </p>
      </div>

      {/* EMPTY STATE */}
      {wishlist.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">
          No items in wishlist 💔
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {wishlist.map((item, i) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md hover:border-yellow-400 transition"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
                />

                {/* HEART BADGE */}
                <div className="absolute top-3 right-3 bg-black/60 text-red-500 p-2 rounded-full">
                  ❤️
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col gap-2">

                <h2 className="text-sm font-semibold line-clamp-2">
                  {item.name}
                </h2>

                <p className="text-gray-400 text-sm">
                  ${item.price}
                </p>

                {/* ACTIONS */}
                <div className="flex justify-between items-center mt-3">

                  {/* ADD TO CART */}
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          _id: item._id,
                          name: item.name,
                          quantity: 1,
                          image: item.image,
                          price: item.price,
                        })
                      )
                    }
                    className="flex items-center gap-2 text-xs bg-yellow-400 text-black px-3 py-1 rounded-full hover:scale-105 transition"
                  >
                    <FaShoppingCart /> Cart
                  </button>

                  {/* REMOVE */}
                  <button
                    onClick={() =>
                      dispatch(toggleWishlist(item))
                    }
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <FaTrash />
                  </button>

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Wishlist;