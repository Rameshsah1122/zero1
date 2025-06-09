import React from 'react';

function RightSection({imageURL,productName,productDescription,learnMore}) {
    return ( 
        <div className='container'>
        <div className='row'>
            <div className='col-6  mt-5' style={{padding:"7em"}}>
                <h1 className='mb-4'>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                <a href={learnMore} style={{marginLeft:"100px",textDecoration:"none"}}>Learn More<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
            <div className='col-6' style={{marginTop:"50px"}}>
                <img src={imageURL} />
            </div>
        </div>
       </div>
     );
}

export default RightSection;