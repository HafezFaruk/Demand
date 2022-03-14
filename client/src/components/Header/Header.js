import React from "react";
import { BsSuitHeart } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
const Header = () => {
  return (
    <div className="flex justify-between px-10 my-5">
      <div className="flex items-center">
        <h1 className="text-3xl text-myColor font-bold font-satisfy uppercase">Demand</h1>
      </div>
      <div className="flex items-center">
        <div>
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
        <div className="mx-10 relative">
          <span className="flex justify-center text-3xl">
            <AiOutlineShoppingCart />
          </span>
          <p>Cart</p>
          <span className="absolute -top-3 -right-4 bg-myColor rounded-full p-2 flex justify-center items-center  text-white w-6 h-6">
            7
          </span>
        </div>
        <div>
          <span className="flex justify-center text-3xl">
            <AiOutlineUser />
          </span>

          <p>Account</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
