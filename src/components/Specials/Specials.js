import React from 'react'
import { Row, Col, Image, Container, Button, Card } from "react-bootstrap";

const specials = [
  {
    name: 'Greek Salad',
    description: 'Combination of fresh greek greens, tomatoes, cucumbers, olives, and basil.',
    price: '$12.00',
    image: 'https://picsum.photos/id/100/300'
  },
  {
    name: 'Chicken Wings',
    description: 'Grilled chicken breasts served with side of brown rice and steamed vegetables.',
    price: '$15.00',
    image: 'https://picsum.photos/id/101/300',
  },
  {
    name: 'Vegetable Stir-Fry',
    description: 'Homemade vegetable stir-fry with sauce made from shredded carrots, corn, and peas.',
    price: '$10.00',
    image: 'https://picsum.photos/id/102/300',
  },
  {
    name: 'Pasta Carbonara',
    description: 'Fresh pasta topped with tomatoes, garlic, and basil. This is made from fresh ones as well.',
    price: '$13.00',
    image: 'https://picsum.photos/id/103/300',
  }
]

function Specials() {
  return (
    <section className="specials p-5">
    <Container>
      <Row>
        <Col>
         <h2>Specials</h2>
        </Col>
        <Col>
          <Button variant='dark' className='float-end'>Orders menu</Button>
        </Col>
      </Row>
      <Row className='my-5'>
        {specials.map((special, index) => (
          <Col key={index}>
            <Card>
            <Card.Img variant="top" src={special.image} />
            <Card.Body>
              <Card.Title>{special.name}</Card.Title>
              <Card.Text>
                {special.description}
              </Card.Text>
              <Card.Text>
                Price: {special.price}
              </Card.Text>
            </Card.Body>
            </Card>
        </Col>))}
      </Row>
    </Container>
  </section>
  )
}

export default Specials
