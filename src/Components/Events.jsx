import React, { Component } from "react";
import John from "../Images/happy.jpg";
import { Row, Col } from "reactstrap";
import IMG from "../Images/Lchume_logo.png";
import bg from "../Images/affair.jpg";

const Events = () => {
	return (
		<div
			className="py-5 text-center my-5  bg-special"
			style={{
				background: `url(${bg})  no-repeat center center`,
				backgroundSize: "cover",
				backgroundBlendMode: "overlay",
			}}
			id="event"
		>
			<Row className="my-5 justify-content-center">
				<Col sm="10" lg="6" className="outline bg-light shadow-lg pb-5">
					<div className="mt-5 mb-4 custom-logo">
						<small>
							<img src={IMG} style={{ width: "50px" }} alt="logo" />
						</small>
					</div>
					<p class="display-4 text-center font-weight-bold">
						<text className="px-lg-5">WHAT'S THE EVENT?</text>
						<br />
					</p>
					<Row className="justify-content-center my-5 d-none d-lg-flex">
						<Col lg="6" className="border-main">
							<ul className="list p-0">
								<li className="h4">Corporate Catering</li>
								<li className="h4">Private Catering</li>
								<li className="h4">Weddings</li>
								<li className="h4">Birthdays</li>
								<li className="h4">Anniversaries</li>
								<li className="h4">Picnics</li>
							</ul>
						</Col>
						<Col lg="6">
							<ul className="list p-0">
								<li className="h4">Platters</li>
								<li className="h4">Cakes</li>
								<li className="h4">Dessert Boxes</li>
								<li className="h4">Packed Meals</li>
								<li className="h4">Buffet</li>
							</ul>
						</Col>
					</Row>
					<Row className="text-center d-block d-lg-none">
						<Col sm="8">
							<ul className="list pl-0">
								<li className="h4">Corporate Catering</li>
								<li className="h4">Private Catering</li>
								<li className="h4">Weddings</li>
								<li className="h4">Birthdays</li>
								<li className="h4">Anniversaries</li>
								<li className="h4">Picnics</li>
								<li className="h4">Platters</li>
								<li className="h4">Cakes</li>
								<li className="h4">Dessert Boxes</li>
								<li className="h4">Packed Meals</li>
								<li className="h4">Buffet</li>
							</ul>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default Events;
