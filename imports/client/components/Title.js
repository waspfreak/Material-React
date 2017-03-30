import React, { Component } from 'react';
import classnames from 'classnames';

const Title = (props) => {
  const {title, subtitle} = props;
  let hidden = classnames(
    'caption',
    {'is-hidden': !subtitle}
  );
  return(
    <div>
      <h1 className={props.className}>
        {title}
      </h1>
      <p className={hidden}>
        { subtitle }
      </p>
    </div>


  )
}

export default Title;
