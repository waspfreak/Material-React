import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';


class CollectionItemList extends Component {

  render(){
    const{item, children} = this.props;

    const avatar = classnames(
      {'avatar': true}
    );

    return(
      <li className={`collection-item ${item.avatar}`} id={item.id}>
        <div>
          {item.avatar ? <span className="title">{item.title}</span> : null}
          <p>{item.text}</p>
          {item.href ? <a className="secondary-content" href={item.href}>{item.icon ? <i className="material-icons">{item.icon}</i> : null }</a>
          : <span className="secondary-content">{item.icon ? <i className="material-icons">{item.icon}</i> : null }</span> }
        </div>
      </li>
    );

  }
}

CollectionItemList.propTypes = {
  children: PropTypes.node,
  link: PropTypes.node
};

export default CollectionItemList;
