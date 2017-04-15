import React from 'react';
import { Link } from 'react-router';

const BreadcrumbsList = ({item, children}) => {
  //console.log(item);
  return <Link className='breadcrumb' id={item.id} to={item.link}> {item.text}</Link>

};

export default BreadcrumbsList;
