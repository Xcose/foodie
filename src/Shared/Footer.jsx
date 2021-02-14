import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
	return (
		<footer className="page-footer w-100 font-small bg-secondary text-white">
			<div className="row pb-4 m-0">
				<div className="col-12 col-lg-4">
					<div className="mt-4 text-center">
						<a href="mailto:info@sbwldata.co.za" className=" text-white mx-5">
							<FontAwesomeIcon icon={faEnvelope} />
						</a>

						<abbr title="076 661 3279" className="mx-5">
							<FontAwesomeIcon icon={faMobile} />
						</abbr>

						<a
							href="https://www.facebook.com/Sbwl-Data-100692328403977/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white mx-5"
						>
							<FontAwesomeIcon icon={faFacebook} />
						</a>
					</div>
				</div>
				<div className="col-12 col-lg-4 m-0">
					<div className="mt-4 text-center">
						<Link to="/gallery">
							<b className="font-weight-bold text-white mx-2 border-right pr-3">
								Gallery
							</b>
						</Link>
						<Link to="/contact">
							<b className="font-weight-bold text-white mx-2 pr-3">
								Contact Us
							</b>
						</Link>
					</div>
				</div>
				<div className="col-12 col-lg-4 text-center">
					<div className="font-weight-bold mt-4 text-center">
						Foodie © 2021 Copyright
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
