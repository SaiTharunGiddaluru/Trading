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
      const { data } = await axios.post(
        "https://trading-1-21my.onrender.com/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        window.location.href = "http://localhost:3001";
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
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
