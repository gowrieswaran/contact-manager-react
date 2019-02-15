import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "johndoe@gmail.com",
        phone: "111-111-1111"
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "janedoe@gmail.com",
        phone: "222-222-2222"
      },
      {
        id: 3,
        name: "Sarah Doe",
        email: "sarahdoe@gmail.com",
        phone: "333-333-3333"
      }
    ]
  };

  onDeleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  };
  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.onDeleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
