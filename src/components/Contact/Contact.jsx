import React from 'react';
import './Contact.css';

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="breadcrumb">
        <p>You are here &gt; <a href="/">Home</a> &gt; Contact Us</p>
      </div>

      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-content">
        <h2>Stay Connected with sarkari result...</h2>
        <h3>Feel Free to reach out to us...</h3>
        <h3>For any inquiries or feedback...</h3>

        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="info-text">
              <h4>Our Location</h4>
              <p>123 Education Street, New Delhi, India</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div className="info-text">
              <h4>Email Us</h4>
              <p>contact@sarkariresult.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div className="info-text">
              <h4>Call Us</h4>
              <p>+91 1234567890</p>
            </div>
          </div>
        </div>
      </div>

      <div className="thank-you">
        <p>Thank You For Visiting</p>
      </div>
    </div>
  );
};

export default ContactUs;
