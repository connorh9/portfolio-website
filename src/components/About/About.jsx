import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
//import HTMLlogo from "../../assets/icons/html.svg";
import CSSlogo from "../../assets/icons/css.png";
import JSlogo from "../../assets/icons/js.png";
import Reactlogo from "../../assets/icons/react.png";
//import Nextlogo from "../../assets/icons/nextjs.svg";
//import Expresslogo from "../../assets/icons/express.svg";
//import Nodelogo from "../../assets/icons/nodejs.svg";
//import Gitlogo from "../../assets/icons/git.svg";
import PythonLogo from "../../assets/icons/icons8-python-48.svg"
import Gitlogo from "../../assets/icons/git.png"
import Postgreslogo from "../../assets/icons/Postgres.png"
import sqllogo from "../../assets/icons/sql.png"
import javalogo from "../../assets/icons/java.png"
import dockerlogo from "../../assets/icons/Docker.png"
import Clogo from "../../assets/icons/C.png"

import CanvasDots from "../CanvasDots/CanvasDots";
import "./About.css";
import ProfilePic from "../../assets/images/portrait.jpg";

const skills = [
  { icon: PythonLogo, name: "PYTHON" },
  { icon: CSSlogo, name: "CSS" },
  { icon: Clogo, name: "C" },
  { icon: JSlogo, name: "JAVASCRIPT" },
  { icon: Reactlogo, name: "REACT" },
  { icon: dockerlogo, name: "DOCKER" },
  { icon: sqllogo, name: "SQL" },
  { icon: javalogo, name: "JAVA" },
  { icon: Gitlogo, name: "GIT" },
  { icon: Postgreslogo, name: "POSTGRES" },
  
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
              I'm a Junior Software Engineer committed to building tools that make 
              lives easier and more efficient. With a strong foundation in computer 
              science from UW–Madison, I love taking ideas from concept to production.
              Fullstack development is like building a skyscraper... you better hope
              your foundation is solid.

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
