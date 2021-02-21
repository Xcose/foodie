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
						<p className="h2 mt-5">Let's help you make those memories</p>
						<p className="text-sm-justify text-muted">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Reiciendis dolores corporis modi, est illo nesciunt quod quo ullam
							delectus eos laudantium excepturi voluptas, facere asperiores
							consequuntur assumenda velit in mollitia?
						</p>
					</Col>
					<Col sm="12" lg="4">
						{/* <ReactPlayer
							width="267"
							height="476"
							url="https://www.facebook.com/582147962468774/videos/2934658313309125"
							controls
						/> */}
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
