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
				<p className="h1 my-5 my-lg-4 title-2 text-left mx-lg-5">
					Let's help you make those memories.
				</p>
				<Row className="justify-content-around my-5">
					<Col sm="12" lg="8" className="px-lg-5 px-0 text-left">
						<p className="text-muted mt-5 mt-lg-0">
							Luchume caterers is a proudly 100% black South African owned and
							run company. It was found in August 2020 by a couple, named,
							Lungelwa Makananda and Ntembeko Monde. This was after Lungelwa,
							who is a qualified chef got retrenched by one of the top hotels in
							Mosselbay due to the corona virus Pandemic.
						</p>
						<p className="text-muted mt-5 mt-lg-0">
							Lungelwa, a black South African female. Born and bred in Komga, is
							a Port Elizabeth College graduate. She was left with nothing but
							the hospitality skills she'd acquired. Instead of allowing her to
							wallow in her sorrows, Ntembeko encouraged her, saying "ukonakala
							kwebisi kukulunga kwamasi" which directly translates to the
							spoiling of milk leads to getting Full cream mass.. This
							encouraged her to think outside the box and decide to use her
							skills to make something of her own and then immediately after
							that, the business was registered. It is run in the kitchen of
							their lovely family home in the town of Mossel Bay.
						</p>
						<p className="text-muted mt-5 mt-lg-0">
							We are a small company which aims to help our clients create
							beautiful memories through the art of food and pastry.
						</p>
						<p className="text-muted mt-5 mt-lg-0">
							Our team believes in delivering excellent service in all
							occassions. We offer a high quality service of catering that you
							can fully trust us to make your event a memorable one for you,
							your family and your loved ones. As the saying goes "A family that
							eats together, stays together!"
						</p>
					</Col>
					<Col sm="12" lg="4" className="px-0">
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
