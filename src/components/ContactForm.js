import React, { Component } from 'react'
import {Button, TextField, FormGroup} from "@material-ui/core";

class ContactForm extends Component{
    render(){
      const { name, handleChange, nameError, email, emailError, addContact } = this.props;
        return(
            <form>
              <FormGroup>
                  <TextField
                    type="text" name="name" 
                    id="name" 
                    label='Name'
                    margin='normal'
                    value={name} 
                    onChange={handleChange}
                    required
                  />
                  {nameError ? 'error' : ''}
              </FormGroup>
              <FormGroup>
                <TextField 
                  label='Email'
                  type="email" 
                  name="email" 
                  margin='normal'
                  value={email}
                  onChange={handleChange}
                />
                {emailError ? 'The email already exists!' : ''}    
              </FormGroup>
              <FormGroup>
                <Button
                  onClick={addContact}
                  variant="contained"
                  color="primary"
                  className="add-button"
                  >
                    Add Contact
                </Button>
              </FormGroup>
            </form>
        );
    }
}

export default ContactForm;