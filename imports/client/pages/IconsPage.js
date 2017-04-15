import React, { Component } from 'react';

import Title from '../components/Title';
import Icon from '../components/Icon';

import classnames from 'classnames';


const IconsPage = () =>
  <main>
    <Title priority='2' className='light' title='Icons'
          subtitle='We have included 740 Material Design Icons courtesy of Google. You can download them directly from the Material Design specs.'/>


    <div className='row'>
      <div className='center-align'>
        <div className='col s3'>
          <Icon icon='insert_chart' sizeIcon='tiny' color='green'/>
          <p>Tiny</p>
        </div>
        <div className='col s3'>
          <Icon icon='insert_chart' sizeIcon='small' color='teal'/>
          <p>Small</p>
        </div>
        <div className='col s3'>
          <Icon icon='insert_chart' sizeIcon='medium' color='deep-purple'/>
          <p>Medium</p>
        </div>
        <div className='col s3'>
          <Icon icon='insert_chart' sizeIcon='large' color='red'/>
          <p>Large</p>
        </div>
      </div>



    </div>

  </main>

export default IconsPage;
