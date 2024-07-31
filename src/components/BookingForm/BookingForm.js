import { Formik } from "formik";
import React, { useState } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import * as yup from "yup";

const initialValues = {
  bookDate: "",
  bookTime: "",
  bookHeadcount: 2,
  bookOccasion: "",
};

const validationSchema = yup.object().shape({
  bookDate: yup
    .date()
    .min(
      new Date().toISOString(),
      ({ min }) => `Date needs to be later than today ${formatDate(min)}!!`
    )
    .required("Required"),
  bookTime: yup.number().required("Required"),
  bookHeadcount: yup
    .number()
    .max(10, "10 is the largest table we can accommodate")
    .required("Required"),
  bookOccasion: yup
    .string()
    .max(20, "Occasion names can't be longer than 20 characters"),
});

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

function BookingForm({ availableTimes, dispatch }) {
  const [validated, setValidated] = useState(false);
  const handleBookTime = (value) => {
    dispatch({ type: "UPDATE_TIMES", time: value });
  };

  return (
    <Formik
      initialValues={initialValues}
      validated={validated}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("setSubmitting");
        setSubmitting(true);
        setValidated(true);
        // setTimeout(() => {
        // alert(JSON.stringify(values, null, 2));
        handleBookTime(values.bookTime);
        resetForm();
        setValidated(false);
        setSubmitting(false);
        // }, 1000);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form
          as={Row}
          validated={validated}
          className="m-5"
          onSubmit={handleSubmit}
        >
          <Form.Group as={Col} xs={3} controlId="book-date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="bookDate"
              placeholder="Select Date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.bookDate}
              className={touched.bookDate && errors.bookDate ? "error" : null}
            />
            {touched.bookDate && errors.bookDate ? (
              <Form.Control.Feedback className="d-block" type="invalid">
                {errors.bookDate}
              </Form.Control.Feedback>
            ) : null}
          </Form.Group>
          <Form.Group as={Col} controlId="book-time" xs={3}>
            <Form.Label>Time</Form.Label>
            <Form.Select
              name="bookTime"
              placeholder="Select Time"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.bookTime}
              className={touched.bookTime && errors.bookTime ? "error" : null}
            >
              {availableTimes.map((time) => (
                <option key={time.value} value={time.value}>
                  {time.time}
                </option>
              ))}
            </Form.Select>
            {touched.bookTime && errors.bookTime ? (
              <Form.Control.Feedback className="d-block" type="invalid">
                {errors.bookTime}
              </Form.Control.Feedback>
            ) : null}
          </Form.Group>
          <Form.Group as={Col} controlId="book-headcount" xs={3}>
            <Form.Label>No. of Guests</Form.Label>
            <Form.Control
              type="number"
              name="bookHeadcount"
              placeholder="3"
              min="1"
              max="10"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.bookHeadcount}
              className={
                touched.bookHeadcount && errors.bookHeadcount ? "error" : null
              }
            />
            {touched.bookHeadcount && errors.bookHeadcount ? (
              <Form.Control.Feedback className="d-block" type="invalid">
                {errors.bookHeadcount}
              </Form.Control.Feedback>
            ) : null}
          </Form.Group>
          <Form.Group as={Col} controlId="book-occasion" xs={3}>
            <Form.Label>Occasion</Form.Label>
            <Form.Control
              type="text"
              name="bookOccasion"
              placeholder="Birthday, Wedding, etc"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.bookOccasion}
              className={
                touched.bookOccasion && errors.bookOccasion ? "error" : null
              }
            />
            {touched.bookOccasion && errors.bookOccasion ? (
              <Form.Control.Feedback className="d-block" type="invalid">
                {errors.bookOccasion}
              </Form.Control.Feedback>
            ) : null}
          </Form.Group>
          <Col xs={3} className="mx-auto my-5">
            <Button
              type="submit"
              variant="dark"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Col>
        </Form>
      )}
    </Formik>
  );
}

export default BookingForm;