import React,{createContext,useReducer} from 'react';
import { CartReducer } from './CartReducer';


export const CartContext =createContext();
const CardContextProvider = (props) => {

    const [cart, dispatch] = useReducer( CartReducer, {shoppingCart:[],totalPrice:0,qty:0});

    return (
        
           <CartContext.Provider value={{...cart,dispatch}}>
               {props.children}
          </CartContext.Provider> 
    
    )
}

export default CardContextProvider;
