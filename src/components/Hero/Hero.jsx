import React from "react";
import { Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import HeroBg from "./HeroBg";
import { Link } from "react-scroll";
import "./Hero.css";

const Hero = () => {
	const nameAnimation = useSpring({
		from: { transform: "translateX(-100%)", opacity: 0 },
		to: { transform: "translateX(0)", opacity: 1 },
		config: { tension: 100, friction: 30 }
	});

	const titleAnimation = useSpring({
		from: { transform: "translateX(100%)", opacity: 0 },
		to: { transform: "translateX(0)", opacity: 1 },
		config: { tension: 100, friction: 30 }
	});

	const buttonAnimation = useSpring({
		from: { transform: "translateY(100%)", opacity: 0 },
		to: { transform: "translateY(0)", opacity: 1 },
		config: { tension: 50, friction: 20 },
		delay: 2500
	});

	return (
		<div className="hero-section" id="hero">
			<HeroBg />
			<div className="hero-content">
				<animated.h1 style={nameAnimation} className="hero-name">
					Hi, I'm <span className="highlighted-name">Connor</span>,
				</animated.h1>
				<animated.h2 style={titleAnimation} className="hero-title">
					A Junior Software Engineer
				</animated.h2>
				<Link to="about" smooth={true} duration={200}>
					<animated.div style={buttonAnimation}>
						<Button className="scroll-button">View my work</Button>
					</animated.div>
				</Link>
			</div>
		</div>
	);
};

export default Hero;
