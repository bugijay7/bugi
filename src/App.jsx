import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Services from './Pages/Services'
import Work from './Pages/Work'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    const targets = document.querySelectorAll('.scroll-fade');
    targets.forEach(el => observer.observe(el));

    return () => {
      targets.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <Router>
        <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
