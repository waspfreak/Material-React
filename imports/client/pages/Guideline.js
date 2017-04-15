import React, { Component } from 'react';

import Title from '../components/Title';
import Button from '../components/Button';
import Colapse from '../components/Colapse';
import Icon from '../components/Icon';
import Badge from '../components/Badges';
import List from '../components/List';
import CheckboxContainer from '../components/Checkbox';
import SearchBar from '../components/Search';
import classnames from 'classnames';



class Guideline extends React.Component {

constructor(props){
  super(props);

  this.state =
  {
    lists: [
    { id: 1, text: 'This is task item 1', body: 'This is body', icon: 'filter_drama' },
    { id: 2, text: 'This is task item 2', body: 'This is body2', icon: 'filter_drama' },
    { id: 3, text: 'This is task item 3', body: 'This is body3', icon: 'filter_drama' },
    ],
  }

}
render() {
  return(
    <main>
      <Title priority='2' className='' title='Guideline'/>

      <List items={this.state.lists} />
      <Colapse items={this.state.lists}/>


     <SearchBar label="Search"
                searchId="search"
                value="value"
                placeholder="Placeholder"/>



      <div className='row'>

        <div className='col m5 fixed-box'>
          <CheckboxContainer
            label='Label'
            className='filled-in'
            name="my-checkbox"
            checkStyle={{color: '#000', borderColor: 'red' }}/>
        </div>


        <div className='col m5 fixed-box'>
             <Badge style={{top: 40, right: 12}}
                    badgeContent='New Badge'
                    customCaption='caption'
                    isNew
                    BgColor='red'>
              <Icon icon='mic_none' sizeIcon='tiny' color='green'/>
              </Badge>

              <Badge  style={{top: 0, right: 12}}
                      badgeContent='Badge'
                      BgColor='pink'
                      colorText='white'/>

               <Badge  style={{top: 0, right: 100}}
                      badgeContent='1'
                      BgColor='green'
                      colorText='white'
                      isOval>
                <Icon icon='mic_none' sizeIcon='tiny' color='green'/>
                </Badge>
        </div>
      </div>

      <Icon icon='insert_chart' sizeIcon='tiny' color='green'/>
      <Icon icon='insert_chart' sizeIcon='small' color='teal'/>
      <Icon icon='insert_chart' sizeIcon='medium' color='deep-purple'/>
      <Icon icon='insert_chart' sizeIcon='large' color='red'/>

    </main>
  );
}


}

export default Guideline;
