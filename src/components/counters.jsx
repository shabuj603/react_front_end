import React, { Component } from 'react';
import Counter from './counter';
class counters extends Component {
    state = { 
        counters:[
            {id:1, value:4},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},

        ]
     } 

     handelReset = () => {
        const restCounter =  this.state.counters.map(c => {
             c.value = 0;
             return c;
         })
     }
     1 = counterId => {
         console.log(counterId);
        // console.log("delete element", counterId);
    };
   
    render() { 
        return (
            <React.Fragment>
            {this.state.counters.map(counter => (<Counter key={counter.id}  onDelete={this.deleteElement} value={counter.value} >

            </Counter>))} 
            </React.Fragment>
          

        );
    }


  
}
 
export default counters;