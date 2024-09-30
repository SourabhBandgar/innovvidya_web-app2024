import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Import the react-scroll Link
import { Link as RouterLink, useLocation } from "react-router-dom"; // Import the react-router Link and useLocation
import "./Header.css";

const Header = () => {
  const location = useLocation(); // Get current route path

  // Only show the header on pages other than login
  if (location.pathname === "/login") {
    return null; // Do not render the header on the login page
  }

  return (
    <header className="site-header">
      <div className="logo-container">
        <RouterLink to="/">
          {/* This ensures that the logo also redirects to the home page */}
          <img src="/images/logo.png" alt="InnovVidya Logo" className="logo" />
        </RouterLink>
        <span className="logo-text">InnovVidya</span>
      </div>
      <nav className="main-navigation">
        <ul>
          <li>
            <ScrollLink
              to="hero-section" // The section ID
              smooth={true} // Enable smooth scrolling
              duration={500} // Set scroll duration in milliseconds
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="innovative-solutions" // The section ID for Solutions
              smooth={true}
              duration={500}
            >
              Solutions
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="features" // The section ID for Features
              smooth={true}
              duration={500}
            >
              Features
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about-us" // The section ID for About Us
              smooth={true}
              duration={500}
            >
              About Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="footer" // The section ID for Contact Us (Footer)
              smooth={true}
              duration={500}
            >
              Contact Us
            </ScrollLink>
          </li>
        </ul>
      </nav>
      <div className="login-btn">
        <RouterLink to="/login" className="btn btn-primary">
          Login
        </RouterLink>
        {/* This redirects to the login page */}
      </div>
    </header>
  );
};

export default Header;
