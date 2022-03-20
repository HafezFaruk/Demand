import React from 'react';
import img1 from "../../img/payment-visa.png";
import img2 from "../../img/payment-master.png";
import img3 from "../../img/payment-express.png";
const Payment1 = () => {
    return (
      <div>
        <div className="mt-10 pb-8 pl-8 pr-8 border-2 border-gray-200">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-lg">Credit Card</h1>
            <div className="flex items-center">
              <img src={img1} alt="" />
              <img className="mx-4" src={img2} alt="" />
              <img src={img3} alt="" />
            </div>
          </div>
          <form>
            <div>
              <label htmlFor="">Card Number *</label>
              <br />
              <input
                className="w-full mt-1 focus:outline-none rounded-l-sm py-2 px-2 border-2 border-gray-200"
                type="text"
                name=""
                placeholder="Card Number"
                id=""
              />
            </div>
            <div className="mt-4">
              <label htmlFor="">Name on Card *</label>
              <br />
              <input
                className="w-full mt-1 focus:outline-none rounded-l-sm py-2 px-2 border-2 border-gray-200"
                type="text"
                name=""
                placeholder="Name on Card"
                id=""
              />
            </div>
            <div className="md:flex">
              <div className="w-full mt-4">
                <label htmlFor="">Expiration Date *</label> <br />
                <input
                  className="w-full mt-1 focus:outline-none rounded-l-sm py-2 px-2 border-2 border-gray-200"
                  type="date"
                  name=""
                  placeholder="Expiration Date"
                  id=""
                />
              </div>
              <div className="w-full md:ml-4 mt-4">
                <label htmlFor="">CVV *</label>
                <br />
                <input
                  className="w-full mt-1 focus:outline-none rounded-l-sm py-2 px-2 border-2 border-gray-200"
                  type="name"
                  name=""
                  placeholder="CVV"
                  id=""
                />
              </div>
            </div>
            <button className="bg-myColor hover:bg-white uppercase text-white hover:text-myColor border-2 border-myColor font-semibold py-2 px-6 mt-6 rounded-md">
              PAY NOW
            </button>
          </form>
        </div>
      </div>
    );
};

export default Payment1;