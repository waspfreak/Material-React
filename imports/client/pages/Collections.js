import React, { Component } from 'react';

import Row from '../components/Row';
import Col from '../components/Col';
import Title from '../components/Title';
import Icon  from '../components/Icon';
import Badge from '../components/Badges';
import Collection from '../components/Collection';
import CollectionList from '../components/CollectionList';


class Collections extends React.Component {

constructor(props){
  super(props);
  this.state =
  {
    collections: [
    { id: 1,
      text: 'Name 1',
      title: 'This is Title',
      secBody: 'Secondary Line',
      icon: 'filter_drama',
      href: '/about',
      avatar: 'avatar'
    },


    { id: 2, text: 'This is task item 2', body: 'This is body2', icon: 'filter_drama' },
    { id: 3, text: 'This is task item 3', body: 'This is body3' },
    ],
  }
}

render() {
  return(
    <main>
      <Title priority='5' className='' title='Collections'/>
      <Row className='test'>
        <Col s={6} className='grid-example'>
          <Collection header='Header Test'>
            <CollectionList items={this.state.collections}/>
          </Collection>
        </Col>
      </Row>




    </main>
  );
}


}

export default Collections;
