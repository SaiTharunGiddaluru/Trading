import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const Login = () => {

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  let toastId = null;  // To store the active toast ID

const handleError = (err) => {
  if (!toast.isActive(toastId)) {
    toastId = toast.error(err, {
      position: "bottom-left",
    });
  }
};

const handleSuccess = (msg) => {
  if (!toast.isActive(toastId)) {
    toastId = toast.success(msg, {
      position: "bottom-right",
    });
  }
};

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        window.location.href = "http://localhost:3001"; // Redirect to dashboard
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      handleError("Login failed. Please try again.");
    }
    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="containerformLogin">

 
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="row justify-content-center w-100">
        <div className="col-md-8 col-lg-6 col-xl-4">
          <div className="card p-4">
            <h2 className="text-center mb-4">Login Account</h2>
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
                  required
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
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit</button>
              <div className="text-center mt-3">
                <span>
                  Don't have an account? <Link to={"/signup"}>Signup</Link>
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

export default Login;
