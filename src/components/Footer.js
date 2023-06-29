import React from 'react';
import { FaFacebook, FaTwitter, FaTiktok, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bar-footer">
      <div className="footer-center">
        <p className="footer-text">
          copyright &copy; <span>vinh tran bar</span> all right reserved!
        </p>
        <ul className="nav-icons">
          <li>
            <FaFacebook className="social-icon" />
          </li>
          <li>
            <FaTwitter className="social-icon" />
          </li>
          <li>
            <FaTiktok className="social-icon" />
          </li>
          <li>
            <FaInstagram className="social-icon" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
