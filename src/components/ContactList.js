import React from 'react'
import {List, Button, IconButton, ListItem, ListItemText, ListItemSecondaryAction, } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';


const ContactList = ({ contacts, editContact, deleteContact }) => {

      const rows = contacts.map((contact, i) =>
        
          <ListItem key={i} className='list-item'>
              <ListItemText primary={contact.name}></ListItemText>
              <ListItemText primary={contact.email}></ListItemText>
              <ListItemText primary={`Created: ${new Date().toLocaleDateString()}`}></ListItemText>
                <Button 
                  style= {{ marginLeft : '10px', outline: 'none'}}
                  color="primary"
                  onClick={editContact.bind(this, contact.email, contact.name)}
                  >
                  edit
                </Button>
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    variant="extended"
                    color="secondary"
                    style={{marginLeft: '5px'}}
                    onClick={deleteContact.bind(this, contact.email)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            );

      return(
          <List>{rows}</List>
      );
}

export default ContactList;