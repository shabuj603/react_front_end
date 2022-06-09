import React, { Component } from 'react';
import AddProduct from './product/add';
import Data  from '../data.json';


import { v4 as uuidv4 } from 'uuid';
class About  extends Component {
 
    state = {  } 
  
    render() { 
    // let items = []
    // for (let i = 0; i < Data.length; i++) {
    //     items.push(<AddProduct titleText={Data[i].title} description={Data[ i].description} serial ="this is serial" />);
        
    // }
    // items = Data.map((item, index)=> <AddProduct  key={index} titleText={item.title} description={item.description} serial ={item.serial} />)


        return (
            
            <div>
           {Data.map((item)=> <AddProduct  key={uuidv4()} titleText={item.title} description={item.description} serial ={item.serial} address={item.address.map((adres, index) => <div key={index}> 
               <p>{adres.house}</p><p>{adres.Office}</p><p>{adres.phone}</p>
               
               
               </div>)} />)}
            </div>
        );
    }
}
 
export default About ;