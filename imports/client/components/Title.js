import React, { Component } from 'react';
import classnames from 'classnames';

const Title = (props) => {
  const {title, subtitle, priority} = props;

  const CustomTag = `h${priority}`;

  let hidden = classnames(
    'caption',
    {'is-hidden': !subtitle}
  );
  return(
    <div>
      <CustomTag className={props.className}>
        {title}
      </CustomTag>
      <p className={hidden}>
        { subtitle }
      </p>
    </div>


  )
}

export default Title;
