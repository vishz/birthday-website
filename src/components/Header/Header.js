import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Poose & Kavish Love Story ❤️</h1>
      <nav>
        <Link to="/journey" className="start-journey-btn">
          Start the Journey
        </Link>
      </nav>
    </header>
  );
}

export default Header;
