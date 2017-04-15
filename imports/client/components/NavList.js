import React from 'react';
import { Link } from 'react-router';

const NavList = ({item, children}) => {
  //console.log(item);
  return <li id={item.id}>
            <Link to={item.link}> {item.text}</Link>
          </li>
};

export default NavList;
