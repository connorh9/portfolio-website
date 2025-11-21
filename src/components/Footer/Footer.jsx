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
				href="https://linkedin.com/in/connor-hughes-cs"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image src={linkedInLogo} alt="Linkedin" />
			</a>
			<a
				href="mailto:connorh.swe@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image src={emailLogo} alt="Email" />
			</a>
			<a
				href="https://github.com/connorh9"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image src={gitHubLogo} alt="Github" />
			</a>
		</div>
		<p>Connor Hughes ©2025</p>
	</footer>
);

export default Footer;
