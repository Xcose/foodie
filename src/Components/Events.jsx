import React, { Component } from "react";
import John from "../Images/happy.jpg";
import { Row, Col } from "reactstrap";
import IMG from "../Images/10.jpg";

const Events = () => {
	return (
		<div className="py-5 text-center my-5" id="event">
			<p class="display-4 text-center my-5 font-weight-bold title">
				<text className="px-lg-5">WHAT'S THE OCCASSION?</text>
			</p>
			<div className="my-5">
				<div className="text-center my-5 text-muted">
					<Row className="justify-content-center my-5">
						<Col sm="12" lg="4">
							<ul className="list">
								<li className="h2">Corporate Catering</li>
								<li className="h2">Private Catering</li>
								<li className="h2">Weddings</li>
								<li className="h2">Birthdays</li>
								<li className="h2">Anniversaries</li>
								<li className="h2">Picnics</li>
							</ul>
						</Col>
						<Col sm="12" lg="4">
							<ul className="list">
								<li className="h2">Platters</li>
								<li className="h2">Cakes</li>
								<li className="h2">Dessert Boxes</li>
								<li className="h2">Packed Meals</li>
								<li className="h2">Buffet</li>
							</ul>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
};

export default Events;
