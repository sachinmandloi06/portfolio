import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Feedback from "../../Assets/Projects/feedback.png";
import User from "../../Assets/Projects/user.jpg";
import codeitup from "../../Assets/Projects/codeitup-web.png";
import Crypto from "../../Assets/Projects/crypto.jpg";
import Weather from "../../Assets/Projects/download.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeitup}
              isBlog={false}
              title="Codeitup App"
              description="Designed and developed a user-friendly coding app using HTML and CSS, featuring a clean interface for writing and testing code snippets."
              ghLink="https://sachinmandloi06.github.io/codeitup-web/"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather App"
              description="Developed a simple weather app using HTML, CSS, and JavaScript that displays the current temperature, and location of a user-inputted location. Utilized the OpenWeatherMap API to fetch real-time weather data."
              ghLink="https://sachinmandloi06.github.io/weather-web/"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Feedback}
              isBlog={false}
              title="Feedback app"
              description=" Developed a responsive and interactive feedback collection app using React, enabling users to provide ratings and comments on various services. User-friendly feedback submission form .Rating system with animated feedback indicators. "
              ghLink="feedback-app-lime.vercel.app"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={User}
              isBlog={false}
              title="User app "
              description="Built a scalable and maintainable user management app using React, leveraging Context API for state management and prop drilling elimination.User authentication and authorization.User profile management."
              ghLink="users-app-zeta.vercel.app"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Crypto}
              isBlog={false}
              title="Crypto app"
              description="Built a comprehensive cryptocurrency tracking app using React and Redux, featuring real-time market data, customizable watchlists, and user authentication. Real-time cryptocurrency market data.Customizable watchlists with price alerts."
              ghLink="crypto-web-dusky.vercel.app"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
