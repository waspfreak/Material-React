import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import ItemList from './ItemList';

class List extends Component {

  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  renderTasks() {
    return this.getTasks().map((itemList) => (
      <ItemList key={itemList._id} itemList={itemList} />
    ));
  }

  render() {
    return (
      <div className="container">
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

export default List;
