import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="p-5">
          <Col xs={1}>
            <Image src="/assets/Asset 18@4x.png" fluid />
          </Col>
          <Col></Col>
          <Col>
            <h5>Doormat Nav</h5>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Specials</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col>
            <h5>Contact</h5>
            <p>123 Main St, Chicago, IL</p>
          </Col>
          <Col>
            <h5>Social Media Links</h5>
            <ul>
              <li>Instagram</li>
              <li>Pinterest</li>
              <li>YouTube</li>
              <li>Email</li>
              <li>Phone</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
