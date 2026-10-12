import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiWindows,
  SiVercel,
  SiMacos,
  SiMicrosoftazure,
  SiGooglecloud,
  SiGithubactions,
  SiFigma,
} from "react-icons/si";

const tools = [
  { name: "Microsoft Azure", icon: <SiMicrosoftazure /> },
  { name: "Google Cloud", icon: <SiGooglecloud /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Git", icon: <DiGit /> },
  { name: "GitHub Actions", icon: <SiGithubactions /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "VS Code", icon: <SiVisualstudiocode /> },
  { name: "Windows", icon: <SiWindows /> },
  { name: "macOS", icon: <SiMacos /> },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => (
        <Col xs={4} md={2} className="tech-icons" key={tool.name} title={tool.name}>
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
