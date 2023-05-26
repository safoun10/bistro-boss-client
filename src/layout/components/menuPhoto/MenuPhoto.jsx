import React from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Pagination } from 'swiper';

const MenuPhoto = () => {
    return (
		<div className="my-5">
			<Swiper
				spaceBetween={30}
				slidesPerView={4}
				pagination={{
					dynamicBullets: true,
				}}
				modules={[Pagination]}
			>
				<SwiperSlide className="bg-success py-5 mb-5">Slide 1</SwiperSlide>
				<SwiperSlide className="bg-success py-5 mb-5">Slide 2</SwiperSlide>
				<SwiperSlide className="bg-success py-5 mb-5">Slide 3</SwiperSlide>
				<SwiperSlide className="bg-success py-5 mb-5">Slide 4</SwiperSlide>
				<SwiperSlide className="bg-success py-5 mb-5">Slide 1</SwiperSlide>
				<SwiperSlide className="bg-success py-5 mb-5">Slide 2</SwiperSlide>
				<SwiperSlide className="bg-success py-5 mb-5">Slide 3</SwiperSlide>
				<SwiperSlide className="bg-success py-5 mb-5">Slide 4</SwiperSlide>
				<SwiperSlide className="bg-success py-5 mb-5">Slide 1</SwiperSlide>
				<SwiperSlide className="bg-success py-5 mb-5">Slide 2</SwiperSlide>
				<SwiperSlide className="bg-success py-5 mb-5">Slide 3</SwiperSlide>
				<SwiperSlide className="bg-success py-5 mb-5">Slide 4</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default MenuPhoto;