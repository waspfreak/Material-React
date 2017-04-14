import React, { Component } from 'react';
import classnames from 'classnames';

const Button = (props) => {
  const {floating,color,icon,
         positionIcon,txt,link,
         fixed,horizontal,clickToggle,
         floatingIcon, wavesLigh, wavesTeal,
         btn, btnFlat, btnLarge,
         disabled, wavesEffect,children
        } = props;

  let wavesEffectClass = classnames(
    {'waves-effect': wavesEffect},
    {'': disabled}
  );
  let fixedBtn = classnames(
    {'fixed-action-btn': fixed},
    {horizontal: horizontal},
    {'click-to-toggle': clickToggle}
  );
  let waves = classnames(
    {'waves-light': wavesLigh},
    {'waves-teal': wavesTeal}
  );
  let disabledbtn = classnames(
    {'disabled': disabled}
  );
  let typeBtn = classnames(
    {'btn': btn},
    {'btn-flat': btnFlat},
    {'btn-large': btnLarge},
  );

  return(
     <div className={`btn-container ${fixedBtn}`}>
      <a className= {`${wavesEffectClass} ${waves} ${floating} ${typeBtn} ${color} ${disabledbtn}`}href={link}>
        {children}
        {txt}
      </a>

    {floatingIcon ?
     <ul>
      <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
      <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
      <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
      <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
     </ul>
    : null}
    </div>

  )
}

export default Button;
