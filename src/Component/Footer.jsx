import React from "react";
import "./footer.css";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <div id="container">
          <div id="footer-content">
            <div id="footer-section">
              <h3>About Us</h3>
              <p>Your news source for the latest updates and information.</p>
            </div>
            <div id="footer-section">
              <h3>Categories</h3>
              <ul>
                <li>Politics</li>
                <li>Technology</li>
                <li>Entertainment</li>
                <li>Science</li>
                {/* Add more categories as needed */}
              </ul>
            </div>
            <div id="footer-section">
              <h3>Contact Us</h3>
              <p>Email: info@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
        <div id="footer-bottom">
          <p>&copy; 2024 Your News Website. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
