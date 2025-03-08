import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kevin Limantoro </span>
            from <span className="purple"> Surabaya, Indonesia.</span>
            <br />
            I am currently studying in National University of Singapore (NUS)
            <br />
            pursuing my Bachelor's degreee in Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exercising
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"Put quote here!" </p>
          <footer className="blockquote-footer">Kevin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
