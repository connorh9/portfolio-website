import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
//import HTMLlogo from "../../assets/icons/html.svg";
import CSSlogo from "../../assets/icons/css.png";
//import JSlogo from "../../assets/icons/javascript.svg";
//import Reactlogo from "../../assets/icons/react.svg";
//import Nextlogo from "../../assets/icons/nextjs.svg";
//import Expresslogo from "../../assets/icons/express.svg";
//import Nodelogo from "../../assets/icons/nodejs.svg";
//import Gitlogo from "../../assets/icons/git.svg";
import PythonLogo from "../../assets/icons/icons8-python-48.svg"
import CanvasDots from "../CanvasDots/CanvasDots";
import "./About.css";
import ProfilePic from "../../assets/images/portrait.jpg";

const skills = [
  { icon: PythonLogo, name: "PYTHON" },
//   { icon: JSlogo, name: "JavaScript" },
  { icon: CSSlogo, name: "CSS" },
//   { icon: Reactlogo, name: "React" },
//   { icon: Nextlogo, name: "Next.js" },
//   { icon: Expresslogo, name: "Express.js" },
//   { icon: Nodelogo, name: "Node.js" },
//   { icon: Gitlogo, name: "Git" },
];

const About = () => {
  return (
    <section id="about" className="about-section">
	  <CanvasDots />
      <Container fluid>
        <Row className="align-items-center justify-content-center">
          {/* Left side: text and outline icon */}
          <Col md={6} className="about-left">
			<div className="about-photo">
				<img src={ProfilePic} alt="Profile" className="profile-image" />
			</div>
            <h1 className="about-title">
              About <span className="highlight">Me</span>
            </h1>
            <p className="about-text">
              Fully committed to the philosophy of life-long learning, I’m a full stack
              developer with a deep passion for JavaScript, React, and all things web
              development. The unique combination of creativity, logic, and technology —
              and never running out of new things to discover — drives my excitement for
              building meaningful applications. When I’m not coding, I enjoy reading,
              staying active, and playing guitar.
            </p>
          </Col>

          {/* Right side: skills grid */}
          <Col md={6} className="about-right">
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <Card key={index} className="skill-card">
                  <img src={skill.icon} alt={skill.name} className="icon" />
                  <span className="skill-name">{skill.name}</span>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
