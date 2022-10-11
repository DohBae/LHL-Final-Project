
import React, { useState, useEffect } from "react"
import './Auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const navigate = useNavigate();
  const [authMode, setAuthMode] = useState("signin");
  // login values. these get sent to the back end
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // register values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [regPassword, setRegPassword] = useState("");


  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("/api/login", { email, password })
      .then((result) => {
        const user = result.data.user
        if (user) {
          localStorage.setItem("notifyUser", JSON.stringify(user))
          navigate("/dashboard")
        }
      })
  }

  const handleRegSubmit = (e) => {
    e.preventDefault()
    axios.post("/api/register", { firstName, lastName, email: regEmail, phoneNumber, password: regPassword })
      .then((result) => {
        const user = result.data
        if (user) {
          localStorage.setItem("notifyUser", JSON.stringify(user))
          window.location.reload()
        }
      })
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content-head">
            <h3 className="Auth-form-title">Welcome to Notify</h3>
            <h5 className="Auth-form-body">Please sign in to begin collaborating with your peers.</h5>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
          </div>
          <div className="Auth-form-content-foot">

            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={email} onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password} onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleRegSubmit}>
        <div className="Auth-form-content-head">
          <h3 className="Auth-form-title">Welcome to Notify</h3>
          <h5 className="Auth-form-body">Notify is a website that allows studetns to share their notes with fellow classmates!
            Please sign in or register down below to get sharing today!</h5>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
        </div>
        <div className="Auth-form-content-foot">

          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="first-name"
              className="form-control mt-1"
              placeholder="First Name"
              value={firstName} onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="last-name"
              className="form-control mt-1"
              placeholder="Last Name"
              value={lastName} onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              value={regEmail} onChange={(e) => setRegEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Phone Number</label>
            <input
              type="phone-number"
              className="form-control mt-1"
              placeholder="Phone Number"
              value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={regPassword} onChange={(e) => setRegPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default Auth