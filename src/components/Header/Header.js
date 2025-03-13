import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="hero" smooth={true} duration={500}>
            JD
          </Link>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link 
                to="about" 
                smooth={true} 
                duration={500} 
                offset={-70}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="skills" 
                smooth={true} 
                duration={500} 
                offset={-70}
                onClick={closeMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                to="projects" 
                smooth={true} 
                duration={500} 
                offset={-70}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                offset={-70}
                onClick={closeMenu}
                className="contact-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
      </div>
    </header>
  );
};

export default Header;