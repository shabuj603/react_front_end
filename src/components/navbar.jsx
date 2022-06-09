import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';
import Dashboard from './dashoboard';
class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar w/ text</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink  to="/" activestyle={{
    fontWeight: "bold",
    color: "red"
  }}>Home </NavLink >
      </li>
      <li className="nav-item">
        <NavLink to="/about" activestyle={{
    fontWeight: "bold",
    color: "red"
  }}>About</NavLink >
      </li>
      <li className="nav-item">
        <NavLink  to="/team" activestyle={{
    fontWeight: "bold",
    color: "red"
  }}>Team</NavLink >
      </li>
      <li className="nav-item">
        <NavLink  to="/post/js" activestyle={{
    fontWeight: "bold",
    color: "red"
  }}>React</NavLink >
      </li>
      <li className="nav-item">
        <NavLink  to="/dashboard/user" activestyle={{
    fontWeight: "bold",
    color: "red"
  }}>Dashboard</NavLink >
      </li>
    </ul>
    <span className="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>
        );
    }
}
 
export default Navbar;