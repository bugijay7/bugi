import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import john from '../../assets/hero2.jpg';
import '../../styles/hero.css';

function Hero() {
  return (
    <div className="hero-container">
      {/* Main Hero Section */}
      <section className="hero-content">
        {/* Left: Text + Buttons */}
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="highlight-word">Interactive</span> Web Solutions
          </h1>
          <p className="title-text">
            "Your website should be your most reliable team member<br></br>always ready, <br></br>always working."
          </p>

         

          <div className="hero-buttons">
            <HashLink smooth to="#some">
              <button className="hero-btn">Get Started</button>
            </HashLink>
            <Link to="/work">
              <button className="hero-btn secondary">See What I Do</button>
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hero-image-wrapper">
          <img
            src={john}
            alt="Kibugi Maina"
            className="hero-image"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
