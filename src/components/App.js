import React from 'react';

import About from '../layout/About';
import Article from '../layout/Article';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Nav from '../layout/Nav';

import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Header />
      <About />
      <Article />
      <Footer />
    </div>
  );
};

export default App;
