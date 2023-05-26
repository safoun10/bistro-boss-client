import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css"
import LazyLoad from 'react-lazy-load';

const Banner = () => {
    return (
		<div>
			<LazyLoad>
				<Carousel
					className=""
					autoPlay="true"
					infiniteLoop="true"
					thumbWidth={200}
				>
					<div>
						<img
							className="img-banner"
							src="https://i.postimg.cc/fT9W3YXn/01.jpg"
						/>
					</div>
					<div>
						<img
							className="img-banner"
							src="https://i.postimg.cc/W3zTsZjy/02.jpg"
						/>
					</div>
					<div>
						<img
							className="img-banner"
							src="https://i.postimg.cc/qvHJ2gXt/03.png"
						/>
					</div>
					<div>
						<img
							className="img-banner"
							src="https://i.postimg.cc/nL0n8287/04.jpg"
						/>
					</div>
					<div>
						<img
							className="img-banner"
							src="https://i.postimg.cc/q7kpZYF4/05.png"
						/>
					</div>
					<div>
						<img
							className="img-banner"
							src="https://i.postimg.cc/Z5PTHZVw/06.png"
						/>
					</div>
				</Carousel>
			</LazyLoad>
		</div>
	);
};

export default Banner;