import React from 'react';
import BreadcrumbsItem from './BreadcrumbsItem';

const Breadcrumbs = (props) => {
  const BreadcrumbItem = props.items.map((item) => {
    return <BreadcrumbsItem key={item.id} item={item}/>
  });
  return(
      <nav>
        <div className="nav-wrapper">
          <div className="col s12">
            {BreadcrumbItem}
          </div>
        </div>
      </nav>
  );
};

export default Breadcrumbs;
