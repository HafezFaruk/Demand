import React from "react";
import bag from "../../img/bag.png";
import keyboard from "../../img/keyboard.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  AiOutlineShoppingCart,
  AiOutlineHome,
  AiOutlineRight,
} from "react-icons/ai";
import Sidebar from "./Sidebar.js";

const Wishlist = () => {
  return (
    <div className="container">
      <div className="flex items-center my-5">
        <AiOutlineHome className="text-myColor" />
        <AiOutlineRight className="mx-2" />
        <h1>Wishlist</h1>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <div className="mt-10">
            <div className="flex items-center justify-between border-2 border-green-200 p-5">
              <div className="flex items-center justify-center">
                <div className="mr-10">
                  <img className="h-16" src={bag} alt="" />
                </div>
                <div>
                  <p>CASUAL USB CHARGING LAPTOP BACKPACKS</p>
                  <p>
                    Availability:{" "}
                    <span className="text-green-600">In Stock</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <h1 className="text-myColor font-bold text-lg">$45.00</h1>
                <button className="bg-myColor text-white hover:bg-white  hover:text-myColor border border-gray-200 font-semibold py-2 px-4 mx-4 rounded-md flex items-center">
                  <AiOutlineShoppingCart className="mr-2" />{" "}
                  <span>Add to Cart</span>
                </button>
                <RiDeleteBin6Line className="text-xl" />
              </div>
            </div>
            <div className="flex items-center justify-between border-2 border-green-200 p-5 mt-5">
              <div className="flex items-center justify-center">
                <div className="mr-10">
                  <img className="h-16" src={keyboard} alt="" />
                </div>
                <div>
                  <p>HV-KB585GCM WIRELESS KEYBOARD & MOUSE</p>

                  <p>
                    Availability:{" "}
                    <span className="text-red-500">Out of Stock</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <h1 className="text-myColor font-bold text-lg">$45.00</h1>
                <button className="bg-red-400 text-white hover:bg-white  hover:text-myColor border border-gray-200 font-semibold py-2 px-4 mx-4 rounded-md flex items-center">
                  <AiOutlineShoppingCart className="mr-2" />{" "}
                  <span>Add to Cart</span>
                </button>
                <RiDeleteBin6Line className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
