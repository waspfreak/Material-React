import React from 'react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import { Link } from 'react-router';

import NavTop from '../components/NavTop';
import Footer from '../layouts/Footer';

const MainLayout = ({children}) => {
  return (
    <div className='row'>
      <header>
        <NavTop/>
      </header>

      <div className='container'>
        {children}
      </div>
    <Footer/>

    </div>
  )
}
export default MainLayout;
