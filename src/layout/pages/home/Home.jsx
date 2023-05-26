import React from 'react';
import Banner from '../../components/banner/Banner';
import OrderOnline from '../../components/orderOnline/OrderOnline';
import MenuPhoto from '../../components/menuPhoto/MenuPhoto';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <MenuPhoto></MenuPhoto>
        </div>
    );
};

export default Home;