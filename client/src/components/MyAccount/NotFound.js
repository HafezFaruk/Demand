import React from 'react';
import {
  AiOutlineHome,
  AiOutlineRight,
} from "react-icons/ai";
import { Link } from 'react-router-dom';
import notFound from '../../img/404.svg'
const NotFound = () => {
  return (
    <div className="container">
      <div className="flex items-center my-5">
        <AiOutlineHome className="text-myColor" />
        <AiOutlineRight className="mx-2" />
        <h1>404</h1>
      </div>
      <div className="flex justify-center items-center text-center">
        <div>
          <img src={notFound} alt="" />
          <h1 className="my-5 text-2xl">
            THE PAGE YOU'VE REQUESTED IS NOT AVAILABLE
          </h1>
          <Link to="/">
            <button className="bg-myColor text-white hover:bg-white  hover:text-myColor border border-myColor font-semibold py-2 transform duration-500 px-8 rounded-sm">
              BACK TO HOME
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;