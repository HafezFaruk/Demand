import React from 'react';
import Banner from '../Banner/Banner.js'
import CardItem from '../CardItem/CardItem.js';
import MiniCard from '../MiniCard/MiniCard.js';
import OfferCard from '../OfferCard/OfferCard.js';
import ShopByCategory from '../ShopByCategory/ShopByCategory.js';
import imgOff from '../../img/offer-card.jpg';
import payment from '../../img/payment-method.png';

import Footer from '../Footer/Footer.js';
const Home = () => {
    return (
      <div>
        <div className="mx-10">
          <Banner />
          <MiniCard />
          <OfferCard />
          <ShopByCategory />
          <CardItem />
          <img src={imgOff} alt="" />
          <CardItem />
          <Footer />
        </div>
        <footer className="py-3 mt-10 bg-gray-800 text-white flex justify-between px-10">
          <p>© Demand - All Rights Reserved</p>
          <img className='w-60' src={payment} alt="" />
        </footer>
      </div>
    );
};

export default Home;