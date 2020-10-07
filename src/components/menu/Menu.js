import React from 'react';
import './Menu.scss';

const toggleMenuClasses = () => {
  let hamburgerIcon = document.getElementById('burger');
  hamburgerIcon.classList.toggle('is-active');
  let mobileMenu = document.getElementById('menu-container');
  mobileMenu.classList.toggle('opened');
};
const Menu = () => {
  return (
    <nav className='navigation'>
      <div className='burger' id='burger' onClick={toggleMenuClasses}>
        <div className='lines'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </div>

      <ul className='navigation-list' id='menu-container'>
        <li className='navigation-list__item'>Home</li>
        <li className='navigation-list__item'>About</li>
        <li className='navigation-list__item'>Contact</li>
        <li className='navigation-list__item'>Blog</li>
        <li className='navigation-list__item'>Careers</li>
      </ul>
    </nav>
  );
};

export default Menu;
