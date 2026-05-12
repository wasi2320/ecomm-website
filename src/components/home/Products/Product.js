import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleWishlist } from "../../../redux/orebiSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ❤️ GET WISHLIST FROM REDUX
  const wishlist = useSelector(
    (state) => state.orebiReducer.wishlist
  );

  const rootId = props._id;

  const isWishlisted = wishlist?.some(
    (item) => item._id === rootId
  );

  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: { item: props },
    });
  };

  const renderStars = () =>
    Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={
          i < props.rating ? "text-yellow-400" : "text-gray-600"
        }
      >
        ★
      </span>
    ));

  const truncateTitle = (title, max = 38) =>
    !title
      ? ""
      : title.length > max
      ? title.slice(0, max) + "..."
      : title;

  return (
    <div className="w-full h-full flex flex-col group">

      {/* IMAGE */}
      <div
        onClick={handleProductDetails}
        className="relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer"
      >
        <Image
          className="w-full h-[140px] sm:h-[180px] md:h-[240px] lg:h-[260px] object-cover"
          imgSrc={props.img}
        />

        {props.badge && (
          <div className="absolute top-2 left-2">
            <Badge text="New" />
          </div>
        )}

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full bg-white translate-y-full group-hover:translate-y-0 transition duration-500">
          <ul className="flex flex-col text-xs px-3 py-2 gap-2 border-t">

            <li className="flex justify-end items-center gap-2 text-gray-600">
              Compare <GiReturnArrow />
            </li>

            {/* CART */}
            <li
              onClick={(e) => {
                e.stopPropagation();
                dispatch(
                  addToCart({
                    _id: props._id,
                    name: props.productName,
                    quantity: 1,
                    image: props.img,
                    price: props.price,
                  })
                );
              }}
              className="flex justify-end items-center gap-2 text-gray-600 cursor-pointer"
            >
              Add to Cart <FaShoppingCart />
            </li>

            {/* DETAILS */}
            <li
              onClick={handleProductDetails}
              className="flex justify-end items-center gap-2 text-gray-600 cursor-pointer"
            >
              View Details <MdOutlineLabelImportant />
            </li>

            {/* ❤️ WISHLIST (FULLY WORKING) */}
            <li
              onClick={(e) => {
                e.stopPropagation();

                dispatch(
                  toggleWishlist({
                    _id: props._id,
                    name: props.productName,
                    image: props.img,
                    price: props.price,
                  })
                );
              }}
              className="flex justify-end items-center gap-2 text-gray-600 cursor-pointer"
            >
              <span
                className={
                  isWishlisted ? "text-red-500" : "text-gray-600"
                }
              >
                Wishlist
              </span>

              <BsSuitHeartFill
                className={
                  isWishlisted ? "text-red-500" : "text-gray-400"
                }
              />
            </li>

          </ul>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 justify-between border border-t-0 border-white/10 px-2 sm:px-4 py-2 bg-black">

        <div className="flex justify-between items-start gap-2">
          <h2 className="text-[11px] sm:text-sm font-semibold text-white line-clamp-2 h-[44px]">
            {truncateTitle(props.productName)}
          </h2>

          <p className="text-[11px] sm:text-sm text-white">
            ${props.price}
          </p>
        </div>

        <div className="mt-1 text-[10px] text-gray-400 line-clamp-2">
          {props.review}
        </div>

        <div className="mt-2 flex text-xs">
          {renderStars()}
        </div>

      </div>
    </div>
  );
};

export default Product;