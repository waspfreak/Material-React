import React, { Component, PropTypes } from 'react';

import ItemList from './ItemList';

const List = (props) => {
  const ItemsList = props.items.map((item) => {
    return <ItemList key={item.id} item={item}/>
  });
  return(
    <ul className="col-md-4 list-group">
      {ItemsList}
    </ul>
  );
};

export default List;
