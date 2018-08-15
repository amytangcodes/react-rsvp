import React from "react";
import Guest from "./Guest";
import PropTypes from "prop-types";

const GuestList = ({ guests, toggleConfirmationAt }) => (
  <ul>
    {guests.map((guest, index) => (
      <Guest
        key={index}
        name={guest.name}
        isConfirmed={guest.isConfirmed}
        handleConfirmation={() => toggleConfirmationAt(index)}  // Closures?!?!
      />
    ))}
  </ul>
);

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired
};

export default GuestList;
