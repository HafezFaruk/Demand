import React from 'react';
import Sidebar from './Sidebar.js';
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import keyboard from "../../img/keyboard.png";
import { Link } from 'react-router-dom';

const MyReviews = () => {
  return (
    <div className="container">
      <div className="flex items-center my-5">
        <AiOutlineHome className="text-myColor" />
        <AiOutlineRight className="mx-2" />
        <h1>My Account</h1>
        <AiOutlineRight className="mx-2" />
        <h6>My Reviews</h6>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <div className="mt-10">
            <div className="flex items-center justify-between border-2 border-green-200 p-5 mt-5">
              <div className="flex items-center justify-center">
                <div className="mr-10">
                  <img className="h-16" src={keyboard} alt="" />
                </div>
                <div>
                  <h1 className="font-semibold mb-2">
                    Herschel Leather Duffle Bag
                  </h1>
                  <p>$55</p>
                </div>
              </div>
              <div>
                <h1 className="font-semibold mb-2">Order Number</h1>
                <p>798W4E574</p>
              </div>
              <div>
                <h1 className="font-semibold mb-2">Purchased</h1>
                <p className="text-green-400">16 Dec 2020</p>
              </div>
              <div>
                <Link to="/myAccount/reviewsDetails">
                  <button className="bg-red-400 text-white hover:bg-white  hover:text-myColor border border-myColor font-semibold py-2 px-4 mx-4 rounded-md flex items-center">
                    Write Review
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;