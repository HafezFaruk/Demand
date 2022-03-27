import React from 'react';
import Sidebar from './Sidebar.js';
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import tv from "../../img/tv.png";
import { Link } from 'react-router-dom';
const MyOrderHistory = () => {
    return (
      <div className="mx-10">
        <div className="flex items-center my-5">
          <AiOutlineHome className="text-myColor" />
          <AiOutlineRight className="mx-2" />
          <h1>My Account</h1>
          <AiOutlineRight className="mx-2" />
          <h6>My Order History</h6>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-9">
            <div>
              <div className="border-separate border border-gray-200 p-5 mt-5">
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <img className="w-20 mr-5" src={tv} alt="" />
                      <img className="w-20" src={tv} alt="" />
                    </div>
                    <div>
                      <Link to="/myAccount/orderDetails">
                        <button className="hover:bg-myColor hover:text-white  text-myColor border border-myColor font-semibold py-1 transform duration-500 px-5 rounded-sm">
                          View Order
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="my-2 font-medium">Order Number</p>
                    <p>23E34RT3</p>
                  </div>
                  <div>
                    <p className="my-2 font-medium">Purchased</p>
                    <p>01 March 2021</p>
                  </div>
                  <div>
                    <p className="my-2 font-medium">Quantity</p>
                    <p>x3</p>
                  </div>
                  <div>
                    <p className="my-2 font-medium">Total</p>
                    <p>$120</p>
                  </div>
                  <div className="mr-14">
                    <p className="my-2 font-medium">Status</p>
                    <p className="text-red-400">Cancelled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyOrderHistory;