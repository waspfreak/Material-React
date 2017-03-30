import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { autobind } from 'core-decorators';

import Items from '../api/Items';
import Item from './Item';

@autobind

 class App extends Component{
  addItems(event){
    event.preventDefault();
    const itemOne = this.refs.itemOne.value.trim();
    const itemTwo = this.refs.itemTwo.value.trim();
    if(itemOne != '' && itemTwo != ''){
      Meteor.call('insertNewItem', itemOne, itemTwo, (err, res) => {
        if(!err){
          this.refs.itemOne.value = '';
          this.refs.itemTwo.value = '';
        }
      });
    }
  }

  showAll(){
    /*toggle show all or 1 vote*/
    if(this.props.showAll){
      Session.set('showAll', false);
    }else{
      Session.set('showAll', true);
    }
  }

  render(){
    if(!this.props.ready){
       return <div>Loading</div>
    }
    return(

        <main>
          <div className="row">
            <form className="new-items" onSubmit={this.addItems}>
              <input className="col s6" type="text" ref="itemOne" placeholder="Add Vote 1"/>
              <input className="col s6" type="text" ref="itemTwo" placeholder="Add Vote 2"/>

              <div className='row'>
                <div className="col s3">
                  <button type="submit" className="waves-effect waves-light btn red">Add Items</button>
                </div>
                <div className="col s3">
                  <button className="waves-effect waves-light btn red" onClick={this.showAll}>
                    Show {this.props.showAll ? 'One' : 'All'}
                  </button>
                </div>
              </div>
            </form>
           </div>


          {this.props.items.map((item) => {
            return <Item item={item} key={item._id}/>
          })}


        </main>
    );
  }
}

export default createContainer(() => {
  let itemSub = Meteor.subscribe('allItems');
  let userSub = Meteor.subscribe('currentUser');
  let showAll = Session.get('showAll');
  return{
    showAll,
    ready: itemSub.ready(),
    items: Items.find({},{
      limit: showAll ? 50 : 1,
      sort: {lastUpdated: 1 }
    }).fetch()
  }
}, App);
