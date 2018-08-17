import React, { Component } from "react";
import "./Style.css";
import Header from "./components/Header";
import GuestList from "./components/GuestList";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    title: "RSVP",
    subtitle: "RSVP App",
    guests: [
      {
        name: "Treasure",
        isConfirmed: false,
        isEditing: false
      },
      {
        name: "Nick",
        isConfirmed: true,
        isEditing: false
      },
      {
        name: "Steven",
        isConfirmed: false,
        isEditing: false
      }
    ]
  };
  
  // Toggle confirmed at the specified index to change
  toggleGuestPropertyAt = (property, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        // Make a change ONLY if the index matches the index to change
        if (index === indexToChange) {
          return {
            // name: guest.name, => Instead of this we do the ..guest
            ...guest, // transfers the keys and values for entire state in one line
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });
  };

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt("isConfirmed", index);

  toggleEditingAt = index => 
    this.toggleGuestPropertyAt("isEditing", index);

  // handleAddGuest = ({ values, onSuccess }) => {
  //   this.setState({
  //     guests: this.state.guests.concat()
  //   })
  // };

  getTotalInvited = () => this.state.guests.length;
  // getAttendingGuests = () =>
  // getUnconfirmedGuests = () =>

  render() {
    const { guests } = this.state;

    return (
      <div className="App">
        <Header title={this.state.title} onSubmit={this.handleAddGuest} />
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who haven't responded
            </label>
          </div>
          <Counter />
          <GuestList
            guests={guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
          />
        </div>
      </div>
    );
  }
}

export default App;
