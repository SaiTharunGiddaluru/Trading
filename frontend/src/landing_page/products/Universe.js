import React from "react";
function Universe() {
  return (
    <>
      <div className="container mt-5">
        <div className="row text-center">
          <h1 className="mt-5  ">The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="row mt-5 p-5">
          <div className="col-4 p-5">
            <img
              style={{ width: "300px", height: "100px" }}
              src="media/images/zerodhaFundhouse.png"
            />

            <p className="mt-3">
              {" "}
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              style={{ width: "300px", height: "100px" }}
              src="media/images/sensibullLogo.svg"
            />
            <p className="mt-3">
              {" "}
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              style={{ width: "300px", height: "100px" }}
              src="media/images/tijori.svg"
            />
            <p className="mt-3">
              {" "}
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              style={{ width: "300px", height: "100px" }}
              src="media/images/streakLogo.png"
            />

            <p className="mt-3">
              {" "}
              Systematic trading platform that allows you to create and backtest
              strategies without coding. 
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              style={{ width: "300px", height: "80px",  marginBottom:"20px"}}
              src="media/images/smallcaseLogo.png"
            />
            <p className="mt-3">
              {" "}
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              style={{ width: "300px", height: "100px" }}
              src="media/images/dittoLogo.png"
            />
            <p className="mt-3">
              {" "}
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up now
            </p>
          </div>

          <button
          type="button"
          class="btn btn-primary p-2 mb-5 fs-5"
          style={{ width: "15%", margin: "0 auto", minWidth: "150px" }}
        >
          Sign Up Now
        </button>
        </div>
      </div>
    </>
  );
}

export default Universe;
