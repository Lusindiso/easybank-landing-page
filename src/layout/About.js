import React from 'react';
import Services from '../components/Services';
import './About.scss';

const About = () => {
  return (
    <div className='About'>
      <h2 className='secondary-heading'>Why choose Easybank?</h2>
      <p className='content'>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div className='services'>
        <Services src='online' heading='Online Banking'>
          Our modern web and mobile applications allow you to keep track of your
          finances wherever you are in the world.
        </Services>
        <Services src='budgeting' heading='Simple Budgeting'>
          See exactly where your money goes each month. Receive notifications
          when you’re close to hitting your limits.
        </Services>
        <Services src='onboarding' heading='Fast Onboarding'>
          We don’t do branches. Open your account in minutes online and start
          taking control of your finances right away.
        </Services>
        <Services src='api' heading='Open API'>
          Manage your savings, investments, pension, and much more from one
          account. Tracking your money has never been easier.
        </Services>
      </div>
    </div>
  );
};

export default About;
