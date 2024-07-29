import React, { useState } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import BookingForm from "../components/BookingForm/BookingForm";

const availableTimes = [
  {
    time: "12:00 pm",
    value: 12
  },
  {
    time: "1:00 pm",
    value: 1,
  }
  , {
    time: "2:00 pm",
    value: 2,
  },
  {
    time: "3:00 pm",
    value: 3,
  }
];
function Bookings() {
  const [bookedTime, setBookedTime]= useState([]);
  return (
    <section>
      <Container>
        <Row className="p-5">
          <h1>Bookings</h1>
        </Row>
        <BookingForm bookedTimes/>
      </Container>
    </section>
  );
}

export default Bookings;
