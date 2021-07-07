import {Link} from 'react-router-dom';
import React ,{useContext} from 'react';
import {CartContext} from '../Global/CartContext';


const Navbar=()=>{
    const {qty}= useContext (CartContext);
    return (
        <>
    
<div class="navbar navbar-expand-md bgg  sticky-top navbarExtra">
    <div class="container-fluid">
   
            <Link class="navbar-brand navbarExtra " to="/">
                UsamaExpress
            </Link>

            <ul class="navbar-nav  ml-auto">
                <li class="nav-item">
                  <Link  to="/cart">
                       <span className="shoppingCart">
                             <i className="fas fa-cart-plus"></i>
                             <span className="cartCount">{qty}</span>
                       </span>
                 </Link>
                </li>
            </ul>
    </div>
</div>





        </>
    );
}

export default Navbar;