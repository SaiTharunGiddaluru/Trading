import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const Signup = () => {

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Log input values to confirm they are being passed correctly
        console.log("Input Values:", inputValue);
    
        const { data } = await axios.post(
          "https://trading-1-21my.onrender.com/signup",
          {
            ...inputValue,
          },
          { withCredentials: true }
        );
        
        console.log("Response Data:", data); // Log the server response
    
        const { success, message } = data;
        
        if (success) {
          handleSuccess(message);
          
          // Delay the redirect slightly to ensure the toast is shown
          setTimeout(() => {
            window.location.href = "https://main--tradesmart1.netlify.app/";
          }, 1000);
          
        } else {
          handleError(message);
        }
      } catch (error) {
        console.log("Error during signup:", error);
      }
    
      // Clear the form after submission
      setInputValue({
        email: "",
        password: "",
        username: "",
      });
    };
    
  return (
    <div className="containerformSignup">

    
    <div className="container p-0 d-flex justify-content-center align-items-center">
      <div className="row justify-content-center w-100">
        <div className="col-md-8 col-lg-6 col-xl-4">
          <div className="card p-4">
            <h3 className="text-center mb-4">Signup Account</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  className="form-control"
                  id="username"
                  placeholder="Enter your username"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Sign Up</button>
              <div className="text-center mt-3">
                <span>
                  Already have an account? <Link to={"/login"}>Login</Link>
                </span>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Signup;
