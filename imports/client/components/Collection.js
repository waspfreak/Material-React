import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import CollectionItemList from './CollectionItemList';


class Collection extends Component {
  

  render(){
  children = this.props.children;
  header = this.props.header;
    return(
          <ul className="collection">
            {header ? <li className="collection-header"><h4>{header}</h4></li> : null }
            {children}
          </ul>
    );
  }
}

export default Collection;
