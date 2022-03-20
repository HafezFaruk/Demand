import React from 'react';

const ProfileInformation = () => {
    return (
      <div>
        <h1 className="font-medium text-2xl">Profile Information</h1>
        <form>
          <div className="md:flex">
            <div className="w-full mt-4">
              <label htmlFor="">First Name *</label> <br />
              <input
                className="w-full mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
                type="name"
                name=""
                placeholder="First Name"
                id=""
              />
            </div>
            <div className="w-full md:ml-4 mt-4">
              <label htmlFor="">Last Name *</label>
              <br />
              <input
                className="w-full mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
                type="name"
                name=""
                placeholder="Last Name"
                id=""
              />
            </div>
          </div>
          <div className="md:flex">
            <div className="w-full mt-4">
              <label htmlFor="">Birthday *</label> <br />
              <input
                className="w-full mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
                type="date"
                name=""
                placeholder="Birthday"
                id=""
              />
            </div>
            <div className="w-full md:ml-4 mt-4">
              <label htmlFor="">Gender *</label>
              <br />
              <select
                className="w-full mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
                name="gender"
              >
                <option value="none" selected>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">other</option>
              </select>
            </div>
          </div>
          <div className="md:flex">
            <div className="w-full mt-4">
              <label htmlFor="">Email *</label> <br />
              <input
                className="w-full mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
                type="email"
                name=""
                placeholder="Email"
                id=""
              />
            </div>
            <div className="w-full md:ml-4 mt-4">
              <label htmlFor="">Phone Number *</label>
              <br />
              <input
                className="w-full mt-1 focus:outline-none rounded-md py-2 px-2 border-2 border-gray-200"
                type="number"
                name=""
                placeholder="Phone Number
"
                id=""
              />
            </div>
          </div>
          <button className="bg-myColor hover:bg-myColor uppercase text-white font-semibold py-3 px-10 mt-8 border-none rounded-md">
            Send Message
          </button>
        </form>
      </div>
    );
};

export default ProfileInformation;