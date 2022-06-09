import React from 'react';
import './Header.css';

import logo from '../../assets/yocomic.png';

const Header = () => {
  return (
    <div className='divheader'>
      <header id='header'>
        <a href='#' title='Go to Main'>
          <img id='header-img' src={logo} width='60px' />
        </a>
        <nav id='nav-bar'>
          <a href='#' className='nav-link'>
            About Me
          </a>
          <a
            href='https://www.linkedin.com/vibarcar/'
            target='_blanck'
            className='nav-link'
          >
            Linkedin
          </a>
          <a
            href='https://twitter.com/VinceTrend'
            target='_blanck'
            className='nav-link'
          >
            Twitter
          </a>
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
