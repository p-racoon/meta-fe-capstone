// BookingForm.test.js
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  const mockDispatch = jest.fn();
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

  beforeEach(() => {
    render(
      <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
    );
  });

  test("renders the form correctly", () => {
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
  });

  test("validates form inputs", async () => {
    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: "A very long occasion name that exceeds the limit" },
    });
    fireEvent.blur(screen.getByLabelText(/Occasion/i));

    await waitFor(
      () => {
        expect(
          screen.getByText(/Occasion names can't be longer than 20 characters/i)
        ).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  test("submits the form and calls dispatch", async () => {
    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: "Birthday" },
    });
    fireEvent.change(screen.getByLabelText(/Date/i), {
      target: { value: "2039-10-10" },
    });
    fireEvent.change(screen.getByLabelText(/Time/i), {
      target: { value: "10:00 AM" },
    });

    fireEvent.click(screen.getByText(/Submit/i));
  });

  test("resets the form after submission", async () => {
    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: "Birthday" },
    });
    fireEvent.change(screen.getByLabelText(/Date/i), {
      target: { value: "2039-10-10" },
    });
    fireEvent.change(screen.getByLabelText(/Time/i), {
      target: { value: "10:00 AM" },
    });

    fireEvent.click(screen.getByText(/Submit/i));
  });
});