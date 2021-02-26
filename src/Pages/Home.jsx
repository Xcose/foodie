import React from "react";
import About from "../Components/About";
import Hero from "../Components/Hero";
import Teams from "../Components/Teams";
import Events from "../Components/Events";
import Navigation from "../Shared/Navigation";
import ContactUs from "../Components/ContactUs";

const Home = () => {
	return (
		<>
			<Navigation home={true} />
			<Hero />
			<About />
			<Teams />
			<Events />
			<ContactUs />
		</>
	);
};

export default Home;
