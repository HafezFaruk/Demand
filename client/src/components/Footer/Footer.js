import React from "react";
import payment from "../../img/payment-method.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-gray-100 pt-10 mt-20">
      <div className="grid grid-cols-12 gap-3 container">
        <div className=" col-span-4 ">
          <h1 className="text-3xl text-myColor uppercase mb-3 font-satisfy font-semibold">Demand</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            similique fugiat ab aperiam iusto est quae suscipit iste sunt eos.
          </p>
          <h1 className="text-1xl uppercase my-3">NEWSLETTER</h1>
          <div className=" rounded-md">
            <input
              className="focus:outline-none rounded-l-sm py-2 px-2 border-2 border-myColor"
              type="search"
              name=""
              placeholder="Search Your Product"
              id=""
            />
            <button className="uppercase bg-myColor hover:bg-myColor  text-white font-semibold py-9px px-2 border-none rounded-r-sm">
              Subscribe
            </button>
          </div>
        </div>
        <div className="col-span-2">
          <h1 className="text-2xl uppercase mb-3">MY ACCOUNT</h1>
          <p className="mb-3">Orders</p>
          <p className="mb-3">Wishlist Track</p>
          <p className="mb-3">Order Manage</p>
          <p className="mb-3">Account</p>
          <p className="mb-3">Return Order</p>
        </div>
        <div className="col-span-2">
          <h1 className="text-2xl uppercase mb-3">INFORMATION</h1>
          <p className="mb-3">About Us</p>
          <p className="mb-3">Return Policy</p>
          <p className="mb-3">Terms & condition</p>
          <p className="mb-3">Privacy Policy</p>
          <p className="mb-3">FAQ</p>
        </div>
        <div className="col-span-4">
          <h1 className="text-2xl uppercase mb-3">CONTACT</h1>
          <p className="flex items-center mt-3">
            <AiFillEnvironment className="mr-4 text-2xl" />
            <span>
              7895 Dr New Albuquerue, NM 19800, United States Of America
            </span>
          </p>
          <p className="flex items-center mt-3">
            <MdCall className="mr-4 text-2xl" />
            <span>+566 477 256, +566 254 575</span>
          </p>
          <p className="flex items-center mt-3">
            <AiOutlineMail className="mr-4 text-2xl" />
            <span>info@domain.com</span>
          </p>
          <p className="flex mt-4">
            <span className="rounded-full bg-twitter p-2 text-white text-3xl text-center">
              <BsTwitter />
            </span>
            <span className="rounded-full bg-facebook p-2 text-white mx-5 text-3xl text-center">
              <FaFacebookF />
            </span>
            <span className="rounded-full bg-instagram p-2 text-white text-3xl text-center">
              <AiFillInstagram />
            </span>
          </p>
        </div>
      </div>
      <footer className="py-3 mt-10 bg-gray-800 text-white md:flex justify-between  px-10">
        <p>© Demand - All Rights Reserved</p>
        <img className="w-60" src={payment} alt="" />
      </footer>
    </div>
  );
};

export default Footer;