import axios from "axios";
import React, { useEffect } from "react";

const CardItem = () => {
  const [product, setProduct] = React.useState([]);
  useEffect(()=>{
    axios.get('./data.json') 
    .then(data => {
        const productItems = data.data.slice(0, 10);
        setProduct(productItems);
    });
    },[]);
  return (
    <div className="mx-10">
      <div className="container pb-16">
        <h2 className="text-3xl font-bold text-gray-800 uppercase mb-6">
          top new arrival
        </h2>

        {product.map((items)=><div key={items.id} className="grid grid-cols-4 gap-6">
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <img
                src={items.image}
                className="w-full"
                alt=""
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href="/#"
                  className="text-white text-lg w-9 h-8 rounded-lg bg-myColor flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fa-solid fa-eye"></i>
                </a>
                <a
                  href="/#"
                  className="text-white text-lg w-9 h-8 rounded-lg bg-myColor flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-3 pb-3 px-4">
              <a href="/#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  {items.title}
                </h4>
              </a>
              <p className="capitalize font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">
                {items.description}
              </p>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">$ {items.price}</p>
                <p className="text-sm text-gray-400 line-through">$ {items.pricepre}</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">({items.review})</div>
              </div>
            </div>
            <a
              href="/#"
              className="block w-full py-1 text-center text-white hover:text-myColor bg-myColor border border-myColor rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to card
            </a>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default CardItem;
