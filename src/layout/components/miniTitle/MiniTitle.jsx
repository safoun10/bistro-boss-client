import React from "react";
import "./MiniTitle.css";

const MiniTitle = ({ time, text }) => {
	return (
		<div className="w-50 mini-title-container mx-auto">
			<div className="text-center text-gold d-flex justify-content-center align-items-center">
				<span className="text-responsive">-------------</span>
				<span className="px-2 fst-italic py-3 fs-5">{time}</span>
				<span className="text-responsive">-------------</span>
			</div>
			<div className="text-title text-center text-uppercase display-4 py-3 text-fancy">
				{text}
			</div>
		</div>
	);
};

export default MiniTitle;
