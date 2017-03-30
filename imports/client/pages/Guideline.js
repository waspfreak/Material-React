import React, { Component } from 'react';

import Title from '../components/Title';
import Button from '../components/Button';
import ColapseItem from '../components/Colapse';
import Icon from '../components/Icon';

import data from '../Data/Data.json';



import classnames from 'classnames';

let element = [
  {'name': 'Fresh BBQ meat'}
]

const Guideline = () =>
  <main>
    <Title className='' title='Guideline'/>

    <ColapseItem />


    <Icon icon='insert_chart' sizeIcon='tiny' color='green'/>
    <Icon icon='insert_chart' sizeIcon='small' color='teal'/>
    <Icon icon='insert_chart' sizeIcon='medium' color='deep-purple'/>
    <Icon icon='insert_chart' sizeIcon='large' color='red'/>



  </main>

export default Guideline;
