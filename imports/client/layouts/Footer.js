import React, { Component, PropTypes } from 'react';

import List from '../components/List';

class Footer extends React.Component {
  constructor(props){
    super(props);

    this.state = { items: [
      { id: 1, text: 'This is task 1' },
      { id: 2, text: 'This is task 2' },
      { id: 3, text: 'This is task 3' },
    ] };
  }

  render() {
    return <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <List items={this.state.items} />
          </div>
        </div>

      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2014 Copyright Text
        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
  }
}

export default Footer;
