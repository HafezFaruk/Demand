import React from "react";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import Sidebar from "./Sidebar";
function paymentEdit() {
  return (
    <div className="container ">
      <div className="flex items-center my-5">
        <AiOutlineHome className="text-myColor" />
        <AiOutlineRight className="mx-2" />
        <h1>My Account</h1>
        <AiOutlineRight className="mx-2" />
        <h6>Payment Edit</h6>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <h4 className="font-medium text-2xl">Edit PaymentsMethods</h4>

          <form>
            <div className="md">
              <div className="w-full mt-4 ">
                <label htmlFor=""> Card number *</label>
                <br />
                <input
                  className="w-full mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
                  type="number"
                  placeholder="cart Number"
                />
              </div>
              <div className="w-full mt-4">
                <label htmlFor="">Name On cart *</label> <br />
                <input
                  className="w-full mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
                  type="name"
                  name=""
                  placeholder="Enter Name on Cart"
                  id=""
                />
              </div>
              <div className="md:flex">
                <div className="w-full mt-4">
                  <label htmlFor="">Expiration Date *</label> <br />
                  <input
                    className="w-full mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
                    type="name"
                    name=""
                    placeholder="MM\YY"
                    id=""
                  />
                </div>
                <div className="w-full md:ml-4 mt-4">
                  <label htmlFor="">CV *</label>
                  <br />
                  <input
                    className="w-full mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
                    type="name"
                    name=""
                    placeholder="CV"
                    id=""
                  />
                </div>
              </div>
            </div>
            <button className="bg-myColor hover:bg-myColor uppercase text-white font-semibold py-3 px-10 mt-8 border-none rounded-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default paymentEdit;
