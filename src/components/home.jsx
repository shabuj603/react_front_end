import React, { Component } from 'react';
import SearchProduct from './product/search';
class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div>
              <SearchProduct />
              <SearchProduct />           
            </div>
        );
    }
}
 
export default Home;