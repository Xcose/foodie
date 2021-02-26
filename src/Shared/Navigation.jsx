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
	const [activeTab, setActiveTab] = useState("home");
	const classText = `font-weight-bold ${home && !isDark ? "text-white" : ""}`;

	const toggle = () => setIsOpen(!isOpen);

	const RemoveActiveFromTab = () => {
		const tabs = document.getElementsByClassName("nav-link");

		tabs.forEach((tab) => {
			tab.classList.remove("active");
		});
	};

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
							<NavLink
								className={`${classText} ${activeTab == "home" && "active"}`}
								onClick={() => {
									setActiveTab("home");
								}}
							>
								Home
							</NavLink>
						</NavItem>
					</HashLink>
					<HashLink to="/#about">
						<NavItem>
							<NavLink
								className={`${classText} ${activeTab == "about" && "active"}`}
								onClick={() => {
									setActiveTab("about");
								}}
							>
								About
							</NavLink>
						</NavItem>
					</HashLink>
					<HashLink to="/#team">
						<NavItem>
							<NavLink
								className={`${classText} ${activeTab == "team" && "active"}`}
								onClick={() => {
									setActiveTab("team");
								}}
							>
								Team
							</NavLink>
						</NavItem>
					</HashLink>
					<HashLink to="/#event">
						<NavItem>
							<NavLink
								className={`${classText} ${activeTab == "event" && "active"}`}
								onClick={() => {
									setActiveTab("event");
								}}
							>
								Events
							</NavLink>
						</NavItem>
					</HashLink>
					<HashLink to="/gallery/#gallery">
						<NavItem>
							<NavLink
								className={`${classText} ${activeTab == "gallery" && "active"}`}
								onClick={() => {
									setActiveTab("gallery");
								}}
							>
								Gallery
							</NavLink>
						</NavItem>
					</HashLink>
					<HashLink to="/#contact">
						<NavItem>
							<NavLink
								className={`${classText} ${activeTab == "contact" && "active"}`}
								onClick={() => {
									setActiveTab("contact");
								}}
							>
								Contact Us
							</NavLink>
						</NavItem>
					</HashLink>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Navigation;
