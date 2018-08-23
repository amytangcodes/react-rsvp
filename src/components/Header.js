import React, { Component } from "react";
import PropTypes from "prop-types";
import GuestNameForm from "./GuestNameForm";

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    handleNameChange: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
  };

  render() {
    const { title, handleNameChange, pendingGuest, newGuestSubmitHandler } = this.props;

    return (
      <header>
        <h1>{title}</h1>
        <GuestNameForm 
          pendingGuest={pendingGuest}
          handleNameChange={handleNameChange}
          newGuestSubmitHandler={newGuestSubmitHandler}
        />
      </header>
    );
  }
}

export default Header;
