import React from "react";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import express from "../../img/a-express.png";
import Sidebar from "./Sidebar.js";

const PaymentsMethods = () => {
  return (
    <div className="mx-10">
      <div className="flex items-center my-5">
        <AiOutlineHome className="text-myColor" />
        <AiOutlineRight className="mx-2" />
        <h1>My Account</h1>
        <AiOutlineRight className="mx-2" />
        <h6>Payments Methods</h6>
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
                  <img className="h-10" src={express} alt="" />
                </div>
                <div>
                  <h1 className="font-semibold mb-2">Method</h1>
                  <p>American Express</p>
                </div>
              </div>
              <div>
                <h1 className="font-semibold mb-2">Last Four</h1>
                <p>0022</p>
              </div>
              <div>
                <h1 className="font-semibold mb-2">Expires</h1>
                <p>01/22</p>
              </div>
              <div>
                <h1 className="font-semibold mb-2">Defalut</h1>
                <p>Yes</p>
              </div>
              <div className="flex items-center justify-center">

                <Link to="/myAccount/PaymentEdit">
                <button className="text-myColor bg-white hover:bg-myColor w-20 text-center  hover:text-white border border-myColor font-semibold py-2  mx-1 rounded-md">
                  Edit
                </button></Link>
          

                <button className="text-myColor bg-white hover:bg-myColor w-20 text-center  hover:text-white border border-myColor font-semibold py-2  mx-1 rounded-md">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsMethods;
