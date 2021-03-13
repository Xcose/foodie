import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Gallery from "./Pages/GallaryPage";
import Contact from "./Pages/ContactUs";
import Footer from "./Shared/Footer";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import ScrollUpButton from "./Shared/ScrollUp";
import { Helmet } from "react-helmet";
import Logo from "./Images/Lchume_logo.png";

function App() {
	return (
		<>
			<Router>
				<div className="App h-100">
					<Helmet>
						<link rel="icon" href={Logo} />
					</Helmet>
					<ReactNotification />
					<div className="container-fluid p-0">
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/gallery" exact component={Gallery} />
							<Route path="/contact" exact component={Contact} />
						</Switch>
					</div>
					<Footer />
				</div>
			</Router>
			<ScrollUpButton />
		</>
	);
}

export default App;
