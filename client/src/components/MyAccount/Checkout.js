import React from "react";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";

const Checkout = () => {
  return (
    <div className="mx-10">
      <div className="flex items-center mt-10">
        <AiOutlineHome className="text-myColor" />
        <AiOutlineRight className="mx-2" />
        <h1 className="text-myColor">Shop</h1>
        <AiOutlineRight className="mx-2" />
        <h1>Checkout</h1>
      </div>

      <div className="mt-5">
        <div className="grid grid-cols-12 gap-6 mt-20">
          <div className="col-span-8">
            <h1 className="text-xl font-semibold bg-gray-300 py-2 pl-3">
              Billing Details
            </h1>
            <form>
              <div className="md:flex">
                <div className="w-full mt-4">
                  <label htmlFor="">First Name *</label> <br />
                  <input
                    className="w-full mt-1 focus:outline-none rounded-l-sm py-2 px-2 border-2 border-gray-200"
                    type="name"
                    name=""
                    placeholder="First Name"
                    id=""
                  />
                </div>
                <div className="w-full md:ml-4 mt-4">
                  <label htmlFor="">Last Name *</label>
                  <br />
                  <input
                    className="w-full mt-1 focus:outline-none rounded-l-sm py-2 px-2 border-2 border-gray-200"
                    type="name"
                    name=""
                    placeholder="Last Name"
                    id=""
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="">Company Name</label>
                <br />
                <input
                  className="w-full mt-1 focus:outline-none rounded-l-sm py-2 px-2 border-2 border-gray-200"
                  type="email"
                  name=""
                  placeholder="Email"
                  id=""
                />
              </div>
              <div className="mt-4">
                <label htmlFor="">County/Region *</label>
                <br />
                <input
                  className="w-full mt-1 focus:outline-none rounded-l-sm py-2 px-2 border-2 border-gray-200"
                  type="text"
                  name=""
                  placeholder="Subject"
                  id=""
                />
              </div>
              <div className="mt-4">
                <label htmlFor="">Street Address *</label>
                <br />
                <input
                  className="w-full mt-1 focus:outline-none rounded-l-sm py-2 px-2 border-2 border-gray-200"
                  type="text"
                  name=""
                  placeholder="Subject"
                  id=""
                />
              </div>
              <div className="mt-4">
                <label htmlFor="">Town/City *</label>
                <br />
                <input
                  className="w-full mt-1 focus:outline-none rounded-l-sm py-2 px-2 border-2 border-gray-200"
                  type="text"
                  name=""
                  placeholder="Subject"
                  id=""
                />
              </div>
              <div className="mt-4">
                <label htmlFor="">Zip Code *</label>
                <br />
                <input
                  className="w-full mt-1 focus:outline-none rounded-l-sm py-2 px-2 border-2 border-gray-200"
                  type="text"
                  name=""
                  placeholder="Subject"
                  id=""
                />
              </div>
              <div className="mt-4">
                <label htmlFor="">Phone Number *</label>
                <br />
                <input
                  className="w-full mt-1 focus:outline-none rounded-l-sm py-2 px-2 border-2 border-gray-200"
                  type="text"
                  name=""
                  placeholder="Subject"
                  id=""
                />
              </div>
              <div className="mt-4">
                <label htmlFor="">Email Address *</label>
                <br />
                <input
                  className="w-full mt-1 focus:outline-none rounded-l-sm py-2 px-2 border-2 border-gray-200"
                  type="text"
                  name=""
                  placeholder="Subject"
                  id=""
                />
              </div>
            </form>
          </div>
          <div className="col-span-4">
            <div>
              <h1 className="text-xl font-semibold bg-gray-300 py-2 pl-3">
                Your Order
              </h1>
              <div className="border-2 border-gray-200 p-4 mt-5">
                <h1 className="border-b-2 border-gray-200 pb-4">PRODUCT</h1>
                <div className="border-b-2 border-gray-200 py-4">
                  <div>
                    <h1 className="flex justify-between items-center mt-2">
                      <span>Beigh Knitted Shoes</span>
                      <span className="ml-10">x1</span>
                      <span>$84.00</span>
                    </h1>
                    <h1>Size: M</h1>
                  </div>
                  <div className="mt-4">
                    <h1 className="flex justify-between items-center mt-2">
                      <span>Beigh Knitted Shoes</span>
                      <span className="ml-10">x1</span>
                      <span>$84.00</span>
                    </h1>
                    <h1>Size: M</h1>
                  </div>
                  <div className="mt-4">
                    <h1 className="flex justify-between items-center mt-2">
                      <span>Beigh Knitted Shoes</span>
                      <span className="ml-10">x1</span>
                      <span>$84.00</span>
                    </h1>
                    <h1>Size: M</h1>
                  </div>
                  <h1 className="flex justify-between items-center mt-4">
                    <span>SUBTOTAL</span>
                    <span>$140.00</span>
                  </h1>
                </div>
                <h1 className="flex justify-between items-center mt-2 border-b-2 border-gray-200 pb-4">
                  <span>SHIPPING</span>
                  <span>FREE</span>
                </h1>
                <h1 className="flex justify-between items-center mt-2 border-b-2 border-gray-200 pb-4">
                  <span>TOTAL</span>
                  <span>$170.00</span>
                </h1>
                <div>
                  <div className="flex items-center mt-5 mb-6">
                    <span className="flex items-center h-5 mr-3">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 bg-gray-50 focus:outline-none focus:ring-0"
                        required
                      />
                    </span>
                    <span>Agree to our terms & conditions</span>
                  </div>
                </div>
                <button className="bg-myColor hover:bg-white uppercase text-white hover:text-myColor border-2 border-gray-200 font-semibold py-2 w-full rounded-md">
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
