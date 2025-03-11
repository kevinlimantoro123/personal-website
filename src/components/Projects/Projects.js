import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import optiplan from "../../Assets/Projects/optiplan.png";
import smartmart from "../../Assets/Projects/mwh-smartmart.png";

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
              imgPath={optiplan}
              isBlog={false}
              title="OptiPlan"
              description="Full stack productivity web application where users can set view and set reminders on our custom-built calendar or create tasks on our interactive kanban board. Provides an interactive analytics view of the tasks as well. Features JWTAuth for user authentication. This project was built using React.js, Express.js, and Tailwind CSS"
              ghLink="https://github.com/kevinlimantoro123/OptiPlan-2024"
              demoLink="https://opti-plan-2024.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartmart}
              isBlog={false}
              title="MWH SmartMart"
              description="A full stack e-commerce web application utilising a voucher reward system. Offers intuitive tools for reporting and analysis of impactful data. User authentication is done through Firebase. This project was built using React.js, Express.js, Tailwind CSS and MongoDB for data management"
              ghLink="https://github.com/kevinlimantoro123/h4g-2025"
              demoLink="https://devpost.com/software/mwh-smartmart"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
