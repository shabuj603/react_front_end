import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import Pagination from './components/pagination';
// import {Redirect} from 'react-router-dom';

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Navigate,
} from "react-router-dom";
import React from 'react';
import Home from './components/home';
import About from './components/about';
import Team from './components/team';
import Post from './components/post';
import Dashboard from './components/dashoboard';
import Error from './components/error';
import Conditional_rendering from './CONDETIONAL_RENDARING/index';


function App() {
  const isLoggedIn  = true;
  return (
    <React.Fragment>
      <Conditional_rendering />
     
      <Router>

      
      <NavBar/>
      
    <Routes> 
      <Route exact path="/" element={<Home />} />
      <Route exact  path="/about" element={<About />} />
      <Route exact  path="/team" element={<Team />} />
      <Route exact  path="/post/:category" element={<Post />} /> 
      <Route  exact  path="/dashboard/:admin" element={<Dashboard />} />   

      {/* <Route path="/login">
      {isLoggedIn ? <Redirect to="/dashboard" /> : <Home />}       
      </Route>      */}

      <Route exact  element={<Error />} />
  
    </Routes>
  </Router>

    </React.Fragment>

 
  );
}

export default App;
