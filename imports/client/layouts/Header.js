import React, { Component } from 'react';
import Nav from '../components/Nav';
import Breadcrumbs from '../components/Breadcrumbs';

class Header extends React.Component {

constructor(props){
  super(props);

  this.state =
  {
    nav: [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'Icons', link: '/icons' },
    { id: 3, text: 'Cards', link: '/cards' },
    { id: 4, text: 'Buttons', link: '/buttons' },
    { id: 5, text: 'Badges', link: '/badges' },
    { id: 6, text: 'About', link: '/about' },
    ],
    nav2: [
    { id: 1, text: 'Home2', link: '/' },
    { id: 2, text: 'Icons', link: '/icons' },
    { id: 3, text: 'Cards', link: '/cards' }
    ]
  }

}
render() {
  return(
      <div>
        <header>
          <Nav items={this.state.nav}/>
        </header>
        {/* <div className="container">
          <Breadcrumbs items={this.state.nav2}/>
        </div> */}
      </div>
  );
}


}

export default Header;
