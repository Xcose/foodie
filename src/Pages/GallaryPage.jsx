import React, { Component } from "react";
import Gallery from "../Components/Gallery";
import Testimonials from "../Components/Testimonials";
import Navigation from "../Shared/Navigation";
import BGI from "../Images/businessman.jpg";

const GallaryPage = () => {
	return (
		<>
			<Navigation />
			<div className="mt-5 pt-2">
				<div
					style={{
						height: "450px",
						background: `url(${BGI})  no-repeat center center fixed`,
						backgroundSize: "cover",
					}}
					className="w-100 pt-5"
				></div>
				<Gallery />
				<Testimonials />
			</div>
		</>
	);
};

export default GallaryPage;
