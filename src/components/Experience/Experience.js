import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "InterSystems",
    location: "Singapore",
    period: "May 2026 – Jul 2026",
    points: [
      "Built a healthcare data integration platform on InterSystems IRIS, ingesting clinical data via CDC/Kafka and enterprise data via OData/OAuth2 through ObjectScript interoperability productions into a unified clinical data repository",
      "Developed an agentic RAG system over 2,000+ clinical documents using OpenAI, HNSW vector search and LangChain, served by a FastAPI microservice that returned grounded answers in under 3 seconds",
      "Deployed and debugged the InterSystems HealthShare AI Assistant across a multi-instance production VM, resolving runtime, configuration and namespace conflicts that had blocked the rollout",
    ],
    tech: [
      "InterSystems IRIS",
      "ObjectScript",
      "Kafka",
      "Debezium",
      "OData/OAuth2",
      "LangChain",
      "OpenAI",
      "FastAPI",
    ],
  },
  {
    role: "Cloud and Software Engineer Intern",
    company: "Singapore Maritime Institute",
    location: "Singapore",
    period: "May 2025 – Jul 2025",
    points: [
      "Built and administered a secure Microsoft Azure environment of 10 virtual machines, enforcing network security policies and role-based access controls to isolate resources across multiple teams",
      "Developed an Azure AI chatbot integrated with internal databases and REST APIs, handling 200+ queries a month from around 30 internal users",
      "Designed a ferry timing web app using the Google Maps API to surface live ETAs for Marina South Pier and other ferry routes, replacing a manual timetable lookup",
    ],
    tech: ["Microsoft Azure", "Azure AI", "REST APIs", "Google Maps API"],
  },
  {
    role: "Information Technology Intern",
    company: "My Healthcare Collective",
    location: "Singapore",
    period: "Feb 2023 – Jul 2023",
    points: [
      "Designed user journeys and ran end-to-end testing for a Clinic Management System and Patient App, filing defects and workflow gaps that shipped as fixes",
      "Ran recurring feedback sessions with doctors, nurses and patients, translating findings into a prioritised improvement backlog for the IT team",
    ],
    tech: ["End-to-end Testing", "User Research", "Figma"],
  },
];

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the places I've interned at so far.
        </p>
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} {...exp} />
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
