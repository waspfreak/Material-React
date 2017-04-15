import React, { Component } from 'react';

import Row from '../components/Row';
import Col from '../components/Col';
import Title from '../components/Title';
import Button from '../components/Button';

const Page = () =>
  <main>
    <Row>
        <Col s={12} m={4} l={3}  className=''>
            left
        </Col>
        <Col s={12} m={8} l={9}  className=''>
          <Title className='light'
            title='About'
            subtitle='Learn about the Material Design and our Project Team'
          />
        </Col>
    </Row>
  </main>

export default Page;
