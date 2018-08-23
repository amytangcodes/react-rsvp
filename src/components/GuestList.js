import React from "react";
import Guest from "./Guest";
import PendingGuest from "./PendingGuest";
import PropTypes from "prop-types";

const GuestList = ({
  guests,
  pendingGuest,
  toggleConfirmation,
  toggleEditing,
  handleDelete,
  setName,
  isFiltered,
  id
}) => (
  <ul>
    <PendingGuest name={pendingGuest} />
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
          handleConfirmation={() => toggleConfirmation(guest.id)}
          handleEditing={() => toggleEditing(guest.id)}
          handleDelete={() => handleDelete(guest.id)}
          setName={text => setName(text, guest.id)}
        />
    ))}
  </ul>
);

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired
};

export default GuestList;
