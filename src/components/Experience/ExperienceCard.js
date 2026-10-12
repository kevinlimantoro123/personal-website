import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard(props) {
  return (
    <div className="experience-item">
      <Card className="project-card-view experience-card-view">
        <Card.Body>
          <div className="experience-header">
            <div>
              <Card.Title className="experience-role">{props.role}</Card.Title>
              <div className="purple experience-company">{props.company}</div>
            </div>
            <div className="experience-meta">
              <div>{props.period}</div>
              <div>{props.location}</div>
            </div>
          </div>
          <ul className="experience-points">
            {props.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="experience-tags">
            {props.tech.map((tech) => (
              <span key={tech} className="experience-tag">
                {tech}
              </span>
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ExperienceCard;
