import React from 'react';
import Banner from '../../components/banner/Banner';
import OrderOnline from '../../components/orderOnline/OrderOnline';
import MenuPhoto from '../../components/menuPhoto/MenuPhoto';
import ChefService from '../../components/chef-service/ChefService';
import MiniTitle from '../../components/miniTitle/MiniTitle';

const Home = () => {
    return (
		<div>
			<Banner></Banner>
			<OrderOnline></OrderOnline>
			<div className="mx-auto" style={{ maxWidth: "1200px" }}>
				<MenuPhoto></MenuPhoto>
			</div>
			<div className="mx-auto mb-5" style={{ maxWidth: "1200px" }}>
				<ChefService></ChefService>
			</div>
			<div className='mb-5'>
				<MiniTitle time="Check it out" text="From our menu"></MiniTitle>
			</div>
		</div>
	);
};

export default Home;