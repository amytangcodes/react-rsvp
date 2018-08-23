import React from "react";
import PropTypes from "prop-types";

const GuestNameForm = ({
  handleNameChange,
  newGuestSubmitHandler,
  pendingGuest
}) => (
  <form onSubmit={newGuestSubmitHandler}>
    <input
      type="text"
      name="pendingGuest"
      placeholder="Invite Someone"
      value={pendingGuest}
      onChange={handleNameChange}
    />
    <button type="submit" name="submit" value="submit">
      Submit
    </button>
  </form>
);

GuestNameForm.propTypes = {
  handleNameChange: PropTypes.func,
  pendingGuest: PropTypes.string,
  newGuestSubmitHandler: PropTypes.func
};

export default GuestNameForm;
