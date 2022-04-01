import React from 'react';
import Sidebar from './Sidebar.js';
import Profile from "./Profile.js";
import RecentOrders from "./RecentOrders.js";
import {
  AiOutlineHome,
  AiOutlineRight,
} from "react-icons/ai";
const ManageMyAccount = () => {
  return (
    <div className='container'>
      <div className="flex items-center mt-10">
        <AiOutlineHome className="text-myColor" />
        <AiOutlineRight className="mx-2" />
        <h6>My Account</h6>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <Profile />
          <RecentOrders />
        </div>
      </div>
    </div>
  );
};

export default ManageMyAccount;