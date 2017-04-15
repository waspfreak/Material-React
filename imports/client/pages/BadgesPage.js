import React, { Component } from 'react';

import Title from '../components/Title';
import Icon from '../components/Icon';
import Badge from '../components/Badges';

import classnames from 'classnames';


const BadgesPage = () =>
  <main>
    <Title priority='2' className='light' title='Badges'/>


    <div className='row '>
        <div className='col s2 fixed-box'>
           <Badge style={{top: 0, right: 100}} badgeContent='1'
                  BgColor='green' colorText='white' isOval>
             <Icon icon='mic_none' sizeIcon='tiny' color='green'/>
           </Badge>
        </div>
        <div className='col s2 fixed-box'>
          <Badge  style={{top: 0, right: 12}}
                  badgeContent='Badge'
                  BgColor='pink'
                  colorText='white'
            />
        </div>
        <div className='col s3 fixed-box'>
          <Badge  style={{top: 0, right: 12}}
                 badgeContent='New Badge'
                 customCaption='caption'
                 isNew
                 BgColor='red'
           >
             <Icon icon='mic_none' sizeIcon='tiny' color='green'/>
           </Badge>
        </div>
        <div className='col s3 fixed-box'>
          <Badge  style={{top: 0, right: 12}}
                  customCaption='Company Name'
                  colorText='black'
           >
             <Icon icon='star' sizeIcon='tiny' color='purple'/>
           </Badge>
        </div>

    </div>

  </main>

export default BadgesPage;
