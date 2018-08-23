import React from "react";
import PropTypes from "prop-types";

const PendingGuest = ({ name }) => {
  if (name) {
    return (
      <li className="pending">
        <span>
          {name}
        </span>
      </li>
    );
  }
  return null;
};

PendingGuest.propTypes = {
  name: PropTypes.string.isRequired
};

export default PendingGuest;
