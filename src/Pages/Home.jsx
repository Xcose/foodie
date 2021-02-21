import React from "react";
import About from "../Components/About";
import Hero from "../Components/Hero";
import Teams from "../Components/Teams";
import Events from "../Components/Events";
import Navigation from "../Shared/Navigation";

const Home = () => {
	return (
		<>
			<Navigation home={true} />
			<Hero />
			<About />
			<Teams />
			<Events />
		</>
	);
};

export default Home;
