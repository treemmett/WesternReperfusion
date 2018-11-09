import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Page.css';

export default ({ children }) => (
  <React.Fragment>
    <Header/>

    { children }

    <Footer/>
  </React.Fragment>
)