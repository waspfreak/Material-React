import React from 'react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import { Link } from 'react-router';

import Row    from '../components/Row';
import Col    from '../components/Col';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Title  from '../components/Title';

const MainLayout = ({children}) => {
  return (
    <div>
      <Header/>
      <Row>
          <Col s={12} m={4} l={3}  className=''>
              Menu
          </Col>

          <Col s={12} m={8} l={9}  className=''>
              {children}
          </Col>
      </Row>
      <Footer/>
    </div>


  )
}
export default MainLayout;
