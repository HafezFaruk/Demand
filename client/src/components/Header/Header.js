import React from "react";
import { BsSuitHeart } from "react-icons/bs";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiFillGift,
  AiOutlineHeart,
} from "react-icons/ai";
import { CgLogOff } from "react-icons/cg";
import { FaRegAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between px-10 my-5">
      <div className="flex items-center">
        <h1 className="text-3xl text-myColor font-bold font-satisfy uppercase">
          Demand
        </h1>
      </div>
      <div className="flex items-center">
        <div className="">
          <input
            className="lg:w-96  focus:outline-none border-2 border-myColor rounded-l-md py-2 px-4"
            type="search"
            name=""
            placeholder="Search Your Product"
            id=""
          />
          <button className="bg-myColor hover:bg-myColor  text-white font-semibold py-9px px-10 border-none rounded-r-md">
            Search
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="relative">
          <span className="flex justify-center text-3xl">
            <BsSuitHeart />
          </span>
          <p>Wish List</p>
          <span className="absolute -top-3 left-10 bg-myColor rounded-full  text-white p-2 flex justify-center items-center w-6 h-6 ">
            4
          </span>
        </div>
        <div className="container relative">
          <span className="flex justify-center text-3xl">
            <AiOutlineShoppingCart />
          </span>
          <p>Cart</p>
          <span className="absolute -top-3 -right-4 bg-myColor rounded-full p-2 flex justify-center items-center  text-white w-6 h-6">
            7
          </span>
        </div>
        <div>
          <div>
            <div className="cursor-pointer relative group">
              <div>
                <span className="flex justify-center text-3xl">
                  <AiOutlineUser />
                </span>
                <p>Account</p>
              </div>
              <div className="absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible right-1 z-10 w-52  text-base list-none bg-white rounded divide-y divide-gray-100 shadow">
                <h1 className="font-medium mt-5 text-center divide-b my-2">
                  Welcome to Demand Shop
                </h1>
                <div className="flex justify-center items-center">
                  <div className="flex mt-1">
                    <Link to="/register">
                      <button className="bg-myColor uppercase hover:bg-white w-20 text-white  hover:text-myColor border border-myColor font-semibold py-1 transform duration-500 px-1 mr-2 rounded-sm">
                        JOIN
                      </button>
                    </Link>
                    <Link to="/login">
                      <button className="hover:bg-myColor uppercase w-20 hover:text-white  text-myColor border border-myColor font-semibold py-1 transform duration-500 px-1 rounded-sm">
                        SING IN
                      </button>
                    </Link>
                  </div>
                </div>
                <ul className="py-3">
                  <li>
                    <Link
                      to="/myAccount"
                      className="flex items-center mt-2 hover:text-myColor cursor-pointer ml-3"
                    >
                      <FaRegAddressCard className="mr-2" />
                      <p>My Account</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/myAccount/myOrderHistory"
                      className="flex items-center mt-2 hover:text-myColor cursor-pointer ml-3"
                    >
                      <AiFillGift className="mr-2" />
                      <p>My Order</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/myAccount/wishlist"
                      className="flex items-center mt-2 hover:text-myColor cursor-pointer ml-3"
                    >
                      <AiOutlineHeart className="mr-2" />
                      <p>My Wishlist</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shoppingCart"
                      className="flex items-center mt-2 hover:text-myColor cursor-pointer ml-3"
                    >
                      <AiOutlineShoppingCart className="mr-2" />
                      <p>My Cart</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="flex items-center mt-2 hover:text-myColor cursor-pointer ml-3"
                    >
                      <CgLogOff className="mr-2" />
                      <p>Log Out</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
