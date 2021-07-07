import React,{createContext,useState} from 'react';

import dslr from '../assets/dslr.jpg';
import iphone from '../assets/iphone.jpg';
import microphone from '../assets/microphone.jpg';
import headphone from '../assets/headphone.jpg';
import shoes from '../assets/shoes.jpg';
import watch from '../assets/watch.jpg';
import shoes1 from '../assets/shoes.png';
import perfume from '../assets/perfume.jpg';

export const ProductsContext=createContext();

const ProductsContextProvider = (props) => {

    const [products] = useState([
        {id:1,name:'Dslr',price:400, Image:dslr,status:'hot'},
        {id:2,name:'Microphone',price:35, Image:microphone,status:'new'},
        {id:3,name:'Headphone',price:220, Image:headphone,status:'hot'},
        {id:4,name:'FancyShoes',price:70, Image:shoes,status:'hot'},
        {id:5,name:'Rings',price:80, Image:shoes1,status:'new'},
        {id:6,name:'Watch',price:250, Image:watch,status:'new'},
        {id:7,name:'Iphone',price:150, Image:iphone,status:'hot'},
        {id:8,name:'Perfume',price:20, Image:perfume,status:'new'},
    ]);
    return (
        <ProductsContext.Provider value={{products:[...products]}} >
                 {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;
