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
		>
			<div className="text-center h-100 w-100 hero-content">
				<Navigation home={true} />
				<div className="h-100 d-flex align-items-center justify-content-center justify-content-lg-center px-5 mx-5">
					<div className="">
						<fieldset className="p-5">
							<legend className="subHeading text-white m-0 p-0">
								For the love of food
							</legend>
							<h1 className="display-1 text-white heading font-weight-bold px-0">
								Luchume Caterers
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
						</fieldset>
					</div>
				</div>
			</div>
		</Jumbotron>
	);
};

export default Hero;
