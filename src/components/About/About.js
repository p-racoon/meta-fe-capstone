import React from 'react'
import { Row, Col, Image, Container } from "react-bootstrap";

function About() {
  return (
    <section className="specials p-5">
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
        </Col>
        <Col>
          <Image src="https://picsum.photos/300" className='floating-about-image'/>
          <Image src="https://picsum.photos/300" />
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default About
