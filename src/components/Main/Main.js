import React from 'react'
import { Container } from 'react-bootstrap'

export default function Main(props) {  return (
    <Container>
      {props.children}
    </Container>
  )
}
