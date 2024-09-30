import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      {/* Home Button */}
      <div className="home-button">
        <Link to="/" className="btn-home">
          Home
        </Link>
      </div>

      <div className="notice-judges">
        <p>
          This demo showcases the structure of our platform. The landing page
          highlights our solution to reduce dropout rates, and this login page
          demonstrates the different users who will interact with our system.
        </p>
      </div>

      <div className="login-container">
        <div className="login-image">
          <img src="/images/login-image.png" alt="Login illustration" />
        </div>

        <div className="login-form">
          <h2>Login to InnovVidya</h2>
          <div className="user-selection">
            <button className="user-btn">Student</button>
            <button className="user-btn">Educator</button>
            <button className="user-btn">Parent</button>
            <button className="user-btn">Admin</button>
            <button className="user-btn">Opportunity Provider</button>
          </div>

          <form>
            <label>Email ID</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" />

            <div className="login-options">
              <div>
                <input type="checkbox" id="rememberMe" />
                Remember me
              </div>
              {/* <a href="/forgot-password" className="forgot-password"> */}
              Forgot Password?
              {/* </a> */}
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <div className="social-login">
            <p>OR</p>
            <button className="social-btn google-btn">Login with Google</button>
            <button className="social-btn facebook-btn">
              Login with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
