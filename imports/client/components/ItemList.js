import React from 'react';

const ItemList = ({item}) => {
  //console.log(item);
  //const imageURL = video.snippet.thumbnails.default.url
  // const video = props.video;

  return <li className="" id={item.id}>
            {item.text}
          </li>
};

export default ItemList;
