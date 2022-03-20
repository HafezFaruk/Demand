import React from 'react';
import paypal from "../../img/paypal.png";
const Payment2 = () => {
    return (
      <div className='mt-10 mx-10'>
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-lg font-bold">Paypal</h1>
          <img src={paypal} alt="" />
        </div>
        <h1 className="text-center">Payment using your paypal</h1>
        <div className="flex justify-center">
          <button className="bg-myColor text-white hover:bg-white  hover:text-myColor border border-gray-200 font-semibold py-2 px-4 mt-3 rounded-md">
            PAY NOW
          </button>
        </div>
      </div>
    );
};

export default Payment2;