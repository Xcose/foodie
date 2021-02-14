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
	CardImgOverlay,
} from "reactstrap";
import Slider from "react-slick";
import John from "../Images/happy.jpg";

const Gallery = () => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
	};

	const settingsSmall = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
	};

	return (
		<div className="p-5 text-center" id="gallery">
			<p class="display-4 text-center my-5 font-weight-bold title">
				<text className="px-lg-5">A peek of the menu</text>
			</p>
			<div class="d-none d-lg-block">
				<Slider {...settings}>
					<div className="out">
						<Card className="border-0">
							<CardImgOverlay src={John} />
							<CardBody>
								<CardTitle className="font-weight-bold">Jane Doe</CardTitle>
								<CardSubtitle className="text-muted">Chef</CardSubtitle>
							</CardBody>
						</Card>
					</div>
					<div className="out">
						<Card className="border-0">
							<CardBody>
								<CardTitle className="font-weight-bold">Jane Doe</CardTitle>
								<CardSubtitle className="text-muted">Chef</CardSubtitle>
							</CardBody>
						</Card>
					</div>
					<div className="out">
						<Card className="border-0">
							<CardBody>
								<CardTitle className="font-weight-bold">Jane Doe</CardTitle>
								<CardSubtitle className="text-muted">Chef</CardSubtitle>
							</CardBody>
						</Card>
					</div>
					<div className="out">
						<Card className="border-0">
							<CardBody>
								<CardTitle className="font-weight-bold">Jane Doe</CardTitle>
								<CardSubtitle className="text-muted">Chef</CardSubtitle>
							</CardBody>
						</Card>
					</div>
				</Slider>
			</div>
			<div class="d-lg-none">
				<Slider {...settingsSmall}>
					<div className="out">
						<Card className="border-0">
							<CardImgOverlay src={John} />
							<CardBody>
								<CardTitle className="font-weight-bold">Jane Doe</CardTitle>
								<CardSubtitle className="text-muted">Chef</CardSubtitle>
							</CardBody>
						</Card>
					</div>
					<div className="out">
						<Card className="border-0">
							<CardBody>
								<CardTitle className="font-weight-bold">Jane Doe</CardTitle>
								<CardSubtitle className="text-muted">Chef</CardSubtitle>
							</CardBody>
						</Card>
					</div>
					<div className="out">
						<Card className="border-0">
							<CardBody>
								<CardTitle className="font-weight-bold">Jane Doe</CardTitle>
								<CardSubtitle className="text-muted">Chef</CardSubtitle>
							</CardBody>
						</Card>
					</div>
					<div className="out">
						<Card className="border-0">
							<CardBody>
								<CardTitle className="font-weight-bold">Jane Doe</CardTitle>
								<CardSubtitle className="text-muted">Chef</CardSubtitle>
							</CardBody>
						</Card>
					</div>
				</Slider>
			</div>
			<CardDeck className="row justify-content-around"></CardDeck>
		</div>
	);
};

export default Gallery;
