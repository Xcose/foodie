import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
	return (
		<footer className="page-footer w-100 font-small h5 text-secondary bg-light">
			<div className="row pb-4 m-0">
				<div className="col-12 col-lg-4">
					<div className="mt-4 text-center">
						<a
							href="mailto:ntembekomonde@gmail.com"
							className="mx-5 text-secondary"
						>
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
						<a href="tel:073 694 3166" className="mx-5 text-secondary">
							<FontAwesomeIcon icon={faMobile} />
						</a>
						{/* <abbr title="073 694 3166" className="mx-5">
							<FontAwesomeIcon icon={faMobile} />
						</abbr> */}

						<a
							href="https://www.facebook.com/Luchume-caterers-582147962468774"
							target="_blank"
							rel="noopener noreferrer"
							className="mx-5 text-secondary"
						>
							<FontAwesomeIcon icon={faFacebook} />
						</a>
					</div>
				</div>
				<div className="col-12 col-lg-4 m-0">
					<div className="mt-4 text-center">
						<Link to="/gallery" className="text-decoration-none">
							<b className="font-weight-bold text-secondary pr-3">Gallery</b>
						</Link>
						<Link to="/contact" className="text-decoration-none">
							<b className="font-weight-bold text-secondary pr-3">Contact Us</b>
						</Link>
					</div>
				</div>
				<div className="col-12 col-lg-4 text-center">
					<div className="font-weight-bold mt-4 text-center">
						Luchume © 2021 Copyright
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
