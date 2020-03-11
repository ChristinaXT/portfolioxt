import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import ReactGA from 'react-ga';

import Header from './components/header/header';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume/resume';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import mySiteData from './mySiteData';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header mySiteData={mySiteData} />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
