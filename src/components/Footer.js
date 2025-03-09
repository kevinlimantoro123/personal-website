import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer fluid">
      <Row>
        <Col md="4" className="mx-auto text-center">
          <h3>Designed by Soumyajit Behera | Edited by Kevin</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
