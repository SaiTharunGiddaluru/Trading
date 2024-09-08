import React from "react";
function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center mb-5">
        <img
          className="mb-5"
          src="media/images/homeHero.png"
          alt="Hero Logo"
          style={{ width: "70rem", margin: "0 auto" }}
        />

        <h1>Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          type="button"
          class="btn btn-primary p-2 mb-5 fs-5"
          style={{ width: "15%", margin: "0 auto", minWidth: "150px" }}
        >
          Sign Up Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
