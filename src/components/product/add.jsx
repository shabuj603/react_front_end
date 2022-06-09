import React, { Component } from 'react';


class AddProduct extends Component {
    state = {  } 

    render(props) {      
        return (
            <div style={{ backgroundColor: 'red'}} >
                <h1>{this.props.titleText}</h1>
                <h1>{this.props.description} </h1> 
                 <h1>{this.props.serial}</h1>
                 <p>{this.props.address}</p>
            </div>
        );
    }
}
 
export default AddProduct;