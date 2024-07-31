import React, { useReducer } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import BookingForm from "../components/BookingForm/BookingForm";
import AvailableBookings from "../components/AvailableBookings/AvailableBookings";

const availableTimes = [
  {
    time: "12:00 pm",
    value: 12,
  },
  {
    time: "1:00 pm",
    value: 1,
  },
  {
    time: "2:00 pm",
    value: 2,
  },
  {
    time: "3:00 pm",
    value: 3,
  },
];

function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      // For now, return the same available times regardless of the date
      return availableTimes;
    default:
      return state;
  }
}

function initializeTimes() {
  return [
    { time: "12:00 pm", value: 12 },
    { time: "1:00 pm", value: 1 },
    { time: "2:00 pm", value: 2 },
    { time: "3:00 pm", value: 3 },
  ];
}

function Bookings() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  return (
    <section>
      <Container>
        <Row className="p-5">
          <h1>Bookings</h1>
        </Row>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        <AvailableBookings availableTimes={availableTimes} />
      </Container>
    </section>
  );
}

export default Bookings;