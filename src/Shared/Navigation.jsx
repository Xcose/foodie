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

const Navigation = ({ home }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isDark, setIsDark] = useState(false);
	const classText = "font-weight-bold text-white";

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
			color={isDark || !home ? "secondary" : "transparent"}
			light
			expand="md"
			fixed="top"
			className="px-5 "
		>
			<Link to="/">
				<NavbarBrand className="font-weight-bold d-flex align-items-center d-none d-lg-flex text-white">
					{/* <img
							src={Logo}
							alt="SBWL Data Deals"
							style={{ width: "8%" }}
							className="m-0"
						/> */}
					<b>Luchume</b>
				</NavbarBrand>
			</Link>
			<NavbarToggler className="text-white" onClick={toggle} color="light" />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="ml-auto" navbar>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret className={classText}>
							About
						</DropdownToggle>
						<DropdownMenu right className="bg-secondary">
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
					</UncontrolledDropdown>
					{/* <HashLink to="/#about">
						<NavItem>
							<NavLink className={classText}>About</NavLink>
						</NavItem>
					</HashLink> */}
					{/* <HashLink to="/#team">
						<NavItem>
							<NavLink className={classText}>Team</NavLink>
						</NavItem>
					</HashLink> */}
					{/* <HashLink to="/#service">
						<NavItem>
							<NavLink className={classText}>Services</NavLink>
						</NavItem>
					</HashLink> */}
					<HashLink to="/gallery/#gallery">
						<NavItem>
							<NavLink className={classText}>Gallery</NavLink>
						</NavItem>
					</HashLink>
					<HashLink to="/contact">
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
