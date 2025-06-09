import React from 'react';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
       <div className='container'>
        <div className='row'>
            <div className='col-6' style={{marginTop:"50px"}}>
                <img src={imageURL} />
            </div>
            <div className='col-6  mt-5' style={{padding:"7em"}}>
                <h1 className='mb-4'>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                <a href={learnMore} style={{marginLeft:"100px",textDecoration:"none"}}>Learn More<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='mt-4'>
                <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'  /></a>
                <a href={appStore}><img src='media/images/appstoreBadge.svg' style={{marginLeft:"50px"}}/></a>
                </div>
            </div>
        </div>
       </div>
     );
}

export default LeftSection;