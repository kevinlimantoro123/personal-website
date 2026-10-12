import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiExpress,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiFastapi,
  SiFlask,
  SiNumpy,
  SiApachekafka,
} from "react-icons/si";

const techs = [
  { name: "Python", icon: <DiPython /> },
  { name: "Java", icon: <DiJava /> },
  { name: "JavaScript", icon: <DiJavascript1 /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "React / React Native", icon: <DiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <DiNodejs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "NumPy", icon: <SiNumpy /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <DiMongodb /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Apache Kafka", icon: <SiApachekafka /> },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech) => (
        <Col xs={4} md={2} className="tech-icons" key={tech.name} title={tech.name}>
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
