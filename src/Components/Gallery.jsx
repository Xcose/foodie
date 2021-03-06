import React, { Component } from "react";
import {
	Row,
	Col,
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
import img26 from "../Images/26.jpg";
import bg from "../Images/affair.jpg";
import logo from "../Images/Lchume_logo.png";

const Gallery = () => {
	return (
		<div
			className="w-100 bg-special py-0 py-lg-5"
			id="gallery"
			style={{
				background: `url(${bg})  no-repeat center center fixed`,
				backgroundSize: "cover",
				backgroundBlendMode: "overlay",
			}}
		>
			<Row className="justify-content-center">
				<Col sm="12" lg="11" className="outline bg-light shadow-lg">
					<div className="my-5 py-5">
						<div className="text-center custom-logo">
							<small>
								<img src={logo} style={{ width: "50px" }} alt="logo" />
							</small>
						</div>
						<p class="display-4 text-center font-weight-bold title">
							<text className="px-lg-5 bg-light">GALLERY</text>
						</p>
						<p className="text-center h6 sub-title">
							Have a look at our magic?
						</p>
					</div>
					<div className="grid w-100 p-3">
						<div>
							<img src={img2} alt="" loading="lazy" className="w-100 rounded" />
						</div>
						<div>
							<img src={img3} alt="" loading="lazy" className="w-100 rounded" />
						</div>
						<div>
							<img src={img4} alt="" loading="lazy" className="w-100 rounded" />
						</div>
						<div>
							<img src={img5} alt="" loading="lazy" className="w-100 rounded" />
						</div>
						<div>
							<img src={img6} alt="" loading="lazy" className="w-100 rounded" />
						</div>
						<div>
							<img src={img7} alt="" loading="lazy" className="w-100 rounded" />
						</div>
						<div>
							<img src={img8} alt="" loading="lazy" className="w-100 rounded" />
						</div>
						<div>
							<img src={img9} alt="" loading="lazy" className="w-100 rounded" />
						</div>
						<div>
							<img
								src={img10}
								alt=""
								loading="lazy"
								className="w-100 rounded"
							/>
						</div>
						<div>
							<img
								src={img11}
								alt=""
								loading="lazy"
								className="w-100 rounded"
							/>
						</div>
						<div>
							<img
								src={img12}
								alt=""
								loading="lazy"
								className="w-100 rounded"
							/>
						</div>
						<div>
							<img
								src={img13}
								alt=""
								loading="lazy"
								className="w-100 rounded"
							/>
						</div>
						<div>
							<img
								src={img14}
								alt=""
								loading="lazy"
								className="w-100 rounded"
							/>
						</div>
						<div>
							<img
								src={img15}
								alt=""
								loading="lazy"
								className="w-100 rounded"
							/>
						</div>
						<div>
							<img
								src={img16}
								alt=""
								loading="lazy"
								className="w-100 rounded"
							/>
						</div>
						<div>
							<img
								src={img17}
								alt=""
								loading="lazy"
								className="w-100 rounded"
							/>
						</div>
						<div>
							<img
								src={img18}
								alt=""
								loading="lazy"
								className="w-100 rounded"
							/>
						</div>
						<div>
							<img
								src={img19}
								alt=""
								loading="lazy"
								className="w-100 rounded"
							/>
						</div>
						<div>
							<img
								src={img20}
								alt=""
								loading="lazy"
								className="w-100 rounded"
							/>
						</div>
						<div>
							<img
								src={img21}
								alt=""
								loading="lazy"
								className="w-100 rounded"
							/>
						</div>
						<div>
							<img
								src={img22}
								alt=""
								loading="lazy"
								className="w-100 rounded"
							/>
						</div>
						<div>
							<img
								src={img23}
								alt=""
								loading="lazy"
								className="w-100 rounded"
							/>
						</div>
						<div>
							<img
								src={img24}
								alt=""
								loading="lazy"
								className="w-100 rounded"
							/>
						</div>
						<div>
							<img
								src={img25}
								alt=""
								loading="lazy"
								className="w-100 rounded"
							/>
						</div>
						<div>
							<img
								src={img26}
								alt=""
								loading="lazy"
								className="w-100 rounded"
							/>
						</div>
						<div className="last">
							<img src={img1} alt="" loading="lazy" className="w-100 rounded" />
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Gallery;
