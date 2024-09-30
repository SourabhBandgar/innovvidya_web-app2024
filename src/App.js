import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; // Import global styles
import Header from "./components/Header"; // Import the Header component
import HeroSection from "./components/HeroSection"; // Import the HeroSection component
import InnovativeSolutions from "./components/InnovativeSolutions"; // Import the InnovativeSolutions component
import Features from "./components/Features"; // Import the Features component
import AboutUs from "./components/AboutUs"; // Import the AboutUs component
import Footer from "./components/Footer"; // Import the Footer component
import LoginPage from "./components/pages/LoginPage"; // Import the LoginPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for landing page */}
          <Route
            path="/"
            element={
              <>
                <Header fullHeader={true} /> {/* Full Header */}
                <HeroSection />
                <InnovativeSolutions />
                <Features />
                <AboutUs />
                <Footer />
              </>
            }
          />

          {/* Route for login page */}
          <Route
            path="/login"
            element={
              <>
                <Header fullHeader={false} /> {/* Logo only */}
                <LoginPage />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
