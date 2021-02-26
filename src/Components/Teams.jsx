import React, { Component } from "react";
import {
	Card,
	Button,
	CardImg,
	CardTitle,
	CardText,
	CardDeck,
	CardSubtitle,
	CardBody,
	Media,
} from "reactstrap";
import John from "../Images/happy.jpg";
import Jane from "../Images/woman.jpg";
import BGI from "../Images/businessman.jpg";

const Teams = () => {
	return (
		<div
			className="m-5 text-center text-white d-flex justify-content-center align-items-center"
			id="team"
			style={{
				minHeight: "500px",
				background: `url(${BGI})  no-repeat center top`,
				backgroundSize: "cover",
			}}
		>
			<div className="h-100 w-100">
				<p class="display-4 text-center my-5 font-weight-bold">
					<text className="px-lg-5">Meet the team behind all the magic</text>
				</p>
			</div>

			{/* <CardDeck className="row justify-content-around">
				<Card className="col-lg-4 border-0">
					<CardImg src={John} />
					<CardBody>
						<CardTitle className="font-weight-bold">Jane Doe</CardTitle>
						<CardSubtitle className="text-muted">Chef</CardSubtitle>
					</CardBody>
				</Card>
				<Card className="col-lg-4 border-0">
					<CardImg src={Jane} />
					<CardBody>
						<CardTitle className="font-weight-bold">Jane Doe</CardTitle>
						<CardSubtitle className="text-muted">Chef</CardSubtitle>
					</CardBody>
				</Card>
				<Card className="col-lg-4 border-0">
					<CardImg src={John} />
					<CardBody>
						<CardTitle className="font-weight-bold">Jane Doe</CardTitle>
						<CardSubtitle className="text-muted">Chef</CardSubtitle>
					</CardBody>
				</Card>
			</CardDeck> */}
		</div>
	);
};

export default Teams;
