import React, { Component } from "react";
import NameForm from "./NameForm";

class Header extends Component {
  render() {
    const { title, subtitle, onAddGuest } = this.props;

    return (
      <header>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <NameForm onSubmit={onAddGuest} />
      </header>
    );
  }
}

export default Header;
