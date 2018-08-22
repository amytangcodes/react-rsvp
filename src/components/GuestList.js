import React from "react";
import Guest from "./Guest";
import PropTypes from "prop-types";

const GuestList = ({
  guests,
  toggleConfirmationAt,
  toggleEditingAt,
  handleDelete,
  setNameAt,
  isFiltered
}) => (
  <ul>
    {guests
      // run filter if isFiltered is true 
      // or if guest is confirmed
      .filter(guest => !isFiltered || guest.isConfirmed )
      .map((guest, index) => (
        <Guest
          key={index}
          name={guest.name}
          isConfirmed={guest.isConfirmed}
          isEditing={guest.isEditing}
          handleConfirmation={() => toggleConfirmationAt(index)}
          handleEditing={() => toggleEditingAt(index)}
          handleDelete={() => handleDelete(index)}
          setName={text => setNameAt(text, index)}
        />
    ))}
  </ul>
);

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired
};

export default GuestList;
