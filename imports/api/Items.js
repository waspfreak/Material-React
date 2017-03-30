import { Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';


const Items = new Mongo.Collection('items');

const ItemSchema = new SimpleSchema({
  text: String,
  value: SimpleSchema.Integer,
});

const ItemsSchema = new SimpleSchema({
  itemOne: ItemSchema,
  itemTwo: ItemSchema,
  lastUpdated: {
    type: Date,
    optional: true
  }
});

Items.attachSchema(ItemsSchema);

if (Meteor.isServer){

  Meteor.publish('allItems', function(){
    return Items.find({}, {
      limit: 50,
      sort: {lastUpdated: 1}
    });
  });

  Meteor.methods({
    insertNewItem(itemOne, itemTwo) {
      // check(itemOne, String);
      // check(itemTwo, String);
      Items.insert({
        itemOne:{
          text: itemOne,
          value: 0,
        },
        itemTwo: {
          text: itemTwo,
          value: 0,
        }
      });
    },
    voteOneItem(item, position){
      let lastUpdated = new Date();

      if(Meteor.userId()){
        if(position === 'itemOne'){
          Items.update(item._id,{
            $inc:{
              'itemOne.value': 1
            },
            $set: {
              lastUpdated
            }

          })
        }else{
          Items.update(item._id,{
            $inc:{
              'itemTwo.value': 1
            },
            $set: {
              lastUpdated
            }
          })
        }
      }
    }
  });


}


export default Items;
