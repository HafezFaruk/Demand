import React from "react";
import sofa1 from "../../img/sofa-1.png";
import sofa2 from "../../img/sofa-2.png";
const OfferCard = () => {
  return (
    <div className=" grid grid-cols-2 gap-3">
      <div className="flex items-center bg-pink-100 p-8 rounded-sm">
        <div className="mr-14 ">
          <h1 className="text-myColor text-2xl">30% offer</h1>
          <h1 className="my-1 text-3xl">Free Shipping</h1>
          <p>Attractive Natural Furniture</p>
          <button className="btn-pink">Shop Now</button>
        </div>
        <div>
          <img className="h-52" src={sofa1} alt="" />
        </div>
      </div>
      <div className="flex items-center bg-gray-100 p-8 rounded-sm">
        <div className="mr-14 ">
          <h1 className="text-myColor text-2xl">30% offer</h1>
          <h1 className="my-1 text-3xl">Free Shipping</h1>
          <p>Attractive Natural Furniture</p>
          <button className="btn-pink">Shop Now</button>
        </div>
        <div>
          <img className="h-48" src={sofa2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
