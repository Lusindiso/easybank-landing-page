import React from 'react';

import Button from '../components/Button';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer-left'>
        <div>
          <img
            src={require('../assets/vectorpaint.svg')}
            className='logo-image'
            alt=''
          />
        </div>
        <div className='bottom-icons'>
          <i className='fab fa-facebook-square fa-lg'></i>
          <i className='fab fa-youtube fa-lg'></i>
          <i className='fab fa-twitter fa-lg'></i>
          <i className='fab fa-pinterest fa-lg'></i>
          <i className='fab fa-instagram fa-lg'></i>
        </div>
      </div>
      <nav className='Footer-nav'>
        <ul className='Footer-nav__list'>
          <li className='list-item'>About Us</li>
          <li className='list-item'>Contact</li>
          <li className='list-item'>Blog</li>
          <li className='list-item'>Careers</li>
          <li className='list-item'>Support</li>
          <li className='list-item'>Privacy Policy</li>
        </ul>
      </nav>
      <div className='Footer-right'>
        <Button>Request Invite</Button>
        <div className='copyright'>© Easybank. All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
