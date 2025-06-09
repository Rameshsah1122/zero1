import React from 'react';

function Hero() {
    return ( 
       <div className='container text-center border-bottom' style={{marginTop:"5em",marginBottom:"3em"}}>
            <h1>Zerodha Products</h1>
            <h4 className='text-muted mt-3'>Sleek, modern, and intuitive trading platforms</h4>
            <p className='mt-3'>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right-long"></i></a></p>
       </div>
     );
}

export default Hero;