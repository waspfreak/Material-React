import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';


const Badge = (props) => {
  const {badgeContent,
         style,
         customCaption,
         isNew,
         isOval,
         BgColor,
         colorText,
         children
         } = props;

  let styleBadge = classnames(
    'badge',
    {'new': isNew},
    {'circle': isOval}
  );

    return (
      <span className={`${styleBadge} ${BgColor} ${colorText}-text`} style={style} data-badge-caption={customCaption}>
        {badgeContent} {children}
      </span>
    )
}

export default Badge;
