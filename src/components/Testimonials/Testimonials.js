import React from 'react'
import { Row, Col, Image, Container, Card } from "react-bootstrap";

const testimonials = [
  {name: "Maria",
    testimony: "Loved the food ambience and people",
    image: "https://picsum.photos/id/58/50"
  },
  {name: "John",
    testimony: "The ambiance was just perfect",
    image: "https://picsum.photos/id/55/50"
  },
  {name: "Emma",
    testimony: "The service was amazing",
    image: "https://picsum.photos/id/45/50"
  }
]

function Testimonials() {
  return (
    <section className="specials p-5">
    <Container>
      <Row>
        <Col>
            <h2 className='text-center'>Testimonials</h2>
        </Col>
      </Row>
      <Row className='my-5'>
        {testimonials.map((testimonial, index) => (
          <Col key={index} md={4}>
           <Card className='my-2'>
            <Row className='align-items-center'>
              <Col xs="2">
                <Image src={testimonial.image} roundedCircle className='m-3'/>
              </Col>
              <Col>
                <p>{`${testimonial.testimony} -${testimonial.name}`}</p>
              </Col>
            </Row>
           </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
  )
}

export default Testimonials
