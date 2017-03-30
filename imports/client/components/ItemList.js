import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';



export default class ItemList extends Component {
  render() {
    return (
      <li><a className='grey-text text-lighten-3'>{this.props.itemList.text}</a></li>
    );
  }
}
