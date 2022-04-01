
import React from "react";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import Sidebar from "./Sidebar.js";

const MyVaucher = () => {
  return (
    <div className="container">
      <div className="flex items-center my-5">
        <AiOutlineHome className="text-myColor" />
        <AiOutlineRight className="mx-2" />
        <h1>My Account</h1>
        <AiOutlineRight className="mx-2" />
        <h6>Edit Payments Methods</h6>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <h1 className="text-lg font-semibold">My Vaucher</h1>
          <p>There are no vouchers yet</p>
        </div>
      </div>
    </div>
  );
};

export default MyVaucher;
