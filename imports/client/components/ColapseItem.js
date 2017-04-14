import React, { Component } from 'react';

const ColapseItem = ({item}) => {

  return <li id={item.id}>
          <div className="collapsible-header"><i className="material-icons">{item.icon}</i>{item.text}</div>
          <div className="collapsible-body"><span>{item.body}</span></div>
        </li>
};

export default ColapseItem;
