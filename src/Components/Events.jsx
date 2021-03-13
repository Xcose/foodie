import React, { Component } from "react";
import John from "../Images/happy.jpg";
import { Row, Col } from "reactstrap";
import IMG from "../Images/10.jpg";

const Events = () => {
	return (
		<div className="py-5 text-center my-5" id="event">
			<p class="display-4 text-center my-5 font-weight-bold title">
				<text className="px-lg-5">WHAT'S THE EVENT?</text>
			</p>
			<div className="my-5">
				<div className="text-center my-5 text-muted">
					<Row className="justify-content-center my-5 d-none d-lg-flex">
						<Col sm="12" lg="4">
							<ul className="list">
								<li className="h3">Corporate Catering</li>
								<li className="h3">Private Catering</li>
								<li className="h3">Weddings</li>
								<li className="h3">Birthdays</li>
								<li className="h3">Anniversaries</li>
								<li className="h3">Picnics</li>
							</ul>
						</Col>
						<Col sm="12" lg="4">
							<ul className="list">
								<li className="h3">Platters</li>
								<li className="h3">Cakes</li>
								<li className="h3">Dessert Boxes</li>
								<li className="h3">Packed Meals</li>
								<li className="h3">Buffet</li>
							</ul>
						</Col>
					</Row>
					<div className="text-center d-block d-lg-none">
						<ul className="list pl-0">
							<li className="h3">Corporate Catering</li>
							<li className="h3">Private Catering</li>
							<li className="h3">Weddings</li>
							<li className="h3">Birthdays</li>
							<li className="h3">Anniversaries</li>
							<li className="h3">Picnics</li>
							<li className="h3">Platters</li>
							<li className="h3">Cakes</li>
							<li className="h3">Dessert Boxes</li>
							<li className="h3">Packed Meals</li>
							<li className="h3">Buffet</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;
