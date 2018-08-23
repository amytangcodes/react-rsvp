import React from "react";
import PropTypes from "prop-types";

const Counter = ({ 
  numAttending, 
  numUnconfirmed, 
  totalInvited 
}) => (
  <table className="counter">
    <tbody>
      <tr>
        <td>Attending:</td>
        <td>{numAttending}</td>
      </tr>
      <tr>
        <td>Unconfirmed:</td>
        <td>{numUnconfirmed}</td>
      </tr>
      <tr>
        <td>Total:</td>
        <td>{totalInvited}</td>
      </tr>
    </tbody>
  </table>
);

Counter.propTypes = {
  numAttending: PropTypes.number, 
  numUnconfirmed: PropTypes.number, 
  totalInvited: PropTypes.number
}

export default Counter;
