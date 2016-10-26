import React from 'react';
import { Link } from 'react-router'
import logo from '../static/logo.svg';
import './App.css';

const AppHeader = () => (
  <div className="App">
    <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React & Redux Form Wizard</h2>
    </div>
  </div>
);

const App = props => (
  <div>
    <AppHeader />
    <div className="center">
      <ul className="nav">
        <li className="nav"><Link to="/" activeClassName="active home">home</Link></li>
        <li className="nav"><Link to="/wizard/1" activeClassName="active">step 1</Link></li>
        <li className="nav"><Link to="/wizard/2" activeClassName="active">step 2</Link></li>
        <li className="nav"><Link to="/wizard/3" activeClassName="active">step 3</Link></li>
        <li className="nav"><Link to="/wizard/results" activeClassName="active">results</Link></li>
      </ul>
    </div>
    <div>
      {props.children}
    </div>
  </div>
);

export default App;
