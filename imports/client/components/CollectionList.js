import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import CollectionItemList from './CollectionItemList';

const CollectionList = (props) => {
  const ColItemsList = props.items.map((item) => {
    return <CollectionItemList key={item.id} item={item}/>
  });
  return <section>{ColItemsList}</section>

};

export default CollectionList;
