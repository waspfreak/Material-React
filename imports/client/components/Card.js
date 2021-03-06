import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Row from '../components/Row';
import Col from '../components/Col';

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
         numColLarge,
         colorText,
         imgTitle,
         srcImg,
         icon,
         btnSize,
         btnColor,
         btnPosition,
         horizontal,
         children
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
    <Row>

        <div className={`${col} m${numCol} l${numColLarge}`}>
          <div className={`card ${HorizontalCardClass} ${BgColor} ${ExtraBg}`}>

            <div className={imgCardClass}>
              <img src={srcImg}/>
              {imgTitle ?  <span className="card-title">{imgTitle}</span> : null}

              <a className={`btn-floating ${btnSize} halfway-fab waves-effect waves-light ${btnPosition} ${btnColor} ${showIcon}`}>
                {children}
                {/* <i className="material-icons">{icon}</i> */}
              </a>
            </div>

            <div className={HorizontalCardContainer}>
              <div className={`card-content ${colorText}-text`}>
                {Title ?  <span className="card-title activator">{Title}
                            {children}
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
      </Row>
  )
}


export default Card;
