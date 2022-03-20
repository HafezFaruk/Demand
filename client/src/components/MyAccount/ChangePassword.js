

import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const ChangePassword = () => {
    const [passwordShown1, setPasswordShown1] = useState(false);
    const [passwordShown2, setPasswordShown2] = useState(false);
    const [passwordShown3, setPasswordShown3] = useState(false);
      const togglePasswordVisibility = (e) => {
          if (e==="password1") {
              setPasswordShown1(passwordShown1 ? false : true);
              
          }
          if (e==="password2") {
              setPasswordShown2(passwordShown2 ? false : true);
              
          }
          if (e==="password3") {
              setPasswordShown3(passwordShown3 ? false : true);
              
          }
      };
    return (
      <div>
        <h1 className="font-medium text-2xl">Change Password</h1>
        <form>
          <div className="mt-4 relative">
            <label htmlFor="">Current Password</label> <br />
            <input
              className="w-1/2 mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
              type={passwordShown1 ? "text" : "password"}
              name="password1"
              placeholder="Current Password"
              id=""
            />
            <i
              className="absolute left-96 bottom-2  mt-7"
              onClick={() => togglePasswordVisibility("password1")}
            >
              {eye}
            </i>
          </div>
          <div className="mt-4 relative">
            <label htmlFor="">New Password</label> <br />
            <input
              className="w-1/2 mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
              type={passwordShown2 ? "text" : "password"}
              name="password2"
              placeholder="New Password"
              id=""
            />
            <i
              className="absolute left-96 bottom-2  mt-7"
              onClick={() => togglePasswordVisibility("password2")}
            >
              {eye}
            </i>
          </div>
          <div className="mt-4 relative">
            <label htmlFor="">Retype Password</label> <br />
            <input
              className="w-1/2 mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
              type={passwordShown3 ? "text" : "password"}
              name="password3"
              placeholder="Retype Password"
              id=""
            />
            <i
              className="absolute left-96 bottom-2  mt-7"
              onClick={() => togglePasswordVisibility("password3")}
            >
              {eye}
            </i>
          </div>
          <button className="bg-myColor hover:bg-myColor uppercase text-white font-semibold py-3 px-4 mt-8 border-none rounded-md">
            SAVE CHANGES
          </button>
        </form>
      </div>
    );
};

export default ChangePassword;



