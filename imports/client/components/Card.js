import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';


const Card = (props) => {
  const {BgColor,
         ExtraBg,
         Title,
         Content,
         textLink,
         urlLink,
         textLink2,
         urlLink2,
         numCol,
         colorText,
         imgTitle,
         srcImg,
         icon,
         btnSize,
         btnColor,
         btnPosition,
         horizontal
        }= props;

  let col = classnames(
    'col',
    's12',
  );
  let imgCardClass = classnames(
    'card-image',
    {'is-hidden': !srcImg}
  );
  let showIcon = classnames(
    {'is-hidden': !icon}
  );
  let HorizontalCardClass = classnames(
    {'horizontal': horizontal}
  );
  let HorizontalCardContainer = classnames(
    {'card-stacked': horizontal}
  );
  // let HorizontalCardContainer = classnames(
  //   {'card-stacked': horizontal}
  // );

  return(
    <div className="row">
        <div className={`${col} m${numCol}`}>
          <div className={`card ${HorizontalCardClass} ${BgColor} ${ExtraBg}`}>

            <div className={imgCardClass}>
              <img src={srcImg}/>
              {imgTitle ?  <span className="card-title">{imgTitle}</span> : null}

              <a className={`btn-floating ${btnSize} halfway-fab waves-effect waves-light ${btnPosition} ${btnColor} ${showIcon}`}>
                <i className="material-icons">{icon}</i>
              </a>

            </div>

            <div className={HorizontalCardContainer}>
              <div className={`card-content ${colorText}-text`}>
                {Title ?  <span className="card-title activator">{Title}
                            <i className="material-icons right">more_vert</i>
                          </span> : null}
                {Content ? <p>{Content}</p> : null}
              </div>

              <div className="card-reveal">
                <span className="card-title  grey-text text-darken-4">Card Title
                <i className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>

              <div className="card-action">
                {textLink ? <Link to={urlLink}>{textLink}</Link> : null }
                {textLink2 ? <Link to={urlLink2}>{textLink2}</Link> : null }
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}


export default Card;
