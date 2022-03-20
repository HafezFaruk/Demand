import React from "react";
import {
  AiOutlineHome,
  AiOutlineRight,
  AiFillGift,
  AiOutlineHeart,
} from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { CgLogOff } from "react-icons/cg";
import avatar from "../../img/avatar-2.png";
import { Link } from "react-router-dom";
const MyAccountSidebar = () => {
  return (
    <div className="mx-10">
      <div className="flex items-center mt-10">
        <AiOutlineHome className="text-myColor" />
        <AiOutlineRight className="mx-2" />
        <h6>My Account</h6>
      </div>
      <div className="flex items-center my-10">
        <img className="mr-4 w-12 rounded-full" src={avatar} alt="" />
        <div>
          <h1>Hello,</h1>
          <h1>Md Omar Faruk</h1>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <FaRegAddressCard className="text-myColor" />
          <Link to="/myAccount" className="ml-3">
            Manage My Account
          </Link>
        </div>
        <div className="ml-7 mt-1">
          <Link to="profileInformation" className="mt-1">
            Profile Information
          </Link>
          <h1 className="mt-1">Manage Address</h1>
          <h1 className="mt-1">Change Password</h1>
        </div>
      </div>
      <div className="my-5">
        <div className="flex items-center">
          <AiFillGift className="text-myColor" />
          <h1 className="ml-3">My Order History</h1>
        </div>
        <div className="ml-7">
          <h1 className="mt-1">My Returns</h1>
          <h1 className="mt-1">My Cancellations</h1>
          <h1 className="mt-1">My Reviews</h1>
        </div>
      </div>
      <div>
        <div className="flex items-center mb-1">
          <MdPayment className="text-myColor" />
          <h1 className="ml-3">Payments Methods</h1>
        </div>
        <div className="ml-7">
          <h1>Voucher</h1>
        </div>
      </div>
      <div className="flex items-center my-5">
        <AiOutlineHeart className="text-myColor" />
        <h1 className="ml-3">My Wishlist</h1>
      </div>
      <div className="flex items-center">
        <CgLogOff className="text-myColor" />
        <h1 className="ml-3">Log Out</h1>
      </div>
    </div>
  );
};

export default MyAccountSidebar;
