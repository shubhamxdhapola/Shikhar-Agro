import React from 'react';

const Footer = () => {


  return (
    <footer className='bg-gray-800'>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Shikhar Agro</h3>
          <p>Your trusted partner in agricultural excellence.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
            <li><a href="#offer" onClick={(e) => { e.preventDefault(); scrollToSection('offer'); }}>Special Offer</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: info@shikharagro.com</p>
          <p>Phone: +91 12345 56789</p>
          <p>Address: Jabalpur, Madhya Pradesh, India</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Shikhar Agro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 