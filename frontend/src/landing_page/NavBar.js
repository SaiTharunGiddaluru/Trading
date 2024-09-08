import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
   
      <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom p-2 sticky-top ">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src="media/images/logo.svg" alt="$4" style={{width:"20%" ,marginLeft:"4rem"}}/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item mr-5">
                
                <Link class="nav-link active" aria-current="page" to="/login">
                 Login
                </Link>
              </li>
              <li class="nav-item mr-5">

                <Link class="nav-link active" aria-current="page" to="/signup">
                 Sign Up
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/about">
                 About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/pricing">
                 Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/support">
                 Support
                </Link>
              </li>
            </ul>
            
            
            </form>
          </div>
        </div>
      </nav>
   
  );
}

export default Navbar;
