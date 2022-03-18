import React from "react";
import ChangePassword from "./ChangePassword.js";
import ManageAddress from "./ManageAddress.js";
import Profile from "./Profile.js";
import ProfileInformation from "./ProfileInformation.js";
import RecentOrders from "./RecentOrders.js";

const MyAccount = () => {
  return (
    <div className="mx-10 mt-24">
      <Profile />
      <RecentOrders />
      <ProfileInformation />
      <ManageAddress/>
      <ChangePassword/>
    </div>
  );
};

export default MyAccount;
