import React from 'react';
import img1 from '../../img/delivery-van.svg'
import img2 from '../../img/money-back.svg'
import img3 from '../../img/service-hours.svg'
const MiniCard = () => {
    return (
      <div className="grid grid-cols-3 gap-3 my-10 mx-8">
        <div className="flex items-center border-2 border-myColor px-16 py-6 rounded-sm">
          <img src={img1} alt="" />
          <div className="ml-5">
            <h1>Free shipping</h1>
            <h1>Orders over $200</h1>
          </div>
        </div>
        <div className="flex items-center border-2 border-myColor px-16 py-6 rounded-sm">
          <img src={img2} alt="" />
          <div className="ml-5">
            <h1>Free shipping</h1>
            <h1>Orders over $200</h1>
          </div>
        </div>
        <div className="flex items-center border-2 border-myColor px-16 py-6 rounded-sm">
          <img src={img3} alt="" />
          <div className="ml-5">
            <h1>Free shipping</h1>
            <h1>Orders over $200</h1>
          </div>
        </div>
      </div>
    );
};

export default MiniCard;