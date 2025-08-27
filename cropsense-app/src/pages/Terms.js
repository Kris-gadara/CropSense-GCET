import React from 'react';
import './Legal.css';

const Terms = () => {
  return (
    <div className="legal-page">
      <h1>Terms of Service</h1>
      <p className="lead">Welcome to CropSense AI. By accessing or using our platform you agree to these Terms.</p>

      <section>
        <h2>1. Acceptance</h2>
        <p>Use of the platform constitutes acceptance of these Terms and any referenced policies.</p>
      </section>

      <section>
        <h2>2. Services</h2>
        <p>We provide decision support tools including crop insight generation, disease detection assistance, and financial analytics. Outputs are advisory and should be validated in-field.</p>
      </section>

      <section>
        <h2>3. User Responsibilities</h2>
        <ul>
          <li>Provide accurate input data.</li>
          <li>Follow local regulations for agri-chemicals and sustainability.</li>
          <li>Do not misuse or attempt to reverse engineer the service.</li>
        </ul>
      </section>

      <section>
        <h2>4. Data & Content</h2>
        <p>You retain ownership of input data. You grant us a license to process data for model improvement, anonymized where feasible. We may aggregate and anonymize data for analytics.</p>
      </section>

      <section>
        <h2>5. No Warranties</h2>
        <p>Service is provided "as is" without warranties of accuracy, fitness, or availability. Agronomic outcomes can vary with uncontrollable factors.</p>
      </section>

      <section>
        <h2>6. Limitation of Liability</h2>
        <p>To the maximum extent permitted, we are not liable for lost profits, crop loss, or indirect damages arising from use of the platform.</p>
      </section>

      <section>
        <h2>7. Termination</h2>
        <p>We may suspend or terminate accounts for policy violations or abusive usage. You may stop using the service at any time.</p>
      </section>

      <section>
        <h2>8. Changes</h2>
        <p>We may update these Terms. Continued use after changes constitutes acceptance.</p>
      </section>

      <section>
        <h2>9. Contact</h2>
        <p>Questions: <a href="mailto:legal@cropsense.ai">legal@cropsense.ai</a></p>
      </section>
    </div>
  );
};

export default Terms;
