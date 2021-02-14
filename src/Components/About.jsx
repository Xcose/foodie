import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import John from "../Images/happy.jpg";

const About = () => {
	return (
		<div className="p-5 text-center my-5" id="about">
			{/* <p class="display-4 text-center my-5 font-weight-bold title">
				<text className="px-lg-5">Who are we?</text>
			</p> */}
			<div className="lead my-5">
				<Row className="justify-content-around my-5">
					<Col sm="12" lg="8" className="px-lg-5 text-left">
						<p className="h2 mt-5">Let's help you make those memories</p>
						<p className="text-sm-justify text-muted">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Reiciendis dolores corporis modi, est illo nesciunt quod quo ullam
							delectus eos laudantium excepturi voluptas, facere asperiores
							consequuntur assumenda velit in mollitia?
						</p>
					</Col>
					<Col sm="12" lg="4" className="event-img">
						<img src={John} alt="" className="w-100" />
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default About;
