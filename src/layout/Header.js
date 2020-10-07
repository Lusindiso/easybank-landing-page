import React from 'react';
import Button from '../components/Button';
import './Header.scss';

const Header = () => {
  return (
    <header className='Header'>
      <div className='heading'>
        <h1 className='heading__title'>Next generation digital banking</h1>
        <p className='heading__content'>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button>Request Invite</Button>
      </div>
      <div className='illustration'>
        <img
          src={require('../assets/image-mockups.png')}
          alt=''
          class='illustration-image__top'
        />
      </div>
    </header>
  );
};

export default Header;
