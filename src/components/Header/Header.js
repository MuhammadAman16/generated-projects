import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Navigation links
  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="hero" smooth={true} duration={500}>JD</Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            {navLinks.map((link, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link 
                  to={link.to} 
                  smooth={true} 
                  duration={500} 
                  offset={-70}
                  activeClass="active"
                  spy={true}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link, index) => (
            <Link key={index} to={link.to} smooth={true} duration={500} offset={-70} onClick={closeMenu}>{link.name}</Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;