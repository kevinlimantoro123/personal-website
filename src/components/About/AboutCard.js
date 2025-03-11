import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Currently, I am pursuing my Bachelor's degree in{" "}
            <span className="purple"> Computer Science </span> at the National
            University of Singapore (NUS). I really enjoy challenging myself and
            building new software products that contributes to a real world
            solution. I am always open to new opportunities and challenges that
            will help me grow as a developer.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
