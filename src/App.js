import React, { Component } from 'react';

import Movies from './components/Movies';
import Header from './components/Header';
// import Search from './components/Search';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header/>
        <div  className="container">
          {/* <Search/> */}
          <div className="movie-list-wrapper">
           <Movies/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
