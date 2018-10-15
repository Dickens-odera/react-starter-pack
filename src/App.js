import React, { Component } from 'react';
import './App.css';
//import Members from './ContactForm/members';
import Header from './ContactForm/headers';
import Contact from './ContactForm/Contact.jsx';

//react-redux libraries

//import {Provider} from 'react-redux';
//import Info from './ContactForm/info';
//import Footer from './ContactForm/Footer';

//const store = createStore(()=> [], {}, applyMiddleware());
class App extends Component {
  render() {
    return (
      //<Provider store = {store}>     
<div className="App">
      <Header />
        <Contact />
      </div>
      //</Provider>
    );
  }
}

export default App;
