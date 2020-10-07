import React from 'react';
import './Services.scss';

const Services = props => {
  return (
    <div className='service'>
      <img
        src={require(`../assets/icon-${props.src}.svg`)}
        alt=''
        className='service-icon'
      />
      <h3 className='service-heading'>{props.heading}</h3>
      <p className='service-content'>{props.children}</p>
    </div>
  );
};

export default Services;
