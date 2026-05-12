import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaStar,
  FaShoppingCart,
  FaHeart,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/orebiSlice";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

import productsData from "../../components/category/productsData";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState("");
  const [added, setAdded] = useState(false);

  // REVIEW STATES
  const [reviewText, setReviewText] = useState("");
  const [reviewName, setReviewName] = useState("");
  const [allReviews, setAllReviews] = useState([]);
  const [showReviewMsg, setShowReviewMsg] = useState(false);

  // LOAD PRODUCT
  useEffect(() => {
    if (location.state?.item) {
      setProduct(location.state.item);
      setActiveImg(location.state.item.img);
    }
  }, [location]);

  // RELATED PRODUCTS
  const relatedProducts =
    product?.category && productsData[product.category]
      ? productsData[product.category].filter(
          (item) => item._id !== product._id
        )
      : [];

  // ADD TO CART
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: product._id,
        name: product.productName,
        quantity: qty,
        image: product.img,
        price: product.price,
        colors: product.color,
      })
    );

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  // BUY NOW
  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/payment");
  };

  // SUBMIT REVIEW
  const handleSubmitReview = () => {
    if (!reviewName || !reviewText) return;

    const newReview = {
      name: reviewName,
      text: reviewText,
      rating: product.rating || 5,
    };

    setAllReviews([newReview, ...allReviews]);

    setReviewName("");
    setReviewText("");

    // SHOW THANK YOU MESSAGE
    setShowReviewMsg(true);

    setTimeout(() => {
      setShowReviewMsg(false);
    }, 3000);
  };

  // RENDER STARS
  const renderStars = (rating = 4) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={
          i < Math.floor(rating)
            ? "text-yellow-400"
            : "text-gray-600"
        }
      />
    ));
  };

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <div className="max-w-[1450px] mx-auto px-4 py-6">

        {/* BREADCRUMB */}
        <Breadcrumbs
          title={product.productName || "Product"}
          className="text-white"
        />

        {/* MAIN SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={activeImg}
              alt={product.productName}
              className="w-full h-[500px] object-contain bg-white/5 rounded-2xl border border-white/10"
            />
          </motion.div>

          {/* RIGHT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold">
              {product.productName}
            </h1>

            {/* RATING */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex">
                {renderStars(product.rating)}
              </div>

              <span className="text-gray-400">
                ({product.rating || 4})
              </span>
            </div>

            {/* PRICE */}
            <h2 className="text-4xl font-bold text-yellow-400 mt-5">
              ${product.price}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-400 mt-5 leading-8">
              {product.des}
            </p>

            {/* COLOR */}
            <div className="mt-5">
              <span className="text-gray-400">
                Color:
              </span>

              <span className="ml-2 font-semibold">
                {product.color}
              </span>
            </div>

            {/* QUANTITY */}
            <div className="flex items-center gap-4 mt-8">
              <span className="text-lg">
                Quantity:
              </span>

              <div className="flex items-center border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() =>
                    setQty(Math.max(1, qty - 1))
                  }
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 transition"
                >
                  -
                </button>

                <span className="px-6">
                  {qty}
                </span>

                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">

              {/* ADD TO CART */}
              <button
                onClick={handleAddToCart}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded-xl flex items-center gap-2 transition"
              >
                <FaShoppingCart />

                {added ? "Added To Cart" : "Add To Cart"}
              </button>

            
            </div>
          </motion.div>
        </div>

        {/* REVIEWS SECTION */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Customer Reviews
          </h2>

          {/* THANK YOU NOTIFICATION */}
          {showReviewMsg && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-xl"
            >
              Thank you for reviewing this product ❤️
            </motion.div>
          )}

          {/* REVIEW SUMMARY */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex text-yellow-400">
              {renderStars(product.rating)}
            </div>

            <span className="text-xl font-semibold">
              {product.rating || 4} / 5
            </span>
          </div>

          {/* DEFAULT REVIEW */}
          <div className="bg-black/30 border border-white/10 rounded-xl p-5 mb-6">

            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="font-semibold text-lg">
                {product.reviewName || "Customer"}
              </h3>

              <div className="flex text-yellow-400">
                {renderStars(product.rating)}
              </div>
            </div>

            <p className="text-gray-400 mt-4 leading-7">
              {product.review ||
                "Very good quality product. Highly recommended."}
            </p>
          </div>

          {/* USER REVIEWS */}
          {allReviews.length > 0 && (
            <div className="space-y-4 mb-8">

              {allReviews.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-black/30 border border-white/10 rounded-xl p-5"
                >
                  <div className="flex items-center justify-between flex-wrap gap-3">

                    <h3 className="font-semibold text-lg">
                      {item.name}
                    </h3>

                    <div className="flex text-yellow-400">
                      {renderStars(item.rating)}
                    </div>
                  </div>

                  <p className="text-gray-400 mt-4 leading-7">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          )}

          {/* ADD REVIEW FORM */}
          <div className="mt-10 border-t border-white/10 pt-8">

            <h3 className="text-xl font-semibold mb-5">
              Write a Review
            </h3>

            <div className="flex flex-col gap-4">

              {/* NAME INPUT */}
              <input
                type="text"
                placeholder="Enter your name"
                value={reviewName}
                onChange={(e) => setReviewName(e.target.value)}
                className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-yellow-400 transition"
              />

              {/* REVIEW TEXTAREA */}
              <textarea
                placeholder="Write your review..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                rows={5}
                className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none resize-none focus:border-yellow-400 transition"
              />

              {/* SUBMIT BUTTON */}
              <button
                onClick={handleSubmitReview}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-xl transition w-fit"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        <div className="mt-16">

          <h2 className="text-2xl font-bold mb-6">
            Related Products
          </h2>

          {relatedProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

              {relatedProducts.map((item) => (
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  key={item._id}
                  onClick={() =>
                    navigate("/product", {
                      state: { item },
                    })
                  }
                  className="cursor-pointer bg-white/5 border border-white/10 rounded-2xl p-4"
                >
                  <img
                    src={item.img}
                    alt={item.productName}
                    className="h-40 w-full object-contain"
                  />

                  <h3 className="text-sm mt-4 line-clamp-2">
                    {item.productName}
                  </h3>

                  <div className="flex items-center gap-1 mt-2">
                    {renderStars(item.rating)}
                  </div>

                  <p className="text-yellow-400 text-lg font-semibold mt-2">
                    ${item.price}
                  </p>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">
              No related products found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;