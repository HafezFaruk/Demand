import React from 'react';
import tv from "../../img/tv.png";
import Sidebar from './Sidebar.js';
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";

const OrderCancel = () => {
    return (
      <div className='mx-10'>
        <div className="flex items-center my-5">
          <AiOutlineHome className="text-myColor" />
          <AiOutlineRight className="mx-2" />
          <h1>My Account</h1>
          <AiOutlineRight className="mx-2" />
          <h6>Order Cancel</h6>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-9">
            <div className="border-separate border border-gray-200 p-5 mt-5">
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <img className="w-20" src={tv} alt="" />
                  </div>
                  <div>
                    <button className="hover:bg-myColor hover:text-white  text-myColor border border-myColor font-semibold py-1 transform duration-500 px-5 rounded-sm">
                      View Order
                    </button>
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
    );
};

export default OrderCancel;