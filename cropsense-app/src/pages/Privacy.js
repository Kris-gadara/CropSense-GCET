import React from 'react';
import './Legal.css';

const Privacy = () => {
  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>
      <p className="lead">This policy explains how CropSense AI collects, uses, and protects your information.</p>

      <section>
        <h2>1. Data We Collect</h2>
        <ul>
          <li>Account & contact details you provide.</li>
          <li>Uploaded images, agronomic notes, and field metadata.</li>
          <li>Usage logs and device/browser data for security & performance.</li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use Data</h2>
        <ul>
          <li>Generate insights, diagnostics, and forecasts.</li>
          <li>Improve AI model accuracy (with anonymization where practicable).</li>
          <li>Provide support, security monitoring, and feature development.</li>
        </ul>
      </section>

      <section>
        <h2>3. Sharing</h2>
        <p>We do not sell personal data. Limited sharing with infrastructure providers under confidentiality and data processing agreements.</p>
      </section>

      <section>
        <h2>4. Security</h2>
        <p>We apply encryption in transit, access controls, and monitoring. No system is 100% secure; report concerns to security@cropsense.ai.</p>
      </section>

      <section>
        <h2>5. Retention</h2>
        <p>Data retained while your account is active and as needed for legal or analytical purposes, then deleted or anonymized.</p>
      </section>

      <section>
        <h2>6. Your Choices</h2>
        <ul>
          <li>Request export or deletion of your data.</li>
          <li>Opt out of non-essential communications.</li>
          <li>Restrict certain processing where applicable by law.</li>
        </ul>
      </section>

      <section>
        <h2>7. Children</h2>
        <p>Service not directed to individuals under 16.</p>
      </section>

      <section>
        <h2>8. Changes</h2>
        <p>We will post updates here and adjust the revision date.</p>
      </section>

      <section>
        <h2>9. Contact</h2>
        <p>Privacy inquiries: <a href="mailto:privacy@cropsense.ai">privacy@cropsense.ai</a></p>
      </section>
    </div>
  );
};

export default Privacy;
