import React from "react";
import PropTypes from "prop-types";
import GuestName from "./GuestName";

const Guest = ({
  name,
  isConfirmed,
  isEditing,
  handleConfirmation,
  handleEditing
}) => (
  <li>
    <GuestName isEditing={isEditing}>{name}</GuestName>
    <label>
      <input
        type="checkbox"
        checked={isConfirmed}
        onChange={handleConfirmation}
      />
      Confirmed
    </label>
    <button onClick={handleEditing}>edit</button>
    <button>remove</button>
  </li>
);

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleEditing: PropTypes.func.isRequired
};

export default Guest;
