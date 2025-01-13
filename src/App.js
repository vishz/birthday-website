import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import FrontPage from './components/FrontPage/FrontPage';
import JourneyPage from './components/JourneyPage/JourneyPage';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/journey" element={<JourneyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
