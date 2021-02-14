import React, { Component } from "react";
import Gallery from "../Components/Gallery";
import Testimonials from "../Components/Testimonials";
import Navigation from "../Shared/Navigation";

const GallaryPage = () => {
	return (
		<>
			<Navigation />
			<Gallery />
			<Testimonials />
		</>
	);
};

export default GallaryPage;
