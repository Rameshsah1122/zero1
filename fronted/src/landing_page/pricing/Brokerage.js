import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-4 mt-4 text-center border-top">
        <div className="col-8 p-4">
            <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">Brokerage calculator</h3>
            <ul style={{textAlign:"left",lineHeight:"2.8",fontSize:"12px"}} className="text-muted">
              <li>call & Trade and RMS auto-squareoff: Additional charges of ₹50 and + GST per order.</li>
              <li>Digital contract notes will be sent via e-mail</li>
              <li>Physical copies of contract notes,if required,shall be charged ₹20 per contract note.Courier charges apply.</li>
              <li>For NRI account (non-PIS), O.5% OR ₹100 per executed order for equity(whichever is lower)</li>
              <li>For NRI account (PIS), O.5% OR ₹200 per executed order for equity</li>
              <li>if the accoutn is in debit balance </li>

            </ul>
            </a>
        </div>
        <div className="col-4 p-3">
            <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">List of Charges</h3></a>
        </div>
      </div>
    </div>
  );
}<a href=""></a>

export default Brokerage;
