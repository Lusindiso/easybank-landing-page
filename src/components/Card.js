import React from 'react';
import './Card.scss';

const Card = props => {
  return (
    <div className='card'>
      <img
        src={require(`../assets/image-${props.src}.jpg`)}
        alt=''
        className='card-image'
      />
      <div className='card-content'>
        <span className='card-by'>{props.by}</span>
        <h4 className='card-heading'>{props.heading}</h4>
        <p className='card-paragraph'>{props.children}</p>
      </div>
    </div>
  );
};

export default Card;
