import React, { Component } from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';

class App extends Component {
  render() {
    return (
      <nav className='navbar bg-primary'>
        <NavBar /*>title='Github Finder' icon='fab fa-github'*/ />
      </nav>
    );
  }
}

export default App;
