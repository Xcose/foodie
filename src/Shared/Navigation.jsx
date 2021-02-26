import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../Images/Lchume_logo.png";

const Navigation = ({ home }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isDark, setIsDark] = useState(false);
	const classText = `font-weight-bold ${home && !isDark ? "text-white" : ""}`;

	const toggle = () => setIsOpen(!isOpen);

	const changeNavbarBackground = () => {
		if (window.scrollY >= window.outerHeight - 200) {
			setIsDark(true);
		} else {
			setIsDark(false);
		}
	};

	window.addEventListener("scroll", changeNavbarBackground);

	return (
		<Navbar
			color={isDark || !home ? "light" : "transparent"}
			light
			expand="lg"
			fixed="top"
			className="w-100 px-lg-5"
		>
			<Link to="/">
				<NavbarBrand
					className={`font-weight-bold d-flex align-items-center d-none d-lg-flex ${
						home && !isDark ? "text-white" : ""
					}`}
				>
					<img
						src={Logo}
						alt="Luchume Caterers"
						style={{ width: "10%" }}
						className="mr-2"
					/>
					<b className="d-none d-lg-block">Luchume</b>
				</NavbarBrand>
			</Link>
			<NavbarToggler className="text-white" onClick={toggle} color="light" />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="ml-auto text-center" navbar>
					<HashLink to="/#home">
						<NavItem>
							<NavLink className={classText}>Home</NavLink>
						</NavItem>
					</HashLink>
					<HashLink to="/#about">
						<NavItem>
							<NavLink className={classText}>About</NavLink>
						</NavItem>
					</HashLink>
					{/* <UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret className={classText}>
							About
						</DropdownToggle>
						<DropdownMenu
							right
							className={`text-center border-0 ${
								isDark || !home ? "bg-light" : "bg-transparent"
							}`}
						>
							<HashLink to="/#about">
								<DropdownItem className={classText}>About</DropdownItem>
							</HashLink>
							<HashLink to="/#team">
								<DropdownItem className={classText}>Team</DropdownItem>
							</HashLink>
							<HashLink to="/#service">
								<DropdownItem className={classText}>Services</DropdownItem>
							</HashLink>
						</DropdownMenu>
					</UncontrolledDropdown> */}

					<HashLink to="/#team">
						<NavItem>
							<NavLink className={classText}>Team</NavLink>
						</NavItem>
					</HashLink>
					<HashLink to="/#event">
						<NavItem>
							<NavLink className={classText}>Events</NavLink>
						</NavItem>
					</HashLink>
					<HashLink to="/gallery/#gallery">
						<NavItem>
							<NavLink className={classText}>Gallery</NavLink>
						</NavItem>
					</HashLink>
					<HashLink to="/#contact">
						<NavItem>
							<NavLink className={classText}>Contact Us</NavLink>
						</NavItem>
					</HashLink>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Navigation;
