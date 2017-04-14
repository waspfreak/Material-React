import React, { Component, PropTypes } from 'react';

import ColapseItem from './ColapseItem';


const Colapse = (props) => {
  const ColapseItems = props.items.map((item) => {
    return <ColapseItem key={item.id} item={item}/>
  });
  return(
    <div>
      <ul className="collapsible" data-collapsible="accordion">
        {ColapseItems}
      </ul>
    </div>
  );
};

export default Colapse;
