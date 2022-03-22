import React from 'react';

import { AiOutlineHome, AiOutlineRight, AiOutlineCheck } from "react-icons/ai";
const OrderComplete = () => {
    return (
      <div className="text-center mx-10">
        <div className="flex items-center mt-10">
          <AiOutlineHome className="text-myColor" />
          <AiOutlineRight className="mx-2" />
          <h1>Order complete</h1>
        </div>
        <div className="flex justify-center  items-center mt-20">
          <div className="flex justify-center  items-center text-5xl bg-myColor rounded-full h-16 w-16 text-white text-center">
            <AiOutlineCheck />
          </div>
        </div>
        <h1 className="uppercase text-2xl my-3 font-semibold">
          YOUR ORDER IS COMPLETED!
        </h1>
        <p>
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours.
        </p>
        <p>
          You will receive an email confirmation when your order is completed.
        </p>
        <button className="bg-myColor text-white hover:bg-white  hover:text-myColor border hover:border-myColor font-semibold py-2 px-4 mt-5 rounded-md">
          CONTINUE SHOPPING
        </button>
      </div>
    );
};

export default OrderComplete;