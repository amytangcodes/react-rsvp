import React, { Component } from "react";
import "./Style.css";
import Header from "./components/Header";
import GuestList from "./components/GuestList";
import Counter from "./components/Counter";
import ConfirmedFilter from "./components/ConfirmedFilter";

class App extends Component {
  state = {
    title: "RSVP",
    isFiltered: false,
    pendingGuest: "",
    guests: []
  };

  lastGuestId = 0;
  
  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  }

  // Toggle confirmed at the specified index to change
  toggleGuestProperty = (property, id) => {
    this.setState({
      guests: this.state.guests.map(guest => {
        // Make a change ONLY if the index matches the index to change
        if (id === guest.id) {
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

  toggleConfirmation = id =>
    this.toggleGuestProperty("isConfirmed", id);

  toggleEditing = id => 
    this.toggleGuestProperty("isEditing", id);

  removeGuest = id => {
    const { guests } = this.state;
    this.setState({ guests: guests.filter(guest => id !== guest.id) });
  };

  setName = (name, id) => {
    this.setState({
      guests: this.state.guests.map(guest => {
        if (id === guest.id) {
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
    const id = this.newGuestId();
    // console.log("New guest id is: ", this.newGuestId());
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id
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
  // );]

  render() {
    const { title, guests, pendingGuest } = this.state;
    const totalInvited = this.getTotalInvited();
    const numUnconfirmed = this.getPendingGuests();
    const numAttending = totalInvited - numUnconfirmed;
    
    console.log("New Guest Id:", this.newGuestId());
    // console.log("New Guest Submit Handler:", this.newGuestSubmitHandler());

    return (
      <div className="App">
        <Header
          title={title}
          pendingGuest={pendingGuest}
          handleNameChange={this.handleNameChange}
          newGuestSubmitHandler={this.newGuestSubmitHandler}
        />
        <div className="main">
          <ConfirmedFilter 
            toggleFilter={this.toggleFilter}
            isFiltered={this.state.isFiltered}
          />
          <Counter 
            totalInvited={totalInvited}
            numUnconfirmed={numUnconfirmed} 
            numAttending={numAttending} 
          />
          <GuestList
            guests={guests}
            pendingGuest={pendingGuest}
            toggleConfirmation={this.toggleConfirmation}
            toggleEditing={this.toggleEditing}
            handleDelete={this.removeGuest}
            setName={this.setName}
            isFiltered={this.state.isFiltered}
          />
        </div>
      </div>
    );
  }
}

export default App;
