import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaArrowLeft,
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
    setTimeout(() => setAdded(false), 2000);
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

    setShowReviewMsg(true);
    setTimeout(() => setShowReviewMsg(false), 3000);
  };

  // STARS
  const renderStars = (rating = 4) =>
    Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={
          i < Math.floor(rating)
            ? "text-yellow-400"
            : "text-gray-600"
        }
      />
    ));

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <div className="max-w-[1450px] mx-auto px-4 py-6">

        {/* 🔙 BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-4 text-white/70 hover:text-white transition"
        >
          <FaArrowLeft />
          Back
        </button>

        {/* BREADCRUMB */}
        <Breadcrumbs
          title={product.productName || "Product"}
        />

        {/* MAIN SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <img
              src={activeImg}
              alt={product.productName}
              className="w-full h-[500px] object-contain bg-white/5 rounded-2xl border border-white/10"
            />
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl font-bold">
              {product.productName}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex">
                {renderStars(product.rating)}
              </div>
              <span className="text-gray-400">
                ({product.rating || 4})
              </span>
            </div>

            <h2 className="text-4xl font-bold text-yellow-400 mt-5">
              ${product.price}
            </h2>

            <p className="text-gray-400 mt-5">
              {product.des}
            </p>

            {/* QUANTITY */}
            <div className="flex items-center gap-4 mt-8">
              <span>Quantity:</span>

              <div className="flex items-center border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() =>
                    setQty(Math.max(1, qty - 1))
                  }
                  className="px-4 py-2 bg-white/10"
                >
                  -
                </button>

                <span className="px-6">{qty}</span>

                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-4 py-2 bg-white/10"
                >
                  +
                </button>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-8">

              <button
                onClick={handleAddToCart}
                className="bg-yellow-400 text-black px-6 py-3 rounded-xl"
              >
                {added ? "Added" : "Add To Cart"}
              </button>

              <button
                onClick={handleBuyNow}
                className="bg-white/10 px-6 py-3 rounded-xl"
              >
                Buy Now
              </button>

              <button className="bg-white/10 p-3 rounded-xl">
                <FaHeart />
              </button>
            </div>
          </motion.div>
        </div>

        {/* REVIEWS */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Customer Reviews
          </h2>

          {showReviewMsg && (
            <div className="mb-4 bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-xl">
              Thank you for reviewing this product ❤️
            </div>
          )}

          {/* EXISTING REVIEW */}
          <div className="bg-black/30 p-5 rounded-xl mb-6">
            <h3 className="font-semibold">
              {product.reviewName || "Customer"}
            </h3>

            <p className="text-gray-400 mt-3">
              {product.review ||
                "Very good quality product."}
            </p>
          </div>

          {/* USER REVIEWS */}
          {allReviews.map((r, i) => (
            <div
              key={i}
              className="bg-black/30 p-5 rounded-xl mb-4"
            >
              <h3 className="font-semibold">{r.name}</h3>
              <p className="text-gray-400 mt-2">
                {r.text}
              </p>
            </div>
          ))}

          {/* REVIEW FORM */}
          <div className="mt-8 space-y-4">

            <input
              value={reviewName}
              onChange={(e) =>
                setReviewName(e.target.value)
              }
              placeholder="Your Name"
              className="w-full bg-black/30 p-3 rounded-xl"
            />

            <textarea
              value={reviewText}
              onChange={(e) =>
                setReviewText(e.target.value)
              }
              placeholder="Write review..."
              className="w-full bg-black/30 p-3 rounded-xl"
              rows={4}
            />

            <button
              onClick={handleSubmitReview}
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl"
            >
              Submit Review
            </button>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">
            Related Products
          </h2>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;