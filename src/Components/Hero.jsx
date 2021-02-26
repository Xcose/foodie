import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import BGI from "../Images/bakery.jpg";
import Navigation from "../Shared/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

const Hero = () => {
	return (
		<Jumbotron
			style={{
				height: "100vh",
				background: `url(${BGI})  no-repeat center center fixed`,
				backgroundSize: "cover",
			}}
			className="w-100 rounded-0 p-0 bg-dark"
			id="home"
		>
			<div className="text-center h-100 hero-content w-100">
				<div className="h-100 d-flex align-items-center justify-content-center w-100">
					<div className="w-100">
						<p className="subHeading h3 text-white mb-5 p-0">
							For the love of food
						</p>
						<p className="display-1 main-heading font-weight-bold px-0">
							LUCHUME CATERERS
						</p>
						<Link to="/#about">
							<Button
								style={{ position: "absolute", bottom: "10%", left: "50%" }}
								color="light"
								className="text-center rounded-circle mt-2 mt-lg-5"
								outline
							>
								<FontAwesomeIcon icon={faArrowDown} />
							</Button>
						</Link>
						{/* <h1 className="display-1 main-heading font-weight-bold px-0">
							LUCHUME CATERERS
						</h1> */}
						{/* <fieldset className="p-5 w-100">
							<legend className="subHeading h3 text-white m-0 p-0">
								For the love of food
							</legend>
							<h1 className="display-1 main-heading font-weight-bold px-0">
								LUCHUME CATERERS
							</h1>
							<Link to="/#about">
								<Button
									style={{ position: "absolute", bottom: "10%", left: "50%" }}
									color="light"
									className="text-center rounded-circle mt-2 mt-lg-5"
									outline
								>
									<FontAwesomeIcon icon={faArrowDown} />
								</Button>
							</Link>
						</fieldset> */}
					</div>
				</div>
			</div>
		</Jumbotron>
	);
};

export default Hero;
