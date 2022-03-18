import React, { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";
function NavigationBar() {

  //We will use react hooks for toggling the menu

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  
  const showSideMenu = () => {
    isSideMenuOpen ? setIsSideMenuOpen(false) : setIsSideMenuOpen(true);
  };

  return (
    <div className="w-full h-16 bg-gray-900 text-white flex flex-row justify-between items-center">
      <div className="flex bg-myColor p-5 ml-10">
        {isSideMenuOpen ? SideMenu() : ""}
        <button
          onClick={() => {
            showSideMenu();
          }}
          className="menu-button "
        >
          {isSideMenuOpen ? (
            <div className="flex items-center brand-logo font-bold font-poppins text-1xl">
              <AiOutlineMenu />
              <span className="ml-2 text-white">All categories</span>
            </div>
          ) : (
            <div className="flex items-center brand-logo font-bold  font-poppins text-1xl">
              <AiOutlineMenu />
              <span className="ml-2">All categories</span>
            </div>
          )}
        </button>
      </div>

      <ul className="hidden  menu-list lg:flex lg:flex-row text-md font-semibold pr-10">
        <li className="menu-list-item px-2">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-list-item px-2">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="menu-list-item pl-2">
          <Link to="/aboutUs">About Us</Link>
        </li>
        <li className="menu-list-item pl-2">
          <Link to="/myAccount">My Account</Link>
        </li>
      </ul>

      <div className="mr-10 flex items-center">
        <p className="mr-8 font-semibold">Language</p>
        <MdCall />
        <span className="ml-2"> Call: +088 01303 257 890</span>
      </div>
    </div>
  );
}

function SideMenu() {
  return (
    <div className="fixed h-screen w-44  bg-gray-600 mt-11 -ml-5">
      <ul className="flex flex-col text-xs font-bold pl-4 transition duration-500">
        <li className=" py-2 hover:bg-white hover:text-blue-700">
          <a href="a">Home</a>
        </li>
        <li className=" py-2 hover:bg-white hover:text-blue-700">
          <a href="a">Profile</a>
        </li>
        <li className=" py-2 hover:bg-white hover:text-blue-700">
          <a href="a">Settings</a>
        </li>
      </ul>
    </div>
  );
}
export default NavigationBar;