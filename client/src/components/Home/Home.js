import React from 'react';
import Banner from '../Banner/Banner.js'
import CardItem from '../CardItem/CardItem.js';
import MiniCard from '../MiniCard/MiniCard.js';
import OfferCard from '../OfferCard/OfferCard.js';
import ShopByCategory from '../Shop/ShopByCategory.js';
import imgOff from '../../img/offer-card.jpg';


const Home = () => {
  return (
    <div>
      <div className="container">
        <Banner />
        <MiniCard />
        <OfferCard />
        <ShopByCategory />
        <CardItem />
        <img src={imgOff} alt="" />
        <CardItem />
      </div>

    </div>
  );
};

export default Home;