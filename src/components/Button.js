import React from 'react';
import './Button.scss';

const Button = props => {
  return (
    <a href='#' className='button'>
      {props.children}
    </a>
  );
};

export default Button;
