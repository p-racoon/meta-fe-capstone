import React from "react";
import { Row, Col, Image, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function IntroBanner() {
  const navigate = useNavigate();
  return (
    <section className="intro-banner p-5">
      <Container>
        <Row>
          <Col>
            <Row>
              <h1>Little Lemon</h1>
              <p>Chicago</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Row>
            <Button variant="dark" onClick={()=> navigate("/reservations")}>Reserve a table</Button>
          </Col>
          <Col >
            <Image src="https://picsum.photos/id/42/300" className="float-end"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default IntroBanner;
