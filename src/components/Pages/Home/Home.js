import React from 'react';
import About from '../../About/About';
import FreeDelivery from '../../FreeDelivery/FreeDelivery';
import Header from '../../Layout/Header';
import PopularMenu from '../../Layout/PopularMenu';
import Promo from '../../Layout/Promo';
import Order from '../../Order/Order';
import Partners from '../../Partners/Partners';

const Home = () => {
    return (
        <div>
            <Header/>
            <PopularMenu/>
            <Promo/>
            <Order/>
            <FreeDelivery />
            <Partners />
            <About />
        </div>
    );
};

export default Home;