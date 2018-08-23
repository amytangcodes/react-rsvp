import React, { Component } from "react";
import "./Style.css";
import Header from "./components/Header";
import GuestList from "./components/GuestList";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    title: "RSVP",
    isFiltered: false,
    pendingGuest: "",
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

  toggleEditingAt = index => this.toggleGuestPropertyAt("isEditing", index);

  removeGuestAt = index => {
    console.log(index);
    const { guests } = this.state;
    this.setState({ 
      guests: [
        ...guests.slice(0, index),
        ...guests.slice(index + 1)
      ] 
    });
  };

  setNameAt = (name, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });
  };

  toggleFilter = () => this.setState({ isFiltered: !this.state.isFiltered });

  handleNameChange = e => {
    this.setState({ pendingGuest: e.target.value });
  };
    
  newGuestSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuest: ""
    });
  };

  getTotalInvited = () => this.state.guests.length;
  getPendingGuests = () => this.state.guests.filter( guest => guest.isConfirmed === false ).length;

  // another way:
  // getAttendingGuests = () => this.state.guests.reduce(
  //   (total, guest) => guest.isConfirmed ? total + 1 : total,
  //   0
  // );
  

  render() {
    const { title, guests, pendingGuest } = this.state;
    const totalInvited = this.getTotalInvited();
    const numUnconfirmed = this.getPendingGuests();
    const numAttending = totalInvited - numUnconfirmed;

    return (
      <div className="App">
        <Header
          title={title}
          pendingGuest={pendingGuest}
          handleNameChange={this.handleNameChange}
          newGuestSubmitHandler={this.newGuestSubmitHandler}
        />
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered}
              />{" "}
              Hide those who haven't responded
            </label>
          </div>
          <Counter 
            totalInvited={totalInvited}
            numUnconfirmed={numUnconfirmed} 
            numAttending={numAttending} 
          />
          <GuestList
            guests={guests}
            pendingGuest={pendingGuest}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            handleDelete={this.removeGuestAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
          />
        </div>
      </div>
    );
  }
}

export default App;
