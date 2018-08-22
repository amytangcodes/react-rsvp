import React, { Component } from "react";
import PropTypes from "prop-types";

class NameForm extends Component {
  static propTypes = {
    handleNameInput: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      values: {
        pendingGuest: this.state.pendingGuest
      },
      onSuccess: () =>
        this.setState({
          pendingGuest: ""
        })
    });
  };

  render() {
    const { handleNameInput, pendingGuest } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="pendingGuest"
          placeholder="Invite Someone"
          value={pendingGuest}
          onChange={handleNameInput}
          // onChange={this.handleChange}
        />
        <button type="submit" name="submit" value="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default NameForm;
