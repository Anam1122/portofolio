// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Global CSS
import './index.css';

// Import Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import Pages (CORRECTED PATHS)
import HomePage from './pages/HomePage/HomePage';             // Path now includes /HomePage/
import PortfolioPage from './pages/PortfolioPage/PortfolioPage'; // Path now includes /PortfolioPage/
import ProjectDetailPage from './pages/ProjectDetailPage/ProjectDetailPage'; // Path now includes /ProjectDetailPage/
import AboutPage from './pages/AboutPage/AboutPage';         // Assuming you will create this as src/pages/AboutPage/AboutPage.jsx
import ContactPage from './pages/ContactPage/ContactPage';     // Assuming you will create this as src/pages/ContactPage/ContactPage.jsx


function App() {
  return (
    <Router>
      <Header />
      <main>
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