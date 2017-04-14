import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';


const Icon = (props) => {
    const {icon, sizeIcon, color, left, right} = props;

    let positionIcon = classnames(
      {'left': left},
      {'right': right}
    );

    return (
          <i className={`${sizeIcon} material-icons icon ${positionIcon} ${color}-text`}>{icon}</i>
    )
}

export default Icon;
