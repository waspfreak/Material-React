import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';


const Icon = (props) => {
    const {icon, sizeIcon, color} = props;

    return (
          <i className={`${sizeIcon} material-icons ${color}-text`}>{icon}</i>
    )
}

export default Icon;
