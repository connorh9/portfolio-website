import React from "react";
import { Image } from "react-bootstrap";
import linkedInLogo from "../../assets/icons/icons8-linkedin-48.png";
import emailLogo from "../../assets/icons/icons8-email-48.png";
import gitHubLogo from "../../assets/icons/icons8-github-48.png";
import "./Footer.css";

const Footer = () => (
	<footer className="footer">
		<div className="icon-links">
			<a
				href="https://www.linkedin.com/in/henrywbarber"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image src={linkedInLogo} alt="Linkedin" />
			</a>
			<a
				href="mailto:henrywbarber@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image src={emailLogo} alt="Email" />
			</a>
			<a
				href="https://github.com/henrywbarber"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image src={gitHubLogo} alt="Github" />
			</a>
		</div>
		<p>Henry Barber ©2025</p>
	</footer>
);

export default Footer;
