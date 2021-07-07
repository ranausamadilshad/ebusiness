import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const Footer=()=>{
    return(
      
     <div class="container-fluid footer padding">
        <div class="row text-center padding">
            <div class="col-md-4">
                <hr class="light"/>
                <p>03366605864</p>
                <p>usamadilshad11@gmail.com</p>
                <p>607 E Block Sabzazar</p>
                <p>Lahore,Pakistan</p>
            </div>
            <div class="col-md-4">
               <hr class="light"/>
               <h5>Our Hours</h5>
               <hr class="light"/>
               <p>Monday 9am-5pm</p>
               <p>Saturday 9am-4pm</p>
               <p>Sunday<bold>Close</bold></p>
            </div>
            <div class="col-md-4">
                <hr class="light"/>
                <h5>Our Hours</h5>
                <hr class="light"/>
                <p>City</p>
                <p>State</p>
                <p>00000000</p>
            </div>  
            <div class="col-12">
                <hr class="light-100"/>
                <h5>&copy;usamaambarsarya</h5>
            </div> 
        </div>    
    </div>           


      
    );
}

export default Footer;