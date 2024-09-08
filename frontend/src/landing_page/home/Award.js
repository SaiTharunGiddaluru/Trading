import React from "react";
function Award() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              className="mb-5"
              src="media/images/largestBroker.svg"
              alt="logo"
            />
          </div>
          <div className="col-6 mt-5 ">
            <h1 className="mb-4">Largest Stock Broker In India</h1>
            <p>
              2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </p>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>
                    <p> Futures and Options</p>
                  </li>
                  <li>
                    <p>Commodity derivatives</p>
                  </li>
                  <li>
                    <p>Currency derivatives</p>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    <p> Stocks & IPO's</p>
                  </li>
                  <li>
                    <p> Direct Mutual Funds</p>
                  </li>
                  <li>
                    <p>Bonds and Govt. Securities</p>
                  </li>
                </ul>
              </div>
            </div>
            <img
              className="mt-3 "
              style={{ width: "85%" }}
              src="media\images\pressLogos.png "
              alt="logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Award;
