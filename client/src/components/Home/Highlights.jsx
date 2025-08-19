import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaPaintBrush, FaSearch, FaArrowRight, FaHandshake, FaTools } from 'react-icons/fa';
import heroImg from '../../assets/web-expert.jpeg';
import '../../styles/highlights.css';

function Highlights() {
  const problems = [
    {
      title: "Your website looks outdated or unprofessional",
      icon: <FaPaintBrush className="icon-indigo" />,
      solution: "Clean, modern designs that are mobile-friendly, accessible, and built to impress your audience from the first click.",
    },
    {
      title: "It’s slow or doesn’t work well on all devices",
      icon: <FaCode className="icon-green" />,
      solution: "Fast, responsive development using modern frameworks like React & Next.js for smooth, scalable performance.",
    },
    {
      title: "No one can find your business online",
      icon: <FaSearch className="icon-yellow" />,
      solution: "Search engine optimization and performance tuning to boost visibility and climb rankings on Google.",
    },
    {
      title: "Your site breaks or needs constant fixes",
      icon: <FaTools className="icon-pink" />,
      solution: "Regular maintenance, security updates, and backups to keep your site stable and safe 24/7.",
    },
    {
      title: "You’re not tracking what’s working",
      icon: <FaSearch className="icon-blue" />,
      solution: "Analytics integration to monitor visitor behavior and make data-driven improvements.",
    },
    {
      title: "You’re unsure what direction to take",
      icon: <FaHandshake className="icon-red" />,
      solution: "1-on-1 consultations to clarify your goals, define your strategy, and guide you through the process.",
    },
  ];

  return (
    <div className="highlights-section" id="some">
      <div className="highlights-container">

        <div className="highlights-flex">
          {/* Sidebar Image */}
          <aside className="highlights-aside">
            <img
              src={heroImg}
              alt="Web Developer Kibugi"
              className="highlights-img"
            />
          </aside>

          {/* Main Content */}
          <section className="highlights-content">
            
            {/* Intro */}
            <div>
              <h2 className="highlights-title">
                Solving Real Problems With Smart Web Solutions
              </h2>
              <p className="highlights-intro">
                Many businesses lose opportunities because their websites are slow, outdated, or hard to find.  
                Here’s how I turn those challenges into growth.
              </p>
            </div>

            {/* Problem → Solution Grid */}
            <div className="highlights-grid">
              {problems.map((item, index) => (
                <div key={index} className="highlights-card">
                  <div className="highlights-card-header">
                    {item.icon}
                    <h3 className="highlights-card-title">{item.title}</h3>
                  </div>
                  <p className="highlights-card-text">
                    <strong className="solution-label">Solution:</strong> {item.solution}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
           

          </section>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
