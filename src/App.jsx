import { useState, useEffect } from "react";
import CustomNavbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./styles/App.css";

function App() {
	const [navbarHeight, setNavbarHeight] = useState(0);

	useEffect(() => {
		const navbar = document.querySelector(".navbar");
		if (navbar) {
			setNavbarHeight(navbar.offsetHeight);
		}
	}, []);

	return (
		<div>
			<div id="hero">
				<Hero />
			</div>
			<div id="navbar">
				<CustomNavbar />
			</div>
			<div id="about">
				<About />
			</div>
			<div id="projects">
				<Projects />
			</div>
			<div id="contact">
				<Contact />
			</div>
			<div id="footer">
				<Footer />
			</div>
		</div>
	);
}

export default App;
