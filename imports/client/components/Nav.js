import React, { Component, PropTypes } from 'react';

import NavList from './NavList';

const Nav = (props) => {
  const NavListItem = props.items.map((item) => {
    return <NavList key={item.id} item={item}/>
  });
  return(
    <nav role='navigation'>
      <ul className="left hide-on-med-and-down">
        {NavListItem}
      </ul>
    </nav>
  );
};

export default Nav;
