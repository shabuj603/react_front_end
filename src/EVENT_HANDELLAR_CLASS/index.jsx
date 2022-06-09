import React, { Component } from 'react';
import HOOK_USE_STATE from './../HOOK_USE_STATE/index';
class EVENT_HANDELLAR_CLASS extends Component {
    state = { 
        oneChange: '',  
        count: 0,   
     } 

    onChangeFunctio =  (e) => {
        this.setState({
            oneChange: e.target.value
        }, () =>{
            console.log(this.state.oneChange);
        })       
    }
    onClickIncrement(){
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() { 
        return (
         <div>
             <input type="text" onChange={this.onChangeFunctio} />
             <input type="button" value="+" onClick={this.onClickIncrement.bind(this)}/>
             <p>{this.state.oneChange} {this.state.count}</p>

             <p> <HOOK_USE_STATE /></p>
         </div>
        );
    }
}
 
export default EVENT_HANDELLAR_CLASS;