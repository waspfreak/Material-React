import React, { Component } from 'react';
import { Link } from 'react-router';


const NavTop = (props) => {
  return(
     <nav role='navigation'>
       <div className='nav-wrapper'>
         <a href="#" className="brand-logo center">Logo</a>
         <ul className="left hide-on-med-and-down">
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/icons'>Icons</Link></li>
           <li><Link to='/cards'>Cards</Link></li>
           <li><Link to='/buttons'>Buttons</Link></li>
           <li><Link to='/about'>About</Link></li>
           {/* <li><Link to='/guideline'>Guideline<span className="badge red ">New</span></Link></li> */}
         </ul>
      </div>
     </nav>
  )
}

export default NavTop;
