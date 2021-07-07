import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const Social = () => {
    return (
        <div>
   <div className="container-fluid  padding marginsocial" id="connectnav">
        <div className="row text-center padding">
             <div className="col-12">
                 <h2>Connect</h2>
             </div>
             <div className="col-12 social padding">
                 <a href="#"><i className="fab fa-facebook"></i></a>
                 <a href="#"><i className="fab fa-twitter"></i></a>
                 <a href="#"><i className="fab fa-google-plus-g"></i></a>
                 <a href="#"><i className="fab fa-instagram"></i></a>
                 <a href="#"><i className="fab fa-youtube"></i></a>
             </div>
        </div>  
    </div> 
        </div>
    )
}

export default Social;
