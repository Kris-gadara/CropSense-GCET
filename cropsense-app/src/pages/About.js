import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About CropSense AI</h1>
        <p>Blending agronomy, data science, and green intelligence to empower sustainable farming.</p>
      </div>

      <section className="about-grid">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>Help farmers and agribusinesses make smarter, faster, and environmentally conscious decisions with actionable AI insights.</p>
        </div>
        <div className="about-card">
          <h3>What We Do</h3>
          <p>We analyze imagery, climate data, soil patterns, and operational metrics to detect diseases early, optimize inputs, and project yield & financial performance.</p>
        </div>
        <div className="about-card">
          <h3>Why It Matters</h3>
          <p>Food security and sustainability are global priorities. CropSense AI reduces waste, improves resource efficiency, and supports resilient agriculture.</p>
        </div>
        <div className="about-card">
          <h3>Core Capabilities</h3>
          <ul>
            <li>Image-based disease diagnostics</li>
            <li>AI-guided input recommendations</li>
            <li>Yield forecasting & financial dashboards</li>
            <li>Carbon & sustainability metrics (coming soon)</li>
          </ul>
        </div>
      </section>

      <section className="about-values">
        <h2>Values & Principles</h2>
        <div className="values-row">
          <div className="value-item">
            <h4>Precision</h4>
            <p>Data-driven accuracy for field-level decisions.</p>
          </div>
          <div className="value-item">
            <h4>Transparency</h4>
            <p>Readable insights, explainable AI outputs.</p>
          </div>
          <div className="value-item">
            <h4>Sustainability</h4>
            <p>Lower inputs, healthier soils, greener future.</p>
          </div>
          <div className="value-item">
            <h4>Innovation</h4>
            <p>Continuous improvement with farmer feedback.</p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Work With Us</h2>
        <p>We partner with growers, agronomists, researchers, and agri-fintech innovators. Join our pilot programs or suggest a feature.</p>
        <a className="cta-button" href="mailto:info@cropsense.ai">Get in Touch</a>
      </section>
    </div>
  );
};

export default About;
