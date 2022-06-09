import React, { Component } from 'react';
import LoginPage from './login';
import Dashboard from './Dashboard';
class Conditional_rendering extends Component {
    state = { 
        isLoggedIn: false
     } 
    render() { 
const {isLoggedIn} = this.state


    
        return (
           <div>
             { isLoggedIn ?  <Dashboard /> : <LoginPage /> }
           </div>
        )

    }
}
 
export default Conditional_rendering;