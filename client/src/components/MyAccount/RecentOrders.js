import React from 'react';
import tv from '../../img/tv.png'
const RecentOrders = () => {
    return (
      <div className="mt-20">
        <h1 className="my-2 font-medium">Recent Orders</h1>
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
    );
};

export default RecentOrders;