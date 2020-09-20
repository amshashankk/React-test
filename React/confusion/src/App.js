import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">S H A S H A N K</NavbarBrand>
        </div>
      </Navbar>
      <br></br>
      <p>
        <b>Hi this is the new React App</b>
      </p>
    </div>
  );
}

export default App;
