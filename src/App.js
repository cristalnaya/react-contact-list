import React, { Component } from "react";
import "./App.css";
import Contacts from './components/Contacts';
import { Grid } from '@material-ui/core';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      contacts : [],
      searchedText : '',
      name : '',
      email : '',
      dateCreated: '',
      dateModified: '',
      nameError : false,
      emailError : false
    }

  }

  componentDidMount() {
    this.setState({
      contacts : [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@mail.com',
          dateCreated: '8/19/2019'
        },
        {
          id: 2,
          name: 'Jane Doe',
          email: 'jane@gmail.com',
          dateCreated: '8/19/2019'

        },
        {
          id: 3,
          name: 'Jack Sparrow',
          email: 'jack@gmail.com',
          dateCreated: '8/19/2019'
        },
      ]
    });
  }

  searchValue = (e) => {
        this.setState({
            searchedText : e.target.value,
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    addContact = (e) => {
      const { name, email, contacts } = this.state;
        e.preventDefault();
        if(name === '' && email === '') return;

        contacts.push({
            name : name, email : email
        });

        this.checkForErrors(name, email);
   
        this.setState({
            contacts : contacts,
            name : '',
            email : ''     
        });
    }

    deleteContact = (email) => {
      const { contacts } = this.state;
        const filteredContacts = contacts.filter(contact => {
            return contact.email !== email
        });
        this.setState({
            contacts : filteredContacts
        });
    }

    editContact = (email, name) => {
      const { contacts } = this.state;
      const edited = contacts.filter(contact => {
          return contact.email === email || contact.name === name
        });
        this.setState({
            name : edited[0].name,
            email : email,
            dateModified: `Modified: ${new Date().toLocaleDateString()}`
        });
    }

    checkForErrors = (name, email) => {
      // this.state.contacts.map(contact => {
      //       if(contact.name === name){
      //           this.setState({
      //             nameError: true
      //           })
      //       }
      //       if(contact.email === email){
      //           this.setState({
      //             emailError: true
      //           })
      //           return;
      //       }
      //   })
      //   return this.state.nameError || this.state.emailError ? true : false;
    }

  render() {
    const { contacts, searchedText, name, email, nameError, emailError } = this.state;
    const { searchValue, handleChange, editContact, deleteContact, addContact } = this;

    const filteredContacts = contacts.filter(contact => {
        return contact.name.toLowerCase().indexOf(searchedText.toLowerCase()) !== -1
      });

    return (
      <Grid
            className="App"
            mx='auto'
            container
            justify="center"
            >
              <Grid item xs={12} sm={12} md={6}>
                <Contacts 
                  contacts={filteredContacts} 
                  searchValue={searchValue} 
                  searchedText={searchedText}
                  addContact={addContact}
                  handleChange={handleChange}
                  formInputName={name}
                  email={email}
                  editContact={editContact}
                  deleteContact={deleteContact}
                  nameError={nameError}
                  emailError={emailError}
                />
              </Grid>
           </Grid>
    );
  }
}

export default App;
