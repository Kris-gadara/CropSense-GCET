import React from 'react';
import './Footer.css';
import logo from '../crop-logo.svg';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="CropSense AI" className="footer-logo" />
          <div>
            <h2 className="footer-title">CropSense AI</h2>
            <p className="footer-tagline">Green Intelligence for Smarter Farming</p>
          </div>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              <li><a href="#generate">Generate Insights</a></li>
              <li><a href="#diseases">Disease Detection</a></li>
              <li><a href="#financial">Financial Tracking</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#guides">Guides</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:info@cropsense.ai">info@cropsense.ai</a></li>
              <li><a href="#community">Community</a></li>
              <li><a href="#feedback">Feedback</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} CropSense AI. All rights reserved.</p>
        <div className="legal-links">
          <a href="#privacy">Privacy</a>
          <span>•</span>
            <a href="#terms">Terms</a>
          <span>•</span>
          <a href="#about">About</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
