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
import GettingStarted from './Pages/GettingStarted'
import Process from './Pages/about/Process'
import CreativeProcess from './Pages/about/CreativeProcess'
import Pricings from './Pages/Pricings'
import Website from './Pages/Website'
import WhatsappFloat from './components/WhatsappFloat'

import PortfolioForms from './Pages/ClientForms/PortfolioForms'
import BrandForms from './Pages/ClientForms/BrandForms'
import StoreForms from './Pages/ClientForms/StoreForms'
import CauseForms from './Pages/ClientForms/CauseForms'

import AdminHome from '../src/Pages/AdminHome';
import GetConsultation from '../src/Pages/Admin/Consultations';
import GetBrands from '../src/Pages/Admin/Brands';
import GetCauses from '../src/Pages/Admin/Causes';
import GetPortfolio from '../src/Pages/Admin/Portfolio';
import GetStores from '../src/Pages/Admin/Stores';

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
         <Route path="/start" element={<GettingStarted />} />
         <Route path="/pricings" element={<Pricings />} />
         <Route path="/about/process" element={<Process />} />
         <Route path="/website" element={<Website />} />
         <Route path="/about/creative-process" element={<CreativeProcess />} />
         <Route path="/ClientForms/PortfolioForms" element={<PortfolioForms />} />
         <Route path="/ClientForms/BrandForms" element={<BrandForms />} />
         <Route path="/ClientForms/StoreForms" element={<StoreForms />} />
         <Route path="/ClientForms/CauseForms" element={<CauseForms />} />
         <Route path="/bugijay7" element={<AdminHome />} />
        <Route path="/admin/consultations" element={<GetConsultation />} />
        <Route path="/admin/brands" element={<GetBrands />} />
        <Route path="/admin/causes" element={<GetCauses />} />
        <Route path="/admin/portfolios" element={<GetPortfolio />} />
        <Route path="/admin/stores" element={<GetStores />} />
      </Routes>
      <WhatsappFloat />
      <Footer />
    </Router>
  );
}

export default App;
