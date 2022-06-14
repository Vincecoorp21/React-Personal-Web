import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/yocomic.png';

const Header = () => {
  return (
    <div className='divheader'>
      <header id='header'>
        <a href='#' title='Go to Main'>
          <img id='header-img' src={logo} width='60px' />
        </a>
        <nav id='nav-bar'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
          <Link to='/contact' className='nav-link'>
            Contact
          </Link>
          <Link
            to='https://twitter.com/VinceTrend'
            target='_blanck'
            className='nav-link'
          >
            Twitter
          </Link>
        </nav>
      </header>
      {/* <ul>
        <li>
          <a href='#'>About me</a>
        </li>
        <li>
          <a href='#'>Linkedin</a>
        </li>
        <li>
          <a href='#'>Twitter</a>
        </li>
      </ul> */}
    </div>
  );
};
export default Header;
