import React, { Component } from 'react'
import { TextField } from "@material-ui/core";


class SearchBar extends Component{
    render(){
        return(
            <TextField 
              label='Search...'
              type="text"
              name="searchedText" 
              margin='normal'
              value={this.props.searchedText}
              onChange={this.props.searchValue}
            />
        );
    }
}

export default SearchBar;