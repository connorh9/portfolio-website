import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import marginPredictorImg from "../../assets/images/marginPredictor.png";
import proteinProImg from "../../assets/images/proteinPro.png";
import cnnIMG from "../../assets/images/cnn.png";
import transitImg from "../../assets/images/transitTracker.png";
import "./Projects.css";
import CanvasDots from "../CanvasDots/CanvasDots";

const Projects = () => {
	const projects = [
		{
			title: "Transit Tracker",
			subtext:
				"A Real-Time Chicago Transit Authority App Built with React Native",
			description:
				"Transit Tracker is a mobile application developed using React Native that delivers live Chicago Transit Authority (CTA) bus and train tracking data. By interfacing directly with the City of Chicago and CTA APIs, it bypasses outdated GTFS feeds to provide up to 50% more accurate arrival times than third-party apps. Leveraging React Hooks, Axios, and modular component composition, the app enables users to favorite stops, track real-time predictions, and enjoy a streamlined user interface optimized through Agile development and UX testing. With 200% more data visibility than standard solutions, Transit Tracker dramatically improves commuting efficiency.",
			imageUrl: transitImg,
			imageText: "",
			buttonUrl: "https://github.com/henrywbarber/TransitTracker",
			buttonText: "View on Github"
		},
		{
			title: "BarberShell",
			subtext: "A Custom Unix Shell with Interactive and Batch Modes in C",
			description:
				"BarberShell is a fully featured Unix shell developed in C, built to support both interactive terminal sessions and non-interactive batch execution. The shell handles process creation, command execution, I/O redirection, command history, and both local/environment variable management. Built atop fork(), exec(), and dup2(), it allows fine-grained control over stdin/stdout/stderr streams, making it suitable for complex workflows. Careful memory management ensures robust runtime behavior and resource safety, while advanced process handling offers a hands-on exploration of Unix OS principles.",
			imageUrl: "",
			imageText: "Check Me Out on Github",
			buttonUrl: "https://github.com/henrywbarber/BarberShell",
			buttonText: "View on Github"
		},
		{
			title: "AdaptiveRecognition: Convolutional Neural Network",
			subtext:
				"Image Classification with Custom Deep Learning Layers in PyTorch",
			description:
				"AdaptiveRecognition explores the design of a convolutional neural network from the ground up using PyTorch. The model incorporates a VGGNet-style architecture with Kaiming initialization, custom loss functions (Softmax/SVM), and a choice of optimizers (SGD with momentum or Adam). It supports CUDA acceleration and is implemented directly using low-level tensor operations for complete architectural control. Custom layer modules, including fast and sandwiched layers, enable experimental flexibility. The model achieves strong classification results on the CIFAR-10 dataset, visualized with Matplotlib, highlighting both its accuracy and architectural transparency.",
			imageUrl: cnnIMG,
			imageText: "",
			buttonUrl:
				"https://github.com/henrywbarber/Convolutional_Neural_Network/blob/main/convolutional_networks.ipynb",
			buttonText: "Open Notebook"
		},
		{
			title: "College Football Margin Predictor",
			subtext: "Machine Learning Model for Predicting NCAA Game Outcomes",
			description:
				"The Margin Predictor analyzes historical NCAA football data using a machine learning pipeline built in Python. By consuming the College Football Data API, the project extracts and cleans game statistics using Pandas and NumPy, then feeds them into a fast.ai tabular learner for game margin prediction. Emphasizing model interpretability and predictive accuracy, the tool uncovers trends in team performance and forecasts potential outcomes of hypothetical matchups. This project demonstrates effective use of domain-specific APIs, feature engineering, and tabular modeling in sports analytics.",
			imageUrl: marginPredictorImg,
			imageText: "",
			buttonUrl:
				"https://github.com/henrywbarber/MarginPredictor/blob/main/MarginPredictor.ipynb",
			buttonText: "Open Notebook"
		},
		{
			title: "Protein Pro",
			subtext: "A Personalized Nutrition Tracker Built with React.js",
			description:
				"Protein Pro is a responsive React-based web application that allows users to set personalized dietary targets and monitor macronutrient intake. The platform features intuitive component-based design, real-time state management, and user-friendly visualizations to track daily and historical consumption. By empowering users to log meals and receive tailored feedback, Protein Pro functions as both a nutrition tracker and a lifestyle tool for achieving dietary goals. The app exemplifies front-end development best practices in React, focusing on scalability and UX-first design.",
			imageUrl: proteinProImg,
			imageText: "",
			buttonUrl: "https://henrywbarber.github.io/protein_pro/",
			buttonText: "Visit Page"
		},
		{
			title: "KartKings",
			description:
				"KartKings is a score-tracking app for Mario Kart, designed to log multiple races and compare cumulative results between friends. The app will feature options for adding and removing player profiles, aggregating profile average cup point totals, and viewing historical circuit performances to crown the king of the mountain.",
			imageUrl: "",
			imageText: "In Developement...",
			buttonUrl: "",
			buttonText: "Coming Soon"
		}
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
