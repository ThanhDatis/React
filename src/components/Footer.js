import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h2><span>Dev</span>Portfolio</h2>
              <p>Creating innovative web experiences that make a difference.</p>
              <div className="social-links">
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h3>Services</h3>
                <ul>
                  <li><a href="#services">Web Development</a></li>
                  <li><a href="#services">Frontend Development</a></li>
                  <li><a href="#services">UI/UX Design</a></li>
                  <li><a href="#services">React Applications</a></li>
                  <li><a href="#services">E-commerce Solutions</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h3>Contact Info</h3>
                <ul className="contact-info">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>123 Web Street, Digital City</span>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <span>contact@devportfolio.com</span>
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    <span>+1 234 567 890</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} DevPortfolio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 