import React from "react";
import "./policy.css";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../components/ThemeSwitcher";

const Policy = () => {
  return (
    <div className="privacy-policy-container">
     
              
                <ThemeSwitcher/>
                <Link to="/" className="home-link-policy">Home</Link>
      <h1 className="privacy-policy-title">FOTIA Privacy Policy</h1>
     

      <section className="privacy-section">
        <h2>Introduction</h2>
        <p>
          At  <a href="https://fotia.ai/">Fotia.ai</a> , Your privacy is our foremost priority. This Privacy Policy
          explains how we collect, use, and protect your personal information
          when you interact with our cryptocurrency investment platform.
        </p>
      </section>

      <section className="privacy-section">
        <h2> Information We Collect</h2>
        <h3>Personal Information:</h3>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number </li>
      
          <li>Cryptocurrency wallet addresses</li>
        </ul>
        <h3>Transaction Information:</h3>
        <ul>
          <li>Transaction history</li>
          <li>Wallet balances</li>
          <li>Trading activity</li>
        </ul>
      
      </section>

      <section className="privacy-section">
        <h2> How We Use Your Information</h2>
        <h3>We use your information to:</h3>
        <ul>
          <li>Provide and improve our services</li>
       
          <li>Process transactions securely</li>
         
         
          <li>Send updates about our services and platform</li>
        </ul>
      </section>

    

      <section className="privacy-section">
        <h2> Cookies and Tracking Technologies</h2>
        <h3>We use cookies to:</h3>
        <ul>
          <li>Enhance your experience on Fotia.ai</li>
          <li>Track website usage for analytics</li>
          <li>Optimize platform performance</li>
        </ul>
        <p>You can manage cookie preferences through your browser settings.</p>
      </section>

      <section className="privacy-section">
        <h2>Data Security</h2>
        <h3>We employ industry-standard security measures to protect your information:</h3>
        <ul>
          <li>Encryption of sensitive data</li>
          <li>Secure Sockets Layer (SSL) for secure communication</li>
          <li>Two-Factor Authentication (2FA)</li>
          <li>Regular security audits</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>Your Rights</h2>
        <h3>You have the right to:</h3>
        <ul>
          <li>Access and correct your personal information</li>
          <li>Request deletion of your data</li>
  
          <li>Withdraw consent for data processing</li>
        </ul>
        <p>To exercise these rights, contact us </p>
      </section>

      <section className="privacy-section">
        <h2> Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date.</p>
      </section>

      <section className="privacy-section">
        <h2>Contact Us</h2>
        <p>If you have questions or concerns regarding this Privacy Policy, please reach out to us at:</p>
        <ul>
          <li>Email: <a href="mailto:support@fotia.ai"> support@fotia.cloud</a></li>
        
        </ul>
      </section>
    </div>
  );
};

export default Policy;
