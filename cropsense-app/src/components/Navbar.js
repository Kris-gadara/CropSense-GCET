import React from 'react';
import './Navbar.css';
import logo from '../crop-logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="nav-links">
          <li className="nav-item dropdown">
            <span className="nav-trigger">Generate</span>
            <div className="dropdown-panel">
              <div className="dropdown-group">
                <span className="dropdown-label">Generate</span>
                <a href="#generate-info">Info to Generate</a>
                <a href="#generate-image">Image to Image</a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-trigger">Diseases</span>
            <div className="dropdown-panel">
              <div className="dropdown-group">
                <span className="dropdown-label">Diseases</span>
                <a href="#disease-info">Info to Disease</a>
                <a href="#disease-image">Image to Disease</a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-trigger">Financial</span>
            <div className="dropdown-panel">
              <div className="dropdown-group">
                <span className="dropdown-label">Financial</span>
                <a href="#yield">Yield Analytics</a>
                <a href="#costs">Cost & Inputs</a>
                <a href="#market">Market Trends</a>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <Link to="/" className="app-brand" aria-label="Go to Home">
          <img src={logo} alt="CropSense AI Logo" className="navbar-logo" />
          <span className="app-name">CropSense AI</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
