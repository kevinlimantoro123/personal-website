import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, my name is
            <span className="purple"> Kevin Limantoro. </span>I am currently
            studying in National University of Singapore (NUS) pursuing my
            Bachelor's degreee in Computer Science. I really enjoy challenging
            myself and building new software products. Check out my projects by
            clicking on the button below!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
