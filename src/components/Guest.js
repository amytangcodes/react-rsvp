import React from "react";
import PropTypes from "prop-types";
import GuestName from "./GuestName";

const Guest = ({
  name,
  isConfirmed,
  isEditing,
  handleConfirmation,
  handleEditing,
  handleDelete,
  setName
}) => (
  <li>
    <GuestName
      isEditing={isEditing}
      handleNameEdits={event => setName(event.target.value)}
    >
      {name}
    </GuestName>
    <label>
      <input
        type="checkbox"
        checked={isConfirmed}
        onChange={handleConfirmation}
      />
      Confirmed
    </label>

    <button onClick={handleEditing}>
      {isEditing === false ? "Edit" : "Save"}
    </button>

    <button onClick={handleDelete}>remove</button>
  </li>
);

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleEditing: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired
};

export default Guest;
