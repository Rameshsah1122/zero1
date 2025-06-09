import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-2 m-2">
        <div className="col-6 p-5">
          <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
          <input className="p-2 m-1" placeholder="Eg. how do i activate F&O" /><br></br>
        
        <a href="" style={{marginRight:"1rem"}}>Track account opening</a>
        <a href=""style={{marginRight:"1rem"}}>Track segment activation</a>
        <a href="" style={{marginRight:"1rem"}}>Intraday margins</a>
        <a href="" style={{marginRight:"1rem"}}>Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li> <a href="">Change in expiry day of NSE derivative contracts from April 04, 2025 [Withheld]</a></li>
            <li> <a href="">Rights Entitlements listing in April 2025</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
