import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import ReactPlayer from "react-player";
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
						<p className="h1 my-5 my-lg-4 title-2">
							Let's help you make those memories.
						</p>
						<p className="text-muted mt-5 mt-lg-0">
							Luchume caterers is a proudly South African company 100% black
							owned and run. It was founded in August 2020 by a couple Lungelwa
							Makananda and Ntembeko Monde, this was after Lungelwa who is a
							Qualified Chef got Retrenched by one of the top Hotels due to the
							Corona virus Pandemic.
						</p>
						<p className="text-muted mt-5 mt-lg-0">
							Lungelwa who is a Port Elizabeth College graduate was left with
							nothing but the hospitality skills and instead of doing nothing
							Ntembeko encouraged her that "ukonakala kwebisi kukulunga kwamasi"
							emmediately the business was registered and is run in the kitchen
							of their home in the Town of Mossel Bay.
						</p>
						<p className="text-muted mt-5 mt-lg-0">
							We are a corporate company which aims to help our clients create
							beautiful memories through the Art of food and pastry
						</p>
						<p className="text-muted mt-5 mt-lg-0">
							Our team believe in delivering excellence in all occassions. We
							offer a high quality of catering You can trust us with your most
							important day And we will surely make it a specialy one for you
							and your family
						</p>
					</Col>
					<Col sm="12" lg="4">
						<iframe
							src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F582147962468774%2Fvideos%2F2934658313309125%2F&show_text=false&width=267"
							width="267"
							height="476"
							style={{
								border: "none",
								overflow: "hidden",
							}}
							scrolling="no"
							frameborder="0"
							allowfullscreen="false"
							allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
							allowFullScreen="false"
						></iframe>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default About;
