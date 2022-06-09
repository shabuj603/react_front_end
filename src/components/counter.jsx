import React, { Component } from 'react';

import SearchProduct from './product/search';
class counter extends Component {
    state = { 
        count:this.props.value,
        number:0,
        brand:'BMW',
        model:2016,     

     } 
   handelIncrement = () => {
       this.setState({number: this.state.number + 1});  
   }
   handelDecriment = () => {
       this.setState({number: this.state.number -1 });
   }
   handelResatNumber = ( ) =>{
    this.setState({
       number: this.state.number = 0
    });
   }
    render() {    
     

        return (
            <React.Fragment>   
            <p className={this.getbadge()}>{this.formatCount}</p>
            <button  className='btn btn-info m-2' onClick={this.handelIncrement}>+</button>
            <button  className='btn btn-info m-2' onClick={this.handelDecriment}>-</button>
            <span  className={this.getbadge()} >{this.formatCount()}</span>
            <button className="btn btn-success m-2"  onClick={this.handelResatNumber}>Resat</button>
          
            <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger">Delete</button>   
            </React.Fragment>
        );
    }

disable(){
    const {number} = this.state;
    this.setState({       
     number : 0 ? true : false,
    })
    
}

getbadge(){
    let spnbtn = "badge m-2 btn-";
    spnbtn += this.state.number === 0 ? 'warning': 'primary';
    return spnbtn;
}
     formatCount() {
         const {number} = this.state;
       return number === 0 ? 'zero' : number;
    }
}
 
export default counter;