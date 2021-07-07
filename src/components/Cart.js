import React,{useContext} from 'react';
import {CartContext} from '../Global/CartContext';
import StripeCheckout from 'react-stripe-checkout';

const Cart = () => {
    const {shoppingCart,totalPrice,qty,dispatch}=useContext(CartContext);
    const handleToken=(token)=>{

    }
    return (
        <div className="cart-container"> 
            <div className="cart-details" style={{marginTop:'100px'}}>
                  {shoppingCart.length>0 ?
                  shoppingCart.map(cart=>(
                      <div className="cart" key={cart.id}>
                          <span className="cart-image"><img src={cart.Image} alt="not found"></img></span>
                          <span className="cart-product-name">{cart.name}</span>
                          <span className="cart-product-price">${cart.price}.00</span>
                          <span className="inc" onClick={()=>dispatch({type:'INC',id:cart.id,cart:cart})}><i className="fas fa-plus"></i></span>
                          <span className="product-quantity">{cart.qty}</span>
                          <span className="dec" onClick={()=>dispatch({type:'DEC',id:cart.id,cart:cart})}><i class="fas fa-minus"></i></span>
                          <span className="product-total-price">${cart.price * cart.qty}.00</span>
                          <span className="delete-product" onClick={()=>dispatch({type:'DELETE',id:cart.id,cart:cart})} ><i class="fas fa-trash-alt"></i> </span>

                      </div>
                  )  )
                   : 'Sorry your Cart is currently Empty'}
            </div>
            {shoppingCart.length > 0 ? <div className="cart-summary">
                <div className="summary">
                    <h3>Cart Summary</h3>
                    <div className="total-items">
                       <div className="items">Total Items</div>
                       <div className="items-count">{qty}</div>
                    </div>
                    <div className="total-price-section">
                       <div className="just-title">Total Price</div>
                       <div className="items-price">$ {totalPrice} .00</div>
                    </div>
                    <div className="stripe-section">
                           <StripeCheckout
                            stripeKey="pk_test_51J8G2cLqGg6t6NVojrfEPWpwqQBywVtJ4X12e723hv8mZPZRktWSEiAbOOI6JWNj8QPdJKodkmHWgGeGEMGdlxEm004oVfMcp1"
                             token={handleToken}
                             billingAddress
                             shippingAddress
                             amount={totalPrice * 100}
                             name="All Products"
                             >

                           </StripeCheckout>
                    </div>
                </div>
            </div> : ''}
                 </div>
    )
}

export default Cart;
