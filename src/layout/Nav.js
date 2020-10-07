import React from 'react';
import Button from '../components/Button';
import Menu from '../components/menu/Menu';
import './Nav.scss';

const Nav = () => {
  return (
    <div className='Nav'>
      <div className='logo'>
        <img
          src={require('../assets/logo.svg')}
          className='logo-image'
          alt=''
        />
      </div>
      <Menu />
      <div className='nav-button'>
        <Button>Request Invite</Button>
      </div>
    </div>
  );
};

export default Nav;
