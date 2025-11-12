import React, { useState, useEffect, useRef } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Navbar.css";

function CustomNavbar() {
	const [isVisible, setIsVisible] = useState(false);
	const navbarRef = useRef(null);

	useEffect(() => {
		const hero = document.querySelector("#hero");

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(!entry.isIntersecting);
			},
			{
				threshold: 0,
				rootMargin: "-5% 0px 0px 0px"
			}
		);

		if (hero) observer.observe(hero);

		return () => observer.disconnect();
	}, []);

	return (
		<Navbar
			ref={navbarRef}
			className={`custom-navbar ${
				isVisible ? "navbar-visible" : "navbar-hidden"
			}`}
		>
			<div className="navContainer">
				<Nav className="ms-auto">
					<Nav.Link as={Link} to="hero" smooth={true} duration={100}>
						Home
					</Nav.Link>
					<Nav.Link as={Link} to="about" smooth={true} duration={100}>
						About
					</Nav.Link>
					<Nav.Link as={Link} to="projects" smooth={true} duration={100}>
						Projects
					</Nav.Link>
					<Nav.Link as={Link} to="contact" smooth={true} duration={100}>
						Contact
					</Nav.Link>
				</Nav>
			</div>
		</Navbar>
	);
}

export default CustomNavbar;
