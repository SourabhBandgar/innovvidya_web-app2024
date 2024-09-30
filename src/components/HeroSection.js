import React from "react";
import { useSpring, animated } from "react-spring"; // For animations
import { Link } from "react-scroll"; // Import react-scroll for smooth scrolling
import "./HeroSection.css";

const HeroSection = () => {
  // Animation for fade-in effect
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });

  // Animation for slide-in effect
  const slideIn = useSpring({
    transform: "translateY(0)",
    from: { transform: "translateY(20px)" },
    delay: 700,
  });

  return (
    <section className="hero-section" id="hero-section">
      <div className="hero-content">
        <animated.h1 style={fadeIn}>
          Revolutionizing Education to Reduce Dropout Rates
        </animated.h1>
        <animated.p style={slideIn}>
          Delivering quality education through AI-driven insights that identify
          and resolve dropout challenges, while fostering student engagement
          with innovative platforms like Edu-Lance and skill-based freelancing.
        </animated.p>

        {/* Updated CTA button with react-scroll */}
        <animated.div className="cta-buttons" style={slideIn}>
          <Link
            to="innovative-solutions" // The section ID for Innovative Solutions
            smooth={true}
            duration={500}
            className="btn btn-secondary animated-cta"
          >
            Explore Innovative Solutions
          </Link>
        </animated.div>
      </div>

      <div className="hero-image">
        <img src="/images/hero-image.png" alt="Empowering Education" />
      </div>
    </section>
  );
};

export default HeroSection;
