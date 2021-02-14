import React from "react";
import About from "../Components/About";
import Hero from "../Components/Hero";
import Testimonials from "../Components/Testimonials";
import ContactUs from "../Components/ContactUs";
import Teams from "../Components/Teams";
import Gallery from "../Components/Gallery";
import Events from "../Components/Events";

const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<Teams />
			<Events />
		</>
	);
};

export default Home;
