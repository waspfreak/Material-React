import React, { Component } from 'react';


// class ColapseItem extends Component {
//   render() {
//     return (
//       <li>{this.props.itemList.text}</li>
//     );
//   }
// }

const ColapseContainer = (props) => {
  return(
    <div className='row'>
      <ul className="collapsible" data-collapsible="accordion">
        <li>
          <div className="collapsible-header">
            <span className="new badge">4</span>
            <i className="material-icons">filter_drama</i>First
          </div>
            <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
        </li>
        <li>
          <div className="collapsible-header">
            <span className="new badge red " data-badge-caption="custom caption">1</span>
            <i className="material-icons">place</i>Second
          </div>
            <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
        </li>
      </ul>
    </div>

  )
}

export default ColapseContainer;
