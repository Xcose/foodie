import React from "react";
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
import Slider from "react-slick";
import John from "../Images/happy.jpg";
import Jane from "../Images/woman.jpg";

function Testimonials() {
	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
	};

	const settingsSmall = {
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
	};

	return (
		<div className="p-5 text-center" id="testimonal">
			{/* <p class="display-4 text-center my-5 font-weight-bold title">
				<text className="px-lg-5">Who have we worked with?</text>
			</p> */}
			<div class="d-none d-lg-block">
				<Slider {...settings}>
					<div className="out">
						<Card className="my-5 m-lg-5 bg-transparent border-0">
							<CardBody>
								<CardText className="font-italic text-justify">
									<blockquote class="blockquote h5">
										<p class="mb-0">
											"Cras sit amet nibh libero, in gravida nulla. Nulla vel
											metus scelerisque ante sollicitudin commodo. Cras purus
											odio, vestibulum in vulputate at, tempus viverra turpis.
											Fusce condimentum nunc ac nisi vulputate fringilla. Donec
											lacinia congue felis in faucibus."
										</p>
										<footer class="blockquote-footer mt-2 text-center">
											Jane Doe
										</footer>
									</blockquote>
								</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="out">
						<Card className="my-5 m-lg-5 bg-transparent border-0">
							<CardBody>
								<CardText className="font-italic font-weight-light text-justify">
									<blockquote class="blockquote h5">
										<p class="mb-0">
											"Cras sit amet nibh libero, in gravida nulla. Nulla vel
											metus scelerisque ante sollicitudin commodo. Cras purus
											odio, vestibulum in vulputate at, tempus viverra turpis.
											Fusce condimentum nunc ac nisi vulputate fringilla. Donec
											lacinia congue felis in faucibus."
										</p>
										<footer class="blockquote-footer mt-2 text-center">
											Jane Doe
										</footer>
									</blockquote>
								</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="out">
						<Card className="my-5 m-lg-5 bg-transparent border-0">
							<CardBody>
								<CardText className="font-italic font-weight-light text-justify">
									<blockquote class="blockquote h5">
										<p class="mb-0">
											"Cras sit amet nibh libero, in gravida nulla. Nulla vel
											metus scelerisque ante sollicitudin commodo. Cras purus
											odio, vestibulum in vulputate at, tempus viverra turpis.
											Fusce condimentum nunc ac nisi vulputate fringilla. Donec
											lacinia congue felis in faucibus."
										</p>
										<footer class="blockquote-footer mt-2 text-center">
											Jane Doe
										</footer>
									</blockquote>
								</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="out">
						<Card className="my-5 m-lg-5 bg-transparent border-0">
							<CardBody>
								<CardText className="font-italic font-weight-light text-justify">
									<blockquote class="blockquote h5">
										<p class="mb-0">
											"Cras sit amet nibh libero, in gravida nulla. Nulla vel
											metus scelerisque ante sollicitudin commodo. Cras purus
											odio, vestibulum in vulputate at, tempus viverra turpis.
											Fusce condimentum nunc ac nisi vulputate fringilla. Donec
											lacinia congue felis in faucibus."
										</p>
										<footer class="blockquote-footer mt-2 text-center">
											Jane Doe
										</footer>
									</blockquote>
								</CardText>
							</CardBody>
						</Card>
					</div>
				</Slider>
			</div>
			<div class="d-lg-none">
				<Slider {...settingsSmall}>
					<div className="out">
						<Card className="my-5 m-lg-5 bg-transparent border-0">
							<CardBody>
								<CardText className="font-italic font-weight-light text-justify">
									<blockquote class="blockquote h5">
										<p class="mb-0">
											"Cras sit amet nibh libero, in gravida nulla. Nulla vel
											metus scelerisque ante sollicitudin commodo. Cras purus
											odio, vestibulum in vulputate at, tempus viverra turpis.
											Fusce condimentum nunc ac nisi vulputate fringilla. Donec
											lacinia congue felis in faucibus."
										</p>
										<footer class="blockquote-footer mt-2 text-center">
											Jane Doe
										</footer>
									</blockquote>
								</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="out">
						<Card className="my-5 m-lg-5 bg-transparent border-0">
							<CardBody>
								<CardText className="font-italic font-weight-light text-justify">
									<blockquote class="blockquote h5">
										<p class="mb-0">
											"Cras sit amet nibh libero, in gravida nulla. Nulla vel
											metus scelerisque ante sollicitudin commodo. Cras purus
											odio, vestibulum in vulputate at, tempus viverra turpis.
											Fusce condimentum nunc ac nisi vulputate fringilla. Donec
											lacinia congue felis in faucibus."
										</p>
										<footer class="blockquote-footer mt-2 text-center">
											Jane Doe
										</footer>
									</blockquote>
								</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="out">
						<Card className="my-5 m-lg-5 bg-transparent border-0">
							<CardBody>
								<CardText className="font-italic font-weight-light text-justify">
									<blockquote class="blockquote h5">
										<p class="mb-0">
											"Cras sit amet nibh libero, in gravida nulla. Nulla vel
											metus scelerisque ante sollicitudin commodo. Cras purus
											odio, vestibulum in vulputate at, tempus viverra turpis.
											Fusce condimentum nunc ac nisi vulputate fringilla. Donec
											lacinia congue felis in faucibus."
										</p>
										<footer class="blockquote-footer mt-2 text-center">
											Jane Doe
										</footer>
									</blockquote>
								</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="out">
						<Card className="my-5 m-lg-5 bg-transparent border-0">
							<CardBody>
								<CardText className="font-italic font-weight-light text-justify">
									<blockquote class="blockquote h5">
										<p class="mb-0">
											"Cras sit amet nibh libero, in gravida nulla. Nulla vel
											metus scelerisque ante sollicitudin commodo. Cras purus
											odio, vestibulum in vulputate at, tempus viverra turpis.
											Fusce condimentum nunc ac nisi vulputate fringilla. Donec
											lacinia congue felis in faucibus."
										</p>
										<footer class="blockquote-footer mt-2 text-center">
											Jane Doe
										</footer>
									</blockquote>
								</CardText>
							</CardBody>
						</Card>
					</div>
				</Slider>
			</div>
		</div>
	);
}

export default Testimonials;
