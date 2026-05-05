import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../../redux/orebiSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-5 mb-4 
    border border-white/10 bg-black rounded-xl p-4 md:p-3 items-center">

      {/* 🔥 LEFT (IMAGE + TITLE) */}
      <div className="flex col-span-1 md:col-span-2 items-center gap-4">

        {/* REMOVE */}
        <ImCross
          onClick={() => dispatch(deleteItem(item._id))}
          className="text-gray-500 hover:text-red-500 duration-300 cursor-pointer text-xs"
        />

        {/* IMAGE */}
        <img
          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
          src={item.image}
          alt="productImage"
        />

        {/* TITLE */}
        <h1 className="font-semibold text-white text-sm sm:text-base line-clamp-2">
          {item.name}
        </h1>
      </div>

      {/* 🔥 RIGHT SIDE */}
      <div className="col-span-1 md:col-span-3 flex flex-col md:flex-row 
      items-center justify-between mt-4 md:mt-0 gap-4 md:gap-0">

        {/* PRICE */}
        <div className="flex md:w-1/3 justify-between md:justify-center items-center text-sm sm:text-base text-white font-medium w-full">
          <span className="md:hidden text-gray-400">Price:</span>
          ${item.price}
        </div>

        {/* 🔥 QUANTITY */}
        <div className="flex md:w-1/3 justify-between md:justify-center items-center gap-4 w-full">

          <span className="md:hidden text-gray-400">Qty:</span>

          <div className="flex items-center gap-3">

            {/* 🔥 MINUS */}
            <span
              onClick={() => dispatch(drecreaseQuantity({ _id: item._id }))}
              className="w-8 h-8 flex items-center justify-center 
              rounded-full bg-yellow-400 text-black text-lg font-bold
              hover:bg-yellow-500 active:scale-95 cursor-pointer transition"
            >
              −
            </span>

            <p className="text-white text-sm w-6 text-center">
              {item.quantity}
            </p>

            {/* 🔥 PLUS */}
            <span
              onClick={() => dispatch(increaseQuantity({ _id: item._id }))}
              className="w-8 h-8 flex items-center justify-center 
              rounded-full bg-yellow-400 text-black text-lg font-bold
              hover:bg-yellow-500 active:scale-95 cursor-pointer transition"
            >
              +
            </span>

          </div>
        </div>

        {/* SUBTOTAL */}
        <div className="flex md:w-1/3 justify-between md:justify-center items-center 
        text-sm sm:text-base font-semibold text-white w-full">
          <span className="md:hidden text-gray-400">Total:</span>
          ${item.quantity * item.price}
        </div>

      </div>
    </div>
  );
};

export default ItemCard;