import React from "react";
import { Badge } from "react-bootstrap";

function AvailableBookings({ availableTimes }) {
  return (
    // lists all available booking slots
    <div>
      <h2>Available Bookings</h2>
      <ul>
        {availableTimes?.map((booking) => (
          <Badge key={booking.time} bg="secondary" className="m-3">
            <span className="h3 p-2">{booking.time}</span>
          </Badge>
        )) ?? <p>No available booking slots</p>}
      </ul>
    </div>
  );
}

export default AvailableBookings;