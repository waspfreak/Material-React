import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: ''};
  }


  render(){
    return(
      <div className="input-field">
        <label htmlFor={this.props.searchId}>{this.props.label}</label>
        <input id={this.props.searchId}
               type="text"
               className=""
               value={this.state.term}
               onChange={event => this.setState({ term: event.target.value})}
             />

      </div>
    );
  }
}

export default SearchBar;
