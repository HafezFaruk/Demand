import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="font-semibold text-1xl">Personal Profile </h1>
              <Link
                to="/myAccount/profileInformation"
                className="text-myColor hover:underline hover:cursor-pointer"
              >
                Edit
              </Link>
            </div>
            <p>Russell Ahmed</p>
            <p>example@mail.com</p>
            <p>(123) 456-789</p>
          </div>
          <div className="lg:mx-14">
            <div className="flex justify-between items-center mb-4">
              <h1 className="font-semibold text-1xl">Shipping Address</h1>
              <Link
                to="/myAccount/manageAddress"
                className="text-myColor hover:underline hover:cursor-pointer"
              >
                Edit
              </Link>
            </div>
            <p>Russell Ahmed</p>
            <p>example@mail.com</p>
            <p>(123) 456-789</p>
          </div>
          <div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="font-semibold text-1xl">Billing Address</h1>
              <Link
                to="/myAccount/manageAddress"
                className="text-myColor hover:underline hover:cursor-pointer"
              >
                Edit
              </Link>
            </div>
            <p>Russell Ahmed</p>
            <p>example@mail.com</p>
            <p>(123) 456-789</p>
          </div>
        </div>
      </div>
    );
};

export default Profile;