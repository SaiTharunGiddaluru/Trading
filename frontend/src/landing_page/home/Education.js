import React from "react";

function Education() {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-6 mt-5 mb-5">
            <img src="media\images\education.svg" alt="random" />
          </div>

          <div className="col-6 mt-5 mb-5">
            <h2 className="mt-5   fs-3">Free and open market education</h2>
            <p className="text-muted">
              Varsity, the largest online stock market education book in the
              world <br />
              covering everything from the basics to advanced trading.
            </p>
            <a
              style={{ textDecoration: "none", margin: "0", display: "block" }}
              href="sdsjs/"
            >
              Varsity <i className="fa-solid fa-arrow-right"></i>
            </a>
            <h2 className="mt-5  mb-3 fs-3">Unbeatable pricing</h2>
            <p className="text-muted">
              TradingQ&A, the most active trading and investment community in{" "}
              <br />
              India for all your market related queries.
            </p>
            <a
              style={{ textDecoration: "none", margin: "0", display: "block" }}
              href="sdsjs/"
            >
              TradingQ&A <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
