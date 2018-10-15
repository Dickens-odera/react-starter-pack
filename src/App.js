import React, { Component } from 'react';
import './App.css';
//import Members from './ContactForm/members';
import Header from './ContactForm/headers';
import Contact from './ContactForm/Contact';
//import Info from './ContactForm/info';
//import Footer from './ContactForm/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <Contact />
      </div>
    );
  }
}

export default App;
