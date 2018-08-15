import React, { Component } from "react";

class NameForm extends Component {
  state = { guestName: "" };

  handleChange = event => {
    this.setState({ guestName: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      values: {
        guestName: this.state.guestName
      },
      onSuccess: () =>
        this.setState({
          guestName: ""
        })
    })
  };

  render() {
    const { guestName } = this.state;
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="guestName"
          placeholder="Invite Someone"
          value={guestName}
          onChange={this.handleChange}
        />
        <button type="submit" name="submit" value="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default NameForm;
