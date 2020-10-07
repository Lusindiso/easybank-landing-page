import React from 'react';
import './Button.scss';

const Button = props => {
  return <span className='button'>{props.children}</span>;
};

export default Button;
