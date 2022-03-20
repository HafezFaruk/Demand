import React from 'react';
import tv from '../../img/tv.png'
const RecentOrders = () => {
    return (
      <div className="mt-20">
        <h1>Recent Orders</h1>
        <div className="border-separate border border-gray-200 p-5 mt-5">
          <div>
            <div className="flex justify-between items-center">
              <div>
                <img className="w-20" src={tv} alt="" />
              </div>
              <div>
                <button className="hover:bg-myColor hover:text-white  text-myColor border border-gray-200 font-semibold py-1 px-4 rounded-md">
                  View Order
                </button>
              </div>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th>Order Number</th>
                <th>Purchased</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-left">
                <td>23E34RT3</td>
                <td>01 March 2021</td>
                <td>x3</td>
                <td>$120</td>
                <td>Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default RecentOrders;