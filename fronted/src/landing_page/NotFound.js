import React from 'react';

function NotFound() {
    return ( 
        <div className='container p-5 mb-5'>
        <div className='row text-center'>
            <h1 className='mt-5' style={{color:"red"}}> 404 Not exists!🥹</h1>
            <p className='mt-3' style={{color:"red"}}>Sorry, the page you are looking for does not exists.</p>
            
        </div>

    </div>
     );
}

export default NotFound;