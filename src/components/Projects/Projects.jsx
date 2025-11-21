import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import transitImg from "../../assets/images/transitTracker.png";
import badgerChatImg from "../../assets/images/BadgerChat.png";
import "./Projects.css";
import CanvasDots from "../CanvasDots/CanvasDots";

const Projects = () => {
	const projects = [
		{
			title: "Transit Tracker",
			subtext:
				"A Real-Time Chicago Transit Authority App Built with React Native",
			description:
				"Transit Tracker is an iOS/Android application created with React Native. The app provides live Chicago Transit Authority bus and train tracking information by pulling information directly from the CTA APIs. My teammate and I were tired of using third-party apps running off GTFS feeds causing us to miss trains due to incorrect times. The app leverages Axios and modular components to provide 50% more accurate arrival times and a seamless interface, allowing users to favorite different stops. With rigorous UX testing, our team built this with one goal in mind; to improve commuter efficiency in Chicago.",
			imageUrl: transitImg,
			imageText: "",
			buttonUrl: "https://github.com/henrywbarber/TransitTracker",
			buttonText: "View on Github"
		},
		{
			title: "Badger Chatroom",
			subtext: "A Custom Website Designed for Students to Connect",
			description:
				"Badger Chat is a fully functioning web chatroom designed to allow Badger students to connect with each other virtually. Students are able to type in their courses for the semester and upon submission, will either be placed in the corresponding chatroom or have a new chatroom created if one does not exist, by calling the custom Python/Flask API. The API retrieves the chatrooms and messages directly from a Postgres database hosted on Supabase. To ensure maximum convenience, the API uses a websocket for each chatroom to instantly update the chatroom with any new message, preventing users from needing to refresh to see messages. The UI was created with React with the goal of being simple, yet efficient. There are many features which I've thought about implementing but have not due to shifting my focus, if you are interested in my ideas, please ask!",
			imageUrl: badgerChatImg,
			imageText: "Check Me Out on Github",
			buttonUrl: "https://github.com/connorh9/Web-Chatroom",
			buttonText: "View on Github"
		},
		{
			title: "Receipt Tracker",
			subtext:
				"Fullstack Mobile App Allowing Users to Scan Receipts and Track their Finances",
			description:
				"This is a Fullstack mobile app built out with Python/Flask as the backend and React Native on the frontend. The app allows users to seamlessly scan a receipt which the Flask API takes and generates a string from the using OCR. The string of text is passed to OpenAI's API to generate a clean JSONified representation of the receipt which is stored in the database. The frontend pulls from the user's data to create multiple views to help the user analyze and understand their spending. ",
			imageUrl: "",
			imageText: "No preview",
			buttonUrl:
				"https://github.com/connorh9/Receipt-Tracker",
			buttonText: "View on Github"
		},
		{
			title: "Linux Shell",
			subtext: "A Personal Unix Shell Developed Fully in C",
			description:
				"This custom Linux Shell, developed fully in C, supports both interactive and batch modes. This program is enabled by multiple system-level calls such as fork(), execv(), and dup2(). The shell, meant to mimic popular shells like zsh or bash, supports variable management, command history, redirections, piping, and executing commands. This project allowed me to learn many Unix principles such as memory management and process handling, which gave me a true understanding of what any program I make may be doing behind the scenes.",
			imageUrl: "",
			imageText: "View In-Depth on Github",
			buttonUrl:
				"https://github.com/connorh9/Hughes-Shell",
			buttonText: "View on Github"
		},
		{
			title: "Linux File System",
			subtext: "A Custom File System Written in C Modeled After Fast File System Implementations",
			description:
				"This Unix-like file system was developed in C with the goal to deeply understand the behind-the-scenes of a file system. The system is enabled by FUSE which is a framework that defines callback functions, allowing the creation of file systems in normal programming languages. The system supports both RAID 0 and 1 which, along with the inode and data block count, can be selected during initialization. With the common FFS implementation in mind, the system supports creation of files/directories, reading/writing files up to max size of the indirect block, reading a directory, removing an entry and viewing stats.",
			imageUrl: "",
			imageText: "View In-Depth on Github",
			buttonUrl: "https://github.com/connorh9/custom-file-system",
			buttonText: "View on Github"
		},
	
	];

	return (
		<section id="projects" className="projects-section">
			<CanvasDots />
			<Container fluid>
				<Row className="text-center g-0">
					<Col>
						<h1>Projects</h1>
					</Col>
				</Row>
				<div>
					{projects.map((project, index) => (
						<Row
							className={`project-row g-0 ${
								index % 2 === 1 ? "justify-content-end" : ""
							}`}
							key={index}
						>
							<Card
								className={`project-card ${index % 2 === 0 ? "left" : "right"}`}
							>
								<Card.Body>
									<Card.Title>{project.title}</Card.Title>
									<Card.Text>{project.subtext}</Card.Text>
									{project.imageUrl ? (
										<Card.Img
											className="card-img"
											variant="top"
											src={project.imageUrl}
											alt={project.title}
										/>
									) : (
										<div className="card-img-placeholder">
											<span>{project.imageText}</span>
										</div>
									)}
									<Card.Text>{project.description}</Card.Text>
									{project.buttonUrl ? (
										<Button
											variant="secondary"
											href={project.buttonUrl}
											target="_blank"
										>
											{project.buttonText}
										</Button>
									) : (
										<Button className="btn-disabled" variant="secondary" disabled>
											{project.buttonText}
										</Button>
									)}
								</Card.Body>
							</Card>
						</Row>
					))}
				</div>
			</Container>
		</section>
	);
};

export default Projects;
