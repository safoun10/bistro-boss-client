import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Pagination } from "swiper";
import "./MenuPhoto.css";

const MenuPhoto = () => {
	return (
		<div className="my-5 mx-2">
			<Swiper
				spaceBetween={10}
				slidesPerView={4}
				pagination={{
					dynamicBullets: true,
				}}
				modules={[Pagination]}
			>
				<SwiperSlide className="img-fluid">
					<img
						className="rounded-4 mt-2 responsive-img-menu"
						src="https://i.postimg.cc/90YG6hwQ/slide1.jpg"
						alt="photo"
					/>
					<div className="text-in-photo text-center text-fancy">
						salads
					</div>
				</SwiperSlide>
				<SwiperSlide className="img-fluid">
					<img
						className="rounded-4 mt-2 responsive-img-menu"
						src="https://i.postimg.cc/8z5h0xpT/slide2.jpg"
						alt="photo"
					/>
					<div className="text-in-photo text-center text-fancy">
						salads
					</div>
				</SwiperSlide>
				<SwiperSlide className="img-fluid">
					<img
						className="rounded-4 mt-2 responsive-img-menu"
						src="https://i.postimg.cc/fT5c5MhH/slide3.jpg"
						alt="photo"
					/>
					<div className="text-in-photo text-center text-fancy">
						salads
					</div>
				</SwiperSlide>
				<SwiperSlide className="img-fluid">
					<img
						className="rounded-4 mt-2 responsive-img-menu"
						src="https://i.postimg.cc/bwBQcLrk/slide4.jpg"
						alt="photo"
					/>
					<div className="text-in-photo text-center text-fancy">
						salads
					</div>
				</SwiperSlide>
				<SwiperSlide className="img-fluid">
					<img
						className="rounded-4 mt-2 responsive-img-menu"
						src="https://i.postimg.cc/90YG6hwQ/slide1.jpg"
						alt="photo"
					/>
					<div className="text-in-photo text-center text-fancy">
						salads
					</div>
				</SwiperSlide>
				<SwiperSlide className="img-fluid">
					<img
						className="rounded-4 mt-2 responsive-img-menu"
						src="https://i.postimg.cc/8z5h0xpT/slide2.jpg"
						alt="photo"
					/>
					<div className="text-in-photo text-center text-fancy">
						salads
					</div>
				</SwiperSlide>
				<SwiperSlide className="img-fluid">
					<img
						className="rounded-4 mt-2 responsive-img-menu"
						src="https://i.postimg.cc/fT5c5MhH/slide3.jpg"
						alt="photo"
					/>
					<div className="text-in-photo text-center text-fancy">
						salads
					</div>
				</SwiperSlide>
				<SwiperSlide className="img-fluid">
					<img
						className="rounded-4 mt-2 responsive-img-menu"
						src="https://i.postimg.cc/bwBQcLrk/slide4.jpg"
						alt="photo"
					/>
					<div className="text-in-photo text-center text-fancy">
						salads
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default MenuPhoto;
