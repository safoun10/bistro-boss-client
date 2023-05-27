import React from 'react';
import Banner from '../../components/banner/Banner';
import OrderOnline from '../../components/orderOnline/OrderOnline';
import MenuPhoto from '../../components/menuPhoto/MenuPhoto';

const Home = () => {
    return (
		<div>
			<Banner></Banner>
			<OrderOnline></OrderOnline>
			<div className='mx-auto' style={{maxWidth : "1200px"}}>
				<MenuPhoto></MenuPhoto>
			</div>
		</div>
	);
};

export default Home;