import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const Product = (props) => {
  const dispatch = useDispatch();

  const _id = props.productName;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const navigate = useNavigate();

  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: { item: props },
    });
  };

  // ⭐ STARS
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < props.rating ? "text-yellow-400" : "text-gray-600"}>
        ★
      </span>
    ));
  };

  // 🔥 TITLE SLICE
  const truncateTitle = (title, maxLength = 38) => {
    if (!title) return "";
    return title.length > maxLength
      ? title.substring(0, maxLength).trim() + "..."
      : title;
  };

  return (
    <div className="w-full h-full flex flex-col group">

      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-lg sm:rounded-xl">

        {/* 🔥 SMALLER IMAGE ON MOBILE */}
        <Image
          className="w-full h-[140px] sm:h-[180px] md:h-[240px] lg:h-[260px] object-cover"
          imgSrc={props.img}
        />

        {props.badge && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
            <Badge text="New" />
          </div>
        )}

        {/* DESKTOP HOVER ONLY */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full bg-white translate-y-full group-hover:translate-y-0 transition duration-500">
          <ul className="flex flex-col text-xs md:text-sm px-3 py-2 gap-2 border-t">

            <li className="flex justify-end items-center gap-2 text-gray-600 cursor-pointer">
              Compare <GiReturnArrow />
            </li>

            <li
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: props._id,
                    name: props.productName,
                    quantity: 1,
                    image: props.img,
                    price: props.price,
                  })
                )
              }
              className="flex justify-end items-center gap-2 text-gray-600 cursor-pointer"
            >
              Add to Cart <FaShoppingCart />
            </li>

            <li
              onClick={handleProductDetails}
              className="flex justify-end items-center gap-2 text-gray-600 cursor-pointer"
            >
              View Details <MdOutlineLabelImportant />
            </li>

            <li className="flex justify-end items-center gap-2 text-gray-600 cursor-pointer">
              Wishlist <BsSuitHeartFill />
            </li>
          </ul>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 justify-between border border-t-0 border-white/10 px-2 sm:px-4 py-2 sm:py-4 bg-black">

        {/* TOP */}
        <div className="flex justify-between items-start gap-2">

          <h2 className="text-[11px] sm:text-sm md:text-base font-semibold text-white leading-tight 
          line-clamp-2 h-[34px] sm:h-[40px] md:h-[44px] overflow-hidden">
            {truncateTitle(props.productName)}
          </h2>

          <p className="text-[11px] sm:text-sm text-white whitespace-nowrap">
            ${props.price}
          </p>
        </div>

        {/* MIDDLE */}
        <div className="mt-1 sm:mt-2 space-y-[2px] sm:space-y-1">

          <p className="text-[9px] sm:text-xs text-gray-400 line-clamp-1 h-[14px]">
            {props.color}
          </p>

          <p className="text-[9px] sm:text-xs text-white font-medium line-clamp-1 h-[14px]">
            {props.reviewName}
          </p>

          <p className="text-[9px] sm:text-xs text-gray-500 line-clamp-2 h-[26px] overflow-hidden">
            {props.review}
          </p>
        </div>

        {/* BOTTOM */}
        <div className="mt-1 flex items-center text-[9px] sm:text-xs">
          {renderStars()}
        </div>

      </div>
    </div>
  );
};

export default Product;