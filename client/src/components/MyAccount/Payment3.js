import React from "react";
import cash from "../../img/cash-on.png";

const Payment3 = () => {
  return (
    <div className="mt-10 container">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-lg font-bold">Cash On delivery</h1>
        <img src={cash} alt="" />
      </div>
      <p className="text-center">you can pay in cash to our courier when you</p>
      <p className="text-center">receive the goods at your doorstep.</p>
      <div className="flex justify-center mt-3">
        <button className="bg-myColor text-white hover:bg-white  hover:text-myColor border border-gray-200 font-semibold py-2 px-4 rounded-md">
          CONFIRM ORDER
        </button>
      </div>
    </div>
  );
};

export default Payment3;
