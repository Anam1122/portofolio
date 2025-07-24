// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Styles
import './index.css';

// Layout Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import HomePage from './pages/HomePage/HomePage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ProjectDetailPage from './pages/ProjectDetailPage/ProjectDetailPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <Router>
      <Header />

      <main style={{ flex: '1 0 auto' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:projectId" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
