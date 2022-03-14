import React from 'react';

const Banner = () => {
  
  return (
    <div className="bg-bgImage h-96 bg-no-repeat bg-center bg-cover	flex items-center">
      <div className="ml-10">
        <h1 className="text-6xl font-semibold">
          Bast Collection For <br /> Home Decoration
        </h1>
        <p className="lg:w-1/2 my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          itaque temporibus quod dolorem architecto corrupti aliquid quia
          eveniet debiti?
        </p>
        <button className="bg-myColor hover:bg-myColor uppercase text-white font-semibold py-4 px-10 border-none rounded-sm">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;