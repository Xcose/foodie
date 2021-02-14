import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import Contact from "../Components/ContactUs";
import Navigation from "../Shared/Navigation";
import BGI from "../Images/businessman.jpg";

const ContactUs = () => {
	return (
		<div>
			<Navigation home={false} />
			<div className="mt-5 pt-2">
				<div
					style={{
						height: "450px",
						background: `url(${BGI})  no-repeat center center fixed`,
						backgroundSize: "cover",
					}}
					className="w-100 pt-5"
				></div>
				<Contact />
			</div>
		</div>
	);
};

export default ContactUs;
