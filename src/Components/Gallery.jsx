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
import img1 from "../Images/1.jpg";
import img2 from "../Images/2.jpg";
import img3 from "../Images/3.jpg";
import img4 from "../Images/4.jpg";
import img5 from "../Images/5.jpg";
import img6 from "../Images/6.jpg";
import img7 from "../Images/7.jpg";
import img8 from "../Images/8.jpg";
import img9 from "../Images/9.jpg";
import img10 from "../Images/10.jpg";
import img11 from "../Images/11.jpg";
import img12 from "../Images/12.png";
import img13 from "../Images/13.png";
import img14 from "../Images/14.jpg";
import img15 from "../Images/15.jpg";
import img16 from "../Images/16.jpg";
import img17 from "../Images/17.jpg";
import img18 from "../Images/18.jpg";
import img19 from "../Images/19.jpg";
import img20 from "../Images/20.jpg";
import img21 from "../Images/21.jpg";
import img22 from "../Images/22.jpg";
import img23 from "../Images/23.jpg";
import img24 from "../Images/24.jpg";
import img25 from "../Images/25.jpg";
import img26 from "../Images/16.jpg";

const Gallery = () => {
	return (
		<div className="w-100">
			<div className="my-5 py-5">
				<p className="text-center h3 text-muted">Gallery</p>
				<p class="display-4 text-center font-weight-bold title">
					<text className="px-lg-5">Have a look at our magic?</text>
				</p>
			</div>
			<div className="grid w-100" id="gallery">
				<div>
					<img src={img2} alt="" className="w-100" />
				</div>
				<div>
					<img src={img3} alt="" className="w-100" />
				</div>
				<div>
					<img src={img4} alt="" className="w-100" />
				</div>
				<div>
					<img src={img5} alt="" className="w-100" />
				</div>
				<div>
					<img src={img6} alt="" className="w-100" />
				</div>
				<div>
					<img src={img7} alt="" className="w-100" />
				</div>
				<div>
					<img src={img8} alt="" className="w-100" />
				</div>
				<div>
					<img src={img9} alt="" className="w-100" />
				</div>
				<div>
					<img src={img10} alt="" className="w-100" />
				</div>
				<div>
					<img src={img11} alt="" className="w-100" />
				</div>
				<div>
					<img src={img12} alt="" className="w-100" />
				</div>
				<div>
					<img src={img13} alt="" className="w-100" />
				</div>
				<div>
					<img src={img14} alt="" className="w-100" />
				</div>
				<div>
					<img src={img15} alt="" className="w-100" />
				</div>
				<div>
					<img src={img16} alt="" className="w-100" />
				</div>
				<div>
					<img src={img17} alt="" className="w-100" />
				</div>
				<div>
					<img src={img18} alt="" className="w-100" />
				</div>
				<div>
					<img src={img19} alt="" className="w-100" />
				</div>
				<div>
					<img src={img20} alt="" className="w-100" />
				</div>
				<div>
					<img src={img21} alt="" className="w-100" />
				</div>
				<div>
					<img src={img22} alt="" className="w-100" />
				</div>
				<div>
					<img src={img23} alt="" className="w-100" />
				</div>
				<div>
					<img src={img24} alt="" className="w-100" />
				</div>
				<div>
					<img src={img25} alt="" className="w-100" />
				</div>
				<div>
					<img src={img26} alt="" className="w-100" />
				</div>
				<div className="last">
					<img src={img1} alt="" className="w-100" />
				</div>
			</div>
		</div>
	);
};

export default Gallery;
