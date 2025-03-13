import React from "react";
import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react";
import "./Footer.css";

/**
+ * Footer component for the website
+ * Displays social links, copyright information, and credits
+ */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <Instagram size={20} />
          </a>
        </div>

        <p className="footer-text">
          � {currentYear} My Portfolio. All rights reserved.
        </p>

        <div className="footer-credit">
          {" "}
          Built with
          <span className="footer-heart">
            <Heart size={12} />
          </span>
          by{" "}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Your Name
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
